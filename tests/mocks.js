const formatDate = require('../utils/formatDate')

const flights = {
  dateFrom: formatDate(new Date(Date.now() + 86400000)),
  dateTo: formatDate(new Date(Date.now() + (86400000 * 3))),
  origins: 'BCN,GVA,LHR',
}
flights.query = `?dateFrom=${flights.dateFrom}&dateTo=${flights.dateTo}&origins=${flights.origins}`

module.exports = {
  flights
}
