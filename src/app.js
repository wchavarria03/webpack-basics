import addModule from './add';
import multiplyModule from './multiply';
import styles from './app.css';

function add(num, num2) {
  return addModule(num, num2);
}

function multiply(num, num2) {
  return multiplyModule(num, num2);
}

console.log('Add:', add(3, 5));

console.log('Multiply:', multiply(3, 5));