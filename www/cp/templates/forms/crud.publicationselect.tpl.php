<div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>Publication Select</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
                        
                        <?php if ($user_detail['tooltip_setting']==1){ ?>
                         <div class="notify notify-info">						
						
                        						<p>Please select the Publication you would like to add this ad unit / placement to.</p>
					</div> <!-- .notify -->
                        <?php } ?>

						
                            
                          
                            
                            <div class="field-group">
			
								<div class="field">
								<select id="publication_id" name="publication_id">
								  <?php if (!isset($selector_pubid)){$selector_pubid='';} get_publication_dropdown($selector_pubid); ?>
								</select>		
									<label for="inv_type">Select Publication</label>
								</div>
							</div> <!-- .field-group -->
                            
                         
                           
                             
                             
                            
                          
                            
			
							
							
						
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->