<?php
function openConnection() {
  $user = 'root';
  $password = '123456';
  $db = 'bewerberportal';
  $host = 'localhost';
  $port = 3306;

  $connection = mysqli_connect($host, $user, $password, $db) or die("Konnte keine Verbindung aufbauen.");

  return $connection;
}

function closeConnection($connection) {
  $connection  -> close();
}

?>
