<?php
/**
* Validation Class
* v3.0
* Last Updated: Mar 28, 2011
* URL: http://www.nickyeoman.com/blog/php/104-php-validation-class
*
* Changelog:
* v2 now works with PHP 5.3 and up
* v3 is easy to intergrate into CI as a library (renamed) + bug fixes
**/
 
class Validate {
 
  /**
  * If an email is Valid it returns the parameter
  * other wise it will return false 
  * $email is the email address
  **/
  function isEmail($email) {
 
    //email is not case sensitive make it lower case
    $email =  strtolower($email);
 
    //check if email seems valid
    if (preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $email)) {
      return $email;
    }
 
    return false;
 
  }
 
  /**
  * Checks if there are 7 or 10 numbers, if so returns cleaned parameter(no formating just numbers)
  * other wise it will return false 
  * $phone is the phone number
  * $ext if set to true return an array with extension separated
  **/
  function isPhone($phone, $ext = false) {
 
    //remove everything but numbers
    $numbers = preg_replace("%[^0-9]%", "", $phone );
 
    //how many numbers are supplied
    $length = strlen($numbers);
 
    if ( $length == 10 || $length == 7 ) { //Everything is find and dandy
 
      $cleanPhone = $numbers;
 
      if ( $ext ) {
        $clean['phone'] = $cleanPhone;
        return $clean;
      } else {
        return $cleanPhone;
      }
 
    } elseif ( $length > 10 ) { //must be extension
 
      //checks if first number is 1 (this may be a bug for you)
      if ( substr($numbers,0,1 ) == 1 ) {
        $clean['phone'] = substr($numbers,0,11);
        $clean['extension'] = substr($numbers,11);
      } else {
        $clean['phone'] = substr($numbers,0,10);
        $clean['extension'] = substr($numbers,10);
      }
 
      if (!$ext) { //return string
 
        if (!empty($clean['extension'])) {
          $clean = implode("x",$clean);
        } else {
          $clean = $clean['phone'];
        } 
 
        return $clean;
 
 
      } else { //return array
 
        return $clean;
      }
    } 
 
    return false;
 
  }
 
  /**
  * Canadian Postal code
  * thanks to: http://roshanbh.com.np/2008/03/canda-postal-code-validation-php.html
  **/
  function isPostalCode($postal) {
    $regex = "/^([a-ceghj-npr-tv-z]){1}[0-9]{1}[a-ceghj-npr-tv-z]{1}[0-9]{1}[a-ceghj-npr-tv-z]{1}[0-9]{1}$/i";
 
    //remove spaces
    $postal = str_replace(' ', '', $postal);
 
    if ( preg_match( $regex , $postal ) ) {
      return $postal;
    } else {
      return false;
    }
 
  }
 
  /** 
  * Checks for a 5 digit zip code
  * Clears extra characters
  * returns clean zip
  **/
  function isZipCode($zip) {
    //remove everything but numbers
    $numbers = preg_replace("[^0-9]", "", $zip );
 
    //how many numbers are supplied
    $length = strlen($numbers);
 
    if ($length != 5) {
      return false;
    } else {
      return $numbers;
    }
  }
 
}
/** End Validation **/
?>