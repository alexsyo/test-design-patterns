'use strict';

let Farm = require('./Farm');

class Potato extends Farm {

    plant() {
    
        console.log('Potato planted...');

    }

    harvest() {
    
        console.log('Potato harvested!');
    
    }

}

module.exports = Potato;
