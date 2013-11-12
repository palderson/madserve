<div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>General Publication Details</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
                        
                        <?php if ($user_detail['tooltip_setting']==1){ ?>
                         <div class="notify notify-info">						
						
                        						<p>Please enter some general details about your publication below. If you are adding an iOS or Android application, it makes sense to enter the App Store or Google Play URL in the 'Publication URL' field.</p>
					</div> <!-- .notify -->
                        <?php } ?>

						
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['inv_name'])){  echo $editdata['inv_name']; } ?>"  name="inv_name" id="inv_name" size="28" class="" />			
									<label for="inv_name">Publication Name</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
								<select <?php if ($current_action=='create'){?>onchange="if (this.options[this.selectedIndex].value=='3'){hideadiv('interstitialoptiobutton');} else {showadiv('interstitialoptiobutton');}"<?php } ?> id="inv_type" name="inv_type">
								  <?php if (!isset($editdata['inv_type'])){$editdata['inv_type']='';} get_pubtype_dropdown($editdata['inv_type']); ?>
								</select>		
									<label for="inv_type">Publication Type</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['inv_address'])){ echo $editdata['inv_address']; } else { echo 'http://'; } ?>"  name="inv_address" id="inv_address" size="28" class="" />			
									<label for="inv_address">Publication URL (Web URL or App Store URL)</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<select id="inv_defaultchannel" name="inv_defaultchannel">
								  <option>- Select Channel  -</option>
<?php  if (!isset($editdata['inv_defaultchannel'])){$editdata['inv_defaultchannel']='';} get_channel_dropdown($editdata['inv_defaultchannel']); ?>								</select>					
									<label for="inv_defaultchannel">Main Channel</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<textarea name="inv_description" id="inv_description" rows="5" cols="50"><?php if (isset($editdata['inv_description'])){ echo $editdata['inv_description']; } ?></textarea>	
									<label for="inv_description">Description</label>
								</div>
							</div> <!-- .field-group -->
                            
                           
                             
                             
                            
                          
                            
			
							
							
						
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->