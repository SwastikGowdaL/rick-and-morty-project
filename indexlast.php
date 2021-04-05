<?php
   include ('connect_to_sql.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>score page</title>

    <meta property="og:title" content="" />
    <meta property="og:type" content="" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/main.css" />
<link rel="stylesheet" href="css/style3.css">
<link rel="stylesheet" href="css/typography.css" />

        <!-- Place any css cdn scripts here-->
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
  
      <script defer src="https://friconix.com/cdn/friconix.js"> </script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  
      <meta name="theme-color" content="#fafafa" />


</head>
<body>
   
    <div class="main-space">
<br>

<div class="sub-space-ele0">
  <div class="sub-space-ele0-1">
<p style="text-align: center;">Thanks for the playing the trivia <span style="color: greenyellow; " id="name"></span></p>
  </div>
</div>

<div class="sub-space-ele1">
<div class="sub-space-ele1-1">
    <p>Your score - <span style="color: greenyellow;" id="score"></span> / 10</p>
    
</div>    
</div>
<br>
<div class="sub-space-ele2">

    <div class="share-btn">share on <i class="fi-cnluxl-facebook-circle icon"></i></div>
    <div class="share-btn">share on <i class="fi-xnsuxl-instagram icon"></i></div>

</div>
<br>
    <br>
<div class="sub-space-ele3">

  <p class="leaderboard">Leaderboard</p>

</div>

<div class="sub-space-ele4">
  <center>
<table class="table-style">
<thead class="table-heading">
<tr>
  <th>No.</th>
  <th>Name</th>
  <th>Score</th>
</tr>
</thead>

<tbody class="table-data" >
  <tr>
    <td >1.</td>
    <td id="name1">swastik</td>
    <td id="score1">5</td>
  </tr>
  <tr>
    <td >2.</td>
    <td id="name2">ujwal</td>
    <td id="score2">3</td>
  </tr>
  <tr>
    <td>3.</td>
    <td id="name3">vignesh</td>
    <td id="score3">2</td>
  </tr>
</tbody>

</table>
</center>
</div>
<br>
<div class="sub-space-ele5">

  <div class="sub-space-ele5-1">
  <div id="tryagain" class="tryagain-btn">TRY again</div>
</div>
</div>

<br>

<div class="sub-space-ele6">
  <a
    target="_blank"
    href="https://swastikgowdal.github.io/SwastikGowda-Portfolio/"
  >
    <span style="color: rgb(209, 208, 208)">Developed By</span> Team
    Coder_rna</a
  >
</div>

    </div>

    
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
      crossorigin="anonymous"
    ></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="js/vendor/modernizr-3.11.2.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script src="js/postquiz.js"></script>

    <!-- Place any js cdn scripts here-->

    <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
    <script>
        window.ga = function () {
          ga.q.push(arguments);
        };
        ga.q = [];
        ga.l = +new Date();
        ga("create", "UA-XXXXX-Y", "auto");
        ga("set", "anonymizeIp", true);
        ga("set", "transport", "beacon");
        ga("send", "pageview");
      </script>
      <script src="https://www.google-analytics.com/analytics.js" async></script>

</body>
</html>