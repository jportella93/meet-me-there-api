require('dotenv').config();

const Koa = require('koa');

const app = new Koa();

const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser'); // original
const cors = require('koa-cors'); // original

const router = require('./router');

const PORT = Number(process.env.PORT) || 3000;

app
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes());

const server = app.listen(
  PORT,
  console.log(`Meet Me There server listening on port ${PORT}`),
)
  .on('error', err => console.log(err));

module.exports = server;