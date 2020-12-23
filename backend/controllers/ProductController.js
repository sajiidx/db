const { response } = require('express')
const Product = require('../models/Product')

//Show the list of Products
const index = (req, res) => {
    Product.find()
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
const getProducts = (req, res) => {
    return Product.find()
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    })
}
//show Product using ID
const show = (req, res) => {
    let pid = req.body.pid
    Product.findOne({pid: pid})
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
//add new Product
const store = (req, res) => {
    console.log(req.file)
    let product = new Product({
        pid: req.body.pid,
        pname: req.body.pname,
        price: req.body.price,
        quantity: req.body.quantity,
        ProductImage: req.file.path,
        description: req.body.description,
    })
    product.save()
    .then(response => {
        return res.status(200).send({response,  msg: 'Product Added Successfully'})
    })
    .catch(error => {
        return res.status(401).send({error, msg: "An Error Occured!"})
    })
}
const cat = (req, res) => {
    let cat_id = req.body.cat_id;
    Product.find({cat_id: cat_id})
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
//update an Product
const update = (req, res) => {
    let ProductID = req.body.ProductID

    let updatedData = {
        quantity: req.body.quantity
    }

    Product.findOneAndUpdate({pid: ProductID}, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Product Updated Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//delete an Product
const destory = (req, res) => {
    let ProductID = req.body.ProductID
    Product.findOneAndRemove({pid: ProductID})
    .then(() => {
        res.json({
            message: 'Product Deleted Successfully'
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
    index, show, store, update, destory, getProducts, cat
}