<?php
class ADFONIC implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
error_reporting(0); /*Catch JSON Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
	  
if ($request_type=='banner' or $request_type=='interstitial'){
$request_url='http://adfonic.net/ad/'.$network_ids['p_1'].'?t.markup=0&h.user-agent='.urlencode($request_info['user_agent']).'&t.format=json&r.ip='.$request_info['ip_address'].'&r.client=mAdserve1';


if (isset($_GET['o'])){$request_url = $request_url . '&d.dpid=' . sha1($request_info['o']);}
if (isset($_GET['o_openudid'])){ $request_url = $request_url . '&d.dpid=' . $request_info['o_openudid'];}
if (isset($_GET['o_mcsha1'])){ $request_url = $request_url . '&d.dpid=' . $request_info['o_mcsha1'];}


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


if (isset($json_response->{'components'}->{'image'}->{'url'})) { $tempad['image']=$json_response->{'components'}->{'image'}->{'url'}; } else {$tempad['image']='';}
if (isset($json_response->{'destination'}->{'url'})) { $tempad['url']=$json_response->{'destination'}->{'url'}; } else {$tempad['url']='';}
if (isset($json_response->{'format'})) { $tempad['type']=$json_response->{'format'}; } else {$tempad['type']='';}
if (isset($json_response->{'components'}->{'text'}->{'content'})) { $tempad['text']=$json_response->{'components'}->{'text'}->{'content'}; } else {$tempad['text']='';}
if (isset($json_response->{'components'}->{'beacons'}->{'beacon1'})) { $tempad['pixel']=$json_response->{'components'}->{'beacons'}->{'beacon1'}; } else {$tempad['pixel']='';}


if ($request_type=='banner'){
	
if ($tempad['url']!='' && ($tempad['type']=="text" or $tempad['type']=="banner")){

if ($tempad['type']=='text'){
$ad=array();
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$tempad['url'];
$ad['html_markup']='<a href="'.$tempad['url'].'">'.$tempad['text'].'</a>';
$ad['trackingpixel']=$tempad['pixel'];
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;
}
else if ($tempad['type']=='banner'){
$ad=array();
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$tempad['url'];
$ad['trackingpixel']=$tempad['pixel'];
$ad['image_url']=$tempad['image'];
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
	
}
else if ($request_type=='interstitial'){
	
if ($tempad['url']!='' && $tempad['image']!=''){
	
$ad=array();	
$ad['main_type']='interstitial';
$ad['type']='interstitial';
$ad['animation']='None';
/* Interstitial */
$ad['interstitial-orientation']='portrait';
$ad['interstitial-preload']=0;
$ad['interstitial-autoclose']=0;
$ad['interstitial-type']='markup';
$ad['interstitial-content']='<meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" name="viewport" />
<meta name="viewport" content="width=device-width" /><div style="position:absolute;top:0;left:0;"><a href="mfox:external:'.$tempad['url'].'"><img src="'.$tempad['image'].'"></a>' . '<img style="display:none;" src="'.$tempad['pixel'].'"/>' . '</div>';
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



	
	  }
}
?>