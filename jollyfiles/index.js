var btn = document.getElementById("btn");
var text = document.getElementById("text");
var points = 0;

function add() {
    points = points + 1;
    text.innerHTML = points + " jollypoints";
}