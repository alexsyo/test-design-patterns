'use strict';

class IncreaseExperience {

    constructor(minerBot) {

        this.minerBot = minerBot;

    }

    run() {

        console.log(this.minerBot.mine());
        console.log(this.minerBot.drop());

    }

}

module.exports = IncreaseExperience;
