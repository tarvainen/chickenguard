'use strict'

const https = require('https')

async function createWeatherRecord (record) {
  console.log('Creating a weather record', record)

  return new Promise((resolve, reject) => {
    const data = JSON.stringify(record)

    const options = {
      hostname: process.env.API_HOST,
      port: 443,
      path: '/dev/weather',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }

    const req = https.request(options, (res) => {
      res.on('data', (d) => {
        resolve(d)
      })
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.write(data)
    req.end()
  })
}

module.exports = { createWeatherRecord }
