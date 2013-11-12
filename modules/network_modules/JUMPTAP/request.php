<?php
class JUMPTAP implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://a.jumptap.com/a/ads';
$http->addParam('pub'   , $network_ids['p_1']);
$http->addParam('site'   , $network_ids['p_2']);
$http->addParam('spot'   , $network_ids['p_3']);
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('gateway-ip'   , $request_info['ip_address']);
$http->addParam('client-ip'   , $request_info['ip_address']);
$http->addParam('v'   , 'v30');
$http->addParam('l'   , 'en');
$http->addParam('url'   , urlencode($request_info['referer']));
if (isset($_GET['o'])){$http->addParam('hid'   , $_GET['o']);}
else if (isset($_GET['o_mcsha1'])){$http->addParam('mac_sha1'   , md5($_GET['o_mcsha1']));}

}
else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}


// GET AD LINK
if (preg_match('/href="([^"]*)"/i', $http->result , $regs)){
$tempad['url']=$regs[1]; } else {$tempad['url']='';}

// GET AD IMAGE URL
if (preg_match('/src="([^"]*)"/i', $http->result , $regsa)){
$tempad['image'] = $regsa[1]; } else {$tempad['image']='';}


if ($tempad['url']!="" && $tempad['image']!=""){
	

$ad=array();


$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$tempad['url'];
$ad['html_markup']=$http->result;
$ad['trackingpixel']='';
$ad['image_url']='';
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