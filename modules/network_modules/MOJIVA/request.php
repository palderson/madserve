<?php
class MOJIVA implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://ads.mojiva.com/ad';
$http->addParam('site'   , $network_ids['p_1']);
$http->addParam('zone'   , $network_ids['p_2']);
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('ip'   , $request_info['ip_address']);
$http->addParam('url'   , $request_info['referer']);
if (isset($_GET['o'])){$http->addParam('udid'   , md5($_GET['o']));}
else if (isset($_GET['o_mcsha1'])){$http->addParam('udid'   , md5($_GET['o_mcsha1']));}
else if (isset($_GET['o_mcmd5'])){$http->addParam('udid'   , md5($_GET['o_mcmd5']));}
else if (isset($_GET['o_openudid'])){$http->addParam('udid'   , md5($_GET['o_openudid']));}
$http->addParam('key'   , '3');
$http->addParam('type'   , '-1');
$http->addParam('size_y'   , $zone_detail['zone_height']);
$http->addParam('size_x'   , $zone_detail['zone_width']);
$http->addParam('long'   , $request_info['longitude']);
$http->addParam('lat'   , $request_info['latitude']);

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

	
if (isset($xml_response->error) && !empty($xml_response->error)){
	return false; 
}

else if (isset($xml_response->ad['type']) && ($xml_response->ad['type']=='image' or $xml_response->ad['type']=='image/jpeg' or $xml_response->ad['type']=='text' or $xml_response->ad['type']=='thirdparty' or $xml_response->ad['type']=='richmedia')) {

$ad=array();

switch($xml_response->ad['type']){

case 'image':
case 'image/jpeg':
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$xml_response->ad->url;
$ad['trackingpixel']=$xml_response->ad->track;
$ad['image_url']=$xml_response->ad->img;
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
break;

case 'text':
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$xml_response->ad->url;
$ad['html_markup']='<a href="'.$xml_response->ad->url.'">'.$xml_response->ad->text.'</a>';
$ad['trackingpixel']=$xml_response->ad->track;
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
break;

case 'thirdparty':
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$xml_response->ad->url;
$ad['html_markup']=$xml_response->ad->content;
$ad['trackingpixel']=$xml_response->ad->track;
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
break;

case 'richmedia';
$ad['main_type']='display';
$ad['type']='mraid-markup';
$ad['click_url']=$xml_response->ad->url;
$ad['html_markup']=$xml_response->ad->content;
$ad['trackingpixel']=$xml_response->ad->track;
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=1;
$ad['skippreflight']='yes';
break;	
	
}

return $ad;	

}

else {
return false;	
}


/*F:END*/

}
	
	  }

?>