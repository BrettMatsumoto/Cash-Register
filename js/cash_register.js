//declare variables
var myCalc = calculatorModule();
var display = document.getElementById('display')
var buttons = document.getElementsByClassName('buttons');
//set display to total
display.innerHTML = myCalc.getTotal();

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', myCalc)
}