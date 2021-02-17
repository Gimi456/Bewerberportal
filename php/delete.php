<?php
require 'connectToDB.php';
if(isset($_POST['loeschen'])) {

  $directory = '../bewerbungen';
  $selected_option = $_POST['stellenName'];
  unlink($directory.'/'.$selected_option);

  $connection = openConnection();

  $selected_option = mysqli_real_escape_string($connection, $selected_option);
  $delete_query = "DELETE FROM `stellenangebote` WHERE `stellenangebot` ='$selected_option'";
  mysqli_query($connection, $delete_query) or die(mysqli_error($connection));
  closeConnection($connection);
  header('Location: ../bewerberportalAdmin.html?absenden=erfolgreichgeloescht');
}

?>
