const router = require('express').Router();
const adsController = require('../controllers/ads');

// Register a new Ad
router.post('/new', adsController.postAd);

// Get a single Ad
router.get('/get/:id', adsController.getAd);

// Get All Ads
router.get('/all', adsController.getAds);

module.exports = router;