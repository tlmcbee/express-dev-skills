var express = require('express');
var router = express.Router();
const skillCtrl = require('../controllers/skills')
// All actual paths start with /skills

router.get('/', skillCtrl.index)
router.get('/:id', skillCtrl.show)

module.exports = router;
