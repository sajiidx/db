const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.index)

router.post('/show', categoryController.show)
router.post('/store', categoryController.store)
router.post('/update', categoryController.update)
router.post('/delete', categoryController.destory)

module.exports = router