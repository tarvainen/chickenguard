'use strict'

let Gpio

try {
  Gpio = require('onoff').Gpio
  new Gpio(0, 'out')
} catch (e) {
  Gpio = class {
    writeSync () {
      console.warn('Mocking GPIO writeSync, using on a non-raspi?')
    }
  }
}

const pinFactory = (number) => {
  const pin = new Gpio(number, 'out')
  let up = 1
  let down = 0

  return {
    up: () => pin.writeSync(up),
    down: () => pin.writeSync(down),
    inverse: () => {
      up = +!up
      down = +!down
    }
  }
}

module.exports = pinFactory
