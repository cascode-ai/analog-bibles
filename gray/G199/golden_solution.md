# Golden Solution - G199

## Reference answer

$v_o/v_i \approx -2.83$; $T_0 \approx 7.7$ ns, $f_{-3\text{dB}} \approx 21$ MHz.

- $g_m = 38.5$ mA/V, $r_\pi = 5.2\ \mathrm{k\Omega}$, $C_\pi = 10.0$ pF.
- Gain by nodal analysis: output node $v_o(1/R_L + 1/R_F) = v_b(1/R_F - g_m)$ → $v_o = -164.7\,v_b$; base node $v_i/R_S = v_b(1/R_S + 1/r_\pi + 1/R_F) - v_o/R_F$ → $v_b = 0.0172\,v_i$; $v_o/v_i = -2.83$.
- $R_{\pi0}$: base to ground $= R_S\|r_\pi\|\dfrac{R_F + R_L}{1 + g_mR_L} = 10\ \mathrm{k}\|5.2\ \mathrm{k}\|181 = 172\ \Omega$ → 1.72 ns.
- $R_{\mu0}$: $R_F$ is directly across $C_\mu$, so $R_{\mu0} = (R_A + R_L + g_mR_LR_A)\|R_F$ with $R_A = R_S\|r_\pi = 3.42\ \mathrm{k\Omega}$: $666\ \mathrm{k}\|30\ \mathrm{k} = 28.7\ \mathrm{k\Omega}$ → 5.74 ns.
- $R_{cs0}$: collector to ground $= 1/[1/R_L + (1-a)/R_F + g_ma]$ with $a = R_A/(R_A + R_F) = 0.102$: 240 Ω → 0.24 ns.
- $T_0 = 7.70$ ns → $f_{-3\text{dB}} = 20.7$ MHz (exact analysis: 24 MHz). The shunt feedback trades gain for bandwidth.

## Grading notes

+2: gain ≈ −2.8 (±5%) and $f_{-3\text{dB}}$ ≈ 19–23 MHz with $R_F$ included in all three zero-value resistances. +1: gain right and bandwidth within ±25% (e.g., one resistance approximated), or the feedback gain approximated as $\approx -R_F/R_S = -3$ with a stated approximation and correct bandwidth. 0: gain right but $R_F$ ignored in the time constants (giving ≈ 0.9 MHz), or vice versa. −2 (asserted as fact): $R_F$ ignored altogether (gain −65.8 and ≈ 0.9 MHz presented as the answer), or a non-inverting gain.
