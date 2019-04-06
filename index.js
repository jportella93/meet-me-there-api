// Env variables
require('dotenv').config();
const PORT = Number(process.env.PORT) || 3000;

// Dependencies
const Koa = require('koa');
const app = new Koa();

// Routes
const router = require('./router');

// Middlewares
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const errorHandler = require('./middlewares/errorHandler')


app
  .use(errorHandler)
  .use(logger())
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());


const server = app.listen(
  PORT,
  console.log(`Meet Me There server listening on port ${PORT}`),
)

module.exports = server;