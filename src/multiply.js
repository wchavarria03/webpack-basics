import addModule from './add';

export default function (num1, num2) {
  if(!num1 || !num2) throw Error ('Expect two valid parameters');
  var result = 0;
  var i = num2;
  for (; i > 0 ; i--) {
    result = addModule(result, num1);
  }
  return result;
}