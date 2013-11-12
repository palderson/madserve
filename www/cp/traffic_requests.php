<?php
global $current_section;
$current_section='trafficrequests';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';



require_once MAD_PATH . '/www/cp/templates/header.tpl.php';

if (!check_permission('trafficrequests', $user_detail['user_id'])){
exit;
}

if (isset($_GET['action'])){
if ($_GET['action']=='approve' && is_numeric($_GET['id'])){
approve_trafficrequest($_GET['id']);
}

if ($_GET['action']=='decline' && is_numeric($_GET['id'])){
decline_trafficrequest($_GET['id']);
}
}

?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>Traffic Request Management</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
				
				<div class="grid-24">	
                
                <?php if (isset($errormessage)){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
            
             <?php if (isset($successmessage)){ ?>
            <div class="box plain"><div class="notify notify-success"><h3>Success</h3><p><?php echo $successmessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
				
				
				
				
					<div class="widget widget-table">
					
						<div class="widget-header">
							<span class="icon-list"></span>
							<h3 class="icon chart">Traffic Requests</h3>		
						</div>
					
						<div class="widget-content">
							
							<table class="table table-bordered table-striped">
						<thead>
							<tr>
								<th>ID</th>
								<th><div align="center">Network</div></th>
								<th><div align="center">Status</div></th>
								<th><div align="center">Targeting</div></th>
								<th><div align="center">Rate</div></th>
								<th><div align="center">Duration</div></th>
								<th><div align="center">Date</div></th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
<?php get_traffic_requests('list'); ?>					
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