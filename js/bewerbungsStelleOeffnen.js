function bewerbungsStelleOeffnen(clicked_id) {
  var arrowClicked = clicked_id;
  var arrowClicked = arrowClicked.substring(5,6);
  var stringDaten = "datenschutzErklaerung" + arrowClicked;

  Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling);
  }, false;

  var createForm = document.createElement("form");
  var string =  '<iframe id="show_pdf'+ arrowClicked + '" name="'+clicked_id+'" class="framex"></iframe>'+
                '<input type="hidden" name="welcheBewerbung" id="'+arrowClicked+'">'+
                '<br>'+
                '<br>'+
                '<label>Name: '+
                '<br>'+
                '    <input type="text" name="name" placeholder="Name" onclick="this.setSelectionRange(0, this.value.length)">'+
                '</label>'+
                '<br>'+
                '<label>Vorname: '+
                '<br>'+
                '    <input type="text" name="vorname" placeholder="Vorname" onclick="this.setSelectionRange(0, this.value.length)">'+
                '</label>'+
                '<br>'+
                '<label>Email: '+
                '<br>'+
                '   <input type="email" name="emailadresse" placeholder="max.mustermann@gmail.de">'+
                '</label>'+
                '<br>'+
                '<label>Telefon- oder Handynummer: '+
                '<br>'+
                '   <input type="tel" name="telefonnummer" placeholder="Telefon/Handynummer" onclick="this.setSelectionRange(0, this.value.length)">'+
                '<br>'+
                '</label>'+
                '<br>'+
                ' <input type="checkbox" id="'+
                stringDaten +
                '" name="datenschutzErklaerung">Hiermit bestätige ich, dass ich die '+
                '<button type="button" id="buttonDaten" data-modal-target="#modal" onclick="getDatenschutzerklaerungsText();">'+
                ' Datenschutzerklärung' +
                '</button>' +
                ' durchgelesen habe und damit einverstanden bin.'+
                '<br>'+
                '<br>'+
                '<label>Laden Sie bitte ihre Bewerbungsunterlagen hoch.'+
                '  <br>'+
                '     <input name="file[]" type="file" id="datei" accept="application/pdf" multiple>'+
                '</label>'+
                '<br>'+
                '<br>'+
                '<button type="submit" name="submit">Bewerbungsunterlagen absenden</button>'+
                '<br>';

    var add = "addForm" + arrowClicked;
    var bewerbungsFormular = "bewerbungsFormular" + arrowClicked;
    createForm.innerHTML = string;
    createForm.setAttribute("id", "bewerbung");
    createForm.setAttribute("class", bewerbungsFormular);
    createForm.setAttribute("method", "POST");
    createForm.setAttribute("action", "php/bewerbungsUnterlagenAbsenden.php");
    createForm.setAttribute("enctype", "multipart/form-data");

    if(document.getElementById(add).nextSibling.tagName !== "FORM") {
      createForm.appendAfter(document.getElementById(add));
      changeArrow(clicked_id);
      getDatenschutzerklaerungsText();
    } else if(document.getElementById(add).nextSibling.tagName == "FORM") {
      var element = document.getElementById(add).nextSibling;
      element.parentNode.removeChild(element);
      changeArrow(clicked_id);
    }

    loadFrame(clicked_id);

    var changeValue = document.getElementById(arrowClicked);
    var getValueOfJob = document.getElementById(add).innerHTML;
    changeValue.innerHTML = getValueOfJob;
    changeValue.setAttribute("value", getValueOfJob);
}
