<?php
class NEXAGE implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner' or $request_type=='interstitial'){
$request_url='http://sjc.ads.nexage.com/adServe';
$http->addParam('dcn'   , $network_ids['p_1']);
$http->addParam('pos'   , $network_ids['p_2']);
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('ip'   , $request_info['ip_address']);
if (isset($_GET['o'])){$http->addParam('d(id2)'   , sha1($_GET['o']));}
if (isset($_GET['o_mcsha1'])){$http->addParam('d(id3)'   , $_GET['o_mcsha1']);}
if (isset($_GET['o_mcmd5'])){$http->addParam('d(id13)'   , $_GET['o_mcmd5']);}
$http->addParam('req(url)'   , urlencode($request_info['referer']));


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

if ($request_type=='banner'){
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
$ad['click_url'] = str_replace('&amp;', '&', $ad['click_url']);
$ad['html_markup'] = str_replace('&amp;', '&', $ad['html_markup']);
return $ad;
}
else if ($request_type=='interstitial'){
$ad=array();	
$ad['main_type']='interstitial';
$ad['type']='interstitial';
$ad['animation']='None';
/* Interstitial */
$ad['interstitial-orientation']='portrait';
$ad['interstitial-preload']=0;
$ad['interstitial-autoclose']=0;
$ad['interstitial-type']='markup';
$ad['interstitial-content']=$http->result;
$ad['interstitial-skipbutton-show']=1;
$ad['interstitial-skipbutton-showafter']=0;
$ad['interstitial-navigation-show']=0;
$ad['interstitial-navigation-topbar-show']=0;
$ad['interstitial-navigation-bottombar-show']=0;
$ad['interstitial-navigation-topbar-custombg']='';
$ad['interstitial-navigation-bottombar-custombg']='';
$ad['interstitial-navigation-topbar-titletype']='fixed';
$ad['interstitial-navigation-topbar-titlecontent']='';
$ad['interstitial-navigation-bottombar-backbutton']=0;
$ad['interstitial-navigation-bottombar-forwardbutton']=0;
$ad['interstitial-navigation-bottombar-reloadbutton']=0;
$ad['interstitial-navigation-bottombar-externalbutton']=0;
$ad['interstitial-navigation-bottombar-timer']=0;
$ad['interstitial-content'] = str_replace('&amp;', '&', $ad['interstitial-content']);
/* Interstitial */
return $ad;
}


/*F:END*/

}
	
	  }

?>