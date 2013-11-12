<div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>Creative Server Details</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
                        
                        <?php if ($user_detail['tooltip_setting']==1){ ?>
                         <div class="notify notify-info">						
						
                        						<p>If you would like to improve server performance by hosting ad creatives on an external server (FTP upload), please enter the details of your creative server below.</p>
					</div> <!-- .notify -->
                        <?php } ?>

						
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['server_name'])){ echo $editdata['server_name']; } ?>"  name="server_name" id="server_name" size="28" class="" />			
									<label for="server_name">Creative Server Name</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
								<select id="server_type" name="server_type">
								  <option value="ftp">FTP</option>
								</select>		
									<label for="server_type">Connection Type</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['remote_host'])){ echo $editdata['remote_host']; }?>"  name="remote_host" id="remote_host" size="28" class="" />			
									<label for="remote_host">Connection Host (e.g. ftp.madserve.org)</label></div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['remote_user'])){ echo $editdata['remote_user']; }?>"  name="remote_user" id="remote_user" size="28" class="" />			
									<label for="remote_user">FTP User</label></div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['remote_password'])){ echo $editdata['remote_password']; }?>"  name="remote_password" id="remote_password" size="28" class="" />			
									<label for="remote_password">FTP Password</label></div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['remote_directory'])){ echo $editdata['remote_directory']; }?>"  name="remote_directory" id="remote_directory" size="28" class="" />			
									<label for="remote_directory">Upload Directory (e.g. www/creatives/)</label></div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['server_default_url'])){ echo $editdata['server_default_url']; }?>"  name="server_default_url" id="server_default_url" size="28" class="" />			
									<label for="server_default_url">Access URL (e.g. http://madserve.org/creatives/)</label></div>
							</div> <!-- .field-group -->
                            
                        
                            
			
							
							
						
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->