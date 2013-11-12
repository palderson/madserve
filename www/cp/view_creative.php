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

$creative_detail=get_creative_detail($_GET['id']);



switch($creative_detail['adv_type']){
case 1:
if ($creative_detail['creativeserver_id']==1){
echo "<img src='../..".MAD_CREATIVE_DIR."".$creative_detail['unit_hash'].".".$creative_detail['adv_creative_extension']."'>";
}
else {
$server_detail=get_creativeserver_detail($creative_detail['creativeserver_id']);
echo "<img src='".$server_detail['server_default_url']."".$creative_detail['unit_hash'].".".$creative_detail['adv_creative_extension']."'>"; 
}
break;
case 2:
echo "<img src='".$creative_detail['adv_bannerurl']."'>";
break;
case 3:
echo $creative_detail['adv_chtml'];
break;
}
?>