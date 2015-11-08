'use strict';

let MinerBot = require('./MinerBot');

class IronMinerBotBuilder {

    constructor() {

        this.minerBot = new MinerBot;

    }

    buildWalkToCave() {

        return this.minerBot.walk('iron cave');

    }

    buildMine() {

        return this.minerBot.mine('iron');

    }

    buildWalkToBank() {

        return this.minerBot.walk('Farrington bank');

    }

    buildDeposit(ore) {

        return this.minerBot.deposit(ore);

    }

}

module.exports = IronMinerBotBuilder; 