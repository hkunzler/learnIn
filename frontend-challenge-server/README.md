# Running the Server

To start the api server run `npm i` to install the packages and then `npm start` to start the server.

If the server is successfully started, you should see `Transactions server is listening on port 9999` in your console

You should then be able to get data from `localhost:9999/[your-path-here]`

# The API

## `[GET] /transactions` returns transaction data in the following format

```
[{
  id: number,
  description: string,
  amount: number,
  status: 'Pending' | 'Approved',
  logo: string // url of logo image
}]
```

This data regenerates when the server is restarted. All other data is static.

## `[GET] /card-details` returns data about the current user's card

```
{
  balance: number,
  cardNumber: string,
  holder: {
    firstName: string,
    lastName: string,
    address: {
      billing: {
        city: string,
        state: string,
        zipcode: string,
        line1: 'string,
      },
    },
  },
}
```

This endpoint also has a query param argument `?show-card-number=true` that will show the card's full number. Otherwise only the last 4 digits of the card number are visible in the response.

## `[GET] /personal-learning-budget`

```
{
  title: str,
  providerCompany: str,
  amount: number
}
```
