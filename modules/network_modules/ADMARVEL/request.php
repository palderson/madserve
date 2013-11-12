<?php
class ADMARVEL implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://ads.admarvel.com/fam/postGetAd.php';
$http->addParam('partner_id'   , $network_ids['p_1']);
$http->addParam('site_id'   , $network_ids['p_2']);
$http->addParam('version'   , '1.5');
$http->addParam('language'   , 'php');
$http->addParam('format'   , 'wap');
$http->addParam('target_params'   , 'RESPONSE_TYPE=>xml');
$http->addParam('phone_headers'   , 'REMOTE_ADDR=>'.$request_info['ip_address'].'||HTTP_USER_AGENT=>'.$request_info['user_agent'].'');
if (isset($_GET['o'])){$http->addParam('UNIQUE_ID'   , $_GET['o']);}
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

if (isset($xml_response->image->url)) { $tempad['image']=$xml_response->image->url; } else {$tempad['image']='';}
if (isset($xml_response->clickurl)) { $tempad['url']=$xml_response->clickurl; } else {$tempad['url']='';}
if (isset($xml_response->text)) { $tempad['text']=$xml_response->text; } else {$tempad['text']='';}
if (isset($xml_response['type'])) { $tempad['type']=$xml_response['type']; } else {$tempad['type']='';}
if (isset($xml_response->pixels->pixel)) { $tempad['pixel']=$xml_response->pixels->pixel; } else {$tempad['pixel']='';}


if ($request_type=='banner'){
	
	if ($xml_response['type']=='image'){
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
	else if ($xml_response['type']=='text'){
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