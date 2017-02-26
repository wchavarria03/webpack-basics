routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('calculator', {
      url: '/calculator',
      template: require('./calculator/calculator.html'),
      controller: 'calculatorController',
      controllerAs: 'calculator'
    });
  $urlRouterProvider.otherwise('/calculator');
}