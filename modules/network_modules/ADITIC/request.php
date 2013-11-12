<?php
class ADITIC implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://generic.aditic.net/';
$http->addParam('alid'   , $network_ids['p_1']);
$http->addParam('pid'   , $network_ids['p_2']);
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('srcip'   , $request_info['ip_address']);
$http->addParam('network'   , 'wifi');
$http->addParam('format'   , 'xml');

if ($request_info['main_device']=='IPHONE' or $request_info['main_device']=='IPOD TOUCH'){
$http->addParam('support'   , 'iphone');	
}
else if ($request_info['main_device']=='IPAD'){
$http->addParam('support'   , 'ipad');	
}
else if ($request_info['main_device']=='ANDROID'){
$http->addParam('support'   , 'android');	
}
else {
$http->addParam('support'   , 'wap');	
}


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

$ad['type']=$xml_response->type;
$ad['image']=$xml_response->image1;
$ad['url']=$xml_response->clic;
$error['code']=$xml_response->code;

if (isset($xml_response->code)){$tempad['code']=$xml_response->code;} else {$tempad['code']='';}
if (isset($xml_response->clic)){$tempad['url']=$xml_response->clic;} else {$tempad['url']='';}
if (isset($xml_response->image1)){$tempad['image']=$xml_response->image1;} else {$tempad['image']='';}
if (isset($xml_response->texte1)){$tempad['text']=$xml_response->texte1;} else {$tempad['text']='';}
if (isset($xml_response->type)){$tempad['type']=$xml_response->type;} else {$tempad['type']='';}

if ($tempad['url']!=''){
	
	if ($tempad['type']=='banner' or $tempad['type']=='bannertext' ){
$ad=array();
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$tempad['url'];
$ad['trackingpixel']='';
$ad['image_url']=$tempad['image'];
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;
	}
	
	else if ($tempad['type']=='textlink'){
	$ad=array();
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$tempad['url'];
$ad['html_markup']='<a href="'.$tempad['url'].'">'.$tempad['text'].'</a>';
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
else {
return false;	
}








//old below

	
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