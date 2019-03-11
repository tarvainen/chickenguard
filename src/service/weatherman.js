'use strict'

const sensor = require('../util/dht')

module.exports = {
  get: async () => new Promise((resolve, reject) => {
    sensor.read(22, 4, (err, t, h) => {
      if (err) {
        return reject(new Error('Failed to read sensor: ' + err))
      }

      return resolve({
        temperature: +t.toFixed(2),
        humidity: +h.toFixed(2)
      })
    })
  })
}
