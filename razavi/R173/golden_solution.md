# Golden Solution - R173

## Reference answer

Gain = 0 for $V_{DD} < 0.8$ V; very small (≪ 1) from 0.8 V to about 1.9 V; a steep rise near 2 V; then a flat plateau $|A_v| \approx g_{m1}/g_{m3} = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_3]} \approx 4.2$ (≈ 3.7 with channel-length modulation) from $V_{DD} \approx 2.05$ V to 3 V.
- No current flows until $V_{DD} > |V_{THP}| = 0.8$ V (the diode loads are off; tail gate ≈ 0.97 V and input gates at 1.2 V are already above $V_{THN}$).
- From 0.8 V to ≈ 1.9 V the current grows, but the drains of $M_1$, $M_2$ sit only tens to hundreds of mV above ground: $M_1$, $M_2$ and the tail are in triode, $g_{m1} = \beta V_{DS}$ is small, and the gain is ≈ 0.004 at 1.0 V, 0.065 at 1.5 V, 0.10 at 1.6 V, 0.25 at 1.8 V.
- $M_1$ saturates when $V_X = V_{in,CM} - V_{TH1} \approx 1.2 - 0.756 = 0.44$ V, i.e. at $V_{DD} = 0.44 + |V_{GS3}| \approx 0.44 + 1.60 = 2.05$ V (2.11 V without body effect). Above it $|A_v| = g_{m1}/g_{m3} = 2.59\ \mathrm{mS}/0.62\ \mathrm{mS} = 4.18$, independent of $V_{DD}$; with λ, $g_{m1}(1/g_{m3}\|r_{O1}\|r_{O3}) = 2.59\ \mathrm{m}\times(1.61\ \mathrm{k}\|40\ \mathrm{k}\|20\ \mathrm{k}) \approx 3.7$.
- Since $V_{in,CM} = 1.2$ V is just below the minimum CM level (≈ 1.23 V with body effect), the tail sits slightly in triode ($V_P \approx 0.25$ V < 0.273 V, current ≈ 0.497 mA); the plateau gain is not affected because $g_{m1}/g_{m3}$ does not depend on the current.

## Grading notes

+2: zero gain below ≈ 0.8 V, small gain while the input pair is in triode, plateau ≈ 4.2 (or ≈ 3.7 with λ) starting near $V_{DD}$ ≈ 2.05–2.1 V, flat to 3 V. +1: plateau and break point right but the low-$V_{DD}$ part wrong (e.g., gain rising linearly from 0 V), or break point off by > 0.15 V. 0: only the plateau value. -2 (asserted as fact): gain proportional to $V_{DD}$ above the break point (resistive-load behaviour), plateau from a wrong formula (e.g., $g_{m1}/g_{m3}$ with $\mu_p$ and $\mu_n$ swapped, ≈ 0.24), or gain nonzero for $V_{DD} < 0.8$ V.
