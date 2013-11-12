<?php
$zone_active=0;
$edited=0;
if (!isset($_GET['pid'])){$_GET['pid']='';}
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

if (isset($_POST['update'])){
if (update_publisher_ids($_POST, $_GET['id'], $_GET['pid'])){
global $edited;
$edited=1;
}
else
{
global $edited;
$edited=2;
}
}

$network_detail=get_network_detail($_GET['id']);

if (is_numeric($_GET['pid'])){
$zone_active=1;
$publication_detail=get_publication_detail($_GET['pid']);
}

?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>Publisher ID Setup: <?php echo $network_detail['network_name']; ?></h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
				
				<div class="grid-24">	
                
                <?php if ($edited==1){?>	
            <div class="box plain"><div class="notify notify-success"><h3>Successfully Updated</h3><p>Your Publisher ID Settings have successfully been updated.</p></div> <!-- .notify --></div>
            <?php } else if ($edited==2){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
					
					
								<form method="post" id="publisher_id" name="publisher_id" class="form uniformForm">
                                <input name="update" value="1" type="hidden" />
                                <input name="id" value="<?php echo $_GET['id'];?>" type="hidden" />
                                <input name="pid" value="<?php echo $_GET['pid'];?>" type="hidden" />
<?php if ($zone_active==1){?><div style="margin-bottom:9px;"><a href="network_id_setup.php?id=<?php echo $_GET['id']; ?>">← Back to Top Level</a></div><?php } ?>
				
					<div class="widget widget-table">
					
						<div class="widget-header">
							<span class="icon-list"></span>
							<h3 class="icon chart">Manage Publisher IDs<?php if ($zone_active==1){echo ': '.$publication_detail['inv_name'].''; } ?></h3>		
						</div>
					
						<div class="widget-content">
<?php get_pubid_table($_GET['id'], $_GET['pid']); ?>					

		        </div> 
						<!-- .widget-content -->
					
				</div> <!-- .widget -->
					
					<!-- .actions -->
                     <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Save Changes</button>
                                    
								</div> <!-- .actions -->
                                </form>
                            
								
					
				
				
				
				
				
				
				
			</div> <!-- .grid -->
			
			
				
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->	

<?php
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>