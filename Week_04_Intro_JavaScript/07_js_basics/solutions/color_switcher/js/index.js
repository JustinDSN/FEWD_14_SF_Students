document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;

function switchGray() {
  setClass('body', 'grayBackground');
}

function switchWhite() {
  setClass('body', 'whiteBackground');
}

function switchBlue() {
  setClass('body', 'blueBackground');
}

function switchYellow() {
  setClass('body', 'yellowBackground');
}

function setClass(tagName, className) {
  document.getElementsByTagName(tagName)[0].className = className;
}