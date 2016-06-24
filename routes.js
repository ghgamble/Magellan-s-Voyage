var router = require('express').Router();

//Routes
   router.route('/')
//      .get(function(req, res){
//         console.log("Seville")
//        res.send('<div><p>Seville</p><button ng-click="magCtrl.nextStop()">Next</button></div>')
//      })
   router.route('/CanaryIslands')
      .get(function(req, res){
         res.json( {
            title:   "CanaryIslands",
            text:    "CanaryIslands text"
            })
      })
   router.route('/CapeVerde')
      .get(function(req, res){
         res.json( {
            title:   "CapeVerde",
            text:    "CapeVerde text blah blah"
         })
         //res.send('<div><p>Cape Verde</p><button ng-click="magCtrl.nextStop()">Next</button></div>')
      })
   router.route('/StraitOfMagellan')
      .get(function(req, res){
         res.json( {
            title:   "StraitOfMagellan",
            text:    "Strait of Magellan text.... cape of 11000 virgins?"
         })
         //res.send('<div><p>Strait of Magellan</p><button ng-click="magCtrl.nextStop()">Next</button></div>')
      })
   router.route('/Guam')
      .get(function(req, res){
         res.json( {
            title:   "Guam",
            text:    "..... more Guam text"
         })
         //res.send('<div><p>Guam</p><button ng-click="magCtrl.nextStop()">Next</button></div>')
      })
   router.route('/Phillipines')
      .get(function(req, res){
         res.json( {
            title:   "Phillipines",
            text:    "end of the road for Magellan text, remove Next button"
         })
         //res.send('<div><p>Phillipines</p></div>')
      })
   router.route('/next')
      .get(function(req,res){
         console.log(req.query);
         var nextLocation = "dummy";
         switch(req.query.location) {
            case "Seville": 
               nextLocation = "Canary Islands"
               break;
            case "Canary Islands":
               nextLocation = "Cape Verde"
               break;
            case "Cape Verde":
               nextLocation = "Strait of Magellan"
               break;
            case "Strait of Magellan":
               nextLocation = "Guam"
               break;
            case "Guam":
               nextLocation = "Phillipines"
               break;
            case "Phillipines":
               nextLocation = "Magellan died here..."
               break;
            default:
               nextLocation = "default"
               
         }
         res.json ({
            location: req.query.location,
            nextLocation: nextLocation
         })
      })
   router.route('/*')
      .get(function(req, res){
         // nope
         //res.json ({
            //title: req.params[0],
            //text: "Magellan did not travel to " + req.params[0]
         //})
         
         //nope
         var title = req.params[0];
         var text = "Magellan did not travel to " + req.params[0]
         //res.send('<div> <h1>title </h1> <p>text</p> </div>')
         
         res.send(text);
      })
module.exports = router
