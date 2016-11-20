console.log("in index.js");


var express = require('express');
var router = express.Router();
var ctrlItems = require('../controllers/items');





/* Items list page */
router.get('/', ctrlItems.angularApp);
router.get('/add', ctrlItems.addItem);

module.exports = router;
