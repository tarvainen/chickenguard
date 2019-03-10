const router = require('express').Router()

router.use('/climate-info', require('./climate-info'))

module.exports = router
