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

## License

[Apache License, Version 2.0](LICENSE) Copyright 2011-2024 Digital Bazaar, Inc.

Other Bedrock libraries are available under a non-commercial license for uses
such as self-study, research, personal projects, or for evaluation purposes.
See the
[Bedrock Non-Commercial License v1.0](https://github.com/digitalbazaar/bedrock/blob/main/LICENSES/LicenseRef-Bedrock-NC-1.0.txt)
for details.

Commercial licensing and support are available by contacting
[Digital Bazaar](https://digitalbazaar.com/) <support@digitalbazaar.com>.
