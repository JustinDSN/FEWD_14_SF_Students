document.getElementById('submit').onclick = compare;

function compare() {
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var comparison;
  if (a < b) {
    comparison = '<';
  } else if (a > b) {
    comparison = '>';
  } else if (a == b) {
    comparison = '=';
  }
  document.getElementById('comparison').innerHTML = comparison;
}