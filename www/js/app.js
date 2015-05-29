angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    var db = $cordovaSQLite.openDB("cuentas.db");

    $cordovaSQLite.nestedExecute(db, 'CREATE TABLE IF NOT EXISTS users (id integer primary key, name string)', 'CREATE TABLE IF NOT EXISTS pagos (id integer primary key, abono integer, comentario text, fecha_hasta text, fecha_pago text, intereses integer, saldo integer, user_id integer)', [], []).then(function (result) {
    }, function (err) {
      console.log('Error: '+err);
    });
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('dash', {
      url: '/dash',
      templateUrl: 'templates/dash.html',
      controller: 'DashCtrl'
    })
    // setup an abstract state for the tabs directive
    
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: 'DashUserCtrl'
    })

    .state('tab.dash-user', {
      url: '/:userId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/user.html',
          controller: 'DashUserCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dash');
});