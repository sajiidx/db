const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')

router.get('/', orderController.index)

router.post('/show', orderController.show)
router.post('/store', orderController.store)
router.post('/update', orderController.update)
router.post('/delete', orderController.destory)

module.exports = router