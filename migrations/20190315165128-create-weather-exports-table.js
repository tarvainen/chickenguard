'use strict'

exports.up = function (db) {
  return db.runSql(
    `
      create table if not exists weather_exports (
        id          int           not null primary key auto_increment,
        created_at  datetime      not null default current_timestamp
      )
    `
  )
}

exports.down = function (db) {
  return db.runSql('drop table if exists weather_exports')
}

exports._meta = {
  version: 1
}
