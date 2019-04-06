'use strict';
const Router = require('koa-router');

const router = new Router();
const flightsController = require('./flightsController')

router.get('/flights', async (ctx, next) => {
  let { dateFrom, dateTo, origins, destination } = ctx.query;

  if (!dateFrom || !dateTo || !origins) {
    const missingParams = [];

    if (!dateFrom) missingParams.push('dateFrom');
    if (!dateTo) missingParams.push('dateTo');
    if (!origins) missingParams.push('origins');

    const errorMessage = `Error: Missing parameters ${missingParams.join(', ')}.`;
    ctx.throw(400, errorMessage);

  } else {
    origins = origins.split(',');

    if (destination) {
      ctx.body = await flightsController.getFlightsForOneDestination({ dateFrom, dateTo, origins, destination })
    } else {
      ctx.body = await flightsController.getFlights({ dateFrom, dateTo, origins })
    }
  }
});

module.exports = router;