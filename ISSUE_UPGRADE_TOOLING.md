# Issue: Upgrade build tooling for Node 20 / OpenSSL3 compatibility

## Goal
Upgrade the project's build tooling (webpack, webpack-dev-middleware, @angular-devkit/build-angular, and related packages) so the project builds and runs under Node 20 without needing `--openssl-legacy-provider` or local middleware guards.

## Background
Currently the project uses an older Angular 9 toolchain pinned to `@angular-devkit/build-angular ~0.901.13` and compatible `webpack` stack. Under Node 20 / OpenSSL3 this causes crypto errors at build time; the short-term mitigation is to run the dev server and tests with `NODE_OPTIONS=--openssl-legacy-provider` and to add a local guard in `node_modules/webpack-dev-middleware/lib/util.js`.

## Proposed upgrade steps (high level)
1. Create a feature branch `chore/upgrade-build-tooling` from `main` (or current stable branch).
2. Update package.json devDependencies incrementally:
   - Move TypeScript and Angular CLI/devkit to latest v9-compatible or consider upgrading Angular to v10/11 if feasible.
   - Update `@angular-devkit/build-angular` to a version compatible with newer webpack versions (test one minor bump at a time).
   - Update `webpack` / `webpack-dev-middleware` / `webpack-dev-server` to versions compatible with Node 20/OpenSSL3.
3. Run `npm ci` in CI and locally; fix breaking changes from updated tooling (webpack config, angular.json builders).
4. Run `npm run build` and `npm run test` on Node 20 to validate removal of `--openssl-legacy-provider` usage.
5. Revert the local `node_modules` guard in `webpack-dev-middleware/lib/util.js` and ensure test/dev builds remain stable.
6. Update `DEV_ENV.md` and `README.md` to remove the legacy scripts and recommend Node 20 (if upgrade is complete) or keep Node 18 recommendation otherwise.

## Acceptance criteria
- CI builds and tests succeed on Node 20 without `NODE_OPTIONS=--openssl-legacy-provider`.
- No local edits to `node_modules` remain.
- Documentation updated accordingly.

## Risks & notes
- Upgrading build tooling could surface multiple breaking changes; perform incremental updates and keep commits focused.
- Consider adding a temporary CI workflow that exercises both Node 18 and Node 20 during the migration.
