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

if (!check_permission_simple('create_campaigns', $user_detail['user_id'])){
exit;	
}


global $current_action;
$current_action='create';

if (isset($_POST['add'])){

if (do_create('campaign', $_POST, '')){
global $added;
$added=1;
MAD_Admin_Redirect::redirect('view_campaigns.php?added=1');	
}
else
{
global $added;
$added=2;
}
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
			<h1>Create Campaign</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
			
           <?php if (isset($errormessage)){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
            
                    
				<form method="post" enctype="multipart/form-data" id="crudcampaign" name="crudcampaign" class="form uniformForm">
                <input type="hidden" name="add" value="1" />				
					
				<?php require_once MAD_PATH . '/www/cp/templates/forms/crud.campaign.tpl.php';  require_once MAD_PATH . '/www/cp/templates/forms/crud.adunit.tpl.php';
				
				?>	
                    
                    
                     <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Create Campaign</button>
								</div> <!-- .actions -->
										
					
					
					
					</form>
					
				</div> <!-- .grid -->
                
                 <script>
$(function () { 

	$( "#datepicker" ).datepicker();
	$( "#startdatepicker" ).datepicker({
  onSelect: function(dateText) {
	$("#startdate_value").val(dateText);
  }
});

$( "#enddatepicker" ).datepicker({
  onSelect: function(dateText) {
	$("#enddate_value").val(dateText);
  }
});

<?php if (!empty($editdata['startdate_value'])){
$start_date=explode('/',$editdata['startdate_value']);
$start_date_array['year']=$start_date[2];
$start_date_array['day']=$start_date[1];
$start_date_array['month']=$start_date[0];
$start_date=''.$start_date_array['month'].'/'.$start_date_array['day'].'/'.$start_date_array['year'].'';
?>
$('#startdatepicker').datepicker("setDate", "<?php echo $start_date; ?>");
$("#startdate_value").val('<?php echo $start_date; ?>');
<?php } ?>

<?php if (!empty($editdata['enddate_value'])){
$end_date=explode('/',$editdata['enddate_value']);
$end_date_array['year']=$end_date[2];
$end_date_array['day']=$end_date[1];
$end_date_array['month']=$end_date[0];
$end_date=''.$end_date_array['month'].'/'.$end_date_array['day'].'/'.$end_date_array['year'].'';
?>
$('#enddatepicker').datepicker("setDate", "<?php echo $end_date; ?>");
$("#enddate_value").val('<?php echo $end_date; ?>');
<?php } ?>
});

</script>
<script>
<?php if (isset($editdata['creative_type']) && $editdata['creative_type']==2){ 
echo "creative_type('external');";
} else if (isset($editdata['creative_type']) && $editdata['creative_type']==3){ 
echo "creative_type('html');";
} else {
echo "creative_type('upload');";
}

if (isset($editdata['campaign_type']) && $editdata['campaign_type']=='network'){
echo "network_campaign('on');";
}
else {
echo "network_campaign('off');";
}

if (isset($editdata['geo_targeting']) && $editdata['geo_targeting']==2){
echo "geo_targeting('on');";
}
else {
echo "geo_targeting('off');";
}

if (isset($editdata['device_targeting']) && $editdata['device_targeting']==2){
echo "device_targeting('on');";
}
else {
echo "device_targeting('off');";
}

if (isset($editdata['publication_targeting']) && $editdata['publication_targeting']==2){
echo "publication_targeting('on');";
}
else {
echo "publication_targeting('off');";
}

if (isset($editdata['channel_targeting']) && $editdata['channel_targeting']==2){
echo "channel_targeting('on');";
}
else {
echo "channel_targeting('off');";
}


if (isset($editdata['start_date_type']) && $editdata['start_date_type']==2){
echo "startdate('on');";
}
else {
echo "startdate('off');";
}

if (isset($editdata['end_date_type']) && $editdata['end_date_type']==2){
echo "enddate('on');";
}
else {
echo "enddate('off');";
}


?>
if (document.forms["crudcampaign"].elements["creative_format"].value!='10'){hideadiv('widthzonediv'); hideadiv('heightzonediv');} else {showadiv('widthzonediv'); showadiv('heightzonediv');}
</script>
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->
<?php
global $jsload; $jsload=1; require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>