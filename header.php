<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
<meta name="author" content="tutorialspoint.com">
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=yes">
<!-- Web Fonts  -->
<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css">
<!-- Libs CSS -->
<link rel="stylesheet" href="/scripts/css/bootstrap.css">
<link rel="stylesheet" href="/scripts/css/fonts/font-awesome/css/font-awesome.css">
<!-- Theme CSS -->
<link rel="stylesheet" href="/scripts/css/theme.css">
<link rel="stylesheet" href="/scripts/css/theme-elements.css">
<!-- Current Page Styles -->
<link rel="stylesheet" href="/scripts/vendor/rs-plugin/css/settings.css" media="screen">
<!-- Skin CSS -->
<link rel="stylesheet" href="/scripts/css/skins/green.css"/>
<!-- Responsive CSS -->
<link rel="stylesheet" href="/scripts/css/theme-responsive.css" />
<!-- Head Libs -->
<script src="/scripts/vendor/modernizr.js"></script>
<!--[if IE]>
<link rel="stylesheet" href="/scripts/css/ie.css">
<![endif]-->
<!--[if lte IE 8]>
<script src="/scripts/vendor/respond.js"></script>
<![endif]-->
<!-- Front Page related changes -->
<link rel="stylesheet" href="/scripts/css/custom.css"/>
<?php 
   if( isset($icon_page) ){
       echo "<link rel=\"stylesheet\" href=\"/scripts/css/tutorial-icons.css\" />\n";
   }
?>
<style>
header nav ul.nav-main ul.dropdown-menu, 
nav.mega-menu .mega-menu-signin .dropdown-menu li,
li.heading, footer div.footer-ribon, div.footer-copyright, 
header nav ul.nav-main li.dropdown:hover a {
   background-color: <?php echo "$tutorial_color";?> !important;
}
footer ul.list li{
   background: none !important;
   padding: 0px;
}
footer i.icon, footer ul.list.icons li i {
   color: <?php echo "$tutorial_color";?> !important;
}
</style>
</head>
<body>
<div class="body">
<header>
<div class="container">
<h1 class="logo">
<a href="index.htm">
<?php 
   if( isset($tutorial_home) ){
       echo "<img alt=\"tutorialspoint\" src=\"/$tutorial_home/images/logo.png\">\n";
   }else{
       echo "<img alt=\"tutorialspoint\" src=\"/scripts/img/logo.png\">\n";
   }
?>
</a>
</h1>
<div class="search">
<form method="get" id="searchform" name="searchform" action="http://www.google.com/search" target="_blank">
<input type="hidden" name="sitesearch" value="www.tutorialspoint.com"/>
<div class="input-group">
<input type="text" class="form-control search" name="q" id="q" placeholder="Search your tutorials..." onfocus="if (this.value == 'Search your tutorials...') {this.value = '';}" onblur="if (this.value == '') {this.value = 'Search your tutorials...';}">
<input value="FORID:11" name="cof" type="hidden"/>
<input type="hidden" name="ie" value="ISO-8859-1" />
<span class="input-group-btn">
<button class="btn btn-default" type="submit"><i class="icon icon-search"></i></button>
</span>
</div>
</form>
</div>
<div class="social-icons">
<ul class="social-icons">
<li class="facebook"><a href="http://www.facebook.com/tutorialspoint" target="_blank" title="Facebook">Facebook</a></li>
<li class="twitter"><a href="http://www.twitter.com/tutorialspoint" target="_blank" title="Twitter">Twitter</a></li>
<li class="rss"><a href="http://feeds.feedburner.com/SharedTutorials" target="_blank" title="tutorialspoint RSS">RSS</a></li>
</ul>
</div>
<nav>
<ul class="nav nav-pills nav-top">
<li>
<a href="/forums/index.php"><i class="icon  icon-user"></i>Forums</a>
</li>
<li>
<a href="/shorttutorials/"><i class="icon  icon-file-text-o"></i>Articles</a>
</li>
<li>
<a href="/shared-tutorials.php"><i class="icon  icon-external-link"></i>Shared</a>
</li>
</ul>
</nav>
<button class="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse">
<i class="icon icon-bars"></i>
</button>
</div>
<div class="navbar-collapse nav-main-collapse collapse">
<div class="container">
<nav class="nav-main mega-menu">
<ul class="nav nav-pills nav-main" id="mainMenu">
   <li class="dropdown">
   <a class="dropdown" href="/index.htm">
   Home
   <i class="icon icon-home"></i>
   </a>
   </li>   
   <li class="dropdown">
   <a class="dropdown" href="/computer_programming_tutorials.htm">
   Programming
   <i class="icon icon-angle-down"></i>
   </a>
   </li>
   <li class="dropdown">
   <a class="dropdown" href="/java_technology_tutorials.htm">
   Java
   <i class="icon icon-angle-down"></i>
   </a>
   </li>
   <li class="dropdown">
   <a class="dropdown" href="/web_development_tutorials.htm">
   Web
   <i class="icon icon-angle-down"></i>
   </a>
   </li>
   <li class="dropdown">
   <a class="dropdown" href="/database_tutorials.htm">
   Database
   <i class="icon icon-angle-down"></i>
   </a>
   </li>
   <li class="dropdown">
   <a class="dropdown" href="/academic_tutorials.htm">
   Academic
   <i class="icon icon-angle-down"></i>
   </a>
   </li>
   <li class="dropdown mega-menu-item mega-menu-signin signin" id="headerAccount">
   <a class="dropdown-toggle" href="/misc_tutorials.htm">
   More
   <i class="icon icon-angle-down"></i>
   </a>
   <ul class="dropdown-menu">
      <li><a href="/android/index.htm" title="Android Development">Android Development <i class="icon icon-angle-down"></i></a></li>
      <li><a href="/ios/index.htm" title="iPhone Development">iPhone Development <i class="icon icon-angle-down"></i></a></li>
      <li><a href="/management_tutorials.htm" title="Management Tutorials">Management Tutorials <i class="icon icon-angle-down"></i></a></li>
      <li><a href="/software_quality_tutorials.htm" title="Software Quality Tutorials">Software Quality Tutorials <i class="icon icon-angle-down"></i></a></li>
      <li><a href="/telecom_tutorials.htm" title="Telecom Tutorials">Telecom Tutorials <i class="icon icon-angle-down"></i></a></li>
      <li><a href="/misc_tutorials.htm" title="Miscellaneous Tutorials">Miscellaneous Tutorials <i class="icon icon-angle-down"></i></a></li>
   </ul>
   </li>
</ul>
</nav>
</div>
</div>
</header>
