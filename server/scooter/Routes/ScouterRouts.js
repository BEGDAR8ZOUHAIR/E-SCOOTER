const express = require('express');
const router = express.Router();




const {addScouter, getScouters , activateScouter, desactivateScouter} = require('../../scooter/Controllers/SccouterController');


router.route('/addScouter').post(addScouter);
router.route('/getScouter').get(getScouters);
router.route('/activateScouter/:id').get(activateScouter);
router.route('/desactivateScouter/:id').get(desactivateScouter);


module.exports = router;