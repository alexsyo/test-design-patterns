 'use strict';

let expect = require('chai').expect;
let sinon = require('sinon');
let MinerBot = require('./MinerBot/MinerBot');
let minerBot = new MinerBot();

describe('MinerBot:', () => {

    it('can walk', () => {
    
        expect(minerBot.walk('cave')).to.match(/walking.*cave/);
    
    });

    it('can mine', () => {
    
        expect(minerBot.mine()).to.match(/mining/);

    });

    it('can deposit', () => {
    
        expect(minerBot.deposit()).to.match(/storing/);
    
    });

    it('can sell', () => {
    
        expect(minerBot.sell()).to.match(/selling/);
    
    });

    it('can drop', () => {
    
        expect(minerBot.drop()).to.match(/dropping/);
    
    });

});

describe('increaseResources strategy:', () => {});

describe('increaseMoney strategy:', () => {});

describe('increaseExperience strategy:', () => {});
