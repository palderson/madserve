<?php
error_reporting(0);
global $edited;
global $updated;
if (!isset($mad_install_active)){$mad_install_active=0;}
/*Main Functions*/
global $today_day; $today_day = date('d', mktime(0, 0, 0, date("m") , date("d") , date("Y")));
global $today_month; $today_month = date('m', mktime(0, 0, 0, date("m") , date("d") , date("Y")));
global $today_year; $today_year = date('Y', mktime(0, 0, 0, date("m") , date("d") , date("Y")));


function getconfig_var($config_id){
global $maindb;
$config_result=mysql_query("select * from md_configuration where var_name='$config_id'", $maindb);
$config_detail=mysql_fetch_array($config_result);
return $config_detail['var_value'];
}

function quick_publication_report(){
global $maindb;
global $today_day;
global $today_month;
global $today_year;

if (!MAD_connect_repdb()){
echo "Could not connect to reporting database. Exiting."; exit;	
}
else {
global $repdb;	
}

$x=0;
echo'	<div class="widget widget-table"><div class="widget-header"><span class="icon-list"></span><h3 class="icon chart">Publication Statistics - Today</h3></div><div class="widget-content"><table class="table table-bordered table-striped"><thead><tr><th width="17%">Publication</th><th width="16%">Requests</th><th width="17%">Impressions</th><th width="15%">Clicks</th><th width="19%">CTR</th><th width="16%">Fill Rate</th></tr></thead><tbody>';	
$glistres=mysql_query("SELECT SUM(total_requests) AS total_requests, SUM(total_impressions) AS total_impressions, SUM(total_clicks) AS total_clicks, publication_id FROM md_reporting WHERE day='$today_day' AND publication_id!='' AND month='$today_month' AND year='$today_year' GROUP BY publication_id", $repdb);
while($reportingdet_detail=mysql_fetch_array($glistres)){
if ($x==0){$class="odd gradeA";} if ($x==1){$class="even gradeA";}
$detail['fillrate']=@($reportingdet_detail['total_impressions']/$reportingdet_detail['total_requests'])*100;
$detail['fillrate']=number_format($detail['fillrate'], 2);
$detail['ctr']=@($reportingdet_detail['total_clicks']/$reportingdet_detail['total_impressions'])*100;
$detail['ctr']=number_format($detail['ctr'], 2);
$publication_result=mysql_query("select * from md_publications where inv_id='$reportingdet_detail[publication_id]'", $maindb);
$publication_detail=mysql_fetch_array($publication_result);
echo '<tr class="'.$class.'"><td>'.$publication_detail['inv_name'].'</td><td>'.$reportingdet_detail['total_requests'].'</td><td>'.$reportingdet_detail['total_impressions'].'</td><td class="center">'.$reportingdet_detail['total_clicks'].'</td><td class="center">'.$detail['ctr'].'%</td><td class="center">'.$detail['fillrate'].'%</td></tr>';
$x++; if ($x==2){$x=0;}
}			              	
echo '</tbody></table></div><!-- .widget-content --></div><!-- .widget -->';
}

function get_reporting_data($type, $day, $month, $year, $detail){
global $maindb;
$detailquery='';

if (!MAD_connect_repdb()){
echo "Could not connect to reporting database. Exiting."; exit;	
}
else {
global $repdb;	
}

if ($type=="publisher"){
	
if (is_numeric($detail) && $detail>0){
$detailquery=" AND publication_id='".$detail."' ";
}

if (is_numeric($day) && $day>0){
$dayquery=" AND day='".$day."' ";
}

if (is_numeric($month) && $month>0){
$monthquery=" AND month='".$month."' ";
}

if (is_numeric($year) && $year>0){
$yearquery=" AND year='".$year."' ";
}

	
$result_repselect=mysql_query("SELECT SUM(total_requests) AS total_requests, SUM(total_impressions) AS total_impressions, SUM(total_clicks) AS total_clicks FROM md_reporting WHERE entry_id>0".$detailquery."".$dayquery."".$monthquery."".$yearquery."", $repdb);
$report_detail=mysql_fetch_array($result_repselect);

$report_detail['ctr']=@($report_detail['total_clicks']/$report_detail['total_impressions'])*100;
$report_detail['ctr']=number_format($report_detail['ctr'], 2);


return $report_detail;
}
	
}


function graph_report_widget($location, $type, $duration){
echo '<div class="widget">';
echo '<div class="widget-header">';
echo '<span class="icon-chart"></span>';
echo '<h3 class="icon chart">Quick Statistics - Last 7 Days</h3>';
echo '</div>';
echo '<div class="widget-content">';
echo '<table class="stats" data-chart-type="line" data-chart-colors="">';
echo '<thead>';
echo '<tr>';
echo '<td>&nbsp;</td>';
echo '<th>'; echo date('d/M/Y', mktime(0, 0, 0, date("m") , date("d")-6 , date("Y"))); echo '</th>';
echo '<th>'; echo date('d/M/Y', mktime(0, 0, 0, date("m") , date("d")-5 , date("Y"))); echo '</th>';
echo '<th>'; echo date('d/M/Y', mktime(0, 0, 0, date("m") , date("d")-4 , date("Y"))); echo '</th>';
echo '<th>'; echo date('d/M/Y', mktime(0, 0, 0, date("m") , date("d")-3 , date("Y"))); echo '</th>';
echo '<th>'; echo date('d/M/Y', mktime(0, 0, 0, date("m") , date("d")-2 , date("Y"))); echo '</th>';
echo '<th>Yesterday</th>';
echo '<th>Today</th>';
echo '</tr>';
echo '</thead>';

$data_m6=get_reporting_data("publisher", date('d', mktime(0, 0, 0, date("m") , date("d")-6 , date("Y"))), date('m', mktime(0, 0, 0, date("m") , date("d")-6 , date("Y"))), date('Y', mktime(0, 0, 0, date("m") , date("d")-6 , date("Y"))), '');
$data_m5=get_reporting_data("publisher", date('d', mktime(0, 0, 0, date("m") , date("d")-5 , date("Y"))), date('m', mktime(0, 0, 0, date("m") , date("d")-5 , date("Y"))), date('Y', mktime(0, 0, 0, date("m") , date("d")-5 , date("Y"))), '');
$data_m4=get_reporting_data("publisher", date('d', mktime(0, 0, 0, date("m") , date("d")-4 , date("Y"))), date('m', mktime(0, 0, 0, date("m") , date("d")-4 , date("Y"))), date('Y', mktime(0, 0, 0, date("m") , date("d")-4 , date("Y"))), '');
$data_m3=get_reporting_data("publisher", date('d', mktime(0, 0, 0, date("m") , date("d")-3 , date("Y"))), date('m', mktime(0, 0, 0, date("m") , date("d")-3 , date("Y"))), date('Y', mktime(0, 0, 0, date("m") , date("d")-3 , date("Y"))), '');
$data_m2=get_reporting_data("publisher", date('d', mktime(0, 0, 0, date("m") , date("d")-2 , date("Y"))), date('m', mktime(0, 0, 0, date("m") , date("d")-2 , date("Y"))), date('Y', mktime(0, 0, 0, date("m") , date("d")-2 , date("Y"))), '');
$data_yesterday=get_reporting_data("publisher", date('d', mktime(0, 0, 0, date("m") , date("d")-1 , date("Y"))), date('m', mktime(0, 0, 0, date("m") , date("d")-1 , date("Y"))), date('Y', mktime(0, 0, 0, date("m") , date("d")-1 , date("Y"))), '');
$data_today=get_reporting_data("publisher", date('d', mktime(0, 0, 0, date("m") , date("d") , date("Y"))), date('m', mktime(0, 0, 0, date("m") , date("d") , date("Y"))), date('Y', mktime(0, 0, 0, date("m") , date("d") , date("Y"))), '');

echo '<tbody>';
echo '<tr>';
echo '<th>Ad Requests</th>';
echo '<td>'.$data_m6['total_requests'].'</td>';
echo '<td>'.$data_m5['total_requests'].'</td>';
echo '<td>'.$data_m4['total_requests'].'</td>';
echo '<td>'.$data_m3['total_requests'].'</td>';
echo '<td>'.$data_m2['total_requests'].'</td>';
echo '<td>'.$data_yesterday['total_requests'].'</td>';
echo '<td>'.$data_today['total_requests'].'</td>';
echo '</tr>';

echo '<tr>';
echo '<th>Impressions</th>';
echo '<td>'.$data_m6['total_impressions'].'</td>';
echo '<td>'.$data_m5['total_impressions'].'</td>';
echo '<td>'.$data_m4['total_impressions'].'</td>';
echo '<td>'.$data_m3['total_impressions'].'</td>';
echo '<td>'.$data_m2['total_impressions'].'</td>';
echo '<td>'.$data_yesterday['total_impressions'].'</td>';
echo '<td>'.$data_today['total_impressions'].'</td>';
echo '</tr>';

echo '<tr>';
echo '<th>Clicks</th>';
echo '<td>'.$data_m6['total_clicks'].'</td>';
echo '<td>'.$data_m5['total_clicks'].'</td>';
echo '<td>'.$data_m4['total_clicks'].'</td>';
echo '<td>'.$data_m3['total_clicks'].'</td>';
echo '<td>'.$data_m2['total_clicks'].'</td>';
echo '<td>'.$data_yesterday['total_clicks'].'</td>';
echo '<td>'.$data_today['total_clicks'].'</td>';
echo '</tr>';


echo '</tbody>';

echo '</table>';
echo '</div> <!-- .widget-content -->';
echo '</div> <!-- .widget -->';
	
}

function check_network_configured($id){
global $maindb;
if (mysql_num_rows(mysql_query("SELECT * FROM md_network_config WHERE network_id='".$id."' AND p_1!=''", $maindb))>=1){
return true;	
}
return false;
}

function check_setup($type){
global $maindb;

switch ($type){
case 'networks':
if (mysql_num_rows(mysql_query("SELECT * FROM md_network_config WHERE network_id!='MOBFOX' AND p_1!=''", $maindb))>=1){
return true;	
}
break;	

case 'publication':
if (mysql_num_rows(mysql_query("SELECT * FROM md_publications", $maindb))>=1){
return true;	
}
break;	

case 'campaign':
if (mysql_num_rows(mysql_query("SELECT * FROM md_campaigns", $maindb))>=1){
return true;	
}
break;	
	
}

return false;	
}

function get_setup_percentage(){
$p=10;	

if (check_cron_active()){
$p = $p + 30;	
}

if (check_setup('networks')){
$p = $p + 20;	
}

if (check_setup('publication')){
$p = $p + 20;	
}

if (check_setup('campaign')){
$p = $p + 20;	
}

return $p;
}

function check_cron_active(){
$last_cron=getconfig_var('last_cron_job');
if (!is_numeric($last_cron)){
return false;	
}

$dif=time()-$last_cron;

if ($dif>86500){
	return false;
}
return true;
}

function show_notifications(){
	
if (!extension_loaded("SimpleXML")){
echo '<div class="box plain">';
echo '<div class="notify">';
echo '<a href="javascript:;" class="close">&times;</a>';
echo '<h3>SimpleXML Not Loaded</h3>';
echo '<p>mAdserve has detected that the SimpleXML PHP Module is not installed on this machine. mAdserve will not work properly if you do not install this module. For more information on SimpleXML, <a href="http://php.net/manual/book.simplexml.php">click here</a>.</strong></p>';
echo '</div> <!-- .notify -->';
echo '</div>';
}

if (!check_cron_active()){
echo '<div class="box plain">';
echo '<div class="notify">';
echo '<a href="javascript:;" class="close">&times;</a>';
echo '<h3>Cron Job Not Installed</h3>';
echo '<p>mAdserve has detected that the required daily cron-job has not not been installed yet. Please note that you will not be able to add impression caps to your campaigns until you install the cron job. For more information on how to activate the cron job, <a href="http://help.madserve.org/cron.php" target="_blank">click here</a>. <strong>Please note that once you intall the cron job, it will take up to 24 hours for this message to disappear.</strong></p>';
echo '</div> <!-- .notify -->';
echo '</div>';
}
}

function sanitize($data){
global $maindb;

//remove spaces from the input

$data=trim($data);

//convert special characters to html entities
//most hacking inputs in XSS are HTML in nature, so converting them to special characters so that they are not harmful

//$data=htmlspecialchars($data);

//sanitize before using any MySQL database queries
//this will escape quotes in the input.

// Usage across all PHP versions
if (get_magic_quotes_gpc()) 
{
     $data = stripslashes($data);
}

$data = mysql_real_escape_string($data, $maindb);
return $data;
}

function email_exists($email, $userid){
global $maindb;
$checkuser_res=mysql_query("select * from md_uaccounts where email_address='$email'", $maindb);
$checkuser_detail=mysql_fetch_array($checkuser_res);

if ($checkuser_detail['email_address']==$email && is_numeric($userid) && $userid!=$checkuser_detail['user_id']){
return true;
}
else {
return false;	
}
	
}

function update_configvar($datafield, $newcontent){
global $maindb;
mysql_query("UPDATE md_configuration set var_value='$newcontent' where var_name='$datafield'", $maindb);
}

function do_update_data($datatype, $data, $user_id){
global $maindb;
//$data=sanitize($data);

if ($datatype=='mobfox_connect'){
	
	$data['mobfox_password']=md5($data['mobfox_password']);

 if (!mfconcheck($data['mobfox_uid'], $data['mobfox_password'], 1)){
global $errormessage;
$errormessage='Unable to update MobFox:Connect credentials. Authorization Failed, please try again.';
return false;
 }
 
update_configvar('mobfox_uid', $data['mobfox_uid']);
update_configvar('mobfox_password', $data['mobfox_password']);

$_GET['failed']=0;


 
 
return true;
}

if ($datatype=='profilesettings'){
global $maindb;

if (!isset($data['tooltip_setting'])){$data['tooltip_setting']=0;}

$data['tooltip_setting']=sanitize($data['tooltip_setting']);

mysql_query("UPDATE md_uaccounts set tooltip_setting='$data[tooltip_setting]' where user_id='$user_id'", $maindb);

return true;

}

if ($datatype=='updatesettings'){
global $maindb;

if (!isset($data['update_check'])){$data['update_check']='';}

update_configvar('update_check', $data['update_check']);

return true;

}

if ($datatype=='generalsettings'){
global $maindb;
if (!isset($data['allow_statistical_info'])){$data['allow_statistical_info']='';}


if (empty($data['adserver_name']) or empty($data['server_email'])){
global $errormessage;
$errormessage='Please enter all required fields.';
return false;
}

require_once MAD_PATH . '/modules/validation/validate.class.php';

$validate = new Validate;

if (($validate->isEmail($data['server_email'])!=true)){
global $errormessage;
$errormessage='Please enter a valid server e-mail address.';
return false;
}

update_configvar('adserver_name', $data['adserver_name']);
update_configvar('server_email', $data['server_email']);
update_configvar('allow_statistical_info', $data['allow_statistical_info']);


return true;


}

if ($datatype=='password'){
global $user_detail;
	
if (empty($data['new_password']) or empty($data['new_password_2']) or empty($data['current_password'])){
global $errormessage;
$errormessage='Please enter all required fields.';
return false;
}

if (md5($data['current_password'])!=$user_detail['pass_word']){
global $errormessage;
$errormessage='Current Password does not match.';
return false;
}

if ($data['new_password_2']!=$data['new_password']){
global $errormessage;
$errormessage='New Passwords do not match.';
return false;
}

if (strlen($data['new_password'])<5){
global $errormessage;
$errormessage='New Password needs to consist of 5 or more characters.';
return false;
}

$newpass_md5=md5($data['new_password']);
mysql_query("UPDATE md_uaccounts set pass_word='$newpass_md5' where user_id='$user_detail[user_id]'", $maindb);

global $loginsession_id;

mysql_query("UPDATE md_usessions set user_password='$newpass_md5' where session_id='$loginsession_id'", $maindb);

return true;


}

if ($datatype=='profile'){
if (empty($data['first_name']) or empty($data['last_name']) or empty($data['email_address'])){
global $errormessage;
$errormessage='Please enter all required fields.';
return false;
}

$data['email_address']=strtolower($data['email_address']);

require_once MAD_PATH . '/modules/validation/validate.class.php';

$validate = new Validate;

if (($validate->isEmail($data['email_address'])!=true)){
global $errormessage;
$errormessage='Please enter a valid e-mail address.';
return false;
}

if (email_exists($data['email_address'], $user_id)){
global $errormessage;
$errormessage='There is already an account with this e-mail address in the system. Unable to update profile.';
return false;
}

global $loginsession_id;

mysql_query("UPDATE md_usessions set user_identification='$data[email_address]' where session_id='$loginsession_id'", $maindb);

$data['first_name']=sanitize($data['first_name']);
$data['last_name']=sanitize($data['last_name']);
$data['company_name']=sanitize($data['company_name']);
$data['phone_number']=sanitize($data['phone_number']);
$data['fax_number']=sanitize($data['fax_number']);
$data['company_address']=sanitize($data['company_address']);
$data['company_city']=sanitize($data['company_city']);
$data['company_state']=sanitize($data['company_state']);
$data['company_zip']=sanitize($data['company_zip']);
$data['company_country']=sanitize($data['company_country']);
$data['tax_id']=sanitize($data['tax_id']);

mysql_query("UPDATE md_uaccounts set first_name='$data[first_name]', last_name='$data[last_name]', email_address='$data[email_address]', company_name='$data[company_name]', phone_number='$data[phone_number]', fax_number='$data[fax_number]', company_address='$data[company_address]', company_city='$data[company_city]', company_state='$data[company_state]', company_zip='$data[company_zip]', company_country='$data[company_country]', tax_id='$data[tax_id]' where user_id='$user_id'", $maindb);

return true;

}

}
function updatecurrentuserdata($user_id){
global $maindb;
global $user_detail;

$usresult=mysql_query("select * from md_uaccounts where user_id='$user_id'", $maindb);
$user_detail=mysql_fetch_array($usresult); 
}

function duration($secs) 
    { 
    if ($secs<60){
	return $secs . ' seconds';	
	}
	$minutes=round($secs/60);
	 if ($minutes<=60){
	return $minutes . ' minutes';	
	}
	$hours=round($minutes/60);
	 if ($hours<24){
	return $hours . ' hours';	
	}
	$days=round($hours/24);
	return $days . ' days';
    } 

function get_syslog($output_type, $limitcl){
global $maindb;

 if (is_numeric($limitcl)){
$limit="LIMIT $limitcl"; 
 }
 else {
$limit=''; 
 }

$syslogres=mysql_query("SELECT * FROM md_syslog ORDER BY entry_id DESC ".$limit."", $maindb);
while($log_detail=mysql_fetch_array($syslogres)){
	
$log_seconds_ago=time()-$log_detail['time_stamp'];
$time_ago=duration($log_seconds_ago);
$log_date=date('d/m/y H:i', $log_detail['time_stamp']);
	
$log_detail_res=mysql_query("select * from md_log_types where log_id='$log_detail[log_type]'", $maindb);
$log_info=mysql_fetch_array($log_detail_res);
	
	if ($output_type=='topbar'){
	echo '<a href="javascript:;" class="qnc_item">
			<div class="qnc_content">
		    <span class="qnc_title">'.$log_info['log_name'].'</span>
			<span class="qnc_preview">'.$log_info['log_desc'].'</span>
			<span class="qnc_time">'.$time_ago.' ago</span>
			</div> <!-- .qnc_content -->
			</a>';
	}
		if ($output_type=='full'){
echo '<tr class="gradeA">
								<td>#'.$log_detail['entry_id'].'</td>
								<td>'.$log_info['log_desc'].'</td>
								<td class="center">'.$log_date.'</td>
							</tr>';
		}
	
}

}
function get_userlist($display, $group){
global $maindb;	

if (is_numeric($group)){
$groupquery="where account_type='$group'";	
}
else {
$groupquery='';	
}

$usrres=mysql_query("SELECT * FROM md_uaccounts $groupquery ORDER BY user_id DESC", $maindb);
while($usr_detail=mysql_fetch_array($usrres)){
	
$usrgroupres=mysql_query("select * from md_user_groups where entry_id='$usr_detail[account_type]'", $maindb);
$user_group_detail=mysql_fetch_array($usrgroupres);

if ($usr_detail['account_status']==1){$user_act='Active';} else {$user_act='Inactive';}

if ($user_group_detail['entry_id']<1){$user_group_detail['group_name']='<em>No Group</em>'; $user_group_detail['entry_id']=0; }

echo '<tr class="gradeA">
								<td>#'.$usr_detail['user_id'].'</td>
								<td>'.$usr_detail['first_name'].' '.$usr_detail['last_name'].'</td>
								<td class="center">'.$usr_detail['email_address'].' </td>
								<td class="center">'.$user_group_detail['group_name'].' </td>
								<td class="center">'.$user_act.'</td>
								<td class="center"><span class="ticket ticket-info"><a href="edit_user.php?id='.$usr_detail['user_id'].'" style="color:#FFF; text-decoration:none;">Edit User</a></span>';
								if ($user_group_detail['entry_id']<1){
								echo '&nbsp;<span class="ticket ticket-warning"><a href="permission_management.php?type=user&id='.$usr_detail['user_id'].'" style="color:#FFF; text-decoration:none;">Edit Rights</a>';
								}
								else if ($user_group_detail['entry_id']>2) {
								echo '&nbsp;<span class="ticket ticket-warning"><a href="permission_management.php?type=group&id='.$user_group_detail['entry_id'].'" style="color:#FFF; text-decoration:none;">Edit Group Rights</a>';	
								}
								echo '</span>&nbsp;<span id="userdel'.$usr_detail['user_id'].'" class="ticket ticket-important"><a style="color:#FFF; text-decoration:none;" href="#">Delete User</a></span></td>
							</tr>	';


}

}
function get_usergroups(){
global $maindb;	

$usrres=mysql_query("select * from md_user_groups ORDER BY entry_id DESC", $maindb);
while($group_detail=mysql_fetch_array($usrres)){

$total_members=mysql_num_rows(mysql_query("SELECT * FROM md_uaccounts WHERE account_type='$group_detail[entry_id]'", $maindb));

echo '<tr class="gradeA">
								<td>'.$group_detail['entry_id'].'</td>
								<td class="center">'.$group_detail['group_name'].' </td>
								<td class="center">'.$total_members.'</td>';
								if ($group_detail['entry_id']>2){
								echo '<td class="center"><span class="ticket ticket-info"><a href="edit_group.php?id='.$group_detail['entry_id'].'" style="color:#FFF; text-decoration:none;">Edit Group</a></span>&nbsp;<span class="ticket ticket-warning"><a href="permission_management.php?type=group&id='.$group_detail['entry_id'].'" style="color:#FFF; text-decoration:none;">Edit Group Rights</a></span>&nbsp;<span id="groupdel'.$group_detail['entry_id'].'" class="ticket ticket-important"><a style="color:#FFF; text-decoration:none;" href="#">Delete Group</a></span></td>';
								} else {
																	echo '<td class="center">-</td>';

								}
								
							echo '</tr>	';
}
}

