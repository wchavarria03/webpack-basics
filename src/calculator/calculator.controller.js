class CalculatorController {
  constructor(CalculatorService) {
    this.CalculatorService = CalculatorService;
  }

  clear() {
    this.mainScreen = '';
  }

  add(num1, num2) {
    this.mainScreen = this.CalculatorService.add(num1, num2);
  }

  multiply(num1, num2) {
    this.mainScreen = this.CalculatorService.multiply(num1, num2);
  }
}
CalculatorController.$inject = ['CalculatorService'];
export default CalculatorController;