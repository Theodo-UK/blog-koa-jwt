# blog-koa-jwt
**Description**
This repository contains a an example code for an api with koa-router and protected by koa-jwt.

- Public routes:
 - GET /customer: returns the list of customers
 - GET /customer/:customerId: returns the customer of id :customerId

- Protected route:
 - POST /customer: adds a new customer

**Instalation**
After Cloning the repository, run:
```
npm install
npm start
```

The application is listening to the port 3000
