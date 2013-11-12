<?php
global $current_section;
$current_section='dashboard';
global $mad_install_active;
$mad_install_active=1;

global $mad_install;


require_once '../../init.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';

require_once '../../functions/i_f.php';

if (isset($_GET['step'])){
$mad_install['step']=$_GET['step'];
}
else if (isset($_POST['step'])){
$mad_install['step']=$_POST['step'];
}

/* */
if (!isset($mad_install['step']) or !is_numeric($mad_install['step']) or $mad_install['step']>5 or $mad_install['step']<1){
$mad_install['step']=1;
}
/* */

step_check($mad_install['step']);

if ($mad_install['step']==3){
	
if (!verify_main_config($_POST)){
global $errormessage;	
global $editdata;
$mad_install['step']=2;
}
else {
if (!write_config(MAD_PATH . '/conf/INSTALLTEMP_MAINCONFIG', serialize($_POST))){
echo "Fatal Error. Unable to write into /conf/ directory. Please check directory permissions and start over.";
exit;	
}
}
	
}


if ($mad_install['step']==4){
	
if (!verify_db_config($_POST)){
global $errormessage;	
global $editdata;
$mad_install['step']=3;
$data=stripslashes($_POST['basic_config']);
}
else {
if (!write_config(MAD_PATH . '/conf/INSTALLTEMP_DBCONFIG', serialize($_POST))){
echo "Fatal Error. Unable to write into /conf/ directory. Please check directory permissions and start over.";
exit;	
}
}
	
}

if ($mad_install['step']==5){
	
if (!check_mf($_POST)){
global $errormessage;	
global $editdata;
$mad_install['step']=4;
}
else {

}
	
}


// Required files

require_once MAD_PATH . '/www/cp/templates/header_i.tpl.php';

