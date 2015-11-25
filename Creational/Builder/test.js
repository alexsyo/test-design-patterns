'use strict';

let expect = require('chai').expect;
let sinon = require('sinon');
let MinerBot = require('./MinerBot/MinerBot');
let minerBot = new MinerBot();
let IronMinerBotBuilder = require('./MinerBot/IronMinerBotBuilder');
let ironMinerBotBuilder = new IronMinerBotBuilder();
let MinerBotDirector = require('./MinerBot/MinerBotDirector');
let minerBotDirector = new MinerBotDirector(ironMinerBotBuilder);

describe('MinerBot class', () => {

    it('should walk to a destination', () => {

        expect(minerBot.walk('cave')).to.match(/cave/);

    });

    it('should mine the ore', () => {

        expect(minerBot.mine()).to.match(/^[0-9]{1,2}\ .*$/);

    });

    it('should deposit the ore', () => {

        expect(minerBot.deposit(35)).to.match(/35/);

    });

});

describe('MinerBotDirector class', () => {

    it('should run', () => {

        let clock = sinon.useFakeTimers();
        let buildWalkToCave = sinon.stub(ironMinerBotBuilder, 'buildWalkToCave');
        let buildMine = sinon.stub(ironMinerBotBuilder, 'buildMine');
        let buildWalkToBank = sinon.stub(ironMinerBotBuilder, 'buildWalkToBank');
        let buildDeposit = sinon.stub(ironMinerBotBuilder, 'buildDeposit');

        minerBotDirector.run();

        clock.tick(5000);
        expect(buildWalkToCave.calledOnce).to.be.true;
        expect(buildMine.calledOnce).to.be.true;

        clock.tick(5000);
        expect(buildWalkToBank.calledOnce).to.be.true;
        expect(buildDeposit.calledOnce).to.be.true;

    });


    it('should set stop', () => {

        expect(minerBotDirector.stop).to.be.false;

        minerBotDirector.exit();

        expect(minerBotDirector.stop).to.be.true;

    });

});