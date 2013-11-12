<?php
require_once '../../init.php';


require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';

if (!checkpwresethash($_GET['hash'])){
echo "Invalid Hash";
exit;
}

?>

<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>

	<title><?php echo getconfig_var('adserver_name'); ?> - Update Password</title>

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
		<form action="do_update_pw.php" method="post" accept-charset="utf-8">	
        <input type="hidden" name="hash" value="<?php echo $_GET['hash']; ?>"	/>
			<div class="login_fields">
				<div class="field">
					<label for="password">New Password</label>
					<input type="password" name="md_newpass" value="" id="password" tabindex="1" placeholder="password" />		
				</div>
				
				<div class="field">
					<label for="password">Repeat Password <small><a href="signin.php">Back to Login</a></small></label>
					<input type="password" name="md_newpass2" value="" id="password" tabindex="2" placeholder="password" />			
				</div>
			</div> <!-- .login_fields -->
			
			<div class="login_actions">
				<button type="submit" class="btn btn-primary" tabindex="3">Update Password</button>
			</div>
		</form>
	</div> <!-- #login_panel -->		
</div> <!-- #login -->

<script src="javascripts/all.js"></script>


</body>
</html>