?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>mAdserve Installation Wizard - Step <?php echo $mad_install['step']; ?></h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
            
            <?php if($mad_install['step']==1){ ?>
            
            
						
                        <?php if(!check_server()){?>
                        <div class="notify notify-info">
						
						<a href="javascript:;" class="close">&times;</a>
						<h3>mAdserve Server Check Failed</h3>
						
						<p>You are only one step away from running your very own instance of mAdserve, world's most powerful mobile ad server. mAdserve has performed some checks on your server and there are a couple of thing's you'll need to do before mAdserve can be installed properly.</p>
					</div> <!-- .notify -->
                    <?php } else { ?>
                    <div class="notify notify-success">
						
						<a href="javascript:;" class="close">&times;</a>
                    <h3>mAdserve Server Check Successful</h3>
						
						<p>Congratulations! You are only one step away from running your very own instance of mAdserve, world's most powerful mobile ad server. The Server check has been successful. To continue with installation, please click the button below.</p>
					</div> <!-- .notify -->
                    <?php } ?>
			
            <?php if (!check_writeable(MAD_PATH . '/conf/')){ ?>
					<div class="widget">			
						
						<div class="widget-header">
							<span class="icon-x-alt"></span>
							<h3>Configuration Directory not writeable: <?php echo MAD_PATH; ?>/conf/</h3>
						</div>
						
						<div class="widget-content">
							<p>In order to continue with installation, please make sure that the directory <strong><?php echo MAD_PATH; ?>/conf/</strong> is writeable. (eg. CHMOD 777)</p>
						</div>
						
					</div>	
                    <?php } ?>		
                    
                     <?php if (!check_writeable(MAD_PATH . '/data/creative/')){ ?>
					<div class="widget">			
						
						<div class="widget-header">
							<span class="icon-x-alt"></span>
							<h3>Creative Directory not writeable: <?php echo MAD_PATH; ?>/data/creative/</h3>
						</div>
						
						<div class="widget-content">
							<p>This is the directory where mAdserve will store creatives for ad-serving. In order to continue with installation, please make sure that the directory <strong><?php echo MAD_PATH; ?>/data/creative/</strong> is writeable. (eg. CHMOD 777)</p>
						</div>
						
					</div>	
                    <?php } ?>
                    
                    <?php if (!php_cache_compatibility_check()){ ?>
                    <div class="widget">			
						
						<div class="widget-header">
							<span class="icon-x-alt"></span>
							<h3>Recommended: PHP Version 5.3+</h3>
						</div>
						
						<div class="widget-content">
							<p>mAdserve has detected that your PHP version is lower than 5.3. If you would like to enable caching to speed up your mAdserve ad server, you'll need to have PHP 5.3 or greater installed.</p>
						</div>
						
					</div>
                    <?php } ?>
                    
                    <?php if (!check_writeable(MAD_PATH . '/data/cache/')){ ?>
					<div class="widget">			
						
						<div class="widget-header">
							<span class="icon-x-alt"></span>
							<h3>Optional: Caching Directory not writeable: <?php echo MAD_PATH; ?>/data/cache/</h3>
						</div>
						
						<div class="widget-content">
							<p>If you'd like to enable File-Based caching to speed up your mAdserve ad server, please make sure that the caching directory <strong><?php echo MAD_PATH; ?>/data/cache/</strong> is writeable. (eg. CHMOD 777)</p>
						</div>
						
					</div>	
                    <?php } ?>		
                    
                    <?php if (!check_xml()){ ?>
                    <div class="widget">			
						
						<div class="widget-header">
							<span class="icon-x-alt"></span>
							<h3>Required: SimpleXML PHP Extension</h3>
						</div>
						
						<div class="widget-content">
							<p>It seems that the SimpleXML Extension is not loaded in your PHP Installation. mAdserve requires SimpleXML, and you can find instructions on how to install it <a href="http://php.net/manual/en/book.simplexml.php" target="_blank">here.</a></p>
						</div> 
                        </div>
                    <?php } ?>		
                    
                     <?php if (!check_mbstring()){ ?>
                    <div class="widget">			
						
						<div class="widget-header">
							<span class="icon-x-alt"></span>
							<h3>Required: mbstring PHP Extension</h3>
						</div>
						
						<div class="widget-content">
							<p>mAdserve requires the PHP mbstring extension to be installed for geo targeting. You can find instructions on how to install it <a href="http://php.net/manual/en/book.mbstring.php" target="_blank">here.</a></p>
						</div> 
                        </div>
                    <?php } ?>		
            
                    
				<form method="get" id="installer" name="installer" class="form uniformForm">
                <input type="hidden" name="step" value="2" />				
					
				

<div class="actions">						
									<?php if(check_server()){?><button type="submit" class="btn btn-quaternary btn-large">>> Continue to Server Configuration</button>&nbsp;&nbsp;<?php }?><button type="button" onclick="javascript:location.reload(true)" class="btn btn-quaternary btn-large">Refresh</button>
								</div> <!-- .actions -->
                                
                                <?php } ?>
                                
                                <?php if ($mad_install['step']==2){ ?>
                                
              <?php if (isset($errormessage)){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>

                                
                                <form method="post" action="install.php" id="installer" name="installer" class="form uniformForm">
                <input type="hidden" name="step" value="3" />				
                                
                               <div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>General Server Configuration</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
                       

						
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['server_name'])){ echo $editdata['server_name']; } ?>"  name="server_name" id="server_name" size="28" class="" />			
									<label for="server_name">Ad Server Name (e.g. Company X Ad Server)</label>
								</div>
							</div> <!-- .field-group -->
                            
                            
                             <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['admin_firstname'])){ echo $editdata['admin_firstname']; }?>"  name="admin_firstname" id="admin_firstname" size="28" class="" />			
									<label for="admin_firstname">Admin User - First Name</label></div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['admin_lastname'])){ echo $editdata['admin_lastname']; }?>"  name="admin_lastname" id="admin_lastname" size="28" class="" />			
									<label for="admin_lastname">Admin User - Last Name</label></div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['admin_email'])){ echo $editdata['admin_email']; }?>"  name="admin_email" id="admin_email" size="28" class="" />			
									<label for="admin_email">Admin User - E-Mail Address</label></div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="password" name="admin_pass" id="admin_pass" size="28" class="" />			
									<label for="admin_pass">Admin User - Password</label></div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="password"  name="admin_pass2" id="admin_pass2" size="28" class="" />			
									<label for="admin_pass2">Repeat Password</label></div>
							</div> <!-- .field-group -->

							
						
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->
                    
                    <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">>> Continue to Database Configuration</button>
								</div> <!-- .actions -->
                                <?php } ?>
                                
                                  <?php if ($mad_install['step']==3){ ?>
                                
              <?php if (isset($errormessage)){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>

                                
                                <form method="post" action="install.php" id="installer" name="installer" class="form uniformForm">
                <input type="hidden" name="step" value="4" />				
                
                <div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>MySQL Database Configuration</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
                       

						
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['db_host'])){ echo $editdata['db_host']; } ?>"  name="db_host" id="db_host" class="" />			
									<label for="db_host">Database Host</label>
								</div>
							</div> <!-- .field-group -->
                            
                            
                             <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['db_name'])){ echo $editdata['db_name']; }?>"  name="db_name" id="db_name" class="" />			
									<label for="db_name">Database Name</label></div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['db_user'])){ echo $editdata['db_user']; }?>"  name="db_user" id="db_user"  class="" />			
									<label for="db_user">Database User Name</label></div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['db_pass'])){ echo $editdata['db_pass']; }?>"  name="db_pass" id="db_pass" class="" />			
									<label for="db_pass">Database Password</label></div>
							</div> <!-- .field-group -->
 													
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->
                    
                    <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">>> Continue</button>
								</div> <!-- .actions -->
                
                <?php } ?>
                
                <?php if ($mad_install['step']==4){ ?>
                
                   <?php if (isset($errormessage)){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>

                                
                                <form method="post" action="install.php" id="installer" name="installer" class="form uniformForm">
                <input type="hidden" name="step" value="5" />				
                
                
                
                <div class="notify notify-info">
						
						<a href="javascript:;" class="close">&times;</a>
						<h3>MobFox:Connect Information</h3>
						
						<p>By adding your MobFox account details to mAdserve, you will be able to easily monetize any un-filled traffic through the MobFox:Connect RTB exchange, get access to real-time traffic requests from over 30 different ad networks, download additional third party ad network modules right through mAdserve.org, and get notified immediately about product & security updates from mAdserve.</p>
					</div> <!-- .notify -->
                
                <div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>MobFox:Connect Activation</h3>
						</div> <!-- .widget-header -->
                
                <div class="widget-content">
                        
                        
                        <div class="field-group control-group inline">	
	
									<div class="field">
										<input type="radio"   onclick="document.getElementById('mobfox_signin').style.display='block'; document.getElementById('mobfox_signup').style.display='none';" name="mobfox_connect_type" <?php if (!isset($_POST['mobfox_connect_type']) or $_POST['mobfox_connect_type']==1){?>checked="checked"<?php } ?> id="mobfox_one" value="1" />
										<label for="mobfox_one"><em>I have a MobFox.com account</em></label>
									</div>
			
									<div id="interstitialoptiobutton" class="field">
										<input type="radio"  onclick="document.getElementById('mobfox_signin').style.display='none'; document.getElementById('mobfox_signup').style.display='block';" name="mobfox_connect_type" <?php if (isset ($_POST['mobfox_connect_type']) && $_POST['mobfox_connect_type']==2){?>checked="checked"<?php } ?> id="mobfox_two" value="2" />
										<label for="mobfox_two"><em>I do not have a MobFox.com account</em></label>
									</div>	
                                    
                                    </div>
                                    
                                    <div id="mobfox_signin" style="<?php if (!isset($_POST['mobfox_connect_type']) or $_POST['mobfox_connect_type']==1){?>display:block;<?php } else { ?>display:none;<?php } ?>">
                                    <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['mf_user'])){ echo $editdata['mf_user']; } ?>"  name="mf_user" id="mf_user" size="30" />			
									<label for="mf_user">MobFox.com Account E-Mail Address</label>
								</div>
							</div> <!-- .field-group -->
                            
                            
                             <div class="field-group">
			
								<div class="field">
									<input type="password"  name="mf_pass" id="mf_pass" size="30"/>			
									<label for="mf_pass">MobFox.com Password</label></div>
							</div> <!-- .field-group -->
                            
                            </div>
                            
                             <div id="mobfox_signup" style="<?php if (isset ($_POST['mobfox_connect_type']) && $_POST['mobfox_connect_type']==2){?>display:block;<?php } else { ?>display:none;<?php } ?>">
                                    <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['mf_first_name'])){ echo $editdata['mf_first_name']; } ?>"  name="mf_first_name" id="mf_first_name" size="30" />			
									<label for="mf_first_name">First Name</label>
								</div>
                            
                            
                             <div class="field">
									<input type="text" value="<?php if (isset($editdata['mf_last_name'])){ echo $editdata['mf_last_name']; } ?>"  name="mf_last_name" id="mf_last_name" size="30" />			
									<label for="mf_last_name">Last Name</label>
								</div>
							</div> <!-- .field-group -->
                            
                              <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['mf_email'])){ echo $editdata['mf_email']; } ?>"  name="mf_email" id="mf_email" size="30" />			
									<label for="mf_email">E-Mail Address</label>
								</div>
                                
                                <div class="field">
									<input type="text" value="<?php if (isset($editdata['mf_phone'])){ echo $editdata['mf_phone']; } ?>"  name="mf_phone" id="mf_phone" size="30" />			
									<label for="mf_email">Phone Number (optional)</label>
								</div>
                                </div>
                                
                                  <div class="field-group">
			
								<div class="field">
									<input type="password" name="mf_password" id="mf_password" size="30" />			
									<label for="mf_password">Choose Password</label>
								</div>
                            
                            
                             <div class="field">
									<input type="password"  name="mf_password2" id="mf_password2" size="30" />			
									<label for="mf_password2">Repeat Password</label>
								</div>
							</div> <!-- .field-group -->
                            
                            
                            </div>
						
					</div> <!-- .widget -->
                    
                    </div>
                
                
                    <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">>> Continue</button>
								</div> <!-- .actions -->
                
                <?php } ?>
                    
                                   <?php if ($mad_install['step']==5){ ?>
                                   
                                     
                <div class="notify notify-success">
						
						<a href="javascript:;" class="close">&times;</a>
						<h3>Installation Successful!</h3>
						
						<p>Congratulations! Your mAdserve installation has completed successfully and mAdserve is now ready for production use. Please click the below button and log-in with the Administrator E-Mail and Password you supplied earlier in the installation process.</p>
					</div> <!-- .notify -->

<div class="actions">						
									<button type="button" onclick="window.location='index.php';" class="btn btn-quaternary btn-large">>> Sign In Now</button>
								</div> <!-- .actions -->


<?php } ?>
                    
                     
										
					
					
					
					</form>
                    
                    
					
				</div> <!-- .grid -->
			
			
		</div> <!-- .container -->
       		
	</div> <!-- #content -->

				
				
				
		
	

<?php
require_once MAD_PATH . '/www/cp/templates/footer_i.tpl.php';
?>