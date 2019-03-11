const router = require('express').Router()
const weatherman = require('../service/weatherman')

router.get('/current', async (req, res) => res.json(await weatherman.get()))

module.exports = router
