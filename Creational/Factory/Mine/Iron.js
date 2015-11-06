'use strict';

let Mine = require('./Mine');

class Iron extends Mine {

    dig() {

        console.log('Digging...');

    }

    collect() {

        console.log('Iron found!');

    }

}

module.exports = Iron;