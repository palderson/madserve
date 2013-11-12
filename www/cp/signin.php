<?php
require_once '../../init.php';


require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';

if (logincheck()){
MAD_Admin_Redirect::redirect('dashboard.php');
exit;
}

?>

<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>

	<title><?php echo getconfig_var('adserver_name'); ?> - Login</title>

	<meta charset="utf-8" />
	<meta name="description" content="" />
	<meta name="author" content="" />		
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	
	<link rel="stylesheet" href="assets/stylesheets/reset.css" type="text/css" media="screen" title="no title" />
	<link rel="stylesheet" href="assets/stylesheets/text.css" type="text/css" media="screen" title="no title" />
	<link rel="stylesheet" href="assets/stylesheets/buttons.css" type="text/css" media="screen" title="no title" />
	<link rel="stylesheet" href="assets/stylesheets/theme-default.css" type="text/css" media="screen" title="no title" />
	<link rel="stylesheet" href="assets/stylesheets/login.css" type="text/css" media="screen" title="no title" />
</head>

<body>

<div id="login">
	<h1>Dashboard</h1>
	<div id="login_panel">
    <?php if (isset($_GET['failed'])){?><div style="margin-top:14px; font-weight:bold; color:#900;" align="center">Login failed, please try again.</div><?php } ?><?php if (isset($_GET['pwupdate'])){?><div style="margin-top:14px; font-weight:bold; color:#090;" align="center">Password has been reset, you can now log-in.</div><?php } ?>
		<form action="do_signin.php" method="post" accept-charset="utf-8">		
			<div class="login_fields">
				<div class="field">
					<label for="email">Email</label>
					<input type="text" name="md_user" value="" id="email" tabindex="1" placeholder="email@example.com" />		
				</div>
				
				<div class="field">
					<label for="password">Password <small><a href="reset_password.php">Forgot Password?</a></small></label>
					<input type="password" name="md_pass" value="" id="password" tabindex="2" placeholder="password" />			
				</div>
			</div> <!-- .login_fields -->
			
			<div class="login_actions">
				<button type="submit" class="btn btn-primary" tabindex="3">Login</button>
			</div>
		</form>
	</div> <!-- #login_panel -->		
</div> <!-- #login -->

<script src="javascripts/all.js"></script>


</body>
</html>