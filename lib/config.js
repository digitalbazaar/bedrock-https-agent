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

import {config} from '@bedrock/core';

const cfg = config['https-agent'] = {};

// set this to false to ignore SSL errors in development
cfg.rejectUnauthorized = true;

// keep sockets around even when there are no outstanding requests, so they can
// be used for future requests without having to reestablish a TCP connection
cfg.keepAlive = true;
