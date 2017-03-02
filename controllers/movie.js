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
  updateMovie: function(req,res){
    Movie.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteMovie: function(req,res){
    Movie.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readMovies: function(req,res){
    Movie.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readMovie: function(req,res){
    Movie.find({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  }
}
