<?php
global $current_section;
$current_section='campaigns';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';


if (!check_permission('campaigns', $user_detail['user_id'])){
exit;
}

global $current_action;
$current_action='create';

global $page_desc;
$page_desc='create_adunit';

if (isset($_POST['add'])){

if (do_create('ad_unit', $_POST, '') && is_numeric($_GET['id'])){
global $added;
$added=1;
MAD_Admin_Redirect::redirect('view_adunits.php?id='.$_GET['id'].'&added=1');	
}
else
{
global $added;
$added=2;
}
}

$campaign_detail=get_campaign_detail($_GET['id']);



require_once MAD_PATH . '/www/cp/templates/header.tpl.php';



?>

<script language="JavaScript">  

function showadiv(id) {  
//safe function to show an element with a specified id
		  
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById(id).style.visibility = 'visible';
	}
	else {
		if (document.layers) { // Netscape 4
			document.id.visibility = 'visible';
		}
		else { // IE 4
			document.all.id.style.visibility = 'visible';
		}
	}
}

function hideadiv(id) {  
//safe function to hide an element with a specified id
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById(id).style.visibility = 'collapse';
	}
	else {
		if (document.layers) { // Netscape 4
			document.id.visibility = 'collapse';
		}
		else { // IE 4
			document.all.id.style.visibility = 'collapse';
		}
	}

}

</script>

<div id="content">		
		
		<div id="contentHeader">
			<h1>Create Ad Unit: <?php echo $campaign_detail['campaign_name']; ?></h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
			
           <?php if (isset($errormessage)){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
            
                    
				<form method="post" enctype="multipart/form-data" id="crudcampaign" name="crudcampaign" class="form uniformForm">
                <input type="hidden" name="add" value="1" />	
                <input type="hidden" name="campaign_id" value="<?php echo $_GET['id']; ?>" />		
					
				<?php require_once MAD_PATH . '/www/cp/templates/forms/crud.adunit.tpl.php';
				
				?>	
                
                <script src='assets/javascripts/all.js'></script>
                    
                    
                     <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Create Ad Unit</button>
								</div> <!-- .actions -->
										
					
					
					
					</form>
					
				</div> <!-- .grid -->
                
             
<script>
<?php if (isset ($editdata['creative_type']) && $editdata['creative_type']==2){ 
echo "creative_type('external');";
} else if (isset ($editdata['creative_type']) && $editdata['creative_type']==3){ 
echo "creative_type('html');";
} else {
echo "creative_type('upload');";
}

?>
if (document.forms["crudcampaign"].elements["creative_format"].value!='10'){hideadiv('widthzonediv'); hideadiv('heightzonediv');} else {showadiv('widthzonediv'); showadiv('heightzonediv');}
</script>
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->
<?php
global $jsload; $jsload=1; require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>