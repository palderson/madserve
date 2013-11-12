<?php

// Include the Http Class
include_once('class.http.php');

// Instantiate it
$http = new Http();

// Set HTTP basic authentication realms
$http->setAuth('yourusername', 'yourpassword');

// Get the protected feed
$http->execute('http://www.someblog.com/protected/feed.xml');

// Show result feed or error if occurred
echo ($http->error) ? $http->error : $http->result;

?>