# Golden Solution - G202

## Reference answer

$v_o/v_i = -3.53$; $T_0 \approx 1.00$ ns, $f_{-3\text{dB}} \approx 159$ MHz.

- $g_m = 1.94$ mA/V; $G_m = g_m/(1 + g_mR_{SS}) = 1.94/2.743 = 0.706$ mA/V; gain $-G_mR_L = -3.53$.
- $R_{gs0}$ (gate to source with a test current, like an emitter follower with no input resistance): $(R_S + R_{SS})/(1 + g_mR_{SS}) = 10.9\ \mathrm{k}/2.743 = 3.97\ \mathrm{k\Omega}$ → $C_{gs}R_{gs0} = 0.297$ ns.
- $R_{gd0} = R_S + R_L + G_mR_LR_S = 10 + 5 + 35.3 = 50.3\ \mathrm{k\Omega}$ → $C_{gd}R_{gd0} = 0.704$ ns.
- $T_0 = 1.00$ ns → 159 MHz (exact: 163 MHz). Degeneration lowers the gain by 2.74 and raises the bandwidth by ≈ 2.3.

## Grading notes

+2: gain ≈ −3.5 (±5%) and $f_{-3\text{dB}}$ ≈ 150–170 MHz with both zero-value resistances reduced by degeneration. +1: one resistance slightly off (e.g., $R_{gs0}$ taken as $R_S$, giving ≈ 107 MHz) with the rest right. 0: gain right, bandwidth computed as for the undegenerated stage. −2 (asserted as fact): degeneration claimed to lower the bandwidth, gain $-g_mR_L$ unchanged, or a non-inverting gain.
