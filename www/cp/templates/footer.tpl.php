	<div id="topNav">
		 <ul>
		 	<li>
		 		<a href="#menuProfile" class="menu"><?php echo $user_detail['first_name']; ?> <?php echo $user_detail['last_name']; ?> <?php if (!empty($user_detail['company_name'])){echo "($user_detail[company_name])";} ?></a>
		 		
		 		<div id="menuProfile" class="menu-container menu-dropdown">
					<div class="menu-content">
						<ul class="">
							<li><a href="edit_profile.php">Edit Profile</a></li>
							<li><a href="change_password.php">Change Password</a></li>
							<li><a href="edit_settings.php">Edit Settings</a></li>
						</ul>
					</div>
				</div>
	 		</li>
            		 	<li><a target="_blank" href="http://help.madserve.org">Help</a></li>
            		 	<li><a target="_blank" href="http://help.madserve.org/reportbug.php">Feedback</a></li>
		 	<li><a href="logout.php">Logout</a></li>
		 </ul>
	</div> <!-- #topNav -->
	<?php if ($user_detail['account_type']==1 or  ($user_right['traffic_requests']==1)){?>
	<div id="quickNav">
		<ul>
			<li class="quickNavMail">
				<a href="#menuAmpersand" class="menu"><span class="icon-loop"></span></a>		
				
                <?php if (get_total_open_tr()>0){ echo '<span class="alert">'.get_total_open_tr().'</span>	'; } ?>
					

				<div id="menuAmpersand" class="menu-container quickNavConfirm">
					<div class="menu-content cf">							
						
						<div class="qnc qnc_confirm">
							
							<h3>Live Traffic Requests - Ad Networks</h3>
                            
                            <?php if (get_total_open_tr()>0){ get_traffic_requests('widget'); echo '<a href="traffic_requests.php" class="qnc_more">View all Traffic Requests</a>'; }  else {echo '<div style="margin-top:10px;" align="center">No New Traffic Requests - <a href="traffic_requests.php">View All</a></div>';}?>
					
							
							
							
							
	
							
							
															
						</div> <!-- .qnc -->	
					</div>
				</div>
			</li>
			<li class="quickNavNotification">
				<a href="#menuPie" class="menu"><span class="icon-cog-alt"></span></a>
				
				<div id="menuPie" class="menu-container">
					<div class="menu-content cf">					
						
						<div class="qnc">
							
							<h3>System Log</h3>
					
							<?php get_syslog('topbar', 3); ?>
							
							<a href="system_log.php" class="qnc_more">View Full System Log</a>
							
						</div> <!-- .qnc -->
					</div>
				</div>				
			</li>
		</ul>		
	</div> <!-- .quickNav -->
    <?php } ?>
	
	
</div> <!-- #wrapper -->

<div id="footer"><?php echo getconfig_var('adserver_name'); ?> - mAdserve <?php echo MAD_VERSION; ?> - Server Time: <?php echo date('l jS F Y h:i:s A'); ?>
</div>

<?php global $jsload; if ($jsload!=1){?>
<script src="assets/javascripts/all.js"></script>
<?php } ?>

</body>
</html>