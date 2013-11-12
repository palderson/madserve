<?php

// Include the Http Class
include_once('class.http.php');

// Instantiate it
$http = new Http();

// Set API parameters
$http->addParam('appid'   , 'a_really_random_yahoo_app_id');
$http->addParam('context' , 'I am happy because I bought a new car');
$http->addParam('output'  , 'xml');

// Get the extracted term
$http->execute('http://search.yahooapis.com/ContentAnalysisService/V1/termExtraction');

// Show result xml or error if occurred
echo ($http->error) ? $http->error : $http->result;

?>