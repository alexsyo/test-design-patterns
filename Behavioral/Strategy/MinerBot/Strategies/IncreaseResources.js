'use strict';

class IncreaseResources {

    constructor(minerBot) {

        this.minerBot = minerBot;

    }

    run() {

        console.log(this.minerBot.mine());
        console.log(this.minerBot.walk('bank'));
        console.log(this.minerBot.deposit());
        console.log(this.minerBot.walk('cave'));

    }

}

module.exports = IncreaseResources;
