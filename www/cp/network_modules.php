<?php
global $current_section;
$current_section='configuration';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';



require_once MAD_PATH . '/www/cp/templates/header.tpl.php';

if (!check_permission('configuration', $user_detail['user_id'])){
exit;
}

if (isset($_GET['action'])){
if ($_GET['action']=='install' && !empty($_GET['networkid'])){
install_network($_GET['networkid']);
}

if ($_GET['action']=='uninstall' && !empty($_GET['networkid'])){
uninstall_network($_GET['networkid']);
}
}


?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>Ad Network Modules</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
        
        
				
				<div class="grid-24">	
                
                 <?php if (isset($errormessage)){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
            
             <?php if (isset($successmessage)){ ?>
            <div class="box plain"><div class="notify notify-success"><h3>Success</h3><p><?php echo $successmessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
					
					  <?php if ($user_detail['tooltip_setting']==1){ ?>
                         <div class="notify notify-info">						
						
                        						<p>To install a new ad network, drop the network module into the following directory on your server: <em><?php echo MAD_PATH. "/modules/network_modules/"; ?></em></p>
					</div> <!-- .notify -->
                        <?php } ?>
				
				
					<div class="widget widget-table">
					
						<div class="widget-header">
							<span class="icon-list"></span>
							<h3 class="icon chart">Ad Network Module List</h3>		
						</div>
					
						<div class="widget-content">
                        
                       
							
							<table class="table table-bordered table-striped">
						<thead>
							<tr>
								<th>Module File</th>
								<th><div align="center">XML Configuration</div></th>
								<th><div align="center">Request Handler</div></th>
								<th><div align="center">Status</div></th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
<?php get_adnetwork_modules(); ?>					
</tbody>
					</table>
		        </div> 
						<!-- .widget-content -->
					
				</div> <!-- .widget -->
					
					<!-- .actions -->
                            
								
					
				
				
				
				
				
				
				
			</div> <!-- .grid -->
			
			
				
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->	

<?php
global $jsload; $jsload=1; print_deletionjs('networks');
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>