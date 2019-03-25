//declare variables
var display = document.getElementById('display')
var numButts = document.getElementsByClassName('numbers');
var opButts = document.getElementsByClassName('operator');
var calcMod = calculatorModule();
//set display to total
display.innerHTML = calcMod.getTotal();

//add eventlistener to numbers
for (var i = 0;i<numButts.length;i++){
    numButts[i].addEventListener('click', newDisp)
}
function newDisp(){
    var toNum = Number(this.innerHTML)
    if(display.innerHTML === '0'){
        display.innerHTML = calcMod.load(toNum);
    } else {
        display.innerHTML += calcMod.load(toNum);
    }
}
//add eventlistener to operators to display operation
for(var i = 0; i<opButts.length;i++){
    opButts[i].addEventListener('click', incOp)
}
function incOp(){
    display.innerHTML += this.innerHTML
}
//add eventlistener to operators to calculate
var addition = opButts[0];
addition.addEventListener('click',toCalc)
function toCalc(){

}
