# PR: fix/tests/global-mocks

## Title
fix(tests): add global test mocks and Node 18 dev env docs

## Summary
This branch stabilizes the unit-test and local dev workflows for the project by:

- Adding a comprehensive global test bootstrap with common test modules and provider stubs (`src/test.ts`) to avoid widespread NullInjectorError and runtime TypeErrors across specs.
- Adding `start:legacy` and `test:legacy` npm scripts to run the dev server and tests with `NODE_OPTIONS=--openssl-legacy-provider` for environments running Node 20.
- Excluding `src/test.ts` from the app TypeScript build (`tsconfig.app.json`) so test-only bootstrap is not compiled into `ng serve`.
- Adding developer docs and Node version recommendation (`.nvmrc`, `DEV_ENV.md`) and updating `README.md` to guide contributors to use Node 18 or the legacy scripts.

## Files changed (high level)
- `src/test.ts` — global TestBed setup, common modules, and provider stubs
- `tsconfig.app.json` — exclude `src/test.ts`
- `package.json` — added `start:legacy` and `test:legacy` scripts
- `README.md`, `DEV_ENV.md`, `.nvmrc` — developer environment guidance

## Testing
- Run `npm run test:legacy` (or `npm run test` on Node 18) — expected: `TOTAL: 39 SUCCESS` (verified locally).
- Run `npm run start:legacy` and open `http://localhost:4200/` — dev server compiles successfully (verified locally).

## Notes for reviewers
- The branch contains a temporary local mitigation in `node_modules/webpack-dev-middleware/lib/util.js` to avoid a middleware crash; see `DEV_ENV.md` for context. This should be reverted after upgrading the build tooling.
- Long-term recommendation: upgrade `@angular-devkit/build-angular`/`webpack` to support Node 20/OpenSSL3, or adopt Node 18 in CI.

## Suggested reviewers
- @maintainer
- @frontend-team
