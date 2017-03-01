var mongoose = require('mongoose')
var Schema = mongoose.schema()

var movieSchema = new Schema({
  title : String,
  overview: String,
  image: String,
  popularity: Number,
  tags: [],
  status: []
},{
  timestamps:true
})

var Movie = mongoose.model('Movies', movieSchema);

module.exports = Movie;
