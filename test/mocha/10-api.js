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
  it('should get proper prototype', () => {
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
  it('should properly set property value', () => {
    let err;
    let res;
    // set keepAlive to false
    httpsAgent.keepAlive = false;
    try {
      res = httpsAgent.keepAlive;
    } catch(e) {
      err = e;
    }
    should.exist(res);
    should.not.exist(err);
    res.should.eql(false);
  });
});

describe('invalidStateError', () => {
  before(() => {
    // reset https agent to be null;
    _resetHttpsAgent();
  });
  it('should throw error if agent is null when getting prototype', () => {
    _assertInvalidStateError(() => {
      Object.getPrototypeOf(httpsAgent);
    });
  });
  it('should throw error if agent is null when getting property descriptor',
    () => {
      _assertInvalidStateError(() => {
        Object.getOwnPropertyDescriptor(httpsAgent, 'keepAlive');
      });
    });
  it('should throw error if agent is null when getting property value', () => {
    _assertInvalidStateError(() => {
      httpsAgent.keepAlive;
    });
  });
  it('should throw error if agent is null when setting property value', () => {
    _assertInvalidStateError(() => {
      httpsAgent.keepAlive = false;
    });
  });
});

function _assertInvalidStateError(fn) {
  let err;
  try {
    fn();
  } catch(error) {
    err = error;
  }
  should.exist(err);
  err.name.should.equal('InvalidStateError');
  err.message.should.equal('The agent is not ready.');
}
