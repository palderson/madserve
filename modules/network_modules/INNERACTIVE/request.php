<?php
class INNERACTIVE implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://m2m1.inner-active.mobi/simpleM2M/clientRequestEnhancedHtmlAd';
$http->addParam('aid'   , $network_ids['p_1']);
$http->addParam('v'   , 'Sm2m-1.5.3');
if ($request_info['main_device']=='IPHONE' or $request_info['main_device']=='IPOD TOUCH'){
$http->addParam('po'   , '642');	
}
else if ($request_info['main_device']=='IPAD'){
$http->addParam('po'   , '947');	
}
else if ($request_info['main_device']=='ANDROID'){
$http->addParam('po'   , '559');	
}
else {
$http->addParam('po'   , '551');	
}

$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('cip'   , $request_info['ip_address']);
if (isset($_GET['o'])){$http->addParam('hid'   , md5($_GET['o']));}

}
else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}


if ($http->result=='' or !preg_match('<input type="hidden" id="inneractive-error" value="OK" />' , $http->result)){
return false;
}

$ad=array();
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']='';
$ad['html_markup']=$ad['markup'];
$ad['trackingpixel']='';
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=1;
$ad['skippreflight']='yes';
return $ad;




//old below

/*F:END*/

}
	
	  }

?>