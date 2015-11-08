'use strict';

let sector = process.argv[2];
let type = process.argv[3];
let path = './' + sector + '/' + type;

let ResourcesFactory = require(path);

module.exports = new ResourcesFactory;