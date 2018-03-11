# Cash

## What for ?

The Cash application can be used for converting money into another currency.

32 currencies are currently available.

## Installation

Get into the cash directory and execute the following commands in your working directory :

```sh
$ npm install

$ npm install jsdoc --save
```

### A few commands

If you want to convert an amount of a currency

```sh
$ node bin/index.js <amount> <currency>
```

If you want to convert an amount of a currency in another specific currency.
```sh
$ node bin/index.js <amount> <currency> <currency>
```

If you want to save currencies as default currencies
```sh
$ node bin/index.js --save <currency> <currency> ...
```

If you are encountering some trouble use the help command
```sh
$ node bin/index.js --help
```
