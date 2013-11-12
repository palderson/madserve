<?php

/**
 * Setup common variables
 */
function setupConfigVariables()
{
	$GLOBALS['_MAX']['CONF'] = parseIniFile();
	}

/**
 * A function to initialize $_SERVER variables which could be missing
 * on some environments
 *
 */
function setupServerVariables()
{
    // PHP-CGI/IIS combination does not set REQUEST_URI
    if (empty($_SERVER['REQUEST_URI'])) {
        $_SERVER['REQUEST_URI'] = $_SERVER['SCRIPT_NAME'];
        if (!empty($_SERVER['QUERY_STRING'])) {
            $_SERVER['REQUEST_URI'] .= '?' . $_SERVER['QUERY_STRING'];
        }
    }
}

/**
 * A function to initialize the environmental constants and global
 * variables required by delivery.
 */
function setupDeliveryConfigVariables()
{
    if (!defined('MAX_PATH')) {
        define('MAX_PATH', dirname(__FILE__));
    }
    if (!defined('MAD_PATH')) {
        define('MAD_PATH', MAX_PATH);
    }
    // Ensure that the initialisation has not been run before
    if ( !(isset($GLOBALS['_MAX']['CONF']))) {
        // Parse the Max configuration file
        $GLOBALS['_MAX']['CONF'] = parseDeliveryIniFile();
    }

    // Set up the common configuration variables
    setupConfigVariables();
}

/**
 * Returns the hostname the script is running under.
 *
 * @return string containing the hostname (with port number stripped).
 */
function MAD_getHostName()
{
    if (!empty($_SERVER['HTTP_HOST'])) {
        $host = explode(':', $_SERVER['HTTP_HOST']);
        $host = $host[0];
    } else if (!empty($_SERVER['SERVER_NAME'])) {
        $host = explode(':', $_SERVER['SERVER_NAME']);
    	$host = $host[0];
    }
    return $host;
}

/**
 * Returns the hostname (with port) the script is running under.
 *
 * @return string containing the hostname with port
 */
function MAD_getHostNameWithPort()
{
    if (!empty($_SERVER['HTTP_HOST'])) {
        $host = $_SERVER['HTTP_HOST'];
    } else if (!empty($_SERVER['SERVER_NAME'])) {
    	$host = $_SERVER['SERVER_NAME'];
    }
    return $host;
}

?>