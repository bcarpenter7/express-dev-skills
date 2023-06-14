var express = require('express');
var router = express.Router();


var skillsCtrl = require('../controllers/skills')

// GET all skills
router.get('/', skillsCtrl.index)

// GET new (has to be before show)
router.get('/new', skillsCtrl.new)

// GET one (has to be the last get (show))
router.get('/:id', skillsCtrl.show)

// POST /skills
router.post('/', skillsCtrl.create)

// DELETE
router.delete('/:id', skillsCtrl.delete)


module.exports = router;
