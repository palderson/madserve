<?php
interface networkmodule {
  public function request($request_type, $request_info, $network_ids, $backfill);
}


/*function request_network_ad(networkmodule $module) {
  $module->request();
}*/

function request_network_ad($network, $request_type, $request_info, $network_ids, $backfill){
if (!class_exists($network)){
require (''.$network.'/request.php');
}

 if (!class_exists($network)) {
      throw new DomainException('Unable to load $network module.');
    }
	
require_once MAD_PATH . '/modules/http/class.http.php';

$a = new $network();
if ($data=$a->request($request_type, $request_info, $network_ids, $backfill)){
return $data;
}

}

/*if ($returndata=request_network_ad('FOURINFO', '', 'xxx')){
echo $returndata;
}
else {
echo "ad not loaded";	
}*/


/*$network='JUMPTAP';
$a = new $network();
$a->request('mypubid', 'dd');

require ('plugin2/ADFONIC.php');

$network='ADFONIC';
$a = new $network();
$a->request('mypubid', 'xxx');
*/


?>