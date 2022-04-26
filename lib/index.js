/*!
 * Copyright (c) 2019-2022 Digital Bazaar, Inc. All rights reserved.
 */
import * as bedrock from '@bedrock/core';
import https from 'https';

// load config
import './config.js';

const {config, util: {BedrockError}} = bedrock;

let _httpsAgent = null;

bedrock.events.on('bedrock.init', () => {
  // initialize httpsAgent after bedrock configuration stage is complete
  _httpsAgent = new https.Agent(config['https-agent']);
});

export const httpsAgent = new Proxy({}, {
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
export const agent = httpsAgent;

function _invalidStateError() {
  return new BedrockError('The agent is not ready.', 'InvalidStateError');
}

// export for testing purposes only
export function _setHttpsAgent({httpsAgent}) {
  _httpsAgent = httpsAgent;
}
