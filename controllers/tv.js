var Tv = require('../models/tv')

module.exports = {
  createTv: function(req,res){
    Tv.create({
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
  updateTv: function(){
    Tv.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteTv: function(){
    Tv.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readTvs: function(){
    Tv.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readTv: function(){
    Tv.find({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
}
