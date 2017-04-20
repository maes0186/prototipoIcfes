angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('prueba3579', {
    url: '/page2',
    templateUrl: 'templates/prueba3579.html',
    controller: 'prueba3579Ctrl'
  })

  .state('aplicaciNPrueba3579', {
    url: '/page3',
    templateUrl: 'templates/aplicaciNPrueba3579.html',
    controller: 'aplicaciNPrueba3579Ctrl'
  })

  .state('instalaciNEntregaYDevoluciNDeMaterial', {
    url: '/page4',
    templateUrl: 'templates/instalaciNEntregaYDevoluciNDeMaterial.html',
    controller: 'instalaciNEntregaYDevoluciNDeMaterialCtrl'
  })

  .state('buscarCDigo', {
    url: '/page5',
    templateUrl: 'templates/buscarCDigo.html',
    controller: 'buscarCDigoCtrl'
  })

  .state('buscarCDigo2', {
    url: '/page6',
    templateUrl: 'templates/buscarCDigo2.html',
    controller: 'buscarCDigo2Ctrl'
  })

  .state('informeRector', {
    url: '/page7',
    templateUrl: 'templates/informeRector.html',
    controller: 'informeRectorCtrl'
  })

  .state('reporteInformeRector', {
    url: '/page8',
    templateUrl: 'templates/reporteInformeRector.html',
    controller: 'reporteInformeRectorCtrl'
  })

  .state('buscarPuntoDeEntrega', {
    url: '/page9',
    templateUrl: 'templates/buscarPuntoDeEntrega.html',
    controller: 'buscarPuntoDeEntregaCtrl'
  })

  .state('buscarPuntoDeEntrega2', {
    url: '/page10',
    templateUrl: 'templates/buscarPuntoDeEntrega2.html',
    controller: 'buscarPuntoDeEntrega2Ctrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});