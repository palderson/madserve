<link rel="stylesheet" href="assets/stylesheets/sample_pages/reports.css" type="text/css" />
<?php print_summary_widget($_POST); ?>
<!--<div class="widget widget-plain">
					
					<div class="widget-content">
				
				
				
						<div id="big_stats" class="cf">
							<div class="stat">								
								<h4>Impressions</h4>
								<span class="value">1,112,232</span>								
							</div> 
							
							<div class="stat">								
								<h4>Clicks</h4>
								<span class="value">22,121</span>								
							</div> 
							
							<div class="stat">								
								<h4>CTR</h4>
								<span class="value">1.23%</span>								
							</div> 
							
						</div>
						
					</div> 
					
				</div> 
                 -->
                 <?php print_graph_widget($_POST); ?>
                <!--<div class="widget">
					
						<div class="widget-header">
							<span class="icon-chart"></span>
							<h3 class="icon chart">Summary Report</h3>		
						</div>
					
						<div class="widget-content">
							<table class="stats" data-chart-type="line" data-chart-colors="">

							<thead>
										<tr>
											<td>&nbsp;</td>
											<th>Nov&nbsp;28</th>
											<th>Nov&nbsp;29</th>
											<th>Nov&nbsp;30</th>
											<th>Nov&nbsp;31</th>
											<th>Dec&nbsp;1</th>
											<th>Dec&nbsp;2</th>
											<th>Dec&nbsp;3</th>
										</tr>
			
									</thead>
									
									<tbody>
										
										<tr>
											<th>Requests</th>
											<td>492</td>
											<td>478</td>
											<td>507</td>
											<td>518</td>
											<td>505</td>
											<td>536</td>
											<td>561</td>
										</tr>	
										
										<tr>
											<th>Impressions</th>
											<td>586</td>
											<td>652</td>
											<td>610</td>
											<td>658</td>
											<td>689</td>
											<td>674</td>
											<td>679</td>
										</tr>	
										
										<tr>
											<th>Clicks</th>
											<td>689</td>
											<td>732</td>
											<td>845</td>
											<td>786</td>
											<td>815</td>
											<td>859</td>
											<td>907</td>
										</tr>														
									</tbody>
							</table>
						</div> 
					
				</div> -->
              
				<?php print_detail_widget($_POST); ?>
                
                <div class="actions">						
								<button onclick="window.location='reporting.php<?php echo '?type='.$_POST['report_type'].''; ?>';" class="btn btn-quaternary"><span class="icon-plus"></span>New Report</button>
								</div>
              
                
					<!--<div class="widget widget-table"><div class="widget-header"><span class="icon-list"></span><h3 class="icon chart">Detailed Statistics</h3></div><div class="widget-content"><table class="table table-bordered table-striped"><thead><tr><th width="17%">Publication</th><th width="16%">Requests</th><th width="17%">Impressions</th><th width="15%">Clicks</th><th width="19%">CTR</th><th width="16%">Fill Rate</th></tr></thead><tbody></tbody></table></div></div> -->