'use strict';

class ResourcesFactory {

    static make(sector, type) {

        let path = './' + sector + '/' + type;
        let Instance = require(path);

        return new Instance();

    }

}

module.exports = ResourcesFactory;