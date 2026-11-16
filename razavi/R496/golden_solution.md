# Golden Solution - R496

## Reference answer

$C_C \approx 0.6$ pF if the right-half-plane zero is neglected (two-pole estimate; the zero is to be cancelled by a series resistor, part (c)); the full three-node model with the zero removed gives ≈ 0.7–0.85 pF, depending on how it is removed (0.85 pF with $R_z = 1/g_{m1}$). With a plain capacitor the zero at $g_{m1}/(C_C + C_{GD1})$ costs a fixed ≈ 24° at crossover, so $C_C$ = 0.6 pF alone gives only PM ≈ 30°, and 60° would require $C_C \approx 6.7$ pF. Poles after compensation ($C_C$ = 0.6 pF): ≈ 3×10⁴ rad/s (≈ 5 kHz, input node), ≈ 5.4×10⁹ rad/s (node Y), ≈ 4×10¹⁰ rad/s (drain of $M_1$), plus an RHP zero at $g_{m1}/(C_C + C_{GD1})$ ≈ 8.3×10⁹ rad/s.
- Small signal: $g_{m1}$ = 5.18 mS, $r_{O1}$ = 10 kΩ, $g_{m2}$ = 2.77 mS, $r_{O2}$ = 5 kΩ, $g_{m3}$ = 0.164 mS, $r_{O3}$ = 1 MΩ, $T_0 \approx 1.17\times10^5$.
- Miller compensation across $M_1$ (like the second stage of a two-stage op amp, driven by the transconductor $M_3$ into $r_{O3}$): dominant pole $\omega_{p1} \approx 1/[r_{O3}\,g_{m1}r_{O1}(C_C + C_{GD1})]$, so GBW = $T_0\omega_{p1} \approx g_{m3}g_{m2}r_{O2}/(C_C + C_{GD1}) = 2.27\ \mathrm{mS}/(C_C + C_{GD1})$.
- Pole splitting makes node B low-impedance (pole ≈ 4×10¹⁰ rad/s). The first nondominant pole is node Y: ≈ 5.4×10⁹ rad/s (per-node estimate $1/[r_{O2}(C_{GD2} + C_{GS3} + C_{GD3})]$ ≈ 7.9×10⁹).
- PM = 60° (two-pole, magnitude effect included): GBW = $\tfrac23\omega_{p2}$, so $C_C + C_{GD1}$ = 2.27 mS/(3.6×10⁹) ≈ 0.62 pF and $C_C \approx 0.6$ pF (≈ 0.41 pF with the per-node Y pole). Then $\omega_{p1}$ ≈ 1/(1 MΩ × 51.8 × 0.62 pF) ≈ 3.1×10⁴ rad/s.
- RHP zero: $\omega_z = g_{m1}/(C_C + C_{GD1})$, so $\omega_u/\omega_z \approx g_{m3}g_{m2}r_{O2}/g_{m1}$ = 0.44, i.e. ≈ 24° of extra lag regardless of $C_C$. With the zero left in place, 60° needs $C_C \approx 6.7$ pF (full model). Hence the series resistor of the next step.

## Grading notes

+2: GBW ≈ $g_{m3}g_{m2}r_{O2}/C_C$ with the node-Y pole as the first nondominant pole, $C_C$ in 0.4–0.9 pF (RHP zero stated as neglected or to be cancelled), and poles after compensation consistent with that $C_C$ (dominant ≈ 1/[$r_{O3}g_{m1}r_{O1}C_C$], second ≈ (5–8)×10⁹ rad/s, third ≳ 10¹⁰ rad/s). Also +2: a correct treatment that keeps the RHP zero and arrives at ≈ 5–8 pF. +1: $C_C$ right but the poles after compensation missing or only roughly given. 0: right method, slip putting $C_C$ outside 0.3–1.2 pF (zero-neglected design). -2 (asserted as fact): GBW taken as $g_{m3}/C_C$ or $g_{m1}/C_C$ (missing or wrong stage gains), the compensated dominant pole placed at node B or Y, $C_C$ off by more than 3× through a formula error, or "no compensation needed".
