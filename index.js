const app = require('koa')();
const router = require('koa-router')();
const koaBetterBody = require('koa-better-body');

const jwt = require('./jwt');
const customerService = require('./services/customerService');
const authenticate = require('./authenticate.js');

app.use(koaBetterBody());

router.get('/', function *(next) {
  this.body = 'Welcome to the demo api of koa router';
});

router.get('/customer', function *(next) {
  this.body = customerService.getCustomers();
});

router.get('/customer/:id', function *(next) {
  if (customerService.getCustomer(parseInt(this.params.id))) {
    this.body = customerService.getCustomer(parseInt(this.params.id));
  }
  else {
    this.status = 404;
    this.body = {"error": "There is no customer with that id"};
  }
});

router.post('/customer', jwt, function *(next) {
  this.body = customerService.postCustomer(JSON.parse(this.request.body));
});

router.post('/login', function *(next) {
  authenticate(this);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

  app.listen(3000);
