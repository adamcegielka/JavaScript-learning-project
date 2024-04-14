console.log('Objects');

const adam = {
  name: 'Adam',
  age: 52,
};

console.log(adam);

// ----------------

const address = {
  country: 'Poland',
  city: 'Sopot',
  street: 'Zielona',
  number: 19,
  postcode: '80-444',
};

console.log(address);
console.log(address.city);

// ----------------

const bankAccount = {
  firstName: 'Jan',
  lastName: 'Nowak',
  accountNumber: '11112222333344445555',
  accountBalance: 15000,
};

console.log(bankAccount);

bankAccount.country = 'Poland';
console.log(bankAccount);

// https://www.w3schools.com/js/js_objects.asp
