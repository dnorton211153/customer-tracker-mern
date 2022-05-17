const Customer = require('../models/customer');

// @desc Get all customers
// @route GET /api/customers
exports.getCustomers = async (req,res,next) => {
    // res.send('GET customers');
    try {
        const customers = await Customer.find();
        return res.status(200).json({
            success: true,
            count: customers.length,
            data: customers
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// @desc Post new customer
// @route POST /api/customers
exports.addCustomer = async (req,res,next) => {

    try {
        const { firstName, lastName, email } = req.body;
        const customer = await Customer.create(req.body);
        return res.status(201).json({
            success: true,
            data: customer
        });
    } catch (err) {
        if (err.name == 'ValidationError') {
            const messages = Object.values(err.errors).map(val=> val.message);
            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: err.message
            })
        }
    }

}

// @desc Delete customer
// @route DELETE /api/customer/:id
exports.deleteCustomer = async (req,res,next) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({
                success: false,
                error: 'No customer found'
            })
        } else {
            await customer.remove();
            return res.status(200).json({
                success: true,
                data: {}
            })
        }

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })        
    }
} 

exports.updateCustomer = async (req,res,next) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({
                success: false,
                error: 'No customer found'
            })
        } else {

            Object.entries(req.body).forEach(([key,value]) => {
                customer[key] = value;
            })

            await customer.save();
            return res.status(200).json({
                success: true,
                data: customer
            })
        }

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })        
    }
} 