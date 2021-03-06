<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Family Token Staking</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/FC.png" rel="icon" type="image/png">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/bridgeCSS.css" rel="stylesheet">

  
</head>

<body>

  <div id="token-choose">
    <div id="token-choose-body">
      <h3 id="select-a-token">Select a token</h3>
      <img id="close-x" src="assets\img\close-x.png" onclick="hideTokens()">
      <br/>
      <hr style="height: 1px; color: aliceblue; margin-top: 35px;"/>
      <input id="token-input" placeholder="Search by name or paste address" onkeypress="search()" onkeydown="search()">

      <div id="token-select">
      </div>
    </div>
  </div>
  <div id="transfer">

    <select name="pets" id="bridge-select">
      <option value="BSCETH">BSC->ETH</option>
      <option value="ETHBSC">ETH->BSC</option>
  </select>
  <br/>
  <div id="token" onclick="showTokens()">
    <img  id="token-icon" src="assets/img/FT.png"><h6 id="token-name">FT</h6>
    <img id="downArrow" src="assets/img/white-transparent-arrow.png">
  </div>

    <input id="to" class="buttom" autocomplete="off">
    <input id="amount" class="buttom" autocomplete="off">
    <input id="fee" class="buttom" autocomplete="off">
    <input id="claimingFee" class="buttom" autocomplete="off">
    <br/><br/>
    <center><input id="submit" type="submit" value="Transfer" style="width: 150px;" onclick="transfer()"></center>
    <br/>
    <center><h6 id="status"></h6></center>
	<p style="text-align: center; margin-left: auto; margin-right: auto;"><h8 style="text-align: center;" id="address"></h8></p>
  </div>
  <br/>
  <br/><br/>






  <main id="main">

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

  <script type="text/javascript" src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
  <script type="text/javascript" src=".\assets\js\bridge.js"></script>
  <script type="text/javascript" src=".\assets\js\bridgeJSstyle.js"></script>

</body>

</html>
