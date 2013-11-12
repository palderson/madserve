<?php
// Require the initialisation file
require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

$param_hash=$_POST['hash'];

if (dochangepw($_POST['hash'], $_POST['md_newpass'], $_POST['md_newpass2'])){
MAD_Admin_Redirect::redirect('signin.php?pwupdate=1');
}
else
{
MAD_Admin_Redirect::redirect('pw_update.php?hash='.$param_hash.'&failed=1');	
}

?>
