let color = "";
document.addEventListener("keydown", function (event) {
  if (event.key == "a") {
    color = "blue";
  } else if (event.key == "s") {
    color = "pink";
  } else if (event.key == "d") {
    color = "green";
  } else if (event.key == "f") {
    color = "black";
  } else {
    color = "white";
  }
});
function changeBackgroundColor() {
    const differentBoxes = document.querySelectorAll("#box-1, #box-2, #box-3, #box-4")
        for(let i = 0; i < differentBoxes.length; i++) {
            differentBoxes[i].addEventListener("click", function(changeBackground) {
                changeBackground.target.style.backgroundColor = color;
            })
        }
  
}
changeBackgroundColor();
