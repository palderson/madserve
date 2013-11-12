<?php
switch (MAD_DEFAULT_CACHE){
case 'File':
$cache = fluxbb\cache\Cache::load('File', array('dir' => MAD_FILE_CACHE_DIR, 'suffix' => '.php'), 'VarExport');
break;

default:
$cache = fluxbb\cache\Cache::load(MAD_DEFAULT_CACHE, array());
break;
}
?>