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

if (!is_numeric($_GET['id'])){
exit;	
}

if (check_permission_simple('modify_publications', $user_detail['user_id'])){
if (isset($_GET['delete'])){
if ($_GET['delete']==1 && is_numeric($_GET['delid'])){
delete_placements($_GET['delid'], '');
}
}
}


$publ_detail=get_publication_detail($_GET['id']);

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
							<h3 class="icon chart">Placement List: <?php echo $publ_detail['inv_name']; ?></h3>		
						</div>
					
						<div class="widget-content">
							
							<table id="syslog" class="table table-bordered table-striped data-table">
						<thead>
							<tr>
								<th> Name</th>
								<th>Type</th>
								<th>Channel</th>
								<th>Size</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
<?php get_placements($_GET['id']); ?>					
</tbody>
					</table>
        </div> 
						<!-- .widget-content -->
					
				</div> <!-- .widget -->
					
					<div class="actions">						
								<button onclick="window.location='add_placement.php?pubid=<?php echo $_GET['id']; ?>';" class="btn btn-quaternary"><span class="icon-plus"></span>Create New Placement</button>
								</div> <!-- .actions -->
                            
								
					
				
				
				
				
				
				
				
			</div> <!-- .grid -->
			
			
				
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->	
 <?php global $jsload; $jsload=1; global $del_publ_id; $del_publ_id=$_GET[id]; print_deletionjs('placements'); ?>
<?php
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>