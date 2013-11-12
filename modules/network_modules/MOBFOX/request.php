<?php
class MOBFOX implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	 	  
$http = new Http();
	  
if ($request_type=='banner'){
$request_url='http://my.mobfox.com/request.php';
$http->addParam('rt'   , 'api');
$http->addParam('r_madserve'   , 1);
$http->addParam('m'   , 'live');
$http->addParam('s'   , $network_ids['p_1']);
$http->addParam('u'   , $request_info['user_agent']);
$http->addParam('i'   , $request_info['ip_address']);
$http->addParam('p'   , $request_info['referer']);
$http->addParam('longitude'   , $request_info['longitude']);
$http->addParam('latitude'   , $request_info['latitude']);
$http->addParam('adspace.height'   , $zone_detail['zone_height']);
$http->addParam('adspace.width'   , $zone_detail['zone_width']);
if (isset($_GET['demo.gender'])){$http->addParam('demo.gender'   , $_GET['demo.gender']);}
if (isset($_GET['demo.keywords'])){$http->addParam('demo.keywords'   , $_GET['demo.keywords']);}
if (isset($_GET['demo.age'])){$http->addParam('demo.age'   , $_GET['demo.age']);}
if (isset($_GET['o'])){$http->addParam('o'   , $_GET['o']);}
if (isset($_GET['v'])){$http->addParam('v'   , $_GET['v']);}
if (isset($_GET['o_mcsha1'])){$http->addParam('o_mcsha1'   , $_GET['o_mcsha1']);}
if (isset($_GET['o_mcmd5'])){$http->addParam('o_mcmd5'   , $_GET['o_mcmd5']);}
if (isset($_GET['o_openudid'])){$http->addParam('o_openudid'   , $_GET['o_openudid']);}
if (isset($_GET['o_iosadvid'])){$http->addParam('o_iosadvid'   , $_GET['o_iosadvid']);}
if (isset($_GET['c.mraid'])){$http->addParam('c.mraid'   , $_GET['c.mraid']);}
if ($backfill==1){
global $zone_detail;

if ($zone_detail['mobfox_min_cpc_active']==1 && $zone_detail['min_cpc']>0){
$http->addParam('apiset[min_cpc_active]'   , 1);
$http->addParam('apiset[min_cpc]'   , $zone_detail['min_cpc']);	
}

if ($zone_detail['mobfox_min_cpc_active']==1 && $zone_detail['min_cpm']>0){
$http->addParam('apiset[min_cpm_active]'   , 1);
$http->addParam('apiset[min_cpm]'   , $zone_detail['min_cpm']);
}
	
}
	
}

else if ($request_type=='interstitial'){
$request_url='http://my.mobfox.com/vrequest.php';
$http->addParam('rt'   , 'api');
$http->addParam('r_madserve'   , 1);
$http->addParam('m'   , 'live');
$http->addParam('s'   , $network_ids['p_1']);
$http->addParam('u'   , $request_info['user_agent']);
$http->addParam('i'   , $request_info['ip_address']);
$http->addParam('p'   , $request_info['referer']);
$http->addParam('longitude'   , $request_info['longitude']);
$http->addParam('latitude'   , $request_info['latitude']);
if (isset($_GET['demo.gender'])){$http->addParam('demo.gender'   , $_GET['demo.gender']);}
if (isset($_GET['demo.keywords'])){$http->addParam('demo.keywords'   , $_GET['demo.keywords']);}
if (isset($_GET['demo.age'])){$http->addParam('demo.age'   , $_GET['demo.age']);}
if (isset($_GET['o'])){$http->addParam('o'   , $_GET['o']);}
if (isset($_GET['v'])){$http->addParam('v'   , $_GET['v']);}
if (isset($_GET['o_mcsha1'])){$http->addParam('o_mcsha1'   , $_GET['o_mcsha1']);}
if (isset($_GET['o_mcmd5'])){$http->addParam('o_mcmd5'   , $_GET['o_mcmd5']);}
if (isset($_GET['o_openudid'])){$http->addParam('o_openudid'   , $_GET['o_openudid']);}
if (isset($_GET['o_iosadvid'])){$http->addParam('o_iosadvid'   , $_GET['o_iosadvid']);}
if (isset($_GET['c.mraid'])){$http->addParam('c.mraid'   , $_GET['c.mraid']);}

}

