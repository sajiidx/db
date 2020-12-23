const { Double } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    pid:{
        type: String,
        required: true,
        default: Date.now,
        unique: true
    },
    pname:{
        type: String,
        required: true,
    },
    cat_id:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    ProductImage:{
        type: String,
        required: true,
    },
    description:{
        type: String
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product