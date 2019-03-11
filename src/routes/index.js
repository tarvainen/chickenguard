const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

router.use('/healtz', require('./healtz'))
router.use('/weather', require('./weather'))
router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = router
