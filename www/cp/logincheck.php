<?php
function logincheck(){
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
$loginsession_id = mysql_real_escape_string(stripslashes($loginsession_id));

$resultv=mysql_query("select * from md_usessions where session_id='$loginsession_id' AND session_status='1'", $maindb);
$sessiondet=mysql_fetch_array($resultv);
$date_expire=$sessiondet['session_timeout'];

$date = time();

if ($date<=$date_expire){
$resulty=mysql_query("select * from md_uaccounts where email_address='$sessiondet[user_identification]'", $maindb);
$userv=mysql_fetch_array($resulty);

$sespas = $sessiondet['user_password'];

if ($sespas==$userv['password'] && $sespas!="" && $userv['status']==1)
{
$loggedin_status=1;
$new_session_timeout = $date + 1800;
mysql_query("UPDATE md_usessions set session_timeout='$new_session_timeout' WHERE session_status='1' AND session_id='$loginsession_id'", $maindb);
global $user_detail;

$usresult=mysql_query("select * from md_uaccounts where email_address='$sessiondet[user_identification]'", $maindb);
$user_detail=mysql_fetch_array($usresult); 


return true;
}
}
}
	
	
return false;
		
	}


?>