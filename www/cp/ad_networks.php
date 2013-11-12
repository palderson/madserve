<?php
global $current_section;
$current_section='adnetworks';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';



require_once MAD_PATH . '/www/cp/templates/header.tpl.php';

if (!check_permission('adnetworks', $user_detail['user_id'])){
exit;
}

?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>Ad Network Management</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
				
				<div class="grid-24">	
					
					
				
				
					<div class="widget widget-table">
					
						<div class="widget-header">
							<span class="icon-list"></span>
							<h3 class="icon chart">Ad Networks</h3>		
						</div>
					
						<div class="widget-content">
							
							<table class="table table-bordered table-striped">
						<thead>
							<tr>
								<th>Network Name</th>
								<th><div align="center">Banner support</div></th>
								<th><div align="center">Interstitial support</div></th>
								<th><div align="center">Status</div></th>
								<th><div align="center">Network Info</div></th>
								<th><div align="center">Sign Up</div></th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
<?php get_adnetworks('manager'); ?>					
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
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>