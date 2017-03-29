var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var catsController = require('../controllers/cats');

// http://127.0.0.1:3000/cats
router.route('/cats')

  //GET all cats
  .get(catsController.getAll)

  //POST a new blob
  .post(catsController.createCat);


router.route('/cats/:id')

  // GET return specific cat 
  .get(catsController.getCat)

  // PUT update existing cat
  .put(catsController.updateCat)

  // DELETE remove specific cat from DB
  .delete(catsController.removeCat);


module.exports = router;