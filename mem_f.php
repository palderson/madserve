<?php
function MAD_getMinimumRequiredMemory($limit = null)
{
    return 134217728; // 128MB in bytes (128 * 1048576)
}

/**
 * Get the PHP memory_limit value in bytes.
 *
 * @return integer The memory_limit value set in PHP, in bytes
 *                 (or -1, if no limit).
 */
function MAD_getMemoryLimitSizeInBytes() {
    $phpMemoryLimit = ini_get('memory_limit');
    if (empty($phpMemoryLimit) || $phpMemoryLimit == -1) {
        // No memory limit
        return -1;
    }
    $aSize = array(
        'G' => 1073741824,
        'M' => 1048576,
        'K' => 1024
    );
    $phpMemoryLimitInBytes = $phpMemoryLimit;
    foreach($aSize as $type => $multiplier) {
        $pos = strpos($phpMemoryLimit, $type);
        if (!$pos) {
            $pos = strpos($phpMemoryLimit, strtolower($type));
        }
        if ($pos) {
            $phpMemoryLimitInBytes = substr($phpMemoryLimit, 0, $pos) * $multiplier;
        }
    }
    return $phpMemoryLimitInBytes;
}

/**
 * Test if the memory_limit can be changed.
 *
 * @return boolean True if the memory_limit can be changed, false otherwise.
 */
function MAD_checkMemoryCanBeSet()
{
    $phpMemoryLimitInBytes = MAD_getMemoryLimitSizeInBytes();
    // Unlimited memory, no need to check if it can be set
    if ($phpMemoryLimitInBytes == -1) {
        return true;
    }
    MAD_increaseMemoryLimit($phpMemoryLimitInBytes + 1);
    $newPhpMemoryLimitInBytes = MAD_getMemoryLimitSizeInBytes();
    $memoryCanBeSet = ($phpMemoryLimitInBytes != $newPhpMemoryLimitInBytes);

    // Restore previous limit
    @ini_set('memory_limit', $phpMemoryLimitInBytes);
    return $memoryCanBeSet;
}

/**
 * Increase the PHP memory_limit value to the supplied size, if required.
 *
 * @param integer $setMemory The memory_limit that should be set (in bytes).
 * @return boolean True if the memory_limit was already greater than the value
 *                 supplied, or if the attempt to set a larger memory_limit was
 *                 successful; false otherwise.
 */
function MAD_increaseMemoryLimit($setMemory) {
    $phpMemoryLimitInBytes = MAD_getMemoryLimitSizeInBytes();
    if ($phpMemoryLimitInBytes == -1) {
        // Memory is unlimited
        return true;
    }
    if ($setMemory > $phpMemoryLimitInBytes) {
        if (@ini_set('memory_limit', $setMemory) === false) {
            return false;
        }
    }
    return true;
}

?>