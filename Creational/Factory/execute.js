'use strict';

let sector = process.argv[2];
let type = process.argv[3];

let ResourceFactory = require('./Resources/ResourcesFactory');
let resource = ResourceFactory.make(sector, type);

resource.run();