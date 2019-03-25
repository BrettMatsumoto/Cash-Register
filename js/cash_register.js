
//declare variables

var display = document.getElementById('display');
var numButts = document.getElementsByClassName('numbers');
var opButts = document.getElementsByClassName('operator');
var calcMod = calculatorModule();
var dispNum = Number(display.innerHTML); //displayed str to number

//set display to total

display.innerHTML = calcMod.getTotal();
// console.log(typeof display.innerHTML);

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
//add eventlistener to operators to calculate

var addition = opButts[0];
addition.addEventListener('click',toCalcAdd)
function toCalcAdd(){
    calcMod.add(dispNum);
    console.log(calcMod.getTotal())
    display.innerHTML = 0;
}

var subtraction = opButts[1];
subtraction.addEventListener('click',toCalcSub)
function toCalcSub(){
    calcMod.subtract(dispNum);
    display.innerHTML = 0;
}

var multiplication = opButts[2];
multiplication.addEventListener('click',toCalcMult)
function toCalcMult(){
    calcMod.multiply(dispNum);
    display.innerHTML = 0;
}

var clear = opButts[3];
clear.addEventListener('click',clearDisp)
function clearDisp(){
    display.innerHTML = 0;
}

var equals = opButts[4];
equals.addEventListener('click',giveSol)
function giveSol(){
    display.innerHTML = calcMod.getTotal()
    console.log(display.innerHTML)
}

var division = opButts[5];
division.addEventListener('click',toCalcDiv);
function toCalcDiv(){
    calcMod.divide(dispNum);
    display.innerHTML = 0;
}

//to use later... maybe

//add eventlistener to operators to display operation

// for(var i = 0; i<opButts.length;i++){
//     opButts[i].addEventListener('click', incOp)
//     console.log(opButts[i])
// }
// function incOp(){
//     display.innerHTML += this.innerHTML
// }

