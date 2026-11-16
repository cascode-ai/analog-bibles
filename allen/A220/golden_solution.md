# Golden Solution - A220

## Reference answer

Circuit 5 (n-channel follower with an n-channel current-sink load): $A_v = g_{mN}/(g_{mN}+g_{dsN}+g_{dsN}) \approx 1 - 2g_{dsN}/g_{mN}$, the closest to 1.

Gains of all six ($g_{mN} = \sqrt2\,g_{mP}$, $g_{dsP} = 2g_{dsN}$):
- C1 (n-follower, n-diode load): $g_{mN}/(2g_{mN})$ ≈ 0.5.
- C2 (p-follower, p-diode load): $g_{mP}/(2g_{mP})$ ≈ 0.5.
- C3 (n-follower, p-diode to ground): $g_{mN}/(g_{mN}+g_{mP})$ ≈ 0.586.
- C4 (p-follower, n-diode from $V_{DD}$): $g_{mP}/(g_{mN}+g_{mP})$ ≈ 0.414.
- C5 (n-follower, n-current sink): ≈ $1 - 2g_{dsN}/g_{mN}$.
- C6 (p-follower, p-current source): ≈ $1 - 2g_{dsP}/g_{mP} = 1 - 4\sqrt2\,g_{dsN}/g_{mN}$, slightly below C5 (larger $g_{ds}$ and smaller $g_m$ of the p-channel devices).

## Grading notes

+2: Circuit 5, distinguished from Circuit 6 by the larger $g_m$ and smaller $g_{ds}$ of the n-channel devices. +1: Circuits 5 and 6 named together as the current-source-loaded followers. 0: reasoning sound but no choice. −2 (asserted as fact): a diode-loaded circuit (1–4) named as highest, or Circuit 6 claimed higher than 5.
