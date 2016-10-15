const customers = [
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Smith",
    "date_of_birth": "1993-04-23T00:00:00.000Z"
  },
  {
    "id": 2,
    "first_name": "Justin",
    "last_name": "Bieber",
    "date_of_birth": "1994-04-23T00:00:00.000Z"
  }
];

let maxId = 2;

module.exports = {
  getCustomers: function() {
    return customers;
  },
  getCustomer: function(id) {
    return customers.find(customer => customer.id === id);
  },
  postCustomer: function(customer) {
    maxId++;
    customer.id = maxId;
    customers.push(customer);
    return this.getCustomer(maxId);
  }

}
