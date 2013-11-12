<?php
class MAD_Admin_Redirect
{

    function redirect($adminPage = 'www/cp/index.php')
    {
header ("Location: ".$adminPage."");
	}
}

?>