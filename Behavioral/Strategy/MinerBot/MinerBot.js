'use strict';

class MinerBot {

    walk(destination) {

        return `walking to the ${destination}`;
    
    }

    mine() {

        return 'mining';
    
    }

    deposit() {

        return 'storing the ore';
    
    }

    sell() {
    
        return 'selling the ore';

    }

    drop() {

        return 'dropping the ore';
    
    }

}

module.exports = MinerBot;
