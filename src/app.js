import addModule from './add';
import multiplyModule from './multiply';
import styles from './app.css';

function add(num, num2) {
  return addModule(num, num2);
}

function multiply(num, num2) {
  return multiplyModule(num, num2);
}

/*LISTENERS*/
var multiplyKey = document.getElementById('multiplyKey');
multiplyKey.addEventListener('click', function () {
  var num1 = getNumber1();
  var num2 = getNumber2();
  setResult(multiply(num1, num2));
});


var sumKey = document.getElementById('sumKey');
sumKey.addEventListener('click', function () {
  var num1 = getNumber1();
  var num2 = getNumber2();
  setResult(add(num1, num2));
});

var clearKey = document.getElementById('clearKey');
clearKey.addEventListener('click', function () {
  setResult('');
});

/*UTILITIES*/
function getNumber1() {
  return parseInt(document.getElementById('number1').value, 10);
}

function getNumber2() {
  return parseInt(document.getElementById('number2').value, 10);
}

function setResult(result) {
  var resultScreen = document.getElementById('mainScreen');
  resultScreen.innerText = result;
}