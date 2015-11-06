'use strict';

let Farm = require('./Farm');

class Grain extends Farm {

    plant() {
    
        console.log('Grain planted...');

    }

    harvest() {
    
        console.log('Grain harvested!');
    
    }

}

module.exports = Grain;
