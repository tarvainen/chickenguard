const express = require('express')

const app = express()
const port = 3000

app.use('/api', require('./src/routes'))

app.listen(port, () => console.log(`App running at ${port}!`))
