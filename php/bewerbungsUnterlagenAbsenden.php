<?php
require 'connectToDB.php';
if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $vorName = $_POST['vorname'];
  $emailAdresse = $_POST['emailadresse'];
  $telefonNummer = $_POST['telefonnummer'];
  $bewerbung = $_POST['welcheBewerbung'];
  if(empty($name) || empty($vorName) || empty($emailAdresse) || empty($telefonNummer)) {
    header("Location: ../bewerberportal.html?absenden=leer");
    exit();
  } else {
    if(!preg_match("/^[a-zA-Z]*$/", $name) || !preg_match("/^[a-zA-Z]*$/", $vorName)) {
      header("Location: ../bewerberportal.html?absenden=zeichen");
      exit();
    } else {
      if(!filter_var($emailAdresse, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../bewerberportal.html?absenden=ungueltigeemail");
        exit();
      } else {
        if(!preg_match("/^[0-9]+$/i", $telefonNummer)) {
          header("Location: ../bewerberportal.html?absenden=ungueltigetelefonnummer");
          exit();
        } else {
          if(!isset($_POST['datenschutzErklaerung'])) {
            header("Location: ../bewerberportal.html?absenden=keinezustimmungderdaten");
            exit();
          } else {
            $file = $_FILES['file'];
            $total = count($_FILES['file']['name']);

            for($i = 0; $i < $total; $i++) {
            $fileName = $_FILES['file']['name'][$i];
            $fileTmpName = $_FILES['file']['tmp_name'][$i];
            $fileSize = $_FILES['file']['size'][$i];
            $fileError = $_FILES['file']['error'][$i];

            $fileExt = pathinfo($fileName, PATHINFO_EXTENSION);
            $allowed = array('pdf');

            if(!in_array($fileExt, $allowed)) {
              header("Location: ../bewerberportal.html?absenden=keinepdf");
              exit();
            } else {
              if($fileError === 1) {
                header("Location: ../bewerberportal.html?absenden=errorpdf");
                exit();
              } else {
                if($fileSize > 3000000) {
                  header("Location: ../bewerberportal.html?absenden=pdfzugross");
                  exit();
                } else {
                    if($fileTmpName != "") {
                      $directory = '../uploads/'.$bewerbung;
                      if(!is_dir($directory)) {
                        mkdir($directory, 0700, true);
                      }
                      $directory = '../uploads/'.$bewerbung.'/'.$name.$vorName.$telefonNummer;
                      if(!is_dir($directory)) {
                        mkdir($directory, 0700, true);
                      }
                      move_uploaded_file($fileTmpName, '../uploads/'.$bewerbung.'/'.$name.$vorName.$telefonNummer.'/'.$fileName);
                      $current = $name.PHP_EOL.$vorName.PHP_EOL.$emailAdresse.PHP_EOL.$telefonNummer.PHP_EOL.$bewerbung;
                      file_put_contents('../uploads/'.$bewerbung.'/'.$name.$vorName.$telefonNummer.'/Personalien.txt', $current);
                      beziehungsTabelleBewerberStelle($bewerbung, $emailAdresse);
                      header("Location: ../bewerberportal.html?absenden=bewerbungerfolgreich");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
} else {
  header("Location: ../bewerberportal.html");
  exit();
}

function beziehungsTabelleBewerberStelle($fileName, $email) {
  $connection = openConnection();
  $email = mysqli_real_escape_string($connection, $email);
  $fileName = mysqli_real_escape_string($connection, $fileName);
  $query = "SELECT * FROM `accounts` WHERE `benutzeremail`='$email'";
  $results = mysqli_query($connection, $query);

  if(mysqli_num_rows($results) == 1) {
    $insert_query = "INSERT INTO `bewerbungen` (`accountId`, `stellenangeboteId`)
    VALUES ((SELECT id FROM accounts WHERE benutzeremail = '$email'),
    (SELECT idStellenangebot FROM stellenangebote WHERE stellenangebot = '$fileName'))";

    mysqli_query($connection, $insert_query) or die(mysqli_error($connection));
  }
  closeConnection($connection);
}

?>
