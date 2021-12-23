const operand1 = document.getElementById("num1");
const operand2 = document.getElementById("num2");
const total = document.getElementById("result");

const btn1 = document.getElementById("add");
const btn2 = document.getElementById("sub");
const btn3 = document.getElementById("mul");
const btn4 = document.getElementById("div");

btn1.onclick = function () {
  const result = parseInt(operand1.value) + parseInt(operand2.value);
  total.textContent = result;
};
btn2.onclick = function () {
  const result = parseInt(operand1.value) - parseInt(operand2.value);
  total.textContent = result;
};
btn3.onclick = function () {
  const result = parseInt(operand1.value) * parseInt(operand2.value);
  total.textContent = result;
};
btn4.onclick = function () {
  const result = parseInt(operand1.value) / parseInt(operand2.value);
  total.textContent = result;
};
