# OpenClaw Arc + Dia Browser Extension

[![OpenClaw](https://img.shields.io/badge/OpenClaw-2026.8.2-crimson)](https://github.com/openclaw/openclaw)
[![Chrome Extension](https://img.shields.io/badge/Manifest-V3-blue)](packages/native-faithful/manifest.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Arc- and Dia-tested builds of OpenClaw's browser extension `2.2.0`, derived
from OpenClaw `v2026.8.2`.

## Builds

### Native-faithful

[`packages/native-faithful`](packages/native-faithful)

Preserves the upstream product, UX, access model, and security behavior. It
includes upstream lifecycle repairs for stale tab-group events. Use this build
when exact OpenClaw behavior matters most.

### Personal hardened

[`packages/personal-hardened`](packages/personal-hardened)

Adds a narrow credential firewall while preserving normal browser automation:

- blocks direct CDP cookie-jar reads;
- filters cookie, authorization, proxy-authorization, and set-cookie material
  from relayed protocol results and events;
- does not block ordinary navigation, clicks, typing, snapshots, screenshots,
  tab operations, page JavaScript, or web storage.

This reduces blatant credential extraction. It is not a complete secret
isolation boundary: page-visible account data, non-HttpOnly cookies, form
values, DOM content, and web-storage values remain accessible to normal page
automation.

## Install

1. Download the desired ZIP from the latest GitHub release and unzip it.
2. Open `arc://extensions` in Arc or `chrome://extensions` in Dia.
3. Enable **Developer mode**.
4. Choose **Load unpacked** and select the unzipped extension directory.
5. Generate a current OpenClaw browser-extension pairing value using the
   official OpenClaw CLI, then paste it into the extension's Settings page.

Treat pairing material as a secret. Never put it in a shell command, URL,
issue, screenshot, or repository.

## Compatibility evidence

Tested on macOS with:

- Arc `1.161.0` / Chromium `151.0.7922.170`
- Dia `1.46.0` / Chromium `152.0.7977.65`
- OpenClaw `2026.8.2`
- authenticated Browser Relay v2 over Tailscale HTTPS/WSS

Both browsers loaded the Manifest V3 worker, exposed all required extension
APIs including `tabGroups`, paired through the relay, published existing tabs,
and produced semantic snapshots.

The native-host installer currently registers Chrome-family roots but not Arc
or Dia. Manual remote pairing is therefore the dependable cross-browser path.

## Test results

- Native extension suite: **539 passed**, 1 opt-in Chromium E2E skipped.
- Hardened extension suite: **541 passed**, 1 opt-in Chromium E2E skipped.
- Focused post-release runtime repair suite: **293 passed**, 3 screenshot tests
  skipped because the matching Playwright Chromium binary was not installed.
- Production OpenClaw build: **passed**.

The remaining live click/type proof requires activating the accompanying
post-`2026.8.2` OpenClaw Gateway runtime fixes. The extension artifacts
themselves do not replace or restart a Gateway.

## Provenance

- Base: [`openclaw/openclaw@v2026.8.2`](https://github.com/openclaw/openclaw/tree/v2026.8.2)
- Base commit: `0965053fe6b9341776df147a6934b7485c60b5ca`
- Extension lifecycle fix: upstream commit `9d10dcb5d39`
- Runtime companion fixes: upstream commits `d52acf702b4` and `fe784239d80`

No relay URL, pairing credential, browser profile, personal browsing data, or
machine-specific configuration is included.

## License

MIT. Copyright remains with the OpenClaw Foundation and the relevant
contributors. This repository is an unofficial compatibility distribution.
