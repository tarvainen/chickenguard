'use strict'

const router = require('express').Router()
const fan = require('../service/fan')

router.post('/start', (req, res) => {
  fan.start()

  res.json({})
})

router.post('/stop', (req, res) => {
  fan.stop()

  res.json({})
})

module.exports = router
