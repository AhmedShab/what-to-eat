const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Instantiates a client
const datastore = Datastore();

// Do work here
router.get('/', storeController.homePage);

module.exports = router;
