<?php
if (!isset($tt)){$tt='';}
if (!isset($tt_det)){$tt_det='';}
if (!isset($editdata['view_own_campaigns'])){$editdata['view_own_campaigns']=0;}
if (!isset($editdata['view_all_campaigns'])){$editdata['view_all_campaigns']=0;}
if (!isset($editdata['create_campaigns'])){$editdata['create_campaigns']=0;}
if (!isset($editdata['view_publications'])){$editdata['view_publications']=0;}
if (!isset($editdata['modify_publications'])){$editdata['modify_publications']=0;}
if (!isset($editdata['ad_networks'])){$editdata['ad_networks']=0;}
if (!isset($editdata['view_advertisers'])){$editdata['view_advertisers']=0;}
if (!isset($editdata['modify_advertisers'])){$editdata['modify_advertisers']=0;}
if (!isset($editdata['campaign_reporting'])){$editdata['campaign_reporting']=0;}
if (!isset($editdata['own_campaign_reporting'])){$editdata['own_campaign_reporting']=0;}
if (!isset($editdata['publication_reporting'])){$editdata['publication_reporting']=0;}
if (!isset($editdata['network_reporting'])){$editdata['network_reporting']=0;}
if (!isset($editdata['configuration'])){$editdata['configuration']=0;}
if (!isset($editdata['traffic_requests'])){$editdata['traffic_requests']=0;}
?>
<div class="widget widget-table">
					
						<div class="widget-header">
							<span class="icon-list"></span>
							<h3 class="icon chart"><?php echo $tt; ?> Permissions: <?php echo $tt_det; ?></h3>		
						</div>
					
						<div class="widget-content">
							
							<table class="table table-bordered table-striped">
						<thead>
							<tr>
								<th width="60%">Campaign Settings</th>
								<th><div align="center">Yes</div></th>
								<th><div align="center">No</div></th>
							</tr>
						</thead>
						<tbody>
<tr class="gradeA">
								<td>View/Edit own Campaigns</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['view_own_campaigns']==1){echo 'checked="checked"';}?> type="radio" name="view_own_campaigns" id="radio" value="1" />
								  <label for="traffic_requests"></label>
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['view_own_campaigns']!=1){echo 'checked="checked"';}?> type="radio" name="view_own_campaigns" id="radio2" value="0" />
								</div></td>
								</tr>	<tr class="gradeA">
								<td>View/Edit all Campaigns</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['view_all_campaigns']==1){echo 'checked="checked"';}?> type="radio" name="view_all_campaigns" id="radio4" value="1" />
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['view_all_campaigns']!=1){echo 'checked="checked"';}?> type="radio" name="view_all_campaigns" id="radio3" value="0" />
								</div></td>
								</tr>	<tr class="gradeA">
								<td>Create Campaigns</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['create_campaigns']==1){echo 'checked="checked"';}?> type="radio" name="create_campaigns" id="radio5" value="1" />
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['create_campaigns']!=1){echo 'checked="checked"';}?> type="radio" name="create_campaigns" id="radio6" value="0" />
								</div></td>
								</tr>						
</tbody>
					</table>
                    	<table class="table table-bordered table-striped">
						<thead>
					  <tr style="border-top:1px solid #CCC;">
								<th width="60%">Publication Settings</th>
								<th><div align="center">Yes</div></th>
								<th><div align="center">No</div></th>
							</tr>
						</thead>
						<tbody>
<tr class="gradeA">
								<td>View Publications</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['view_publications']==1){echo 'checked="checked"';}?> type="radio" name="view_publications" id="radio" value="1" />
								  <label for="traffic_requests"></label>
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['view_publications']!=1){echo 'checked="checked"';}?> type="radio" name="view_publications" id="radio2" value="0" />
		  </div></td>
						  </tr>	<tr class="gradeA">
								<td>Create/Modify Publications</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['modify_publications']==1){echo 'checked="checked"';}?> type="radio" name="modify_publications" id="radio4" value="1" />
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['modify_publications']!=1){echo 'checked="checked"';}?> type="radio" name="modify_publications" id="radio3" value="0" />
								</div></td>
								</tr>	<tr class="gradeA">
								<td>Manage Ad Networks</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['ad_networks']==1){echo 'checked="checked"';}?> type="radio" name="ad_networks" id="radio5" value="1" />
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['ad_networks']!=1){echo 'checked="checked"';}?> type="radio" name="ad_networks" id="radio6" value="0" />
								</div></td>
								</tr>						
