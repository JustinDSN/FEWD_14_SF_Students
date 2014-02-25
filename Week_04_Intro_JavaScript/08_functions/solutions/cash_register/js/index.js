var total = 0;

document.getElementById('entry').onsubmit = enter;

function enter() {
  var entry = document.getElementById('newEntry').value;
  var entry = parseFloat(entry);
  currency = currencyFormat(entry);
  document.getElementById('entries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
  total += entry;
  document.getElementById('total').innerHTML = currencyFormat(total);
  
  document.getElementById('newEntry').value = '';
  return false; //prevents the form from being submitted.
}

function currencyFormat(number) {
  var currency = parseFloat(number);
  currency = currency.toFixed(2);
  currency = '$' + currency;
  return currency;
}