function changeArrow(clicked_id) {
  if("images/arrowDown.png" == document.getElementById(clicked_id).getAttribute("src")) {
    document.getElementById(clicked_id).setAttribute("src", "images/arrowUp.png");
  } else if("images/arrowUp.png" ==  document.getElementById(clicked_id).getAttribute("src")){
    document.getElementById(clicked_id).setAttribute("src", "images/arrowDown.png");
  }
}
