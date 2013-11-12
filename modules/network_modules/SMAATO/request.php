<?php
class SMAATO implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/

if  (!in_array  ('curl', get_loaded_extensions())) {
		return false;
	}
	  
global $zone_detail;
	  
	  
if ($request_type=='banner' or $request_type=='interstitial'){
$request_url='http://soma.smaato.net/oapi/reqAd.jsp?adspace='.$network_ids['p_1'].'&pub='.$network_ids['p_2'].'&client=somaapi-400&devip='.$request_info['ip_address'].'&device='.urlencode($request_info['user_agent']).'&format=img&formatstrict=false&dimensionstrict=true&response=XML&height='.$zone_detail['zone_height'].'&width='.$zone_detail['zone_width'].'';

if (isset($_GET['o'])){ $request_url=$request_url . '&ownid=' . $_GET['o']; }


/*Zone Size Identification*/
if ($request_type=='interstitial'){
	$request_url=$request_url . '&dimension=medrect';

}
else {
if ($zone_detail['zone_width']=='300' && $zone_detail['zone_height']=='250'){
$request_url=$request_url . '&dimension=medrect';
}
else if ($zone_detail['zone_width']=='120' && $zone_detail['zone_height']=='600'){
$request_url=$request_url . '&dimension=sky';
}	
else if ($zone_detail['zone_width']=='728' && $zone_detail['zone_height']=='90'){
$request_url=$request_url . '&dimension=Leader';
}	
else {
$request_url=$request_url . '&dimension=mma';
}
}
/*END: Zone Size Identification*/	

}
else {
return false;	
}

if (!$ch = curl_init("$request_url")){return false; }
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_TIMEOUT, 1);
if (!$data = curl_exec($ch)){return false;}
curl_close($ch);

try {
$xml_response = new SimpleXmlElement($data, LIBXML_NOCDATA);
} catch (Exception $e) {
   // handle the error
return false;
}



if (isset($xml_response->ads->ad->link)) { $tempad['image']=$xml_response->ads->ad->link; } else {$tempad['image']='';}
if (isset($xml_response->ads->ad->mediadata)) { $tempad['markup']=$xml_response->ads->ad->mediadata; } else {$tempad['markup']='';}
if (isset($xml_response->ads->ad->adtext)) { $tempad['text']=$xml_response->ads->ad->adtext; } else {$tempad['text']='';}
if (isset($xml_response->ads->ad->action['target'])) { $tempad['url']=$xml_response->ads->ad->action['target']; } else {$tempad['url']='';}
if (isset($xml_response->ads->ad['type'])) { $tempad['type']=$xml_response->ads->ad['type']; } else {$tempad['type']='';}
if (isset($xml_response->ads->ad->beacons->beacon)) { $tempad['pixel']=$xml_response->ads->ad->beacons->beacon; } else {$tempad['pixel']='';}


if ($request_type=='banner'){
	
if ($tempad['type']=='IMG'){
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

else if ($tempad['type']=='TXT'){
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

else if ($tempad['type']=='RICHMEDIA'){
$ad=array();
$ad['main_type']='display';
$ad['type']='mraid-markup';
$ad['click_url']=$xml_response->clickurl;
$tempad['markup'] = str_replace("\n","",$tempad['markup']);
$ad['html_markup']=$tempad['markup'];
$ad['trackingpixel']=$tempad['pixel'];
$ad['image_url']='';
$ad['clicktype']='inapp';
$ad['skipoverlay']=1;
$ad['skippreflight']='yes';
return $ad;
}

else {
return false;	
}
	
}

else if ($request_type=='interstitial'){
	
	if ($tempad['type']=='IMG'){

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






/*F:END*/

}
	
	  }

?>