</tbody>
					</table>
                    <table class="table table-bordered table-striped">
						<thead>
					  <tr style="border-top:1px solid #CCC;">
								<th width="60%">Advertiser Settings</th>
								<th><div align="center">Yes</div></th>
								<th><div align="center">No</div></th>
							</tr>
						</thead>
						<tbody>
<tr class="gradeA">
								<td>View Advertisers</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['view_advertisers']==1){echo 'checked="checked"';}?> type="radio" name="view_advertisers" id="radio" value="1" />
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['view_advertisers']!=1){echo 'checked="checked"';}?> type="radio" name="view_advertisers" id="radio2" value="0" />
		  </div></td>
						  </tr>	<tr class="gradeA">
								<td>Create/Modify Advertisers</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['modify_advertisers']==1){echo 'checked="checked"';}?> type="radio" name="modify_advertisers" id="radio4" value="1" />
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['modify_advertisers']!=1){echo 'checked="checked"';}?> type="radio" name="modify_advertisers" id="radio3" value="0" />
								</div></td>
								</tr>						
</tbody>
					</table>
                    <table class="table table-bordered table-striped">
						<thead>
							<tr style="border-top:1px solid #CCC;">
								<th width="60%">Reporting Settings</th>
								<th><div align="center">Yes</div></th>
								<th><div align="center">No</div></th>
							</tr>
					  </thead>
						<tbody>
<tr class="gradeA">
								<td>All Campaign Reporting</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['campaign_reporting']==1){echo 'checked="checked"';}?> type="radio" name="campaign_reporting" id="radio" value="1" />
								  <label for="traffic_requests"></label>
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['campaign_reporting']!=1){echo 'checked="checked"';}?> type="radio" name="campaign_reporting" id="radio2" value="0" />
								</div></td>
						  </tr>	<tr class="gradeA">
								<td>Own Campaign Reporting</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['own_campaign_reporting']==1){echo 'checked="checked"';}?> type="radio" name="own_campaign_reporting" id="radio4" value="1" />
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['own_campaign_reporting']!=1){echo 'checked="checked"';}?> type="radio" name="own_campaign_reporting" id="radio3" value="0" />
								</div></td>
								</tr>	<tr class="gradeA">
								<td>Publication Reporting</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['publication_reporting']==1){echo 'checked="checked"';}?> type="radio" name="publication_reporting" id="radio5" value="1" />
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['publication_reporting']!=1){echo 'checked="checked"';}?> type="radio" name="publication_reporting" id="radio6" value="0" />
								</div></td>
								</tr>	<tr class="gradeA">
								<td>Network Reporting</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['network_reporting']==1){echo 'checked="checked"';}?> type="radio" name="network_reporting" id="radio5" value="1" />
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['network_reporting']!=1){echo 'checked="checked"';}?> type="radio" name="network_reporting" id="radio6" value="0" />
								</div></td>
								</tr>						
</tbody>
					</table>
                    <table class="table table-bordered table-striped">
						<thead>
							<tr style="border-top:1px solid #CCC;">
								<th width="60%">Additional Settings</th>
								<th><div align="center">Yes</div></th>
								<th><div align="center">No</div></th>
							</tr>
						</thead>
						<tbody>
<tr class="gradeA">
								<td>Server Configuration</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['configuration']==1){echo 'checked="checked"';}?> type="radio" name="configuration" id="radio" value="1" />
								  <label for="traffic_requests"></label>
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['configuration']!=1){echo 'checked="checked"';}?> type="radio" name="configuration" id="radio2" value="0" />
								</div></td>
						  </tr>	<tr class="gradeA">
								<td>Manage Traffic Requests</td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['traffic_requests']==1){echo 'checked="checked"';}?> type="radio" name="traffic_requests" id="radio4" value="1" />
								</div></td>
								<td class="center"><div align=center>
								  <input <?php if ($editdata['traffic_requests']!=1){echo 'checked="checked"';}?> type="radio" name="traffic_requests" id="radio3" value="0" />
								</div></td>
								</tr>						
</tbody>
					</table>
</div> 
						<!-- .widget-content -->
					
				</div> <!-- .widget -->
					
					<!-- .actions -->