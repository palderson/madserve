<?php

// Include the Http Class
include_once('class.http.php');

// Instantiate it
$http = new Http();

// Let's not use cURL
$http->useCurl(false);

// POST method
$http->setMethod('POST');

// POST parameters
$http->addParam('user_name' , 'yourusername');
$http->addParam('password'  , 'yourpassword');

// Referrer
$http->setReferrer('https://yourproject.projectpath.com/login');

// Get basecamp dashboard (HTTPS)
$http->execute('https://yourproject.projectpath.com/login/authenticate');

// Show result page or error if occurred
echo ($http->error) ? $http->error : $http->result;

?>
