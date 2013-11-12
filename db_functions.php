<?php
error_reporting(0);

function MAD_connect_maindb()
{
global $maindb;
// Main database
$dbhost_maindb=$GLOBALS['_MAX']['CONF']['database']['host'];
$dbsocket_maindb=$GLOBALS['_MAX']['CONF']['database']['socket'];
$dbport_maindb=$GLOBALS['_MAX']['CONF']['database']['port'];
$dbuname_maindb=$GLOBALS['_MAX']['CONF']['database']['username'];
$dbpass_maindb=$GLOBALS['_MAX']['CONF']['database']['password'];
$dbname_maindb=$GLOBALS['_MAX']['CONF']['database']['name'];
// Main Database

$maindb = mysql_connect($dbhost_maindb, $dbuname_maindb, $dbpass_maindb);
mysql_select_db ($dbname_maindb, $maindb);

if ($maindb){
return true;
}
else {
return false;	
}

}

function MAD_connect_repdb()
{
global $repdb;
// Main database
if ($GLOBALS['_MAX']['CONF']['reportingdatabase']['useseparatereportingdatabase']){
$dbhost_repdb=$GLOBALS['_MAX']['CONF']['reportingdatabase']['host'];
$dbsocket_repdb=$GLOBALS['_MAX']['CONF']['reportingdatabase']['socket'];
$dbport_repdb=$GLOBALS['_MAX']['CONF']['reportingdatabase']['port'];
$dbuname_repdb=$GLOBALS['_MAX']['CONF']['reportingdatabase']['username'];
$dbpass_repdb=$GLOBALS['_MAX']['CONF']['reportingdatabase']['password'];
$dbname_repdb=$GLOBALS['_MAX']['CONF']['reportingdatabase']['name'];
}
else {
$dbhost_repdb=$GLOBALS['_MAX']['CONF']['database']['host'];
$dbsocket_repdb=$GLOBALS['_MAX']['CONF']['database']['socket'];
$dbport_repdb=$GLOBALS['_MAX']['CONF']['database']['port'];
$dbuname_repdb=$GLOBALS['_MAX']['CONF']['database']['username'];
$dbpass_repdb=$GLOBALS['_MAX']['CONF']['database']['password'];
$dbname_repdb=$GLOBALS['_MAX']['CONF']['database']['name'];
}
// Main Database

$repdb = mysql_connect($dbhost_repdb, $dbuname_repdb, $dbpass_repdb);
mysql_select_db ($dbname_repdb, $repdb);

if ($repdb){
return true;
}
else {
return false;	
}

}


?>