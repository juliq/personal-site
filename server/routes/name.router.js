const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const SCHEMANAMEHEREMODULE = require('../modules/schema.module');

let SCHEMANAMEHERE = SCHEMANAMEHEREMODULE;
let NAMEHERE = mongoose.model('NAMEHERE', SCHEMANAMEHERE);


module.exports = router;