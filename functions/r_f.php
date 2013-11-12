<?php
//error_reporting(0);
global $repdb_connected;
$repdb_connected=0;

function ad_request($data){
global $request_settings;

prepare_r_hash();

if (!isset($data['rt'])){
$data['rt']='';
}

if (isset($data['p'])){
$request_settings['referer']=$data['p'];
} else {
$request_settings['referer']='';
}

if (isset($data['longitude'])){
$request_settings['longitude']=$data['longitude'];
} else {
$request_settings['longitude']='';
}

if (isset($data['latitude'])){
$request_settings['latitude']=$data['latitude'];
} else {
$request_settings['latitude']='';
}


if (isset($data['iphone_osversion'])){
$request_settings['iphone_osversion']=$data['iphone_osversion'];
}

if (!isset($data['sdk']) or ($data['sdk']!='banner' && $data['sdk']!='vad')){
$request_settings['sdk']='banner';
}
else {
$request_settings['sdk']=$data['sdk'];	
}
	
/*Identify Response Type*/
switch ($data['rt']){
case 'javascript':
$request_settings['response_type']='json';
$request_settings['ip_origin']='fetch';
break;

case 'json':
$request_settings['response_type']='json';
$request_settings['ip_origin']='fetch';
break;

case 'iphone_app':
$request_settings['response_type']='xml';
$request_settings['ip_origin']='fetch';
break;

case 'android_app':
$request_settings['response_type']='xml';
$request_settings['ip_origin']='fetch';
break;

case 'ios_app':
$request_settings['response_type']='xml';
$request_settings['ip_origin']='fetch';
break;

case 'ipad_app':
$request_settings['response_type']='xml';
$request_settings['ip_origin']='fetch';
break;

case 'xml':
$request_settings['response_type']='xml';
$request_settings['ip_origin']='request';
break;

case 'api':
$request_settings['response_type']='xml';
$request_settings['ip_origin']='request';
break;

case 'api-fetchip':
$request_settings['response_type']='xml';
$request_settings['ip_origin']='fetch';
break;

default:
$request_settings['response_type']='html';
$request_settings['ip_origin']='request';
break;

}

if (MAD_MAINTENANCE){
noad();
}

if (!check_input($data)){
global $errormessage;
print_error(1, $errormessage, $request_settings['sdk'], 1);
return false;
}

global $zone_detail;

$zone_detail=get_placement($data);

if (!$zone_detail){
global $errormessage;
print_error(1, $errormessage, $request_settings['sdk'], 1);
return false;
}

$request_settings['adspace_width']=$zone_detail['zone_width'];
$request_settings['adspace_height']=$zone_detail['zone_height'];

$request_settings['channel']=getchannel();

update_last_request();

set_geo($request_settings['ip_address']);

set_device($request_settings['user_agent']);

build_query();

if ($campaign_query_result=launch_campaign_query($request_settings['campaign_query'])){
if (!process_campaignquery_result($campaign_query_result)){launch_backfill();}
}
else {
launch_backfill();
}

global $display_ad;

if (isset($display_ad['available']) && $display_ad['available']==1){
track_request(1);
display_ad();
}
else {
track_request(0);
noad();
}

}

function display_ad(){

force();

prepare_ad();

prepare_response();

print_ad();

//echo "Displaying ad..."; global $display_ad; print_r($display_ad); global $request_settings; print_r($request_settings); global $zone_detail; print_r($zone_detail);  exit;

exit;
	
}

