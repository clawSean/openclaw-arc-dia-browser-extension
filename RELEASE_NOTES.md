# v2.3.0-arc-dia.1

Arc and Dia compatibility release derived from OpenClaw `v2026.9.3`.

## Included artifacts

- `OpenClaw-Browser-Sean-Arc-Dia-2.3.0.1.zip`: clearly branded personal build
  with one-tab handoff, reusable disconnect/reconnect, and credential filtering
  that blocks nested CDP and cross-tab `Target` protocol tunnels.
- `OpenClaw-Browser-Upstream-2.3.0.zip`: untouched, byte-exact upstream runtime
  files included as a comparison artifact.
- `SHA256SUMS`: artifact checksums.

## Verified

- Extension suite: `611 passed`, `1` upstream opt-in Chromium bootstrap skip.
- Full OpenClaw production build on Node `26.7.0`.
- Full real-browser E2E of the Sean build with isolated Arc `1.163.0` and Dia
  `1.47.1` direct-Gateway pairing.
- Semantic snapshot and typing in both browsers.
- Two shared tabs reduced to one intended tab in Sean's inventory in both
  browsers without closing the other browser tab.
- Disconnect closed the relay, detached automation, and published zero tabs
  while retaining pairing.
- Reconnect restored exactly the selected tab without another pairing code.
- Arc select/click and Dia direct navigation.
- Secret scans of package files and complete Git history.

## Deployment note

OpenClaw `2026.9.3` or newer is required for dependable extension-backed browser
actions. The personalized extension is named **OpenClaw Browser — Sean** so a
future **OpenClaw Browser — Clawdia** build can coexist without ambiguity.

Screenshot and one below-fold Dia click remain unclaimed because the automated
proof session had no capturable desktop geometry.
