var Movie = require('../models/movie')

module.exports = {
  createMovie: function(req,res){
    Movie.create({
      title: req.body.title,
      overview: req.body.overview,
      popularity: req.body.popularity,
      tags: req.body.tags,
      status: req.body.status
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateMovie: function(){
    Movie.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteMovie: function(){
    Movie.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readMovies: function(){
    Movie.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readMovie: function(){
    Movie.find({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
}
