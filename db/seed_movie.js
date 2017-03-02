var Model = require('../models/movie')

var arrayData = [
{
  "title": "The Shawshank Redemption",
  "popularity": 7.273753,
  "tags": [],
  "overview": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red. ",
  "image": "/asdasdasdsdsa.jpg"
},
{
  "title": "Whiplash",
  "popularity": 8.5,
  "tags": [],
  "overview": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red. ",
  "image": "/asdasdasdsdsa.jpg"
},
{
  "title": "The Flazz",
  "popularity": 8.5,
  "tags": [],
  "overview": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red. ",
  "image": "/asdasdasdsdsa.jpg"
}]

Model.create(arrayData, function(err, data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
