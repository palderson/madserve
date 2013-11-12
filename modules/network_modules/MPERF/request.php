<?php
class MPERF implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'POST';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://www.admanji.com/getAd.php';
$http->addParam('s'   , $network_ids['p_1']);
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('ra'   , $request_info['ip_address']);
$http->addParam('b'   , '0');

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

else {
return false;	
}

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

/*F:END*/

}
	
	  }

?>