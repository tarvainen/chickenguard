'use strict'

const dbh = require('../service/dbh')
const api = require('../service/api')

async function storeWeather () {
  const exportRows = await getExportRows()
  writeCurrentExportTime()

  for (const record of exportRows) {
    try {
      await api.createWeatherRecord(record)
    } catch (e) {
      console.error(e)
    }
  }
}

async function getExportRows () {
  return new Promise((resolve, reject) => {
    dbh.query(
      `
        select
          temperature,
          humidity,
          created_at as time
        from weather_series
        where created_at >= ifnull(
          (
            select created_at
            from weather_exports
            order by id desc
            limit 1
          ),
          '1990-01-01'
        )
      `,
      (err, results) => {
        if (err) {
          return reject(err)
        }

        return resolve(results)
      }
    )
  })
}

function writeCurrentExportTime () {
  dbh.query('insert into weather_exports (created_at) values (now())')
}

module.exports = storeWeather
