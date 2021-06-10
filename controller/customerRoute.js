const express = require('express');
const Customer = require('../model/customer');
const Router = express();

Router.post('/addCustomer', (req, res) => {
    const customer = new Customer({
        customerName: req.body.customerName,
        customerAge: req.body.customerAge,
        hobbies: req.body.hobbies,
        membership: req.body.membership,
        customerOutfitSize: req.body.customerOutfitSize,
        customerEmpDetail: req.body.customerEmpDetail,
    })
    customer.save()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(404).json(err);
    })
})

Router.get('/allCustomer', (req, res) => {
    Customer.find()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(404).json(err);
    })
})

Router.post('/updateCustomer/:id', (req, res) => {
    const customer = new Customer({
        _id: req.params.id,
        customerName: req.body.customerName,
        customerAge: req.body.customerAge,
        hobbies: req.body.hobbies,
        membership: req.body.membership,
        customerOutfitSize: req.body.customerOutfitSize,
        customerEmpDetail: req.body.customerEmpDetail,
    })
    Customer.updateOne({_id:req.params.id}, customer)
    .then(() => {
        res.status(200).json({message:"updated successfully"});
    })
    .catch((err) => {
        res.status(404).json(err);
    })
})

Router.delete('/deleteCustomer/:id', (req, res) => {
    Customer.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(200).json({message:"deleted Successfully"});
    })
    .catch((err) => {
        res.status(404).json(err);
    })
})

module.exports = Router;