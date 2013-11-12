<?php
global $current_section;
$current_section='inventory';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';


if (!check_permission('inventory', $user_detail['user_id'])){
exit;
}

if (!check_permission_simple('modify_publications', $user_detail['user_id'])){
exit;	
}

global $current_action;
$current_action='create';

if (isset($_POST['add'])){
if (do_create('publication', $_POST, '')){
global $added;
$added=1;
MAD_Admin_Redirect::redirect('integration.php?added=1&zone='.$created_zone_id.'');	
}
else
{
global $added;
$added=2;
}
}



require_once MAD_PATH . '/www/cp/templates/header.tpl.php';



?>

<div id="content">		
		
		<div id="contentHeader">
			<h1>Create New Publication</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
			
           <?php if (isset($errormessage)){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
            
                    
				<form method="post" id="crudpublication" name="crudpublication" class="form uniformForm">
                <input type="hidden" name="add" value="1" />				
					
				<?php require_once MAD_PATH . '/www/cp/templates/forms/crud.publication.tpl.php';  require_once MAD_PATH . '/www/cp/templates/forms/crud.zone.tpl.php';
				
				?>	
                    
                    
                     <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Create Publication</button>
								</div> <!-- .actions -->
										
					
					
					
					</form>
					
				</div> <!-- .grid -->
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->
<?php
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>