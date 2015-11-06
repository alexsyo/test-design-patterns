'use strict';

let sector = process.argv[2];
let type = process.argv[3];
let path = './' + sector + '/' + type;

let Factory = require(path);

module.exports = new Factory;