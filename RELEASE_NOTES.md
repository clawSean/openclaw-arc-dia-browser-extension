# v2.3.0-arc-dia.3

Arc and Dia compatibility release derived from OpenClaw `v2026.9.3`.

**Final release:** automated gates, a fresh disposable Dia Settings proof, and
an exact-public-ZIP manual-WSS control cycle passed. The live proof used Dia
`1.47.1` with OpenClaw `2026.9.3 (0a7b700)` through the Tailscale
`/browser/extension` route.

## Included artifacts

- [`OpenClaw-Browser-Sean-Arc-Dia-2.3.0.3.zip`](https://github.com/clawSean/openclaw-arc-dia-browser-extension/releases/download/v2.3.0-arc-dia.3/OpenClaw-Browser-Sean-Arc-Dia-2.3.0.3.zip): clearly branded personal build
  with one-tab handoff, reusable disconnect/reconnect, and credential filtering
  that blocks nested CDP and cross-tab `Target` protocol tunnels.
- [`OpenClaw-Browser-Upstream-2.3.0.zip`](https://github.com/clawSean/openclaw-arc-dia-browser-extension/releases/download/v2.3.0-arc-dia.3/OpenClaw-Browser-Upstream-2.3.0.zip): untouched, byte-exact upstream runtime
  files included as a comparison artifact.
- [`SHA256SUMS`](https://github.com/clawSean/openclaw-arc-dia-browser-extension/releases/download/v2.3.0-arc-dia.3/SHA256SUMS): artifact checksums.

## Verified

- Exact pinned-source extension suite on supported Node `26.7.0`: `635 passed`,
  `1` upstream opt-in Chromium bootstrap skip.
- Baseline full OpenClaw production build on supported Node `26.7.0`.
- Full real-browser E2E of the `2.3.0.1` baseline with isolated Arc `1.163.0`
  and Dia `1.47.1` direct-Gateway pairing.
- Semantic snapshot and typing in both browsers.
- Two shared tabs reduced to one intended tab in Sean's inventory in both
  browsers without closing the other browser tab.
- Disconnect closed the relay, detached automation, and published zero tabs
  while retaining pairing.
- Reconnect restored exactly the selected tab without another pairing code.
- Arc select/click and Dia direct navigation.
- Separate negative-state Dia `1.47.1` Settings proof on exact `2.3.0.3` bytes:
  Connecting reached Connected in about one second; after relay loss,
  Unavailable held across later polls with zero false Connected claims.
- Exact published `2.3.0.3` Sean ZIP manual-WSS E2E on disposable Dia `1.47.1`
  with OpenClaw `2026.9.3 (0a7b700)`: Not configured → Connecting → Connected,
  pairing-field clearing, exactly one shared tab, semantic snapshot,
  typing/evaluation, disconnect to zero, reconnect without another pairing code,
  and final cleanup to zero.
- Secret scans of package files and complete Git history.
- Release CI checks out Sean source commit
  [`276d71266bc`](https://github.com/clawSean/openclaw/commit/276d71266bc)
  and upstream commit
  [`1391f7cd2d4`](https://github.com/openclaw/openclaw/commit/1391f7cd2d4),
  installs the frozen lockfile on supported Node `24.16.0`, reruns the complete
  extension suite, rebuilds both packages, and compares them byte-for-byte with
  the committed artifacts. The canonical pins live in
  [`release-source.json`](release-source.json).

The `.3` delta has focused regression coverage, passed the complete extension
suite, and passed the exact-artifact manual-WSS Settings and
share/snapshot/action/disconnect/reconnect proof.

## Deployment note

OpenClaw `2026.9.3` or newer is required for dependable extension-backed browser
actions. The personalized extension is named **OpenClaw Browser — Sean** so a
future **OpenClaw Browser — Clawdia** build can coexist without ambiguity.

Screenshot and one below-fold Dia click remain unclaimed because the automated
proof session had no capturable desktop geometry.

## Fixes since `.2`

- separates saved Pairing, authenticated Relay, and browser Access into truthful
  live status rows;
- refreshes Settings every second while visible without triggering native-host
  side effects;
- makes manual Gateway pairing authoritative until forgotten, avoiding the
  automatic-local-setup race;
- preserves standalone relay wake-up after a successful pairing commit;
- clears accepted pairing text, keeps rejected input for correction, and fails
  controls closed when status cannot be read;
- fences stale asynchronous status and pairing-authority transitions.
