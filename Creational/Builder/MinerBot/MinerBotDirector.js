'use strict';

class MinerBotDirector {

    constructor(MinerBotBuilder) {

        this.minerBotBuilder = MinerBotBuilder;
        this.stop = false;

    }

    run() {

        if(!this.stop) {

            setTimeout(() => {

                console.log(this.minerBotBuilder.buildWalkToCave());

                let iron = this.minerBotBuilder.buildMine();
                console.log('Mined ' + iron + '!');

                setTimeout(() => {

                    console.log(this.minerBotBuilder.buildWalkToBank());

                    console.log(this.minerBotBuilder.buildDeposit(iron));

                    this.run();

                }, 5000);

            }, 5000);
 
        }

    }

    exit() {

        this.stop = true;

    }

}

module.exports = MinerBotDirector;