var mongoose = require('mongoose');

var CatSchema = mongoose.Schema({
	name: String,
  location: String,
	status: String
});

module.exports = mongoose.model('Cat', CatSchema);