function get_creativeservers(){
global $maindb;

$usrres=mysql_query("select * from md_creative_servers ORDER BY entry_id ASC", $maindb);
while($server_detail=mysql_fetch_array($usrres)){
	
$total_creatives=mysql_num_rows(mysql_query("SELECT creativeserver_id FROM md_ad_units WHERE creativeserver_id='$server_detail[entry_id]'", $maindb));
		
if ($server_detail['entry_id']==getconfig_var('default_creative_server')){
$server_status='Default Server';
}
else {
$server_status='No';	
}

switch ($server_detail['server_type']){
case "local":
$server_type="Local";	break;
case "ftp":
$server_type="Remote FTP";
break;
	
}

echo '<tr class="gradeA">
								<td>'.$server_detail['entry_id'].'</td>
								<td class="center">'.$server_type.' </td>
								<td class="center">'.$server_detail['server_name'].' </td>
								<td class="center">'.$server_detail['remote_host'].' </td>
								<td class="center">'.$server_status.' </td>
								<td class="center">'.$total_creatives.' </td>';
								echo '<td class="center">';
								if ($server_detail['entry_id']!=getconfig_var('default_creative_server')){
								echo '<span class="ticket ticket-info"><a href="creative_servers.php?update_default=1&id='.$server_detail['entry_id'].'" style="color:#FFF; text-decoration:none;">Make Default</a></span>&nbsp;';
								}
								if ($server_detail['entry_id']>1){

								
								echo '<span class="ticket ticket-warning"><a href="edit_creative_server.php?id='.$server_detail['entry_id'].'" style="color:#FFF; text-decoration:none;">Edit Server</a></span>&nbsp;<span id="serverdel'.$server_detail['entry_id'].'" class="ticket ticket-important"><a style="color:#FFF; text-decoration:none;" href="#">Delete</a></span>';
								}
								echo '</td>';
								
								
							echo '</tr>	';
}
}


function get_publications(){
global $maindb;	
$current_timestamp=time();

$usrres=mysql_query("select * from md_publications ORDER BY inv_id DESC", $maindb);
while($publication_detail=mysql_fetch_array($usrres)){
	
$getpubtyperes=mysql_query("select * from md_publication_types where entry_id='$publication_detail[inv_type]'", $maindb);
$pub_type_detail=mysql_fetch_array($getpubtyperes);

$getpubchanneltyperes=mysql_query("select * from md_channels where channel_id='$publication_detail[inv_defaultchannel]'", $maindb);
$pub_channel_detail=mysql_fetch_array($getpubchanneltyperes);

$total_placements=mysql_num_rows(mysql_query("SELECT * FROM md_zones WHERE publication_id='$publication_detail[inv_id]'", $maindb));

if (!is_numeric($publication_detail['md_lastrequest'])){$publication_status='No Ad-Requests yet';}
else if (($current_timestamp-$publication_detail['md_lastrequest'])<MAD_PUBL_ACTIVE_CRITERIA_SECONDS){$publication_status='Active';}
else {$publication_status='Inactive';}

echo '<tr class="gradeA">
								<td>'.$publication_detail['inv_name'].'</td>
								<td class="center">'.$pub_type_detail['pub_name'].' </td>
								<td class="center">'.$pub_channel_detail['channel_name'].'</td>
								<td class="center">'.$publication_status.'</td>
								<td class="center">'.$total_placements.'</td>';
								echo '<td class="center"><span class="ticket ticket-info"><a href="edit_publication.php?id='.$publication_detail['inv_id'].'" style="color:#FFF; text-decoration:none;">Edit Publication</a></span>&nbsp;<span class="ticket ticket-warning"><a href="view_placements.php?id='.$publication_detail['inv_id'].'" style="color:#FFF; text-decoration:none;">View Placements</a></span>&nbsp;<span id="pubdel'.$publication_detail['inv_id'].'" class="ticket ticket-important"><a style="color:#FFF; text-decoration:none;" href="#">Delete</a></span></td>';
	
								
							echo '</tr>	';
}
}

function print_deletionjs($type){
global $maindb;

if ($type=='networks'){

echo "<script src='assets/javascripts/all.js'></script>

<script>";
	
//path to directory to scan
$directory = MAD_PATH. "/modules/network_modules/";
 
//get all files in specified directory
$files = glob($directory . "*");
 
//print each file name
foreach($files as $file)
{
 //check to see if the file is a folder/directory
 if(is_dir($file))
 {
	 
$network_name = str_replace(MAD_PATH. "/modules/network_modules/", '', $file);
	
echo "

$(function () {
	$('#networkdel".$network_name."').live ('click', function (e) {
		e.preventDefault ();
		$.alert ({ 
			type: 'confirm'
			, title: 'Remove Network?'
			, text: '<p>Are you sure you want to uninstall this network? All network campaigns using this network will be deleted and all network allocations removed.</p>'
			, callback: function () { window.location='network_modules.php?action=uninstall&networkid=".$network_name."'; }	
		});		
	});
	
});

";


}




}
echo "</script>";


}


if ($type=='advertisers'){

echo "<script src='assets/javascripts/all.js'></script>

<script>";
	
$usrres=mysql_query("select * from md_uaccounts", $maindb);
while($userm_det=mysql_fetch_array($usrres)){
	
echo "

$(function () {
	$('#userdel".$userm_det['user_id']."').live ('click', function (e) {
		e.preventDefault ();
		$.alert ({ 
			type: 'confirm'
			, title: 'Delete User?'
			, text: '<p>Are you sure you want to delete this user?</p>'
			, callback: function () { window.location='view_advertisers.php?delete=1&delid=".$userm_det['user_id']."'; }	
		});		
	});
	
});

";


}
echo "</script>";



}


if ($type=='users'){

echo "<script src='assets/javascripts/all.js'></script>

<script>";
	
$usrres=mysql_query("select * from md_uaccounts", $maindb);
while($userm_det=mysql_fetch_array($usrres)){
	
echo "

$(function () {
	$('#userdel".$userm_det['user_id']."').live ('click', function (e) {
		e.preventDefault ();
		$.alert ({ 
			type: 'confirm'
			, title: 'Delete User?'
			, text: '<p>Are you sure you want to delete this user?</p>'
			, callback: function () { window.location='user_management.php?delete=1&delid=".$userm_det['user_id']."'; }	
		});		
	});
	
});

";


}
echo "</script>";



}




if ($type=='cservers'){

echo "<script src='assets/javascripts/all.js'></script>

<script>";
	
$usrres=mysql_query("select * from md_creative_servers ORDER BY entry_id DESC", $maindb);
while($server_detail=mysql_fetch_array($usrres)){
	
echo "

$(function () {
	$('#serverdel".$server_detail['entry_id']."').live ('click', function (e) {
		e.preventDefault ();
		$.alert ({ 
			type: 'confirm'
			, title: 'Delete Creative Server?'
			, text: '<p>Are you sure you want to delete this creative server? All creatives using this server will be removed too.</p>'
			, callback: function () { window.location='creative_servers.php?delete=1&delid=".$server_detail['entry_id']."'; }	
		});		
	});
	
});

";


}
echo "</script>";



}


if ($type=='groups'){

echo "<script src='assets/javascripts/all.js'></script>

<script>";
	
$usrres=mysql_query("select * from md_user_groups ORDER BY entry_id DESC", $maindb);
while($group_detail=mysql_fetch_array($usrres)){
	
echo "

$(function () {
	$('#groupdel".$group_detail['entry_id']."').live ('click', function (e) {
		e.preventDefault ();
		$.alert ({ 
			type: 'confirm'
			, title: 'Delete Group?'
			, text: '<p>Are you sure you want to delete this group?</p>'
			, callback: function () { window.location='user_group_management.php?delete=1&delid=".$group_detail['entry_id']."'; }	
		});		
	});
	
});

";


}
echo "</script>";



}



if ($type=='placements'){
global $del_publ_id;

echo "<script src='assets/javascripts/all.js'></script>

<script>";
	
$usrres=mysql_query("select * from md_zones where publication_id=".$del_publ_id." ORDER BY entry_id DESC", $maindb);
while($placement_detail=mysql_fetch_array($usrres)){
	
echo "

$(function () {
	$('#placdel".$placement_detail['entry_id']."').live ('click', function (e) {
		e.preventDefault ();
		$.alert ({ 
			type: 'confirm'
			, title: 'Delete Placement?'
			, text: '<p>Are you sure you want to delete this Placement?</p>'
			, callback: function () { window.location='view_placements.php?delete=1&delid=".$placement_detail['entry_id']."&id=".$del_publ_id."'; }	
		});		
	});
	
});

";


}
echo "</script>";



}

if ($type=='publications'){

echo "<script src='assets/javascripts/all.js'></script>

<script>";
	
$usrres=mysql_query("select * from md_publications ORDER BY inv_id DESC", $maindb);
while($publication_detail=mysql_fetch_array($usrres)){
	
echo "

$(function () {
	$('#pubdel".$publication_detail['inv_id']."').live ('click', function (e) {
		e.preventDefault ();
		$.alert ({ 
			type: 'confirm'
			, title: 'Delete Publication?'
			, text: '<p>Are you sure you want to delete this Publication?</p>'
			, callback: function () { window.location='view_publications.php?delete=1&id=".$publication_detail['inv_id']."'; }	
		});		
	});
	
});

";


}
echo "</script>";

}

if ($type=='channels'){

echo "<script src='assets/javascripts/all.js'></script>

<script>";
	
$usrres=mysql_query("select * from md_channels ORDER BY channel_id ASC", $maindb);
while($channel_detail=mysql_fetch_array($usrres)){
	
echo "

$(function () {
	$('#chandel".$channel_detail['channel_id']."').live ('click', function (e) {
		e.preventDefault ();
		$.alert ({ 
			type: 'confirm'
			, title: 'Delete Channel?'
			, text: '<p>Are you sure you want to delete this Channel?</p>'
			, callback: function () { window.location='channel_management.php?delete=1&id=".$channel_detail['channel_id']."'; }	
		});		
	});
	
});

";


}
echo "</script>";

}


}

function get_publication_detail($id){
	global $maindb;
$getpubtyperes=mysql_query("select * from md_publications where inv_id='$id'", $maindb);
$pub_type_detail=mysql_fetch_array($getpubtyperes);
return $pub_type_detail;
}

function get_campaign_detail($id){
	global $maindb;
$getcampaignres=mysql_query("select * from md_campaigns where campaign_id='$id'", $maindb);
$campaign_detail=mysql_fetch_array($getcampaignres);
return $campaign_detail;
}

function get_adunit_detail($id){
	global $maindb;
$getadunitres=mysql_query("select * from md_ad_units where adv_id='$id'", $maindb);
$ad_unit_detail=mysql_fetch_array($getadunitres);
return $ad_unit_detail;
}

function get_campaign_cap_detail($id){
	global $maindb;
$getcampaignres=mysql_query("select * from md_campaign_limit where campaign_id='$id'", $maindb);
$cap_detail=mysql_fetch_array($getcampaignres);
return $cap_detail;
}


function get_permissions($type, $id){
	global $maindb;
if ($type=='group'){$query_d='group_id';}
if ($type=='user'){$query_d='user_id';}
$rightsetres=mysql_query("select * from md_user_rights where ".$query_d."='$id'", $maindb);
$right_detail=mysql_fetch_array($rightsetres);
return $right_detail;
}


function get_channel_detail($id){
	global $maindb;
$channelres=mysql_query("select * from md_channels where channel_id='$id'", $maindb);
$channel_detail=mysql_fetch_array($channelres);
return $channel_detail;
}

function load_campaign_placement_array($id){
global $maindb;
$placement_array=array();
$usrres=mysql_query("select targeting_code from md_campaign_targeting where campaign_id='$id' and targeting_type='placement'", $maindb);
while($targeting_detail=mysql_fetch_array($usrres)){
array_push($placement_array, $targeting_detail['targeting_code']);
}
return $placement_array;
}

function load_campaign_channel_array($id){
global $maindb;
$channel_array=array();
$usrres=mysql_query("select targeting_code from md_campaign_targeting where campaign_id='$id' and targeting_type='channel'", $maindb);
while($targeting_detail=mysql_fetch_array($usrres)){
array_push($channel_array, $targeting_detail['targeting_code']);
}
return $channel_array;
}


function get_creative_detail($id){
	global $maindb;
$adunitres=mysql_query("select * from md_ad_units where adv_id='$id'", $maindb);
$ad_detail=mysql_fetch_array($adunitres);
return $ad_detail;
}


function get_creativeserver_detail($id){
	global $maindb;
$getpubtyperes=mysql_query("select * from md_creative_servers where entry_id='$id'", $maindb);
$creative_server_detail=mysql_fetch_array($getpubtyperes);
return $creative_server_detail;
}


function get_zone_detail($id){
	global $maindb;
$getpubtyperes=mysql_query("select * from md_zones where entry_id='$id'", $maindb);
$pub_type_detail=mysql_fetch_array($getpubtyperes);
return $pub_type_detail;
}

function get_group_detail($id){
	global $maindb;
$groupres=mysql_query("select * from md_user_groups where entry_id='$id'", $maindb);
$group_detail=mysql_fetch_array($groupres);
return $group_detail;
}

function get_user_detail($id){
	global $maindb;
$usrdetailres=mysql_query("select * from md_uaccounts where user_id='$id'", $maindb);
$usr_det=mysql_fetch_array($usrdetailres);
return $usr_det;
}


function get_network_detail($id){
	global $maindb;
$netwres=mysql_query("select * from md_networks where entry_id='$id'", $maindb);
$network_detail=mysql_fetch_array($netwres);
return $network_detail;
}

function get_network_detail_by_id($id){
	global $maindb;
$netwres=mysql_query("select * from md_networks where network_identifier='$id'", $maindb);
$network_detail=mysql_fetch_array($netwres);
return $network_detail;
}


function get_placements($pubid){
global $maindb;	
$current_timestamp=time();

$usrres=mysql_query("select * from md_zones where publication_id='$pubid' ORDER BY entry_id DESC", $maindb);
while($zone_detail=mysql_fetch_array($usrres)){
	
if ($zone_detail['zone_type']=="banner"){$zone_type='Standard Banner'; $zone_size=''.$zone_detail['zone_width'].'x'.$zone_detail['zone_height'].'';}
if ($zone_detail['zone_type']=="interstitial"){$zone_type='Interstitial'; $zone_size='Full Page';}

if (!is_numeric($zone_detail['zone_channel'])){$zone_channel='Default'; } else {
$getpubchanneltyperes=mysql_query("select * from md_channels where channel_id='$zone_detail[zone_channel]'", $maindb);
$pub_channel_detail=mysql_fetch_array($getpubchanneltyperes);
$zone_channel=$pub_channel_detail['channel_name'];
}

if (!is_numeric($zone_detail['zone_lastrequest'])){$zone_status='No Ad-Requests';}
else if (($current_timestamp-$zone_detail['zone_lastrequest'])<MAD_PUBL_ACTIVE_CRITERIA_SECONDS){$zone_status='Active';}
else {$zone_status='Inactive';}


echo '<tr class="gradeA">
								<td>'.$zone_detail['zone_name'].'</td>
								<td class="center">'.$zone_type.'</td>
								<td class="center">'.$zone_channel.'</td>
								<td class="center">'.$zone_size.'</td>
								<td class="center">'.$zone_status.'</td>';
								echo '<td class="center"><span class="ticket ticket-info"><a href="edit_zone.php?id='.$zone_detail['entry_id'].'" style="color:#FFF; text-decoration:none;">Edit Placement</a></span>&nbsp;<span class="ticket ticket-warning"><a href="integration.php?zone='.$zone_detail['entry_id'].'&publication='.$zone_detail['publication_id'].'" style="color:#FFF; text-decoration:none;">Integration</a></span>&nbsp;<span id="placdel'.$zone_detail['entry_id'].'" class="ticket ticket-important"><a style="color:#FFF; text-decoration:none;" href="#">Delete</a></span></td>';
	
								
							echo '</tr>	';


}
	
}
function delete_placements($placement_id, $publication_id){
if (is_numeric($placement_id) && is_numeric($publication_id)){
return false;	
}

global $maindb;

if (is_numeric($placement_id)){
mysql_query("DELETE from md_zones where entry_id='$placement_id'", $maindb);
}


if (is_numeric($publication_id)){
mysql_query("DELETE from md_zones where publication_id='$publication_id'", $maindb);
}


}

function delete_publication($id){
	global $maindb;
mysql_query("DELETE from md_publications where inv_id='$id'", $maindb);
delete_placements('', $id);
}

function delete_channel($id){
	global $maindb;
mysql_query("DELETE from md_channels where channel_id='$id'", $maindb);
}

function get_channellist(){
global $maindb;	

$usrres=mysql_query("select * from md_channels ORDER BY channel_id ASC", $maindb);
while($channel_detail=mysql_fetch_array($usrres)){

$total_pubs=mysql_num_rows(mysql_query("SELECT * FROM md_publications WHERE inv_defaultchannel='$channel_detail[channel_id]'", $maindb));

$total_zones=mysql_num_rows(mysql_query("SELECT * FROM md_zones WHERE zone_channel='$channel_detail[channel_id]'", $maindb));


echo '<tr class="gradeA">
								<td>'.$channel_detail['channel_id'].'</td>
								<td class="center">'.$channel_detail['channel_name'].'</td>
								<td class="center">'.$total_pubs.'</td>
								<td class="center">'.$total_zones.'</td>
								<td class="center"><span class="ticket ticket-info"><a href="edit_channel.php?id='.$channel_detail['channel_id'].'" style="color:#FFF; text-decoration:none;">Edit Channel</a></span>&nbsp;<span id="chandel'.$channel_detail['channel_id'].'" class="ticket ticket-important"><a style="color:#FFF; text-decoration:none;" href="#">Delete</a></span></td>
	</tr>	';


}
}

function get_campaign_dropdown($selected){
global $maindb;	

global $user_detail;

if (!check_permission_simple('campaign_reporting', $user_detail['user_id'])){
$lq="WHERE campaign_owner='".$user_detail['user_id']."'";
}
else {
$lq='';	
}


$usrres=mysql_query("select * from md_campaigns ".$lq." ORDER BY campaign_id ASC", $maindb);
while($campaign_detail=mysql_fetch_array($usrres)){
$selected_html='';	
if (is_numeric($selected) && $selected==$campaign_detail['campaign_id']){
$selected_html='selected="selected"';
}
echo '<option '.$selected_html.' value="'.$campaign_detail['campaign_id'].'">'.$campaign_detail['campaign_name'].'</option>';
}


}


function get_channel_dropdown($selected){
global $maindb;	


$usrres=mysql_query("select * from md_channels ORDER BY channel_id ASC", $maindb);
while($channel_detail=mysql_fetch_array($usrres)){
$selected_html='';	
if (is_numeric($selected) && $selected==$channel_detail['channel_id']){
$selected_html='selected="selected"';
}
echo '<option '.$selected_html.' value="'.$channel_detail['channel_id'].'">'.$channel_detail['channel_name'].'</option>';
}


}

function get_group_dropdown($selected){
global $maindb;	


$usrres=mysql_query("select * from md_user_groups ORDER BY entry_id ASC", $maindb);
while($group_detail=mysql_fetch_array($usrres)){
$selected_html='';	
if (is_numeric($selected) && $selected==$group_detail['entry_id']){
$selected_html='selected="selected"';
}
echo '<option '.$selected_html.' value="'.$group_detail['entry_id'].'">'.$group_detail['group_name'].'</option>';
}


}


function get_pubtype_dropdown($selected){
global $maindb;	

echo "<option value=''>- Select Publication Type -</option>";

$usrres=mysql_query("select * from md_publication_types ORDER BY entry_id ASC", $maindb);
while($pubtype_detail=mysql_fetch_array($usrres)){
$selected_html='';
if (is_numeric($selected) && $selected==$pubtype_detail['entry_id']){
$selected_html='selected="selected"';	
}
echo '<option '.$selected_html.' value="'.$pubtype_detail['entry_id'].'">'.$pubtype_detail['pub_name'].'</option>';
}


}

function get_network_dropdown($selected){
global $maindb;	

echo "<option value=''>- Select Ad Network -</option>";

$usrres=mysql_query("select * from md_networks ORDER BY network_name ASC", $maindb);
while($network_detail=mysql_fetch_array($usrres)){
$selected_html='';
if (check_network_configured($network_detail['network_identifier'])){
$network_status_text='';	
}
else {
$network_status_text='(Not Configured)';		
}
if (is_numeric($selected) && $selected==$network_detail['entry_id']){
$selected_html='selected="selected"';	
}
echo '<option '.$selected_html.' value="'.$network_detail['entry_id'].'">'.$network_detail['network_name'].' '.$network_status_text.'</option>';
}


}

function get_network_dropdown_report($selected){
global $maindb;	

$usrres=mysql_query("select * from md_networks ORDER BY network_name ASC", $maindb);
while($network_detail=mysql_fetch_array($usrres)){
$selected_html='';
if (is_numeric($selected) && $selected==$network_detail['entry_id']){
$selected_html='selected="selected"';	
}
echo '<option '.$selected_html.' value="'.$network_detail['entry_id'].'">'.$network_detail['network_name'].'</option>';
}


}


function get_publication_dropdown($selected){
global $maindb;	

echo "<option value=''>- Select Publication -</option>";

$usrres=mysql_query("select * from md_publications ORDER BY inv_id DESC", $maindb);
while($publication_detail=mysql_fetch_array($usrres)){
$selected_html='';
if (is_numeric($selected) && $selected==$publication_detail['inv_id']){
$selected_html='selected="selected"';	
}
echo '<option '.$selected_html.' value="'.$publication_detail['inv_id'].'">'.$publication_detail['inv_name'].'</option>';
}


}

function get_publication_dropdown_report($selected){
global $maindb;	

$usrres=mysql_query("select * from md_publications ORDER BY inv_name ASC", $maindb);
while($publication_detail=mysql_fetch_array($usrres)){
$selected_html='';
if (is_numeric($selected) && $selected==$publication_detail['inv_id']){
$selected_html='selected="selected"';	
}
echo '<option '.$selected_html.' value="'.$publication_detail['inv_id'].'">'.$publication_detail['inv_name'].'</option>';
}


}

function get_priority_dropdown($selected){
global $maindb;	


$usrres=mysql_query("select * from md_campaign_priorities ORDER BY priority_id ASC", $maindb);
while($priority_detail=mysql_fetch_array($usrres)){
$selected_html='';
if (is_numeric($selected) && $selected==$priority_detail['priority_id']){
$selected_html='selected="selected"';	
}
echo '<option '.$selected_html.' value="'.$priority_detail['priority_id'].'">'.$priority_detail['priority_name'].'</option>';
}


}


function get_placement_integration_dropdown($zoneid, $publicationid){

global $maindb;	

if (!is_numeric($publicationid) && !is_numeric($zoneid)){
echo "<option value=''>- Select Publication Above -</option>";
}

else {
echo "<option value=''>- Select Placement  -</option>";
}

if (is_numeric($publicationid)){
$usrres=mysql_query("select * from md_zones where publication_id='".$publicationid."' ORDER BY entry_id ASC", $maindb);
while($zone_detail=mysql_fetch_array($usrres)){
$selected_html='';
if (is_numeric($zoneid) && $zoneid==$zone_detail['entry_id']){
$selected_html='selected="selected"';	
}
echo '<option '.$selected_html.' value="'.$zone_detail['entry_id'].'">'.$zone_detail['zone_name'].'</option>';
}
}


}

