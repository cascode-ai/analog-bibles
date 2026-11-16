# Golden Solution - G118

## Reference answer

$A_{vQ} \approx 0.9955$, $A_v^+ \approx 0.9961$ (at $V_o = +1$ V), $A_v^- \approx 0.9945$ (at $V_o = -1$ V).
- Small-signal gain of the follower with $R_S = 0$: $A_v = R_L/(R_L + 1/g_m)$, $g_m = I_{c1}/V_T$.
- $I_Q = 14.3\ \mathrm{V}/5\ \mathrm{k\Omega} = 2.86$ mA: $1/g_m = 9.09\ \Omega$, $A_{vQ} = 2000/2009.1 = 0.99548$.
- $V_o = +1$ V: $I_{c1} = 2.86 + 0.5 = 3.36$ mA, $1/g_m = 7.74\ \Omega$, $A_v^+ = 0.99614$ (+0.07%).
- $V_o = -1$ V: $I_{c1} = 2.36$ mA, $1/g_m = 11.02\ \Omega$, $A_v^- = 0.99452$ (−0.10%).

## Grading notes

+2: all three slopes within ±0.0005 (0.9955, 0.9961, 0.9945), with the collector currents 2.86, 3.36, 2.36 mA. +1: method right with one value slightly off, or the three values right but the extreme currents mislabelled. 0: only the quiescent slope. −2 (asserted as fact): slopes greater than 1, the positive-swing gain smaller than the negative-swing gain, $1/g_m$ computed as $g_m/V_T$ or with the wrong current, or $A_v = 1$ claimed at all points as exact.
