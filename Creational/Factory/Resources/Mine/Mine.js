'use strict';

class Mine {

    dig() { 

        return 'Digging...';

    }

    gather() {
    
        return `${this.ore} found!`;

    }

    run() {

        console.log(this.dig());

        setTimeout(() => {

            console.log(this.gather());
            this.run();

        }, 5000);

    }

}

module.exports = Mine;