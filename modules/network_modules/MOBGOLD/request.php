<?php
class MOBGOLD implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'POST';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://ads.mobgold.com/request.php';
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('ipr'   , $request_info['ip_address']);
$http->addParam('ipc'   , $request_info['ip_address']);
$http->addParam('ref'   , $request_info['referer']);
$http->addParam('uri'   , $request_info['referer']);
$http->addParam('pt'   , 'http');
$http->addParam('fmt'   , 'xml');
$http->addParam('ver'   , '0.1.5');
$http->addParam('sm'   , $network_ids['p_1']);


$http->addParam('test'   , '1');

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

if (isset($xml_response->link)) { $tempad['url']=$xml_response->link; } else {$tempad['url']='';}
if (isset($xml_response->adtype)) { $tempad['type']=$xml_response->adtype; } else {$tempad['type']='';}
if (isset($xml_response->banner)) { $tempad['image']=$xml_response->banner; } else {$tempad['image']='';}
if (isset($xml_response->text)) { $tempad['text']=$xml_response->text; } else {$tempad['text']='';}

if ($tempad['url']!='' && ($tempad['type']==1 or $tempad['type']==2)){
	
$ad=array();

switch($tempad['type']){
case 1:
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$tempad['url'];
$ad['html_markup']='<a href="'.$tempad['url'].'">'.$tempad['text'].'</a>';
$ad['trackingpixel']='';
$ad['image_url']='';
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
break;

case 2:
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$tempad['url'];
$ad['trackingpixel']='';
$ad['image_url']=$tempad['image'];
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
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