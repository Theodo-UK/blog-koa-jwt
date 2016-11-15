const app = require('koa')();
const router = require('koa-router')();
const koaBetterBody = require('koa-better-body');

const customerService = require('./services/customerService');
const authenticate = require('./middlewares/authenticate.js');
const jwt = require('./middlewares/jwt');

app.use(koaBetterBody({fields: 'body'}));

router.get('/', function *() {
  this.body = 'Welcome to the demo api of koa router';
});

router.get('/customer', function *() {
  this.body = customerService.getCustomers();
});

router.get('/customer/:id', function *() {
  if (customerService.getCustomer(this.params.id)) {
    this.body = customerService.getCustomer(this.params.id);
  }
  else {
    this.status = 404;
    this.body = {"error": "There is no customer with that id"};
  }
});

router.post('/customer', jwt, function *() {
  this.body = customerService.postCustomer(this.request.body);
});

router.post('/login', function *() {
  authenticate(this);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
