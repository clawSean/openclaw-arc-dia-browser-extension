# v2.2.0-arc-dia.1

Initial Arc and Dia compatibility release, derived from OpenClaw `v2026.8.2`.

## Included artifacts

- `openclaw-browser-extension-2.2.0-arc-dia.zip`: native-faithful build.
- `openclaw-browser-extension-2.2.0-hardened-arc-dia.zip`: personal hardened build.
- `SHA256SUMS`: artifact checksums.

## Verified

- Manifest V3 extension loading in isolated Arc and Dia profiles.
- Browser Relay Authentication v2 through a Tailscale HTTPS/WSS route.
- Required browser APIs, including `chrome.debugger` and `chrome.tabGroups`.
- Existing-tab publication and semantic snapshots in both browsers.
- 539 native extension tests and 541 hardened extension tests.
- Focused OpenClaw runtime fixes: 293 tests.

## Known limitation

The current OpenClaw `2026.8.2` Gateway needs post-release upstream runtime
fixes for dependable Playwright click/type actions against extension-backed
tabs. Those runtime fixes are not embedded in either extension ZIP.
