'use strict';

class MinerBot {

    constructor() {

        this.strategy = null;

    }

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

    setStrategy(strategy) {

        this.strategy = strategy;

    }

    run() {

        (this.strategy) ? this.strategy.run() : console.log('strategy not set');

    }

}

module.exports = MinerBot;
