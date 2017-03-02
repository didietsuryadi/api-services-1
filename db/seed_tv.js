var Model = require('../models/tv')

var arrayData = [
{
  title: "Manusia harimau",
  popularity: 7.273753,
  tags: [],
  overview: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red. ",
  image: "/asdasdasdsdsa.jpg"
},
{
  title: "Anak Jalanan",
  popularity: 8.5,
  tags: [],
  overview: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red. ",
  image: "/asdasdasdsdsa.jpg"
},
{
  title: "Anak Langit",
  popularity: 8.5,
  tags: [],
  overview: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red. ",
  image: "/asdasdasdsdsa.jpg"
}]

Model.create(arrayData, function(err, data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
