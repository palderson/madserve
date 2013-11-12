<?php
class IVDOPIA implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner' or $request_type=='interstitial'){
$request_url='http://serve.vdopia.com/adserver/html5/adFetch/';
$http->addParam('ak'   , $network_ids['p_1']);
if ($request_type=='banner'){
$http->addParam('adFormat'   , 'vdobanner');
}
else if ($request_type=='interstitial'){
$http->addParam('adFormat'   , 'preappvideo');
}

$http->addParam('output'   , 'xhtml');
$http->addParam('showClose'   , '0');
$http->addParam('sleepAfter'   , '0');
$http->addParam('version'   , '1.0');
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('ipAddress'   , $request_info['ip_address']);

if (isset($_GET['o'])){$http->addParam('di'   , sha1($_GET['o'])); $http->addParam('dif'   , 'ds');}
else if (isset($_GET['o_mcsha1'])){$http->addParam('di'   , $_GET['o_mcsha1']); $http->addParam('ms'   , 'ds');}
else if (isset($_GET['o_mcmd5'])){$http->addParam('di'   , $_GET['o_mcmd5']); $http->addParam('mm'   , 'ds');}

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

if (isset($xml_response->xhtml)){$tempad['markup']=$xml_response->xhtml;} else {$tempad['markup']='';}
if (isset($xml_response['type'])){$tempad['type']=$xml_response['type'];} else {$tempad['type']='';}

if ($tempad['type']=='error'){
return false;	
}

if ($tempad['markup']!=''){
if ($request_type=='banner'){
$ad=array();
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']='';
$ad['html_markup']=$tempad['markup'];
$ad['trackingpixel']='';
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
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
$ad['interstitial-content']=$tempad['markup'];
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
/* Interstitial */
return $ad;
}
}

else {
return false;	
}





//old below

// GET AD LINK
if (preg_match('/href="([^"]*)"/i', $http->result , $regs)){
$tempad['url']=$regs[1]; } else {$tempad['url']='';}

// GET AD IMAGE URL
if (preg_match('/src="([^"]*)"/i', $http->result , $regsa)){
$tempad['image'] = $regsa[1]; } else {$tempad['image']='';}


if ($ad['url']!="" && $ad['image']!=""){

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