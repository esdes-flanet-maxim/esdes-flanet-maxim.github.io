console.log(document);

var name = "maxim";

function changeClass() {
    var button = document.getElementById("myButton");
    if(button.className=="rotate") {
        button.className = "";

    } else {
        
    button.className = "rotate";
    }
}