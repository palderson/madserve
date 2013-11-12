<?php
global $current_section;
$current_section='profile';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';

if (isset($_POST['update'])){
if (do_update_data('password', $_POST, $user_detail['user_id'])){
global $updated;
$updated=1;
}
else
{
global $updated;
$updated=2;
}
}



require_once MAD_PATH . '/www/cp/templates/header.tpl.php';

?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>My Profile</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
			
            <?php if ($updated==1){?>	
            <div class="box plain"><div class="notify notify-success"><h3>Success</h3><p>Your Password has successfully been updated.</p></div> <!-- .notify --></div>
            <?php } else if ($updated==2){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
                    
				<form method="post" class="form uniformForm">
                <input type="hidden" name="update" value="1" />				
					
					<div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>Change Password</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
						
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="password"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Current Password</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input type="password"  name="new_password" id="new_password" size="28" class="" />			
									<label for="new_password">New Password</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input type="password"  name="new_password_2" id="new_password_2" size="28" class="" />			
									<label for="new_password_2">Repeat New Password</label>
								</div>
							</div> <!-- .field-group -->
                            
                             
                            
                            <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Update Password</button>
								</div> <!-- .actions -->
                            
			
							
							
						
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->
										
					
					
					
					</form>
					
				</div> <!-- .grid -->
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->
<?php
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>