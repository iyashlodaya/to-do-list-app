const { Router } = require('express');
const Lists = require('../controllers/lists.controller.js');
const router = Router();

//todo: create Lists
router.post('/create', (req,res,next) => {
  Lists.create(req,res);
});

//todo: Get Lists Item
//todo: Update Lists Item
//todo: Delete Lists Item

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
