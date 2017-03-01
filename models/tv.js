var mongoose = require('mongoose')
var Schema = mongoose.Schema

var tvSchema = new Schema({
  title : String,
  overview: String,
  image: String,
  popularity: Number,
  tags: [],
  status: []
},{
  timestamps:true
})

var Tv = mongoose.model('Tvs', tvSchema);

module.exports = Tv;
