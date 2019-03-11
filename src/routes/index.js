const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

router.use('/healtz', require('./healtz'))
router.use('/climate-info', require('./climate-info'))
router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = router
