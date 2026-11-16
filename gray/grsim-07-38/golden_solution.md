# Golden Solution - grsim-07-38

## Reference answer

One valid design: $(W/L)_5 = 1.29$ (e.g., $W = 2.6\ \mu$m, $L = 2\ \mu$m) and $(W/L)_1 = 7.8$ (e.g., $W = 15.7\ \mu$m, $L = 2\ \mu$m). Gain ≈ −109; $f_{-3\text{dB}} \approx 4.2$ MHz.

- Bias chain: $V_{GS6} = 0.7 + \sqrt{2(100\ \mu)/(60\ \mu\cdot50)} = 0.958$ V; $|V_{GS4}| = 0.7 + \sqrt{2(100\ \mu)/(30\ \mu\cdot50)} = 1.065$ V; $|V_{GS5}| = 5 - 0.958 - 1.065 = 2.977$ V (no body effect), $|V_{ov5}| = 2.277$ V → $(W/L)_5 = 2(100\ \mu)/(30\ \mu\times2.277^2) = 1.29$.
- $M_2$ (100/2 at 100 µA): $V_{GS2} = 0.958$ V, so $M_1$'s source is at 0.958 V; $V_{t1} = 0.7 + 0.4(\sqrt{1.558} - \sqrt{0.6}) = 0.889$ V; $V_{ov1} = 2.5 - 0.958 - 0.889 = 0.652$ V → $(W/L)_1 = 2(100\ \mu)/(60\ \mu\times0.652^2) = 7.83$.
- Small signal: $g_{m1} = 0.307$ mA/V, $g_{mb1} = 0.049$ mA/V, $r_o = 1/(0.03\times100\ \mu) = 333\ \mathrm{k\Omega}$; follower gain $g_{m1}/(g_{m1} + g_{mb1} + 2/r_o) = 0.848$, follower output resistance 2.76 kΩ; $g_{m2} = 0.775$ mA/V, $R_{\text{out}} = r_{o2}\|r_{o3} = 167\ \mathrm{k\Omega}$, second-stage gain −129; total ≈ −109.
- Zero-value time constants (main terms): $C_{gd2}$ (30 fF) sees $2.76\ \mathrm{k} + 167\ \mathrm{k} + g_{m2}(167\ \mathrm{k})(2.76\ \mathrm{k}) \approx 0.53$ MΩ → 15.8 ns; $C_{gd3}$ (30 fF, from the output to the $M_3$/$M_4$ gate node, ≈ 1.6 kΩ) sees ≈ 0.27 MΩ → 8.0 ns; $C_{db2}$ and $C_{db3}$ (35 fF each at 2.5 V) see $R_{\text{out}}$ → 5.9 ns each; bias-node and $M_2$-gate terms ≈ 2.7 ns. $T_0 \approx 38$ ns → $f_{-3\text{dB}} \approx 4.2$ MHz.
- Expected simulation: gain ≈ −105 to −110 (with λ the exact output dc level depends on mirror mismatch; a dc sweep/feedback may be needed to center $V_O$ at 2.5 V), −3 dB ≈ 4.4 MHz.

## Grading notes

Hand part: +2 needs a design meeting $V_i = V_O = 2.5$ V and 100 µA with $W, L \ge 2\ \mu$m (≈ $(W/L)_1$ 7–8 including body effect, $(W/L)_5$ ≈ 1.3, any valid choice with correct supporting calculations), gain ≈ −100 to −115, and $f_{-3\text{dB}}$ ≈ 3.5–5 MHz with the Miller term of $C_{gd2}$ dominant. A correct simulation confirms the bias within ≈ 0.2 V at $V_O$ (sensitive to λ), the gain within ±10% and the bandwidth within ±20%. −2 (asserted as fact): body effect on $M_1$ ignored with $(W/L)_1 \approx 4$ presented as meeting the spec, $M_5$ designed with $W$ or $L$ below 2 µm, or the gain taken as that of a single stage without the follower.
