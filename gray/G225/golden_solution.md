# Golden Solution - G225

## Reference answer

$v_o/v_i \approx -211$; $T_0 \approx 66$ ns → $f_{-3\text{dB}} \approx 2.4$ MHz.

- $I_{D1} = I_{D2} = 0.5$ mA; $g_{m1} = \sqrt{2(60\ \mu)(166.7)(0.5\ \mathrm{m})} = 3.16$ mA/V ($V_{ov} = 0.32$ V); $r_{o1} = 100/0.5\ \mathrm{m} = 200\ \mathrm{k\Omega}$, $r_{o3} = 50/0.5\ \mathrm{m} = 100\ \mathrm{k\Omega}$; $R_L = 66.7\ \mathrm{k\Omega}$.
- Gain: no gate current, so $v_o/v_i = -g_{m1}R_L = -210.8$.
- Capacitances: $C_{gs1} = 28 + 14 = 42$ fF; $C_{gd1} = 14$ fF; $C_{db1}$ ($V_{DB} = 15$ V) = 240/√26 = 47.1 fF; for $M_3$ ($W = 50\ \mu$m, gate at ac ground): $C_{gd3} = 7$ fF and $C_{db3}$ ($V_{BD} = 5$ V, $C_{db0} = 60$ fF) = 19.6 fF, both from the output to ac ground.
- Time constants: $C_{gs1}$: $R_S = 20\ \mathrm{k\Omega}$ → 0.84 ns; $C_{gd1}$: $20\ \mathrm{k} + 66.7\ \mathrm{k} + g_{m1}(66.7\ \mathrm{k})(20\ \mathrm{k}) = 4.30$ MΩ → 60.2 ns; output ($47.1 + 7 + 19.6 = 73.7$ fF): $R_L$ → 4.9 ns.
- $T_0 = 66.0$ ns → 2.41 MHz (exact: 2.42 MHz).

## Grading notes

+2: gain ≈ −211 (±5%) and $f_{-3\text{dB}}$ ≈ 2.2–2.7 MHz with the Miller term of $C_{gd1}$ dominant. +1: overlap or junction capacitances partly omitted, with $f_{-3\text{dB}}$ still within ±20% of 2.4 MHz. 0: gain right, bandwidth wrong by > 2×. −2 (asserted as fact): load taken as $r_{o1}$ alone or infinite, a bipolar input resistance at the gate, Miller multiplication omitted, or $W/L$ computed with any length other than the given $L_{\text{eff}} = 0.6\ \mu$m (e.g., $L_{\text{drwn}} = 2\ \mu$m, giving $g_m \approx 1.73$ mA/V and gain ≈ −115).
