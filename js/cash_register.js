// declared variables
var calcMod = calculatorModule();
var numButts = document.getElementsByClassName('numbers');
var exOpButts = document.getElementsByClassName('exOperators');
var disp = document.getElementById('display');
var opButt = document.getElementsByClassName('operator');
var specItems = document.getElementsByClassName('items');
var balanButt = document.getElementById('balanceButt')
var dispBala = document.getElementById('totBalance');
var lastNum;
var operatorChoice = null;
var truDisp = disp.innerHTML;
var clicked = false;
var orderHistory = [];
var balance = 0;

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
        orderHistory.push(res)
        console.log(orderHistory)
        if (res == 17){
           alert("FOUND SECRET 2 OF 17!")
        }
    } else if (operatorChoice == '-'){
        var res = Number(lastNum) - Number(disp.innerHTML);
        disp.innerHTML = res;
        orderHistory.push(res)
        console.log(orderHistory)
        if (res == 17){
            alert('FOUND SECRET 3 OF 17!')
        }
    } else if (operatorChoice == '*'){
        var res = Number(lastNum) * Number(disp.innerHTML);
        disp.innerHTML = res;
        orderHistory.push(res)
        console.log(orderHistory)
        if (res == 17){
            alert('FOUND SECRET 4 OF 17!')
        }
    } else if (operatorChoice == '/'){
        var res = Number(lastNum) / Number(disp.innerHTML);
        disp.innerHTML = res;
        orderHistory.push(res)
        console.log(orderHistory)
        if (res == 17){
            alert('FOUND SECRET 5 OF 17')
        }
    } else {
        throw error
    }
    operatorChoice = null;
}
// set disply after number button input;
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
// set balance
exOpButts[1].addEventListener('click',setBal)
function setBal(){
    balance = disp.innerHTML
    console.log(balance)
    disp.innerHTML = "";
    dispBala.innerHTML = balance;
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
//balance button show/hide
exOpButts[0].addEventListener('click',showHideBal)
function showHideBal(){
    if (dispBala.style.display == 'block'){
        console.log('test')
        dispBala.style.display = 'none'
    } else {
        console.log('test')
        dispBala.style.display = 'block'
    }
}
exOpButts[2].addEventListener('click',withdrawBal)
function withdrawBal(){
    alert('Removing: $' + balance + ' from balance')
    balance = 0;
    dispBala.innerHTML = balance;
}
//Set interval to check clicked value;
window.setInterval(function(){
    console.log(clicked);
    console.log(balance)
}, 5000)