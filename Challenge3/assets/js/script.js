function changeColorOfTheWordOnClick() {
    
    document.querySelector("#ele1").addEventListener("click", function (changeColor) {    
        if (changeColor.target.style.backgroundColor == "") {
            changeColor.target.style.backgroundColor  = "green";
        } else if (changeColor.target.style.backgroundColor  == "green") {
            changeColor.target.style.backgroundColor = "yellow";
                 
        } else {
            changeColor.target.style.backgroundColor = "green";
        }
    }
    );
}
changeColorOfTheWordOnClick();


