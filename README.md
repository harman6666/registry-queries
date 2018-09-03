# Registry Queries and Ethereum Address lookup
____________
Introduction
------------

This is a name or Ethereum address lookup application. With this user can search address from the given ABI by using __'getAddress'__ method and also search ethereum address to get the basic details of the account.

Features/Functionalities
---------

- Used Parity as an Ethereum client.
- Used @party/etherscan for getting the live data of the account(this will only work when user enters the hash address - validation is done by regex).
- User can search by any name, if the name is registered then we get the address from the name by __getAddress__ contract method.
- User can also search ethereum hash address to get the basic details of the account like total balance, number of transactions, etc;
- Beautiful layout.

Some Examples/Screenshots
--------------------
- **Address Search**
![address-search](https://s8.postimg.cc/ihzuj351h/Screen_Shot_2018-09-04_at_1.33.55_AM.png)
- **Name Search**:
![Name-search](https://s8.postimg.cc/c4arfu7v9/Screen_Shot_2018-09-04_at_1.34.11_AM.png)

Some NPM commands for reference
---------------

- __npm start__ starts the development server and auto-reloads the page any time you make edits
- __npm run__ build bundles the app into static files for production

Enhacements which can be done
----------------

- We can optimise the code.
- More functionality can be added by using parity api.

### Many thanks for looking out !