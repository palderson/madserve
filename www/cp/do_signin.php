<?php
// Require the initialisation file
require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';

if ((isset($_POST['md_user']) && isset($_POST['md_pass'])) && signin($_POST['md_user'], $_POST['md_pass'])){
mf_prelogin_check();
MAD_Admin_Redirect::redirect('dashboard.php');
}
else
{
MAD_Admin_Redirect::redirect('signin.php?failed=1');	
}

?>
