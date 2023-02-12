const express = require('express');
const router = express.Router();


const {getScouter} = require('../controllers/userController');

router.route('/getScouter').get(getScouter);


module.exports = router;