
var input = [];
var operations = [];
var plusSignPressed = false;

function onDigitPress(number) {
    input[input.length] = number;
    displayValue();
}

function displayValue() {
    var theNumber = input.join("");
    setDisplay(parseInt(theNumber));
}

function setDisplay(stuff) {
    var resultTd = document.getElementById("result");
    resultTd.innerHTML = stuff;
}

function clearDisplay() {
    theScreen = '';
    input = [];
    setDisplay(theScreen);
}

function onPlusPress() {
    operations[operations.length] = parseInt(input.join(""));
    operations[operations.length] = "+";
    clearDisplay();
}

function onEquals() {
    console.log(operations);
    for (var i = 0; i < operations.length; i++) {
        console.log(i);
    }
}
