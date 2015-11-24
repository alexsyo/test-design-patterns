'use strict';

let expect = require('chai').expect;
let sinon = require('sinon');
let Gold = require('./Resources/Mine/Gold');
let gold = new Gold;

describe('Gold class', () => {

    it('should be defined', () => {

        expect(gold).to.be.instanceof(Object);
        expect(gold).to.be.instanceof(Gold);

    });

    it('should dig', () => {

        expect(gold.dig()).to.match(/dig/i);

    });

});

describe('Mine class', () => {

    it('should run', () => {

        let dig = sinon.stub(gold, 'dig');
        let gather = sinon.stub(gold, 'gather');
        let clock = sinon.useFakeTimers();
        
        gold.run();

        expect(dig.calledOnce).to.be.true;
        clock.tick(5000);
        expect(gather.calledOnce).to.be.true;

    });

});

describe('Factory', () => {

    it('should instantiate the gold class', () => {

        let factory = require('./Resources/ResourcesFactory');

        expect(factory.make('Mine', 'Gold')).to.be.instanceof(Gold);

    });

});