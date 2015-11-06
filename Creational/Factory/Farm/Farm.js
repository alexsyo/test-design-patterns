'use strict';

class Farm {

    run() {
    
        this.plant();

        setTimeout(() => {

            this.harvest();
            this.run();

        }, 5000);
       
    }

}

module.exports = Farm;
