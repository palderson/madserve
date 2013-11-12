<?php
class KOMLIMOBILE implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	 error_reporting(0);
	  
	  /*F:START*/
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://a.zestadz.com/waphandler/deliverad';
$http->addParam('cid'   , $network_ids['p_1']);
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('response_type'   , 'xml');
$http->addParam('ip'   , $request_info['ip_address']);
$http->addParam('url'   , $request_info['referer']);
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


	
if ($xml_response['type']=='error'){
	return false; 
}

else if ($xml_response['type']=='picture' or $xml_response['type']=='text') {

switch ($xml_response['type']){
	
case 'picture':
$ad=array();
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$xml_response->url;
$ad['trackingpixel']='';
$ad['image_url']=$xml_response->picture;
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;
break;

case 'text':
$ad=array();
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$xml_response->url;
$ad['html_markup']='<a href="'.$xml_response->url.'">'.$xml_response->text.'</a>';
$ad['trackingpixel']='';
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;
break;
	
}
}

else {
return false;	
}


/*F:END*/

}
	
	  }

?>