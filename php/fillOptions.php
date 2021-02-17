<?php
require 'connectToDB.php';

function fillStandort() {
  $connection = openConnection();
  $standort_query = "SELECT `standort` FROM `stellenangebote`";
  $standorte_erg = mysqli_query($connection, $standort_query);
  $spalte = array_column($standorte_erg, 'standort');

  closeConnection($connection);
}

function fillBereich() {

}



?>
