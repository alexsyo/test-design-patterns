'use strict';

let IronMinerBotBuilder = require('./MinerBot/IronMinerBotBuilder');
let GoldMinerBotBuilder = require('./MinerBot/GoldMinerBotBuilder');
let MinerBotDirector = require('./MinerBot/MinerBotDirector');

let ironMinerBotBuilder = new IronMinerBotBuilder();
let goldMinerBotBuilder = new GoldMinerBotBuilder();

let minerBotDirector = new MinerBotDirector(ironMinerBotBuilder);

minerBotDirector.run();

setTimeout(() => {

    minerBotDirector.exit();

    minerBotDirector = new MinerBotDirector(goldMinerBotBuilder);

    minerBotDirector.run();

}, 20000);

