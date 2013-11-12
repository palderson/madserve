<?php
// Require the initialisation file
require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

if (resendpassword($_POST['md_user'])){
MAD_Admin_Redirect::redirect('reset_password.php?success=1');
}
else
{
MAD_Admin_Redirect::redirect('reset_password.php?failed=1');	
}

?>
