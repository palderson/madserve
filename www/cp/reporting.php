<?php
global $current_section;
$current_section='reporting';
$report_active=0;


require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';


if (!check_permission('campaign_reporting', $user_detail['user_id'])){
exit;
}

global $report_type;
$report_type=$_GET['type'];

switch($report_type){
case 'campaign':
if (!check_permission_simple('own_campaign_reporting', $user_detail['user_id']) && !check_permission_simple('campaign_reporting', $user_detail['user_id'])){
exit;	
}
$report_name='Campaign Reporting';
$report_name_active='Campaign Report:';
break;	

case 'publication':
if (!check_permission_simple('publication_reporting', $user_detail['user_id'])){
exit;	
}
$report_name='Publication Reporting';
$report_name_active='Publication Report:';
break;	

case 'network':
if (!check_permission_simple('network_reporting', $user_detail['user_id'])){
exit;	
}
$report_name='Network Reporting';
$report_name_active='Network Report:';
break;	
}

if (isset($_POST['startreport'])){

if (check_reporting_post($_POST)){
$report_active=1;
}
else {
$report_active=0;
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
			<h1 <?php if ($report_active==1){?> style="top: 26px;"<?php } ?>><?php if ($report_active!=1){ echo $report_name; } else {echo $report_name_active . ' ' . get_report_name($_POST);} ?></h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
			
           <?php if (isset($errormessage)){ ?>
            <div class="box plain"><div class="notify notify-error"><h3>Error</h3><p><?php echo $errormessage; ?></p></div> <!-- .notify --></div>
            <?php } ?>
            
                    
					
				<?php if ($report_active!=1){ require_once MAD_PATH . '/www/cp/templates/forms/crud.reporting.tpl.php'; } else {
				 require_once MAD_PATH . '/www/cp/templates/forms/show.report.tpl.php';
				}
				
				?>	
                <script src='assets/javascripts/all.js'></script>
                    
                    
                   
				</div> <!-- .grid -->
               			<?php if ($report_active!=1){ ?>
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
<?php
if (isset ($editdata['reporting_date']) && $editdata['reporting_date']=='custom'){
echo "dateselect('on');";
}
else {
echo "dateselect('off');";
}
?>
</script>
<?php } ?>
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->
<?php
global $jsload; $jsload=1; require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>