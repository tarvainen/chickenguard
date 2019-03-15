# Chicken Guard

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

App to help us guard our chickens

```
+--------------+        +-----------+       +-----------------+      +-----------------+
|              |        |           |       |                 |      |                 |
|  NodeJS API  ----------  MariaDB  ---------  NodeJS Worker  --------   AWS Lambdas   |
|              |        |           |       |                 |      |                 |
+--------------+        +-----------+       +-----------------+      +-----------------+
```

## Requirements

* Node
* MariaDB (or MySQL)

## Installation

```
# on rpi
npm install

# on non-rpi
npm install --no-optional

npm run db:migrate
npm start
```

## Configuration

### Environments

You can simply use local `.env` file to configure environments (`cp .env.dist .env`)

Configurable environments are

```
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USERNAME=username
MYSQL_PASSWORD=password
MYSQL_DATABASE=app
API_HOST=foobar.yourawslambdadomain.com
```

### DHT22

Follow https://github.com/momenso/node-dht-sensor#first-example to connect DHT22

### Supervisor

**Note: required to run as root to access GPIO**

```
[program:app]
user=root
directory=/app
command=npm start

[program:worker]
user=root
directory=/app
command=npm run worker
```

#### program:app

Keeps API running in case of failure. Startup on system startup.

#### program:worker

Keeps worker running in case of failure. Startup on system startup.

## Usage

API documentation is available at http://localhost:3000/api/doc

# License

Though you would propably do nothing with this, it's still MIT
