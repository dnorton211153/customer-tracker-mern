const express = require('express');
const router = express.Router();

const { getCustomers, addCustomer, deleteCustomer } = require('../controllers/customersController')

router.route('/')
    .get(getCustomers)
    .post(addCustomer)

router.route('/:id')
    .delete(deleteCustomer);

module.exports = router;