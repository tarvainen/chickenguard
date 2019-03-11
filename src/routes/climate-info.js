const router = require('express').Router()
const sensor = require('../util/dht')

router.get('/current', async (req, res) => {
  sensor.read(22, 4, (err, t, h) => {
    if (err) {
      return res.status(500).json({ err: err.toString() })
    }

    res.json({
      temperature: +t.toFixed(2),
      humidity: +h.toFixed(2)
    })
  })
})

module.exports = router
