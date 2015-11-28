'use strict';

let MinerBot = require('./MinerBot/MinerBot');
let IncreaseExperience = require('./MinerBot/Strategies/IncreaseExperience');
let IncreaseMoney = require('./MinerBot/Strategies/IncreaseMoney');
let IncreaseResources = require('./MinerBot/Strategies/IncreaseResources');

let minerBot = new MinerBot();

minerBot.setStrategy(new IncreaseResources(minerBot));
minerBot.run();

minerBot.setStrategy(new IncreaseMoney(minerBot));
minerBot.run();

minerBot.setStrategy(new IncreaseExperience(minerBot));
minerBot.run();
