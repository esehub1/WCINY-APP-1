# Developer environment notes (legacy)

This project currently uses a legacy Angular 9 toolchain. The repository includes short-term compatibility shims so contributors can run the dev server, tests and builds locally while we stage a longer-term upgrade.

Recommended Node version
- Use Node 18 (LTS) for CI. If you use Node 20 locally, several tools require the OpenSSL legacy provider.

Local commands
- Start dev server (uses OpenSSL legacy provider on Node 20):
```powershell
npm run start:legacy
```

- Run unit tests once (Karma, headless in CI):
```powershell
npm run test:legacy
```

- Build for production (legacy build):
```powershell
npm run build:legacy
```

Notes
- Scripts `start:legacy`, `test:legacy`, and `build:legacy` set `NODE_OPTIONS=--openssl-legacy-provider` via `cross-env` so the older Angular/Webpack toolchain runs on Node 20+.
- The repository includes `src/.disc/.placeholder` and `angular.json` is configured to copy `src/.disc` into build outputs (e.g. `dist/.disc`).
- Some local fixes are temporary (for example, a node_modules patch applied earlier). These will be removed as we upgrade the toolchain.

CI
- A GitHub Actions workflow is provided in `.github/workflows/ci.yml` that runs on Node 18 and executes the legacy test/build steps.
# Development environment (recommended)

Recommended Node.js version: 18.x (LTS)

Why:
- The project uses an older webpack/@angular-devkit toolchain that may fail under Node 20/OpenSSL3. Using Node 18 avoids the OpenSSL-related crypto errors.

Windows (nvm-windows):

1. Install nvm-windows from https://github.com/coreybutler/nvm-windows/releases
2. Install Node 18: `nvm install 18.20.0`
3. Use Node 18: `nvm use 18.20.0`
4. Reinstall node modules (recommended):

```powershell
rm -r node_modules package-lock.json; npm install
```

macOS / Linux (nvm):

1. Install nvm: https://github.com/nvm-sh/nvm
2. Install and use Node 18:

```bash
nvm install 18
nvm use 18
rm -rf node_modules package-lock.json && npm install
```

Quick notes:
- There are temporary legacy npm scripts in `package.json`: `start:legacy` and `test:legacy`. These run the build or tests with `NODE_OPTIONS=--openssl-legacy-provider` for environments where OpenSSL3 causes failures.
- Long-term: upgrade webpack/@angular-devkit to versions compatible with Node 20/OpenSSL3 or update CI to use Node 18.

Temporary local middleware guard
--------------------------------

During investigation a runtime crash in the dev middleware was mitigated by adding a defensive guard in `node_modules/webpack-dev-middleware/lib/util.js` to avoid reading `req.headers.range` when `req.headers` is undefined. This is a local, temporary fix — do not rely on it long-term. Preferred remediation paths:

- Upgrade `webpack-dev-middleware` / `webpack` / `@angular-devkit/build-angular` to versions compatible with Node 20/OpenSSL3 so the defensive guard is unnecessary.
- If upgrading is not possible immediately, leave a note in the PR documenting the local change so reviewers are aware; revert the local edit after upgrading dependencies.

If you want, I can create a follow-up branch to attempt the dependency upgrades and run the test/dev build in CI to validate removing the guard.
