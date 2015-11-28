'use strict';

class IncreaseMoney {

    constructor(minerBot) {

        this.minerBot = minerBot;

    }

    run() {

        console.log(this.minerBot.mine());
        console.log(this.minerBot.walk('shop'));
        console.log(this.minerBot.sell());
        console.log(this.minerBot.walk('cave'));

    }

}

module.exports = IncreaseMoney;
