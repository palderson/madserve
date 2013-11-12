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
$current_action='edit';

if (isset($_POST['update'])){
if (do_edit('adunit', $_POST, $_GET['id'])){
global $edited;
$edited=1;
MAD_Admin_Redirect::redirect('edit_ad_unit.php?edited=1&id='.$_GET['id'].'');	
}
else
{
global $edited;
$edited=2;
}
}


if ($edited!=2){
$editdata=get_adunit_detail($_GET['id']);
$editdata['creative_type']=$editdata['adv_type'];
$editdata['custom_creative_width']=$editdata['adv_width'];
$editdata['custom_creative_height']=$editdata['adv_height'];
$editdata['click_url']=$editdata['adv_click_url'];
$editdata['tracking_pixel']=$editdata['adv_impression_tracking_url'];
$editdata['creative_url']=$editdata['adv_bannerurl'];
$editdata['html_body']=$editdata['adv_chtml'];
}


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
			<h1>Edit Ad Unit: <?php echo $editdata['adv_name']; ?></h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
			
           <?php if ($edited==1){?>	
            <div class="box plain"><div class="notify notify-success"><h3>Successfully Updated</h3><p>Your Ad Unit has successfully been updated.</p></div> <!-- .notify --></div>
            <?php } else if ($edited==2){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
            
                    
				<form method="post" enctype="multipart/form-data" id="crudcampaign" name="crudcampaign" class="form uniformForm">
                <input type="hidden" name="update" value="1" />	
					
				<?php require_once MAD_PATH . '/www/cp/templates/forms/crud.adunit.tpl.php';
				
				?>	
                
                <script src='assets/javascripts/all.js'></script>
                    
                    
                     <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Edit Ad Unit</button>
								</div> <!-- .actions -->
										
					
					
					
					</form>
					
				</div> <!-- .grid -->
                
             
<script>
<?php if ($editdata['creative_type']==2){ 
echo "creative_type('external');";
} else if ($editdata['creative_type']==3){ 
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