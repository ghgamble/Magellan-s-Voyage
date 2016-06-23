var router = require('express').Router();

//Routes
   router.route('/')
      .get(function(req, res){
         console.log("Seville")
         res.send('<div><p>Seville</p><button>Next</button></div>')
      })
   router.route('/CanaryIsland')
      .get(function(req, res){
         res.send('<div><p>Canary Island</p><button>Next</button></div>')
      })
   router.route('/CapeVerde')
      .get(function(req, res){
         res.send('<div><p>Cape Verde</p><button>Next</button></div>')
      })
   router.route('/StraitOfMagellan')
      .get(function(req, res){
         res.send('<div><p>Strait of Magellan</p><button>Next</button></div>')
      })
   router.route('/Guam')
      .get(function(req, res){
         res.send('<div><p>Guam</p><button>Next</button></div>')
      })
   router.route('/Phillipines')
      .get(function(req, res){
         res.send('<div><p>Phillipines</p></div>')
      })

module.exports = router
