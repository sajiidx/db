const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        unique: true
    },
    items: [
        {
            type: String,
        }
    ],
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    zipcode: {
        type: String,
    },
    phone: {
        type: String,
    },
    status: {
        type: String,
        default: "pending",
    },
    order_date: {
        type: Date,
        default: Date.Now
    }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order