'use strict';

class Farm {

    run() {
    
        console.log(this.plant());

        setTimeout(() => {

            console.log(this.harvest());
            this.run();

        }, 5000);
       
    }

}

module.exports = Farm;
