<?php
 class Files
 {
 	private static function process($files, $output, $base_dir = '')
 	{
 		$contents 	= '';
 		
 		# If this is a string then it's a search pattern
 		if(is_string($files))
 		{
 			$files = glob($files);
 		}
 		
 		foreach ($files as $file) 
 		{
 			$contents .= file_get_contents($base_dir.$file) . "\n\n";
 		}
 	
 		# TODO locking 
 		if ($fp = fopen($output, 'wb')) 
 		{
 			fwrite($fp, $contents);
 			fclose($fp);
 		}
 	
 		return $contents;
 	}
 	
 	#
 	# Combine all CSS files in the css directory:
 	#
 	#	echo Files::combine("css/*.css", "css/all.css");
 	#
 	# Combine only specified files in the given order:
 	#
 	#	echo Files::combine(array("css/core.css", "css/default.css"), "css/all.css");
 	#
 	#
 	static function combine($files, $output_filename, $base_dir = '')
 	{
 		self::process($files, $output_filename, $base_dir);
 	}
 }
 
 ?>