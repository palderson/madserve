<?php



// END LOGIN CHECK

function logincheck(){
global $maindb;
global $loginsession_id;
if (isset($_COOKIE["md_loginsession"]) && !empty($_COOKIE["md_loginsession"])){
$loginsession_id = $_COOKIE["md_loginsession"]; 
}
if ($loginsession_id=="" or !preg_match('/^[a-f0-9]{32}$/', $loginsession_id))
{
	return false;
	}
		
if ($loginsession_id!="") 
{
$loginsession_id = mysql_real_escape_string(stripslashes($loginsession_id), $maindb);

$resultv=mysql_query("select * from md_usessions where session_id='$loginsession_id' AND session_status='1'", $maindb);
$sessiondet=mysql_fetch_array($resultv);
$date_expire=$sessiondet['session_timeout'];

$date = time();

if ($date<=$date_expire){
$resulty=mysql_query("select * from md_uaccounts where email_address='$sessiondet[user_identification]'", $maindb);
$userv=mysql_fetch_array($resulty);

$sespas = $sessiondet['user_password'];

if ($sespas==$userv['pass_word'] && $sespas!="" && $userv['account_status']==1)
{
$loggedin_status=1;
$new_session_timeout = $date + MAD_USER_SESSION_TIMEOUT;
mysql_query("UPDATE md_usessions set session_timeout='$new_session_timeout' WHERE session_status='1' AND session_id='$loginsession_id'", $maindb);
global $user_detail;

$usresult=mysql_query("select * from md_uaccounts where email_address='$sessiondet[user_identification]'", $maindb);
$user_detail=mysql_fetch_array($usresult); 

if (is_numeric($user_detail['account_type']) && $user_detail['account_type']>1){
global $user_right;
$user_right_res=mysql_query("select * from md_user_rights where group_id='$user_detail[account_type]'", $maindb);
$user_right=mysql_fetch_array($user_right_res); 
}
else if (!is_numeric($user_detail['account_type'])){
global $user_right;
$user_right_res=mysql_query("select * from md_user_rights where user_id='$user_detail[user_id]'", $maindb);
$user_right=mysql_fetch_array($user_right_res); 
}


return true;
}
}
}
	
	
return false;
		
	}
	
function logout(){
global $maindb;
if (isset($_COOKIE["md_loginsession"]) && !empty($_COOKIE["md_loginsession"])){
$loginsession_id = $_COOKIE["md_loginsession"]; 
mysql_query("UPDATE md_usessions set session_status='0' WHERE session_status='1' AND session_id='$loginsession_id'", $maindb);
setcookie("md_loginsession","" , time()-60000);
return true;
}
}

