<div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>Location Details</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
                        
                        <?php if ($user_detail['tooltip_setting']==1){ ?>
                         <div class="notify notify-info">						
						
                        						<p>Please enter some general details about your publication below. If you are adding an iOS or Android application, it makes sense to enter the App Store or Google Play URL in the 'Publication URL' field.</p>
					</div> <!-- .notify -->
                        <?php } ?>

						
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['location_name'])){  echo $editdata['location_name']; } ?>"  name="location_name" id="location_name" size="28" class="" />			
									<label for="location_name">Location Name</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['location_lat'])){  echo $editdata['location_lat']; } ?>"  name="location_lat" id="location_lat" size="28" class="" />			
									<label for="location_lat">Latitude</label>
								</div>
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['location_lon'])){  echo $editdata['location_lon']; } ?>"  name="location_lon" id="location_lon" size="28" class="" />			
									<label for="location_lon">Longitude</label>
								</div>
			
							</div> <!-- .field-group -->		
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->
