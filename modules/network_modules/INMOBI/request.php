<?php
class INMOBI implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'POST';
$httpConfig['timeout']    = 1;
$httpConfig['special']     = 'INMOBI';
$httpConfig['inmobisiteid']     = $network_ids['p_1'];
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner' or $request_type=='interstitial'){
$request_url='http://w.inmobi.com/showad.asm';
$http->addParam('mk-siteid'   , $network_ids['p_1']);
$http->addParam('mk-carrier'   , $request_info['ip_address']);
$http->addParam('h-user-agent'   , $request_info['user_agent']);
$http->addParam('mk-version'   , 'pr-SPEC-ATATA-20090521');
$http->addParam('h-page-url'   , $request_info['referer']);
$http->addParam('format'   , 'axml');	


if ($request_type=='interstitial'){
	
	if ($request_info['main_device']=='IPAD'){
		$http->addParam('mk-ad-slot'   , '16');	
	}
	else {
		$http->addParam('mk-ad-slot'   , '14');	
	}
	
}
else {
/*Zone Size Identification*/
if ($zone_detail['zone_width']=='300' && $zone_detail['zone_height']=='250'){
$http->addParam('mk-ad-slot'   , '10');	
}
else if ($zone_detail['zone_width']=='728' && $zone_detail['zone_height']=='90'){
$http->addParam('mk-ad-slot'   , '11');	
}	
else if ($zone_detail['zone_width']=='468' && $zone_detail['zone_height']=='60'){
$http->addParam('mk-ad-slot'   , '12');	
}	
else if ($zone_detail['zone_width']=='120' && $zone_detail['zone_height']=='600'){
$http->addParam('mk-ad-slot'   , '13');	
}	
else if ($zone_detail['zone_width']=='320' && $zone_detail['zone_height']=='480'){
$http->addParam('mk-ad-slot'   , '14');	
}	
else if ($zone_detail['zone_width']=='1024' && $zone_detail['zone_height']=='768'){
$http->addParam('mk-ad-slot'   , '16');	
}	
else if ($zone_detail['zone_width']=='1280' && $zone_detail['zone_height']=='800'){
$http->addParam('mk-ad-slot'   , '17');	
}	
else {
}
/*END: Zone Size Identification*/	
}


if (isset($_GET['rt']) && ($_GET['rt']=='iphone_app' or $_GET['rt']=='android_app' or $_GET['rt']=='ipad_app')){
if (isset($_GET['o'])){$http->addParam('u-id'   , $_GET['o']);}
$http->addParam('d-localization'   , 'en_US');
$http->addParam('d-netType'   , 'WiFi');	
}

}
else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}

if ($http->result=='' or preg_match("<!-- mKhoj: No advt for this position -->" , $http->result)){
return false;
}

try {
$xml_response = new SimpleXmlElement($http->result, LIBXML_NOCDATA);
} catch (Exception $e) {
   // handle the error
return false;
}


if (isset($xml_response->Ads->Ad['type'])) { $tempad['type']=$xml_response->Ads->Ad['type']; } else {$tempad['type']='';}
if (isset($xml_response->Ads->Ad)) { $tempad['markup']=$xml_response->Ads->Ad; } else {$tempad['markup']='';}
if (isset($xml_response->Ads->Ad->AdURL)) { $tempad['url']=$xml_response->Ads->Ad->AdURL; } else {$tempad['url']='';}

if ($tempad['url']=='null' or $tempad['url']==''){return false;}

if ($request_type=='banner'){
	
if ($tempad['type']=='banner' or $tempad['type']=='text'){
$ad=array();
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$tempad['url'];
$ad['html_markup']=$tempad['markup'];
$ad['trackingpixel']='';
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;	
}

else if ($tempad['type']=='rm'){
$ad=array();
$ad['main_type']='display';
$ad['type']='mraid-markup';
$ad['click_url']=$tempad['url'];
$ad['html_markup']=$tempad['markup'];
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
	
}

else if ($request_type=='interstitial'){
	
if ($tempad['type']=='banner' or $tempad['type']=='text'){
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