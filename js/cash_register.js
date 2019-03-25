//declare variables
var display = document.getElementById('display')
var numButts = document.getElementsByClassName('numbers');
var opButts = document.getElementsByClassName('operator')
//set display to total
display.innerHTML = calculatorModule().getTotal();

//add eventlistener to numbers
for (var i = 0;i<numButts.length;i++){
    numButts[i].addEventListener('click', newDisp)
}
function newDisp(){
    var toNum = Number(this.innerHTML)
    display.innerHTML += calculatorModule().load(toNum)
    console.log(this.innerHTML)
}
//add eventlistener to operators
for(var i = 0; i<opButts.length;i++){
    opButts[i].addEventListener('click', incOp)
}
function incOp(){
    display.innerHTML += this.innerHTML
}