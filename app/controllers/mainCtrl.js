"use strict"

app.controller('mainCtrl', function($scope, dbFactory){
  $scope.flowers = []

  dbFactory.getFlowers()
    .then(function(flowers){
      $scope.flowers = flowers
    })
})
