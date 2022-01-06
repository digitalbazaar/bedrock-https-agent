/*!
 * Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {agent, httpsAgent, _resetHttpsAgent} = require('bedrock-https-agent');
const https = require('https');

describe('bedrock-https-agent API', () => {
  it('has the proper exports', () => {
    agent.should.be.instanceof(https.Agent);
    httpsAgent.should.be.instanceof(https.Agent);
  });
  it('should get correct property value', () => {
    let err;
    let res;
    try {
      res = httpsAgent.keepAlive;
    } catch(e) {
      err = e;
    }
    should.not.exist(err);
    should.exist(res);
    res.should.equal(true);
  });
  it('should get proper prototype', async () => {
    let err;
    let res;
    try {
      res = Object.getPrototypeOf(httpsAgent);
    } catch(e) {
      err = e;
    }
    should.not.exist(err);
    should.exist(res);
    res.should.eql(https.Agent.prototype);
  });
  it('should get proper property descriptor', async () => {
    let err;
    let res;
    try {
      res = Object.getOwnPropertyDescriptor(httpsAgent, 'keepAlive');
    } catch(e) {
      err = e;
    }
    should.not.exist(err);
    should.exist(res);
    res.should.eql({
      value: true,
      writable: true,
      enumerable: true,
      configurable: true
    });
  });
  it('should properly set property value', async () => {
    let err;
    let res;
    // set keepAlive to false
    httpsAgent.keepAlive = false;
    try {
      res = Object.getOwnPropertyDescriptor(httpsAgent, 'keepAlive');
    } catch(e) {
      err = e;
    }
    should.exist(res);
    should.not.exist(err);
    res.should.eql({
      value: false,
      writable: true,
      enumerable: true,
      configurable: true
    });
  });
});

describe('invalidStateError', () => {
  before(() => {
    // reset https agent to be null;
    _resetHttpsAgent();
  });
  it('should throw error if agent is null', async () => {
    let err;
    let res;
    try {
      res = Object.getPrototypeOf(httpsAgent);
    } catch(e) {
      err = e;
    }
    should.not.exist(res);
    should.exist(err);
    err.name.should.equal('InvalidStateError');
    err.message.should.equal('The agent is not ready.');

    let err2;
    let res2;
    try {
      res2 = Object.getOwnPropertyDescriptor(httpsAgent, 'keepAlive');
    } catch(e) {
      err2 = e;
    }
    should.not.exist(res2);
    should.exist(err2);
    err2.name.should.equal('InvalidStateError');
    err2.message.should.equal('The agent is not ready.');

    let err3;
    let res3;
    try {
      res3 = httpsAgent.keepAlive;
    } catch(e) {
      err3 = e;
    }
    should.not.exist(res3);
    should.exist(err3);
    err3.name.should.equal('InvalidStateError');
    err3.message.should.equal('The agent is not ready.');

    let err4;
    let res4;
    try {
      // set keepAlive to false
      res4 = httpsAgent.keepAlive = false;
    } catch(e) {
      err4 = e;
    }
    should.not.exist(res4);
    should.exist(err4);
    err4.name.should.equal('InvalidStateError');
    err4.message.should.equal('The agent is not ready.');
  });
});
