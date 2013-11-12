<?php
global $current_section;
$current_section='inventory';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';



require_once MAD_PATH . '/www/cp/templates/header.tpl.php';

if (!check_permission('inventory', $user_detail['user_id'])){
exit;
}

if (check_permission_simple('modify_publications', $user_detail['user_id'])){
if (isset ($_GET['delete']) && $_GET['delete']==1 && is_numeric($_GET['id'])){
delete_publication($_GET['id']);
}
}

?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>Inventory</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
				
				<div class="grid-24">	
					
					
				
				
					<div class="widget widget-table">
					
						<div class="widget-header">
							<span class="icon-list"></span>
							<h3 class="icon chart">Publication List</h3>		
						</div>
					
						<div class="widget-content">
							
							<table id="syslog" class="table table-bordered table-striped data-table">
						<thead>
							<tr>
								<th>Publication Name</th>
								<th>Type</th>
								<th>Default Channel</th>
								<th>Status</th>
								<th>Placements</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
<?php get_publications(); ?>					
</tbody>
					</table>
        </div> 
						<!-- .widget-content -->
					
				</div> <!-- .widget -->
					
					<div class="actions">						
								<button onclick="window.location='add_publication.php';" class="btn btn-quaternary"><span class="icon-plus"></span>Create New Publication</button>
								</div> <!-- .actions -->
                            
								
					
				
				
				
				
				
				
				
			</div> <!-- .grid -->
			
			
				
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->	
 <?php global $jsload; $jsload=1; print_deletionjs('publications'); ?>
<?php
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>