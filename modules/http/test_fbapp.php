<?php

// Include the Http Class
include_once('class.http.php');

// Instantiate it
$http = new Http();

// Get Facebook Application page
$http->execute('http://www.facebook.com/apps/index.php');

// Show result page or error if occurred
echo ($http->error) ? $http->error : $http->result;

?>
