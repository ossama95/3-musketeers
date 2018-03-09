#!/usr/bin/env node

// Load of all dependies
const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();
const argv = process.argv.slice(2);

// Call the function helpers from helpers.js
helpers(argv);

// Create a default converter
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
};

// Call the function cash from cash.js
cash(command);
