import angular from 'angular';
import uirouter from 'angular-ui-router';
import styles from './app.scss';

import routing from './app.routes';
import CalculatorController from './calculator/calculator.controller';
import CalculatorService from './calculator/calculator.service';

export default angular.module('app', [
  uirouter
])
  .config(routing)
  .service('CalculatorService', CalculatorService)
  .controller('calculatorController', CalculatorController);