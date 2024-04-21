var express = require('express');
var router = express.Router();
const Getaccouts = require('../models/accountoperation')

router.use(express.json());

router.get('/', async function(req, res) {
    try {
        const accounts = await Getaccouts.getaccountdata();
        res.json(accounts);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error fetching accounts' });
    }
});

router.post('/', async function(req, res) {
    try {
        const account = req.body; 
        const newAccount = await Getaccouts.postaccountdata(account); 
        res.status(201).json(newAccount); 
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error creating account' });
    }
});


module.exports = router;
