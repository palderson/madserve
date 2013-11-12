<?php

function setupConstants()
{
    // Define this version of Openads's constants
    define('MAD_VERSION', '2.0');
    define('MAD_PRODUCT_NAME',      'mAdserve');
    define('MAD_PRODUCT_URL',       'www.madserve.org');
    define('MAD_ANDROID_SDK_LOCATION',  'sdk/android_latest.zip');
    define('MAD_IOS_SDK_LOCATION',  'sdk/ios_latest.zip');
	
	// settings
    define('MAD_PUBL_ACTIVE_CRITERIA_SECONDS', 3600);
    define('MAD_USER_SESSION_TIMEOUT', 3600);
    define('MAD_CREATIVE_LOCAL_BASE_URL_OVERRIDE', '');
	define('MAD_TRCHECK_INTERVAL_DASHBOARD', 600);
	define('MAD_TRCHECK_INTERVAL_PRODUCTION', 3600);
	define('MAD_MFCHECK_INTERVAL_DASHBOARD', 86400);
	define('MAD_ACTION_EXEC_INTERVAL_DASHBOARD', 3000);
	
	// maintenance mode - stop's ad serving
    define('MAD_MAINTENANCE', 0);
	
	// other settings
	define('MAD_ADSERVING_PROTOCOL', 'http://');
	define('MAD_CLICK_HANDLER', 'md.click.php');
	define('MAD_CLICK_ALWAYS_EXTERNAL', false);
	define('MAD_TRACK_UNIQUE_CLICKS', false); // Track only unique clicks. Works only if a caching method is enabled.
	define('MAD_CLICK_IMMEDIATE_REDIRECT', false); // Make the click handler redirect the end-user to the destination URL immediately and write the click to the statistic database in the background.

	// cache settings
	define('MAD_ENABLE_CACHE', false);
	define('MAD_DEFAULT_CACHE', 'File'); // Possible Values: File (File Cache: data/cache/ needs to be writeable, otherwise script will crash), APC, Memcache, Memcached, Redis, WinCache, XCache, ZendCache, ZendSHM, eAccelerator
	define('MAD_FILE_CACHE_DIR', 'data/cache/');
	
	// time zone settings
	define('MAD_TIMEZONE_OVERRIDE', true); // Override Server Time Zone
	define('MAD_DEFAULT_TIMEZONE', 'Europe/Berlin'); // Time Zone to use. e.g. 'America/Los_Angeles' / Full List of Time Zones supported: http://www.php.net/manual/en/timezones.php
	
	// advanced cache settings
    define('MAD_CACHE_CAMPAIGN_QUERIES', true);
    define('MAD_CACHE_CAMPAIGN_QUERIES_SEC', 90);
	
	// geo-ip settings
	define('MAD_MAXMIND_TYPE', 'PHPSOURCE'); // Change to 'NATIVE' if you installed the GeoIP PHP Module (http://www.php.net/manual/en/book.geoip.php) -> Faster! - Please note that mAdserve will crash if this option is enabled but not installed.
	define('MAD_MAXMIND_DATAFILE_LOCATION', 'data/geotargeting/GeoLiteCity.dat');
	
	// additional settings
	define('MAD_SERVE_NOMOBILE', true); // Server Ads to non-mobile users if they are either targeted to all devices or 'Other Devices' in the Campaign Setup
	define('MAD_INTERSTITIALS_EXACTMATCH', true); // Defines whether an Interstitial Ad Placement can only show ads that are exactly 320x480 in size. If you set this option to FALSE, an Interstitial ad space would also serve e.g. an ad with 320x50 dimenstions if that is the closest size available.
	define('MAD_IGNORE_DAILYLIMIT_NOCRON', true); // Ignore a campaign's daily impression limit when the mAdserve cron was not executed for more than 24 hours.

    // Maximum random number
    define('MAD_RAND',     mt_getrandmax());
    define('MAD_RAND_INV', 1 / MAD_RAND);
	
	 define('MAD_CREATIVE_DIR',  '/data/creative/');



    // Ensure that the initialisation has not been run before
    if (!(isset($GLOBALS['_MAX']['CONF']))) {
        // Define the mAdserve installation base path if not defined
        // since Local mode will pre-define this value
        if (!defined('MAD_PATH')) {
            define('MAD_PATH', dirname(__FILE__));
        }
        if (!defined('MAD_PATH')) {
            define('MAD_PATH', dirname(__FILE__));
        }
        // Ensure that the DIRECTORY_SEPARATOR and PATH_SEPARATOR
        // constants are correctly defined
        if (!defined('DIRECTORY_SEPARATOR')) {
            if (strpos($_ENV['OS'], 'Win') !== false) {
                // Windows
                define('DIRECTORY_SEPARATOR', '/');
            } else {
                // UNIX
                define('DIRECTORY_SEPARATOR', '\\');
            }
        }
        if (!defined('PATH_SEPARATOR')) {
            if (strpos($_ENV['OS'], 'Win') !== false) {
                // Windows
                define('PATH_SEPARATOR', ';');
            } else {
                // UNIX
                define('PATH_SEPARATOR', ':');
            }
        }
      
    }
}
?>
