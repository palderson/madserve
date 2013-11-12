<?php
// Require the initialisation file
if (!logincheck()){
MAD_Admin_Redirect::redirect('signin.php');	
}

?>
