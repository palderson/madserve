<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>

	<title>mAdserve Installation Wizard</title>

	<meta charset="utf-8" />
	<meta name="description" content="" />
	<meta name="author" content="" />		
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/images/favicon.ico" />
		
	<link rel="stylesheet" href="assets/stylesheets/all.css" type="text/css" />
	
	<!--[if gte IE 9]>
	<link rel="stylesheet" href="assets/stylesheets/ie9.css" type="text/css" />
	<![endif]-->
	
	<!--[if gte IE 8]>
	<link rel="stylesheet" href="assets/stylesheets/ie8.css" type="text/css" />
	<![endif]-->
    
	
</head>

<body>

<div id="wrapper">
	
	<div id="header">
		<h1><a href="#">mAdserve Installation</a></h1>		
		
		<a href="javascript:;" id="reveal-nav">
			<span class="reveal-bar"></span>
			<span class="reveal-bar"></span>
			<span class="reveal-bar"></span>
		</a>
	</div> <!-- #header -->
	
	<div id="search">
		<!--<form>
			<input type="text" name="search" placeholder="Search..." id="searchField" />
		</form>	 -->	
	</div> <!-- #search -->
	
	<div id="sidebar">		
		
		<ul id="mainNav">			
			<li id="navDashboard" class="nav<?php if ($mad_install['step']==1){echo " active"; } ?>">
				<span class="icon-heart-fill"></span>
				<a href="#">Server Check</a>				
			</li>
            <li id="navDashboard" class="nav<?php if ($mad_install['step']==2){echo " active"; } ?>">
				<span class="icon-cog"></span>
				<a href="#">Basic Configuration</a>				
			</li>
            <li id="navDashboard" class="nav<?php if ($mad_install['step']==3){echo " active"; } ?>">
				<span class="icon-layers"></span>
				<a href="#">Database Information</a>				
			</li>
             <li id="navDashboard" class="nav<?php if ($mad_install['step']==4){echo " active"; } ?>">
				<span class="icon-key-stroke"></span>
				<a href="#">Activation</a>				
			</li>
            <li id="navDashboard" class="nav<?php if ($mad_install['step']==5){echo " active"; } ?>">
				<span class="icon-check-alt"></span>
				<a href="#">Done!</a>				
			</li>
            </ul>
	
				
	</div> <!-- #sidebar -->