const weatherman = require('../service/weatherman')

async function storeWeather () {
  const weather = await weatherman.get()

  const dbh = require('../service/dbh')

  dbh.query('insert into weather_series set ?', weather)
}

module.exports = storeWeather
