<?php

require_once 'p_c.php';
require_once 'vars.php';
require_once 'config_variables.php';
require_once 'parse_configuration.php';
require_once 'db_functions.php';



/**
 * The environment initialisation function for the mAdserve administration interface.
 *
 */
function init()
{
global $mad_install_active;

    // Set up server variables
    setupServerVariables();
	
    // Set up the UI constants
    setupConstants();

    // Set up the common configuration variables
    setupConfigVariables();
	
	// Setup Time Zone
	if (MAD_TIMEZONE_OVERRIDE){
	$GLOBALS['_DATE_TIMEZONE_DEFAULT'] = MAD_DEFAULT_TIMEZONE;
	date_default_timezone_set(MAD_DEFAULT_TIMEZONE);
	}
		

    error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING ^ E_DEPRECATED);

    // If not being called from the installation script...
    if ( (!isset($GLOBALS['_MAX']['CONF']['madserve']['installed'])) || (!$GLOBALS['_MAX']['CONF']['madserve']['installed']) )
    {
        define('MAD_INSTALLATION_STATUS',    MAD_INSTALLATION_STATUS_NOTINSTALLED);
    }
    else if ($GLOBALS['_MAX']['CONF']['madserve']['installed'] && file_exists(MAD_PATH.'/conf/UPGRADE'))
    {
        define('MAD_INSTALLATION_STATUS',    MAD_INSTALLATION_STATUS_UPGRADING);
    }
    else if ($GLOBALS['_MAX']['CONF']['madserve']['installed'] && file_exists(MAD_PATH.'/conf/INSTALLED'))
    {
        define('MAD_INSTALLATION_STATUS',    MAD_INSTALLATION_STATUS_INSTALLED);
    }

  // CHECK IF SCRIPT IS INSTALLED; OTHERWISE REDIRECT TO INSTALLER
  if (MAD_INSTALLATION_STATUS!=MAD_INSTALLATION_STATUS_INSTALLED && $mad_install_active!=1){
require_once MAD_PATH . '/functions/adminredirect.php';
MAD_Admin_Redirect::redirect(MAD_ADSERVING_PROTOCOL . MAD_getHostName() . substr(dirname(__FILE__),strlen($_SERVER['DOCUMENT_ROOT'])) . '/www/cp/install.php');
exit;
  }

    // Store the original memory limit before changing it
    $GLOBALS['_OX']['ORIGINAL_MEMORY_LIMIT'] = MAD_getMemoryLimitSizeInBytes();

    // Increase the PHP memory_limit value to the mAdserve minimum required value, if necessary
    MAD_increaseMemoryLimit(MAD_getMinimumRequiredMemory());
	
	if (MAD_INSTALLATION_STATUS == MAD_INSTALLATION_STATUS_INSTALLED)
{
	if ($mad_install_active==1){
	echo "mAdserve has already been installed."; exit;	
	}
	
	if (!MAD_connect_maindb()){
	echo "Unable to connect to mAdserve main database. Please check the variables supplied in /conf/main.config.php and verify that MySQL is running."; exit; }
	
	if ($GLOBALS['_MAX']['CONF']['reportingdatabase']['useseparatereportingdatabase']){
	if (!MAD_connect_repdb()){
	echo "Unable to connect to separated mAdserve reporting database. Please check the variables supplied in /conf/main.config.php and verify that MySQL is running."; exit; }
	}
}

if (!$GLOBALS['_MAX']['CONF']['reportingdatabase']['useseparatereportingdatabase']){
global $repdb;
$repdb = $maindb;
}
	
}

// Run the init() function
init();
?>