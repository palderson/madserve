<?php
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>

	<title><?php echo getconfig_var('adserver_name'); ?> - Control Panel</title>

	<meta charset="utf-8" />
	<meta name="description" content="" />
	<meta name="author" content="" />		
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/images/favicon.ico" />
		
	<link rel="stylesheet" href="assets/stylesheets/all.css" type="text/css" />
	
	<!--[if gte IE 9]>
	<link rel="stylesheet" href="assets/stylesheets/ie9.css" type="text/css" />
	<![endif]-->
	
	<!--[if gte IE 8]>
	<link rel="stylesheet" href="assets/stylesheets/ie8.css" type="text/css" />
	<![endif]-->
    
	
</head>

<body>

<div id="wrapper">
	
	<div id="header">
		<h1><a href="dashboard.php"><?php echo getconfig_var('adserver_name'); ?></a></h1>		
		
		<a href="javascript:;" id="reveal-nav">
			<span class="reveal-bar"></span>
			<span class="reveal-bar"></span>
			<span class="reveal-bar"></span>
		</a>
	</div> <!-- #header -->
	
	<div id="search">
		<!--<form>
			<input type="text" name="search" placeholder="Search..." id="searchField" />
		</form>	 -->	
	</div> <!-- #search -->
	
	<div id="sidebar">		
		
		<ul id="mainNav">			
			<li id="navDashboard" class="nav<?php if ($current_section=="dashboard"){echo " active"; } ?>">
				<span class="icon-home"></span>
				<a href="dashboard.php">Dashboard</a>				
			</li>
						
              <?php if ($user_detail['account_type']==1 or  ($user_right['view_own_campaigns']==1 or $user_right['view_all_campaigns']==1 or $user_right['create_campaigns']==1)){?>
			<li id="navPages" class="nav<?php if ($current_section=="campaigns"){echo " active"; } ?>">
				<span class="icon-document-alt-stroke"></span>
				<a href="#">Campaigns</a>				
				
				<ul class="subNav">
					<?php if ($user_detail['account_type']==1 or  ($user_right['view_own_campaigns']==1 or $user_right['view_all_campaigns']==1)){?><li><a href="view_campaigns.php">View Campaigns</a></li><?php } ?>
					<?php if ($user_detail['account_type']==1 or  ($user_right['create_campaigns']==1)){?><li><a href="create_campaign.php">+ Create Campaign</a></li><?php } ?>
				</ul>						
				
			</li>	
            <?php } ?>
			<?php if ($user_detail['account_type']==1 or  ($user_right['view_publications']==1 or $user_right['modify_publications']==1)){?>
			<li id="navForms" class="nav<?php if ($current_section=="inventory"){echo " active"; } ?>">
				<span class="icon-iphone"></span>
				<a href="#">Inventory</a>
				
				<ul class="subNav">
					 <?php if ($user_detail['account_type']==1 or  ($user_right['view_publications']==1)){?><li><a href="view_publications.php">View Publications</a></li><?php } ?>
					<?php if ($user_detail['account_type']==1 or  ($user_right['modify_publications']==1)){?><li><a href="add_publication.php">+ Add Publication</a></li>	<?php } ?>			
					<?php if ($user_detail['account_type']==1 or  ($user_right['modify_publications']==1)){?><li><a href="add_placement.php">+ Add Placement</a></li><?php } ?>
					 <?php if ($user_detail['account_type']==1 or  ($user_right['view_publications']==1)){?><li><a href="integration.php">Integration</a></li><?php } ?>

				</ul>	
								
			</li>
            <?php } ?>
            <?php if ($user_detail['account_type']==1 or  ($user_right['view_advertisers']==1 or $user_right['modify_advertisers']==1)){?>
            <li id="navGrid" class="nav<?php if ($current_section=="advertisers"){echo " active"; } ?>">
				<span class="icon-layers"></span>
				<a href="view_advertisers.php">Advertisers</a>	
			</li>
            <?php } ?>
			
		<!--	<li id="navType" class="nav">
				<span class="icon-info"></span>
				<a href="./typography.html">Typography</a>	
			</li>
			
			<li id="navGrid" class="nav">
				<span class="icon-layers"></span>
				<a href="./grids.html">Grid Layout</a>	
			</li>
			
			<li id="navTables" class="nav">
				<span class="icon-list"></span>
				<a href="./tables.html">Tables</a>	 
			</li>-->
			<?php if ($user_detail['account_type']==1 or  ($user_right['ad_networks']==1)){?>
			<li id="navButtons" class="nav<?php if ($current_section=="adnetworks"){echo " active"; } ?>">
				<span class="icon-bolt"></span>
				<a href="ad_networks.php">Ad Networks</a>	
			</li>
            <?php } ?>
		
			 <?php if ($user_detail['account_type']==1 or  ($user_right['campaign_reporting']==1 or $user_right['own_campaign_reporting']==1 or $user_right['publication_reporting']==1 or $user_right['network_reporting']==1)){?>
			<li id="navCharts" class="nav<?php if ($current_section=="reporting"){echo " active"; } ?>">
				<span class="icon-chart"></span>
				<a href="#">Reporting</a>
                <ul class="subNav">
					<?php if ($user_detail['account_type']==1 or  ($user_right['campaign_reporting']==1 or $user_right['own_campaign_reporting']==1)){?><li><a href="reporting.php?type=campaign">Campaign Reporting</a></li><?php } ?>				
					<?php if ($user_detail['account_type']==1 or  ($user_right['publication_reporting']==1)){?><li><a href="reporting.php?type=publication">Publication Reporting</a></li>	<?php } ?>				
					<?php if ($user_detail['account_type']==1 or  ($user_right['network_reporting']==1)){?><li><a href="reporting.php?type=network">Network Reporting</a></li><?php } ?>		
				</ul>	
			</li>
            <?php } ?>
            
            
            <?php if ($user_detail['account_type']==1 or  ($user_right['configuration']==1)){?>
			<li id="navInterface" class="nav<?php if ($current_section=="configuration"){echo " active"; } ?>">
				<span class="icon-cog-alt"></span>
				<a href="settings_general.php">Configuration</a>
                                <ul class="subNav">
					<li><a href="settings_general.php">General</a></li>					
					<li><a href="settings_mfconnect.php">MobFox:Connect</a></li>					
					<li><a href="settings_database.php">Database Settings</a></li>					
					<li><a href="settings_update.php">Update Settings</a></li>					
					<li><a href="user_management.php">User Management</a></li>					
					<li><a href="user_group_management.php">User Group Management</a></li>	
                    <li><a href="channel_management.php">Channel Management</a></li>									
                    <li><a href="creative_servers.php">Creative Servers</a></li>									
					<li><a href="network_modules.php">Network Modules</a></li>					
					<li><a href="system_log.php">System Log</a></li>					
				</ul>	

			</li>
            <?php } ?>
			<!--
			<li id="navMaps" class="nav">
				<span class="icon-map-pin-fill"></span>
				<a href="./maps.html">Map Elements</a>
			</li>	
			
			<li class="nav">
				<span class="icon-denied"></span>
				<a href="javascript:;">Error Pages</a>
				
				<ul class="subNav">
					<li><a href="./error-401.html">401 Page</a></li>
					<li><a href="./error-403.html">403 Page</a></li>
					<li><a href="./error-404.html">404 Page</a></li>	
					<li><a href="./error-500.html">500 Page</a></li>	
					<li><a href="./error-503.html">503 Page</a></li>					
				</ul>	
			</li>
		</ul> -->
				
	</div> <!-- #sidebar -->