function do_edit($type, $data, $detail){
	global $maindb;
	
	if ($type=='runninglimit'){
	if (!isset($detail) or !is_numeric($detail)){
	global $errormessage;
$errormessage='Invalid Campaign ID.';
global $editdata;
$editdata=$data;
return false;	
	}
	
	if (!isset($data['new_limit']) or !is_numeric($data['new_limit'])){
		global $errormessage;
$errormessage='Invalid Limit entered.';
global $editdata;
$editdata=$data;
return false;		
	}

mysql_query("UPDATE md_campaign_limit set total_amount_left='$data[new_limit]' where campaign_id='$detail'", $maindb);
return true;

	}
	
	if ($type=='adunit'){
		
		global $maindb;
		
		$current_unit_detail=get_adunit_detail($detail);
		
		
		if (empty($data['adv_name']) or (!is_numeric($data['custom_creative_width']) or !is_numeric($data['custom_creative_height']))){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['creative_type']==3){

if (empty($data['html_body'])){
global $errormessage;
$errormessage='Please enter a HTML body for your ad.';
global $editdata;
$editdata=$data;
return false;	
}

	
}

if ($data['creative_type']==2){

if (empty($data['creative_url']) or empty($data['click_url'])){
global $errormessage;
$errormessage='Please enter a Creative URL and Click URL for your ad.';
global $editdata;
$editdata=$data;
return false;	
}


	
}

if ($data['creative_type']==1){

if (empty($data['click_url'])){
global $errormessage;
$errormessage='Please enter a Click URL for your ad.';
global $editdata;
$editdata=$data;
return false;	
}

if(!file_exists($_FILES['creative_file']['tmp_name']) || !is_uploaded_file($_FILES['creative_file']['tmp_name'])) {
$no_creative=1;

if ($current_unit_detail['adv_type']!=1){
global $errormessage;
$errormessage='Please upload a creative for your ad.';
global $editdata;
$editdata=$data;
return false;	
}

}
else {
$no_creative=0;	
}
	
}


// IF CREATIVE TYPE =1, ATTEMPT TO UPLOAD CREATIVE
if ($data['creative_type']==1 && $no_creative!=1){
	
$creative_server=getconfig_var('default_creative_server');
	
// Generate Creative Hash
$uniqid = uniqid(time());
$creative_hash=md5($uniqid);

$file_extension=strtolower(substr(strrchr($_FILES['creative_file']['name'], "."), 1)); 


// Case: Remote Creative Server (FTP)
if (getconfig_var('default_creative_server')>1){
	
list($width, $height, $type, $attr)= getimagesize($_FILES['creative_file']['tmp_name']);

if ($height!=$data['custom_creative_height'] or $width!=$data['custom_creative_width'] or empty($file_extension)){
global $errormessage;
$errormessage='The image you uploaded does not appear to be in the right dimensions. Please upload a valid image sized '.$data['custom_creative_width'].'x'.$data['custom_creative_height'].'';
global $editdata;
$editdata=$data;
return false;
}
	
$creative_server_detail = get_creativeserver_detail(getconfig_var('default_creative_server'));

if ($creative_server_detail['entry_id']<1){
global $errormessage;
$errormessage='The default creative server does not seem to exist. Please change your creative server in your mAdserve control panel under Configuration>Creative Servers';
global $editdata;
$editdata=$data;
return false;
}

// Attempt: Upload
include MAD_PATH . '/modules/ftp/ftp.class.php';

try {
    $ftp = new Ftp;
    $ftp->connect($creative_server_detail['remote_host']);
    $ftp->login($creative_server_detail['remote_user'], $creative_server_detail['remote_password']); 
    $ftp->put($creative_server_detail['remote_directory'] . $creative_hash . '.' . $file_extension , $_FILES['creative_file']['tmp_name'], FTP_BINARY);

} catch (FtpException $e) {
global $errormessage;
$errormessage='FTP Client was unable to upload creative to remote server. Error given: '.$e->getMessage().'';
global $editdata;
$editdata=$data;
return false;
}

// End: Upload

}
// End Case: Remote Creative Server (FTP)

// Case: Local Creative Server
if (getconfig_var('default_creative_server')==1){
	

include MAD_PATH . '/modules/upload/class.upload.php';


$handle = new Upload($_FILES['creative_file']);
$handle->allowed = array('image/*');
$handle->file_new_name_body = $creative_hash;

 if ($handle->uploaded) {
	 	 
$image_width = $handle->image_src_x;
$image_height = $handle->image_src_y;

if ((!empty($image_width) && !empty($image_height)) && ($image_height!=$data['custom_creative_height'] or $image_width!=$data['custom_creative_width'])){
global $errormessage;
$errormessage='The image you uploaded does not appear to be in the right dimensions. Please upload an image sized '.$data['custom_creative_width'].'x'.$data['custom_creative_height'].'';
global $editdata;
$editdata=$data;
return false;
}
	

$handle->Process(MAD_PATH . MAD_CREATIVE_DIR);


 if ($handle->processed) {
// OK 
 }
 else {
global $errormessage;
$errormessage='Creative could not be uploaded. Please check if your creative directory is writeable ('.MAD_CREATIVE_DIR.') and that you have uploaded a valid image file.';
global $editdata;
$editdata=$data;
return false;
 }
 
 } else {
	 // Not OK

global $errormessage;
$errormessage='Creative could not be uploaded. Please check if your creative directory is writeable ('.MAD_CREATIVE_DIR.') and that you have uploaded a valid image file.';
global $editdata;
$editdata=$data;
return false;
	 
 }
 
}
 // End Case: Local Creative Sercer 
 

mysql_query("UPDATE md_ad_units set unit_hash='$creative_hash', adv_creative_extension='$file_extension', creativeserver_id='$creative_server' where adv_id='$detail'", $maindb);
 
}



// END CREATIVE UPLOAD

if (!isset($data['adv_mraid'])){$data['adv_mraid']='';}

$data['creative_type']=sanitize($data['creative_type']);
$data['click_url']=sanitize($data['click_url']);
$data['html_body']=sanitize($data['html_body']);
$data['creative_url']=sanitize($data['creative_url']);
$data['tracking_pixel']=sanitize($data['tracking_pixel']);
$data['adv_name']=sanitize($data['adv_name']);
$data['custom_creative_height']=sanitize($data['custom_creative_height']);
$data['custom_creative_width']=sanitize($data['custom_creative_width']);
$data['adv_mraid']=sanitize($data['adv_mraid']);

mysql_query("UPDATE md_ad_units set adv_type='$data[creative_type]', adv_click_url='$data[click_url]', adv_chtml='$data[html_body]', adv_bannerurl='$data[creative_url]', adv_impression_tracking_url='$data[tracking_pixel]', adv_name='$data[adv_name]', adv_height='$data[custom_creative_height]', adv_width='$data[custom_creative_width]', adv_mraid='$data[adv_mraid]' where adv_id='$detail'", $maindb);


return true;

		
		
	}
	
	if ($type=='campaign'){
		
if (!isset($data['as_values_1'])){$data['as_values_1']='';}
if (!isset($data['placement_select'])){$data['placement_select']='';}
if (!isset($data['channel_select'])){$data['channel_select']='';}
if (!isset($data['target_iphone'])){$data['target_iphone']='';}
if (!isset($data['target_ipod'])){$data['target_ipod']='';}
if (!isset($data['target_ipad'])){$data['target_ipad']='';}
if (!isset($data['target_android'])){$data['target_android']='';}
if (!isset($data['target_other'])){$data['target_other']='';}
		
$countries_active=0;
$separate_countries=explode(',', $data['as_values_1']);
foreach($separate_countries as $my_tag) {
if (!empty($my_tag)){
$countries_active=1;	
} }

			
			
if (!is_numeric($data['campaign_priority']) or empty($data['campaign_name'])){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}
if ($data['geo_targeting']==2 && $countries_active!=1){
global $errormessage;
$errormessage='Please select at least one country you want to target.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['publication_targeting']==2 && count($data['placement_select'])<1){
global $errormessage;
$errormessage='Please select at least one placement you want to target.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['channel_targeting']==2 && count($data['channel_select'])<1){
global $errormessage;
$errormessage='Please select at least one channel you want to target.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['device_targeting']==2 && ($data['target_iphone']!=1 && $data['target_ipod']!=1 && $data['target_ipad']!=1 && $data['target_android']!=1 && $data['target_other']!=1)){
global $errormessage;
$errormessage='Please select at least one device type you want to target.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['campaign_type']=='network' && (!is_numeric($data['campaign_networkid']))){
global $errormessage;
$errormessage='Please select an ad network to send your campaign traffic to.';
global $editdata;
$editdata=$data;
return false;	
}

if (!empty($data['total_amount']) && !is_numeric($data['total_amount'])){
global $errormessage;
$errormessage='Your daily cap needs to be a numeric value.';
global $editdata;
$editdata=$data;
return false;	
}



if ($data['start_date_type']==2 && empty($data['startdate_value'])){
global $errormessage;
$errormessage='Please choose a start date for your campaign.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['end_date_type']==2 && empty($data['enddate_value'])){
global $errormessage;
$errormessage='Please choose an end date for your campaign.';
global $editdata;
$editdata=$data;
return false;	
}


if ($data['start_date_type']==2){
$start_date=explode('/',$data['startdate_value']);
$start_date_array['year']=$start_date[2];
$start_date_array['day']=$start_date[1];
$start_date_array['month']=$start_date[0];
$start_date_array['unix']=strtotime("$start_date_array[year]-$start_date_array[month]-$start_date_array[day]");	
}

if ($data['end_date_type']==2){
$end_date=explode('/',$data['enddate_value']);
$end_date_array['year']=$end_date[2];
$end_date_array['day']=$end_date[1];
$end_date_array['month']=$end_date[0];
$end_date_array['unix']=strtotime("$end_date_array[year]-$end_date_array[month]-$end_date_array[day]");	
}

if ($data['end_date_type']==2 && $end_date_array['unix']<time()){
global $errormessage;
$errormessage='The end date you entered is in the past. Please choose an end date in the future.';
global $editdata;
$editdata=$data;
return false;	
}


$creation_timestamp=time();

/* Date Stuff */
if ($data['start_date_type']==1){
$start_date_array['year']=date("Y");
$start_date_array['day']=date("d");
$start_date_array['month']=date("m");
}

if ($data['end_date_type']==1){
$end_date_array['year']='2090';
$end_date_array['day']='12';
$end_date_array['month']='12';
}

if ($data['start_date_type']==2){
$start_date=explode('/',$data['startdate_value']);
$start_date_array['year']=$start_date[2];
$start_date_array['day']=$start_date[1];
$start_date_array['month']=$start_date[0];
$start_date_array['unix']=strtotime("$start_date_array[year]-$start_date_array[month]-$start_date_array[day]");	
}

if ($data['end_date_type']==2){
$end_date=explode('/',$data['enddate_value']);
$end_date_array['year']=$end_date[2];
$end_date_array['day']=$end_date[1];
$end_date_array['month']=$end_date[0];
$end_date_array['unix']=strtotime("$end_date_array[year]-$end_date_array[month]-$end_date_array[day]");	
}



$data['startdate_value']=''.$start_date_array['year'].'-'.$start_date_array['month'].'-'.$start_date_array['day'].'';
$data['enddate_value']=''.$end_date_array['year'].'-'.$end_date_array['month'].'-'.$end_date_array['day'].'';

if (!isset($data['target_android'])){$data['target_android']='';}
if (!isset($data['target_other'])){$data['target_other']='';}
if (!isset($data['target_ipad'])){$data['target_ipad']='';}
if (!isset($data['target_iphone'])){$data['target_iphone']='';}
if (!isset($data['target_ipod'])){$data['target_ipod']='';}

$data['campaign_type']=sanitize($data['campaign_type']);
$data['campaign_name']=sanitize($data['campaign_name']);
$data['campaign_desc']=sanitize($data['campaign_desc']);
$data['startdate_value']=sanitize($data['startdate_value']);
$data['enddate_value']=sanitize($data['enddate_value']);
$data['campaign_networkid']=sanitize($data['campaign_networkid']);
$data['campaign_priority']=sanitize($data['campaign_priority']);
$data['target_iphone']=sanitize($data['target_iphone']);
$data['target_ipod']=sanitize($data['target_ipod']);
$data['target_ipad']=sanitize($data['target_ipad']);
$data['target_android']=sanitize($data['target_android']);
$data['target_other']=sanitize($data['target_other']);
$data['ios_version_min']=sanitize($data['ios_version_min']);
$data['ios_version_max']=sanitize($data['ios_version_max']);
$data['android_version_min']=sanitize($data['android_version_min']);
$data['android_version_max']=sanitize($data['android_version_max']);
$data['geo_targeting']=sanitize($data['geo_targeting']);
$data['publication_targeting']=sanitize($data['publication_targeting']);
$data['channel_targeting']=sanitize($data['channel_targeting']);
$data['device_targeting']=sanitize($data['device_targeting']);


global $maindb;

mysql_query("UPDATE md_campaigns set campaign_type='$data[campaign_type]', campaign_name='$data[campaign_name]', campaign_desc='$data[campaign_desc]', campaign_start='$data[startdate_value]', campaign_end='$data[enddate_value]', campaign_networkid='$data[campaign_networkid]', campaign_priority='$data[campaign_priority]', target_iphone='$data[target_iphone]', target_ipod='$data[target_ipod]', target_ipad='$data[target_ipad]', target_android='$data[target_android]', target_other='$data[target_other]', ios_version_min='$data[ios_version_min]', ios_version_max='$data[ios_version_max]', android_version_min='$data[android_version_min]', android_version_max='$data[android_version_max]', country_target='$data[geo_targeting]', publication_target='$data[publication_targeting]', channel_target='$data[channel_targeting]', device_target='$data[device_targeting]' where campaign_id='$detail'", $maindb);

reset_campaign_targeting($detail);

// Extra Targeting Variables

// Country
if ($data['geo_targeting']==2){
$separate_countries=explode(',', $data['as_values_1']);
foreach($separate_countries as $country_tag) {
if (!empty($country_tag)){
// Add Country
add_campaign_targeting($detail, 'geo', $country_tag);
} }
}
//End Country

// Channel
if ($data['channel_targeting']==2 && is_array($data['channel_select'])){
foreach($data['channel_select'] as $channel_id){
add_campaign_targeting($detail, 'channel', $channel_id);
}

}
// End Channel

// Placement
if ($data['publication_targeting']==2 && is_array($data['placement_select'])){
foreach($data['placement_select'] as $placement_id){
add_campaign_targeting($detail, 'placement', $placement_id);
}

}
// End Placement

// End: Extra Targeting Variables

mysql_query("UPDATE md_campaign_limit set cap_type='$data[cap_type]', total_amount='$data[total_amount]', total_amount_left='$data[total_amount]' where campaign_id='$detail'", $maindb);


return true;


		}
	
	if ($type=='user'){
		
	global $user_detail;
		
if (!check_permission('add_administrator', $user_detail['user_id']) && $data['account_type']!=2){
global $errormessage;
$errormessage='You are not permitted to a group other than the Advertiser group.';
global $editdata;
$editdata=$data;
return false;
}
	

if (empty($data['first_name']) or empty($data['last_name']) or empty($data['email_address'])){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;
}

if (!empty($data['new_password']) && $data['new_password_2']!=$data['new_password']){
global $errormessage;
$errormessage='The passwords you entered do not match.';
global $editdata;
$editdata=$data;
return false;
}

$data['email_address']=strtolower($data['email_address']);

$data['first_name']=sanitize($data['first_name']);
$data['last_name']=sanitize($data['last_name']);
$data['company_name']=sanitize($data['company_name']);
$data['phone_number']=sanitize($data['phone_number']);
$data['fax_number']=sanitize($data['fax_number']);
$data['company_address']=sanitize($data['company_address']);
$data['company_city']=sanitize($data['company_city']);
$data['company_state']=sanitize($data['company_state']);
$data['company_zip']=sanitize($data['company_zip']);
$data['company_country']=sanitize($data['company_country']);
$data['tax_id']=sanitize($data['tax_id']);


mysql_query("UPDATE md_uaccounts set first_name='$data[first_name]', last_name='$data[last_name]', email_address='$data[email_address]', account_type='$data[account_type]', company_name='$data[company_name]', phone_number='$data[phone_number]', fax_number='$data[fax_number]', company_address='$data[company_address]', company_city='$data[company_city]', company_state='$data[company_state]', company_zip='$data[company_zip]', company_country='$data[company_country]', tax_id='$data[tax_id]' where user_id='$detail'", $maindb);

if (!empty($data['new_password'])){

$data['password_md5']=md5($data['new_password']);

mysql_query("UPDATE md_uaccounts set pass_word='$data[password_md5]' where user_id='$detail'", $maindb);

}

return true;

	}
	
	if ($type=='group'){
	if (empty($data['group_name'])){
global $errormessage;
$errormessage='Please enter a group name.';
global $editdata;
$editdata=$data;
return false;	
}

$data['group_name']=sanitize($data['group_name']);

mysql_query("UPDATE md_user_groups set group_name='$data[group_name]' where entry_id='$detail'", $maindb);

return true;
	
	}
	
	if ($type=='channel'){
	if (empty($data['channel_name'])){
global $errormessage;
$errormessage='Please enter a channel name.';
global $editdata;
$editdata=$data;
return false;	
}

$data['channel_name']=sanitize($data['channel_name']);


mysql_query("UPDATE md_channels set channel_name='$data[channel_name]' where channel_id='$detail'", $maindb);

return true;
	
	}
	
		if ($type=='network'){
			
			if (!isset($data['network_auto_approve'])){$data['network_auto_approve']='';}
			if (!isset($data['network_aa_min'])){$data['network_aa_min']='';}
			if (!isset($data['network_aa_min_cpc'])){$data['network_aa_min_cpc']='';}
			if (!isset($data['network_aa_min_cpm'])){$data['network_aa_min_cpm']='';}
			
			$data['network_auto_approve']=sanitize($data['network_auto_approve']);
			$data['network_aa_min']=sanitize($data['network_aa_min']);
			$data['network_aa_min_cpc']=sanitize($data['network_aa_min_cpc']);
			$data['network_aa_min_cpm']=sanitize($data['network_aa_min_cpm']);




	
mysql_query("UPDATE md_networks set network_auto_approve='$data[network_auto_approve]', network_aa_min='$data[network_aa_min]', network_aa_min_cpc='$data[network_aa_min_cpc]', network_aa_min_cpm='$data[network_aa_min_cpm]' where entry_id='$detail'", $maindb);

return true;
	
	}
	
	if ($type=='creative_server'){
	if (empty($data['server_name']) or empty($data['remote_host']) or empty($data['remote_user']) or empty($data['remote_password']) or empty($data['remote_directory']) or empty($data['server_default_url'])){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}

$data['server_type']=sanitize($data['server_type']);
$data['server_name']=sanitize($data['server_name']);
$data['remote_host']=sanitize($data['remote_host']);
$data['remote_user']=sanitize($data['remote_user']);
$data['remote_password']=sanitize($data['remote_password']);
$data['remote_directory']=sanitize($data['remote_directory']);
$data['server_default_url']=sanitize($data['server_default_url']);


mysql_query("UPDATE md_creative_servers set server_name='$data[server_name]', remote_host='$data[remote_host]', remote_user='$data[remote_user]', remote_password='$data[remote_password]', server_type='$data[server_type]', remote_directory='$data[remote_directory]', server_default_url='$data[server_default_url]' where entry_id='$detail'", $maindb);

return true;
	
	}
	
		if ($type=='placement'){
			
if (!isset($data['mobfox_min_cpc_active'])){$data['mobfox_min_cpc_active']='';}
if (!isset($data['mobfox_backfill_active'])){$data['mobfox_backfill_active']='';}
			
if (!is_numeric($data['zone_refresh']) or empty($data['zone_name']) or ($data['zone_type']=='banner' && (!is_numeric($data['custom_zone_width']) or !is_numeric($data['custom_zone_height']))) or  empty($data['zone_type'])){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}


if ($data['mobfox_min_cpc_active']==1 && (!is_numeric($data['min_cpc']) or !is_numeric($data['min_cpm']) or $data['min_cpm']>5 or $data['min_cpc']>0.20)){
global $errormessage;
$errormessage='Invalid minimum CPC/CPM values entered.';
global $editdata;
$editdata=$data;
return false;	
}

$zone_detail=get_zone_detail($detail);
$publication_detail=get_publication_detail($zone_detail['publication_id']);

if ($publication_detail['inv_type']==3 && $data['zone_type']=='interstitial'){
global $errormessage;
$errormessage='Full Page Interstitials are supported only inside iOS and Android applications.';
global $editdata;
$editdata=$data;
return false;	
}

$data['zone_name']=sanitize($data['zone_name']);
$data['zone_type']=sanitize($data['zone_type']);
$data['custom_zone_width']=sanitize($data['custom_zone_width']);
$data['custom_zone_height']=sanitize($data['custom_zone_height']);
$data['zone_refresh']=sanitize($data['zone_refresh']);
$data['zone_channel']=sanitize($data['zone_channel']);
$data['zone_description']=sanitize($data['zone_description']);
$data['mobfox_backfill_active']=sanitize($data['mobfox_backfill_active']);
$data['mobfox_min_cpc_active']=sanitize($data['mobfox_min_cpc_active']);
$data['min_cpc']=sanitize($data['min_cpc']);
$data['min_cpm']=sanitize($data['min_cpm']);
$data['backfill_alt_1']=sanitize($data['backfill_alt_1']);
$data['backfill_alt_2']=sanitize($data['backfill_alt_2']);
$data['backfill_alt_3']=sanitize($data['backfill_alt_3']);


mysql_query("UPDATE md_zones set zone_name='$data[zone_name]', zone_type='$data[zone_type]', zone_width='$data[custom_zone_width]', zone_height='$data[custom_zone_height]', zone_refresh='$data[zone_refresh]', zone_channel='$data[zone_channel]', zone_description='$data[zone_description]', mobfox_backfill_active='$data[mobfox_backfill_active]', mobfox_min_cpc_active='$data[mobfox_min_cpc_active]', min_cpc='$data[min_cpc]', min_cpm='$data[min_cpm]', backfill_alt_1='$data[backfill_alt_1]', backfill_alt_2='$data[backfill_alt_2]', backfill_alt_3='$data[backfill_alt_3]' where entry_id='$detail'", $maindb);

return true;


		}
	
	if ($type=='publication'){
		
if (empty($data['inv_name']) or !is_numeric($data['inv_type']) or empty($data['inv_address']) or !is_numeric($data['inv_defaultchannel'])){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}

$data['inv_type']=sanitize($data['inv_type']);
$data['inv_name']=sanitize($data['inv_name']);
$data['inv_description']=sanitize($data['inv_description']);
$data['inv_address']=sanitize($data['inv_address']);
$data['inv_defaultchannel']=sanitize($data['inv_defaultchannel']);


mysql_query("UPDATE md_publications set inv_type='$data[inv_type]', inv_name='$data[inv_name]', inv_description='$data[inv_description]', inv_address='$data[inv_address]', inv_defaultchannel='$data[inv_defaultchannel]' where inv_id='$detail'", $maindb);

return true;

		
		
	}
	
}

function edit_permissions($type, $data, $id){
if ($type=='group'){$where_query="group_id='$id'";} else if ($type=='user'){$where_query="user_id='$id'";}

global $maindb;

$data['view_own_campaigns']=sanitize($data['view_own_campaigns']);
$data['view_all_campaigns']=sanitize($data['view_all_campaigns']);
$data['create_campaigns']=sanitize($data['create_campaigns']);
$data['view_publications']=sanitize($data['view_publications']);
$data['modify_publications']=sanitize($data['modify_publications']);
$data['view_advertisers']=sanitize($data['view_advertisers']);
$data['modify_advertisers']=sanitize($data['modify_advertisers']);
$data['ad_networks']=sanitize($data['ad_networks']);
$data['campaign_reporting']=sanitize($data['campaign_reporting']);
$data['own_campaign_reporting']=sanitize($data['own_campaign_reporting']);
$data['publication_reporting']=sanitize($data['publication_reporting']);
$data['network_reporting']=sanitize($data['network_reporting']);
$data['configuration']=sanitize($data['configuration']);
$data['traffic_requests']=sanitize($data['traffic_requests']);

mysql_query("UPDATE md_user_rights set view_own_campaigns='$data[view_own_campaigns]', view_all_campaigns='$data[view_all_campaigns]', create_campaigns='$data[create_campaigns]', view_publications='$data[view_publications]', modify_publications='$data[modify_publications]', view_advertisers='$data[view_advertisers]', modify_advertisers='$data[modify_advertisers]', ad_networks='$data[ad_networks]', campaign_reporting='$data[campaign_reporting]', own_campaign_reporting='$data[own_campaign_reporting]', publication_reporting='$data[publication_reporting]', network_reporting='$data[network_reporting]', configuration='$data[configuration]', traffic_requests='$data[traffic_requests]' where ".$where_query."", $maindb);

return true;

}

