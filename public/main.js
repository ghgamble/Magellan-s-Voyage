angular.module('MagellansVoyage', [])
   .controller("MagellansController", MagellansController)

   MagellansController.$inject = ['$http']

   function MagellansController ($http) {
      var magCtrl = this;
      magCtrl.Stops = ["/", "/CanaryIslands", "/CapeVerde", "/StraitOfMagellan", "/Guam", "/Phillipines"]
      magCtrl.CurrentStop = 0;
      magCtrl.nextStop = function() {
         magCtrl.CurrentStop++
         console.log("Hit click handler")
         $http.get(magCtrl.Stops[magCtrl.CurrentStop])
      }
   }
