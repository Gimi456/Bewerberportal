<?php
$whichFrame = $_POST['whichFrame'];
$value = $_POST['value'];
$file1 = "";
$ver = 'clicked';
$directory = '../bewerbungen/';
$except = array(".","..","error_log","_notes");
if (is_dir($directory)) {
  $stellenAusschreibungen = scandir($directory);
  foreach ($stellenAusschreibungen as $stellenAusschreibung) {
    if (!in_array($stellenAusschreibung, $except)) {
      if($value == $stellenAusschreibung) {
        $file1 = '../bewerbungen/' . $stellenAusschreibung . '';
      }
    }
  }
}
header('Content-type: application/pdf');
header('Content-Disposition: inline; filename="' . $file1 . '"');
header('Content-Transfer-Encoding: binary');
header('Accept-Ranges: bytes');
header('HTTP/1.0 200 OK', true, 200);
echo $file1;
?>
