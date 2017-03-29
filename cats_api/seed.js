var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/infamous-caterminds');

var Cat = require('./models/Cat');

var ALL_CATS = [
	{
	  name: "Al Capuss",
	  location: "Chicago",
		status: "cute as a button"
	},
	{
	  name: "Jack the Purrer",
	  location: "London",
		status: "British and snotty"
	},
	{
	  name: "Omeow Little",
	  location: "Baltimore",
		status: "oh, indeed"
	}
];

Cat.create(ALL_CATS, function(error, cats) {
  if(error) console.log('Could not ceate cat b/c:' + error);
  else console.log("Added " + cats.length + " to the database.");
  mongoose.connection.close();
});



