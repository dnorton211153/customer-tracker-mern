const express = require('express');
const router = express.Router();

const { getCustomers, addCustomer, deleteCustomer, updateCustomer } = require('../controllers/customersController')

router.route('/:id')
    .delete(deleteCustomer)
    .post(updateCustomer)
    
router.route('/')
    .get(getCustomers)
    .post(addCustomer)



module.exports = router;