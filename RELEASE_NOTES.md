# v2.3.0-arc-dia.3

Arc and Dia compatibility release derived from OpenClaw `v2026.9.3`.

**Prerelease:** automated gates and a fresh disposable Dia Settings proof pass;
exact confirmation on the remote Arc Mac remains before promotion to final.

## Included artifacts

- `OpenClaw-Browser-Sean-Arc-Dia-2.3.0.3.zip`: clearly branded personal build
  with one-tab handoff, reusable disconnect/reconnect, and credential filtering
  that blocks nested CDP and cross-tab `Target` protocol tunnels.
- `OpenClaw-Browser-Upstream-2.3.0.zip`: untouched, byte-exact upstream runtime
  files included as a comparison artifact.
- `SHA256SUMS`: artifact checksums.

## Verified

- Extension suite: `635 passed`, `1` upstream opt-in Chromium bootstrap skip.
- Full OpenClaw production build on Node `24.15.0`.
- Full real-browser E2E of the `2.3.0.1` baseline with isolated Arc `1.163.0`
  and Dia `1.47.1` direct-Gateway pairing.
- Semantic snapshot and typing in both browsers.
- Two shared tabs reduced to one intended tab in Sean's inventory in both
  browsers without closing the other browser tab.
- Disconnect closed the relay, detached automation, and published zero tabs
  while retaining pairing.
- Reconnect restored exactly the selected tab without another pairing code.
- Arc select/click and Dia direct navigation.
- Fresh disposable Dia `1.47.1` Settings proof on exact `2.3.0.3` bytes:
  Connecting reached Connected in about one second, then Unavailable held
  across later polls with zero false Connected claims.
- Secret scans of package files and complete Git history.

The `.3` delta has focused regression coverage and passed the complete extension
suite. Its exact remote-Mac Settings and share/disconnect/reconnect proof remains
pending.

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
