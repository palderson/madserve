<?php
class TAPIT implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch XML Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://r.tapit.com/adrequest.php';
$http->addParam('zone'   , $network_ids['p_1']);
$http->addParam('ip'   , $request_info['ip_address']);
$http->addParam('ua'   , $request_info['user_agent']);
if (isset($_GET['o'])){$http->addParam('udid'   , md5($_GET['o']));}
else if (isset($_GET['o_mcsha1'])){$http->addParam('udid'   , md5($_GET['o_mcsha1']));}
else if (isset($_GET['o_mcmd5'])){$http->addParam('udid'   , md5($_GET['o_mcmd5']));}
else if (isset($_GET['o_openudid'])){$http->addParam('udid'   , md5($_GET['o_openudid']));}
$http->addParam('format'   , 'json');
$http->addParam('long'   , $request_info['longitude']);
$http->addParam('lat'   , $request_info['latitude']);
$http->addParam('h'   , $zone_detail['zone_height']);
$http->addParam('w'   , $zone_detail['zone_width']);

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

if (isset($json_response->imageurl)) { $tempad['image']=$json_response->imageurl; } else {$tempad['image']='';}
if (isset($json_response->clickurl)) { $tempad['url']=$json_response->clickurl; } else {$tempad['url']='';}
if (isset($json_response->type)) { $tempad['type']=$json_response->type; } else {$tempad['type']='';}
if (isset($json_response->adtext)) { $tempad['text']=$json_response->adtext; } else {$tempad['text']='';}

if ($request_type=='banner'){
	
	if ($tempad['type']=='banner'){
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
	else if ($tempad['type']=='text'){
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


/*F:END*/

}
	
	  }

?>