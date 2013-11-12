#!/usr/local/bin/php
<?php
/* mAdserve Ad Request */

require_once 'init.php';

error_reporting(E_ALL);

require_once MAD_PATH . '/functions/cron_f.php';

run_cron();

?>