const weatherman = require('../service/weatherman')

async function storeClimateInfo () {
  const weather = await weatherman.get()

  const dbh = require('../service/dbh')

  dbh.query('insert into climate_records set ?', weather)
}

module.exports = storeClimateInfo
