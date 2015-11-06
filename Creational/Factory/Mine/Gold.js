'use strict';

let Mine = require('./Mine');

class Gold extends Mine {

    dig() {

        return 'Digging...';

    }

    gather() {

        return 'Gold found!';

    }

}

module.exports = Gold;