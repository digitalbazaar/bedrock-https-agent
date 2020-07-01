/*!
 * Copyright (c) 2019-2020 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config} = require('bedrock');

const cfg = config['https-agent'] = {};

// set this to false to ignore SSL errors in development
cfg.rejectUnauthorized = true;
