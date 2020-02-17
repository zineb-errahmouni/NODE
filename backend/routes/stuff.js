const express = require('express');
const router = express.Router();
const Thing =require('../models/Thing');
const stuffController =require('../controllers/stuff-controller');

router.post('/', stuffController.createThing);

router.get('/', stuffController.getThings);

router.put('/:id', stuffController.modifyThing);

module.exports = router;

