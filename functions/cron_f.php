<?php

require_once MAD_PATH . '/www/cp/admin_functions.php';

function run_cron(){
	
campaign_limit_update();
	
execute();	
	
update_configvar('last_cron_job', time());
add_syslog('daily_cron', '');
	
}

?>