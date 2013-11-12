<?php

require_once 'mem_f.php';

function MAD_CheckIfSystemInstalled()
{
    $path = @dirname(__FILE__);
    if (!@empty($path)) {
        if (@file_exists($path . '/conf/INSTALLED')) {
            return false;
        } else {
            return true;
        }
    }
    return false;
}

function MAD_checkSystemInitialRequirements(&$aErrors){

    $isSystemOK = true;
    $return = true;

    $aRequiredFunctions = array(
        'dirname',
        'empty',
        'file_exists',
        'ini_set',
        'parse_ini_file',
        'version_compare'
    );

    // Prepare error strings, in the simplest possible way
    $errorString1 = 'The built in PHP function "';
    $errorString2 = '" is in the "disable_functions" list in your "php.ini" file.';

    // Need "function_exists" to be able to test for functions required
    // for testing what is in the "disabled_functions" list
    if (!function_exists('function_exists')) {
        $aErrors[] = $errorString1 . 'function_exists' . $errorString2;
        // Cannot detect any more errors, as function_exists is
        // needed to detect the required functions!
        return -1;
    }

    // Test for existence of "parse_url" and "strpos", which are
    // special cases required for the display of the error message
    // in the event of anything failing in this test!
    if (!function_exists('parse_url')) {
        $aErrors[] = $errorString1 . 'parse_url' . $errorString2;
        $isSystemOK = false;
        if ($return === true) {
            $return = -2;
        }
    }
    if (!function_exists('strpos')) {
        $aErrors[] = $errorString1 . 'strpos' . $errorString2;
        $isSystemOK = false;
        if ($return === true) {
            $return = -2;
        }
    }

    // Test for existence of "array_intersect", "explode", "ini_get"
    // and "trim", which are all required as part of the code to test
    // which functions are in the "disabled_functions" list below...
    if (!function_exists('array_intersect')) {
        $aErrors[] = $errorString1 . 'array_intersect' . $errorString2;
        $isSystemOK = false;
        if ($return === true) {
            $return = -3;
        }
    }
    if (!function_exists('explode')) {
        $aErrors[] = $errorString1 . 'explode' . $errorString2;
        $isSystemOK = false;
        if ($return === true) {
            $return = -3;
        }
    }
    if (!function_exists('ini_get')) {
        $aErrors[] = $errorString1 . 'ini_get' . $errorString2;
        $isSystemOK = false;
        if ($return === true) {
            $return = -3;
        }
    }
    if (!function_exists('trim')) {
        $aErrors[] = $errorString1 . 'trim' . $errorString2;
        $isSystemOK = false;
        if ($return === true) {
            $return = -3;
        }
    }

    // Test the disabled functons list with required functions list
    // defined above in $aRequiredFunctions
    $aDisabledFunctions = explode(',', ini_get('disable_functions'));
    foreach ($aDisabledFunctions as $key => $value) {
        $aDisabledFunctions[$key] = trim($value);
    }
    $aNeededFunctions = array_intersect($aDisabledFunctions, $aRequiredFunctions);
    if (count($aNeededFunctions) > 0) {
        $isSystemOK = false;
        foreach ($aNeededFunctions as $functionName) {
            $aErrors[] = $errorString1 . $functionName . $errorString2;
        }
    }

    // Check PHP version, as use of PHP < 5.1.4 will result in parse errors
    $errorMessage = "PHP version 5.1.4, or greater, was not detected.";
    if (function_exists('version_compare')) {
        $result = version_compare(phpversion(), '5.1.4', '<');
        if ($result) {
            $aErrors[] = $errorMessage;
            $isSystemOK = false;
            if ($return === true) {
                $return = -3;
            }
        }
    }

    // Check minimum memory requirements are okay (24MB)
    $minimumRequiredMemory = MAD_getMinimumRequiredMemory();
    $phpMemoryLimit = MAD_getMemoryLimitSizeInBytes();
    if ($phpMemoryLimit > 0 && $phpMemoryLimit < $minimumRequiredMemory) {
        // The memory limit is too low, but can it be increased?
        $memoryCanBeSet = MAD_checkMemoryCanBeSet();
        if (!$memoryCanBeSet) {
            $minimumRequiredMemoryInMB = $minimumRequiredMemory / 1048576;
            $errorMessage = 'The PHP "memory_limit" value is set to less than the required minimum of ' .
                            $minimumRequiredMemoryInMB . 'MB, but because the built in PHP function "ini_set" ' .
                            'has been disabled, the memory limit cannot be automatically increased.';
            $aErrors[] = $errorMessage;
            $isSystemOK = false;
            if ($return === true) {
                $return = -4;
            }
        }
    }
    
    // Check magic_quotes_runtime and try to unset it
    $GLOBALS['original_get_magic_quotes_runtime'] = MAD_getMagicQuotesRuntime();
    if ($GLOBALS['original_get_magic_quotes_runtime']) {
        ini_set('magic_quotes_runtime', 0);
        if (MAD_getMagicQuotesRuntime()) {
            // try deprecated set_magic_quotes_runtime
            if (function_exists('set_magic_quotes_runtime')) {
                @set_magic_quotes_runtime(0);
            }
        }
        // check magic_quotes_runtime again, stop if still is set
        if (MAD_getMagicQuotesRuntime()) {
            $aErrors[] = 'The PHP magic_quotes_runtime option is ON, and cannot be automatically turned off.';
            $isSystemOK = false;
            if ($return === true) {
                $return = -5;
            }
        }
    }

    if (!$isSystemOK) {
        return $return;
    }
    return true;
}

?>