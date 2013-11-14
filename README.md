mAdServe With Location aware adds
=================================

> **NOTE:** This is a BETA release. Developers contributions
> are highly appreciated

Introduction
============

From [their website](http://www.madserve.org/)
> mAdServe is a open source Mobile Ad 
> Server for iOS, Android, and Mobile Web.

But it doesn't support *Location aware ads* out of the box

Being opensource, we've implemented the server code (written in PHP) 
and client SDK's to give location awareness to the ads.


Added Features
==============

* An Advertisement can be tagged to multiple locations.
* Perimeter can be specified for each location (Similar to geo fencing).
* Location management from dashboard


How to use it
=============

The workflow will be same as with original [mAdSeve](http://www.madserve.org/).
Only difference is that now you have one more section for adding locations and 
their perimeter while creating `ad units`.


Credits
=======
* Anthonymartin for 
  [GeoLocation.php](https://github.com/anthonymartin/GeoLocation.php).
