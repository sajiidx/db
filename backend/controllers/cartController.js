const { response } = require('express')
const Cart = require('../models/Cart')

//Show the list of Products
const index = (req, res) => {
    Cart.find()
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
const getCarts = (req, res) => {
        return Cart.find()
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    }
    //show Cart using ID
const show = (req, res) => {
        let username = req.body.cusername
        Cart.find({cusername: username})
            .then(response => {
                res.json({
                    response
                })
            })
            .catch(error => {
                res.json({
                    message: "An Error Occured"
                })
            })
    }
    //add new Cart
const store = (req, res) => {
        let cart = new Cart({
            cart_id: req.body.cart_id,
            items: req.body.items,
            cusername: req.body.cusername
        })
        cart.save()
            .then(response => {
                return res.status(200).send({ response, msg: 'Cart Added Successfully' })
            })
            .catch(error => {
                return res.status(401).send({ error, msg: "An Error Occured!" })
            })
    }
    //update an Cart
const update = (req, res) => {
        let cusername = req.body.cusername
        let updatedData = JSON.parse(req.body.item)

        console.log(updatedData)

        Cart.findOneAndUpdate({cusername: cusername}, {
            $push: {
                items:[
                    updatedData
                ]
            }
        })
        .then(() => {
            res.json({
                message: 'Cart Updated Successfully'
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
    }
    //delete an Cart
    const doCartEmpty = (req, res) => {
        let cusername = req.body.cusername
        //let updatedData = JSON.parse(req.body.item)

        //console.log(updatedData)

        Cart.findOneAndUpdate({cusername: cusername}, {
            $set: {
                items:[
                ]
            }
        })
        .then(() => {
            res.json({
                message: 'Cart Updated Successfully'
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
    }
const destory = (req, res) => {
        let cartID = req.body.cartID
        Cart.findByIdAndRemove(cartID)
            .then(() => {
                res.json({
                    message: 'Cart Deleted Successfully'
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
    index,
    show,
    store,
    update,
    destory,
    getCarts,
    doCartEmpty
}