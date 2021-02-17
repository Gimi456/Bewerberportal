<?php
require 'connectToDB.php';
if(isset($_POST['hochladen'])) {
  $file = $_FILES['file'][0];
  $fileName = $_FILES['file']['name'][0];
  $fileTmpName = $_FILES['file']['tmp_name'][0];
  $fileExt = pathinfo($fileName, PATHINFO_EXTENSION);
  $allowed = array('pdf');


  if(!in_array($fileExt, $allowed)) {
    header("Location: ../bewerberportalAdmin.html?absenden=keinepdf");
    exit();
  } else {
    if($fileTmpName != "") {
      $directory = '../tmpFiles';
      if(empty($_POST['standort']) & empty($_POST['bereich'])) {
        header("Location: ../bewerberportalAdmin.html?absenden=leer");
        exit();
      } else {
        move_uploaded_file($fileTmpName, $directory.'/'.$fileName);
        $destinationFile = '../bewerbungen/'.$fileName;
        rename($directory.'/'.$fileName, $destinationFile);
        $standort = $_POST['standort'];
        $bereich = $_POST['bereich'];
        insertFileIntoDB($fileName, $standort, $bereich);
        header("Location: ../bewerberportalAdmin.html?absenden=uploaderfolgreich");
      }
    }
  }
}

function insertFileIntoDB($fileName, $standort, $bereich) {
  $connection = openConnection();
  $fileName = mysqli_real_escape_string($connection, $fileName);
  $standort = mysqli_real_escape_string($connection, $standort);
  $bereich = mysqli_real_escape_string($connection, $bereich);

  $insert_query = "INSERT INTO `stellenangebote` (`stellenangebot`, `standort`, `bereich`)
  VALUES ('$fileName', '$standort', '$bereich')";
  mysqli_query($connection, $insert_query) or die(mysqli_error($connection));
  closeConnection($connection);
}
?>
