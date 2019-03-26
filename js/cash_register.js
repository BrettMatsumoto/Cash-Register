// declared variables
var calcMod = calculatorModule();
var numButts = document.getElementsByClassName('numbers');
var disp = document.getElementById('display');
var opButt = document.getElementsByClassName('operator');
var lastNum;
var operatorChoice = null;
var truDisp = disp.innerHTML;
var clicked = false;

// add eventlisteners to number buttons
for (var i = 0; i < numButts.length; i++){
    numButts[i].addEventListener('click',setDisp)
}

function setDisp(){
    if (disp.innerHTML.length < 1){
        disp.innerHTML = this.innerHTML;
    } else if (clicked == true) {
        disp.innerHTML = this.innerHTML;
        clicked = false;
    } else {
        disp.innerHTML += this.innerHTML;
    }
}

opButt[0].addEventListener('click',additionOp)
function additionOp(){
    lastNum = Number(disp.innerHTML)
    operatorChoice = '+'
    clicked = true;
    console.log(lastNum)
}

opButt[1].addEventListener('click',subtractionOp)
function subtractionOp(){
    lastNum = Number(disp.innerHTML)
    operatorChoice = '-'
    clicked = true;
}

opButt[2].addEventListener('click',multiplyOp)
function multiplyOp(){
    lastNum = Number(disp.innerHTML)
    operatorChoice = '*'
    clicked = true;
}

opButt[5].addEventListener('click',divideOp)
function divideOp(){
    lastNum = Number(disp.innerHTML);
    operatorChoice = '/';
    clicked = true;
}

opButt[4].addEventListener('click',getTotal)
function getTotal(){
    var res = Number(lastNum) + Number(disp.innerHTML)
    if (operatorChoice == '+'){
        disp.innerHTML = res;
    } else if (operatorChoice == '-'){
        var res = Number(lastNum) - Number(disp.innerHTML)
        disp.innerHTML = res;
    } else if (operatorChoice == '*'){
        var res = Number(lastNum) * Number(disp.innerHTML)
        disp.innerHTML = res;
    } else if (operatorChoice == '/'){
        var res = Number(lastNum) / Number(disp.innerHTML)
        disp.innerHTML = res;
    } else {
        throw error
    }
    operatorChoice = null;
}

window.setInterval(function(){
    console.log(typeof disp.innerHTML);
    console.log(clicked)
}, 5000)