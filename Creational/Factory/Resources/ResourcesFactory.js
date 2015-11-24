'use strict';

class ResourcesFactory {

    static make(sector, type) {

        let path = './' + sector + '/' + type;
        let instance = require(path);

        return new instance;

    }

}

module.exports = ResourcesFactory;