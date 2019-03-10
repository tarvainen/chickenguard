let sensor

try {
  sensor = require('node-dht-sensor')
} catch (e) {
  sensor = {
    read: (model, pin, callback) => {
      callback(null, 0, 0)
    }
  }
}

module.exports = sensor
