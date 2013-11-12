<?php
global $current_section;
$current_section='configuration';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';


if (!check_permission('configuration', $user_detail['user_id'])){
exit;
}

if (isset($_POST['update'])){
if (do_update_data('mobfox_connect', $_POST, $user_detail['user_id'])){
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
			<h1>MobFox:Connect Configuration</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
			
            <?php if (isset ($_GET['failed']) && $_GET['failed']==1){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p>mAdserve was unable to connect to your MobFox Account. A valid MobFox connection is required for mAdserve to function properly. If you have recently updated your MobFox Account password, please update your user credentials below.</p></div> <!-- .notify --></div>
            <?php } ?>
           <?php if ($updated==1){?>	
            <div class="box plain"><div class="notify notify-success"><h3>Successfully Updated</h3><p>Your MobFox:Connect Settings have successfully been updated.</p></div> <!-- .notify --></div>
            <?php } else if ($updated==2){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
            
                    
				<form method="post" class="form uniformForm">
                <input type="hidden" name="update" value="1" />				
					
					<div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>Update MobFox:Connect Details</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
						
                            
                      
                            
                            <div class="field-group">
			
								<div class="field">
<input type="text" value="<?php echo getconfig_var('mobfox_uid'); ?>"  name="mobfox_uid" id="mobfox_uid" size="28" class="" />									<label for="mobfox_uid">MobFox Username/E-Mail</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
<input type="password" value=""  placeholder="Enter your MobFox Password..." name="mobfox_password" id="mobfox_password" size="28" class="" />									<label for="mobfox_password">MobFox Password</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<?php if (mfconcheck(getconfig_var('mobfox_uid'), getconfig_var('mobfox_password'), 1)){echo '<span style="margin-left:4px; color:#090;">Active</span>'; } else {echo '<span style="margin-left:4px; color:#900;">Failed</span>';} ?>
									<label for="db_v">Connection Status</label>
								</div>
							</div> <!-- .field-group -->
                            
                           
                            
                             
                             
                            
                            <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Save Changes</button>
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