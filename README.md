# Chicken Guard

App to help us guard our chickens

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
MYSQL_USERNAME=username
MYSQL_PASSWORD=password
MYSQL_DATABASE=app
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

# License

MIT