function check_if_user_has_rightset($id){
global $maindb;

$right_res=mysql_query("select * from md_user_rights where user_id='$id'", $maindb);
$rightset_detail=mysql_fetch_array($right_res);

if ($rightset_detail['entry_id']>0){
return true;
}
else {
return false;	
}	
	
}

function create_rightset($type, $id, $data){
	
global $maindb;
	
if ($type=='group'){$data['group_id']=$id;} else if ($type=='user'){
	
if (check_if_user_has_rightset($id)){
return false;	
}
	

$data['user_id']=$id;}

if (!isset($data['group_id'])){$data['group_id']='';}
if (!isset($data['user_id'])){$data['user_id']='';}
if (!isset($data['view_own_campaigns'])){$data['view_own_campaigns']='';}
if (!isset($data['view_all_campaigns'])){$data['view_all_campaigns']='';}
if (!isset($data['create_campaigns'])){$data['create_campaigns']='';}
if (!isset($data['view_publications'])){$data['view_publications']='';}
if (!isset($data['modify_publications'])){$data['modify_publications']='';}
if (!isset($data['view_advertisers'])){$data['view_advertisers']='';}
if (!isset($data['modify_advertisers'])){$data['modify_advertisers']='';}
if (!isset($data['ad_networks'])){$data['ad_networks']='';}
if (!isset($data['campaign_reporting'])){$data['campaign_reporting']='';}
if (!isset($data['own_campaign_reporting'])){$data['own_campaign_reporting']='';}
if (!isset($data['publication_reporting'])){$data['publication_reporting']='';}
if (!isset($data['network_reporting'])){$data['network_reporting']='';}
if (!isset($data['configuration'])){$data['configuration']='';}
if (!isset($data['traffic_requests'])){$data['traffic_requests']='';}

$data['group_id']=sanitize($data['group_id']);
$data['user_id']=sanitize($data['user_id']);
$data['view_own_campaigns']=sanitize($data['view_own_campaigns']);
$data['view_all_campaigns']=sanitize($data['view_all_campaigns']);
$data['create_campaigns']=sanitize($data['create_campaigns']);
$data['view_publications']=sanitize($data['view_publications']);
$data['modify_publications']=sanitize($data['modify_publications']);
$data['view_advertisers']=sanitize($data['view_advertisers']);
$data['modify_advertisers']=sanitize($data['modify_advertisers']);
$data['ad_networks']=sanitize($data['ad_networks']);
$data['campaign_reporting']=sanitize($data['campaign_reporting']);
$data['own_campaign_reporting']=sanitize($data['own_campaign_reporting']);
$data['publication_reporting']=sanitize($data['publication_reporting']);
$data['network_reporting']=sanitize($data['network_reporting']);
$data['configuration']=sanitize($data['configuration']);
$data['traffic_requests']=sanitize($data['traffic_requests']);


mysql_query("INSERT INTO md_user_rights (user_id, group_id, view_own_campaigns, view_all_campaigns, create_campaigns, view_publications, modify_publications, view_advertisers, modify_advertisers, ad_networks, campaign_reporting, own_campaign_reporting, publication_reporting, network_reporting, configuration, traffic_requests)
VALUES ('$data[user_id]', '$data[group_id]', '$data[view_own_campaigns]', '$data[view_all_campaigns]', '$data[create_campaigns]', '$data[view_publications]', '$data[modify_publications]', '$data[view_advertisers]', '$data[modify_advertisers]', '$data[ad_networks]', '$data[campaign_reporting]', '$data[own_campaign_reporting]', '$data[publication_reporting]', '$data[network_reporting]', '$data[configuration]', '$data[traffic_requests]')", $maindb);

return true;

}

function username_exists($email){
global $maindb;
$checkuser_res=mysql_query("select email_address, user_id from md_uaccounts where email_address='$email'", $maindb);
$checkuser_detail=mysql_fetch_array($checkuser_res);

if ($checkuser_detail['email_address']==$email && is_numeric($checkuser_detail['user_id'])){
return true;
}
else {
return false;	
}
}

function do_create($type, $data, $detail){
global $user_detail;
$time_now=time();

if ($type=='user'){
$data['email_address']=strtolower($data['email_address']);
	
if (!check_permission('add_administrator', $user_detail['user_id']) && $data['account_type']!=2){
global $errormessage;
$errormessage='You are not permitted to add users that are not in the Advertiser group.';
return false;
}
	
if (empty($data['first_name']) or empty($data['last_name']) or empty($data['email_address']) or empty($data['new_password']) or empty($data['new_password_2'])){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;
}

if ($data['new_password_2']!=$data['new_password']){
global $errormessage;
$errormessage='The passwords you entered do not match.';
global $editdata;
$editdata=$data;
return false;
}

if (username_exists($data['email_address'])){
global $errormessage;
$errormessage='A user with this e-mail address already exists in the system.';
global $editdata;
$editdata=$data;
return false;
}

$data['password_md5']=md5($data['new_password']);
$creation_date=time();

$data['first_name']=sanitize($data['first_name']);
$data['last_name']=sanitize($data['last_name']);
$data['company_name']=sanitize($data['company_name']);
$data['phone_number']=sanitize($data['phone_number']);
$data['fax_number']=sanitize($data['fax_number']);
$data['company_address']=sanitize($data['company_address']);
$data['company_city']=sanitize($data['company_city']);
$data['company_state']=sanitize($data['company_state']);
$data['company_zip']=sanitize($data['company_zip']);
$data['company_country']=sanitize($data['company_country']);
$data['tax_id']=sanitize($data['tax_id']);
$data['account_type']=sanitize($data['account_type']);

global $maindb;
mysql_query("INSERT INTO md_uaccounts (email_address, pass_word, account_status, account_type, company_name, first_name, last_name, phone_number, fax_number, company_address, company_city, company_state, company_zip, company_country, tax_id, creation_date)
VALUES ('$data[email_address]', '$data[password_md5]', '1', '$data[account_type]', '$data[company_name]', '$data[first_name]', '$data[last_name]', '$data[phone_number]', '$data[fax_number]', '$data[company_address]', '$data[company_city]', '$data[company_state]', '$data[company_zip]', '$data[company_country]', '$data[tax_id]', '$creation_date')", $maindb);
global $created_user_id;
$created_user_id=mysql_insert_id($maindb);


create_rightset('user', $created_user_id, $data);


return true;
	
}

if ($type=='group'){
	
if (empty($data['group_name'])){
global $errormessage;
$errormessage='Please enter a group name.';
global $editdata;
$editdata=$data;
return false;
}

global $maindb;
mysql_query("INSERT INTO md_user_groups (group_name, group_status)
VALUES ('$data[group_name]', '1')", $maindb);
global $created_group_id;
$created_group_id=mysql_insert_id($maindb);

create_rightset('group', $created_group_id, $data);

return true;

}

if ($type=='channel'){
if (empty($data['channel_name'])){
global $errormessage;
$errormessage='Please enter a channel name.';
global $editdata;
$editdata=$data;
return false;
}

global $maindb;
mysql_query("INSERT INTO md_channels (channel_type, channel_name)
VALUES ('1', '$data[channel_name]')", $maindb);
return true;


}

if ($type=='creativeserver'){
	
if (empty($data['server_name']) or empty($data['remote_host']) or empty($data['remote_user']) or empty($data['remote_password']) or empty($data['remote_directory']) or empty($data['server_default_url'])){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}

$data['server_type']=sanitize($data['server_type']);
$data['server_name']=sanitize($data['server_name']);
$data['remote_host']=sanitize($data['remote_host']);
$data['remote_user']=sanitize($data['remote_user']);
$data['remote_password']=sanitize($data['remote_password']);
$data['remote_directory']=sanitize($data['remote_directory']);
$data['server_default_url']=sanitize($data['server_default_url']);

global $maindb;
mysql_query("INSERT INTO md_creative_servers (server_type, server_name, remote_host, remote_user, remote_password, remote_directory, server_default_url, server_status)
VALUES ('$data[server_type]', '$data[server_name]', '$data[remote_host]', '$data[remote_user]', '$data[remote_password]', '$data[remote_directory]', '$data[server_default_url]', '1')", $maindb);

return true;
}

if ($type=='ad_unit'){
	
	if (empty($data['adv_name']) or ($data['creative_format']==10 && (!is_numeric($data['custom_creative_width']) or !is_numeric($data['custom_creative_height'])))){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}

if (!is_numeric($data['creative_format'])){
global $errormessage;
$errormessage='Please choose a creative size for your ad.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['creative_type']==3){

if (empty($data['html_body'])){
global $errormessage;
$errormessage='Please enter a HTML body for your ad.';
global $editdata;
$editdata=$data;
return false;	
}

	
}

if ($data['creative_type']==2){

if (empty($data['creative_url']) or empty($data['click_url'])){
global $errormessage;
$errormessage='Please enter a Creative URL and Click URL for your ad.';
global $editdata;
$editdata=$data;
return false;	
}


	
}

if ($data['creative_type']==1){

if (empty($data['click_url'])){
global $errormessage;
$errormessage='Please enter a Click URL for your ad.';
global $editdata;
$editdata=$data;
return false;	
}

if(!file_exists($_FILES['creative_file']['tmp_name']) || !is_uploaded_file($_FILES['creative_file']['tmp_name'])) {
global $errormessage;
$errormessage='Please upload a creative for your ad unit.';
global $editdata;
$editdata=$data;
return false;	
}
	
}

// Define Image Sizes
if ($data['creative_format']==1){$data['custom_creative_width']=320; $data['custom_creative_height']=50;}
if ($data['creative_format']==2){$data['custom_creative_width']=300; $data['custom_creative_height']=250;}
if ($data['creative_format']==3){$data['custom_creative_width']=728; $data['custom_creative_height']=90;}
if ($data['creative_format']==4){$data['custom_creative_width']=160; $data['custom_creative_height']=600;}
if ($data['creative_format']==5){$data['custom_creative_width']=300; $data['custom_creative_height']=50;}
if ($data['creative_format']==6){$data['custom_creative_width']=320; $data['custom_creative_height']=480;}
// End Define Image Sizes


// IF CREATIVE TYPE =1, ATTEMPT TO UPLOAD CREATIVE
if ($data['creative_type']==1){
	
$creative_server=getconfig_var('default_creative_server');
	
// Generate Creative Hash
$uniqid = uniqid(time());
$creative_hash=md5($uniqid);

$file_extension=strtolower(substr(strrchr($_FILES['creative_file']['name'], "."), 1)); 


// Case: Remote Creative Server (FTP)
if (getconfig_var('default_creative_server')>1){
	
list($width, $height, $type, $attr)= getimagesize($_FILES['creative_file']['tmp_name']);

if ($height!=$data['custom_creative_height'] or $width!=$data['custom_creative_width'] or empty($file_extension)){
global $errormessage;
$errormessage='The image you uploaded does not appear to be in the right dimensions. Please upload a valid image sized '.$data['custom_creative_width'].'x'.$data['custom_creative_height'].'';
global $editdata;
$editdata=$data;
return false;
}
	
$creative_server_detail = get_creativeserver_detail(getconfig_var('default_creative_server'));

if ($creative_server_detail['entry_id']<1){
global $errormessage;
$errormessage='The default creative server does not seem to exist. Please change your creative server in your mAdserve control panel under Configuration>Creative Servers';
global $editdata;
$editdata=$data;
return false;
}

// Attempt: Upload
include MAD_PATH . '/modules/ftp/ftp.class.php';

try {
    $ftp = new Ftp;
    $ftp->connect($creative_server_detail['remote_host']);
    $ftp->login($creative_server_detail[remote_user], $creative_server_detail[remote_password]); 
    $ftp->put($creative_server_detail[remote_directory] . $creative_hash . '.' . $file_extension , $_FILES['creative_file']['tmp_name'], FTP_BINARY);

} catch (FtpException $e) {
global $errormessage;
$errormessage='FTP Client was unable to upload creative to remote server. Error given: '.$e->getMessage().'';
global $editdata;
$editdata=$data;
return false;
}

// End: Upload

}
// End Case: Remote Creative Server (FTP)

// Case: Local Creative Server
if (getconfig_var('default_creative_server')==1){
	

include MAD_PATH . '/modules/upload/class.upload.php';


$handle = new Upload($_FILES['creative_file']);
$handle->allowed = array('image/*');
$handle->file_new_name_body = $creative_hash;

 if ($handle->uploaded) {
	 	 
$image_width = $handle->image_src_x;
$image_height = $handle->image_src_y;

if ((!empty($image_width) && !empty($image_height)) && ($image_height!=$data['custom_creative_height'] or $image_width!=$data['custom_creative_width'])){
global $errormessage;
$errormessage='The image you uploaded does not appear to be in the right dimensions. Please upload an image sized '.$data['custom_creative_width'].'x'.$data['custom_creative_height'].'';
global $editdata;
$editdata=$data;
return false;
}
	

$handle->Process(MAD_PATH . MAD_CREATIVE_DIR);


 if ($handle->processed) {
// OK 
 }
 else {
global $errormessage;
$errormessage='Creative could not be uploaded. Please check if your creative directory is writeable ('.MAD_CREATIVE_DIR.') and that you have uploaded a valid image file.';
global $editdata;
$editdata=$data;
return false;
 }
 
 } else {
	 // Not OK

global $errormessage;
$errormessage='Creative could not be uploaded. Please check if your creative directory is writeable ('.MAD_CREATIVE_DIR.') and that you have uploaded a valid image file.';
global $editdata;
$editdata=$data;
return false;
	 
 }
 
}
 // End Case: Local Creative Sercer 
}



// END CREATIVE UPLOAD

global $maindb;


// Insert Ad Unit into DB
if (!isset($creative_server)){$creative_server='';}
if (!isset($creative_hash)){$creative_hash='';}
if (!isset($file_extension)){$file_extension='';}
if (!isset($data['adv_mraid'])){$data['adv_mraid']='';}

$data['creative_type']=sanitize($data['creative_type']);
$data['click_url']=sanitize($data['click_url']);
$data['html_body']=sanitize($data['html_body']);
$data['creative_url']=sanitize($data['creative_url']);
$data['tracking_pixel']=sanitize($data['tracking_pixel']);
$data['adv_name']=sanitize($data['adv_name']);
$data['custom_creative_height']=sanitize($data['custom_creative_height']);
$data['custom_creative_width']=sanitize($data['custom_creative_width']);
$data['adv_mraid']=sanitize($data['adv_mraid']);

mysql_query("INSERT INTO md_ad_units (campaign_id, unit_hash, adv_type, adv_status, adv_click_url, adv_click_opentype, adv_chtml, adv_bannerurl, adv_impression_tracking_url, adv_name, adv_clickthrough_type, adv_creative_extension, adv_height, adv_width, creativeserver_id, adv_mraid)
VALUES ('$data[campaign_id]', '$creative_hash', '$data[creative_type]', '1', '$data[click_url]', '', '$data[html_body]', '$data[creative_url]', '$data[tracking_pixel]', '$data[adv_name]', '', '$file_extension', '$data[custom_creative_height]', '$data[custom_creative_width]', '$creative_server', '$data[adv_mraid]')", $maindb);
global $created_adunit_id;
$created_adunit_id=mysql_insert_id($maindb);
// END: Insert Ad Unit into DB

return true;

	
}
		
		if ($type=='campaign'){
			
		
if (!isset($data['as_values_1'])){$data['as_values_1']='';}
if (!isset($data['placement_select'])){$data['placement_select']='';}
if (!isset($data['channel_select'])){$data['channel_select']='';}
if (!isset($data['target_iphone'])){$data['target_iphone']='';}
if (!isset($data['target_ipod'])){$data['target_ipod']='';}
if (!isset($data['target_ipad'])){$data['target_ipad']='';}
if (!isset($data['target_android'])){$data['target_android']='';}
if (!isset($data['target_other'])){$data['target_other']='';}
			
$countries_active=0;
$separate_countries=explode(',', $data['as_values_1']);
foreach($separate_countries as $my_tag) {
if (!empty($my_tag)){
$countries_active=1;	
} }

			
			
if (!is_numeric($data['campaign_priority']) or empty($data['campaign_name'])){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}
if ($data['geo_targeting']==2 && $countries_active!=1){
global $errormessage;
$errormessage='Please select at least one country you want to target.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['publication_targeting']==2 && count($data['placement_select'])<1){
global $errormessage;
$errormessage='Please select at least one placement you want to target.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['channel_targeting']==2 && count($data['channel_select'])<1){
global $errormessage;
$errormessage='Please select at least one channel you want to target.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['device_targeting']==2 && ($data['target_iphone']!=1 && $data['target_ipod']!=1 && $data['target_ipad']!=1 && $data['target_android']!=1 && $data['target_other']!=1)){
global $errormessage;
$errormessage='Please select at least one device type you want to target.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['campaign_type']=='network' && (!is_numeric($data['campaign_networkid']))){
global $errormessage;
$errormessage='Please select an ad network to send your campaign traffic to.';
global $editdata;
$editdata=$data;
return false;	
}

if (!empty($data['total_amount']) && !is_numeric($data['total_amount'])){
global $errormessage;
$errormessage='Your daily cap needs to be a numeric value.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['campaign_type']!='network'){
	
if (empty($data['adv_name']) or ($data['creative_format']==10 && (!is_numeric($data['custom_creative_width']) or !is_numeric($data['custom_creative_height'])))){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}

if (!is_numeric($data['creative_format'])){
global $errormessage;
$errormessage='Please choose a creative size for your ad.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['creative_type']==3){

if (empty($data['html_body'])){
global $errormessage;
$errormessage='Please enter a HTML body for your ad.';
global $editdata;
$editdata=$data;
return false;	
}

	
}

if ($data['creative_type']==2){

if (empty($data['creative_url']) or empty($data['click_url'])){
global $errormessage;
$errormessage='Please enter a Creative URL and Click URL for your ad.';
global $editdata;
$editdata=$data;
return false;	
}


	
}

if ($data['creative_type']==1){

if (empty($data['click_url'])){
global $errormessage;
$errormessage='Please enter a Click URL for your ad.';
global $editdata;
$editdata=$data;
return false;	
}

if(!file_exists($_FILES['creative_file']['tmp_name']) || !is_uploaded_file($_FILES['creative_file']['tmp_name'])) {
global $errormessage;
$errormessage='Please upload a creative for your ad unit.';
global $editdata;
$editdata=$data;
return false;	
}
	
}

if ($data['start_date_type']==2 && empty($data['startdate_value'])){
global $errormessage;
$errormessage='Please choose a start date for your campaign.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['end_date_type']==2 && empty($data['enddate_value'])){
global $errormessage;
$errormessage='Please choose an end date for your campaign.';
global $editdata;
$editdata=$data;
return false;	
}


if ($data['start_date_type']==2){
$start_date=explode('/',$data['startdate_value']);
$start_date_array['year']=$start_date[2];
$start_date_array['day']=$start_date[1];
$start_date_array['month']=$start_date[0];
$start_date_array['unix']=strtotime("$start_date_array[year]-$start_date_array[month]-$start_date_array[day]");	
}

if ($data['end_date_type']==2){
$end_date=explode('/',$data['enddate_value']);
$end_date_array['year']=$end_date[2];
$end_date_array['day']=$end_date[1];
$end_date_array['month']=$end_date[0];
$end_date_array['unix']=strtotime("$end_date_array[year]-$end_date_array[month]-$end_date_array[day]");	
}

if ($data['end_date_type']==2 && $end_date_array['unix']<time()){
global $errormessage;
$errormessage='The end date you entered is in the past. Please choose an end date in the future.';
global $editdata;
$editdata=$data;
return false;	
}

// Define Image Sizes
if ($data['creative_format']==1){$data['custom_creative_width']=320; $data['custom_creative_height']=50;}
if ($data['creative_format']==2){$data['custom_creative_width']=300; $data['custom_creative_height']=250;}
if ($data['creative_format']==3){$data['custom_creative_width']=728; $data['custom_creative_height']=90;}
if ($data['creative_format']==4){$data['custom_creative_width']=160; $data['custom_creative_height']=600;}
if ($data['creative_format']==5){$data['custom_creative_width']=300; $data['custom_creative_height']=50;}
if ($data['creative_format']==6){$data['custom_creative_width']=320; $data['custom_creative_height']=480;}
// End Define Image Sizes


// IF CREATIVE TYPE =1, ATTEMPT TO UPLOAD CREATIVE
if ($data['creative_type']==1){
	
// Generate Creative Hash
$uniqid = uniqid(time());
$creative_hash=md5($uniqid);

$file_extension=strtolower(substr(strrchr($_FILES['creative_file']['name'], "."), 1)); 


// Case: Remote Creative Server (FTP)
if (getconfig_var('default_creative_server')>1){
	
list($width, $height, $type, $attr)= getimagesize($_FILES['creative_file']['tmp_name']);

if ($height!=$data['custom_creative_height'] or $width!=$data['custom_creative_width'] or empty($file_extension)){
global $errormessage;
$errormessage='The image you uploaded does not appear to be in the right dimensions. Please upload a valid image sized '.$data['custom_creative_width'].'x'.$data['custom_creative_height'].'';
global $editdata;
$editdata=$data;
return false;
}
	
$creative_server_detail = get_creativeserver_detail(getconfig_var('default_creative_server'));

if ($creative_server_detail['entry_id']<1){
global $errormessage;
$errormessage='The default creative server does not seem to exist. Please change your creative server in your mAdserve control panel under Configuration>Creative Servers';
global $editdata;
$editdata=$data;
return false;
}

// Attempt: Upload
include MAD_PATH . '/modules/ftp/ftp.class.php';

try {
    $ftp = new Ftp;
    $ftp->connect($creative_server_detail['remote_host']);
    $ftp->login($creative_server_detail[remote_user], $creative_server_detail[remote_password]); 
    $ftp->put($creative_server_detail[remote_directory] . $creative_hash . '.' . $file_extension , $_FILES['creative_file']['tmp_name'], FTP_BINARY);

} catch (FtpException $e) {
global $errormessage;
$errormessage='FTP Client was unable to upload creative to remote server. Error given: '.$e->getMessage().'';
global $editdata;
$editdata=$data;
return false;
}

// End: Upload

}
// End Case: Remote Creative Server (FTP)

// Case: Local Creative Server
if (getconfig_var('default_creative_server')==1){
	

include MAD_PATH . '/modules/upload/class.upload.php';


$handle = new Upload($_FILES['creative_file']);
$handle->allowed = array('image/*');
$handle->file_new_name_body = $creative_hash;

 if ($handle->uploaded) {
	 	 
$image_width = $handle->image_src_x;
$image_height = $handle->image_src_y;

if ((!empty($image_width) && !empty($image_height)) && ($image_height!=$data['custom_creative_height'] or $image_width!=$data['custom_creative_width'])){
global $errormessage;
$errormessage='The image you uploaded does not appear to be in the right dimensions. Please upload an image sized '.$data['custom_creative_width'].'x'.$data['custom_creative_height'].'';
global $editdata;
$editdata=$data;
return false;
}
	

$handle->Process(MAD_PATH . MAD_CREATIVE_DIR);


 if ($handle->processed) {
// OK 
 }
 else {
global $errormessage;
$errormessage='Creative could not be uploaded. Please check if your creative directory is writeable ('.MAD_CREATIVE_DIR.') and that you have uploaded a valid image file.';
global $editdata;
$editdata=$data;
return false;
 }
 
 } else {
	 // Not OK

global $errormessage;
$errormessage='Creative could not be uploaded. Please check if your creative directory is writeable ('.MAD_CREATIVE_DIR.') and that you have uploaded a valid image file.';
global $editdata;
$editdata=$data;
return false;
	 
 }
 
}
 // End Case: Local Creative Sercer 
}



// END CREATIVE UPLOAD
}

$creation_timestamp=time();

/* Date Stuff */
if ($data['start_date_type']==1){
$start_date_array['year']=date("Y");
$start_date_array['day']=date("d");
$start_date_array['month']=date("m");
}

if ($data['end_date_type']==1){
$end_date_array['year']='2090';
$end_date_array['day']='12';
$end_date_array['month']='12';
}

if ($data['start_date_type']==2){
$start_date=explode('/',$data['startdate_value']);
$start_date_array['year']=$start_date[2];
$start_date_array['day']=$start_date[1];
$start_date_array['month']=$start_date[0];
$start_date_array['unix']=strtotime("$start_date_array[year]-$start_date_array[month]-$start_date_array[day]");	
}

if ($data['end_date_type']==2){
$end_date=explode('/',$data['enddate_value']);
$end_date_array['year']=$end_date[2];
$end_date_array['day']=$end_date[1];
$end_date_array['month']=$end_date[0];
$end_date_array['unix']=strtotime("$end_date_array[year]-$end_date_array[month]-$end_date_array[day]");	
}



$data['startdate_value']=''.$start_date_array['year'].'-'.$start_date_array['month'].'-'.$start_date_array['day'].'';
$data['enddate_value']=''.$end_date_array['year'].'-'.$end_date_array['month'].'-'.$end_date_array['day'].'';


global $maindb;

if (!isset($data['target_iphone'])){$data['target_iphone']='';}
if (!isset($data['target_ipod'])){$data['target_ipod']='';}
if (!isset($data['target_ipad'])){$data['target_ipad']='';}
if (!isset($data['target_android'])){$data['target_android']='';}
if (!isset($data['target_other'])){$data['target_other']='';}
if (!isset($data['ios_version_min'])){$data['ios_version_min']='';}
if (!isset($data['ios_version_max'])){$data['ios_version_max']='';}
if (!isset($data['android_version_min'])){$data['android_version_min']='';}
if (!isset($data['android_version_max'])){$data['android_version_max']='';}

$data['campaign_type']=sanitize($data['campaign_type']);
$data['campaign_name']=sanitize($data['campaign_name']);
$data['campaign_desc']=sanitize($data['campaign_desc']);
$data['startdate_value']=sanitize($data['startdate_value']);
$data['enddate_value']=sanitize($data['enddate_value']);
$data['campaign_networkid']=sanitize($data['campaign_networkid']);
$data['campaign_priority']=sanitize($data['campaign_priority']);
$data['target_iphone']=sanitize($data['target_iphone']);
$data['target_ipod']=sanitize($data['target_ipod']);
$data['target_ipad']=sanitize($data['target_ipad']);
$data['target_android']=sanitize($data['target_android']);
$data['target_other']=sanitize($data['target_other']);
$data['ios_version_min']=sanitize($data['ios_version_min']);
$data['ios_version_max']=sanitize($data['ios_version_max']);
$data['android_version_min']=sanitize($data['android_version_min']);
$data['android_version_max']=sanitize($data['android_version_max']);
$data['geo_targeting']=sanitize($data['geo_targeting']);
$data['publication_targeting']=sanitize($data['publication_targeting']);
$data['channel_targeting']=sanitize($data['channel_targeting']);
$data['device_targeting']=sanitize($data['device_targeting']);

// Insert Campaign into DB
mysql_query("INSERT INTO md_campaigns (campaign_owner, campaign_status, campaign_type, campaign_name, campaign_desc, campaign_start, campaign_end, campaign_creationdate, campaign_networkid, campaign_priority, target_iphone, target_ipod, target_ipad, target_android, target_other, ios_version_min, ios_version_max, android_version_min, android_version_max, country_target, publication_target, channel_target, device_target)
VALUES ('$user_detail[user_id]', '1', '$data[campaign_type]', '$data[campaign_name]', '$data[campaign_desc]', '$data[startdate_value]', '$data[enddate_value]', '$creation_timestamp', '$data[campaign_networkid]', '$data[campaign_priority]', '$data[target_iphone]', '$data[target_ipod]', '$data[target_ipad]', '$data[target_android]', '$data[target_other]', '$data[ios_version_min]', '$data[ios_version_max]', '$data[android_version_min]', '$data[android_version_max]', '$data[geo_targeting]', '$data[publication_targeting]', $data[channel_targeting], '$data[device_targeting]')", $maindb);
global $created_campaign_id;
$created_campaign_id=mysql_insert_id($maindb);
// END: Insert Campaign into DB 

if ($data['campaign_type']!='network'){
	if ($data['creative_type']==1){
	$creative_server=getconfig_var('default_creative_server');	
	}
// Insert Ad Unit into DB
if (!isset($creative_server)){$creative_server='';}
if (!isset($creative_hash)){$creative_hash='';}
if (!isset($file_extension)){$file_extension='';}
if (!isset($data['adv_mraid'])){$data['adv_mraid']='';}

$data['creative_type']=sanitize($data['creative_type']);
$data['click_url']=sanitize($data['click_url']);
$data['html_body']=sanitize($data['html_body']);
$data['creative_url']=sanitize($data['creative_url']);
$data['tracking_pixel']=sanitize($data['tracking_pixel']);
$data['adv_name']=sanitize($data['adv_name']);
$data['custom_creative_height']=sanitize($data['custom_creative_height']);
$data['custom_creative_width']=sanitize($data['custom_creative_width']);
$data['adv_mraid']=sanitize($data['adv_mraid']);

mysql_query("INSERT INTO md_ad_units (campaign_id, unit_hash, adv_type, adv_status, adv_click_url, adv_click_opentype, adv_chtml, adv_bannerurl, adv_impression_tracking_url, adv_name, adv_clickthrough_type, adv_creative_extension, adv_height, adv_width, creativeserver_id, adv_mraid)
VALUES ('$created_campaign_id', '$creative_hash', '$data[creative_type]', '1', '$data[click_url]', '', '$data[html_body]', '$data[creative_url]', '$data[tracking_pixel]', '$data[adv_name]', '', '$file_extension', '$data[custom_creative_height]', '$data[custom_creative_width]', '$creative_server', '$data[adv_mraid]')", $maindb);
global $created_adunit_id;
$created_adunit_id=mysql_insert_id($maindb);
// END: Insert Ad Unit into DB
}

// Extra Targeting Variables

// Country
if ($data['geo_targeting']==2){
$separate_countries=explode(',', $data['as_values_1']);
foreach($separate_countries as $country_tag) {
if (!empty($country_tag)){
// Add Country
add_campaign_targeting($created_campaign_id, 'geo', $country_tag);
} }
}
//End Country

// Channel
if ($data['channel_targeting']==2 && is_array($data['channel_select'])){
foreach($data['channel_select'] as $channel_id){
add_campaign_targeting($created_campaign_id, 'channel', $channel_id);
}

}
// End Channel

// Placement
if ($data['publication_targeting']==2 && is_array($data['placement_select'])){
foreach($data['placement_select'] as $placement_id){
add_campaign_targeting($created_campaign_id, 'placement', $placement_id);
}

}
// End Placement

// End: Extra Targeting Variables

if (!isset($data['cap_type'])){$data['cap_type']='';}
if (!isset($data['total_amount'])){$data['total_amount']='';}

// Add Campaign Limit
mysql_query("INSERT INTO md_campaign_limit (campaign_id, cap_type, total_amount, total_amount_left)
VALUES ('$created_campaign_id', '$data[cap_type]', '$data[total_amount]', '$data[total_amount]')", $maindb);
// END: Add Campaign Limit

return true;


		}
	
	if ($type=='placement'){
global $maindb;
if (!isset($data['mobfox_min_cpc_active'])){$data['mobfox_min_cpc_active']=0; }
if (!isset($data['mobfox_backfill_active'])){$data['mobfox_backfill_active']=0; }
if (!isset($data['zone_height'])){$data['zone_height']=''; }
if (!isset($data['zone_width'])){$data['zone_width']=''; }

		
		if (!is_numeric($detail)){
		global $errormessage;
$errormessage='Please select a Publication to add this zone to.';
global $editdata;
$editdata=$data;
return false;	
		}
		
if (!is_numeric($data['zone_refresh']) or empty($data['zone_name']) or ($data['zone_size']=='10' && (!is_numeric($data['custom_zone_width']) or !is_numeric($data['custom_zone_height']))) or  empty($data['zone_type']) or ($data['zone_type']=='banner' && !is_numeric($data['zone_size']))){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}


if ($data['mobfox_min_cpc_active']==1 && (!is_numeric($data['min_cpc']) or !is_numeric($data['min_cpm']) or $data['min_cpm']>5 or $data['min_cpc']>0.20)){
global $errormessage;
$errormessage='Invalid minimum CPC/CPM values entered.';
global $editdata;
$editdata=$data;
return false;	
}

$publication_detail=get_publication_detail($detail);

if ($publication_detail['inv_type']==3 && $data['zone_type']=='interstitial'){
global $errormessage;
$errormessage='Full Page Interstitials are supported only inside iOS and Android applications.';
global $editdata;
$editdata=$data;
return false;	
}

$uniqid = uniqid($data['zone_name']);
$new_placement_hash=md5($uniqid);

if ($data['zone_size']==1){$data['zone_width']=320; $data['zone_height']=50;}
if ($data['zone_size']==2){$data['zone_width']=300; $data['zone_height']=250;}
if ($data['zone_size']==3){$data['zone_width']=728; $data['zone_height']=90;}
if ($data['zone_size']==4){$data['zone_width']=160; $data['zone_height']=600;}

$data['zone_name']=sanitize($data['zone_name']);
$data['zone_type']=sanitize($data['zone_type']);
$data['zone_width']=sanitize($data['zone_width']);
$data['zone_height']=sanitize($data['zone_height']);
$data['zone_refresh']=sanitize($data['zone_refresh']);
$data['zone_channel']=sanitize($data['zone_channel']);
$data['zone_description']=sanitize($data['zone_description']);
$data['mobfox_backfill_active']=sanitize($data['mobfox_backfill_active']);
$data['mobfox_min_cpc_active']=sanitize($data['mobfox_min_cpc_active']);
$data['min_cpc']=sanitize($data['min_cpc']);
$data['min_cpm']=sanitize($data['min_cpm']);
$data['backfill_alt_1']=sanitize($data['backfill_alt_1']);
$data['backfill_alt_2']=sanitize($data['backfill_alt_2']);
$data['backfill_alt_3']=sanitize($data['backfill_alt_3']);

mysql_query("INSERT INTO md_zones (publication_id, zone_hash, zone_name, zone_type, zone_width, zone_height, zone_refresh, zone_channel, zone_description, mobfox_backfill_active, mobfox_min_cpc_active, min_cpc, min_cpm, backfill_alt_1, backfill_alt_2, backfill_alt_3)
VALUES ('$detail', '$new_placement_hash', '$data[zone_name]', '$data[zone_type]', '$data[zone_width]', '$data[zone_height]', '$data[zone_refresh]', '$data[zone_channel]', '$data[zone_description]', '$data[mobfox_backfill_active]', '$data[mobfox_min_cpc_active]', '$data[min_cpc]', '$data[min_cpm]', '$data[backfill_alt_1]', '$data[backfill_alt_2]', '$data[backfill_alt_3]')", $maindb);
global $created_zone_id;
$created_zone_id=mysql_insert_id($maindb);

mf_add_publication_layer($created_zone_id, 1);

return true;
		
	}
	
if ($type=='publication'){
global $maindb;
if (!isset($data['mobfox_min_cpc_active'])){$data['mobfox_min_cpc_active']=0; }
if (!isset($data['mobfox_backfill_active'])){$data['mobfox_backfill_active']=0; }
if (!isset($data['zone_height'])){$data['zone_height']=''; }
if (!isset($data['zone_width'])){$data['zone_width']=''; }

if (empty($data['inv_name']) or !is_numeric($data['inv_type']) or empty($data['inv_address']) or !is_numeric($data['inv_defaultchannel']) or !is_numeric($data['zone_refresh']) or empty($data['zone_name']) or ($data['zone_size']=='10' && (!is_numeric($data['custom_zone_width']) or !is_numeric($data['custom_zone_height']))) or  empty($data['zone_type']) or ($data['zone_type']=='banner' && !is_numeric($data['zone_size']))){
global $errormessage;
$errormessage='Please fill out all required fields.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['mobfox_min_cpc_active']==1 && (!is_numeric($data['min_cpc']) or !is_numeric($data['min_cpm']) or $data['min_cpm']>5 or $data['min_cpc']>0.20)){
global $errormessage;
$errormessage='Invalid minimum CPC/CPM values entered.';
global $editdata;
$editdata=$data;
return false;	
}

if ($data['inv_type']==3 && $data['zone_type']=='interstitial'){
global $errormessage;
$errormessage='Full Page Interstitials are supported only inside iOS and Android applications.';
global $editdata;
$editdata=$data;
return false;	
}

$data['inv_type']=sanitize($data['inv_type']);
$data['inv_name']=sanitize($data['inv_name']);
$data['inv_description']=sanitize($data['inv_description']);
$data['inv_address']=sanitize($data['inv_address']);
$data['inv_defaultchannel']=sanitize($data['inv_defaultchannel']);

mysql_query("INSERT INTO md_publications (inv_status, inv_type, inv_name, inv_description, inv_address, inv_defaultchannel, creator_id)
VALUES (1, '$data[inv_type]', '$data[inv_name]', '$data[inv_description]', '$data[inv_address]', '$data[inv_defaultchannel]', '$user_detail[user_id]')", $maindb);
$new_publication_id=mysql_insert_id($maindb);

if (do_create('placement', $data, $new_publication_id)){
return true;
}

}
	
}

function get_code_snippets($type, $zoneid){
global $maindb;

$zone_detail=get_zone_detail($zoneid);

$mad_bsrurl=str_ireplace('/www/cp/integration.php','',$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
$mad_bsrurl = array_shift(explode('?', $mad_bsrurl));
$md_baseurl='http://'. $mad_bsrurl;

$usrres=mysql_query("select * from md_code_snippets order by entry_id ASC", $maindb);
while($snippet_detail=mysql_fetch_array($usrres)){
if ($snippet_detail['entry_id']==1){$activeclass=' class="active"';} else {$activeclass='';}

if ($type=='tab'){
echo '<li'.$activeclass.'><a href="#tab-'.$snippet_detail['entry_id'].'">'.$snippet_detail["snippet_name"].'</a></li>';
}

if ($type=='tabcontent'){
echo '<div id="tab-'.$snippet_detail['entry_id'].'" class="widget-content"><textarea onclick="this.select();" rows="15" style="width:98%; height:auto; border:0;">';
$data = file_get_contents(MAD_PATH . '/www/cp/templates/code_snippets/'.$snippet_detail['snippet_file'].'');  $data = str_replace("REPL_MADZONEHASH", $zone_detail['zone_hash'], $data); $data = str_replace("REPL_MADURL", $md_baseurl, $data);  echo $data; 
echo '</textarea>';
echo '</div> <!-- .widget-content -->';
}


}
	
}
function get_campaign_reporting_metrics($campaignid){
global $maindb;

if (!MAD_connect_repdb()){
echo "Could not connect to reporting database. Exiting."; exit;	
}
else {
global $repdb;	
}

$result_repselect=mysql_query("SELECT SUM(total_requests) AS total_requests, SUM(total_requests_sec) AS total_requests_sec, SUM(total_impressions) AS total_impressions, SUM(total_clicks) AS total_clicks, SUM(total_cost) as total_cost FROM md_reporting WHERE campaign_id='$campaignid'", $repdb);
$report_detail=mysql_fetch_array($result_repselect);

$report_detail['ctr']=@($report_detail['total_clicks']/$report_detail['total_impressions'])*100;
$report_detail['ctr']=number_format($report_detail['ctr'], 2);

return $report_detail;
}

function get_ad_reporting_metrics($adid){
global $maindb;

if (!MAD_connect_repdb()){
echo "Could not connect to reporting database. Exiting."; exit;	
}
else {
global $repdb;	
}

$result_repselect=mysql_query("SELECT SUM(total_requests) AS total_requests, SUM(total_impressions) AS total_impressions, SUM(total_clicks) AS total_clicks, SUM(total_cost) as total_cost FROM md_reporting WHERE creative_id='$adid'", $repdb);
$report_detail=mysql_fetch_array($result_repselect);

$report_detail['ctr']=@($report_detail['total_clicks']/$report_detail['total_impressions'])*100;
$report_detail['ctr']=number_format($report_detail['ctr'], 2);

return $report_detail;
}

function get_running_limit($id){
$cap_detail=get_campaign_cap_detail($id);
$limit_left=$cap_detail['total_amount_left'];

switch ($cap_detail['cap_type']){
case 1:
$t='Daily Impression Left (Today)';
break;

case 2:
$t='Total Impressions Left';
break;	
}

return $limit_left . ' ' . $t;

}


function get_campaigns(){
global $maindb;	
$current_timestamp=time();

global $user_detail;

if (!check_permission_simple('view_all_campaigns', $user_detail['user_id'])){
$lq="WHERE campaign_owner='".$user_detail['user_id']."'";
}
else {
$lq='';	
}

$usrres=mysql_query("select * from md_campaigns ".$lq." ORDER BY campaign_id DESC", $maindb);
while($campaign_detail=mysql_fetch_array($usrres)){
$campaign_status='';
$cap_active=0;

$cap_detail=get_campaign_cap_detail($campaign_detail['campaign_id']);

if ($cap_detail['cap_type']>0 && is_numeric($cap_detail['total_amount'])){
$cap_active=1;
}
	
	if ($campaign_detail['campaign_priority']==1){$campaign_priority='1';}
	else if ($campaign_detail['campaign_priority']==2){$campaign_priority='2';} 
	else if ($campaign_detail['campaign_priority']==3){$campaign_priority='3';} 
	else if ($campaign_detail['campaign_priority']==4){$campaign_priority='4';} 
	else if ($campaign_detail['campaign_priority']==5){$campaign_priority='5';} 
	
if ($campaign_detail['campaign_type']==1){$campaign_type='Direct Sold';} 
else if ($campaign_detail['campaign_type']==2){$campaign_type='Promotional';} 
else if ($campaign_detail['campaign_type']=='network'){$campaign_type='Network';} 

if ($campaign_detail['campaign_type']=='network'){ $total_adunits='-'; } else {
$total_adunits=mysql_num_rows(mysql_query("SELECT * FROM md_ad_units WHERE campaign_id='$campaign_detail[campaign_id]'", $maindb));
}

if ($campaign_detail['campaign_type']!='network' && $total_adunits<1){ $campaign_status='No Ads'; $statuscolor='#000000'; }
else if ($campaign_detail['campaign_status']==2){$campaign_status='Paused'; $statuscolor='#FF9900';}
else if ($campaign_detail['campaign_start']>date("Y-m-d")){$campaign_status='Not Started'; $statuscolor='#000000';}
else if ($campaign_detail['campaign_end']<=date("Y-m-d")){$campaign_status='Ended'; $statuscolor='#993300';}
else if ($campaign_detail['campaign_status']==1){$campaign_status='Active'; $statuscolor='#009900;';}

$campaign_reporting=get_campaign_reporting_metrics($campaign_detail['campaign_id']);

 if ($campaign_detail['campaign_type']!='network'){
$campaign_reporting['total_requests']='-'; 
 }
 else {
	 $campaign_reporting['total_requests']=number_format($campaign_reporting['total_requests_sec']);
 }
	
echo '<tr class="gradeA">
								<td><input type="checkbox" value="'.$campaign_detail['campaign_id'].'" name="select_campaign[ ]"> '.$campaign_detail['campaign_name'].'</td>
								<td class="center">'.$campaign_type.'</td>
								<td class="center">'.$campaign_priority.'</td>
								<td class="center"><span style="color:'.$statuscolor.'">'.$campaign_status.'</span></td>
								<td class="center">'.$total_adunits.'</td>
								<td class="center">'.$campaign_reporting['total_requests'].'</td>
								<td class="center">'.number_format($campaign_reporting['total_impressions']).'</td>
								<td class="center">'.number_format($campaign_reporting['total_clicks']).'</td>
								';
								echo '<td class="center"><span class="ticket ticket-info"><a href="edit_campaign.php?id='.$campaign_detail['campaign_id'].'" style="color:#FFF; text-decoration:none;">Edit </a></span>';
								 if ($campaign_detail['campaign_type']!='network'){
								echo '&nbsp;<span class="ticket ticket-warning"><a href="view_adunits.php?id='.$campaign_detail['campaign_id'].'" style="color:#FFF; text-decoration:none;">View Ad Units</a></span>';
								 }
								 if ($cap_active==1){
									echo '&nbsp;<span class="ticket ticket-important"><a href="edit_running_limit.php?id='.$campaign_detail['campaign_id'].'" style="color:#FFF; text-decoration:none;">Change Cap</a></span>'; 
								 }
								echo '&nbsp;<span class="ticket ticket-success"><a href="reporting.php?type=campaign&reporting_campaign='.$campaign_detail['campaign_id'].'" style="color:#FFF; text-decoration:none;">Reporting</a></span></td>';
	
								
							echo '</tr>	';


}
	
}

function json_regions($selected, $functionid){
	$x=0;
echo "var $functionid = {items: [";
global $maindb;	
$usrres=mysql_query("select * from md_regional_targeting ORDER BY entry_id ASC", $maindb);
while($region_detail=mysql_fetch_array($usrres)){
if ($region_detail['targeting_type']=='REGION'){$region_appendix=' (Region)';}else {$region_appendix='';}
if ($x==1){ echo ','; }
echo '{value: "'.$region_detail['targeting_code'].'", name: "'.$region_detail['region_name'] . $region_appendix.'"}';
$x=1;
}
echo ']};';
}

function json_prefill_countrylist($type, $detail){
	$x=0;
echo "var selecteddata = {items: [";
global $maindb;	

if ($type=='edit'){
$usrres=mysql_query("select * from md_campaign_targeting WHERE campaign_id='$detail' AND targeting_type='geo' ORDER BY entry_id ASC", $maindb);
while($targeting_detail=mysql_fetch_array($usrres)){
if (!empty($targeting_detail['entry_id'])){
$region_res=mysql_query("select * from md_regional_targeting where targeting_code='$targeting_detail[targeting_code]'", $maindb);
$region_detail=mysql_fetch_array($region_res);

if ($region_detail['targeting_type']=='REGION'){$region_appendix=' (Region)';}else {$region_appendix='';}
if ($x==1){ echo ','; }
echo '{value: "'.$region_detail['targeting_code'].'", name: "'.$region_detail['region_name'] . $region_appendix.'"}';
$x=1;

	
}
}
}


if ($type=='create'){
$separate_countries=explode(',', $detail);
foreach($separate_countries as $my_tag) {
if (!empty($my_tag)){
$region_res=mysql_query("select * from md_regional_targeting where targeting_code='$my_tag'", $maindb);
$region_detail=mysql_fetch_array($region_res);

if ($region_detail['targeting_type']=='REGION'){$region_appendix=' (Region)';}else {$region_appendix='';}
if ($x==1){ echo ','; }
echo '{value: "'.$region_detail['targeting_code'].'", name: "'.$region_detail['region_name'] . $region_appendix.'"}';
$x=1;

	
}
}
}

echo ']};';
}

function list_placements_campaign($selected){
if (!is_array($selected)){$selected=array();}
global $maindb;	
$x=0;
$usrres=mysql_query("select * from md_publications ORDER BY inv_id DESC", $maindb);
while($publication_detail=mysql_fetch_array($usrres)){

$getpubtyperes=mysql_query("select pub_name from md_publication_types where entry_id='$publication_detail[inv_type]'", $maindb);
$pub_type_detail=mysql_fetch_array($getpubtyperes);
	
if ($x==1){ echo '<tr style="background-color:#F2F2F2;">'; } else { echo '<tr>'; }
echo '<td width="45%"><div>';
echo ''.$publication_detail['inv_name'].' ('.$pub_type_detail['pub_name'].')';
 echo '</div></td>';
echo '<td width="2%">&nbsp;</td>';
echo '<td width="53%">';
$zoneres=mysql_query("select * from md_zones WHERE publication_id='$publication_detail[inv_id]' ORDER BY entry_id ASC", $maindb);
while($zone_detail=mysql_fetch_array($zoneres)){

if ($zone_detail['zone_type']=="banner"){$zone_type='Standard Banner'; $zone_size=''.$zone_detail['zone_width'].'x'.$zone_detail['zone_height'].'';}
if ($zone_detail['zone_type']=="interstitial"){$zone_type='Interstitial'; $zone_size='Full Page';}
if (in_array($zone_detail['entry_id'], $selected)) { $selectedhtml='checked="checked"';} else {$selectedhtml='';}
echo '<div>';
echo '<input '.$selectedhtml.' value="'.$zone_detail['entry_id'].'" class="pub_'.$publication_detail['inv_id'].'" name="placement_select[ ]" type="checkbox" />
      '.$zone_detail['zone_name'].' ('.$zone_size.')</div>';
echo '</div>';
}
 echo '</td>
  </tr>';

$x=$x+1; if ($x==2){$x=0;}
}
}

function list_channels_campaign($selected){
if (!is_array($selected)){$selected=array();}
global $maindb;	
$x=0;
$usrres=mysql_query("select channel_id, channel_name from md_channels ORDER BY channel_id ASC", $maindb);
while($channel_detail=mysql_fetch_array($usrres)){
	
if ($x==1){ echo '<tr style="background-color:#F2F2F2;">'; } else { echo '<tr>'; }
echo '<td width="45%"><div>';
if (in_array($channel_detail['channel_id'], $selected)) { $selectedhtml='checked="checked"';} else {$selectedhtml='';}
echo '<input '.$selectedhtml.' value="'.$channel_detail['channel_id'].'" name="channel_select[ ]" type="checkbox" /> '.$channel_detail['channel_name'].'';
 echo '</div></td>';
 echo '</tr>';

$x=$x+1; if ($x==2){$x=0;}
}
}

function get_adnetworks($origin){
global $maindb;	
$current_timestamp=time();

$usrres=mysql_query("select * from md_networks ORDER BY network_name ASC", $maindb);
while($network_detail=mysql_fetch_array($usrres)){
	
if ($network_detail['interstitial_support']==1){$interstitial_support_icon='icon-check';} else {$interstitial_support_icon='icon-x';} 
if ($network_detail['banner_support']==1){$banner_support_icon='icon-check';} else {$banner_support_icon='icon-x';} 


if (file_exists(MAD_PATH . '/modules/network_modules/' . $network_detail['network_identifier'] . '/request.php')){
$network_status='Active';
}
else {
$network_status='Module Not Found';
}

echo '<tr class="gradeA">
								<td>'.$network_detail['network_name'].'</td>
								<td class="center"><div align=center><span class="'.$banner_support_icon.'"></span></div></td>
								<td class="center"><div align=center><span class="'.$interstitial_support_icon.'"></span></div></td>
								<td class="center"><div align=center>'.$network_status.'</div></td>
								<td class="center"><div align=center><a href="#" onclick="$.modal ({title: \''.$network_detail['network_name'].'\', html: \'<div style=width:500px;;>'.trim(str_replace(",", "\,", addslashes($network_detail['info_content']))).'</div>\'});">View Info</a></div></td>';
								echo '<td class="center"><div align=center><a target="_blank" href="'.$network_detail['signup_url'].'">Signup</a></div></td>';
								echo '<td class="center"><span class="ticket ticket-info"><a href="network_id_setup.php?id='.$network_detail['entry_id'].'" style="color:#FFF; text-decoration:none;">Setup Publisher IDs</a></span>&nbsp;<span class="ticket ticket-warning"><a href="network_settings.php?id='.$network_detail['entry_id'].'" style="color:#FFF; text-decoration:none;">Settings</a></span>&nbsp;</td>';
	
								
							echo '</tr>	';


}
	
}

function add_campaign_targeting($campaign_id, $targeting_type, $targeting_content){
global $maindb;
mysql_query("INSERT INTO md_campaign_targeting (campaign_id, targeting_type, targeting_code)
VALUES ('$campaign_id', '$targeting_type', '$targeting_content')", $maindb);
}

function reset_campaign_targeting($campaign_id){
global $maindb;
mysql_query("DELETE FROM md_campaign_targeting WHERE campaign_id='$campaign_id'", $maindb);
}

function get_adunits($campaignid){
global $maindb;	
$current_timestamp=time();

$usrres=mysql_query("select * from md_ad_units WHERE campaign_id='$campaignid' ORDER BY adv_id DESC", $maindb);
while($ad_detail=mysql_fetch_array($usrres)){

if ($ad_detail['adv_status']==2){$ad_status='Paused'; $statuscolor='#FF9900';}
else if ($ad_detail['adv_status']==1){$ad_status='Active'; $statuscolor='#009900;';}

switch($ad_detail['adv_type']){
case 1:
$ad_type='Standard Creative';
break;

case 2:
$ad_type='External Banner';
break;

case 3:
$ad_type='HTML Markup';
break;

	
}

$ad_reporting=get_ad_reporting_metrics($ad_detail['adv_id']);
	
echo '<tr class="gradeA">
								<td><input type="checkbox" value="'.$ad_detail['adv_id'].'" name="select_adunit[ ]"> '.$ad_detail['adv_name'].'</td>
								<td class="center">'.$ad_type.'</td>
								<td class="center"><span style="color:'.$statuscolor.'">'.$ad_status.'</span></td>
								<td class="center">'.$ad_detail['adv_width'].'x'.$ad_detail['adv_height'].'</td>
								<td class="center"><a href="#" onclick="$.modal ({title: \'View Creative\', html: \'<div style=width:500px;;><iframe src=view_creative.php?id='.$ad_detail['adv_id'].' width=100% height=400></iframe></div>\'});">View Creative</a></td>
								<td class="center">'.number_format($ad_reporting['total_impressions']).'</td>
								<td class="center">'.number_format($ad_reporting['total_clicks']).'</td>
								';
								echo '<td class="center"><span class="ticket ticket-info"><a href="edit_ad_unit.php?id='.$ad_detail['adv_id'].'" style="color:#FFF; text-decoration:none;">Edit Ad</a></span>';
							
								echo '&nbsp;<span class="ticket ticket-success"><a href="reporting.php?type=campaign&reporting_campaign='.$ad_detail['campaign_id'].'" style="color:#FFF; text-decoration:none;">Reporting</a></span></td>';
	
								
							echo '</tr>	';


}
	
}

function check_network_installed($networkid){
global $maindb;
$checknetw_res=mysql_query("select * from md_networks where network_identifier='$networkid'", $maindb);
$network_detail=mysql_fetch_array($checknetw_res);

if ($network_detail['entry_id']>0){
return true;
}
else {
return false;	
}
	
}


function get_adnetwork_modules(){

//path to directory to scan
$directory = MAD_PATH. "/modules/network_modules/";
 
//get all files in specified directory
$files = glob($directory . "*");
 
//print each file name
foreach($files as $file)
{
 //check to see if the file is a folder/directory
 if(is_dir($file))
 {
	 
$network_name = str_replace(MAD_PATH. "/modules/network_modules/", '', $file);
	
if (file_exists(MAD_PATH. "/modules/network_modules/". $network_name . "/config.xml")){
$xml_status='OK';
}
else {
$xml_status='Not found';	
}

if (file_exists(MAD_PATH. "/modules/network_modules/". $network_name . "/request.php")){
$handler_status='OK';
}
else {
$handler_status='Not found';	
}

$network_installed=0;

if (check_network_installed($network_name)){
$network_installed=1;
$network_status='Installed';

if ($handler_status!='OK'){
$network_status='Not Active';
}

}
else {
$network_status='Not Installed';
}

	 
	 echo '<tr class="gradeA">';
	 echo '<td class="center">/'.$network_name.'</td>';
	 echo '<td class="center"><div align="center">'.$xml_status.'</div></td>';
	 echo '<td class="center"><div align="center">'.$handler_status.'</div></td>';
	 echo '<td class="center"><div align="center">'.$network_status.'</div></td>';
	 if ($network_installed!=1 && $handler_status=='OK' && $xml_status=='OK'){
	 echo '<td class="center"><span class="ticket ticket-info"><a href="network_modules.php?action=install&networkid='.$network_name.'" style="color:#FFF; text-decoration:none;">Install Network</a></span></td>';
	 }
	 else if ($network_installed==1) {
	echo '<td class="center"><span id="networkdel'.$network_name.'" class="ticket ticket-important"><a style="color:#FFF; text-decoration:none;" href="#">Un-Install</a></span></td>';
	 }
	 else {
			echo '<td class="center"></td>';
	 }
	 echo '</tr>';
 }
}


	
}

function install_network($networkid){
	
if (check_network_installed($networkid)){
global $errormessage;
$errormessage='This network is already installed.';
return false;
}

	
if (!file_exists(MAD_PATH. "/modules/network_modules/". $networkid . "/request.php")){
global $errormessage;
$errormessage='Unable to install network. Network Handler (request.php) not found.';
return false;
}

if (!file_exists(MAD_PATH. "/modules/network_modules/". $networkid . "/config.xml")){
global $errormessage;
$errormessage='Unable to install network. Network Configuration File (config.xml) not found.';
return false;
}

if (!extension_loaded("SimpleXML")){
global $errormessage;
$errormessage='Unable to install network. Please install the SimpleXML PHP extenstion on this machine.';
return false;
}

$network_config = simplexml_load_file(MAD_PATH. "/modules/network_modules/". $networkid . "/config.xml");


$network_name=addslashes($network_config->name);
$network_pluginversion=$network_config->version;
$network_identifier=$network_config->networkid;
$network_signup=$network_config->signuplink;
$network_info=addslashes($network_config->info_content);
$network_banner=$network_config->banner_support;
$network_interstitial=$network_config->interstitial_support;

if ($networkid!=$network_identifier){
global $errormessage;
$errormessage='Unable to install network. Network Identifier in config.xml does not match directory name.';
return false;
}

if (count ($network_config->pub_ids->pubid)>4){
global $errormessage;
$errormessage='Unable to install network. Too many pubids given. Config file should include a maximum of 4 Publisher ID Types.';
return false;
}

if ($network_identifier=='MOBFOX'){
	$aa=1; } else {
	$aa=0;	
	}

global $maindb;

mysql_query("INSERT INTO md_networks (network_name, network_identifier, network_d1_name, network_d2_name, network_d3_name, network_d4_name, signup_url, info_content, banner_support, interstitial_support, network_auto_approve)
VALUES ('$network_name', '$network_identifier', '".$network_config->pub_ids->pubid[0]."', '".$network_config->pub_ids->pubid[1]."', '".$network_config->pub_ids->pubid[2]."', '".$network_config->pub_ids->pubid[3]."', '$network_signup', '$network_info', '$network_banner', '$network_interstitial', '".$aa."')", $maindb);



global $successmessage;
$successmessage='Network successfully installed.';
return true;



/*foreach($network_config->pub_ids->pubid as $publisher_id_title){ 
echo $publisher_id_title;
}*/

	
}

function uninstall_network($networkid){
	
if (!check_network_installed($networkid)){
global $errormessage;
$errormessage='This network does not seem to be installed. Unable to remove network.';
return false;
}

global $maindb;

$network_numeric_id=get_network_id($networkid);

mysql_query("DELETE from md_networks where network_identifier='$networkid'", $maindb);

/* Delete Network Campaigns*/
$campred=mysql_query("SELECT * FROM md_campaigns WHERE campaign_type='network' AND campaign_networkid='".$network_numeric_id."'", $maindb);
while($camp_det=mysql_fetch_array($campred)){
delete_campaign($camp_det['campaign_id']);
}


/*TODO: Delete Network Allocations*/
mysql_query("UPDATE md_zones set backfill_alt_1='' where backfill_alt_1='".$network_numeric_id."'", $maindb);
mysql_query("UPDATE md_zones set backfill_alt_2='' where backfill_alt_2='".$network_numeric_id."'", $maindb);
mysql_query("UPDATE md_zones set backfill_alt_3='' where backfill_alt_3='".$network_numeric_id."'", $maindb);

global $successmessage;
$successmessage='Network successfully removed.';
return true;

return true;
	
}

function delete_campaign($id){
	global $maindb;
	
mysql_query("DELETE from md_campaigns where campaign_id='$id'", $maindb);

mysql_query("DELETE from md_campaign_limit where campaign_id='$id'", $maindb);

mysql_query("DELETE from md_campaign_targeting where campaign_id='$id'", $maindb);

mysql_query("DELETE from md_ad_units where campaign_id='$id'", $maindb);
	
}

function pause_campaign($id){
	global $maindb;

mysql_query("UPDATE md_campaigns set campaign_status='2' where campaign_id='$id'", $maindb);

mysql_query("UPDATE md_ad_units set adv_status='2' where campaign_id='$id'", $maindb);
	
}

function run_campaign($id){
	global $maindb;

mysql_query("UPDATE md_campaigns set campaign_status='1' where campaign_id='$id'", $maindb);

mysql_query("UPDATE md_ad_units set adv_status='1' where campaign_id='$id'", $maindb);
	
}

function pause_adunit($id){
	global $maindb;

mysql_query("UPDATE md_ad_units set adv_status='2' where adv_id='$id'", $maindb);
	
}

function run_adunit($id){
	global $maindb;

mysql_query("UPDATE md_ad_units set adv_status='1' where adv_id='$id'", $maindb);
	
}

function delete_adunit($id){
	global $maindb;
	
mysql_query("DELETE from md_ad_units where adv_id='$id'", $maindb);

}

function get_network_id($networkidentifier){
global $maindb;
$networkidres=mysql_query("select entry_id, network_identifier from md_networks where network_identifier='$networkidentifier'", $maindb);
$network_detail=mysql_fetch_array($networkidres);
return $network_detail['entry_id'];
}

function add_trafficrequest_targeting($request_id, $targeting_type, $targeting_content){
global $maindb;
mysql_query("INSERT INTO md_trafficrequests_parameters (request_id, parameter_id, parameter_value)
VALUES ('$request_id', '$targeting_type', '$targeting_content')", $maindb);
}


function update_traffic_requests(){
global $maindb;

/*Build Request*/

// Include the Http Class
require_once MAD_PATH . '/modules/http/class.http.php';


// Instantiate it
$http = new Http();

$http->addParam('last'   , getconfig_var('last_tafficrequest_id'));
$http->addParam('uid'   , getconfig_var('mobfox_uid'));

$campred=mysql_query("SELECT * FROM md_networks WHERE network_auto_approve='1'", $maindb);
while($network_detail=mysql_fetch_array($campred)){

$http->addParam(''.$network_detail['network_identifier'].'_autoapprove'   , '1');

if ($network_detail['network_aa_min']==1){
$http->addParam(''.$network_detail['network_identifier'].'_autoapprove_min_cpc'   , $network_detail['network_aa_min_cpc']);
$http->addParam(''.$network_detail['network_identifier'].'_autoapprove_min_cpm'   , $network_detail['network_aa_min_cpm']);
}

}

$http->execute('http://network.madserve.org/api_request.php');

if ($http->error){
return false;
}

$xml_trafficrequest = new SimpleXmlElement($http->result, LIBXML_NOCDATA);

foreach ($xml_trafficrequest->request as $traffic_request){
$trafficrequest_id = $traffic_request['id'];
$trafficrequest_network = $traffic_request['network'];
$trafficrequest_rate_type = $traffic_request['rate_type'];
$trafficrequest_rate = $traffic_request['rate_content'];
$trafficrequest_priority = $traffic_request['priority'];
$trafficrequest_campaign_start = $traffic_request['campaign_start'];
$trafficrequest_campaign_end = $traffic_request['campaign_end'];
$trafficrequest_autoapprove = $traffic_request->autoapprove;

$trafficrequest_targeting_maindevice = $traffic_request->targeting['main_device'];
$trafficrequest_targeting_iphone = $traffic_request->targeting['iphone'];
$trafficrequest_targeting_ipod = $traffic_request->targeting['ipod'];
$trafficrequest_targeting_ipad = $traffic_request->targeting['ipad'];
$trafficrequest_targeting_android = $traffic_request->targeting['android'];
$trafficrequest_targeting_other = $traffic_request->targeting['other'];
$trafficrequest_targeting_ios_version_min = $traffic_request->targeting['ios_version_min'];
$trafficrequest_targeting_ios_version_max = $traffic_request->targeting['ios_version_max'];
$trafficrequest_targeting_android_version_min = $traffic_request->targeting['android_version_min'];
$trafficrequest_targeting_android_version_max = $traffic_request->targeting['android_version_max'];

if (check_network_installed($trafficrequest_network)){ // START INSERT TRAFFIC REQUEST

$received_ts=time();

// Insert Campaign into DB
mysql_query("INSERT INTO md_trafficrequests (request_id, network_id, network_identifier, request_status, request_pricing_type, request_pricing, request_priority, request_received_timestamp, request_sent_timestamp, request_expiration, request_autoapproved, campaign_name, campaign_desc, campaign_start, campaign_end, target_iphone, target_ipod, target_ipad, target_android, target_other, ios_version_min, ios_version_max, android_version_min, android_version_max, device_target)
VALUES ('$trafficrequest_id', '', '$trafficrequest_network', '0', '$trafficrequest_rate_type', '$trafficrequest_rate', '$trafficrequest_priority', '$received_ts', '', '$trafficrequest_campaign_end', '$trafficrequest_autoapprove', '', '', '$trafficrequest_campaign_start', '$trafficrequest_campaign_end', '$trafficrequest_targeting_iphone', '$trafficrequest_targeting_ipod', '$trafficrequest_targeting_ipad', '$trafficrequest_targeting_android', '$trafficrequest_targeting_other', '$trafficrequest_targeting_ios_version_min', '$trafficrequest_targeting_ios_version_max', '$trafficrequest_targeting_android_version_min', '$trafficrequest_targeting_android_version_max', '$trafficrequest_targeting_maindevice')", $maindb);
global $created_request_id;
$created_request_id=mysql_insert_id($maindb);
	
	

foreach ($traffic_request->targeting->geo_targeting->value as $geo_targeting_code){
/*Add GEO Targeting*/
add_trafficrequest_targeting($created_request_id, 'geo', $geo_targeting_code);

}

foreach ($traffic_request->targeting->channel_targeting->value as $channel_targeting_code){
/*Add Channel Targeting*/
add_trafficrequest_targeting($created_request_id, 'channel', $channel_targeting_code);
}

if ($trafficrequest_autoapprove==1){
approve_trafficrequest($created_request_id);	
}




 
} // END INSERT TRAFFIC REQUEST


update_configvar('last_tafficrequest_id', $trafficrequest_id);
}

update_configvar('last_trafficrequest_update', time());
	
}
//update_traffic_requests(); exit;

function approve_trafficrequest($request_id){
api_trafficrequest_cb($request_id, 'accept');

if (get_tr_status($request_id)==1){
global $errormessage;
$errormessage='This traffic request has already been approved.';
return false;	
}

$main_trafficrequest_detail=get_tr_detail($request_id);


if (!check_network_installed($main_trafficrequest_detail['network_identifier'])){
global $errormessage;
$errormessage='This ad network does not seem to be installed.';
return false;	
}

$ad_network_detail=get_network_detail_by_identifier($main_trafficrequest_detail['network_identifier']);

$campaigndata['campaign_type']='network';
$campaigndata['campaign_networkid']=$ad_network_detail['entry_id'];
$campaigndata['campaign_priority']=$main_trafficrequest_detail['request_priority'];
$campaigndata['campaign_name']='Traffic Request ' . $ad_network_detail['network_name'] . ' #' . $main_trafficrequest_detail['request_id'];
$campaigndata['campaign_desc']='This is a campaign automatically created through approving traffic request ' . ' #' . $main_trafficrequest_detail['request_id'] . '(Network: ' . $ad_network_detail['network_name'] . ')';
$campaigndata['start_date_type']=2;
$campaigndata['end_date_type']=2;

// Start Date
$start_date=explode('-',$main_trafficrequest_detail['campaign_start']);
$start_date_array['month']=$start_date[2];
$start_date_array['day']=$start_date[1];
$start_date_array['year']=$start_date[0];
$campaigndata['startdate_value']=$start_date_array['day'] . '/' . $start_date_array['month'] . '/' . $start_date_array['year'];

// Start Date
$end_date=explode('-',$main_trafficrequest_detail['campaign_end']);
$end_date_array['month']=$end_date[2];
$end_date_array['day']=$end_date[1];
$end_date_array['year']=$end_date[0];
$campaigndata['enddate_value']=$end_date_array['day'] . '/' . $end_date_array['month'] . '/' . $end_date_array['year'];


// Geo Targeting
$geo_array=load_tr_geo_array($request_id);

if (count($geo_array)>0){
$campaigndata['geo_targeting']=2;

$campaigndata['as_values_1']='';

foreach($geo_array as $country_id) {

$campaigndata['as_values_1'] = $campaigndata['as_values_1'] . $country_id . ',';

}

}
else {
$campaigndata['geo_targeting']=1;
}

// Geo Targeting End

// Channel Targeting
$channel_array=load_tr_channel_array($request_id);

if (count($channel_array)>0){
$campaigndata['channel_targeting']=2;
$campaigndata['channel_select']=$channel_array;
}
else {
$campaigndata['channel_targeting']=1;
}

// Channel Targeting End

// Default: All Publications
$campaigndata['publication_targeting']=1;

// Device Targeting

if ($main_trafficrequest_detail['device_target']==2){
$campaigndata['device_targeting']=2;
$campaigndata['target_iphone']=$main_trafficrequest_detail['target_iphone'];
$campaigndata['target_ipod']=$main_trafficrequest_detail['target_ipod'];
$campaigndata['target_ipad']=$main_trafficrequest_detail['target_ipad'];
$campaigndata['target_android']=$main_trafficrequest_detail['target_android'];
$campaigndata['target_other']=$main_trafficrequest_detail['target_other'];

$campaigndata['ios_version_min']=$main_trafficrequest_detail['ios_version_min'];
$campaigndata['ios_version_max']=$main_trafficrequest_detail['ios_version_max'];
$campaigndata['android_version_min']=$main_trafficrequest_detail['android_version_min'];
$campaigndata['android_version_max']=$main_trafficrequest_detail['android_version_max'];

}
else { 
$campaigndata['device_targeting']=1;
}

// End: Device Targeting

if (!do_create('campaign', $campaigndata, '')){
global $errormessage;
$errormessage='Fatal Error: Unable to create campaign.';
return false;	
}

update_tr_status($request_id, 1);

global $successmessage;
$successmessage='Successfully approved traffic request.';
return true;	
	
}

function decline_trafficrequest($request_id){
api_trafficrequest_cb($request_id, 'decline');

if (get_tr_status($request_id)==2){
global $errormessage;
$errormessage='This traffic request is already declined.';
return false;	
}

update_tr_status($request_id, 2);

global $successmessage;
$successmessage='Successfully declined traffic request.';
return false;	

	
}

function get_total_open_tr(){
global $maindb;
$totalopen=mysql_num_rows(mysql_query("SELECT * FROM md_trafficrequests WHERE request_status='0' AND request_expiration>'".date("Y-m-d")."'", $maindb));
return $totalopen;
}

function get_traffic_requests($type){
	global $maindb;
	
if ($type=='list'){
	
$campred=mysql_query("SELECT * FROM md_trafficrequests ORDER BY entry_id DESC", $maindb);
while($request_detail=mysql_fetch_array($campred)){
	
$network_detail = get_network_detail_by_id($request_detail['network_identifier']);

switch ($request_detail['request_priority']){
case 1:	
$request_priority='Lowest';
break;

case 2:	
$request_priority='Low';
break;

case 3:	
$request_priority='Medium';
break;

case 4:	
$request_priority='High';
break;

case 5:	
$request_priority='Highest';
break;
	
}

switch ($request_detail['request_status']){
case 0:	
$request_statustext='Pending';
$st_color='FF9900';
break;

case 1:	
$request_statustext='Accepted';
$st_color='009900';
break;

case 2:	
$request_statustext='Declined';
$st_color='993300';
break;
}

if ($request_detail['request_status']==1 && $request_detail['request_autoapproved']==1){
$request_statustext='Accepted (Auto-Approve)';
}

if (($request_statustext=='Pending' or $request_statustext=='Declined') && $request_detail['request_expiration']<=date("Y-m-d")){
$request_statustext='Expired';
$st_color='000000';
}


$add_geos='';

		
$geo_echo = array();

$geoparamres=mysql_query("select * from md_trafficrequests_parameters where parameter_id='geo' and request_id='".$request_detail['entry_id']."'", $maindb);
while($add_geo_detail=mysql_fetch_array($geoparamres)){
	

array_push($geo_echo, targeting_code_to_country($add_geo_detail['parameter_value']));

}

$add_geos='Geo Targeting: '.pc_array_to_comma_string($geo_echo).'';


$add_devices='';

if ($request_detail['device_target']==2){
	
									$device_echo = array();
									if ($request_detail['target_iphone']==1){
									array_push($device_echo, 'iPhone');
									}
									if ($request_detail['target_ipod']==1){
									array_push($device_echo, 'iPod');
									}
									if ($request_detail['target_ipad']==1){
									array_push($device_echo, 'iPad');
									}
									if ($request_detail['target_android']==1){
									array_push($device_echo, 'Android');
									}
									if ($request_detail['target_other']==1){
									array_push($device_echo, 'other Devices');
									}
									if ($request_detail['ios_version_min']>0){
									array_push($device_echo, 'iOS minimum: '.$request_detail['ios_version_min'].'');
									}
									if ($request_detail['ios_version_max']>0){
									array_push($device_echo, 'iOS maximum: '.$request_detail['ios_version_max'].'');
									}
									if ($request_detail['android_version_min']>0){
									array_push($device_echo, 'Android OS minimum: '.$request_detail['android_version_min'].'');
									}
									if ($request_detail['android_version_max']>0){
									array_push($device_echo, 'Android OS maximum: '.$request_detail['android_version_max'].'');
									}
									
									$add_devices=' | Device Targeting: '.pc_array_to_comma_string($device_echo).'';

									}
									
									else {
									$add_devices=' | All Devices';
									}
									
	
echo '<tr class="gradeA">
								<td>'.$request_detail['request_id'].'</td>
								<td class="center"><div align=center>'.$network_detail['network_name'].'</div></td>
								<td class="center"><div style="color:#'.$st_color.'" align=center>'.$request_statustext.'</div></td>
								<td class="center"><div align=center><a class="tooltip" href="#" title="'.$add_geos.''.$add_devices.'">Show Targeting</a></div></td>
								<td class="center"><div align=center>'.$request_detail['request_pricing_type'].': $'.$request_detail['request_pricing'].'</div></td>
								<td class="center"><div align=center>'.$request_detail['campaign_start'].' - '.$request_detail['campaign_end'].'</div></td>
								<td class="center"><div align=center>'.date("m/d/Y G:i:s", $request_detail['request_received_timestamp']).'</div></td>';
								echo '<td class="center">';
								if (($request_detail['request_status']==0 or $request_detail['request_status']==2) && $request_detail['request_expiration']>date("Y-m-d")){
								echo '<span class="ticket ticket-success"><a href="traffic_requests.php?action=approve&id='.$request_detail['entry_id'].'" style="color:#FFF; text-decoration:none;">Accept</a></span>';
								}
								if ($request_detail['request_status']==0 && $request_detail['request_expiration']>date("Y-m-d")){
								echo '&nbsp;<span class="ticket ticket-important"><a href="traffic_requests.php?action=decline&id='.$request_detail['entry_id'].'" style="color:#FFF; text-decoration:none;">Decline</a></span>';
								}
								echo '</td>';
							echo '</tr>	';
									






																	
								
								
	
}


}
	
if ($type=='widget'){
	
$campred=mysql_query("SELECT * FROM md_trafficrequests WHERE request_status='0' AND request_expiration>'".date("Y-m-d")."' ORDER BY entry_id DESC LIMIT 3", $maindb);
while($request_detail=mysql_fetch_array($campred)){
	
$network_detail = get_network_detail_by_id($request_detail['network_identifier']);

$log_seconds_ago=time()-$request_detail['request_received_timestamp'];
$time_ago=duration($log_seconds_ago);


switch ($request_detail['request_priority']){
case 1:	
$request_priority='Lowest';
break;

case 2:	
$request_priority='Low';
break;

case 3:	
$request_priority='Medium';
break;

case 4:	
$request_priority='High';
break;

case 5:	
$request_priority='Highest';
break;
	
}
	
echo '<div class="qnc_item">
								<div class="qnc_content">
									<span class="qnc_title">'.$network_detail['network_name'].' #'.$request_detail['request_id'].'</span>';
									
$getpubtyperes=mysql_query("select * from md_trafficrequests_parameters where parameter_id='geo' and request_id='".$request_detail['entry_id']."' LIMIT 1", $maindb);
$main_geo_detail=mysql_fetch_array($getpubtyperes);

$main_geo=targeting_code_to_country($main_geo_detail['parameter_value']);

$total_geos=mysql_num_rows(mysql_query("select * from md_trafficrequests_parameters where parameter_id='geo' and request_id='".$request_detail['entry_id']."'", $maindb));

$add_geos='';

if ($total_geos>1){
		
$geo_echo = array();
$geo_left = $total_geos - 1;

$geoparamres=mysql_query("select * from md_trafficrequests_parameters where parameter_id='geo' and request_id='".$request_detail['entry_id']."'", $maindb);
while($add_geo_detail=mysql_fetch_array($geoparamres)){
	

array_push($geo_echo, targeting_code_to_country($add_geo_detail['parameter_value']));

}

$add_geos=' & <a class="tooltip" href="#" title="'.pc_array_to_comma_string($geo_echo).'">'.$geo_left.' other countries</a>';

}






									
									echo '<span class="qnc_preview">'.$main_geo.' '.$add_geos.'</span>';
									
									if ($request_detail['device_target']==1){
									echo '<span class="qnc_preview">All Devices</span>';
									}
									else if ($request_detail['device_target']==2){
									$device_echo = array();
									if ($request_detail['target_iphone']==1){
									array_push($device_echo, 'iPhone');
									}
									if ($request_detail['target_ipod']==1){
									array_push($device_echo, 'iPod');
									}
									if ($request_detail['target_ipad']==1){
									array_push($device_echo, 'iPad');
									}
									if ($request_detail['target_android']==1){
									array_push($device_echo, 'Android');
									}
									if ($request_detail['target_other']==1){
									array_push($device_echo, 'other Devices');
									}
									if ($request_detail['ios_version_min']>0){
									array_push($device_echo, 'iOS minimum: '.$request_detail['ios_version_min'].'');
									}
									if ($request_detail['ios_version_max']>0){
									array_push($device_echo, 'iOS maximum: '.$request_detail['ios_version_max'].'');
									}
									if ($request_detail['android_version_min']>0){
									array_push($device_echo, 'Android OS minimum: '.$request_detail['android_version_min'].'');
									}
									if ($request_detail['android_version_max']>0){
									array_push($device_echo, 'Android OS maximum: '.$request_detail['android_version_max'].'');
									}


									echo '<span class="qnc_preview"><a class="tooltip" href="#" title="'.pc_array_to_comma_string($device_echo).'">View Device Targeting</a></span>';
									}
									
									if (!empty($request_detail['request_pricing_type']) && is_numeric($request_detail['request_pricing'])){
									echo '<span class="qnc_preview">'.$request_detail['request_pricing_type'].': $'.$request_detail['request_pricing'].'</span>';
									}
									echo '<span class="qnc_preview">'.$request_detail['campaign_start'].' - '.$request_detail['campaign_end'].'</span>';
									echo '<span class="qnc_time">'.$time_ago.' ago - Priority: '.$request_priority.'</span>';
									
									
								echo '</div> <!-- .qnc_content -->
								
								<div class="qnc_actions">						
									<button onclick="window.location=\'traffic_requests.php?action=approve&id='.$request_detail['entry_id'].'\'" class="btn btn-primary btn-small">Accept</button>
									<button onclick="window.location=\'traffic_requests.php?action=decline&id='.$request_detail['entry_id'].'\'" class="btn btn-quaternary btn-small">&nbsp;Decline&nbsp;</button>
								</div>
							</div>';
	
}

	
}
	
}

function targeting_code_to_country($code){
global $maindb;
$getpubtyperes=mysql_query("select * from md_regional_targeting where targeting_code='$code'", $maindb);
$tarreg_detail=mysql_fetch_array($getpubtyperes);
return $tarreg_detail['region_name'];
}

function pc_array_to_comma_string($array) {

    switch (count($array)) {
    case 0:
        return '';

    case 1:
        return reset($array);
    
    case 2:
        return join(' and ', $array);

    default:
        $last = array_pop($array);
        return join(', ', $array) . ", and $last";
    }
}


function api_trafficrequest_cb($id, $type){
	
if (getconfig_var('allow_statistical_info')!=1){
return true;	
}

// Include the Http Class
require_once MAD_PATH . '/modules/http/class.http.php';


// Instantiate it
$http = new Http();

$http->setMethod('GET');

$http->addParam('install_id'   , getconfig_var('installation_id'));
$http->addParam('requestid'   , get_actual_tr_id($id));
$http->addParam('status'   , $type);

$http->execute('http://network.madserve.org/request_accept.php');

if ($http->error){
return false;
}

return true;

	
}

function get_tr_status($id){
global $maindb;	
$request_detail_res=mysql_query("select request_status from md_trafficrequests where entry_id='$id'", $maindb);
$request_detail=mysql_fetch_array($request_detail_res);
return $request_detail['request_status'];
}

function get_tr_detail($id){
global $maindb;	
$request_detail_res=mysql_query("select * from md_trafficrequests where entry_id='$id'", $maindb);
$request_detail=mysql_fetch_array($request_detail_res);
return $request_detail;
}

function get_network_detail_by_identifier($identifier){
global $maindb;	
$network_detail_res=mysql_query("select * from md_networks where network_identifier='$identifier'", $maindb);
$network_detail=mysql_fetch_array($network_detail_res);
return $network_detail;
}



function update_tr_status($id, $status){
global $maindb;	
mysql_query("UPDATE md_trafficrequests set request_status='$status' where entry_id='$id'", $maindb);
return true;
}

function load_tr_geo_array($id){
global $maindb;
$geo_array=array();
$usrres=mysql_query("select parameter_value from md_trafficrequests_parameters where request_id='$id' and parameter_id='geo'", $maindb);
while($targeting_detail=mysql_fetch_array($usrres)){
array_push($geo_array, $targeting_detail['parameter_value']);
}
return $geo_array;
}

function load_tr_channel_array($id){
global $maindb;
$channel_array=array();
$usrres=mysql_query("select parameter_value from md_trafficrequests_parameters where request_id='$id' and parameter_id='channel'", $maindb);
while($targeting_detail=mysql_fetch_array($usrres)){
array_push($channel_array, $targeting_detail['parameter_value']);
}
return $channel_array;
}

function get_actual_tr_id($id){
global $maindb;	
$request_detail_res=mysql_query("select request_id from md_trafficrequests where entry_id='$id'", $maindb);
$request_detail=mysql_fetch_array($request_detail_res);
return $request_detail['request_id'];
}

function get_pubid_fixed($network, $default, $publication_id, $zone_id, $pid_type){
$pid_query='p_'.$pid_type.'';
$p_query='';
$z_query='';

switch ($default){
case 1:
$m_query="WHERE config_type='default'";
break;

default :	
$m_query="WHERE config_type!='default'";
break;
}

if (is_numeric($publication_id)){
$p_query="AND publication_id=".$publication_id."";
}
else {
$p_query="AND publication_id=''";
}

if (is_numeric($zone_id)){
$z_query="AND zone_id=".$zone_id."";
}
else {
$z_query="AND zone_id=''";
}

$f_query="SELECT ".$pid_query." FROM md_network_config ".$m_query." AND network_id='".$network."' ".$p_query." ".$z_query."";

global $maindb;

$pubid_res=mysql_query($f_query, $maindb);
$publisher_id_detail=mysql_fetch_array($pubid_res);
return $publisher_id_detail['p_'.$pid_type.''];
}

function get_pubid_table($networkid, $publication_id){

$network_detail=get_network_detail($networkid);

echo '<table class="table table-bordered table-striped">
						<thead>
							<tr>
							
								<th><div align="center">Type</div></th>';
								if (!empty($network_detail['network_d1_name'])){
								echo '<th><div align="center">'.$network_detail['network_name'].' '.$network_detail['network_d1_name'].'</div></th>';
								}
								if (!empty($network_detail['network_d2_name'])){
								echo '<th><div align="center">'.$network_detail['network_name'].' '.$network_detail['network_d2_name'].'</div></th>';
								}
								if (!empty($network_detail['network_d3_name'])){
								echo '<th><div align="center">'.$network_detail['network_name'].' '.$network_detail['network_d3_name'].'</div></th>';
								}
								if (!empty($network_detail['network_d4_name'])){
								echo '<th><div align="center">'.$network_detail['network_name'].' '.$network_detail['network_d4_name'].'</div></th>';
								}
								
							echo '</tr>
						</thead>
						<tbody>';
						
						echo '<tr class="gradeA">
								<td valign="middle"><div style="margin-top:4px;" align="center"><em>Default</em> <a href="#" onclick="$.modal ({title: \'Publisher ID Types\', html: \'<div style=width:500px;;>mAdserve requests ads directly from the respective ad network over an API connection. Since mAdserve is not a middle-man, you need to have an account at the ad network you would like to use in order to start driving revenue through it. Your ad network earnings will be paid directly by the ad network you choose to use.<br><br><h2>Setting up Publisher IDs</h2>Each network requires a different set of Publisher identifers. Inside mAdserve, you can add Publisher IDs on a Global Default Level, Publication Level and Placement Level. This means that you can either use just one single default Publisher ID for requesting ads from an ad network, or use different Publisher IDs depending on what Publication or Placement the ad is being shown in.<br><br><h2>Where can I find my Publisher ID?</h2>This depends on the network you are using. Usually, your network will show your Publisher ID when you add a site/app in your network account. If you are unsure about where you can find Publisher IDs, please contact the ad network you are using for assistance.<br><br><h2>How can I add Publisher IDs on a placement level?</h2>You can add/modify your Publisher IDs on a Placement Level by clicking on the small + link next to the name of your Publication. If there are no Publisher IDs provided for a single placement, mAdserve will automatically use the Publication or Network Default Publisher IDs for the ad request.\'});">Info</a></div></td>';
								if (!empty($network_detail['network_d1_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="default-1" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d1_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 1, $publication_id, '', 1).'" type="text"></div></td>';
								}
								if (!empty($network_detail['network_d2_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="default-2" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d2_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 1, $publication_id, '', 2).'" type="text"></div></td>';
								}
								if (!empty($network_detail['network_d3_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="default-3" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d3_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 1, $publication_id, '', 3).'" type="text"></div></td>';
								}
								if (!empty($network_detail['network_d4_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="default-4" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d4_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 1, $publication_id, '', 4).'" type="text"></div></td>';
								}

							
								
							echo '</tr>	';
							
global $maindb;

if (!is_numeric($publication_id)){
							
$publication_res=mysql_query("select * from md_publications ORDER BY inv_id DESC", $maindb);
while($publication_detail=mysql_fetch_array($publication_res)){
echo '<tr class="gradeA">
								<td valign="middle"><div style="margin-top:4px; text-align:center;">'.$publication_detail['inv_name'].' <a  href="network_id_setup.php?id='.$network_detail['entry_id'].'&pid='.$publication_detail['inv_id'].'" >+</a></div></td>';
								if (!empty($network_detail['network_d1_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="'.$publication_detail['inv_id'].'-1" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d1_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 1, $publication_detail['inv_id'], '', 1).'" type="text"></div></td>';
								}
								if (!empty($network_detail['network_d2_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="'.$publication_detail['inv_id'].'-2" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d2_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 1, $publication_detail['inv_id'], '', 2).'" type="text"></div></td>';
								}
								if (!empty($network_detail['network_d3_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="'.$publication_detail['inv_id'].'-3" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d3_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 1, $publication_detail['inv_id'], '', 3).'" type="text"></div></td>';
								}
								if (!empty($network_detail['network_d4_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="'.$publication_detail['inv_id'].'-4" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d4_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 1, $publication_detail['inv_id'], '', 4).'" type="text"></div></td>';
								}
								
							echo '</tr>	';
}

}
else {

$publication_res=mysql_query("select entry_id, zone_name from md_zones where publication_id='".$publication_id."' ORDER BY entry_id ASC", $maindb);
while($zone_detail=mysql_fetch_array($publication_res)){
echo '<tr class="gradeA">
								<td valign="middle"><div style="margin-top:4px; text-align:center;">'.$zone_detail['zone_name'].'</div></td>';
								if (!empty($network_detail['network_d1_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="'.$zone_detail['entry_id'].'-1" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d1_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 0, $publication_id, $zone_detail['entry_id'], 1).'" type="text"></div></td>';
								}
								if (!empty($network_detail['network_d2_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="'.$zone_detail['entry_id'].'-2" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d2_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 0, $publication_id, $zone_detail['entry_id'], 2).'" type="text"></div></td>';
								}
								if (!empty($network_detail['network_d3_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="'.$zone_detail['entry_id'].'-3" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d3_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 0, $publication_id, $zone_detail['entry_id'], 3).'" type="text"></div></td>';
								}
								if (!empty($network_detail['network_d4_name'])){
								echo '<td class="center"><div align="center"><input style="width:80%;" name="'.$zone_detail['entry_id'].'-4" placeholder="Enter '.$network_detail['network_name'].' '.$network_detail['network_d4_name'].'..." value="'.get_pubid_fixed($network_detail['network_identifier'], 0, $publication_id, $zone_detail['entry_id'], 4).'" type="text"></div></td>';
								}
								
							echo '</tr>	';
	
}
}

			
echo '</tbody>
					</table>';

	
}

function update_publisher_ids($data, $networkid, $publication_id){
global $maindb;

if (!isset($data['default-1'])){$data['default-1']='';}
if (!isset($data['default-2'])){$data['default-2']='';}
if (!isset($data['default-3'])){$data['default-3']='';}
if (!isset($data['default-4'])){$data['default-4']='';}



if (!is_numeric($networkid)){
return false;
}

$network_detail=get_network_detail($networkid);

if (!is_numeric($publication_id)){
	
update_publisher_id(1, $network_detail['network_identifier'], '', '', $data['default-1'], $data['default-2'], $data['default-3'], $data['default-4']);

$publication_res=mysql_query("select * from md_publications ORDER BY inv_id DESC", $maindb);
while($publication_detail=mysql_fetch_array($publication_res)){
	
if (!isset($data[''.$publication_detail['inv_id'].'-1'])){$data[''.$publication_detail['inv_id'].'-1']='';}
if (!isset($data[''.$publication_detail['inv_id'].'-2'])){$data[''.$publication_detail['inv_id'].'-2']='';}
if (!isset($data[''.$publication_detail['inv_id'].'-3'])){$data[''.$publication_detail['inv_id'].'-3']='';}
if (!isset($data[''.$publication_detail['inv_id'].'-4'])){$data[''.$publication_detail['inv_id'].'-4']='';}


update_publisher_id(1, $network_detail['network_identifier'], $publication_detail['inv_id'], '', $data[''.$publication_detail['inv_id'].'-1'], $data[''.$publication_detail['inv_id'].'-2'], $data[''.$publication_detail['inv_id'].'-3'], $data[''.$publication_detail['inv_id'].'-4']);

}
	
}

else {

update_publisher_id(1, $network_detail['network_identifier'], $publication_id, '', $data['default-1'], $data['default-2'], $data['default-3'], $data['default-4']);

$publication_res=mysql_query("select entry_id, zone_name from md_zones where publication_id='".$publication_id."' ORDER BY entry_id ASC", $maindb);
while($zone_detail=mysql_fetch_array($publication_res)){
	
if (!isset($data[''.$zone_detail['entry_id'].'-1'])){$data[''.$zone_detail['entry_id'].'-1']='';}
if (!isset($data[''.$zone_detail['entry_id'].'-2'])){$data[''.$zone_detail['entry_id'].'-2']='';}
if (!isset($data[''.$zone_detail['entry_id'].'-3'])){$data[''.$zone_detail['entry_id'].'-3']='';}
if (!isset($data[''.$zone_detail['entry_id'].'-4'])){$data[''.$zone_detail['entry_id'].'-4']='';}
	
update_publisher_id(0, $network_detail['network_identifier'], $publication_id, $zone_detail['entry_id'], $data[''.$zone_detail['entry_id'].'-1'], $data[''.$zone_detail['entry_id'].'-2'], $data[''.$zone_detail['entry_id'].'-3'], $data[''.$zone_detail['entry_id'].'-4']);

}

}

return true;

}

function update_publisher_id($default, $networkid, $publication_id, $zone_id, $v1, $v2, $v3, $v4){
global $maindb;

$v1=sanitize($v1);
$v2=sanitize($v2);
$v3=sanitize($v3);
$v4=sanitize($v4);

switch ($default){
case 1:
$m_query="WHERE config_type='default'";
$insert_default='default';
break;

default :	
$m_query="WHERE config_type!='default'";
$insert_default='';
break;
}

if (is_numeric($publication_id)){
$p_query="AND publication_id=".$publication_id."";
}
else {
$p_query="AND publication_id=''";
}

if (is_numeric($zone_id)){
$z_query="AND zone_id=".$zone_id."";
}
else {
$z_query="AND zone_id=''";
}

$f_query="SELECT entry_id FROM md_network_config ".$m_query." AND network_id='".$networkid."' ".$p_query." ".$z_query."";


$pubid_res=mysql_query($f_query, $maindb);
$publisher_id_detail=mysql_fetch_array($pubid_res);

if ($publisher_id_detail['entry_id']>0){
		
mysql_query("UPDATE md_network_config set p_1='$v1', p_2='$v2', p_3='$v3', p_4='$v4' ".$m_query." AND network_id='".$networkid."' ".$p_query." ".$z_query."", $maindb);	

}
else {
	
/*Define Priority*/
if ($default==1 && !is_numeric($publication_id)){
$priority=1;	
}
else if ($default==1 && is_numeric($publication_id)){
$priority=2;	
}
else {
$priority=3;	
}
	
mysql_query("INSERT INTO md_network_config (config_type, publication_id, zone_id, network_id, p_1, p_2, p_3, p_4, priority)
VALUES ('".$insert_default."', '".$publication_id."', '".$zone_id."', '".$networkid."', '".$v1."', '".$v2."', '".$v3."', '".$v4."', '".$priority."')", $maindb);
	
}


	
}

function mfconcheck($mf_uid, $mf_pass, $hardcheck){

// Include the Http Class
require_once MAD_PATH . '/modules/http/class.http.php';


// Instantiate it
$http = new Http();

$http->addParam('action'   , 'account_check');
$http->addParam('uid'   , $mf_uid);
$http->addParam('pass'   , $mf_pass);

$http->execute('http://api.mobfox.com/api_madserve.php');

if ($http->error){
return false;
}

if ($hardcheck==1){
	if (!strstr($http->result, '[ok]')){
return false;
	}
	else {
	return true;	
	}
	
}

if (strstr($http->result, '[check-failed]')){
return false;	
}
else {
return true;	
}

}

function mf_prelogin_check(){
	
$time_since_last_mf_check=time()-getconfig_var('last_mf_check');
if ($time_since_last_mf_check>=MAD_MFCHECK_INTERVAL_DASHBOARD or !is_numeric(getconfig_var('last_mf_check'))){
	if (!mfconcheck(getconfig_var('mobfox_uid'), getconfig_var('mobfox_password'), 0)){
		MAD_Admin_Redirect::redirect('settings_mfconnect.php?failed=1');
		exit;
	}
	else {
	update_configvar('last_mf_check', time());
	}

}

}

function mf_add_publication_layer($zone_id, $addqueue){
	
if (!mf_add_publication_call($zone_id)){
if ($addqueue==1){
add_pending_action('mf_add_publication', $zone_id);
}
return false;
}
else {
return true;	
}
	
}

function add_pending_action($action_type, $action_content){
	
	
global $maindb;

mysql_query("INSERT INTO md_pending_actions (action_id, action_detail)
VALUES ('".$action_type."', '".$action_content."')", $maindb);

return true;

	
}

function mf_add_publication_call($zone_id){
	
$zone_detail=get_zone_detail($zone_id);
$publication_detail=get_publication_detail($zone_detail['publication_id']);

// Include the Http Class
require_once MAD_PATH . '/modules/http/class.http.php';


// Instantiate it
$http = new Http();

$http->addParam('action'   , 'add_publication');
$http->addParam('uid'   , getconfig_var('mobfox_uid'));
$http->addParam('pass'   , getconfig_var('mobfox_password'));
$http->addParam('inv_name'   , $publication_detail['inv_name'] . ' ' . $zone_detail['zone_name']);
$http->addParam('inv_desc'   , $publication_detail['inv_description'] . ' ' . $zone_detail['zone_description']);
$http->addParam('inv_url'   , $publication_detail['inv_address']);
$http->addParam('inv_type'   , $publication_detail['inv_type']);
$http->addParam('inv_cat'   , get_zone_channel($zone_id));

$http->execute('http://api.mobfox.com/api_madserve.php');

if ($http->error){
return false;
}

if (!validate_md5($http->result)){
return false;	
}

update_publisher_id(0, 'MOBFOX', $publication_detail['inv_id'], $zone_id, $http->result, '', '', ''); 

return true;
	
	
}

function get_zone_channel($zone_id){
	
$zone_detail=get_zone_detail($zone_id);
$publication_detail=get_publication_detail($zone_detail['publication_id']);

	
if (!is_numeric($zone_detail['zone_channel'])){
return $publication_detail['inv_defaultchannel']; 
} else {
return $zone_detail['zone_channel'];
}
	
}

function validate_md5($hash){
if(!empty($hash) && preg_match('/^[a-f0-9]{32}$/', $hash)){
return true;	
}
else {
return false;	
}
}

function delete_pending_action($id){
global $maindb;
mysql_query("DELETE from md_pending_actions where entry_id='$id'", $maindb);
}


function execute_pending_actions(){
global $maindb;

$action_res=mysql_query("SELECT entry_id, action_id, action_detail FROM md_pending_actions ORDER BY entry_id ASC", $maindb);
while($action_detail=mysql_fetch_array($action_res)){
	
switch($action_detail['action_id']){
case 'mf_add_publication':
if (mf_add_publication_layer($action_detail['action_detail'], 0)){
delete_pending_action($action_detail['entry_id']);
}
break;	
}

}	

update_configvar('last_pendingactions_exec', time());

}

function execute(){
	
if (getconfig_var('last_trafficrequest_update')==''){
	
//path to directory to scan
$directory = MAD_PATH. "/modules/network_modules/";
 
//get all files in specified directory
$files = glob($directory . "*");
 
//print each file name
foreach($files as $file)
{
 //check to see if the file is a folder/directory
 if(is_dir($file))
 {
	 
$network_name = str_replace(MAD_PATH. "/modules/network_modules/", '', $file);
install_network($network_name);

 }
 
}
	
}
	
$time_since_last_tr=time()-getconfig_var('last_trafficrequest_update');
if ($time_since_last_tr>=MAD_TRCHECK_INTERVAL_DASHBOARD or !is_numeric(getconfig_var('last_trafficrequest_update'))){
update_traffic_requests();	
}

$time_since_last_pending_exec=time()-getconfig_var('last_pendingactions_exec');
if ($time_since_last_pending_exec>=MAD_ACTION_EXEC_INTERVAL_DASHBOARD or !is_numeric(getconfig_var('last_pendingactions_exec'))){
execute_pending_actions();	
}

}

if ($mad_install_active!=1){
execute();
}

function check_reporting_post($data){

if ($data['report_type']=='campaign' && !is_numeric($data['reporting_campaign'])){
global $errormessage;
$errormessage='Please select a campaign for your report.';
return false;
}

if ($data['report_type']=='publication' && !is_numeric($data['reporting_publication'])){
global $errormessage;
$errormessage='Please select a publication for your report.';
return false;
}

if ($data['report_type']=='network' && !is_numeric($data['reporting_network'])){
global $errormessage;
$errormessage='Please select a network for your report.';
return false;
}

if ($data['reporting_date']=='custom' && (empty($data['startdate_value']) or empty($data['enddate_value']))){
global $errormessage;
$errormessage='Please select a start and end date for your report.';
return false;
}

return true;
}

function get_rep_limitation_query($data){
	
switch ($data['report_type']){
	
case 'campaign':
if ($data['reporting_campaign']>0){
$limitation_query="WHERE campaign_id='".$data['reporting_campaign']."'";
}
else {
$limitation_query="WHERE campaign_id>0";	
}
break;

case 'publication':
if ($data['reporting_publication']>0){
$limitation_query="WHERE publication_id='".$data['reporting_publication']."'";
}
else {
$limitation_query="WHERE publication_id>0";	
}

break;

case 'network':
if ($data['reporting_network']>0){
$limitation_query="WHERE network_id='".$data['reporting_network']."'";
}
else {
$limitation_query="WHERE network_id>0";	
}
break;


}

return $limitation_query;	

}

function get_rep_date_query($data){
	
switch ($data['reporting_date']){
case 7:	
$reporting_date_query="";
break;

case 1:
$date=date("Y-m-d");
$reporting_date_query="AND date='".$date."'";
break;

case 2:
$date=date("Y-m-d", strtotime("-1 day"));
$reporting_date_query="AND date='".$date."'";
break;

case 3:
$date=date("Y-m-d", strtotime("this week"));
$reporting_date_query="AND date>='".$date."'";
break;

case 4:
$date_l=date("Y-m-d", strtotime("last week"));
$date_t=date("Y-m-d", strtotime("this week"));
$reporting_date_query="AND date>='".$date_l."' AND date<'".$date_t."'";
break;

case 5:
$date=date("Y-m-01");
$reporting_date_query="AND date>='".$date."'";
break;

case 6:
$date_l=date("Y-m-01", strtotime("-1 month"));
$date_t=date("Y-m-01");
$reporting_date_query="AND date>='".$date_l."' AND date<'".$date_t."'";
break;

case 'custom':
$start_date=explode('/',$data['startdate_value']);
$start_date_array['year']=$start_date[2];
$start_date_array['day']=$start_date[1];
$start_date_array['month']=$start_date[0];
$start_date_array['date']="$start_date_array[year]-$start_date_array[month]-$start_date_array[day]";	

$end_date=explode('/',$data['enddate_value']);
$end_date_array['year']=$end_date[2];
$end_date_array['day']=$end_date[1];
$end_date_array['month']=$end_date[0];
$end_date_array['date']="$end_date_array[year]-$end_date_array[month]-$end_date_array[day]";	

$reporting_date_query="AND date>='".$start_date_array['date']."' AND date<='".$end_date_array['date']."'";
break;

}

return $reporting_date_query;
	
}

function get_sorting_identifier($id){

switch($id){
case 1:
$identifier='campaign_id';
break;

case 2:
$identifier='creative_id';
break;

case 3:
$identifier='publication_id';
break;	

case 4:
$identifier='zone_id';
break;	

case 5:
$identifier='monthdate';
break;	

case 6:
$identifier='daydate';
break;	

case 7:
$identifier='network_id';
break;	
	
}

return $identifier;
	
}

function get_sorting_query($data){
	
if ($data['reporting_sort']>0 or $data['reporting_sort2']>0){

$sorts=array();
if ($data['reporting_sort']>0){
array_push($sorts, 	get_sorting_identifier($data['reporting_sort']));
}

if ($data['reporting_sort2']>0){
array_push($sorts, 	get_sorting_identifier($data['reporting_sort2']));
}

$sorting_query='GROUP BY '.implode(', ', $sorts).'';


}
else {
$sorting_query='';
}

return $sorting_query;	

}

function print_summary_widget($data){

if (!MAD_connect_repdb()){
echo "Could not connect to reporting database. Exiting."; exit;	
}
else {
global $repdb;	
}
	
$query='SELECT SUM(total_requests) AS total_requests, SUM(total_requests_sec) AS total_requests_sec, SUM(total_impressions) AS total_impressions, SUM(total_clicks) AS total_clicks, date, publication_id, zone_id, campaign_id, creative_id, network_id FROM md_reporting '.get_rep_limitation_query($data).' '.get_rep_date_query($data).'';


	
$result_report=mysql_query($query, $repdb);
$report_detail=mysql_fetch_array($result_report);

if ($data['report_type']=='network'){
$report_detail['total_requests']=$report_detail['total_requests_sec'];
}


$report_detail['ctr']=@($report_detail['total_clicks']/$report_detail['total_impressions'])*100;
$report_detail['ctr']=number_format($report_detail['ctr'], 2);

$report_detail['fillrate']=@($report_detail['total_impressions']/$report_detail['total_requests'])*100;
$report_detail['fillrate']=number_format($report_detail['fillrate'], 2);

if ($data['report_type']=='campaign'){

echo '<div class="widget widget-plain"> <div class="widget-content">
				
					
							
						
						<div class="dashboard_report defaultState"  style="width:31%">
							<div class="pad">
								<span class="value">'.number_format($report_detail['total_impressions'], 0).'</span> Impressions
							</div> <!-- .pad -->
						</div>
						
						<div class="dashboard_report defaultState" style="width:31%">
							<div class="pad">
								<span class="value">'.number_format($report_detail['total_clicks'], 0).'</span> Clicks
							</div> <!-- .pad -->
						</div>
						
						<div class="dashboard_report defaultState last" style="width:31%">
							<div class="pad">
								<span class="value">'.number_format($report_detail['ctr'], 2).'%</span> CTR
							</div> <!-- .pad -->
						</div>
						
					</div> <!-- .widget-content -->
					
				</div> <!-- .widget -->';
}

if ($data['report_type']=='publication' or $data['report_type']=='network'){
	
	echo '<div class="widget widget-plain"> <div class="widget-content">
				
					<div class="dashboard_report defaultState">
							<div class="pad">
								<span class="value">'.number_format($report_detail['total_requests'], 0).'</span> Requests
							</div> <!-- .pad -->
						</div>
							
						
						<div class="dashboard_report defaultState">
							<div class="pad">
								<span class="value">'.number_format($report_detail['total_impressions'], 0).'</span> Impressions
							</div> <!-- .pad -->
						</div>
						
						<div class="dashboard_report defaultState">
							<div class="pad">
								<span class="value">'.number_format($report_detail['total_clicks'], 0).'</span> Clicks
							</div> <!-- .pad -->
						</div>
						
						
						
						<div  class="dashboard_report defaultState last">
							<div class="pad">
								<span style="font-size:25px;" class="value">'.number_format($report_detail['ctr'], 2).'% / '.number_format($report_detail['fillrate'], 2).'%</span> CTR / Fill Rate
							</div> <!-- .pad -->
						</div>
						
					</div> <!-- .widget-content -->
					
				</div> <!-- .widget -->';
	

	
}


}

function print_graph_widget($data){

if (!MAD_connect_repdb()){
echo "Could not connect to reporting database. Exiting."; exit;	
}
else {
global $repdb;	
}

	
if ($data['reporting_sort']==5){
$group_query='GROUP BY MONTH(date)';
$grouping_type=1;
}
else {
$group_query='GROUP BY DAY(date)';
$grouping_type=2;
}

$query='SELECT SUM(total_requests) AS total_requests, SUM(total_requests_sec) AS total_requests_sec, SUM(total_impressions) AS total_impressions, SUM(total_clicks) AS total_clicks, date, publication_id, zone_id, campaign_id, creative_id, network_id, DAY(date), MONTH(date), YEAR(date) FROM md_reporting '.get_rep_limitation_query($data).' '.get_rep_date_query($data).' '.$group_query.'';
	

$total_requests=array();
$total_impressions=array();
$total_clicks=array();
$current_date=array();


$glistres=mysql_query($query, $repdb);
while($report_detail=mysql_fetch_array($glistres)){
	
if ($data['report_type']=='network'){
$report_detail['total_requests']=$report_detail['total_requests_sec'];
}

array_push($total_requests, $report_detail['total_requests']);
array_push($total_impressions, $report_detail['total_impressions']);
array_push($total_clicks, $report_detail['total_clicks']);

if ($grouping_type==1){
array_push($current_date, $report_detail['MONTH(date)'] . '-' . $report_detail['YEAR(date)']);
} else if ($grouping_type==2){
array_push($current_date, $report_detail['MONTH(date)'] . '-' . $report_detail['DAY(date)'] . '-' . $report_detail['YEAR(date)']);
}

}
	
echo '<div class="widget">
					
						<div class="widget-header">
							<span class="icon-chart"></span>
							<h3 class="icon chart">Summary Chart</h3>		
						</div>
					
						<div class="widget-content">
							<table class="stats" data-chart-type="line" data-chart-colors="">

							<thead>
										<tr>
											<td>&nbsp;</td>';
											
											
											foreach ($current_date as $date){
												echo '<th>'.str_replace('-', '&#8209;', $date).'</th>';
											}
											
										echo '</tr>
			
									</thead>
									
									<tbody>';
										
										if ($data['report_type']=='publication' or $data['report_type']=='network'){
										
										echo '<tr>
											<th>Requests</th>';
												foreach ($total_requests as $requests){
												echo '<td>'.$requests.'</td>';
											}
										echo '</tr>	';
										
										}
										
										echo '<tr>
											<th>Impressions</th>';
											foreach ($total_impressions as $impressions){
												echo '<td>'.$impressions.'</td>';
											}
										echo '</tr>	
										
										<tr>
											<th>Clicks</th>';
											foreach ($total_clicks as $clicks){
												echo '<td>'.$clicks.'</td>';
											}
										echo '</tr>														
									</tbody>
							</table>
						</div> 
					
				</div>';
	
}

function sort_name($id){

switch($id){
case 1:
$identifier='Campaign';
break;

case 2:
$identifier='Creative';
break;

case 3:
$identifier='Publication';
break;	

case 4:
$identifier='Placement';
break;	

case 5:
$identifier='Month';
break;	

case 6:
$identifier='Day';
break;	

case 7:
$identifier='Network';
break;	
	
}

return $identifier;
	
}


function print_detail_widget($data){
if (!MAD_connect_repdb()){
echo "Could not connect to reporting database. Exiting."; exit;	
}
else {
global $repdb;	
}
	
$query='SELECT SUM(total_requests) AS total_requests, SUM(total_requests_sec) AS total_requests_sec, SUM(total_impressions) AS total_impressions, SUM(total_clicks) AS total_clicks, date, publication_id, zone_id, campaign_id, creative_id, network_id, DAY(date), MONTH(date), YEAR(date), DATE_FORMAT(date, \'%m-%d-%Y\') AS daydate, DATE_FORMAT(date, \'%m-%Y\') AS monthdate FROM md_reporting '.get_rep_limitation_query($data).' '.get_rep_date_query($data).' '.get_sorting_query($data).'';

echo '
<div class="widget widget-table">
<div class="widget-header">
<span class="icon-list"></span>
<h3 class="icon chart">Detailed Statistics</h3></div>
<div class="widget-content"><table class="table table-bordered table-striped">
<thead>
<tr>';
if ($data['reporting_sort']>0){
echo '<th width="17%">'.sort_name($data['reporting_sort']).'</th>';
}
if ($data['reporting_sort2']>0){
echo '<th width="17%">'.sort_name($data['reporting_sort2']).'</th>';
}
if ($data['report_type']=='publication' or $data['report_type']=='network'){
echo '<th width="16%">Requests</th>';
}
echo '<th width="17%">Impressions</th>';
echo '<th width="15%">Clicks</th>';
echo '<th width="19%">CTR</th>';
if ($data['report_type']=='publication' or $data['report_type']=='network'){
echo '<th width="16%">Fill Rate</th>';
}
echo '</tr>
</thead>
<tbody>';
$glistres=mysql_query($query, $repdb);
while($report_detail=mysql_fetch_array($glistres)){
	
if ($data['report_type']=='network'){
$report_detail['total_requests']=$report_detail['total_requests_sec'];
}

$report_detail['ctr']=@($report_detail['total_clicks']/$report_detail['total_impressions'])*100;
$report_detail['ctr']=number_format($report_detail['ctr'], 2);	

echo '<tr>';

if ($data['reporting_sort']>0){
echo '<td>'.rep_sortmetric($data['reporting_sort'], $report_detail).'</td>';
}

if ($data['reporting_sort2']>0){
echo '<td>'.rep_sortmetric($data['reporting_sort2'], $report_detail).'</td>';
}

if ($data['report_type']=='publication' or $data['report_type']=='network'){
echo '<td>'.number_format($report_detail['total_requests']).'</td>';
}

echo '<td>'.number_format($report_detail['total_impressions']).'</td>';
echo '<td>'.number_format($report_detail['total_clicks']).'</td>';
echo '<td>'.$report_detail['ctr'].'%</td>';

if ($data['report_type']=='publication' or $data['report_type']=='network'){
	
$report_detail['fillrate']=@($report_detail['total_impressions']/$report_detail['total_requests'])*100;
$report_detail['fillrate']=number_format($report_detail['fillrate'], 2);
	
	
echo '<td>'.$report_detail['fillrate'].'%</td>';
}




echo '</tr>';
}
echo '</tbody>
</table>
</div>
</div>';

}

function rep_sortmetric($type, $result){
	
switch($type){
case 1:
if (is_numeric($result['campaign_id'])){
$campaign_detail=get_campaign_detail($result['campaign_id']);
$identifier=$campaign_detail['campaign_name'];
} else {
$identifier='No Campaign / BackFill';	
}
break;

case 2:
$creative_detail=get_creative_detail($result['creative_id']);
$identifier=$creative_detail['adv_name'];
break;

case 3:
$publication_detail=get_publication_detail($result['publication_id']);
$identifier=$publication_detail['inv_name'];
break;	

case 4:
$zone_detail=get_zone_detail($result['zone_id']);
$identifier=$zone_detail['zone_name'];
break;	

case 5:
$identifier=$result['MONTH(date)'] . '-' . $result['YEAR(date)'];
break;	

case 6:
$identifier=$result['MONTH(date)'] . '-' . $result['DAY(date)'] . '-' . $result['YEAR(date)'];
break;	

case 7:
$network_detail=get_network_detail($result['network_id']);
$identifier=$network_detail['network_name'];
break;	
	
}

return $identifier;
	
}


function get_report_name($data){
	
switch ($data['report_type']){
	
case 'campaign':
if ($data['reporting_campaign']>0){
$campaign_detail=get_campaign_detail($data['reporting_campaign']);
$limitation_name=$campaign_detail['campaign_name'];
}
else {
$limitation_name="All Campaigns";	
}
break;

case 'publication':
if ($data['reporting_publication']>0){
$publication_detail=get_publication_detail($data['reporting_publication']);
$limitation_name=$publication_detail['inv_name'];
}
else {
$limitation_name="All Publications";	
}

break;

case 'network':
if ($data['reporting_network']>0){
$network_detail=get_network_detail($data['reporting_network']);
$limitation_name=$network_detail['network_name'];
}
else {
$limitation_name="All Networks";	
}
break;


}

	
$sorts=array();
if ($data['reporting_sort']>0){
array_push($sorts, 	sort_name($data['reporting_sort']));
}

if ($data['reporting_sort2']>0){
array_push($sorts, 	sort_name($data['reporting_sort2']));
}

if (count($sorts)>0){
$sort_part='- Sort: '.implode('>', $sorts).'';
}
else {
$sort_part='';	
}

switch ($data['reporting_date']){
case 7:	
$date_name="All Time";
break;

case 1:
$date_name=date("Y-m-d");
break;

case 2:
$date_name=date("Y-m-d", strtotime("-1 day"));
break;

case 3:
$date=date("Y-m-d", strtotime("this week"));
$date_name="This week: ".$date." - ".date("Y-m-d")."";
break;

case 4:
$date_l=date("Y-m-d", strtotime("last week"));
$date_t=date("Y-m-d", strtotime("this week"));
$date_name="Last Week: ".$date_l." - ".$date_t."";
break;

case 5:
$date=date("Y-m-01");
$datel=date("Y-m-d");
$date_name="Month to Date: ".$date." - ".$datel."";
break;

case 6:
$date_l=date("Y-m-01", strtotime("-1 month"));
$date_t=date("Y-m-01");
$date_name="Last Month: ".$date_l." - ".$date_t."";
break;

case 'custom':
$start_date=explode('/',$data['startdate_value']);
$start_date_array['year']=$start_date[2];
$start_date_array['day']=$start_date[1];
$start_date_array['month']=$start_date[0];
$start_date_array['date']="$start_date_array[year]-$start_date_array[month]-$start_date_array[day]";	

$end_date=explode('/',$data['enddate_value']);
$end_date_array['year']=$end_date[2];
$end_date_array['day']=$end_date[1];
$end_date_array['month']=$end_date[0];
$end_date_array['date']="$end_date_array[year]-$end_date_array[month]-$end_date_array[day]";	

$date_name="Date Range: ".$start_date_array['date']." - ".$end_date_array['date']."";
break;

}


$final_name=$limitation_name . ' ' . $sort_part . '<div><span style="font-size:12px; margin-left:3px;">'.$date_name.'</span></div>';
return $final_name;
}

function delete_user_group($id){
global $maindb;

mysql_query("DELETE from md_user_groups where entry_id='$id'", $maindb);
mysql_query("DELETE from md_user_rights where group_id='$id'", $maindb);

$user_res=mysql_query("SELECT * FROM md_uaccounts WHERE account_type='$id'", $maindb);
while($account_detail=mysql_fetch_array($user_res)){

mysql_query("UPDATE md_uaccounts set account_type='' where user_id='$account_detail[user_id]'", $maindb);
create_rightset('user', $account_detail['user_id'], '');
	
}


}

function count_administrators(){
global $maindb;

$total_admins=mysql_num_rows(mysql_query("SELECT user_id FROM md_uaccounts WHERE account_type='1'", $maindb));

return $total_admins;
}

function delete_user($id, $origin){
global $maindb;

$u_det=get_user_detail($id);

if (count_administrators()<2 && $u_det['account_type']==1){
global $errormessage;
$errormessage='You cannot delete the last Administrator in the system.';
return false;
}

mysql_query("DELETE from md_uaccounts where user_id='$id'", $maindb);
mysql_query("DELETE from md_user_rights where user_id='$id'", $maindb);
	
}

function delete_creativeserver($id){
global $maindb;

mysql_query("DELETE from md_creative_servers where entry_id='$id'", $maindb);
mysql_query("DELETE from md_ad_units where adv_type='1' AND creativeserver_id='$id'", $maindb);

return true;
	
}

function campaign_limit_update(){
global $maindb;

$last_limit_update=getconfig_var('last_limit_update');

$diff=time()-$last_limit_update;

if ($diff<86300 && is_numeric($last_limit_update)){
return false;	
}

global $maindb;
mysql_query("UPDATE md_campaign_limit SET total_amount_left=total_amount WHERE total_amount>0 AND cap_type='1'", $maindb);

update_configvar('last_limit_update', time());

add_syslog('campaign_limit_update', '');
	
}

function add_syslog($type, $detail){
global $maindb;

mysql_query("INSERT INTO md_syslog (log_type, time_stamp, status, details)
VALUES ('".$type."', '".time()."', '1', '".$detail."')", $maindb);
return true;
	
}


?>
