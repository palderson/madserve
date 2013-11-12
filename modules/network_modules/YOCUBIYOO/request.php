<?php
class YOCUBIYOO implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
$httpConfig['referrer']   = $request_info['referer'];
$httpConfig['user_agent'] = $request_info['user_agent'];
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://adserver.ubiyoo.com/adbanner.php';

$http->addParam('who'   , $network_ids['p_1']);
$http->addParam('format'   , 'adsnipplet');
$http->addParam('gateway'   , $request_info['ip_address']);
$http->addParam('width'   , $zone_detail['zone_width']);
if (isset($_GET['o'])){$http->addParam('cid'   , md5($_GET['o']));}
else if (isset($_GET['o_mcsha1'])){$http->addParam('cid'   , md5($_GET['o_mcsha1']));}
else if (isset($_GET['o_mcmd5'])){$http->addParam('cid'   , md5($_GET['o_mcmd5']));}
else if (isset($_GET['o_openudid'])){$http->addParam('cid'   , md5($_GET['o_openudid']));}

}
else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}

if (substr($http->result,0,2) == '<p') {

// GET AD LINK
if (preg_match('/href="([^"]*)"/i', $http->result , $regs)){
$ad['url'] = $regs[1]; }

// GET AD IMAGE URL
if (preg_match('/src="([^"]*)"/i', $http->result , $regsa)){
$ad['image'] = $regsa[1]; }

if ($ad['url']!="" && $ad['image']!=""){
	
$ad=array();
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$ad['url'];
$ad['trackingpixel']='';
$ad['image_url']=$ad['image'];
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;	
	
}
else {
return false;	
}

}

else {
return false;	
}

/*F:END*/

}
	
	  }

?>