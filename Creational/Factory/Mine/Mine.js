'use strict';

class Mine {

    run() {

        this.dig();

        setTimeout(() => {

            this.collect();
            this.run();

        }, 5000);

    }
}

module.exports = Mine;