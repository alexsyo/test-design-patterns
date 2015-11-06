'use strict';

let Farm = require('./Farm');

class Potato extends Farm {

    plant() {
    
        return 'Potato planted...';

    }

    harvest() {
    
        return 'Potato harvested!';
    
    }

}

module.exports = Potato;
