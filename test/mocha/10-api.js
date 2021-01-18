/*!
 * Copyright (c) 2020-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {agent, httpsAgent, HttpsAgent} = require('bedrock-https-agent');

describe('bedrock-https-agent API', () => {
  it('has the proper exports', () => {
    agent.should.be.instanceof(HttpsAgent);
    httpsAgent.should.be.instanceof(HttpsAgent);
  });
});
