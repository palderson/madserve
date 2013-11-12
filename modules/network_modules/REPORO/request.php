<?php
class REPORO implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
error_reporting(0); /*Catch JSON Exceptions*/
	  
global $zone_detail;
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://0000-0000-0000-0000.reporo.net/api';
$http->addParam('z'   , $network_ids['p_1']);
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('ip'   , $request_info['ip_address']);

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

if (isset($json_response->bannerurl)) { $tempad['image']=$json_response->bannerurl; } else {$tempad['image']='';}
if (isset($json_response->url)) { $tempad['url']=$json_response->url; } else {$tempad['url']='';}
if (isset($json_response->adtext)) { $tempad['text']=$json_response->adtext; } else {$tempad['text']='';}

if ($request_type=='banner'){
	
	if ($tempad['image']!='' && $tempad['url']!=''){
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
	else if ($tempad['text']!='' && $tempad['url']!=''){
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