var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var api = require('./routes/api');

var app = express()
mongoose.connect('mongodb://localhost/entertaiment', function (err) {
  if (err) throw err;
  console.log("connected")
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

app.use('/', function(req, res) {
  res.send("iam live")
})

app.listen(3000)
