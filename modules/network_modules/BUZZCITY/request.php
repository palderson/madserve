<?php
class BUZZCITY implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch JSON Exceptions*/
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://show.buzzcity.net/showads.php';
$http->addParam('partnerid'   , $network_ids['p_1']);
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('ip'   , $request_info['ip_address']);
if ($request_info['main_device']=='IPAD'){
$http->addParam('get'   , 'tab');
}
else {
$http->addParam('get'   , 'mweb');	
}
$http->addParam('limit'   , 1);
$http->addParam('wait'   , 0);

if ($request_info['main_device']=='IPAD' or $request_info['main_device']=='IPHONE' or $request_info['main_device']=='IPOD TOUCH'){
$http->addParam('browser'   , 'app_apple');		
}
else if ($request_info['main_device']=='ANDROID'){
$http->addParam('browser'   , 'app_android');	
}	
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


	
if (!empty($json_response->error->errmsg)){
	return false; 
}

else if (isset($json_response->data[0]->campaign[0]->cid) && !empty($json_response->data[0]->campaign[0]->cid)) {

$ad_temp['bc_show_url']=$json_response->data[0]->url_show;
$ad_temp['bc_click_url']=$json_response->data[0]->url_click;
$ad_temp['cid']=$json_response->data[0]->campaign[0]->cid;
$ad_temp['image']=str_replace("\$cid", $ad_temp['cid'], $ad_temp['bc_show_url']);
$ad_temp['url']=str_replace("\$cid", $ad_temp['cid'], $ad_temp['bc_click_url']);
	
$ad=array();
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$ad_temp['url'];
$ad['trackingpixel']='';
$ad['image_url']=$ad_temp['image'];
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;
}


/*F:END*/

}
	
	  }

?>