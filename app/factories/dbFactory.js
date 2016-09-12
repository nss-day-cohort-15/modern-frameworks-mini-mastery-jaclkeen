"use strict"

app.factory('dbFactory', function($q, $http){

  let getFlowers = function(){
    return $q(function(resolve, reject){
      $http.get('https://flower-power-angular.firebaseio.com/arrangements.json')
      .success(function(flowers){
        console.log(flowers)
        resolve(flowers)
      })
      .error(function(error){
        reject(error)
      })
    })
  }

  return {getFlowers}

})
