var total = 0;

document.getElementById('zero').onclick = zero;
document.getElementById('add5').onclick = add5;
document.getElementById('add10').onclick = add10;
document.getElementById('sub1').onclick = sub1;

function zero() {
  total = 0;
  refreshTotal();
}

function add5() {
  total = total + 5;
  refreshTotal();
}

function add10() {
  total = total + 10;
  refreshTotal();
}

function sub1() {
  total = total - 1;
  refreshTotal();
}

function refreshTotal() {
  document.getElementById('result').innerHTML = total;
}