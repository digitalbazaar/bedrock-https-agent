# bedrock-https-agent ChangeLog

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
