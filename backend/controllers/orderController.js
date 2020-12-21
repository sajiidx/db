const { response } = require('express')
const Order = require('../models/Order')

//Show the list of Products
const index = (req, res) => {
    Order.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Occured!"
        })
    })
}
const getOrderByUsername = (req, res) => {
    Order.findOne({username: req.body.username})
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            error
        })
    })
}
//show Order using ID
const show = (req, res) => {
    Order.findOne({order_id: req.body.id})
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            error
        })
    })
}
//add new Order
const store = (req, res) => {
    let order = new Order({
        order_id: req.body.id,
        items: req.body.items,
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        zipcode: req.body.zipcode,
        phone: req.body.phone
    })
    order.save()
    .then(response => {
        return res.status(200).send({response,  msg: 'Order Added Successfully'})
    })
    .catch(error => {
        return res.status(401).send({error, msg: "An Error Occured!"})
    })
}
//update an Order
const update = (req, res) => {
    let id = req.body.id;

    let updatedData = {
        items: req.body.items,
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        zipcode: req.body.zipcode,
        phone: req.body.phone
    }

    Order.findOneAndUpdate({order_id: id}, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Order Updated Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//delete an Order
const destory = (req, res) => {
    let id = req.body.id
    Order.findOneAndRemove({order_id: id})
    .then(() => {
        res.json({
            message: 'Order Deleted Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//exporting functions
module.exports = {
    index, show, store, update, destory, getOrderByUsername
}