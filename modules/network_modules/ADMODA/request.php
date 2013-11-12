<?php
class ADMODA implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://www.admoda.com/ads/fetch.php';
$http->addParam('z'   , $network_ids['p_1']);
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('a'   , $request_info['ip_address']);
$http->addParam('v'   , '4');
$http->addParam('l'   , 'php');

}


else {
return false;	
}

$http->execute($request_url);

if ($http->error){
return false;
}

$response = $http->result;


if ($response!=''){

$banner = explode('|', $response);
        @$bannerid  = $banner[0];
        @$image_url = $banner[1];
        @$click_url = $banner[2];
		
        if ($bannerid && $image_url) {

$ad=array();
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$click_url;
$ad['trackingpixel']='';
$ad['image_url']=$image_url;
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