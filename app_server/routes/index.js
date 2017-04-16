var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')
router.get('/', ctrlMain.index);
router.get('/food', ctrlMain.food);
router.get('/food/:foodName', ctrlMain.findFood);
module.exports = router;
