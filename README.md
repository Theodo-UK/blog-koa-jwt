# blog-koa-jwt
**Description**
This repository contains a an example code for an api with koa-router and protected by koa-jwt.

- Public routes:
 - GET /customer: returns the list of customers
 - GET /customer/:customerId: returns the customer of id :customerId
 - POST /login returns the jwt token if the good password has been sent (In this demo it is "password" for everyone)

- Protected route:
 - POST /customer: adds a new customer

To be able to access the protected route, a user should:

- Send a post request on /login with the good password to get a jwt token in the response. Payload: `{"password": "password"}`
- Set the Authorization header to `Bearer <token>` before making a request on a protected route.

**Instalation**
After Cloning the repository, run:
```
npm install
npm start
```

The application is listening to the port 3000
