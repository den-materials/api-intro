var mongoose = require('mongoose');

var CatSchema = mongoose.Schema({
	name: String,
  note: String,
	image: String
});

module.exports = mongoose.model('Cat', CatSchema);

