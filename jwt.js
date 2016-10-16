const jwt = require('koa-jwt');

module.exports = jwt({
  secret: 'A very secret key', // Should not be hardcoded
  algorithm: 'RS256'
});
