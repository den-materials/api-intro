var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/infamous-masterminds');

var Criminal = require('./models/Criminal');

var ALL_CRIMINALS = [
	{
	  name: "Al Capone",
	  location: "Chicago",
		status: "deceased"
	},
	{
	  name: "Jack the Ripper",
	  location: "London",
		status: "deceased"
	},
	{
	  name: "Omar Little",
	  location: "Baltimore",
		status: "fictional"
	}
];

Criminal.create(ALL_CRIMINALS, function(error, criminals) {
  if(error) console.log('Could not ceate criminal b/c:' + error);
  else console.log("Added " + criminals.length + " to the database.");
  mongoose.connection.close();
});



