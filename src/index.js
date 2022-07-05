document.getElementById("left").addEventListener("click", reduce);
document.getElementById("right").addEventListener("click", add);
var num = document.getElementById("num");
console.log(num.innerText);
function reduce() {
  let sum = parseInt(num.innerText);
  num.innerText = --sum;
}

function add() {
  let sum = parseInt(num.innerText);
  num.innerText = ++sum;
}
