function changeColorOfTheWordOnClick(ele, color = "yellow") {
  ele.style.backgroundColor = color;
}

const ele = document.querySelector("#ele1");
ele.addEventListener("click", () => changeColorOfTheWordOnClick(ele));

changeColorOfTheWordOnClick(ele, "green");
