const express = require('express')
const mongoose = require('mongoose')
const AuthRoute = require('./routes/auth')
const connectToDatabase = require('./config/connectToDatabase')
const ProductRoute = require('./routes/product')
const CartRoute = require('./routes/cart')
const OrderRoute = require('./routes/order')
const CategoryRoute = require('./routes/category')
const cors = require('cors')
const { request } = require('express')

const port = process.env.PORT || 5040;

// App config
const app = express()
app.use(cors())

// Middleware
app.use(express.json())
app.use('/customer', AuthRoute)
app.use('/product', ProductRoute)
app.use('/cart', CartRoute)
app.use('/order',OrderRoute)
app.use('/upload',express.static('upload'))
app.use('/category',CategoryRoute)

// DB config
connectToDatabase()

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello, World!'))

// Listener
app.listen(port, () => console.log(`Listening to localhost:${port}`))