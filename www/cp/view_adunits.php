<?php
global $current_section;
$current_section='campaigns';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';



require_once MAD_PATH . '/www/cp/templates/header.tpl.php';

if (!check_permission('campaigns', $user_detail['user_id'])){
exit;
}

if (isset ($_GET['action']) && $_GET['action']==1 && isset($_POST['select_adunit']) && is_array($_POST['select_adunit'])){
$selected_items = $_POST['select_adunit'];
	
foreach ($selected_items as $item_id) {
	
switch ($_POST['form_action']){

case 'Pause':
pause_adunit($item_id);
break;	

case 'Run':
run_adunit($item_id);
break;	

case 'Delete':
delete_adunit($item_id);
break;	

	
}

}

global $successmessage;
$successmessage='Your ad units have successfully been updated.';
	
}


$campaign_detail=get_campaign_detail($_GET['id']);
?>
<script type="text/javascript" language="javascript">
function SetAction(x) {
var answer = confirm("Are you sure you want to "+x+" the selected ad units?")
	if (answer){
document.listform.form_action.value = x;
document.listform.submit();	}
	else{
		return false;
	}

}
</script>

<div id="content">		
		
		<div id="contentHeader">
			<h1>Ad Units</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
        
         <FORM method="POST" name="listform" action="view_adunits.php?id=<?php echo $_GET['id']; ?>&action=1" id="listform">
        <INPUT value="action_set" type="hidden" name="form_action">
				
				<div class="grid-24">	
					
                    <div style="margin-bottom:10px;">
					<button onClick="return SetAction('Pause')" class="btn btn-small btn-quaternary">Pause</button>&nbsp;&nbsp;<button onClick="return SetAction('Run')" class="btn btn-small btn-quaternary">Run</button>&nbsp;&nbsp;<button onClick="return SetAction('Delete')" class="btn btn-small btn-quaternary">Delete</button></div>
				
				
					<div class="widget widget-table">
					
						<div class="widget-header">
							<span class="icon-list"></span>
							<h3 class="icon chart">Ad Units: <?php echo $campaign_detail['campaign_name']; ?></h3>		
						</div>
					
						<div class="widget-content">
							
							<table class="table table-bordered table-striped">
						<thead>
							<tr>
								<th>Name</th>
								<th>Type</th>
								<th>Status</th>
								<th>Ad Size</th>
								<th>Creative</th>
								<th>Impressions</th>
								<th>Clicks</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
<?php get_adunits($_GET['id']); ?>					
</tbody>
					</table>
                    </FORM>
        </div> 
						<!-- .widget-content -->
					
				</div> <!-- .widget -->
					
					<div class="actions">						
								<button type="button" onclick="window.location='create_adunit.php?id=<?php echo $_GET['id']; ?>';" class="btn btn-quaternary"><span class="icon-plus"></span>Create New Ad Unit</button>
								</div> <!-- .actions -->
                            
								
					
				
				
				
				
				
				
				
			</div> <!-- .grid -->
			
			
				
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->	
    
<?php
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>