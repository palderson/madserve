<?php
class MOBPARTNER implements networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill) {
	  
	  /*F:START*/
	  
$httpConfig['method']     = 'GET';
$httpConfig['timeout']    = '1';
	 	  
$http = new Http();
$http->initialize($httpConfig);
	  
if ($request_type=='banner'){
$request_url='http://api.mobpartner.mobi';
$http->addParam('pool'   , $network_ids['p_1']);
$http->addParam('ua'   , $request_info['user_agent']);
$http->addParam('ip'   , $request_info['ip_address']);
if (isset($_GET['o'])){$http->addParam('udid'   , $_GET['o']);}
else if (isset($_GET['o_mcsha1'])){$http->addParam('udid'   , $_GET['o_mcsha1']);}
$http->addParam('api'   , 'param');

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

$banner = explode('><', $response);
        @$type  = $banner[0];
        @$link_url = $banner[1];
        @$image_url = $banner[2];
        @$text = $banner[3];
		
        if ($type && $link_url) {
			
if ($type==1 or $type==2){

$ad=array();
$ad['main_type']='display';
$ad['type']='image-url';
$ad['click_url']=$link_url;
$ad['trackingpixel']='';
$ad['image_url']=$image_url;
$ad['clicktype']='safari';
$ad['skipoverlay']=0;
$ad['skippreflight']='yes';
return $ad;

}

else if ($type==3){
	
$ad=array();
$ad['main_type']='display';
$ad['type']='markup';
$ad['click_url']=$link_url;
$ad['html_markup']='<a href="'.$link_url.'">'.$text.'</a>';
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

}
else {
return false;	
}

/*F:END*/

}
	
	  }

?>