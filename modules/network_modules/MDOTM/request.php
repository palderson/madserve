<?php
class MDOTM implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://ads.mdotm.com/ads/feed.php';
$http->addParam('partnerkey'   , $network_ids['p_1']);
$http->addParam('apikey'   , $network_ids['p_2']);
$http->addParam('secretkey'   , $network_ids['p_3']);
$http->addParam('appkey'   , $network_ids['p_4']);
if (isset($_GET['o'])){$http->addParam('deviceid'   , $_GET['o']);}
else if (isset($_GET['o_mcsha1'])){$http->addParam('deviceid'   , $_GET['o_mcsha1']);}
else if (isset($_GET['o_mcmd5'])){$http->addParam('deviceid'   , $_GET['o_mcmd5']);}
else if (isset($_GET['o_openudid'])){$http->addParam('deviceid'   , $_GET['o_openudid']);}
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('clientip'   , $request_info['ip_address']);
$http->addParam('height'   , $zone_detail['zone_height']);
$http->addParam('width'   , $zone_detail['zone_width']);
$http->addParam('fmt'   , 'json');

}
else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}

try {
$json_response = json_decode($http->result);
} catch (Exception $e) {
   // handle the error
return false;
}

if (isset($json_response[0]->img_url)) { $tempad['image']=$json_response[0]->img_url; } else {$tempad['image']='';}
if (isset($json_response[0]->landing_url)) { $tempad['url']=$json_response[0]->landing_url; } else {$tempad['url']='';}


if ($tempad['image']!='' && $tempad['url']) {

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