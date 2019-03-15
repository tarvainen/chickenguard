'use strict'

const pin = require('../util/pin')(3)

pin.inverse()

module.exports = {
  start: () => pin.up(),
  stop: () => pin.down()
}
