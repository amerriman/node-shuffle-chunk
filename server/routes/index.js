var express = require('express');
var router = express.Router();
//participantsArray = [];


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function(req, res, next){
  var participants = req.body.items.split(',');

  // replace(/,/g, '')
  console.log(participants, "participants");

  var chunks = req.body.chunks;
  console.log(chunks, "chunks");

  var groups = chunk(participants, chunks);
  console.log(groups, "groups");
  //
  res.render('index', {groups: groups});


});

//need to loop through the array before shuffling, and try to take out things like an empty space.
function shuffle(array) {
  var result = [];
  var workA = array.slice(0);
  while(workA.length) {
    var random = Math.floor(Math.random() * workA.length);
    result.push(workA.splice(random,1)[0]);
  }
 return result;
};

//console.log(shuffle(studentArray));


function chunk(array, numChunks) {
  //take the array, shuffle it
  var shuffArray = shuffle(array);
  var results = [];
  var i = 0;
  var n = shuffArray.length;
  var num = n/numChunks;

  while (i < n){
    results.push(shuffArray.slice(i, i += num));
  }
  return results;
};


//console.log(chunk(studentArray, 11));



module.exports = router;

// var studentArray = ["Alex", "Amber", "Ashley", "Ben", "Bradley", "Brandon", "Charles", "Chip", "Crystal", "Dominic", "Erik", "Ethan", "Jeff", "Johnny", "Keith", "Kierston", "Kyle", "Lance", "Lucy", "Luis", "Patrick", "Pete", "Robert", "Ryan", "Sarah", "Suhayl", "Yusef", "Zoe"];

// var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
