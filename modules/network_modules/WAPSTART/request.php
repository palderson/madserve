<?php
class WAPSTART implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';

$randomnumber = sha1(rand(1,500000));
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://ro.plus1.wapstart.ru';
$http->addParam('area'   , 'viewBannerXml');
$http->addParam('site'   , $network_ids['p_1']);
$http->addParam('position'   , '1');
$http->addParam('markup'   , '2');
$http->addParam('userAgent'   , $request_info['user_agent']);
$http->addParam('ip'   , $request_info['ip_address']);
$http->addParam('tplVersion'   , '2');
$http->addParam('pageId'   , $randomnumber);
if (isset($_GET['o'])){$http->addParam('clientSession'   , sha1($_GET['o']));}
else if (isset($_GET['o_mcsha1'])){$http->addParam('clientSession'   , sha1($_GET['o_mcsha1']));}

}
else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}

if ($http->result=="<!-- i4jgij4pfd4ssd -->"){
	return false;
}

try {
$xml_response = new SimpleXmlElement($http->result, LIBXML_NOCDATA);
} catch (Exception $e) {
   // handle the error
return false;
}
$tempad['content']=$xml_response->content;
$tempad['title']=$xml_response->title;
$tempad['url']=$xml_response->link;
$tempad['singlelinecontent']=$xml_response->singleLineContent;
$tempad['imageurl']=$xml_response->pictureUrl;

// START AD URL NOT EMPTY
if ($tempad['url']!=""){

if ($tempad['imageurl']!=""){
$ad=array();
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$tempad['url'];
$ad['trackingpixel']='';
$ad['image_url']=$tempad['imageurl'];
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;	
}

else if (strlen($tempad['imageurl'])<3 && $tempad['singlelinecontent']!=""){
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$tempad['url'];
$ad['html_markup']='<a href="'.$tempad['url'].'">'.$tempad['singlelinecontent'].'</a>';
$ad['trackingpixel']='';
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
}

else if (strlen($tempad['imageurl'])<3 && $tempad['title']!=""){
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$tempad['url'];
$ad['html_markup']='<a href="'.$tempad['url'].'">'.$tempad['title'].' - '.$tempad['content'].'</a>';
$ad['trackingpixel']='';
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
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