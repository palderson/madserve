<div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>Limit Details</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
              
               <div class="field-group">
			
								<div class="field">
									<span style="margin-left:4px;"><?php echo get_running_limit($_GET['id']); ?></span>
									<label for="current_limit">Current Running Limit</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input type="text" value="<?php if (isset($editdata['new_limit'])){ echo $editdata['new_limit']; } ?>"  name="new_limit" id="new_limit" size="9" class="" />			
									<label for="new_limit">New Limit</label>
								</div>
							</div> <!-- .field-group -->
                            
                           
                        
                            
			
							
							
						
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->