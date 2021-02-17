function loadSelectionForDelete() {
  var getArrow = document.querySelectorAll('*[id^="addForm"]');
  var arrayForSelections = [];
  

  for(var i = 0; i < getArrow.length; i++) {
    arrayForSelections.push(getArrow.item(i).innerHTML);
    var option = new Option(arrayForSelections[i], arrayForSelections[i]);
    option.innerHTML = arrayForSelections[i];
    document.getElementById('stellenAngebote').appendChild(option);
  }
}
