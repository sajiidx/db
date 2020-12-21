const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cartController')
const upload = require('../middleware/upload')

router.get('/', cartController.index)

router.post('/show', cartController.show)
router.post('/store', cartController.store)
router.post('/update', cartController.update)
router.post('/empty',cartController.doCartEmpty)
router.post('/delete', cartController.destory)

module.exports = router