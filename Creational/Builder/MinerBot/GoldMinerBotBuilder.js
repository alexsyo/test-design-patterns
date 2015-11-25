'use strict';

let MinerBot = require('./MinerBot');

class GoldMinerBotBuilder {

    constructor() {

        this.minerBot = new MinerBot();

    }

    buildWalkToCave() {

        return this.minerBot.walk('gold cave');

    }

    buildMine() {

        return this.minerBot.mine('gold');

    }

    buildWalkToBank() {

        return this.minerBot.walk('Lumbridge bank');

    }

    buildDeposit(ore) {

        return this.minerBot.deposit(ore);

    }

}

module.exports = GoldMinerBotBuilder; 