  function alertMessage() {
    var urlString = window.location.href;
    var url = new URL(urlString);
    var name = url.searchParams.get("absenden");
    switch(url.searchParams.get("absenden")) {
      case "leer":
      alert("Die Eingabefelder sind nicht vollstaendig!");
      break;
      case "zeichen":
      alert("Name oder Vorname enthalten unzulaessige Zeichen!");
      break;
      case "ungueltigeemail":
      alert("Die Email-Adresse ist ungueltig!");
      break;
      case "ungueltigetelefonnummer":
      alert("Die Telefonnummer enthaelt nicht nur Ziffer!");
      break;
      case "keinezustimmungderdaten":
      alert("Dem Datenschutzerklaerungshacken ist nicht zugestimmt!");
      break;
      case "keinepdf":
      alert("Es gab keine PDF-Dokumente zum Hochladen!");
      break;
      case "errorpdf":
      alert("Datei konnte nicht hochgeladen werden!");
      break;
      case "pdfzugross":
      alert("PDF-Dokumente duerfen pro Dokument nicht groesser als 3 MB(yte) sein!");
      break;
      case "bewerbungerfolgreich":
      alert("Die Bewerbung wurde erfolgreich eingereicht und abgespeichert! Vielen Dank fuer Ihre Bewerbung.");
      break;
    }
}