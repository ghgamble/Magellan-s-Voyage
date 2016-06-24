angular.module('MagellansVoyage', [])
   .controller("MagellansController", MagellansController)

   MagellansController.$inject = ['$http']

   function MagellansController ($http) {
      var magCtrl = this;
      //set up the stops on out journey
      magCtrl.Stops = ["/", "/CanaryIslands", "/CapeVerde", "/StraitOfMagellan", "/Guam", "/Phillipines"]
      
      //instead of hard coding the path here, maybe we could have server send us the new info 
      //and a true/false value to indicate whether to hide the next button, if next is true, 
      //pass the current title info in to be used for next get, if next false,
      //don't ask for next and hide the button
      
      //start us at Seville, might also be able to have index.html on first load immediately do a "get"
      // of /Seville route (which we would need to add) as the starting point,
      //can't use
      magCtrl.CurrentStop = 0;
      magCtrl.showNext = true;
      
      magCtrl.title = "Seville";
      magCtrl.text = "Seville text...";
      // $http.get('/Seville');
      // $http.get('/start');
      
      
      magCtrl.nextStop = function() {
         magCtrl.CurrentStop++
         var path = magCtrl.Stops[magCtrl.CurrentStop];
         console.log("Hit click handler, next stop will be: ", path);
         $http.get(path)
            .then(function(data) {
               //console.log("magCtrl.nextStop got data: ", data)
               //if we send back html would need to inject the html into the page here, Brandon said this is tricky
               
               //instead we can grab data and update the displayed info
               //console.log("title: ", data.data.title);
               //console.log("text: ", data.data.text);
               magCtrl.title = data.data.title;
               magCtrl.text = data.data.text;
               if(magCtrl.title === "Phillipines") {
                  magCtrl.showNext = false;
               }
            })
            .catch(function(error){
               console.log("magCtrl.nextStop got error: ", error)
            })
      }
   }
