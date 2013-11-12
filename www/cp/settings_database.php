<?php
global $current_section;
$current_section='configuration';

require_once '../../init.php';

// Required files
require_once MAD_PATH . '/www/cp/auth.php';

require_once MAD_PATH . '/functions/adminredirect.php';

require_once MAD_PATH . '/www/cp/restricted.php';

require_once MAD_PATH . '/www/cp/admin_functions.php';


if (!check_permission('configuration', $user_detail['user_id'])){
exit;
}


require_once MAD_PATH . '/www/cp/templates/header.tpl.php';

?>
<div id="content">		
		
		<div id="contentHeader">
			<h1>Server Configuration</h1>
		</div> <!-- #contentHeader -->	
		
		<div class="container">
			
				
			<div class="grid-24">
			
            <div class="box plain"><div class="notify notify-success"><p>Edit <?php echo MAD_PATH; ?>/conf/main.config.php to change database information.</p></div> <!-- .notify --></div>
            
                    
				<form method="post" class="form uniformForm">
                <input type="hidden" name="update" value="1" />				
					
					<div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>Main Database Settings</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
						
                            
                            <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="text" value="<?php echo $GLOBALS['_MAX']['CONF']['database']['host']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Main Database - Host</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="text" value="<?php echo $GLOBALS['_MAX']['CONF']['database']['socket']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Main Database - Socket</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="text" value="<?php echo $GLOBALS['_MAX']['CONF']['database']['socket']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Main Database - Port</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="text" value="<?php echo $GLOBALS['_MAX']['CONF']['database']['username']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Main Database - Username</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="password" value="<?php echo $GLOBALS['_MAX']['CONF']['database']['password']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Main Database - Password</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="text" value="<?php echo $GLOBALS['_MAX']['CONF']['database']['name']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Main Database - Database Name</label>
								</div>
							</div> <!-- .field-group -->
                             
                            
                            <!--<div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Update Password</button>
								</div> --> <!-- .actions -->
                            
			
							
							
						
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->
                    
                    <div class="widget">
						
						<div class="widget-header">
							<span class="icon-article"></span>
							<h3>Reporting Database Settings</h3>
						</div> <!-- .widget-header -->
						
						<div class="widget-content">
						
                        <div class="field-group">
			
								<div class="field">
									Yes <input disabled="disabled" name="rep" <?php if ($GLOBALS['_MAX']['CONF']['reportingdatabase']['useseparatereportingdatabase']==true){?>checked="checked"<?php } ?> type="radio" value="" /> No <input <?php if ($GLOBALS['_MAX']['CONF']['reportingdatabase']['useseparatereportingdatabase']!=true){?>checked="checked"<?php } ?> disabled="disabled" name="rep" type="radio" value="" />			
									<label for="current_password">Use separate Reporting Database?</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="text" value="<?php echo $GLOBALS['_MAX']['CONF']['reportingdatabase']['host']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Reporting Database - Host</label>
								</div>
							</div> <!-- .field-group -->
                            
                            <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="text" value="<?php echo $GLOBALS['_MAX']['CONF']['reportingdatabase']['socket']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Reporting Database - Socket</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="text" value="<?php echo $GLOBALS['_MAX']['CONF']['reportingdatabase']['socket']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Reporting Database - Port</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="text" value="<?php echo $GLOBALS['_MAX']['CONF']['reportingdatabase']['username']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Reporting Database - Username</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="password" value="<?php echo $GLOBALS['_MAX']['CONF']['reportingdatabase']['password']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Reporting Database - Password</label>
								</div>
							</div> <!-- .field-group -->
                            
                             <div class="field-group">
			
								<div class="field">
									<input disabled="disabled" type="text" value="<?php echo $GLOBALS['_MAX']['CONF']['reportingdatabase']['name']; ?>"  name="current_password" id="current_password" size="28" class="" />			
									<label for="current_password">Reporting Database - Database Name</label>
								</div>
							</div> <!-- .field-group -->
                             
                            
                            <!--<div class="actions">						
									<button type="submit" class="btn btn-quaternary btn-large">Update Password</button>
								</div> --> <!-- .actions -->
                            
			
							
							
						
						</div> <!-- .widget-content -->
						
					</div> <!-- .widget -->
										
					
					
					
					</form>
					
				</div> <!-- .grid -->
			
			
		</div> <!-- .container -->
		
	</div> <!-- #content -->
<?php
require_once MAD_PATH . '/www/cp/templates/footer.tpl.php';
?>