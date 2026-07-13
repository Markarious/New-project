const display = document.querySelector(".display");

function Todisplay(value){
    display.textContent += value;
}
function Clear(){
    display.textContent ='';
}
function calculate(){
    display.textContent= eval(display.textContent)
}