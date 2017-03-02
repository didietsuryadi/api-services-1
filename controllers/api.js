var Movie = require('../models/movie')
var Tv = require('../models/tv')

function api(req,res){
  var array = []
  Movie.find({}, function(err,movie){
    if(err){
      res.send(err)
    }else{
      Tv.find({}, function(error,tv){
        if(err){
          res.send(error)
        }else{
          res.send([{"movies":movie},{"tvs":tv}])
        }
      })
    }
  })
}

module.exports = api
