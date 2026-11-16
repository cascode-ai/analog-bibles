# Golden Solution - A154

## Reference answer

$e_{eq} \approx 1.57\ \mathrm{nV}/\sqrt{\mathrm{Hz}}$ and $i_{to} \approx 0.164\ \mathrm{pA}/\sqrt{\mathrm{Hz}}$ (164 fA/√Hz).

- With the output shorted, each device's gate-referred noise produces an output current $g_{mi}e_{ni}$: $i_{to}^2 = g_{m1}^2e_{n1}^2 + g_{m2}^2e_{n2}^2 + g_{m3}^2e_{n3}^2 + g_{m4}^2e_{n4}^2$. M3's contribution reaches the output through the mirror with unit gain. The tail M5 contributes only a common-mode current, which is rejected.
- $g_{m1} = g_{m2} = \sqrt{2 \cdot 110\ \mu \cdot 2 \cdot 25\ \mu} = 104.9\ \mu$S and $g_{m3} = g_{m4} = \sqrt{2 \cdot 50\ \mu \cdot 1 \cdot 25\ \mu} = 50\ \mu$S, so $(g_{m3}/g_{m1})^2 = 0.227$.
- $e_{eq}^2 = i_{to}^2/g_{m1}^2 = 2e_{n1}^2 + 2(g_{m3}/g_{m1})^2e_{n3}^2 = (2 + 0.455)\times10^{-18} = 2.455\times10^{-18}$ V²/Hz, so $e_{eq} = 1.567$ nV/√Hz.
- $i_{to} = g_{m1}e_{eq} = 104.9\ \mu\mathrm{S} \cdot 1.567\ \mathrm{nV}/\sqrt{\mathrm{Hz}} = 1.64\times10^{-13}$ A/√Hz.

## Grading notes

Credit is split between $e_{eq}$ and $i_{to}$. +2: $e_{eq}$ = 1.54–1.60 nV/√Hz and $i_{to}$ = 0.16–0.17 pA/√Hz. +1: one value off by a slip, or $e_{eq}$ right and $i_{to}$ given in A²/Hz consistently. 0: the right method with a wrong $g_m$ (e.g. currents of 50 µA per device), or only one of the two. −2 (asserted as fact): load noise weighted by $(g_{m1}/g_{m3})^2$ (inverted), all four sources added with unit weight (2 nV/√Hz), noise voltages added linearly instead of in power, or the tail transistor claimed to dominate the differential noise.
