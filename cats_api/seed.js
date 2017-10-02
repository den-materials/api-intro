var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/infamous-caterminds');

var Cat = require('./models/Cat');

var ALL_CATS = [
	{
	  name: "Al Capuss",
		note: "cute as a button",
		image: "https://rlv.zcache.com/funny_gangster_cat_postcard-r720f089202514e94b9705fd34f471710_vgbaq_8byvr_324.jpg"
	},
	{
	  name: "Jack the Purrer",
		note: "British and snotty",
		image: "https://s-media-cache-ak0.pinimg.com/originals/4c/f8/37/4cf837edb05b6bc483c1051a9df60466.jpg"
	},
	{
	  name: "Omeow Little",
		note: "oh, indeed",
		image: "http://cdn77.sadanduseless.com/wp-content/uploads/2016/07/gangster14.jpg"
	}
];

Cat.create(ALL_CATS, function(error, cats) {
  if(error) console.log('Could not ceate cat b/c:' + error);
  else console.log("Added " + cats.length + " to the database.");
  mongoose.connection.close();
});



