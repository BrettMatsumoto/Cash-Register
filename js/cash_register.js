var display = document.getElementById('display')
display.innerHTML;

//add event listener to number buttons

var numButts = document.getElementsByClassName('numbers');
for (var i = 0; i < numButts.length;i++){
    numButts[i].addEventListener('click', newDisp)
    console.log(numButts[i])
}
function newDisp(){
    console.log(this.numButts.value)
    display.innerHTML =+ this.numButts.innerHTML
}