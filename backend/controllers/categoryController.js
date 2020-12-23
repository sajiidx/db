const { response } = require('express')
const Category = require('../models/Category')

//Show the list of Products
const index = (req, res) => {
    Category.find()
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
const show = (req, res) => {
    let cid = req.body.cid
    Category.findOne({category_id: cid})
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
//add new Category
const store = (req, res) => {
    let category = new Category({
        category_id: req.body.cid,
        name: req.body.name,
        pid: req.body.pid,
    })
    category.save()
    .then(response => {
        return res.status(200).send({response,  msg: 'Category Added Successfully'})
    })
    .catch(error => {
        return res.status(401).send({error, msg: "An Error Occured!"})
    })
}
//update an Category
const update = (req, res) => {
    let cid = req.body.cid

    let updatedData = {
        name: req.body.name
    }

    Category.findOneAndUpdate({category_id: cid}, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Category Updated Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//delete an Category
const destory = (req, res) => {
    let cid = req.body.cid
    Category.findOneAndRemove({category_id: cid})
    .then(() => {
        res.json({
            message: 'Category Deleted Successfully'
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
    index, show, store, update, destory
}