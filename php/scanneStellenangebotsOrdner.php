<?php
function scanneStellenangebotsOrdner() {
  $connection = openConnection();
  $var = 0;
  $ver = 'clicked';
  $directory = 'bewerbungen/';
  $except = array(".","..","error_log","_notes");

  if (is_dir($directory)) {
    $stellenAusschreibungen = scandir($directory);
    foreach ($stellenAusschreibungen as $stellenAusschreibung) {
      $standort = "SELECT standort FROM stellenangebote WHERE stellenangebot='$stellenAusschreibung'";
      $query_standort = mysqli_query($connection, $standort) or die(mysqli_error($connection));
      $spalte = mysqli_fetch_array($query_standort);
      $spalteStandortString = $spalte['standort'];
      $bereich = "SELECT bereich FROM stellenangebote WHERE stellenangebot='$stellenAusschreibung'";
      $query_bereich = mysqli_query($connection, $bereich) or die(mysqli_error($connection));
      $bereichArray = mysqli_fetch_array($query_bereich);
      $spalteBereichString = $bereichArray['bereich'];
      if (!in_array($stellenAusschreibung,$except)) {
        $var++;
        echo '<div class="row center-xs center-sm center-md center-lg arrowWithPDF">
                <div class="col-xs-10 col-sm-11 col-md-11 col-lg-11 stellenauschreibung-content">
                  <h4 filterStandort="' . $spalteStandortString . '" filterBereich="' . $spalteBereichString . '" id="addForm' . $var . '">' . $stellenAusschreibung . '</h4>
                </div>
                <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1 arrowDown">
                  <h4><img src="images/arrowDown.png" alt="Arrow down should be here, click" id="arrow' . $var . '" name="filepng"></h4>
                </div>
              </div>';
      } else if( array_slice(scandir($directory),2) == null ) {
       echo '<div class="row center-xs center-sm center-md center-lg closedBewerber">
              <div class="col-xs-10 col-sm-12 col-md-12 col-lg-12 noAusschreibung-content">
                <h4>Momentan sind keine Stellenangebote vorhanden.<br>Versuchen sie es zu einem späteren Zeitpunkt erneut.<br>Vielen Dank.</h4>
              </div>
            </div>';
            break;
      }
    }
  }
}
?>
