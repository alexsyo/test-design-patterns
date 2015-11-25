'use strict';

let Mine = require('./Mine');

class Iron extends Mine {

    constructor() {

        super();
        this.ore = 'Iron';

    }

}

module.exports = Iron;