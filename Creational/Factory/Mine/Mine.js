'use strict';

class Mine {

    run() {

        console.log(this.dig());

        setTimeout(() => {

            console.log(this.gather());
            this.run();

        }, 5000);

    }

}

module.exports = Mine;