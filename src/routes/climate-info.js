const router = require('express').Router()

router.get('/current', (req, res) => {
  res.json({ temperature: 10, humidity: 10 })
})

module.exports = router
