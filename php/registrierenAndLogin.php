<?php
require 'connectToDB.php';
session_start();

if(isset($_POST['submit'])) {
  $connection = openConnection();

  $email = "";
  $benutzer_name = "";
  $benutzer_vorname = "";
  $errors = array();
  $salt_password = $_POST['passwordFirst'];
  $salt_password .= 'salt432';
  $hash_salt_password = md5($salt_password);


  $email = mysqli_real_escape_string($connection, $_POST['emailadresse']);
  $benutzer_name = mysqli_real_escape_string($connection, $_POST['name']);
  $benutzer_vorname = mysqli_real_escape_string($connection, $_POST['vorname']);
  $password_one = mysqli_real_escape_string($connection, $hash_salt_password);

  $benutzer_check_query = "SELECT * FROM `accounts` WHERE `benutzeremail`='$email' LIMIT 1";
  $result = mysqli_query($connection, $benutzer_check_query);
  $benutzer = mysqli_fetch_assoc($result);

  if($benutzer['benutzeremail'] === $email) {
    header('Location: ../registrieren.html?absenden=emailvorhanden');
  } else {
    if(!isset($_POST['datenschutzErklaerung'])) {
      header("Location: ../registrieren.html?absenden=keinezustimmungderdaten");
  } else {
      $insert_query = "INSERT INTO `accounts` (`name`, `nachname`, `benutzeremail`, `passwort`)
      VALUES ('$benutzer_name', '$benutzer_vorname', '$email', '$password_one')";
      mysqli_query($connection, $insert_query) or die(mysqli_error($connection));
      closeConnection($connection);

      $_SESSION['benutzeremail'] = $email;
      $_SESSION['erfolgreich'] = 'Erfolgreich';
      header('Location: ../bewerberportal.html?absenden=registrationerfolgreich');
    }
  }
}

if(isset($_POST['login_user'])) {
  $connection = openConnection();
  $password = $_POST['password'];
  $password .= 'salt432';
  $password = md5($password);
  $email = mysqli_real_escape_string($connection, $_POST['emailadresse']);
  $password = mysqli_real_escape_string($connection, $password);

  if(!empty($email) & !empty($password)) {
    $query = "SELECT * FROM accounts WHERE benutzeremail='$email' AND passwort='$password'";
    $results = mysqli_query($connection, $query);
    if(mysqli_num_rows($results) == 1) {
      $_SESSION['benutzeremail'] = $email;
      $_SESSION['erfolgreich'] = 'Erfolgreich';
      header('Location: ../bewerberportal.html?absenden=loginerfolgreich');
    } else {
      header('Location: ../login.html?absenden=loginfehlerhaft');
    }
  }
}
?>
