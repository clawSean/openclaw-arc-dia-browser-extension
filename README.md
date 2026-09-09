# OpenClaw Browser for Arc + Dia

[![OpenClaw](https://img.shields.io/badge/OpenClaw-2026.9.3-crimson)](https://github.com/openclaw/openclaw)
[![Chrome Extension](https://img.shields.io/badge/Manifest-V3-blue)](packages/upstream/manifest.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Browser-extension builds derived from OpenClaw `v2026.9.3`. The personalized
Sean build received the full real-browser Arc and Dia E2E proof described below;
the untouched upstream build is included as a byte-exact comparison artifact.

## Which build should I use?

### Sean Arc + Dia

[`packages/sean`](packages/sean) — extension name **OpenClaw Browser — Sean**,
version `2.3.0.1`.

This is the personal build. It keeps normal OpenClaw automation and adds:

- **Share only this tab with Sean** — atomically removes every other tab from
  Sean's shared inventory without closing those browser tabs;
- **Disconnect Sean (keep pairing)** — closes the relay, detaches automation,
  and publishes zero tabs while retaining pairing;
- **Reconnect Sean** — restores the relay without another pairing code;
- a narrow credential firewall for direct cookie-jar and raw cookie/auth protocol
  extraction, including nested CDP and cross-tab `Target` protocol tunnels.

Pairing survives Disconnect. Explicit tab grants do not survive a full browser
quit, so reopening Arc or Dia starts with zero shared tabs until one is selected
again.

The Sean name appears in the extension list, popup, Settings page, and ZIP. A
future Clawdia build should use **OpenClaw Browser — Clawdia** and its own pairing,
making the two installations easy to distinguish.

### Untouched upstream

[`packages/upstream`](packages/upstream) — exact loadable OpenClaw `2.3.0`
runtime files from the `v2026.9.3` tag. It is included for comparison and for
users who want upstream behavior without Sean-specific controls.

## Install Sean's build

1. Download `OpenClaw-Browser-Sean-Arc-Dia-2.3.0.1.zip` from the latest release.
2. Unzip it.
3. Open `arc://extensions` in Arc or `chrome://extensions` in Dia.
4. Enable **Developer mode**.
5. Choose **Load unpacked** and select the unzipped
   `OpenClaw-Browser-Sean-Arc-Dia-2.3.0.1` folder.
6. Open **Sean Browser Access → Settings** and use a current pairing value from
   the official OpenClaw browser-extension pairing flow.

Treat pairing material as a secret. Do not put it in a shell command, URL,
issue, screenshot, or repository.

## Runtime requirement

Use OpenClaw `2026.9.3` or newer. Older Gateways have the target-identity bug
that previously broke extension-backed snapshot and action sequences in Arc and
Dia.

Manual direct-Gateway pairing is the dependable cross-browser setup because the
automatic native-host installer remains Chrome-oriented. A remote deployment
should use the normal authenticated Tailscale WSS endpoint.

## Compatibility proof

Tested with disposable profiles on macOS:

- Arc `1.163.0`;
- Dia `1.47.1`;
- an isolated exact OpenClaw `2026.9.3` Gateway;
- the direct Browser Relay Authentication v2 Gateway route.

The Sean build passed worker load, pairing, tab inventory, semantic snapshot,
typing, two-tabs-to-one handoff, disconnect to zero tabs, and reconnect without
re-pairing in both browsers. The handoff removed the other tab from Sean's
inventory without closing it. Arc also passed select and click; Dia passed
direct navigation.

Arc hangs on `chrome.tabGroups.query`. The Sean build's explicit tab registry
avoids that API. Screenshot and one below-fold Dia click were not claimed in the
no-display proof session because the browser had no usable window geometry.

## Verification

- Extension suite: **611 passed**, 1 upstream opt-in Chromium bootstrap test
  skipped.
- Full OpenClaw production build: **passed** on Node `26.7.0`.
- Published packages and Git history: secret-scanned before release.
- Release ZIPs: tested and accompanied by SHA-256 checksums.

The credential firewall blocks direct cookie/auth reads, nested CDP message
tunnels, and cross-tab `Target` protocol tunneling; it also strips nested target
messages from relayed events. It reduces blatant extraction risk but is not a
complete secret-isolation boundary. Page-visible account data, non-HttpOnly
cookies, form values, DOM content, and web-storage values remain available to
ordinary page automation.

## Provenance

- Base: [`openclaw/openclaw@v2026.9.3`](https://github.com/openclaw/openclaw/tree/v2026.9.3)
- Base commit: `1391f7cd2d40ab5bbcf2f5f831d3a64f520e72d7`
- Sean source branch: [`clawSean/openclaw@personal/browser-extension-compat-v2026.9.3`](https://github.com/clawSean/openclaw/tree/personal/browser-extension-compat-v2026.9.3)
- Sean source commit: [`8f7aa9b3c933c58ae054665e721ca1c4e85f8029`](https://github.com/clawSean/openclaw/commit/8f7aa9b3c933c58ae054665e721ca1c4e85f8029)

No relay URL, pairing credential, browser profile, personal browsing data, or
machine-specific configuration is included.

## License

MIT. Copyright remains with the OpenClaw Foundation and the relevant
contributors. This repository is an unofficial compatibility distribution.
