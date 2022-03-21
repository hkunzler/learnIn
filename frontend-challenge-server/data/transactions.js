const faker = require('faker');
const fs = require('fs');
const path = require('path');

// get all logos from logos directory
const logos = fs.readdirSync(path.resolve(__dirname, '../public/logos'));

const Statuses = {
  Approved: 'Approved',
  Pending: 'Pending',
};

// Util method to generate mock transactions
function makeTransaction(id) {
  return {
    id,
    company: faker.company.companyName(),
    date: faker.date.past(2),
    amount: getRandomInt(10000, 1000000),
    status: Math.random() > 0.5 ? Statuses.Approved : Statuses.Pending,
    logo: `logos/${logos[getRandomInt(0, logos.length)]}`,
  };
}

// Populate transactions array
const transactions = [];
const TOTAL_TRANSACTIONS = 100;
for (let i = 0; i < TOTAL_TRANSACTIONS; i++) {
  transactions.push(makeTransaction(i));
}

// Util method for getting a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = transactions;
