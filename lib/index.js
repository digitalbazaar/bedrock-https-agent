/*!
 * Copyright 2019 - 2024 Digital Bazaar, Inc.
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

import * as bedrock from '@bedrock/core';
import https from 'node:https';

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
