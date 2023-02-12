const express = require('express');
const router = express.Router();

const {getUsers , deleteUser , getUserById,   } = require('../controllers/adminController');
const {protect,role} = require('../../middlewares/authMiddlewre');

router.route('/getUsers').get(getUsers);
router.route('/deleteUser/:id').delete(protect,role('admin'),deleteUser);
router.route('/getUserById/:id').get(protect,role('admin'),getUserById);
// router.route('/addScouter').post(protect,role('admin'),addScouter);
// router.route('/getScouter').get(protect,role('admin'),getScouter);
// router.route('/activateScouter/:id').get(protect,role('admin'),activateScouter);
// router.route('/desactivateScouter/:id').get(protect,role('admin'),desactivateScouter);


module.exports = router;