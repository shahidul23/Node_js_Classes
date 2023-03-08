// const getRandomFruitsName = require('random-fruits-name');
// console.log(getRandomFruitsName('en'));

var nameToImdb = require("name-to-imdb");
nameToImdb("Movie info",(err, res,inf)=>{
    console.log(res);
    console.log(inf);
});
