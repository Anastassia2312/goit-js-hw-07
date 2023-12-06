"use strict";
const inputNumber = document.querySelector("#controls > input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = () => {
  const amount = inputNumber.value;

  if (amount < 1 || amount > 100) {
    alert("Please, enter value between 1 and 100!");
  }

  let html = "";
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    html += `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    boxes.innerHTML = html;
    inputNumber.value = "";
  }
};

createBtn.addEventListener("click", createBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});
