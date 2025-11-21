<#
Usage: Run this script from the repository root in PowerShell after installing nvm-windows.

This script will:
- check for `nvm` availability
- install a recommended Node 18 version (if missing)
- switch to Node 18
- remove `node_modules` and `package-lock.json` (if present)
- reinstall dependencies with `npm install`
- run `npm run start` to validate the dev server (non-legacy)
- run `npm run test` once to validate unit tests (non-legacy)

Important:
- You must have nvm-windows installed (https://github.com/coreybutler/nvm-windows/releases).
- Run PowerShell as Administrator for the first-time nvm install steps if needed.
- This script modifies the working tree by removing `node_modules` and `package-lock.json`.
#>

param(
    [string]$NodeVersion = '18.20.0',
    [switch]$SkipInstall
)

function Abort($msg) {
    Write-Error $msg
    exit 1
}

Write-Host "== Node 18 validation script =="

# Check for nvm
if (-not (Get-Command nvm -ErrorAction SilentlyContinue)) {
    Abort "nvm not found in PATH. Install nvm-windows from https://github.com/coreybutler/nvm-windows/releases and re-run this script."
}

Write-Host "Using nvm from: $(Get-Command nvm)."

# Install Node version if needed
$installed = (& nvm list) -join "`n"
if ($installed -notmatch $NodeVersion) {
    Write-Host "Node $NodeVersion not installed. Installing..."
    & nvm install $NodeVersion
    if ($LASTEXITCODE -ne 0) { Abort "nvm install failed." }
}

Write-Host "Switching to Node $NodeVersion"
& nvm use $NodeVersion
if ($LASTEXITCODE -ne 0) { Abort "nvm use failed." }

Write-Host "Node version: $(node -v)"
Write-Host "npm version: $(npm -v)"

if (-not $SkipInstall) {
    Write-Host "Removing node_modules and package-lock.json (if present)"
    if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
    if (Test-Path package-lock.json) { Remove-Item -Force package-lock.json }

    Write-Host "Installing dependencies (npm install)"
    npm install
    if ($LASTEXITCODE -ne 0) { Abort "npm install failed." }
}

Write-Host "Running dev server validation: npm run start"
Write-Host "(Press Ctrl+C to stop the server)"
Start-Process -NoNewWindow -FilePath npm -ArgumentList 'run','start' -Wait

Write-Host "If the server compiled successfully, open http://localhost:4200/ to verify the app loads."

Write-Host "Running unit tests (single run): npm run test -- --watch=false"
npm run test -- --watch=false

Write-Host "Validation complete. If everything passed on Node 18, you can keep using Node 18 for development or continue with the long-term upgrade plan."
