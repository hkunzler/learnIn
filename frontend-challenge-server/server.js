const express = require('express');
const app = express();
const cors = require('cors');
const creditCardData = require('./data/creditCard');
const plbData = require('./data/personalLearningBudget');
const transactionsData = require('./data/transactions');

const PORT = 9999;
app.use(cors());
app.use(express.static('public'));

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

app.get('/transactions', (_, res) => {
  res.send(transactionsData);
});

app.get('/card-details', (req, res) => {
  const showCardNumber = req.query['show-card-number'] === 'true';
  res.send(creditCardData(showCardNumber));
});

app.get('/personal-learning-budget', (_, res) => {
  res.send(plbData);
});

/*
|--------------------------------------------------------------------------
| Server Listening
|--------------------------------------------------------------------------
*/

app.listen(PORT, () => {
  console.log(`Transactions server is listening on port ${PORT}!`);
});
