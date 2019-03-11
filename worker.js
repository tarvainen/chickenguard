'use strict'

require('dotenv').config()

const scheduler = require('node-schedule')

const everyMinute = '* * * * *'

scheduler.scheduleJob(
  'store-weather',
  everyMinute,
  require('./src/job/store-weather')
)
