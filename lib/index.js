/*!
 * Copyright (c) 2019-2020 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const bedrock = require('bedrock');
const {config} = bedrock;
const https = require('https');

// module API
const api = {};
module.exports = api;

api.httpsAgent = api.agent = null;

// load config
require('./config');

const cfg = config['https-agent'];

bedrock.events.on('bedrock.init', () => {
  // inialize httpsAgent after bedrock configuration stage is complete
  api.httpsAgent = api.agent = new https.Agent({
    rejectUnauthorized: cfg.rejectUnauthorized
  });
});
