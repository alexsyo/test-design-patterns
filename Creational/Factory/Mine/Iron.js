'use strict';

let Mine = require('./Mine');

class Iron extends Mine {

    dig() {

        return 'Digging...';

    }

    gather() {

        return 'Iron found!';

    }

}

module.exports = Iron;