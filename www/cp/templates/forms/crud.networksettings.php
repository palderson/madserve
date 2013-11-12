
                                       <div class="notify">			
                        <h3>Traffic Request Settings</h3>			
						
						<p><input <?php if ($editdata['network_auto_approve']==1){echo'checked="checked"'; }?> name="network_auto_approve" id="network_auto_approve" type="checkbox" value="1" />
						<label for="network_auto_approve"><strong>Auto Approve - </strong>Automatically approve traffic-requests coming in from this ad network.</label></p><p><input id="network_aa_min" <?php if ($editdata['network_aa_min']==1){echo'checked="checked"'; }?> name="network_aa_min" type="checkbox" value="1" />
						Only automatically approve if the campaign pays at least a 
						  <label for="network_aa_min"> CPC of $<input type="text" value="<?php if (isset($editdata['network_aa_min_cpc'])){ echo $editdata['network_aa_min_cpc']; } else { echo '0.10'; } ?>"  name="network_aa_min_cpc" id="network_aa_min_cpc" size="2" class="" />
					        or a CPM of $
				            <input type="text" value="<?php if (isset($editdata['network_aa_min_cpm'])){ echo $editdata['network_aa_min_cpm']; } else { echo '2.50'; } ?>"  name="network_aa_min_cpm" id="network_aa_min_cpm" size="2" class="" />
						  </label>
						</p>
					</div> <!-- .notify -->
                  