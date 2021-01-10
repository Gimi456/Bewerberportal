
    var urlString = window.location.href;
    var url = new URL(urlString);
    var name = url.searchParams.get("absenden");
    switch(url.searchParams.get("absenden")) {
      case "leer":
      alert("Die Eingabefelder sind nicht vollständig!");
      break;
      case "zeichen":
      alert("Name oder Vorname enthalten unzulässige Zeichen!");
      break;
      case "ungueltigeemail":
      alert("Die Email-Adresse ist ungültig!");
      break;
      case "ungueltigetelefonnummer":
      alert("Die Telefonnummer enthält nicht nur Ziffer!");
      break;
      case "keinezustimmungderdaten":
      alert("Dem Datenschutzerklärungshacken ist nicht zugestimmt!");
      break;
      case "keinepdf":
      alert("Es gab keine PDF-Dokumente zum Hochladen!");
      break;
      case "errorpdf":
      alert("Datei konnte nicht hochgeladen werden!");
      break;
      case "pdfzugross":
      alert("PDF-Dokumente dürfen pro Dokument nicht größer als 3 MB(yte) sein!");
      break;
      case "bewerbungerfolgreich":
      alert("Die Bewerbung wurde erfolgreich eingereicht und abgespeichert! Vielen Dank für Ihre Bewerbung.");
      break;
    }
