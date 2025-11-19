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
