# Golden Solution - G400

## Reference answer

Both unity-gain frequencies are about $4.0 \times 10^8$ rad/s (≈ 64 MHz).

- DM: $g_{m1} = 2(100\ \mu\text{A})/0.25\ \text{V} = 0.8$ mA/V; $a_{dm}(s) = -g_{m1}R/(1 + sRC_{Ld})$ with $R = r_{o1}\|r_{o3} = 200\|250 = 111$ kΩ ($a_{dm0} = -88.9$). Since $|a_{dm0}| \gg 1$, $|a_{dm}| = 1$ at $\omega \approx g_{m1}/C_{Ld} = 0.8\ \text{mA/V}/2\ \text{pF} = 4.0 \times 10^8$ rad/s.
- CMC: $g_{m5} = 2(200\ \mu\text{A})/0.25 = 1.6$ mA/V, $g_{m5h} = 0.8$ mA/V; $a_{cmc}(s) = -g_{m5h}R_c/(1 + sR_cC_{Lc})$ with $R_c = R_{o(\text{down})}\|r_{o3} \approx 248$ kΩ ($a_{cmc0} \approx -198$). $|a_{cmc}| = 1$ at $\omega \approx g_{m5h}/C_{Lc} = 4.0 \times 10^8$ rad/s.
- They are equal because $g_{m5h} = g_{m1}$ (same current per half and same overdrive) and the load capacitances are equal.

## Grading notes

+2: both ≈ 4.0 × 10⁸ rad/s (or ≈ 64 MHz, clearly labelled), within ±5%, using $g_{m1}$ and $g_{m5h} = g_{m5}/2$. +1: both right but rad/s and Hz mixed up in one place, or only the approximations $g_m/C$ given without the dc gains. 0: DM right and CM wrong (e.g. full $g_{m5}$ giving 8 × 10⁸), or vice versa. −2 (asserted as fact): unity-gain frequency computed as the pole frequency $1/(RC)$, or the CMC gain stated to have no unity-gain crossing.