function reporting_db_update($publication_id, $zone_id, $campaign_id, $creative_id, $network_id, $add_request, $add_request_sec, $add_impression, $add_click){
if (!is_numeric($publication_id)){$publication_id='';}
if (!is_numeric($zone_id)){$zone_id='';}
if (!is_numeric($campaign_id)){$campaign_id='';}
if (!is_numeric($creative_id)){$creative_id='';}
if (!is_numeric($network_id)){$network_id='';}

$current_date=date("Y-m-d");
$current_day=date("d");
$current_month=date("m");
$current_year=date("Y");
$current_timestamp=time();

$select_query="select entry_id from md_reporting where publication_id='".$publication_id."' AND zone_id='".$zone_id."' AND campaign_id='".$campaign_id."' AND creative_id='".$creative_id."' AND network_id='".$network_id."' AND date='".$current_date."' LIMIT 1";

global $repdb_connected;

if ($repdb_connected==1){
global $repdb;
}
else {

if (!MAD_connect_repdb()){
return false;
}
else {
global $repdb;
$repdb_connected=1;	
}

}

$cache_result=get_cache($select_query);

if ($cache_result){
$repcard_detail=$cache_result;
}
else {

if ($exec=mysql_query($select_query, $repdb)) 
{ 
//yay
$repcard_detail = mysql_fetch_array($exec);
set_cache($select_query, $repcard_detail, 1500);
} 
else 
{
return false;
}

}

if ($repcard_detail['entry_id']>0){
mysql_query("UPDATE md_reporting set total_requests=total_requests+".$add_request.", total_requests_sec=total_requests_sec+".$add_request_sec.", total_impressions=total_impressions+".$add_impression.", total_clicks=total_clicks+".$add_click." WHERE entry_id='".$repcard_detail['entry_id']."'", $repdb);
}
else {
mysql_query("INSERT INTO md_reporting (type, date, day, month, year, publication_id, zone_id, campaign_id, creative_id, network_id, total_requests, total_requests_sec, total_impressions, total_clicks)
VALUES ('1', '".$current_date."', '".$current_day."', '".$current_month."', '".$current_year."', '".$publication_id."', '".$zone_id."', '".$campaign_id."', '".$creative_id."', '".$network_id."', '".$add_request."', '".$add_request_sec."', '".$add_impression."', '".$add_click."')", $repdb);	
}


}

function track_request($impression){
global $request_settings; 
global $zone_detail;
global $display_ad;

if (!isset($request_settings['active_campaign_type'])){$request_settings['active_campaign_type']='';}

switch ($request_settings['active_campaign_type']){
case 'normal':
reporting_db_update($zone_detail['publication_id'], $zone_detail['entry_id'], $display_ad['campaign_id'], $display_ad['ad_id'], '', 1, 0, $impression, 0);
break;

case 'network':
reporting_db_update($zone_detail['publication_id'], $zone_detail['entry_id'], $request_settings['active_campaign'], '', $request_settings['network_id'], 1, 0, $impression, 0);
break;

case 'backfill':
reporting_db_update($zone_detail['publication_id'], $zone_detail['entry_id'], '', '', $request_settings['network_id'], 1, 0, $impression, 0);
break;

default:
reporting_db_update($zone_detail['publication_id'], $zone_detail['entry_id'], '', '', '', 1, 0, $impression, 0);
break;
}

if ($impression==1){
/*Deduct Impression from Limit Card*/
switch ($request_settings['active_campaign_type']){
	
case 'normal':
deduct_impression($display_ad['campaign_id']);
break;

case 'network':
deduct_impression($request_settings['active_campaign']);
break;

}

}
	
}

function deduct_impression($campaign_id){
global $maindb;
mysql_query("UPDATE md_campaign_limit set total_amount_left=total_amount_left-1 WHERE campaign_id='".$campaign_id."' AND total_amount>0", $maindb);	
}

function convert_interstitial_name($input){
switch ($input){

case 'interstitial':
return 'interstitial';
break;	

case 'video':
return 'video';
break;

case 'interstitial-video':
return 'interstitial-to-video';
break;

case 'video-interstitial':
return 'video-to-interstitial';
break;	
	
}
}

function print_ad(){
global $display_ad;	
global $request_settings;

if ($display_ad['main_type']=='display'){
	
switch ($request_settings['response_type']){

case 'xml':
if ($display_ad['type']!='mraid-markup'){
echo "<request type=\"textAd\">";
} else {
echo "<request type=\"mraidAd\">";
}
echo "<htmlString skipoverlaybutton=\"".$display_ad['skipoverlay']."\"><![CDATA[";
echo $display_ad['final_markup'];
echo "]]></htmlString>";
echo "<clicktype>";
echo "".$display_ad['clicktype']."";
echo "</clicktype>";
echo "<clickurl><![CDATA[";
echo "".$display_ad['final_click_url']."";
echo "]]></clickurl>";
echo "<urltype>";
echo "link";
echo "</urltype>";
echo "<refresh>";
echo "".$display_ad['refresh']."";
echo "</refresh>";
echo "<scale>";
echo "no";
echo "</scale>";
echo "<skippreflight>";
echo "".$display_ad['skippreflight']."";
echo "</skippreflight>";
echo "</request>";
break;

case 'html':
echo $display_ad['final_markup'];
break;

case 'json':
if (!isset($_GET['jsvar'])){$_GET['jsvar']=1;}
/*if ($display_ad['type']=='mraid-markup'){
$display_ad['final_markup'] = str_replace("\n","",$display_ad['final_markup']);
}*/
echo 'var '.$_GET['jsvar'].' = [{"url" : "'.$display_ad['final_click_url'].'","content" : "'.addslashes($display_ad['final_markup']).'", "track" : ""}];';
break;
	
	
}
	
}
else if ($display_ad['main_type']=='interstitial'){
echo '<ad type="'.convert_interstitial_name($display_ad['type']).'" animation="'.$display_ad['animation'].'">';

	if ($display_ad['type']=='interstitial' or $display_ad['type']=='video-interstitial' or $display_ad['type']=='interstitial-video'){
	if ($display_ad['interstitial-type']=='markup'){$interstitial_urlcontent=''; } else {$interstitial_urlcontent='url="'.htmlspecialchars($display_ad['interstitial-content']).'"';}
	
echo '<interstitial preload="'.$display_ad['interstitial-preload'].'" autoclose="'.$display_ad['interstitial-autoclose'].'" type="'.$display_ad['interstitial-type'].'" '.$interstitial_urlcontent.' orientation="'.$display_ad['interstitial-orientation'].'">';
if ($display_ad['interstitial-type']=='markup'){
echo '<markup><![CDATA['.$display_ad['interstitial-content'].']]></markup>';
}
echo '<skipbutton show="'.$display_ad['interstitial-skipbutton-show'].'" showafter="'.$display_ad['interstitial-skipbutton-showafter'].'"></skipbutton>';
echo '<navigation show="'.$display_ad['interstitial-navigation-show'].'">';
echo '<topbar custombackgroundurl="'.$display_ad['interstitial-navigation-topbar-custombg'].'" show="'.$display_ad['interstitial-navigation-topbar-show'].'" title="'.$display_ad['interstitial-navigation-topbar-titletype'].'" titlecontent="'.$display_ad['interstitial-navigation-topbar-titlecontent'].'"></topbar>';
echo '<bottombar custombackgroundurl="'.$display_ad['interstitial-navigation-bottombar-custombg'].'" show="'.$display_ad['interstitial-navigation-bottombar-show'].'" backbutton="'.$display_ad['interstitial-navigation-bottombar-backbutton'].'" forwardbutton="'.$display_ad['interstitial-navigation-bottombar-forwardbutton'].'" reloadbutton="'.$display_ad['interstitial-navigation-bottombar-reloadbutton'].'" externalbutton="'.$display_ad['interstitial-navigation-bottombar-externalbutton'].'" timer="'.$display_ad['interstitial-navigation-bottombar-timer'].'">';
echo '</bottombar>';
echo '</navigation>';
echo '</interstitial>';	
	}
	
	if ($display_ad['type']=='video' or $display_ad['type']=='video-interstitial' or $display_ad['type']=='interstitial-video'){
	
	echo '<video orientation="'.$display_ad['video-orientation'].'" expiration="'.$display_ad['video-expiration'].'">';
echo '<creative display="'.$display_ad['video-creative-display'].'" delivery="'.$display_ad['video-creative-delivery'].'" type="'.$display_ad['video-creative-type'].'" bitrate='.$display_ad['video-creative-bitrate'].'"" width="'.$display_ad['video-creative-width'].'" height="'.$display_ad['video-creative-height'].'"><![CDATA['.$display_ad['video-creative-url'].']]></creative>';
echo '<duration>'.$display_ad['video-duration'].'</duration>';
echo '<skipbutton show="'.$display_ad['video-skipbutton-show'].'" showafter="'.$display_ad['video-skipbutton-showafter'].'"></skipbutton>';
echo '<navigation show="'.$display_ad['video-navigation-show'].'" allowtap="'.$display_ad['video-navigation-allowtap'].'">';
echo '<topbar custombackgroundurl="'.$display_ad['video-navigation-topbar-custombg'].'" show="'.$display_ad['video-navigation-topbar-show'].'"></topbar>';
echo '<bottombar custombackgroundurl="'.$display_ad['video-navigation-bottombar-custombg'].'" show="'.$display_ad['video-navigation-bottombar-show'].'" pausebutton="'.$display_ad['video-navigation-bottombar-pausebutton'].'" replaybutton="'.$display_ad['video-navigation-bottombar-replaybutton'].'" timer="'.$display_ad['video-navigation-bottombar-timer'].'">';
echo '</bottombar>';
echo '</navigation>';
echo '<trackingevents>';
foreach ($display_ad['video-trackers'] as $tracker){
echo '<tracker type="'.$tracker[0].'"><![CDATA['.$tracker[1].']]></tracker>';
}

echo '</trackingevents>';
if ($display_ad['video-htmloverlay-show']==1){
if ($display_ad['video-htmloverlay-type']=='markup'){$htmloverlay_urlcontent=''; } else {$htmloverlay_urlcontent='url="'.htmlspecialchars($display_ad['video-htmloverlay-content']).'"';}
echo '<htmloverlay show="'.$display_ad['video-htmloverlay-show'].'" showafter="'.$display_ad['video-htmloverlay-showafter'].'" type="'.$display_ad['video-htmloverlay-type'].'" '.$htmloverlay_urlcontent.'>';
if ($display_ad['video-htmloverlay-type']=='markup'){
echo '<![CDATA['.$display_ad['video-htmloverlay-content'].']]>';
}

echo '</htmloverlay>';
}
echo '</video>';

		
	}
	
	echo "</ad>";
	
}
	
}

function prepare_ctr(){
global $display_ad;	
global $request_settings;
global $zone_detail;
//$base_ctr="".MAD_ADSERVING_PROTOCOL . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF'])."/".MAD_CLICK_HANDLER."?zone_id=".$zone_detail['entry_id']."&h=".$request_settings['request_hash']."";
$base_ctr="".MAD_ADSERVING_PROTOCOL . $_SERVER['HTTP_HOST'] . rtrim(dirname($_SERVER['PHP_SELF']), '/')."/".MAD_CLICK_HANDLER."?zone_id=".$zone_detail['entry_id']."&h=".$request_settings['request_hash']."";

if ($display_ad['main_type']=='display'){

switch ($request_settings['active_campaign_type']){
case 'normal':
$base_ctr=$base_ctr . "&type=normal&campaign_id=".$display_ad['campaign_id']."&ad_id=".$display_ad['ad_id']."";
break;

case 'network':
$base_ctr=$base_ctr . "&type=network&campaign_id=".$request_settings['active_campaign']."&network_id=".$request_settings['network_id']."";
break;

case 'backfill':
$base_ctr=$base_ctr . "&type=backfill&network_id=".$request_settings['network_id']."";
break;
}

$base_ctr=$base_ctr . "&c=".strtr(base64_encode(get_destination_url()), '+/=', '-_,')."";

$display_ad['final_click_url']=$base_ctr;
}

}

function get_destination_url(){
global $display_ad;	
if (isset($display_ad['click_url'])){
return $display_ad['click_url'];
} else {
return '';	
}
}

function prepare_markup(){
global $display_ad;	
global $request_settings;
	
if ($display_ad['main_type']=='display'){
	
	switch ($display_ad['type']){
	case 'hosted':
	case 'image-url':
	if ($request_settings['response_type']!='xml'){
	$final_markup='<a id="mAdserveAdLink" href="'.$display_ad['final_click_url'].'" target="_self"><img id="mAdserveAdImage" src="'.$display_ad['image_url'].'" border="0"/></a><br>';
	}
	else {
	$final_markup='<body style="text-align:center;margin:0;padding:0;"><div align="center"><a id="mAdserveAdLink" href="'.$display_ad['final_click_url'].'" target="_self"><img id="mAdserveAdImage" src="'.$display_ad['image_url'].'" border="0"/></a></div></body>';
	}
	break;	


	case 'markup':
	$final_markup=generate_final_markup();
	break;	

	case 'mraid-markup':
	$final_markup=$display_ad['html_markup'];
	break;	
	}
	
	if (isset($display_ad['trackingpixel']) && !empty($display_ad['trackingpixel']) && $display_ad['trackingpixel']!=''){
	$final_markup=$final_markup . generate_trackingpixel($display_ad['trackingpixel']);
	}
	
	$display_ad['final_markup']=$final_markup;

}
	
}

function generate_final_markup(){
global $display_ad;	
global $request_settings;

if (isset($display_ad['click_url']) && !empty($display_ad['click_url'])){
$markup=str_replace($display_ad['click_url'], $display_ad['final_click_url'], $display_ad['html_markup']);
}
else {
$markup=$display_ad['html_markup'];
}
return $markup;
}

function prepare_ad(){
global $display_ad;	

prepare_ctr();

prepare_markup();

}

function force(){
global $display_ad;	
global $request_settings;

if (isset($request_settings['u_wv_available']) && ($request_settings['active_campaign_type']=='network' or $request_settings['active_campaign_type']=='backfill')){
$display_ad['clicktype']='inapp';	
}

if ($display_ad['main_type']=='interstitial'){
$request_settings['response_type']='xml';
}
}

function get_network_info($network_id){
	
$query="select network_identifier, banner_support, interstitial_support from md_networks where entry_id='".$network_id."'";

if ($network_detail=simple_query_maindb($query, true, 500)){

return $network_detail;

}

else {
return false;	
}
	
}

function get_network_ids($network_identifier){
global $zone_detail;

$query="SELECT p_1, p_2, p_3, p_4 FROM `md_network_config` WHERE p_1!='' AND network_id='".$network_identifier."' AND ((`config_type`='default' AND `publication_id`='".$zone_detail['publication_id']."') OR (`config_type`='default' and `publication_id`='' AND `zone_id`='') OR (`publication_id`='".$zone_detail['publication_id']."' and `zone_id`='".$zone_detail['entry_id']."')) ORDER BY priority DESC LIMIT 1";

if ($publisher_ids=simple_query_maindb($query, true, 500)){
return $publisher_ids;

}

else { 
return false;	
}

}

function network_ad_request($network_id, $backfill){
global $request_settings;
global $zone_detail;

if (!$network_detail=get_network_info($network_id)){
return false;	
}

if (!$network_ids=get_network_ids($network_detail['network_identifier'])){
return false;	
}

require_once('modules/network_modules/network_connector.php');

if ($returndata=request_network_ad($network_detail['network_identifier'], $zone_detail['zone_type'], $request_settings, $network_ids, $backfill)){
if (build_ad(2, $returndata)){ return true;  } else { return false; }
}
else {
return false; // Ad Not Loaded	
}
	
return false;
}

function select_adunit_query($campaign_id){
global $zone_detail;

switch ($zone_detail['zone_type']){
case 'banner':
$query_part['size']="AND adv_width<=".$zone_detail['zone_width']." AND adv_height<=".$zone_detail['zone_height']."";
break;

case 'interstitial':
if (MAD_INTERSTITIALS_EXACTMATCH){
$query_part['size']="AND adv_width=320 AND adv_height=480";
} else {
$query_part['size']="AND adv_width<=320 AND adv_height<=480";
}
break;
}

$query="SELECT adv_id, adv_height, adv_width FROM md_ad_units WHERE campaign_id='".$campaign_id."' AND adv_status=1 ".$query_part['size']." ORDER BY adv_width DESC, adv_height DESC";


$cache_result=get_cache($query);

if ($cache_result){
return $cache_result;
}

global $maindb;


$adarray = array();

$usrres=mysql_query($query, $maindb);
while($ad_detail=mysql_fetch_array($usrres)){
$add = array('ad_id'=>$ad_detail['adv_id'],'width'=>$ad_detail['adv_width'],'height'=>$ad_detail['adv_height']);
array_push($adarray, $add);
}

if ($total_ads_inarray=count($adarray)<1){
return false;	
}


/*foreach ($adarray as $key => $row) {
    $ad_id[$key]  = $row['ad_id'];
    $width[$key] = $row['width'];
    $height[$key] = $row['height'];
}*/

// Sort the data with volume descending, edition ascending
// Add $data as the last parameter, to sort by the common key
//array_multisort($width, SORT_DESC, $adarray);

$highest_height=$adarray[0]['height'];
$highest_width=$adarray[0]['width'];


$val = removeElementWithValue2($adarray, "height", $highest_height, "width", $highest_width);

set_cache($query, $val, 100);

return $val;
	
}

function select_ad_unit($campaign_id){
global $request_settings;

if (!$ad_unit_array = select_adunit_query($campaign_id)){
return false;	
}

shuffle($ad_unit_array);


if (!$final_ad = get_ad_unit($ad_unit_array[0]['ad_id'])){
return false;
}

if (build_ad(1, $final_ad)){
return true;	
}

return false;	
}

function get_creativeserver($id){

$query="select server_default_url from md_creative_servers where entry_id='".$id."'";

if ($server_detail=simple_query_maindb($query, true, 500)){

return $server_detail;

}

else {
return false;	
}
}

function extract_url($input){
	
if (preg_match("/href='([^']*)'/i", $input , $regs)){
return $regs[1]; }

else if (preg_match('/href="([^"]*)"/i', $input , $regsx)){
return $regsx[1];	
}

return false;	
}

function get_creative_url($content){
if ($content['creativeserver_id']==1){
//$image_url="".MAD_ADSERVING_PROTOCOL . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF'])."".MAD_CREATIVE_DIR."".$content['unit_hash'].".".$content['adv_creative_extension']."";
$image_url="".MAD_ADSERVING_PROTOCOL . $_SERVER['HTTP_HOST'] . rtrim(dirname($_SERVER['PHP_SELF']), '/')."".MAD_CREATIVE_DIR."".$content['unit_hash'].".".$content['adv_creative_extension']."";
}
else {
$server_detail=get_creativeserver($content['creativeserver_id']);
$image_url="".$server_detail['server_default_url']."".$content['unit_hash'].".".$content['adv_creative_extension'].""; 
}

return $image_url;
}

function build_ad($type, $content){

global $display_ad;
global $zone_detail;

if ($type==1){
$display_ad['available']=1;
$display_ad['ad_id']=$content['adv_id'];
$display_ad['campaign_id']=$content['campaign_id'];
	
switch ($zone_detail['zone_type']){
case 'banner':
$display_ad['main_type']='display';

$display_ad['trackingpixel']=$content['adv_impression_tracking_url'];
$display_ad['refresh']=$zone_detail['zone_refresh'];
$display_ad['width']=$content['adv_width'];
$display_ad['height']=$content['adv_height'];
if (MAD_CLICK_ALWAYS_EXTERNAL or $content['adv_click_opentype']=='external'){
$display_ad['clicktype']='safari';
$display_ad['skipoverlay']=0;
$display_ad['skippreflight']='yes';
}
else {
$display_ad['clicktype']='inapp';
$display_ad['skipoverlay']=0;
$display_ad['skippreflight']='no';
}

switch ($content['adv_type']){
case 1:
$display_ad['type']='hosted';
$display_ad['click_url']=$content['adv_click_url'];

$display_ad['image_url']=get_creative_url($content);

/*if ($content['creativeserver_id']==1){
$display_ad['image_url']="".MAD_ADSERVING_PROTOCOL . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF'])."".MAD_CREATIVE_DIR."".$content['unit_hash'].".".$content['adv_creative_extension']."";
}
else {
$server_detail=get_creativeserver($content['creativeserver_id']);
$display_ad['image_url']="".$server_detail['server_default_url']."".$content['unit_hash'].".".$content['adv_creative_extension'].""; 
}*/

break;

case 2:
$display_ad['type']='image-url';
$display_ad['image_url']=$content['adv_bannerurl'];
$display_ad['click_url']=$content['adv_click_url'];
break;

case 3:
$display_ad['html_markup']=$content['adv_chtml'];
if ($content['adv_mraid']==1){
$display_ad['type']='mraid-markup';
$display_ad['skipoverlay']=1;
} else {
$display_ad['type']='markup';
if ($display_ad['click_url']=extract_url($display_ad['html_markup'])){
$display_ad['skipoverlay']=0;
}
else {
$display_ad['skipoverlay']=1;
$display_ad['click_url']='';
}

}
break;
}
break;

case 'interstitial':
$display_ad['main_type']='interstitial';
$display_ad['type']='interstitial';
$display_ad['animation']='none';
$display_ad['interstitial-orientation']='portrait';
$display_ad['interstitial-preload']=0;
$display_ad['interstitial-autoclose']=0;
$display_ad['interstitial-type']='markup';
$display_ad['interstitial-skipbutton-show']=1;
$display_ad['interstitial-skipbutton-showafter']=0;
$display_ad['interstitial-navigation-show']=0;
$display_ad['interstitial-navigation-topbar-show']=0;
$display_ad['interstitial-navigation-bottombar-show']=0;
$display_ad['interstitial-navigation-topbar-custombg']='';
$display_ad['interstitial-navigation-bottombar-custombg']='';
$display_ad['interstitial-navigation-topbar-titletype']='fixed';
$display_ad['interstitial-navigation-topbar-titlecontent']='';
$display_ad['interstitial-navigation-bottombar-backbutton']=0;
$display_ad['interstitial-navigation-bottombar-forwardbutton']=0;
$display_ad['interstitial-navigation-bottombar-reloadbutton']=0;
$display_ad['interstitial-navigation-bottombar-externalbutton']=0;
$display_ad['interstitial-navigation-bottombar-timer']=0;

if (!empty($content['adv_impression_tracking_url'])){
$tracking_pixel_html=generate_trackingpixel($content['adv_impression_tracking_url']);
}
else {
$tracking_pixel_html='';
}

switch ($content['adv_type']){
case 1:
$display_ad['interstitial-content']='<meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" name="viewport" />
<meta name="viewport" content="width=device-width" /><div style="position:absolute;top:0;left:0;"><a href="mfox:external:'.$content['adv_click_url'].'"><img src="'.get_creative_url($content).'"></a>' . $tracking_pixel_html . '</div>';
break;

case 2:
$display_ad['interstitial-content']='<meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" name="viewport" />
<meta name="viewport" content="width=device-width" /><div style="position:absolute;top:0;left:0;"><a href="mfox:external:'.$content['adv_click_url'].'"><img src="'.$content['adv_bannerurl'].'"></a>' . $tracking_pixel_html . '</div>';
break;

case 3:
$display_ad['interstitial-content']=$content['adv_chtml'] . $tracking_pixel_html;
break;

}

break;
}

return true;
}
else if ($type==2){
$valid_ad=0;
$display_ad=$content;
$display_ad['available']=1;

switch ($display_ad['main_type']){
case 'display':

switch ($display_ad['type']){
case 'markup':
$valid_ad=1;
if (!isset($display_ad['html_markup']) or empty($display_ad['html_markup'])){return false;}
if (!isset($display_ad['click_url']) or empty($display_ad['click_url'])){if (!$display_ad['click_url']=extract_url($display_ad['html_markup'])){return false;} }
if (!isset($display_ad['clicktype']) or empty($display_ad['clicktype'])){$display_ad['clicktype']='safari';}
if (!isset($display_ad['refresh']) or !is_numeric($display_ad['refresh'])){$display_ad['refresh']=$zone_detail['zone_refresh'];}
if (!isset($display_ad['skipoverlay']) or empty($display_ad['skipoverlay'])){$display_ad['skipoverlay']=0;}
if (!isset($display_ad['skippreflight']) or empty($display_ad['skippreflight'])){$display_ad['skippreflight']='yes';}
break;

case 'mraid-markup':
$valid_ad=1;
if (!isset($display_ad['html_markup']) or empty($display_ad['html_markup'])){return false;}
if (!isset($display_ad['clicktype']) or empty($display_ad['clicktype'])){$display_ad['clicktype']='safari';}
if (!isset($display_ad['refresh']) or !is_numeric($display_ad['refresh'])){$display_ad['refresh']=$zone_detail['zone_refresh'];}
if (!isset($display_ad['skipoverlay']) or empty($display_ad['skipoverlay'])){$display_ad['skipoverlay']=1;}
if (!isset($display_ad['skippreflight']) or empty($display_ad['skippreflight'])){$display_ad['skippreflight']='yes';}
break;

case 'image-url':
$valid_ad=1;
if (!isset($display_ad['click_url']) or empty($display_ad['click_url'])){return false;}
if (!isset($display_ad['image_url']) or empty($display_ad['image_url'])){return false;}
if (!isset($display_ad['clicktype']) or empty($display_ad['clicktype'])){$display_ad['clicktype']='safari';}
if (!isset($display_ad['refresh']) or !is_numeric($display_ad['refresh'])){$display_ad['refresh']=$zone_detail['zone_refresh'];}
if (!isset($display_ad['skipoverlay']) or empty($display_ad['skipoverlay'])){$display_ad['skipoverlay']=0;}
if (!isset($display_ad['skippreflight']) or empty($display_ad['skippreflight'])){$display_ad['skippreflight']='yes';}
break;
	
}

break;

case 'interstitial':
$valid_ad=1;

/*switch ($display_ad['type']){
	We might add some validation for Interstitials later.
}*/

break;	
}

if ($valid_ad!=1){return false;}

return true;
}
else {
return false;	
}

}

function generate_trackingpixel($url){
return '<img style="display:none;" src="'.$url.'"/>';	
}

function get_ad_unit($id){
	
$query="SELECT adv_id, campaign_id, unit_hash, adv_type, adv_click_url, adv_click_opentype, adv_chtml, adv_mraid, adv_bannerurl, adv_impression_tracking_url, adv_clickthrough_type, adv_creative_extension, creativeserver_id, adv_height, adv_width FROM md_ad_units WHERE adv_id='".$id."'";

$ad_detail=simple_query_maindb($query, true, 250);

if (!$ad_detail or !is_numeric($ad_detail['campaign_id'])){
return false;
}
else {
return $ad_detail;
}
	
}

function process_campaignquery_result($result){
global $zone_detail;
foreach($result as $key=>$campaign_detail) 
    { 
//echo "[";  echo "id: "; echo $campaign_detail['campaign_id']; echo " prio: "; echo $campaign_detail['priority']; echo " type: "; echo $campaign_detail['type']; echo " networkid: "; echo $campaign_detail['network_id']; echo "]";
//break;

if ($campaign_detail['type']=='network'){
reporting_db_update($zone_detail['publication_id'], $zone_detail['entry_id'], $campaign_detail['campaign_id'], '', $campaign_detail['network_id'], 0, 1, 0, 0); 
if (network_ad_request($campaign_detail['network_id'], 0)){
global $request_settings;
$request_settings['active_campaign_type']='network';
$request_settings['active_campaign']=$campaign_detail['campaign_id'];
$request_settings['network_id']=$campaign_detail['network_id'];
return true;
break;	
}
}
else {
if (select_ad_unit($campaign_detail['campaign_id'])){
global $request_settings;
$request_settings['active_campaign_type']='normal';
$request_settings['active_campaign']=$campaign_detail['campaign_id'];
return true;
break;
}
}
    } 
	return false;
}

function removeElementWithValue($array, $key, $value){
     foreach($array as $subKey => $subArray){
          if($subArray[$key] != $value){
               unset($array[$subKey]);
          }
     }
	 return $array;
}

function removeElementWithValue2($array, $key, $value, $key2, $value2){
     foreach($array as $subKey => $subArray){
          if($subArray[$key] != $value or $subArray[$key2] != $value2){
               unset($array[$subKey]);
          }
     }
	 return $array;
}

function launch_backfill(){
global $zone_detail;
global $request_settings;

/* MobFox BackFill */
if ($zone_detail['mobfox_backfill_active']==1){
	if ($mobfox_id=get_mobfox_id()){
		reporting_db_update($zone_detail['publication_id'], $zone_detail['entry_id'], '', '', $mobfox_id, 0, 1, 0, 0); 
		if (network_ad_request($mobfox_id, 1)){
			$request_settings['active_campaign_type']='backfill';
			$request_settings['network_campaign']=1;
            $request_settings['network_id']=$mobfox_id;
			return true;
		}
	}
	
}
/*End MobFox BackFill*/

/* Alternatives */

if (try_alternative(1)){
	return true;
}

if (try_alternative(2)){
	return true;
}

if (try_alternative(3)){
	return true;
}
/* End Alternatives */

}

function try_alternative($id){
global $zone_detail;
global $request_settings;
if (is_numeric($zone_detail['backfill_alt_'.$id.''])){
reporting_db_update($zone_detail['publication_id'], $zone_detail['entry_id'], '', '', $zone_detail['backfill_alt_'.$id.''], 0, 1, 0, 0); 
if (network_ad_request($zone_detail['backfill_alt_'.$id.''], 1)){
			$request_settings['active_campaign_type']='backfill';
			$request_settings['network_campaign']=1;
            $request_settings['network_id']=$zone_detail['backfill_alt_'.$id.''];
			return true;
		}	
}
return false;
}

function launch_campaign_query($q){
		
if (MAD_CACHE_CAMPAIGN_QUERIES){
$cache_result=get_cache($q);

if ($cache_result){
return $cache_result;
}
}
	
global $maindb;


$campaignarray = array();

$usrres=mysql_query($q, $maindb);
while($campaign_detail=mysql_fetch_array($usrres)){
$add = array('campaign_id'=>$campaign_detail['campaign_id'],'priority'=>$campaign_detail['campaign_priority'],'type'=>$campaign_detail['campaign_type'],'network_id'=>$campaign_detail['campaign_networkid']);
array_push($campaignarray, $add);
}

if (count($campaignarray)<1){
return false;	
}

foreach ($campaignarray as $key => $row) {
    $campaign_id[$key]  = $row['campaign_id'];
    $priority[$key] = $row['priority'];
    $type[$key] = $row['type'];
    $network_id[$key] = $row['network_id'];
}

// Sort the data with volume descending, edition ascending
// Add $data as the last parameter, to sort by the common key
array_multisort($priority, SORT_DESC, $campaignarray);

$highest_priority=$campaignarray[0]['priority'];


$final_ads=array();

foreach (range($highest_priority, 1) as $number) {
unset($val);
$val = removeElementWithValue($campaignarray, "priority", $number);
shuffle($val);
foreach ($val as $value) {
array_push($final_ads, $value);
}
}

if (MAD_CACHE_CAMPAIGN_QUERIES){
set_cache($q, $final_ads, 100);
}

return $final_ads;




	
}

function noad(){
global $request_settings;
print_error(0, '', $request_settings['sdk'], 1);
return false;		
}

function build_query(){
global $request_settings;
global $zone_detail;

if (isset($request_settings['geo_country']) && !empty($request_settings['geo_country']) && isset($request_settings['geo_region']) && !empty($request_settings['geo_region'])){
$query_part['geo']=" OR (c1.targeting_type='geo' AND (c1.targeting_code='".$request_settings['geo_country']."' OR c1.targeting_code='".$request_settings['geo_country']."_".$request_settings['geo_region']."')))";	
}
else if (isset($request_settings['geo_country']) && !empty($request_settings['geo_country'])){
$query_part['geo']=" OR (c1.targeting_type='geo' AND c1.targeting_code='".$request_settings['geo_country']."'))";		
}
else {
$query_part['geo']=')';	
}

if (isset($request_settings['channel']) && is_numeric($request_settings['channel'])){
$query_part['channel']="AND (md_campaigns.channel_target=1 OR (c2.targeting_type='channel' AND c2.targeting_code='".$request_settings['channel']."'))";
}
else {
$query_part['channel']='';
}

$query_part['placement']="AND (md_campaigns.publication_target=1 OR (c3.targeting_type='placement' AND c3.targeting_code='".$zone_detail['entry_id']."'))";

$query_part['misc']="AND md_campaigns.campaign_status=1 AND md_campaigns.campaign_start<='".date("Y-m-d")."' AND md_campaigns.campaign_end>'".date("Y-m-d")."'";

switch ($request_settings['main_device']){
	
case 'IPHONE':
$query_part['device']='AND (md_campaigns.device_target=1 OR md_campaigns.target_iphone=1)';
break;

case 'IPOD':
$query_part['device']='AND (md_campaigns.device_target=1 OR md_campaigns.target_ipod=1)';
break;

case 'IPAD':
$query_part['device']='AND (md_campaigns.device_target=1 OR md_campaigns.target_ipad=1)';
break;

case 'ANDROID':
$query_part['device']='AND (md_campaigns.device_target=1 OR md_campaigns.target_android=1)';
break;

default:
$query_part['device']='AND (md_campaigns.device_target=1 OR md_campaigns.target_other=1)';
break;
}

if ($request_settings['main_device']!='OTHER' && $request_settings['main_device']!='NOMOBILE'){
switch ($request_settings['main_device']){

case 'IPHONE':
case 'IPOD':
case 'IPAD':
if (isset($request_settings['device_os']) && !empty($request_settings['device_os'])){
$query_part['osversion']="AND ((md_campaigns.ios_version_min<=".$request_settings['device_os']." OR md_campaigns.ios_version_min='') AND (md_campaigns.ios_version_max>=".$request_settings['device_os']." OR md_campaigns.ios_version_max=''))";
}
else {
$query_part['osversion']="AND (md_campaigns.ios_version_min='' AND md_campaigns.ios_version_max='')";	
}
break;

case 'ANDROID':
if (isset($request_settings['device_os']) && !empty($request_settings['device_os'])){
$query_part['osversion']="AND ((md_campaigns.android_version_min<=".$request_settings['device_os']." OR md_campaigns.android_version_min='') AND (md_campaigns.android_version_max>=".$request_settings['device_os']." OR md_campaigns.android_version_max=''))";
}
else {
$query_part['osversion']="AND (md_campaigns.android_version_min='' AND md_campaigns.android_version_max='')";	
}
break;

}
}
else {
$query_part['osversion']="";
}

switch ($zone_detail['zone_type']){
case 'banner':
$query_part['adunit']="AND (md_campaigns.campaign_type='network' OR (md_ad_units.adv_status=1 AND md_ad_units.adv_width<=".$zone_detail['zone_width']." AND md_ad_units.adv_height<=".$zone_detail['zone_height']."))";
break;

case 'interstitial':
if (MAD_INTERSTITIALS_EXACTMATCH){
$query_part['adunit']="AND (md_campaigns.campaign_type='network' OR (md_ad_units.adv_status=1 AND md_ad_units.adv_width=320 AND md_ad_units.adv_height=480))";
} else {
$query_part['adunit']="AND (md_campaigns.campaign_type='network' OR (md_ad_units.adv_status=1 AND md_ad_units.adv_width<=320 AND md_ad_units.adv_height<=480))";
}
break;
}

$query_part['limit']="AND (md_campaign_limit.total_amount_left='' OR md_campaign_limit.total_amount_left>=1)";

if (MAD_IGNORE_DAILYLIMIT_NOCRON && !check_cron_active()){
$query_part['limit']="AND ((md_campaign_limit.total_amount_left='' OR md_campaign_limit.total_amount_left>=1) OR (md_campaign_limit.cap_type=1))";
}

$request_settings['campaign_query']="select md_campaigns.campaign_id, md_campaigns.campaign_priority, md_campaigns.campaign_type, md_campaigns.campaign_networkid from md_campaigns LEFT JOIN md_campaign_targeting c1 ON md_campaigns.campaign_id = c1.campaign_id LEFT JOIN md_campaign_targeting c2 ON md_campaigns.campaign_id = c2.campaign_id LEFT JOIN md_campaign_targeting c3 ON md_campaigns.campaign_id = c3.campaign_id LEFT JOIN md_ad_units ON md_campaigns.campaign_id = md_ad_units.campaign_id LEFT JOIN md_campaign_limit ON md_campaigns.campaign_id = md_campaign_limit.campaign_id where (md_campaigns.country_target=1".$query_part['geo']." ".$query_part['channel']." ".$query_part['placement']." ".$query_part['misc']." ".$query_part['device']." ".$query_part['osversion']." ".$query_part['adunit']." ".$query_part['limit']." group by md_campaigns.campaign_id";


return true;	
	
}

function check_cron_active(){
	
$last_exec=get_last_cron_exec();

$d=time()-$last_exec;

if ($last_exec==0 or $last_exec<1 or $last_exec=='' or $d>87000){
return false;	
}
else {
return true;	
}

	
}

function get_last_cron_exec(){
global $maindb;

$key='last_cron_execution';
$query="select var_value from md_configuration where var_name='last_limit_update'";

$cache_result=get_cache($key);

if ($cache_result){
return $cache_result['var_value'];
}

$config_detail=simple_query_maindb($query, false, 0);

if ($config_detail){
set_cache($key, $config_detail, 150);
return $config_detail['var_value'];
}
else {
return 0;	
}
	
}

function set_geo($ip_address){
global $request_settings;
	
$key='GEODATA_'.$ip_address.'';

$cache_result=get_cache($key);

if ($cache_result){
$request_settings['geo_country']=$cache_result['geo_country'];
$request_settings['geo_region']=$cache_result['geo_region'];
return true;
}


switch (MAD_MAXMIND_TYPE){
case 'PHPSOURCE':

// This code demonstrates how to lookup the country, region, city,
// postal code, latitude, and longitude by IP Address.
// It is designed to work with GeoIP/GeoLite City

// Note that you must download the New Format of GeoIP City (GEO-133).
// The old format (GEO-132) will not work.

require_once("modules/maxmind_php/geoipcity.inc");
require_once("modules/maxmind_php/geoipregionvars.php");

// uncomment for Shared Memory support
// geoip_load_shared_mem("/usr/local/share/GeoIP/GeoIPCity.dat");
// $gi = geoip_open("/usr/local/share/GeoIP/GeoIPCity.dat",GEOIP_SHARED_MEMORY);

if (!$gi = geoip_open(MAD_MAXMIND_DATAFILE_LOCATION,GEOIP_STANDARD)){
print_error(1, 'Could not open GEOIP Database supplied in constants.php File. Please make sure that the file is present and that the directory has the necessary rights applied.', $request_settings['sdk'], 1);
return false;	
}

if (!$record = geoip_record_by_addr($gi,$ip_address)){
$request_settings['geo_country']='';
$request_settings['geo_region']='';
return false;	
}

$geo_data=array();
$geo_data['geo_country']=$record->country_code;
$geo_data['geo_region']=$record->region;

geoip_close($gi);


break;

case 'NATIVE':

if (!$record = geoip_record_by_name($ip_address)){
$request_settings['geo_country']='';
$request_settings['geo_region']='';
return false;	
}
$geo_data['geo_country']=$record['country_code'];
$geo_data['geo_region']=$record['region'];

break;	
	
}

$request_settings['geo_country']=$geo_data['geo_country'];
$request_settings['geo_region']=$geo_data['geo_region'];

set_cache($key, $geo_data, 1000);

return true;
	
}

function set_device($user_agent){
global $request_settings;

$key='di_' . $user_agent;

$cache_result=get_cache($key);

if ($cache_result){
	if (isset($cache_result['device_os'])){
$request_settings['device_os']=$cache_result['device_os'];
	}
$request_settings['main_device']=$cache_result['main_device'];
return true;
}

error_reporting(0);
	
require_once 'modules/devicedetection/Mobile_Detect.php';
$detect = new Mobile_Detect($user_agent);

if ($detect->isIphone()) {
$temp['device_os']=get_device_osversion(1, $user_agent);
$temp['main_device']='IPHONE';
}
	
else if ($detect->isIpad()) {
$temp['device_os']=get_device_osversion(1, $user_agent);
$temp['main_device']='IPAD';
}

else if ($detect->isIpod()) {
$temp['device_os']=get_device_osversion(1, $user_agent);
$temp['main_device']='IPOD';
}

else if($detect->isAndroidOS()){
$temp['device_os']=get_device_osversion(2, $user_agent);
$temp['main_device']='ANDROID';
}

else if($detect->ismobile()){
$temp['main_device']='OTHER';
}

else {
$temp['main_device']='NOMOBILE';

if (!MAD_SERVE_NOMOBILE){
print_error(1, 'This ad-server does not serve ads to non-mobile devices.', $request_settings['sdk'], 1);
return false;	
}

}

if (isset($temp['device_os']) && !empty($temp['device_os'])){
$request_settings['device_os']=$temp['device_os'];
}
$request_settings['main_device']=$temp['main_device'];

set_cache($key, $temp, 1500);

	
}

function trim_osversion($input){
if (strlen($input)==5){
$input = substr($input,0,-2);	
}
return $input;
}

function get_device_osversion($type, $user_agent){
global $request_settings;
	
switch ($type){
case 1:
$ios_devres   = array();
if (isset($request_settings['iphone_osversion']) && !empty($request_settings['iphone_osversion'])){
return trim_osversion($request_settings['iphone_osversion']);
}
else if (preg_match('/iPhone OS (\d+)_(\d+)\s+/', $user_agent, $ios_devres) or preg_match('/iPhone OS (\d+)_(\d+)_(\d+)\s+/', $user_agent, $ios_devres)){
return $ios_devres[1] . '.' . $ios_devres[2];	
}

break;

case 2:
if (preg_match("/Android ([0-9]\.[0-9](\.[0-9])?);/", $user_agent, $matches)) {
return trim_osversion($matches[1]);
}
break;	
}

return false;
}


function getchannel(){
global $zone_detail;
global $request_settings;

if (is_numeric($zone_detail['zone_channel'])){
return $zone_detail['zone_channel'];
}
else {
return get_publication_channel($zone_detail['publication_id']);
}

}

function get_publication_channel($publication_id){	
global $request_settings;
global $errormessage;

$query="SELECT inv_defaultchannel FROM md_publications WHERE inv_id='".$publication_id."'";

$publication_detail=simple_query_maindb($query, true, 1000);

if (!$publication_detail or $publication_detail['inv_defaultchannel']<1){
return 0;
}
else {
return $publication_detail['inv_defaultchannel'];
}

	
}

function update_last_request(){
global $zone_detail; 

$lastreq_dif=0;
$timestamp=time();

if ($zone_detail['zone_lastrequest']>0){
$lastreq_dif=$timestamp-$zone_detail['zone_lastrequest'];
}

if ($lastreq_dif>=600 or $zone_detail['zone_lastrequest']<1){
global $maindb;
mysql_query("UPDATE md_zones set zone_lastrequest='".$timestamp."' where entry_id='".$zone_detail['entry_id']."'", $maindb);
mysql_query("UPDATE md_publications set md_lastrequest='".$timestamp."' where inv_id='".$zone_detail['publication_id']."'", $maindb);
}

}

function php_cache_compatibility_check(){
	
if (version_compare(PHP_VERSION, '5.3.0') >= 0) {
return true;
}

return false;
	
}


function get_cache($query){
	
if (!MAD_ENABLE_CACHE){
	return false;
}

	if (!php_cache_compatibility_check()){
	return false;	
	}

	
$query=md5($query);

require_once 'modules/cache/src/cache.php';

require 'functions/cache.init.php';

$resultget = $cache->get($query);
if ($resultget && $resultget!='Cache::NOT_FOUND'){
return $resultget;
}
else {
return false;
}

}

function set_cache($query, $content, $time){

if (!MAD_ENABLE_CACHE){
	return false;
}

	if (!php_cache_compatibility_check()){
	return false;	
	}

	
$query=md5($query);

require_once 'modules/cache/src/cache.php';

require 'functions/cache.init.php';

if ($cache->set($query, $content, $ttl = $time)){
return true;	
}

return false;	
}

function simple_query_maindb($query, $cache, $sec){
global $maindb;

if ($cache){
$cache_result=get_cache($query);

if ($cache_result){
return $cache_result;
}

}

if ($exec=mysql_query($query, $maindb)) 
{ 
//yay
$result = mysql_fetch_array($exec); // DEFINE ARRAY OF USER DETAILS 
if ($cache){
set_cache($query, $result, $sec);
}
return $result;
} 
else 
{
return false;
}
	
}
	



function get_placement($data){
global $request_settings;
global $errormessage;

$query="SELECT entry_id, publication_id, zone_type, zone_width, zone_height, zone_refresh, zone_channel, zone_lastrequest, mobfox_backfill_active, mobfox_min_cpc_active, min_cpc, min_cpm, backfill_alt_1, backfill_alt_2, backfill_alt_3 FROM md_zones WHERE zone_hash='".$request_settings['placement_hash']."'";

$zone_detail=simple_query_maindb($query, true, 500);

if (!$zone_detail or $zone_detail['entry_id']<1){
$errormessage='Placement not found. Please check your Placement Hash (Variable "s")';
return false;
}
else {
return $zone_detail;
}

}

function print_error($type, $message, $sdk_type, $e){
prepare_response();

global $request_settings;

switch ($request_settings['response_type']){
	
case 'html':

if ($type==0){
echo '<!-- No Ad Available -->';
}
else {
echo '<!-- '.$message.' -->';
}

break;

case 'xml':

if ($type==0){
echo '<error>No Ad Available</error>';
}
else {
echo '<error>'.$message.'</error>';
}

break;

case 'json':
// Do Nothing - Return Blank Page
break;
	
	
}

if ($e==1){
exit;
}
	
}

function validate_md5($hash){
if(!empty($hash) && preg_match('/^[a-f0-9]{32}$/', $hash)){
return true;	
}
else {
return false;	
}
}

function check_input($data){
global $request_settings;
global $errormessage;

prepare_ip($data);


if (!isset($request_settings['ip_address']) or !is_valid_ip($request_settings['ip_address'])){
$errormessage='Invalid IP Address';
return false;
}

if (!isset($data['s']) or empty($data['s']) or !validate_md5($data['s'])){
$errormessage='No valid Integration Placement ID supplied. (Variable "s")';
return false;
}

$request_settings['placement_hash']=$data['s'];

prepare_ua($data);

if (!isset($request_settings['user_agent']) or empty($request_settings['user_agent'])){
$errormessage='No User Agent supplied. (Variable "u")';
return false;
}

return true;
}

function get_mobfox_id(){
	
$query="select entry_id from md_networks where network_identifier='MOBFOX'";

if ($network_detail=simple_query_maindb($query, true, 2000)){

return $network_detail['entry_id'];

}

else {
return false;	
}

	
}

function prepare_ua($data){
global $request_settings;
	
if (isset($data["h[User-Agent]"]) && !empty($data["h[User-Agent]"])){
$request_settings['user_agent']=urldecode($data["h[User-Agent]"]);
}
else if (isset($data['u_wv']) && !empty($data['u_wv'])){
$request_settings['u_wv_available']=1;
$request_settings['u_wv']=urldecode($data['u_wv']);
$request_settings['user_agent']=urldecode($data['u_wv']);
}
else if (isset($data['u_br']) && !empty($data['u_br'])){
$request_settings['u_br_available']=1;
$request_settings['u_br']=urldecode($data['u_br']);
$request_settings['user_agent']=urldecode($data['u_br']);
}
else if (isset($data['u']) && !empty($data['u'])){
$request_settings['user_agent']=urldecode($data['u']);
}
	
	
}

function is_valid_ip($ip, $include_priv_res = true)
{
    return $include_priv_res ?
        filter_var($ip, FILTER_VALIDATE_IP) !== false :
        filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false;
}

function check_forwarded_ip($data){

if (isset($data["h[X-Forwarded-For]"]) && !empty($data["h[X-Forwarded-For]"])){
$res_array = explode(",", $data["h[X-Forwarded-For]"]); 
return $res_array[0];
}

if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && !empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
$res_array = explode(",", $_SERVER['HTTP_X_FORWARDED_FOR']);
return $res_array[0]; 
}
return false;
}

function prepare_ip($data){
global $request_settings;

switch ($request_settings['ip_origin']){
case 'request':
if (isset($data['i'])){
$request_settings['ip_address']=$data['i'];
}
break;

case 'fetch':

$forwarded_ip = check_forwarded_ip($data);

if ($forwarded_ip){
$request_settings['ip_address']=$forwarded_ip;
}
else {
$request_settings['ip_address']=$_SERVER['REMOTE_ADDR'];

}

/*is_valid_ip*/

;
	
}
	
}

function prepare_r_hash(){
global $request_settings;

$request_settings["request_hash"]=md5(uniqid(microtime()));
	
}

function prepare_response(){
global $request_settings;

switch ($request_settings['response_type']){

case 'xml':
header ("Content-Type: text/xml");
echo "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n";
break;	
	
}
	
}


?>