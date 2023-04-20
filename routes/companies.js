const router = require('express').Router();
const companiesController = require('../controllers/conpanies');

// Register a new Company
router.post('/new', companiesController.postCompany);

// Register a new Company
router.post('/new/many', companiesController.postCompanyMany);

// Get a single Company
router.get('/get/:id', companiesController.getCompany);

// Get All Companies
router.get('/all', companiesController.getCompanies);

module.exports = router;