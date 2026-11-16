# Golden Solution - R061

## Reference answer

- $V_G < V_{TH} = 0.7$ V: no inversion layer, so no pinch-off point.
- $0.7\ \mathrm{V} < V_G < 1.9$ V: saturation. The channel pinches off where the local channel voltage reaches $V_G - V_{TH}$, before the drain (since $V_{DS} = 1.2\ \mathrm{V} > V_G - V_{TH}$). As $V_G$ increases, $V_G - V_{TH}$ approaches $V_{DS}$ and the pinch-off point moves toward the drain. The depleted gap ΔL between pinch-off and drain shrinks and the effective channel length $L - \Delta L$ grows.
- $V_G = V_{TH} + V_{DS} = 1.9$ V: the pinch-off point reaches the drain edge (edge of saturation).
- $V_G > 1.9$ V: triode; the inversion layer extends continuously from source to drain and there is no pinch-off point any more.

## Grading notes

+2: pinch-off moves toward the drain as $V_G$ rises, reaching the drain at $V_G = V_{TH} + 1.2\ \mathrm{V} = 1.9$ V, after which the device is in triode with no pinch-off; no channel below $V_{TH}$. +1: correct direction and triode statement without the 1.9 V value. 0: correct direction only. -2 (asserted as fact): pinch-off moving toward the source with increasing $V_G$, or pinch-off persisting in triode.
