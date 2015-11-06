'use strict';

let Farm = require('./Farm');

class Grain extends Farm {

    plant() {
    
        return 'Grain planted...';

    }

    harvest() {
    
        return 'Grain harvested!';
    
    }

}

module.exports = Grain;
