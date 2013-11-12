<?php

function prepare_click_url($input){
$output = base64_decode(strtr($input, '-_,', '+/='));
return $output;	
}

function redirect($data){
header ("Location: ".prepare_click_url($data['c'])."");	
}

function track($data){
	
$cache_key='click_'.$data['h'].'';
	
if (MAD_TRACK_UNIQUE_CLICKS){

$cache_result=get_cache($cache_key);

if ($cache_result && $cache_result==1){
return false;
}
else {
set_cache($cache_key, 1, 500);	
}

}

if (!is_numeric($data['zone_id'])){
return false;	
}
	
/* Get the Publication */
$query="SELECT publication_id FROM md_zones WHERE entry_id='".$data['zone_id']."'";

$zone_detail=simple_query_maindb($query, true, 1000);

if (!$zone_detail or $zone_detail['publication_id']<1){
return false;
}

	
switch($data['type']){

case 'normal':
reporting_db_update($zone_detail['publication_id'], $data['zone_id'], $data['campaign_id'], $data['ad_id'], '', 0, 0, 0, 1);
break;

case 'network':
reporting_db_update($zone_detail['publication_id'], $data['zone_id'], $data['campaign_id'], '', $data['network_id'], 0, 0, 0, 1);
break;

case 'backfill':
reporting_db_update($zone_detail['publication_id'], $data['zone_id'], '', '', $data['network_id'], 0, 0, 0, 1);
break;

}
	
}

function handle_click($data){
	
if (!isset($data['c']) or empty($data['c']) or !isset($data['type'])){
exit;	
}

if (MAD_CLICK_IMMEDIATE_REDIRECT){
ob_start();
$size = ob_get_length();

 // send headers to tell the browser to close the connection
redirect($data);
header("Content-Length: $size");
header('Connection: close');
 
// flush all output
ob_end_flush();
ob_flush();
flush();

track($data);

}

else {
	
track($data);
redirect($data);
	
}


}
?>