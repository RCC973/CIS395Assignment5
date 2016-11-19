var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/items');



router.get('/', ctrlItems.angularApp);

/* Items list page */
router.get('/', ctrlLocations.itemList);

module.exports = router;
