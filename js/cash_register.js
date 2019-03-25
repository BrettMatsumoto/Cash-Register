//declare variables
var display = document.getElementById('display')
var buttons = document.getElementsByClassName('numbers');
//set display to total
display.innerHTML = calculatorModule().getTotal();

calculatorModule().load(1)