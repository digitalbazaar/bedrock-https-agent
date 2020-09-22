/*!
 * Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {agent, httpsAgent} = require('bedrock-https-agent');
const https = require('https');

describe('bedrock-https-agent API', () => {
  it('has the proper exports', () => {
    agent.should.be.instanceof(https.Agent);
    httpsAgent.should.be.instanceof(https.Agent);
  });
});
