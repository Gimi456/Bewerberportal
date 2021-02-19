function loadSelectionForStandortFilter() {
  var getStandort = document.querySelectorAll('*[filterstandort]');
  var arrayForSelections = [];


  for(var i = 0; i < getStandort.length; i++) {
    arrayForSelections.push($(getStandort[i]).attr('filterstandort'));
    var option = new Option(arrayForSelections[i], arrayForSelections[i]);
    option.innerHTML = arrayForSelections[i];
    document.getElementById('stelleStandort').appendChild(option);
  }
}

function filterDenStandort() {
  var getSelected = document.getElementById('stelleStandort');
  var value = getSelected.options[getSelected.selectedIndex].text;
  var getStandort = document.querySelectorAll('*[filterstandort]');

  var boxNode = document.getElementById('addForm3').parentNode;
  boxNode.parentNode.style.display='none';

  if(value === 'Alle') {
    var boxNode = document.getElementById('addForm3').parentNode;
    boxNode.style.display='block';
    boxNode.parentNode.style.display='block';
  }

}
