<?php
global $current_section;
$current_section='inventory';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';



require_once MAD_PATH . '/www/cp/templates/header.tpl.php';

if (!check_permission('inventory', $user_detail['user_id'])){
    exit;
}

if (check_permission_simple('modify_publications', $user_detail['user_id'])){
    if (isset ($_GET['delete']) && $_GET['delete']==1 && is_numeric($_GET['id'])){
        delete_publication($_GET['id']);
    }
}

?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>Inventory</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
				
                                <div class="grid-24">	

                                        <div class="widget widget-table">

                                                <div class="widget-header">
                                                        <span class="icon-list"></span>
                                                        <h3 class="icon chart">Locations List</h3>		
                                                </div>

                                                <div class="widget-content">

                                                        <table id="locations-table" class="table table-bordered table-striped data-table">
                                                <thead>
                                                        <tr>
                                                                <th>Location Name</th>
                                                                <th>Latitude</th>
                                                                <th>Longitude</th>
                                                                <th>Actions</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
<?php get_locations(); ?>					
</tbody>
                                        </table>
        </div> 
                                                <!-- .widget-content -->

                                </div> <!-- .widget -->

                                        <div class="actions">						
                                                                <button onclick="window.location='add_location.php';" class="btn btn-quaternary"><span class="icon-plus"></span>Create New Location</button>
                                                                </div> <!-- .actions -->
                        </div> <!-- .grid -->
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->	

<?php global $jsload; $jsload=1;?>
<script src='assets/javascripts/all.js'></script>
<script>
$(function () {
    $('.btn-location-delete').live ('click', function (e) {
        e.preventDefault ();
        var locationId = $(this).attr('data-location-id');
        $.alert ({ 
            type: 'confirm', 
            title: 'Delete Location?', 
            text: '<p>Are you sure you want to delete this Location?</p>', 
            callback: function () { 
                window.location='view_locations.php?delete=1&id='+locationId; 
            }	
        });		
    });
});
</script>
<?php
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>
