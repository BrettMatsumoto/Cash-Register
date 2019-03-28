// declared variables
var calcMod = calculatorModule();
var numButts = document.getElementsByClassName('numbers');
var disp = document.getElementById('display');
var opButt = document.getElementsByClassName('operator');
var specItems = document.getElementsByClassName('items');
var lastNum;
var operatorChoice = null;
var truDisp = disp.innerHTML;
var clicked = false;

// add eventlisteners to number buttons
for (var i = 0; i < numButts.length; i++){
    numButts[i].addEventListener('click',setDisp)
}
// add eventlisteners special menu items
for (var i = 0; i < specItems.length; i++){
    specItems[i].addEventListener('click', setDisp2)
}
// add eventlisteners to operator buttons
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
opButt[3].addEventListener('click',clearOp)
function clearOp(){
    disp.innerHTML = "";
}
opButt[5].addEventListener('click',divideOp)
function divideOp(){
    lastNum = Number(disp.innerHTML);
    operatorChoice = '/';
    clicked = true;
}
opButt[4].addEventListener('click',getTotal)
function getTotal(){
    if (operatorChoice == '+'){
        var res = Number(lastNum) + Number(disp.innerHTML);
        disp.innerHTML = res;
        if (res == 17){
            alert("FOUND SECRET 2 OF 17!")
        }
    } else if (operatorChoice == '-'){
        var res = Number(lastNum) - Number(disp.innerHTML);
        disp.innerHTML = res;
        if (res == 17){
            alert('FOUND SECRET 3 OF 17!')
        }
    } else if (operatorChoice == '*'){
        var res = Number(lastNum) * Number(disp.innerHTML);
        disp.innerHTML = res;
        if (res == 17){
            alert('FOUND SECRET 4 OF 17!')
        }
    } else if (operatorChoice == '/'){
        var res = Number(lastNum) / Number(disp.innerHTML);
        disp.innerHTML = res;
        if (res == 17){
            alert('FOUND SECRET 5 OF 17')
        }
    } else {
        throw error
    }
    operatorChoice = null;
}
// set disply after number push;
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
// set display after operator push;
function setDisp2(){
    if (disp.innerHTML.length < 1){
        disp.innerHTML = this.value
    } else if (clicked == true){
        disp.innerHTML = this.value
    } else {
        disp.innerHTML += this.value
    }
}

//secret display button

disp.addEventListener('click',secret1)
function secret1(){
    for (var i = 0; i < disp.innerHTML.length;i++){
        if (disp.innerHTML[i] == 1 && disp.innerHTML[i+1] == 7){
            alert('FOUND SECRET 1 OF 17!')
        }
    }
}

//Set interval to check clicked value;
window.setInterval(function(){
    console.log(clicked)
}, 5000)