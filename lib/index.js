/*!
 * Copyright (c) 2019-2020 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const bedrock = require('bedrock');
const {config, util: {BedrockError}} = bedrock;
const https = require('https');

// module API
const api = {
  _resetHttpsAgent
};
module.exports = api;

let _httpsAgent = null;

api.httpsAgent = api.agent = new Proxy({}, {
  get(target, propKey) {
    if(!_httpsAgent) {
      throw _invalidStateError();
    }
    return _httpsAgent[propKey];
  },
  getPrototypeOf() {
    if(!_httpsAgent) {
      throw _invalidStateError();
    }
    return Object.getPrototypeOf(_httpsAgent);
  },
  getOwnPropertyDescriptor(target, prop) {
    if(!_httpsAgent) {
      throw _invalidStateError();
    }
    return Object.getOwnPropertyDescriptor(_httpsAgent, prop);
  },
  set(target, prop, value) {
    if(!_httpsAgent) {
      throw _invalidStateError();
    }
    _httpsAgent[prop] = value;
    return true;
  }
});

// load config
require('./config');

const cfg = config['https-agent'];

bedrock.events.on('bedrock.init', () => {
  // inialize httpsAgent after bedrock configuration stage is complete
  _httpsAgent = new https.Agent(cfg);
});

function _invalidStateError() {
  return new BedrockError('The agent is not ready.', 'InvalidStateError');
}

// For testing purposes only
function _resetHttpsAgent() {
  _httpsAgent = null;
}
