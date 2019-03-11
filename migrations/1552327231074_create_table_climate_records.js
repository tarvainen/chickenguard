module.exports = {
    up: `
      CREATE TABLE IF NOT EXISTS CLIMATE_RECORDS (
        ID          INT           NOT NULL PRIMARY KEY AUTO_INCREMENT,
        TEMPERATURE DECIMAL(4,2)  NULL DEFAULT NULL,
        HUMIDITY    DECIMAL(4,2)  NULL DEFAULT NULL,
        CREATED_AT  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `,
    down: 'DROP TABLE IF EXISTS CLIMATE_RECORDS'
}