# Golden Solution - G203

## Reference answer

$v_o/v_i \approx -2.96$; $T_0 \approx 0.74$ ns, $f_{-3\text{dB}} \approx 216$ MHz.

- $g_m = 1.94$ mA/V, $C_{gs} = 74.7$ fF.
- Gain: output node $v_o(1/R_L + 1/R_F) = v_g(1/R_F - g_m)$ → $v_o = -8.71\,v_g$; gate node $v_i/R_S = v_g(1/R_S + 1/R_F) - v_o/R_F$ → $v_g = 0.340\,v_i$; $v_o/v_i = -2.96$.
- $R_{gs0}$: gate to ground $= R_S\|\dfrac{R_F + R_L}{1 + g_mR_L} = 10\ \mathrm{k}\|5.15\ \mathrm{k} = 3.40\ \mathrm{k\Omega}$ → 0.254 ns.
- $R_{gd0} = (R_S + R_L + g_mR_LR_S)\|R_F = 111.8\ \mathrm{k}\|50\ \mathrm{k} = 34.6\ \mathrm{k\Omega}$ → 0.484 ns.
- $T_0 = 0.737$ ns → $f_{-3\text{dB}} = 216$ MHz (exact: 222 MHz).

## Grading notes

+2: gain ≈ −2.96 (±5%) and $f_{-3\text{dB}}$ ≈ 200–230 MHz with $R_F$ included in both zero-value resistances. +1: one resistance approximate (bandwidth within ±25%) with the rest right, or a small slip in the gain. 0: gain right but $R_F$ ignored in the time constants (≈ 69 MHz). −2 (asserted as fact): $R_F$ ignored entirely (−9.68 and 69 MHz as the answer), or a non-inverting gain.
