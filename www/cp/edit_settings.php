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
if (do_update_data('profilesettings', $_POST, $user_detail['user_id'])){
global $updated;
$updated=1;
updatecurrentuserdata($user_detail['user_id']);
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
            <div class="box plain"><div class="notify notify-success"><h3>Successfully Updated</h3><p>Your Settings have successfully been updated.</p></div> <!-- .notify --></div>
            <?php } else if ($updated==2){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
            
                    
				<form method="post" class="form uniformForm">
                <input type="hidden" name="update" value="1" />				
					
					<div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>Edit Settings</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
						

                            <div class="field-group">
			
								<div class="field">
									<input id="tooltip_setting" name="tooltip_setting" <?php if ($user_detail['tooltip_setting']==1){ ?>checked="checked"<?php } ?> type="checkbox" value="1" />		
									<label for="tooltip_setting">Show help tooltips in control panel?</label>
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