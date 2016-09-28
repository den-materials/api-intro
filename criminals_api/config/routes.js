var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var criminalsController = require('../controllers/criminals');

// http://127.0.0.1:3000/criminals
router.route('/criminals')

  //GET all criminals
  .get(criminalsController.getAll)

  //POST a new blob
  .post(criminalsController.createCriminal);


router.route('/criminals/:id')

  // GET return specific criminal 
  .get(criminalsController.getCriminal)

  // PATCH update existing criminal
  .patch(criminalsController.updateCriminal)

  // DELETE remove specific criminal from DB
  .delete(criminalsController.removeCriminal);


module.exports = router;