<?php
global $current_section;
if (!isset($_GET['zone'])){$_GET['zone']='';}
if (!isset($_GET['publication'])){$_GET['publication']='';}
if (!isset($integration_active)){$integration_active='';}
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

 if (is_numeric($_GET['zone']) && !is_numeric($_GET['publication'])){
 $zone_detail=get_zone_detail($_GET['zone']);
 $_GET['publication']=$zone_detail['publication_id'];
 }

 if (is_numeric($_GET['zone']) && is_numeric($_GET['publication'])){
	 $zone_detail=get_zone_detail($_GET['zone']);
	 if ($zone_detail['publication_id']!=$_GET['publication']){
		 unset ($_GET['zone']); }
		 else {
	 $integration_active=1;
	 global $publication_detail;
	 $publication_detail=get_publication_detail($zone_detail['publication_id']);
		 }
 }


require_once MAD_PATH . '/www/cp/templates/header.tpl.php';



?>

<div id="content">		
		
		<div id="contentHeader">
			<h1>SDK / Code Snippet Integration</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
            <?php if (isset($_GET['added']) && $_GET['added']==1){?>
            <div class="box plain"><div class="notify notify-success"><h3>Success!</h3><p>Zone has successfully been created. Find integration details below:</p></div> <!-- .notify --></div>
            <?php } ?>
			
         
            
                    
				<form method="get" id="publication_integration" name="publication_integration" class="form uniformForm">
					
				<?php require_once MAD_PATH . '/www/cp/templates/forms/crud.integrationselect.tpl.php';
				if ($integration_active==1){ require_once MAD_PATH . '/www/cp/templates/forms/crud.integration.tpl.php'; }
				?>	
                    
                    
                     
										
					
					
					
					</form>
					
				</div> <!-- .grid -->
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->
<?php
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>