"use strict"

let app = angular.module("FlowerPower", ["ngRoute"])
  app.config(function($routeProvider, FBCreds){
    let authConfig = {
      apiKey: FBCreds.apiKey,
      authDomain: FBCreds.authDomain
    }
    firebase.initializeApp(authConfig)

    $routeProvider
      .when('/flowers', {
        templateUrl: 'partials/flowers',
        controller: 'mainCtrl'
      })
      .otherwise('/')
  })

