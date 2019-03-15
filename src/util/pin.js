'use strict'

let Gpio

try {
  Gpio = require('onoff').Gpio

  const pin = new Gpio(0, 'out') // eslint-disable-line
} catch (e) {
  console.warn('Mocking GPIO writeSync, using on a non-raspi?')

  Gpio = class {
    writeSync () {}
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
