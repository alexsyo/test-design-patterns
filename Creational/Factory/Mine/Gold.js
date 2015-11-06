'use strict';

let Mine = require('./Mine');

class Gold extends Mine {

    dig() {

        console.log('Digging...');

    }

    collect() {

        console.log('Gold found!');

    }

}

module.exports = Gold;