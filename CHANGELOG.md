# bedrock-https-agent ChangeLog

## 4.1.0 - 2024-02-28

### Changed
- Relicense under the Apache-2.0 license.

## 4.0.0 - 2022-04-28

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/core@6`.

## 3.0.2 - 2022-04-26

### Fixed
- Fix "main" field in package.json.

## 3.0.1 - 2022-04-01

### Fixed
- Use `jsdoc-to-markdown@7`.

## 3.0.0 - 2022-04-01

### Changed
- **BREAKING**: Rename package to `@bedrock/https-agent`.
- **BREAKING**: Convert to module (ESM).
- **BREAKING**: Remove default export.
- **BREAKING**: Require node 14.x.

## 2.3.0 - 2022-03-24

### Changed
- Update peer deps:
  - `bedrock@4.5`.
- Update internals to use esm style and use `esm.js` to
  transpile to CommonJS.

## 2.2.0 - 2022-01-21

### Added
- Add additional tests and expose private test helper functions in API.

## 2.1.0 - 2021-07-23

### Changed
- Update peer dependencies; use bedrock@4.

## 2.0.0 - 2020-09-22

### Changed
- **BREAKING**: Enable agent `keepAlive` by default.

### Added
- `httpsAgent` or `agent` may now be destructured from `bedrock-https-agent`
  at the top of a file.
- Support setting other `agent` config options via `config`.
- Added test coverage.

## 1.1.0 - 2020-07-01

### Added
- Add export for `agent` convenience when using with
  `@digitalbazaar/http-client` which accepts an `agent` parameter.
- Setup CI workflow.

## 1.0.1 - 2019-11-13

### Changed
- Update peer dependency for bedrock v1 - v3.

## 1.0.0 - 2019-10-21

- See git history for changes previous to this release.
