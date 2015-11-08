'use strict';

class MinerBot {

    walk(destination) {

        return 'Walk to ' + destination + '...';

    }

    mine(type) {

        let ore = Math.round(Math.random() * 100);

        return ore + ' ' + type;

    }

    deposit(ore) {

        return 'Deposit ' + ore;

    }

}

module.exports = MinerBot;