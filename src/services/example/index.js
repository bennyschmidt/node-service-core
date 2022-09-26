const { http } = require('node-service-client');

const { hello } = require('./api');

module.exports = http({
  GET: {
    hello
  },
  POST: {},
  PUT: {},
  DELETE: {}
});
