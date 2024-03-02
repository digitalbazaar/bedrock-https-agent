/*!
 * Copyright 2020 - 2024 Digital Bazaar, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {_setHttpsAgent, agent, httpsAgent} from '@bedrock/https-agent';
import https from 'node:https';

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
    // Set https agent to null;
    _setHttpsAgent({httpsAgent: null});
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
