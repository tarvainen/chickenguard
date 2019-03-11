'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.runSql(
    `
      create table if not exists climate_records (
        id          int           not null primary key auto_increment,
        temperature decimal(4,2)  null default null,
        humidity    decimal(4,2)  null default null,
        created_at  datetime      not null default current_timestamp
      )
    `
  )
};

exports.down = function(db) {
  return db.runSql('drop table if exists climate_records')
};

exports._meta = {
  version: 1
};
