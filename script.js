const numberButtons = document.querySelectorAll('#numbers button');
const one = numberButtons[0];
const two = numberButtons[1];
const three = numberButtons[2];
const four = numberButtons[3];
const five = numberButtons[4];
const six = numberButtons[5];
const seven = numberButtons[6];
const eight = numberButtons[7];
const nine = numberButtons[8];
const zero = numberButtons[9];
let dot =  numberButtons[10];
const equal = numberButtons[11];

//get function buttons
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

//more stuff
let number1 = document.getElementById('Number1')
let number2 = document.getElementById('Number2')
let Operation = document.getElementById('Operator')
let Result = document.getElementById('Result')

let a = 0;
let A =[];
let b = 0;
let B  = [];
let operator = undefined;

function pressOne () {
    let c = 1
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}
one.onclick = pressOne

function pressTwo () {
    let c = 2
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}
two.onclick = pressTwo

function pressThree () {
    let c = 3
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}
three.onclick = pressThree;

function pressFour () {
    let c = 4
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}
four.onclick = pressFour

function pressFIve () {
    let c = 5
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}
five.onclick = pressFIve

function pressSix () {
    let c = 6
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}
six.onclick = pressSix;


function pressSeven () {
    let c = 7
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}
seven.onclick = pressSeven

function pressEight () {
    let c = 8
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}
eight.onclick = pressEight

function pressNine () {
    let c = 9
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}
nine.onclick = pressNine;

function pressZero () {
    let c = 0
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}

zero.onclick = pressZero;


function pressDOT() {
    let c = ".";
    if (operator === undefined) {     
        A.push(c);
        a = A.join("")
        number1.innerHTML = a;
    } else {
        B.push(c);
        b = B.join("")
        number2.innerHTML = b;
    }
}
dot.onclick = pressDOT;






//arithametic functions below
function plusSelect() {
    if (a) {
        operator = "+";
        Operation.innerHTML = "+";
    }
}

plus.onclick = plusSelect;

function minussSelect() {
    if (a) {
        operator = "-";
        Operation.innerHTML = "-";
    }
}

minus.onclick = minussSelect;

function multiplySelect() {
    if (a) {
        operator = "*";
        Operation.innerHTML = "*";
    }
}

multiply.onclick = multiplySelect;

function divideSelect() {
    if (a) {
        operator = "/";
        Operation.innerHTML = "/";
        removeEventListener("click", a)
    }
}

divide.onclick = divideSelect;


function clear() {
    a = 0;
    A =[];
    b = 0;
    B  = [];
    operator = undefined;
    number1.innerHTML = "";
    Operation.innerHTML = "";
    number2.innerHTML = "";
}


function resultFinder() {
    Result.innerHTML = "Loading..."
    let result = a;
    
    setTimeout(() => {switch (operator) {
        case "+":
            result = Number(a) + Number(b);
            break;
        case "-":
            result = Number(a) - Number(b);
            break;
        case "*":
            result = Number(a) * Number(b);
            break;
        case "/":
            result = Number(a) / Number(b);
            break;
    
    }
    Result.innerHTML = result;
    clear()}, 500)
    
    return result;
}

equal.onclick = resultFinder;