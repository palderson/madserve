<?php
class MADVERTISE implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'POST';
$httpConfig['timeout']    = '1';
$httpConfig['special']     = 'MADVERTISE';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://ad.madvertise.de/site/'.$network_ids['p_1'].'';
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('ip'   , $request_info['ip_address']);
$http->addParam('url'   , $request_info['referer']);
$http->addParam('requester'   , 'madserve_api');
$http->addParam('version'   , 'api_2.1');
$http->addParam('lng'   , $request_info['longitude']);
$http->addParam('lat'   , $request_info['latitude']);
$http->addParam('site_url'   , $request_info['referer']);
$http->addParam('must_have_banner'   , true);


/*Zone Size Identification*/
if ($zone_detail['zone_width']=='766' && $zone_detail['zone_height']=='66'){
$http->addParam('banner_type'   , 'portrait');	
}
else if ($zone_detail['zone_width']=='300' && $zone_detail['zone_height']=='250'){
$http->addParam('banner_type'   , 'medium_rectangle,mma');	
}	
else if ($zone_detail['zone_width']=='1024' && $zone_detail['zone_height']=='66'){
$http->addParam('banner_type'   , 'landscape');	
}	
else if ($zone_detail['zone_width']=='768' && $zone_detail['zone_height']=='768'){
$http->addParam('banner_type'   , 'fullscreen');	
}	
else if ($zone_detail['zone_width']=='728' && $zone_detail['zone_height']=='90'){
$http->addParam('banner_type'   , 'leaderboard');	
}	
else {
$http->addParam('banner_type'   , 'mma');		
}
/*END: Zone Size Identification*/

if (isset($_GET['o'])){$http->addParam('unique_device_id'   , $_GET['o']);}
else if (isset($_GET['o_mcsha1'])){$http->addParam('unique_device_id'   , $_GET['o_mcsha1']);}
else if (isset($_GET['o_mcmd5'])){$http->addParam('unique_device_id'   , $_GET['o_mcmd5']);}
else if (isset($_GET['o_openudid'])){$http->addParam('unique_device_id'   , $_GET['o_openudid']);}
}
else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}

try {
$xml_response = new SimpleXmlElement($http->result, LIBXML_NOCDATA);
} catch (Exception $e) {
   // handle the error
return false;
}

if (isset($xml_response->click_url) && isset($xml_response->banner_url) && !empty($xml_response->banner_url)) {
	
$ad=array();

$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$xml_response->click_url;
if (isset($xml_response->tracking->url) && !empty($xml_response->tracking->url)){
$ad['trackingpixel']=$xml_response->tracking->url;
}
else {
$ad['trackingpixel']='';	
}
$ad['image_url']=$xml_response->banner_url;
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