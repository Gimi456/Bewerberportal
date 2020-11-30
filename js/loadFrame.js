function loadFrame(clicked_id) {

  var arrowClicked = clicked_id.substring(5,6);
  var whichFrame = "show_pdf" + arrowClicked;
  var whichForm = 'addForm' + arrowClicked;
  var value = document.getElementById(whichForm).innerHTML;

  $.post('php/readPdf.php', {whichFrame:whichFrame,value:value},
  function(data) {
    $('#'+whichFrame+'').prop('src', data);
  });
}
