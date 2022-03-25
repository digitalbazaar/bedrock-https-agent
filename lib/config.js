/*!
 * Copyright (c) 2019-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {config} from 'bedrock';

const cfg = config['https-agent'] = {};

// set this to false to ignore SSL errors in development
cfg.rejectUnauthorized = true;

// keep sockets around even when there are no outstanding requests, so they can
// be used for future requests without having to reestablish a TCP connection
cfg.keepAlive = true;
