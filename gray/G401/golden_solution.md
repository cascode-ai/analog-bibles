# Golden Solution - G401

## Reference answer

DM: $\omega \approx 2.0 \times 10^8$ rad/s (≈ 32 MHz). CMC: $\omega \approx 4.0 \times 10^8$ rad/s (≈ 64 MHz).

- $g_{m1} = 0.8$ mA/V, $|a_{dm0}| = 88.9 \gg 1$: $\omega_{u,dm} \approx g_{m1}/C_{Ld} = 0.8\ \text{mA/V}/4\ \text{pF} = 2.0 \times 10^8$ rad/s.
- $g_{m5h} = g_{m5}/2 = 0.8$ mA/V, $|a_{cmc0}| \approx 198$: $\omega_{u,cm} \approx g_{m5h}/C_{Lc} = 0.8/2\ \text{pF} = 4.0 \times 10^8$ rad/s.
- The CMC loop now has twice the unity-gain frequency of the DM gain.

## Grading notes

+2: 2.0 × 10⁸ rad/s (DM) and 4.0 × 10⁸ rad/s (CMC), ±5%, or the equivalent frequencies in Hz clearly labelled. +1: one correct and the other off by an evident slip. 0: only one correct. −2 (asserted as fact): DM and CM swapped, full $g_{m5}$ used for the CMC gain without halving the capacitance correspondingly, or pole frequencies given as unity-gain frequencies.
