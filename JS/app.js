"use strict";

let displayEl = document.getElementById("display");
let acEl = document.getElementById("ac");
let deEl = document.getElementById("de");
let additionEl = document.getElementById("additional");
let minusEl = document.getElementById("minus");
let muitlplyEl = document.getElementById("muitlply");
let decimalEl = document.getElementById("decimal");
let divideEl = document.getElementById("divide");

let number7El = document.getElementById("number-7");
let number8El = document.getElementById("number-8");
let number9El = document.getElementById("number-9");
let number6El = document.getElementById("number-6");
let number5El = document.getElementById("number-5");
let number4El = document.getElementById("number-4");
let number3El = document.getElementById("number-3");
let number2El = document.getElementById("number-2");
let number1El = document.getElementById("number-1");
let number0El = document.getElementById("number-0");

const numberArray = [
  number0El,
  number1El,
  number2El,
  number3El,
  number4El,
  number5El,
  number6El,
  number7El,
  number8El,
  number9El,
];

const handleNumberClick = (numStr) => {
  const currentDisplayStr = displayEl.innerHTML;
  displayEl.innerHTML = currentDisplayStr + numStr;
};

// Add Event listener to number and buttons.
for (let i = 0; i < numberArray.length; i++) {
  const numEl = numberArray[i];
  numEl.addEventListener("click", () => {
    handleNumberClick();
  });
}
