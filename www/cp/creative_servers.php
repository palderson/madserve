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

if (isset($_GET['update_default'])){
update_configvar('default_creative_server', $_GET['id']);
}

if (isset($_GET['delete'])){
if ($_GET['delete']==1 && is_numeric($_GET['delid'])){
delete_creativeserver($_GET['delid']);
}
}



?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>Creative Server Management</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
				
				<div class="grid-24">	
					
					
				
				
					<div class="widget widget-table">
					
						<div class="widget-header">
							<span class="icon-list"></span>
							<h3 class="icon chart">Creative Servers</h3>		
						</div>
					
						<div class="widget-content">
							
							<table class="table table-bordered table-striped">
						<thead>
							<tr>
								<th>Server ID</th>
								<th>Server Type</th>
								<th>Server Name</th>
								<th>Server Host</th>
								<th>Default Server?</th>
								<th>Creatives Stored</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
<?php get_creativeservers(); ?>					
</tbody>
					</table>
            </div> 
						<!-- .widget-content -->
					
				</div> <!-- .widget -->
					
					<div class="actions">						
								<button onclick="window.location='create_creative_server.php';" class="btn btn-quaternary"><span class="icon-plus"></span>Add New Creative Server</button>
								</div> <!-- .actions -->
                            
								
					
				
				
				
				
				
				
				
			</div> <!-- .grid -->
			
			
				
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->	

<?php
global $jsload; $jsload=1; print_deletionjs('cservers');
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>