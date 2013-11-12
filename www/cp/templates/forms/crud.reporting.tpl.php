				<script language="javascript">
				
			function dateselect(status){
	
	if (status=="off"){
	document.getElementById('dateselection').style.display='none'; document.getElementById('create_adunit').style.display='block';
	}
	if (status=="on"){
	document.getElementById('dateselection').style.display='block'; document.getElementById('create_adunit').style.display='none';
	}

}

				</script>
                <form method="post" enctype="multipart/form-data" id="crudcampaign" name="crudcampaign" class="form uniformForm">
                <input type="hidden" name="startreport" value="1" />		
                <input type="hidden" name="report_type" value="<?php echo $report_type; ?>" />

<div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>Report Details</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
                        
                       
						
                            
                            
                     
                            
                            <?php if ($report_type=='campaign'){?>
                            <div class="field-group">
			
								<div class="field">
									<select id="reporting_campaign" name="reporting_campaign">
                                    <?php 
									if (check_permission_simple('campaign_reporting', $user_detail['user_id'])){
									?>
								  <option value="0">- All Campaigns  -</option>
                                  <?php } ?>
<?php if (!isset($_GET['reporting_campaign'])){$_GET['reporting_campaign']='';} get_campaign_dropdown($_GET['reporting_campaign']); ?>								</select>					
									<label for="reporting_campaign">Campaign</label>
								</div>
							</div> <!-- .field-group -->
                            <?php } ?>
                            
                            <?php if ($report_type=='publication'){?>
                            <div class="field-group">
			
								<div class="field">
									<select id="reporting_publication" name="reporting_publication">
								  <option value="0">- All Publications  -</option>
<?php if (!isset($editdata['reporting_publication'])){$editdata['reporting_publication']='';} get_publication_dropdown_report($editdata['reporting_publication']); ?>								</select>					
									<label for="reporting_publication">Publication</label>
								</div>
							</div> <!-- .field-group -->
                            <?php } ?>
                            
                            <?php if ($report_type=='network'){?>
                            <div class="field-group">
			
								<div class="field">
									<select id="reporting_network" name="reporting_network">
								  <option value="0">- All Networks  -</option>
<?php  if (!isset($editdata['reporting_network'])){$editdata['reporting_network']='';} get_network_dropdown_report($editdata['reporting_network']); ?>								</select>					
									<label for="reporting_network">Network</label>
								</div>
							</div> <!-- .field-group -->
                            <?php } ?>
                            
                            <div class="field-group">
			
								<div class="field">
									<select id="reporting_sort" name="reporting_sort">
                                    <option value="0">-</option>
								  <option value="1">Campaign</option>
								  <option value="2">Ad Unit</option>
                                  <option value="3">Publication</option>
                                  <option value="4">Placement</option>
								  <option value="5">Month</option>
								  <option value="6">Day</option>
								  <option value="7">Ad Network</option>
       				</select>					
									<label for="inv_defaultchannel">Sort Criteria #1</label>
								</div>
							</div> <!-- .field-group -->
                            
                                                        <div class="field-group">

								<div class="field">
									<select id="reporting_sort2" name="reporting_sort2">
                                    <option value="0">-</option>
								  <option value="1">Campaign</option>
								  <option value="2">Ad Unit</option>
                                  <option value="3">Publication</option>
                                  <option value="4">Placement</option>
								  <option value="5">Month</option>
								  <option value="6">Day</option>
								  <option value="7">Ad Network</option>
       				</select>					
									<label for="inv_defaultchannel">Sort Criteria #2</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<select onchange="if (this.options[this.selectedIndex].value=='custom'){document.getElementById('dateselection').style.display='block'; } else {document.getElementById('dateselection').style.display='none';}" id="reporting_date" name="reporting_date">
                                 <option value="7">All Time</option>
								  <option value="1">Today</option>
								  <option value="2">Yesterday</option>
								  <option value="3">This Week</option>
								  <option value="4">Last Week</option>
								  <option value="5">Month to Date</option>
								  <option value="6">Last Month</option>
								  <option value="custom">- Custom -</option>
       				</select>					
									<label for="inv_defaultchannel">Dates</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div  id="dateselection" class="field-group inlineField">								
									
									<div class="field">
										<div id="startdatepicker"></div>	
                                        <label for="inv_defaultchannel">Start Date</label>	
									</div> <!-- .field -->		
                                    									
                                    <div class="field">
										<div id="enddatepicker"></div>	
                                        <label for="inv_defaultchannel">End Date</label>
									</div> <!-- .field -->		
								</div> <!-- .field-group -->
                                
                                <input type="hidden" name="startdate_value" id="startdate_value" />
                                <input type="hidden" name="enddate_value" id="enddate_value" />
                            
                            
                           
                             
                             
                            
                          
                            
			
							
							
						
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->
                    
                      <div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Generate Report</button>
								</div> <!-- .actions -->
										
					
					
					
					</form>
					