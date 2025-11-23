const fs = require('fs');
const path = require('path');

function copyFileSync(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyIfExists(src, dest) {
  if (fs.existsSync(src)) {
    copyFileSync(src, dest);
    console.log(`patched: ${dest}`);
  } else {
    console.log(`skipped (missing source): ${src}`);
  }
}

const repoRoot = path.resolve(__dirname, '..');

// Mappings: source (repo) -> target (node_modules or platforms)
const mappings = [
  // plugin gradle in node_modules
  [
    path.join(repoRoot, 'plugins', 'cordova-plugin-fcm-with-dependecy-updated', 'src', 'android', 'FCMPlugin.gradle'),
    path.join(repoRoot, 'node_modules', 'cordova-plugin-fcm-with-dependecy-updated', 'src', 'android', 'FCMPlugin.gradle')
  ],
  // platforms copy
  [
    path.join(repoRoot, 'platforms', 'android', 'cordova-plugin-fcm-with-dependecy-updated', 'ny-FCMPlugin.gradle'),
    path.join(repoRoot, 'platforms', 'android', 'cordova-plugin-fcm-with-dependecy-updated', 'ny-FCMPlugin.gradle')
  ],
  // capacitor-cordova-android-plugins folder -> node_modules/@capacitor/android/capacitor? we patch plugin module copies
  [
    path.join(repoRoot, 'android', 'capacitor-cordova-android-plugins', 'src', 'main', 'AndroidManifest.xml'),
    path.join(repoRoot, 'platforms', 'android', 'capacitor-cordova-android-plugins', 'src', 'main', 'AndroidManifest.xml')
  ],
  // Whitelist shim -> platforms plugin module
  [
    path.join(repoRoot, 'android', 'capacitor-cordova-android-plugins', 'src', 'main', 'java', 'org', 'apache', 'cordova', 'Whitelist.java'),
    path.join(repoRoot, 'platforms', 'android', 'capacitor-cordova-android-plugins', 'src', 'main', 'java', 'org', 'apache', 'cordova', 'Whitelist.java')
  ],
  // FileProvider -> platforms
  [
    path.join(repoRoot, 'android', 'capacitor-cordova-android-plugins', 'src', 'main', 'java', 'nl', 'xservices', 'plugins', 'FileProvider.java'),
    path.join(repoRoot, 'platforms', 'android', 'capacitor-cordova-android-plugins', 'src', 'main', 'java', 'nl', 'xservices', 'plugins', 'FileProvider.java')
  ]
];

console.log('Running repo patcher for Android plugin files');

for (const [src, dest] of mappings) {
  copyIfExists(src, dest);
}

console.log('Patch script finished.');
