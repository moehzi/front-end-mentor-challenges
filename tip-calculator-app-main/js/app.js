// Script
const bill = document.getElementById("bill");
const numberOfP = document.getElementById("number-of-p");
const tipBox = document.querySelectorAll(".tip-box");
const customBoxInput = document.getElementById("custom-box");
const btnReset = document.getElementById("reset-btn");
const displayTotal = document.getElementById("total");
const tipAmount = document.getElementById("tip-amount");
const inputGroup = document.querySelectorAll(".input-group");
const formInput = document.querySelectorAll(".form-control");
const labelDangerBill = document.querySelector(".label-danger-bill");
const labelDangerPeople = document.querySelector(".label-danger-people");
// Initial state

let tipVar;
let billVar;
let peopleVar;
let tipAmountVar;
let totalVar;
// labelDangerBill.classList.add("d.none");
init();
function init() {
  tipVar = 0;
  billVar = 0;
  peopleVar = 0;
  percentBox();
  getCustomBox();
  tipAmount.textContent = `$0.00`;
  displayTotal.textContent = `$0.00`;
  bill.value = "";
  customBoxInput.value = "";
  numberOfP.value = "";
}
function percentBox() {
  tipBox.forEach((item) => {
    item.addEventListener("click", function () {
      let tipPercent = Number(item.textContent.slice(0, -1));
      tipVar = tipPercent;
      tipBox.forEach((element) => {
        element.classList.remove("tip-box-hover");
        item.classList.add("tip-box-hover");
        customBoxInput.value = "";
      });
      displayTip();
    });
  });
}

function getBill() {
  const billNum = Number(bill.value);
  billVar = billNum;
  console.log(billVar);
  displayTip();
  checkError(billVar, labelDangerBill);
  labelDangerPeople.classList.add("d-none");
  return billNum;
}
function getNumberOfP() {
  const numberOfPeople = Number(numberOfP.value);
  peopleVar = numberOfPeople;
  displayTip();
  checkError(peopleVar, labelDangerPeople);
  return numberOfPeople;
}

function getCustomBox() {
  const customBox = Number(customBoxInput.value);
  customBoxInput.addEventListener("focus", function () {
    tipBox.forEach((element) => {
      element.classList.remove("tip-box-hover");
    });
  });
  tipVar = customBox;
  displayTip();
  return customBox;
}
function reset() {
  init();
  tipBox.forEach((element) => {
    element.classList.remove("tip-box-hover");
  });
  formInput.forEach((item) => {
    item.classList.remove("form-error");
  });
  labelDangerBill.classList.add("d-none");
  labelDangerPeople.classList.add("d-none");
  //   checkError(numberOfPeople, labelDangerPeople);
}
btnReset.addEventListener("click", function () {
  reset();
});
function calcTip(bill, tip, people) {
  const hasil = (bill * tip) / 100 / people;
  return Number(hasil.toFixed(2));
}
function calcTotal(bill, people) {
  const tipAmount = calcTip(billVar, tipVar, peopleVar);
  const total = bill / people + tipAmount;
  return total.toFixed(2);
}

function displayTip() {
  tipAmount.textContent = `$${calcTip(billVar, tipVar, peopleVar)}`;
  displayTotal.textContent = `$${calcTotal(billVar, peopleVar)}`;
}
function checkError(inputValidation, label) {
  formInput.forEach((item) => {
    if (inputValidation == 0) {
      item.addEventListener("keyup", function () {
        item.classList.add("form-error");
        label.classList.remove("d-none");
        // label.classList.add("d-block");
      });
    } else {
      item.addEventListener("keyup", function () {
        item.classList.remove("form-error");
        label.classList.add("d-none");
        // label.classList.remove("d-block");
      });
    }
  });
}