else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}


try {
$xml_response = new SimpleXmlElement($http->result, LIBXML_NOCDATA);
} catch (Exception $e) {
   // handle the error
return false;
}

if ($request_type=='banner'){
	
if ($xml_response['type']=='textAd'){
$ad=array();
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$xml_response->clickurl;
$ad['html_markup']=$xml_response->htmlString;
$ad['trackingpixel']='';
$ad['image_url']='';
$ad['clicktype']=$xml_response->clicktype;
$ad['refresh']=$xml_response->refresh;
$ad['skipoverlay']=$xml_response->htmlString['skipoverlaybutton'];
$ad['skippreflight']=$xml_response->skippreflight;
return $ad;
}
else if ($xml_response['type']=='mraidAd'){
$ad=array();
$ad['main_type']='display';
$ad['type']='mraid-markup';
$ad['click_url']=$xml_response->clickurl;
$ad['html_markup']=$xml_response->htmlString;
$ad['trackingpixel']='';
$ad['image_url']='';
$ad['clicktype']=$xml_response->clicktype;
$ad['refresh']=$xml_response->refresh;
$ad['skipoverlay']=$xml_response->htmlString['skipoverlaybutton'];
$ad['skippreflight']=$xml_response->skippreflight;
return $ad;
}
else {
return false;	
}

}
else if ($request_type=='interstitial'){
	
	if ($xml_response['type']=='video'){
	
	$ad=array();
	$ad['main_type']='interstitial';
	$ad['type']='video';
	$ad['animation']=$xml_response['animation'];
/* Video */
$ad['video-orientation']=$xml_response->video['orientation'];
$ad['video-expiration']=$xml_response->video['expiration'];
$ad['video-creative-display']=$xml_response->video->creative['display'];
$ad['video-creative-delivery']=$xml_response->video->creative['delivery'];
$ad['video-creative-type']=$xml_response->video->creative['type'];
$ad['video-creative-bitrate']=$xml_response->video->creative['bitrate'];
$ad['video-creative-width']=$xml_response->video->creative['width'];
$ad['video-creative-height']=$xml_response->video->creative['height'];
$ad['video-creative-url']=$xml_response->video->creative;
$ad['video-duration']=$xml_response->video->duration;
$ad['video-skipbutton-show']=$xml_response->video->skipbutton['show'];
$ad['video-skipbutton-showafter']=$xml_response->video->skipbutton['showafter'];
$ad['video-navigation-show']=$xml_response->video->navigation['show'];
$ad['video-navigation-allowtap']=$xml_response->video->navigation['allowtap'];
$ad['video-navigation-topbar-show']=$xml_response->video->navigation->topbar['show'];
$ad['video-navigation-bottombar-show']=$xml_response->video->navigation->bottombar['show'];
$ad['video-navigation-topbar-custombg']=$xml_response->video->navigation->topbar['custombackgroundurl'];
$ad['video-navigation-bottombar-custombg']=$xml_response->video->navigation->bottombar['custombackgroundurl'];
$ad['video-navigation-bottombar-pausebutton']=$xml_response->video->navigation->bottombar['pausebutton'];
$ad['video-navigation-bottombar-replaybutton']=$xml_response->video->navigation->bottombar['replaybutton'];
$ad['video-navigation-bottombar-timer']=$xml_response->video->navigation->bottombar['timer'];
$ad['video-trackers']=array();
foreach ($xml_response->video->trackingevents->tracker as $video_tracker){
$tracker_type=$video_tracker['type'];
$tracker_url=$video_tracker;
$xadd=array($tracker_type, $tracker_url);
array_push($ad['video-trackers'], $xadd);
}
$ad['video-htmloverlay-show']=$xml_response->video->htmloverlay['show'];
$ad['video-htmloverlay-showafter']=$xml_response->video->htmloverlay['showafter'];
$ad['video-htmloverlay-type']=$xml_response->video->htmloverlay['type'];
if ($ad['video-htmloverlay-type']=='url'){
$ad['video-htmloverlay-content']=$xml_response->video->htmloverlay['url'];
}
if ($ad['video-htmloverlay-type']=='markup'){
$ad['video-htmloverlay-content']=$xml_response->video->htmloverlay;
}
return $ad;
/* Video */
	}
	
	else if ($xml_response['type']=='interstitial'){
	$ad=array();	
	$ad['main_type']='interstitial';
	$ad['type']='interstitial';
	$ad['animation']=$xml_response['animation'];
/* Interstitial */
$ad['interstitial-orientation']=$xml_response->interstitial['orientation'];
$ad['interstitial-preload']=$xml_response->interstitial['preload'];
$ad['interstitial-autoclose']=$xml_response->interstitial['autoclose'];
$ad['interstitial-type']=$xml_response->interstitial['type'];
if ($ad['interstitial-type']=='url'){
$ad['interstitial-content']=$xml_response->interstitial['url'];
}
else if ($ad['interstitial-type']=='markup'){
$ad['interstitial-content']=$xml_response->interstitial->markup;
}
$ad['interstitial-skipbutton-show']=$xml_response->interstitial->skipbutton['show'];
$ad['interstitial-skipbutton-showafter']=$xml_response->interstitial->skipbutton['showafter'];
$ad['interstitial-navigation-show']=$xml_response->interstitial->navigation['show'];
$ad['interstitial-navigation-topbar-show']=$xml_response->interstitial->navigation->topbar['show'];
$ad['interstitial-navigation-bottombar-show']=$xml_response->interstitial->navigation->bottombar['show'];
$ad['interstitial-navigation-topbar-custombg']=$xml_response->interstitial->navigation->topbar['custombackgroundurl'];
$ad['interstitial-navigation-bottombar-custombg']=$xml_response->interstitial->navigation->bottombar['custombackgroundurl'];
$ad['interstitial-navigation-topbar-titletype']=$xml_response->interstitial->navigation->topbar['title'];
$ad['interstitial-navigation-topbar-titlecontent']=$xml_response->interstitial->navigation->topbar['titlecontent'];
$ad['interstitial-navigation-bottombar-backbutton']=$xml_response->interstitial->navigation->bottombar['backbutton'];
$ad['interstitial-navigation-bottombar-forwardbutton']=$xml_response->interstitial->navigation->bottombar['forwardbutton'];
$ad['interstitial-navigation-bottombar-reloadbutton']=$xml_response->interstitial->navigation->bottombar['reloadbutton'];
$ad['interstitial-navigation-bottombar-externalbutton']=$xml_response->interstitial->navigation->bottombar['externalbutton'];
$ad['interstitial-navigation-bottombar-timer']=$xml_response->interstitial->navigation->bottombar['timer'];
/* Interstitial */
return $ad;
	}
	
	else if ($xml_response['type']=='interstitial-to-video'){
	$ad=array();
	$ad['main_type']='interstitial';	
	$ad['type']='interstitial-video';
	$ad['animation']=$xml_response['animation'];
	/* Interstitial */
$ad['interstitial-orientation']=$xml_response->interstitial['orientation'];
$ad['interstitial-preload']=$xml_response->interstitial['preload'];
$ad['interstitial-autoclose']=$xml_response->interstitial['autoclose'];
$ad['interstitial-type']=$xml_response->interstitial['type'];
if ($ad['interstitial-type']=='url'){
$ad['interstitial-content']=$xml_response->interstitial['url'];
}
else if ($ad['interstitial-type']=='markup'){
$ad['interstitial-content']=$xml_response->interstitial->markup;
}
$ad['interstitial-skipbutton-show']=$xml_response->interstitial->skipbutton['show'];
$ad['interstitial-skipbutton-showafter']=$xml_response->interstitial->skipbutton['showafter'];
$ad['interstitial-navigation-show']=$xml_response->interstitial->navigation['show'];
$ad['interstitial-navigation-topbar-show']=$xml_response->interstitial->navigation->topbar['show'];
$ad['interstitial-navigation-bottombar-show']=$xml_response->interstitial->navigation->bottombar['show'];
$ad['interstitial-navigation-topbar-custombg']=$xml_response->interstitial->navigation->topbar['custombackgroundurl'];
$ad['interstitial-navigation-bottombar-custombg']=$xml_response->interstitial->navigation->bottombar['custombackgroundurl'];
$ad['interstitial-navigation-topbar-titletype']=$xml_response->interstitial->navigation->topbar['title'];
$ad['interstitial-navigation-topbar-titlecontent']=$xml_response->interstitial->navigation->topbar['titlecontent'];
$ad['interstitial-navigation-bottombar-backbutton']=$xml_response->interstitial->navigation->bottombar['backbutton'];
$ad['interstitial-navigation-bottombar-forwardbutton']=$xml_response->interstitial->navigation->bottombar['forwardbutton'];
$ad['interstitial-navigation-bottombar-reloadbutton']=$xml_response->interstitial->navigation->bottombar['reloadbutton'];
$ad['interstitial-navigation-bottombar-externalbutton']=$xml_response->interstitial->navigation->bottombar['externalbutton'];
$ad['interstitial-navigation-bottombar-timer']=$xml_response->interstitial->navigation->bottombar['timer'];
/* Interstitial */
/* Video */
$ad['video-orientation']=$xml_response->video['orientation'];
$ad['video-expiration']=$xml_response->video['expiration'];
$ad['video-creative-display']=$xml_response->video->creative['display'];
$ad['video-creative-delivery']=$xml_response->video->creative['delivery'];
$ad['video-creative-type']=$xml_response->video->creative['type'];
$ad['video-creative-bitrate']=$xml_response->video->creative['bitrate'];
$ad['video-creative-width']=$xml_response->video->creative['width'];
$ad['video-creative-height']=$xml_response->video->creative['height'];
$ad['video-creative-url']=$xml_response->video->creative;
$ad['video-duration']=$xml_response->video->duration;
$ad['video-skipbutton-show']=$xml_response->video->skipbutton['show'];
$ad['video-skipbutton-showafter']=$xml_response->video->skipbutton['showafter'];
$ad['video-navigation-show']=$xml_response->video->navigation['show'];
$ad['video-navigation-allowtap']=$xml_response->video->navigation['allowtap'];
$ad['video-navigation-topbar-show']=$xml_response->video->navigation->topbar['show'];
$ad['video-navigation-bottombar-show']=$xml_response->video->navigation->bottombar['show'];
$ad['video-navigation-topbar-custombg']=$xml_response->video->navigation->topbar['custombackgroundurl'];
$ad['video-navigation-bottombar-custombg']=$xml_response->video->navigation->bottombar['custombackgroundurl'];
$ad['video-navigation-bottombar-pausebutton']=$xml_response->video->navigation->bottombar['pausebutton'];
$ad['video-navigation-bottombar-replaybutton']=$xml_response->video->navigation->bottombar['replaybutton'];
$ad['video-navigation-bottombar-timer']=$xml_response->video->navigation->bottombar['timer'];
$ad['video-trackers']=array();
foreach ($xml_response->video->trackingevents->tracker as $video_tracker){
$tracker_type=$video_tracker['type'];
$tracker_url=$video_tracker;
$xadd=array($tracker_type, $tracker_url);
array_push($ad['video-trackers'], $xadd);
}
$ad['video-htmloverlay-show']=$xml_response->video->htmloverlay['show'];
$ad['video-htmloverlay-showafter']=$xml_response->video->htmloverlay['showafter'];
$ad['video-htmloverlay-type']=$xml_response->video->htmloverlay['type'];
if ($ad['video-htmloverlay-type']=='url'){
$ad['video-htmloverlay-content']=$xml_response->video->htmloverlay['url'];
}
if ($ad['video-htmloverlay-type']=='markup'){
$ad['video-htmloverlay-content']=$xml_response->video->htmloverlay;
}
/* Video */

	return $ad;
	}
	
	else if ($xml_response['type']=='video-to-interstitial'){
	$ad=array();
	$ad['main_type']='interstitial';
	$ad['type']='video-interstitial';
	$ad['animation']=$xml_response['animation'];
		/* Interstitial */
$ad['interstitial-orientation']=$xml_response->interstitial['orientation'];
$ad['interstitial-preload']=$xml_response->interstitial['preload'];
$ad['interstitial-autoclose']=$xml_response->interstitial['autoclose'];
$ad['interstitial-type']=$xml_response->interstitial['type'];
if ($ad['interstitial-type']=='url'){
$ad['interstitial-content']=$xml_response->interstitial['url'];
}
else if ($ad['interstitial-type']=='markup'){
$ad['interstitial-content']=$xml_response->interstitial->markup;
}
$ad['interstitial-skipbutton-show']=$xml_response->interstitial->skipbutton['show'];
$ad['interstitial-skipbutton-showafter']=$xml_response->interstitial->skipbutton['showafter'];
$ad['interstitial-navigation-show']=$xml_response->interstitial->navigation['show'];
$ad['interstitial-navigation-topbar-show']=$xml_response->interstitial->navigation->topbar['show'];
$ad['interstitial-navigation-bottombar-show']=$xml_response->interstitial->navigation->bottombar['show'];
$ad['interstitial-navigation-topbar-custombg']=$xml_response->interstitial->navigation->topbar['custombackgroundurl'];
$ad['interstitial-navigation-bottombar-custombg']=$xml_response->interstitial->navigation->bottombar['custombackgroundurl'];
$ad['interstitial-navigation-topbar-titletype']=$xml_response->interstitial->navigation->topbar['title'];
$ad['interstitial-navigation-topbar-titlecontent']=$xml_response->interstitial->navigation->topbar['titlecontent'];
$ad['interstitial-navigation-bottombar-backbutton']=$xml_response->interstitial->navigation->bottombar['backbutton'];
$ad['interstitial-navigation-bottombar-forwardbutton']=$xml_response->interstitial->navigation->bottombar['forwardbutton'];
$ad['interstitial-navigation-bottombar-reloadbutton']=$xml_response->interstitial->navigation->bottombar['reloadbutton'];
$ad['interstitial-navigation-bottombar-externalbutton']=$xml_response->interstitial->navigation->bottombar['externalbutton'];
$ad['interstitial-navigation-bottombar-timer']=$xml_response->interstitial->navigation->bottombar['timer'];
/* Interstitial */
/* Video */
$ad['video-orientation']=$xml_response->video['orientation'];
$ad['video-expiration']=$xml_response->video['expiration'];
$ad['video-creative-display']=$xml_response->video->creative['display'];
$ad['video-creative-delivery']=$xml_response->video->creative['delivery'];
$ad['video-creative-type']=$xml_response->video->creative['type'];
$ad['video-creative-bitrate']=$xml_response->video->creative['bitrate'];
$ad['video-creative-width']=$xml_response->video->creative['width'];
$ad['video-creative-height']=$xml_response->video->creative['height'];
$ad['video-creative-url']=$xml_response->video->creative;
$ad['video-duration']=$xml_response->video->duration;
$ad['video-skipbutton-show']=$xml_response->video->skipbutton['show'];
$ad['video-skipbutton-showafter']=$xml_response->video->skipbutton['showafter'];
$ad['video-navigation-show']=$xml_response->video->navigation['show'];
$ad['video-navigation-allowtap']=$xml_response->video->navigation['allowtap'];
$ad['video-navigation-topbar-show']=$xml_response->video->navigation->topbar['show'];
$ad['video-navigation-bottombar-show']=$xml_response->video->navigation->bottombar['show'];
$ad['video-navigation-topbar-custombg']=$xml_response->video->navigation->topbar['custombackgroundurl'];
$ad['video-navigation-bottombar-custombg']=$xml_response->video->navigation->bottombar['custombackgroundurl'];
$ad['video-navigation-bottombar-pausebutton']=$xml_response->video->navigation->bottombar['pausebutton'];
$ad['video-navigation-bottombar-replaybutton']=$xml_response->video->navigation->bottombar['replaybutton'];
$ad['video-navigation-bottombar-timer']=$xml_response->video->navigation->bottombar['timer'];
$ad['video-trackers']=array();
foreach ($xml_response->video->trackingevents->tracker as $video_tracker){
$tracker_type=$video_tracker['type'];
$tracker_url=$video_tracker;
$xadd=array($tracker_type, $tracker_url);
array_push($ad['video-trackers'], $xadd);
}
$ad['video-htmloverlay-show']=$xml_response->video->htmloverlay['show'];
$ad['video-htmloverlay-showafter']=$xml_response->video->htmloverlay['showafter'];
$ad['video-htmloverlay-type']=$xml_response->video->htmloverlay['type'];
if ($ad['video-htmloverlay-type']=='url'){
$ad['video-htmloverlay-content']=$xml_response->video->htmloverlay['url'];
}
if ($ad['video-htmloverlay-type']=='markup'){
$ad['video-htmloverlay-content']=$xml_response->video->htmloverlay;
}
/* Video */

	return $ad;
	}
	
	else {
	return false;	
	}


}
	
	  }
}
?>