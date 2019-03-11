'use strict'

exports.up = function (db) {
  return db.runSql(
    `
      create table if not exists weather_series (
        id          int           not null primary key auto_increment,
        temperature decimal(4,2)  null default null,
        humidity    decimal(4,2)  null default null,
        created_at  datetime      not null default current_timestamp
      )
    `
  )
}

exports.down = function (db) {
  return db.runSql('drop table if exists weather_series')
}

exports._meta = {
  version: 1
}
