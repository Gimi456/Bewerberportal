function loadSelectionForBereichFilter() {
  var getBereich = document.querySelectorAll('*[filterbereich]');
  var arrayForSelections = [];


  for(var i = 0; i < getBereich.length; i++) {
    arrayForSelections.push($(getBereich[i]).attr('filterbereich'));
    var option = new Option(arrayForSelections[i], arrayForSelections[i]);
    option.innerHTML = arrayForSelections[i];
    document.getElementById('stelleBereich').appendChild(option);
  }
}

function filterDenBereich() {
  var getSelected = document.getElementById('stelleBereich');
  var value = getSelected.options[getSelected.selectedIndex].text;
  var getBereich = document.querySelectorAll('*[filterbereich]');

  var boxNode = document.getElementById('addForm1').parentNode;
  boxNode.parentNode.style.display='none';

  if(value === 'Alle') {
    var boxNode = document.getElementById('addForm1').parentNode;
    boxNode.style.display='block';
    boxNode.parentNode.style.display='block';
  }
}
  //var boxNode = document.getElementById('addForm1').parentNode;
  //boxNode.parentNode.style.display='none';