function signin($username, $password){
	
global $maindb;
	
$username = mysql_real_escape_string(stripslashes($username));
$password = mysql_real_escape_string(stripslashes($password));
$username=strtolower($username);

if (logincheck()){
return true;
}

$resultu=mysql_query("select * from md_uaccounts where email_address='$username'", $maindb);
$usert1=mysql_fetch_array($resultu);



$username_db = $usert1['email_address'];
$password_db = $usert1['pass_word'];
$account_status = $usert1['account_status'];

$login_username=$username;
$login_password=md5($password);

$code_p = uniqid ($username, true); // GENERATE SESSION ID
$sessid = md5($code_p);


if ($username_db==$login_username && $login_password==$password_db)
{ if ($account_status=="1"){ 

$date_n        = mktime(date("G"), date("i"), date("s"), date("m")  , date("d")+100, date("Y")); // Generate date

mysql_query("INSERT INTO `md_usessions` VALUES('', '$sessid', '$date_n', '1', '$username', '$login_password', '1', '', '".time()."')", $maindb);

$inTwoMonths = 60 * 60 * 24 * 60 + time(); 
setcookie('md_loginsession', $sessid, $inTwoMonths); 

return true;
}}
return false;

}
function resendpassword($username){
$time_stamp=time();

require_once MAD_PATH . '/modules/validation/validate.class.php';

$validate = new Validate;

if ($username=="" or ($validate->isEmail($username)!=true)){
return false;
}
	
global $maindb;

$code_p = uniqid ("$time_stamp$username", true); // GENERATE SESSION ID
$request_hash = md5($code_p);

$resultuserselect=mysql_query("select * from md_uaccounts where email_address='$username'", $maindb);
$requser_detail=mysql_fetch_array($resultuserselect);

if ($requser_detail['email_address']!=$username){
return false;
}

$mad_bsrurl=str_ireplace('/www/cp/do_resetpassword.php','',$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);

require_once MAD_PATH . '/www/cp/admin_functions.php';

$mad_r_adservername=getconfig_var('adserver_name');
$mad_r_adserveremail=getconfig_var('server_email');

mysql_query("UPDATE md_passwordresets set reset_status='0' where reset_accountid='$requser_detail[user_id]'", $maindb);
mysql_query("INSERT INTO `md_passwordresets` VALUES('', '1', '$request_hash', '$requser_detail[user_id]', '', '$time_stamp')", $maindb);


require_once MAD_PATH . '/modules/phpmailer/class.phpmailer.php';

$mail             = new PHPMailer(); // defaults to using php "mail()"

$body="mAdserve Password Recovery<br>----------------------<br>
Username: $requser_detail[email_address]<br>
Password Reset Link: http://$mad_bsrurl/www/cp/pw_update.php?hash=$request_hash";

$mail->AddReplyTo("".$mad_r_adserveremail."","".$mad_r_adservername."");

$mail->SetFrom(''.$mad_r_adserveremail.'', ''.$mad_r_adservername.'');

$address = "$requser_detail[email_address]";
$mail->AddAddress($address, "$requser_detail[first_name] $requser_detail[last_name]");

$mail->Subject    = "mAdserve Password Recovery";

//$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

$mail->MsgHTML($body);

if(!$mail->Send()) {
return false;
}


return true; 

}

function checkpwresethash($hash){
$time_stamp=time();

global $maindb;

if (empty($hash) or !preg_match('/^[a-f0-9]{32}$/', $hash)){
return false;
}


$resultrif=mysql_query("select * from md_passwordresets where reset_hash='$hash'", $maindb);
$reset_file_detail=mysql_fetch_array($resultrif);

$time_stamp_24hoursago = $time_stamp - 86400;

if ($reset_file_detail['reset_hash']!=$hash or $reset_file_detail['reset_status']!=1 or $reset_file_detail['time_stamp']<$time_stamp_24hoursago){return false;}


return true;
}

function dochangepw($hash, $newpass1, $newpass2){
$time_stamp=time();

global $maindb;

if (!checkpwresethash($hash)){
return false;
}

if (empty($newpass1) or $newpass1!=$newpass2 or strlen($newpass1)<5){
return false;
}

$resultrif=mysql_query("select * from md_passwordresets where reset_hash='$hash'", $maindb);
$reset_file_detail=mysql_fetch_array($resultrif);


$newpass_md5=md5($newpass1);
mysql_query("UPDATE md_passwordresets set reset_status='0' where reset_accountid='$reset_file_detail[reset_accountid]'", $maindb);
mysql_query("UPDATE md_uaccounts set pass_word='$newpass_md5' where user_id='$reset_file_detail[reset_accountid]'", $maindb);


return true;
}

function check_permission_simple($key, $user_id){

global $user_right;
$u_det=get_user_detail($user_id);

if ($u_det['account_type']==1){
return true;	
}

if ($user_right[$key]!=1){
return false;	
}

return true;
	
}

function check_permission($type, $user_id){
	
global $user_right;
	
$u_det=get_user_detail($user_id);

if ($u_det['account_type']==1){
return true;	
}

switch ($type){
case 'configuration':
$key='configuration';
break;
case 'advertisers':
$key='view_advertisers';
break;

case 'add_administrator':
$key='configuration';
break;

case 'modify_advertisers':
$key='modify_advertisers';
break;

case 'campaigns':
$key='view_own_campaigns';
$key2='view_all_campaigns';
break;

case 'adnetworks':
$key='ad_networks';
break;

case 'trafficrequests':
$key='traffic_requests';
break;

case 'advertisers':
$key='view_advertisers';
break;
}

if (isset($key) && !isset($key2)){
if ($user_right[$key]!=1){
return false;	
}
}
else if (isset($key) && isset($key2)){
if ($user_right[$key]!=1 && $user_right[$key2]!=1){
return false;	
}
	
}
else {
return true;	
}

return true;
}

?>