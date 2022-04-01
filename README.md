# bedrock-https-agent

## Config

```js
import {config} from '@bedrock/core';

// set this to false to ignore SSL errors in development.
config['https-agent'].rejectUnauthorized = true;
```

## Usage

```js
import {agent} from '@bedrock/https-agent';
import {httpClient} from '@digitalbazaar/http-client';

const result = await httpClient.get('http://httpbin.org/json', {agent});
```
