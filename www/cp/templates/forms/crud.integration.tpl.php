<?php if ($publication_detail['inv_type']==3){ ?>
<div class="widget widget-tabs">
			
					<div class="widget-header">
						<h3 class="icon aperture">Select Integration Code Type:</h3>
							
						<ul class="tabs right">	
							<?php get_code_snippets('tab', $_GET['zone']); ?>			
						</ul>					
					</div> <!-- .widget-header -->
				
					<?php get_code_snippets('tabcontent', $_GET['zone']); ?>	
				
			</div> <!-- .widget -->
<?php } ?>
<?php if ($publication_detail['inv_type']==1){ ?>
<a href="../../<?php echo MAD_IOS_SDK_LOCATION; ?>" class="btn btn-quaternary btn-large dashboard_add">Download iOS SDK + Integration Instructions</a>
<?php } ?>
<?php if ($publication_detail['inv_type']==2){ ?>
<a href="../../<?php echo MAD_ANDROID_SDK_LOCATION; ?>" class="btn btn-quaternary btn-large dashboard_add">Download Android SDK + Integration Instructions</a>
<?php } ?>