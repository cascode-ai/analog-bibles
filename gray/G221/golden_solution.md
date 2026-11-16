# Golden Solution - G221

## Reference answer

The low-frequency transresistance is $v_o/i_i = +\beta_1(r_{o1}\|r_{o2}) = 50\times113.9\ \mathrm{k\Omega} \approx +5.7$ MΩ (the 20-pF capacitor has no effect at low frequency); $T_0 \approx 120\ \mu$s → $f_{-3\text{dB}} \approx 1.3$ kHz.

- Bias as without the capacitor: $I_C = 0.31$ mA, $g_m = 11.9$ mA/V, $r_{\pi1} = 4.19\ \mathrm{k\Omega}$, $R_{\text{out}} = r_{o1}\|r_{o2} = 114\ \mathrm{k\Omega}$; $C_{\pi1} = 475$ pF, $C_{\mu1} = 0.236$ pF.
- The added 20 pF is in parallel with $C_{\mu1}$: total 20.24 pF seeing $r_{\pi1} + R_{\text{out}} + g_mR_{\text{out}}r_{\pi1} = 5.81$ MΩ → 117.6 µs.
- Other time constants unchanged: $C_{\pi1}$ 1.99 µs, $C_{cs2}$ 52 ns, $C_{\mu2}$ 37 ns, the rest ≈ 2 ns.
- $T_0 = 119.7\ \mu$s → 1.33 kHz (exact: 1.33 kHz): the Miller-multiplied 20-pF capacitor (effective ≈ 1.4 nF) sets a dominant pole, ≈ 35 times lower than without it.

## Grading notes

Two results; the −3-dB frequency is the main conclusion. +2: transresistance ≈ +5.7 MΩ (±10%) for $i_i$ in the direction shown (drawn out of the base; a negative value is right only if the answer defines $i_i$ into the base) and $f_{-3\text{dB}}$ ≈ 1.2–1.45 kHz with the 20 pF Miller-multiplied ($R \approx 5.8$ MΩ). +1: both results right with small slips in the minor time constants or intermediate values (these terms are negligible beside the 117.6-µs Miller term). 0: the bandwidth right but the transresistance missing or wrong (including a claim that the 20-pF capacitor changes the low-frequency transresistance), or the method right but $R_{\mu1}$ off by > 30% through a computational slip. −2 (asserted as fact): the 20-pF capacitor treated as grounded (no Miller multiplication), or another model error giving a bandwidth above 10 kHz.
