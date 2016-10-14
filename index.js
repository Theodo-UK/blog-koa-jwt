const app = require('koa')();
const router = require('koa-router')();

router.get('/', function *(next) {
  this.body = 'Hello World!';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

  app.listen(3000);
