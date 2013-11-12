<?php
class FOURINFO implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'POST';
$httpConfig['timeout']    = '1';

	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://api.4info.com/AdHaven/v1/getAd';
$http->addParam('api_key'   , $network_ids['p_1']);
$http->addParam('placement_id'   , $network_ids['p_2']);
$http->addParam('date'   , gmdate(DATE_RFC1123));
$http->addParam('header_user-agent'   , $request_info['user_agent']);
$http->addParam('header_REMOTE_ADDR'   , $request_info['ip_address']);
$http->addParam('client_ip'   , $request_info['ip_address']);
if (isset($_GET['o'])){$http->addParam('device_id'   , $_GET['o']);}
$http->addParam('lat_lon'   , $request_info['latitude'] . ',' . $request_info['longitude']);


}
else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}

if ($http->result==''){
return false;
}

try {
$xml_response = new SimpleXmlElement($http->result, LIBXML_NOCDATA);
} catch (Exception $e) {
   // handle the error
return false;
}


if (isset($xml_response->ad->markup)){
$tempad['markup']=$xml_response->ad->markup;
}
else {
return false;	
}

if ($tempad['markup']==''){
return false;	
}

if (preg_match("/href='([^']*)'/i", $tempad['markup'] , $regs)){
$tempad['url'] = $regs[1]; }

else if (preg_match('/href="([^"]*)"/i', $tempad['markup'] , $regsx)){
$tempad['url'] = $regsx[1]; }


if (preg_match("/src='([^']*)'/i", $tempad['markup'] , $regsa)){
$tempad['image'] = $regsa[1]; }

else if (preg_match('/src="([^"]*)"/i', $tempad['markup'] , $regsax)){
$tempad['image'] = $regsax[1]; }

if (isset($tempad['image']) && isset ($tempad['url'])){

$tempad['url'] = str_replace("&amp;", "&", $tempad['url']);	

$ad=array();
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$tempad['url'];
$ad['trackingpixel']='';
$ad['image_url']=$tempad['image'];
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;
}
else {
return false;
}





/*F:END*/

}
	
	  }

?>