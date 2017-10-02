var Cat = require('../models/Cat');

// GET
function getAll(request, response) {
  Cat.find(function(error, cats) {
    if(error) response.json({message: 'Could not find any cat'});

    response.json({cats: cats});
  }).select('-__v');
}

// POST
function createCat(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var cat = new Cat(request.body);

  cat.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate cat b/c:' + error});

    response.json({cat: cat});
  });
}

// GET
function getCat(request, response) {
  var id = request.params.id;

  Cat.findById({_id: id}, function(error, cat) {
    if(error) response.json({message: 'Could not find cat b/c:' + error});

    response.json({cat: cat});
  }).select('-__v');
}

function updateCat(request, response) {
  var id = request.params.id;

  Cat.findById({_id: id}, function(error, cat) {
    if(error) response.json({message: 'Could not find cat b/c:' + error});

    if(request.body.name) cat.name = request.body.name;
    if(request.body.note) cat.note = request.body.note;
    if(request.body.image) cat.image = request.body.image;

    cat.save(function(error) {
      if(error) response.json({messsage: 'Could not update cat b/c:' + error});

      response.json({message: 'Cat successfully updated', cat: cat});
    });
  }).select('-__v');
}

function removeCat(request, response) {
  var id = request.params.id;

  Cat.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete cat b/c:' + error});

    response.json({message: 'Cat successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createCat: createCat,
  getCat: getCat,
  updateCat: updateCat,
  removeCat: removeCat
}