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
if (do_update_data('generalsettings', $_POST, $user_detail['user_id'])){
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
			<h1>Server Configuration</h1>
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
							<h3>General Settings</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
						
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php echo getconfig_var('adserver_name'); ?>"  name="adserver_name" id="adserver_name" size="28" class="" />			
									<label for="adserver_name">Ad Server Name</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php echo getconfig_var('server_email'); ?>"  name="server_email" id="server_email" size="28" class="" />			
									<label for="server_email">Server E-Mail Address</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input id="allow_statistical_info" name="allow_statistical_info" <?php if (getconfig_var('allow_statistical_info')==1){ ?>checked="checked"<?php } ?> type="checkbox" value="1" />		
									<label for="allow_statistical_info">Send anonymous statistical information to madserve.org?</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<span style="margin-left:4px;"><?php echo getconfig_var('api_key'); ?></span>
									<label for="allow_statistical_info">Reporting API Key</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<span style="margin-left:4px;"><?php echo getconfig_var('installation_id'); ?></span>
									<label for="allow_statistical_info">mAdserve Installation ID</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<span style="margin-left:4px;"><?php echo getconfig_var('db_install_version'); ?></span>
									<label for="db_v">mAdserve Database Version</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<span style="margin-left:4px;"><?php echo MAD_VERSION; ?></span>
									<label for="db_v">mAdserve Code Version</label>
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