<?php 

require 'Files.php';

// Combine stylesheets files
Files::combine(
	array (
  		
		'stylesheets/reset.css'
		, 'stylesheets/text.css'
		, 'stylesheets/layout.css'
		, 'stylesheets/sprite.css'
		, 'stylesheets/form.css'
		, 'stylesheets/buttons.css'
		, 'stylesheets/grid.css'
		, 'stylesheets/tables.css'
				
		, 'stylesheets/plugins/visualize.css'
		, 'stylesheets/plugins/uniform.default.css'
		, 'stylesheets/plugins/jquery.ui.timepicker.css'
		, 'stylesheets/plugins/fullcalendar.css'
		, 'stylesheets/plugins/validationEngine.jquery.css'
		, 'stylesheets/plugins/tipsy.css'
		, 'stylesheets/plugins/modal.css'
		, 'stylesheets/plugins/alert.css'
		, 'stylesheets/plugins/colorpicker.css'		
		, 'stylesheets/plugins/demo_table.css'
		, 'stylesheets/plugins/jquery.lightbox-0.5.css'
		
		, 'stylesheets/dashboard.css'
		, 'stylesheets/progress-bar.css'
		, 'stylesheets/notify.css'
		, 'stylesheets/pagination.css'
		, 'stylesheets/bullets.css'
		, 'stylesheets/quickNavCenter.css'
		, 'stylesheets/tickets.css'
				
		, 'stylesheets/errors.css'
		
		
		
		
		, 'stylesheets/widgets.css'
		, 'stylesheets/widget-table.css'
		, 'stylesheets/widget-tabs.css'
		, 'stylesheets/widget-codeview.css'
		, 'stylesheets/widget-calendar.css'
		, 'stylesheets/widget-map.css'
		
		
		
		, 'stylesheets/theme-default.css'
		, 'stylesheets/canvas.css'
		
		, 'stylesheets/custom-theme/jquery-ui-1.8.17.custom.css'
		
		, 'stylesheets/responsive.css'
	)				
	, 'stylesheets/all.css'); 
	
// Combine JS files			
 Files::combine(
 	array (
 		'javascripts/jquery-1.7.1.min.js'
 		, 'javascripts/jqueryui-1.8.16.min.js'
 		, 'javascripts/Layout.js'
 		, 'javascripts/Nav.js'
 		, 'javascripts/Menu.js'
 		
 		, 'javascripts/misc/excanvas.min.js'
 		, 'javascripts/plugins/jquery.visualize.js'
 		, 'javascripts/plugins/jquery.visualize.tooltip.js'
 		, 'javascripts/plugins/jquery.dataTables.min.js'
 		, 'javascripts/plugins/jquery.uniform.min.js'
 		, 'javascripts/plugins/jquery.ui.timepicker.js'
 		, 'javascripts/plugins/fullcalendar.min.js'
 		, 'javascripts/plugins/jquery.tipsy.js'
 		, 'javascripts/plugins/jquery.validationEngine.js'
 		, 'javascripts/plugins/jquery.validationEngine-en.js'
 		, 'javascripts/plugins/jquery.lightbox-0.5.min.js'

 		, 'javascripts/plugins/jquery.modal.js'
 		, 'javascripts/plugins/jquery.alert.js'
 		
 		, 'javascripts/plugins/widget-tabs.js'
 		
 		, 'javascripts/plugins/jquery.googlemaps.pack.1.01.js'

 		, 'javascripts/plugins/colorpicker.js'
 		, 'javascripts/ChartHelper.js'
 		
 		//, 'javascripts/plugins/jquery.googlemaps.pack.1.01.js'
 		
 		, 'javascripts/app.js'

 	)				
 	, 'javascripts/all.js'); 
?>