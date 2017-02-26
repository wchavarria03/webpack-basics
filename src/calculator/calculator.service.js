class CalculatorService {
  add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }

  multiply(num1, num2) {
    if(!num1 || !num2) {
      throw Error ('Expect two valid parameters');
    }
    let result = 0;
    let i = num2;
    for (; i > 0 ; i--) {
      result = this.add(result, num1);
    }
    return result;
  }
}

export default CalculatorService;