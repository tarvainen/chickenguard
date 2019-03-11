require('dotenv').config()

const scheduler = require('node-schedule')

const everyMinute = '* * * * *'

scheduler.scheduleJob(
  'store-climate-info',
  everyMinute,
  require('./src/job/store-climate-info')
)
