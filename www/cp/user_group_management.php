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

if (isset($_GET['delete'])){
if ($_GET['delete']==1 && is_numeric($_GET['delid'])){
delete_user_group($_GET['delid']);
}
}

?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>User Group Management</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
				
				<div class="grid-24">	
					
					
				
				
					<div class="widget widget-table">
					
						<div class="widget-header">
							<span class="icon-list"></span>
							<h3 class="icon chart">User Group List</h3>		
						</div>
					
						<div class="widget-content">
							
							<table class="table table-bordered table-striped">
						<thead>
							<tr>
								<th>Group ID</th>
								<th>Group Name</th>
								<th>Total Users</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
<?php get_usergroups(); ?>					
</tbody>
					</table>
            </div> 
						<!-- .widget-content -->
					
				</div> <!-- .widget -->
					
					<div class="actions">						
								<button onclick="window.location='create_group.php';" class="btn btn-quaternary"><span class="icon-plus"></span>Create New Group</button>
								</div> <!-- .actions -->
                            
								
					
				
				
				
				
				
				
				
			</div> <!-- .grid -->
			
			
				
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->	

<?php
global $jsload; $jsload=1; print_deletionjs('groups');
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>