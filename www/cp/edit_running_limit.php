<?php
global $current_section;
global $edited;
$current_section='campaigns';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';


if (!check_permission('inventory', $user_detail['user_id'])){
exit;
}

global $current_action;
$current_action='edit';

if (isset($_POST['update'])){
if (do_edit('runninglimit', $_POST, $_GET['id'])){
$edited=1;
MAD_Admin_Redirect::redirect('edit_running_limit.php?edited=1&id='.$_GET['id'].'');	
}
else
{
global $edited;
$edited=2;
}
}


require_once MAD_PATH . '/www/cp/templates/header.tpl.php';



?>


<div id="content">		
		
		<div id="contentHeader">
			<h1>Edit Running Campaign Limit</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
			
           <?php if ($edited==1){?>	
            <div class="box plain"><div class="notify notify-success"><h3>Successfully Updated</h3><p>Your Campaign Limit has successfully been updated. <a href="view_campaigns.php">Back to Campaign List</a></p></div> <!-- .notify --></div>
            <?php } else if ($edited==2){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
            
                    
				<form method="post" id="crudcampaign" name="crudcampaign" class="form uniformForm">
                <input type="hidden" name="update" value="1" />				
					
				<?php require_once MAD_PATH . '/www/cp/templates/forms/crud.campaignlimit.tpl.php';
				
				?>	
                    
                    
                     <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Update Limit</button>
								</div> <!-- .actions -->
										
					
					
					
					</form>
					
				</div> <!-- .grid -->
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->
<?php
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>