<?php
class MILLENNIALMEDIA implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://ads.mp.mydas.mobi/getAd.php5';
$http->addParam('apid'   , $network_ids['p_1']);
$http->addParam('uip'   , $request_info['ip_address']);
$http->addParam('ua'   , $request_info['user_agent']);
if (isset($_GET['o'])){$http->addParam('auid'   , $_GET['o']);}
else if (isset($_GET['o_mcsha1'])){$http->addParam('auid'   , $_GET['o_mcsha1']);}
else { $http->addParam('auid'   , $request_info['ip_address']); }
}
else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}


if (preg_match("/href='([^']*)'/i", $http->result , $regs)){
$tempad['url'] = $regs[1]; }

else if (preg_match('/href="([^"]*)"/i', $http->result , $regsx)){
$tempad['url'] = $regsx[1]; }

else if (preg_match("<script>" , $http->result)){
$tempad['url']='';
}

else if (preg_match("<noscript>" , $http->result)){
$tempad['url']='';
}

else {
return false;	
}

$ad=array();
$ad['main_type']='display';
$ad['type']='markup';
$tempad['url'] = str_replace("&amp;", "&", $tempad['url']);	
$ad['click_url']=$tempad['url'];
$tempad['markup'] = str_replace("&amp;", "&", $http->result);	
$ad['html_markup']=$tempad['markup'];
$ad['trackingpixel']='';
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;	



/*F:END*/

}
	
	  }

?>