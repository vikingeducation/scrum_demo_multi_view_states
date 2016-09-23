// ----------------------------------------
// App
// ----------------------------------------


var TargetPractice = angular.module('TargetPractice', ['ui.router']);


TargetPractice.config(
  ['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');


    $stateProvider
      .state('one', {
        url: '/',
        views: {
          "": {
            template: "<p>I'm the unnamed view in state <code>one</code></p>"
          },
          "named-one": {
            template: "<p>I'm the named view in state <code>one</code></p>"
          },
          "main-header@": {
            template: "Now in state <code>one</code>"
          }
        }
      })
      .state('one.two', {
        url: 'two',
        views: {
          "@": {
            templateUrl: "/js/templates/two.html"
          },
          "@one.two": {
            template: "<p>I'm the unnamed view in state <code>two</code></p>"
          },
          "named-two@one.two": {
            template: "<p>I'm the named view in state <code>two</code></p>"
          },
          "named-one@": {
            template: "<p>Named view in state <code>one</code> targeted from state <code>two</code></p>"
          },
          "main-header@": {
            template: "Now in state <code>two</code>"
          }
        }
      });

  }]);



