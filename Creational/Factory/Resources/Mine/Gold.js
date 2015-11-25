'use strict';

let Mine = require('./Mine');

class Gold extends Mine {

    constructor() {

        super();
        this.ore = 'Gold';

    }

}

module.exports = Gold;