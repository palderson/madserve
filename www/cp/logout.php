<?php
// Require the initialisation file
require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';


if (logout()){
MAD_Admin_Redirect::redirect('signin.php?loggedout=1');	
}

?>
