# bedrock-https-agent

## Config

```js
const {config} = require('bedrock');

// set this to false to ignore SSL errors in development.
config['https-agent'].rejectUnauthorized = true;
```

## Usage

```js
const {agent} = require('bedrock-https-agent');
const {httpClient} = require('@digitalbazaar/http-client');

const result = await httpClient.get('http://httpbin.org/json', {agent});
```
