<?php
function logout() {
  session_start();
  if (isset($_GET['logout'])) {
    session_destroy();
    unset($_SESSION['benutzeremail']);
    header("location: login.html?absenden=abmelden");
  }
}
?>
