# Golden Solution - A367

## Reference answer

Output pole ≈ −1.15×10⁸ rad/s (≈ 18–19 MHz); mirror pole at M8–M9 ≈ −1.9×10⁹ rad/s (≈ 300 MHz); poles at the sources of M6/M7 ≈ −1.5×10⁹ rad/s (≈ 230 MHz); RHP zero $g_{m14}/C_c$ ≈ 100 MHz at 2 pF. GB cannot be increased: with the parasitics the 2-pF design already has less than 60° (≈ 50° with the phase evaluated at GB), and 60° requires $C_c$ ≈ 2.3–2.9 pF, i.e. GB = $g_{m1}/C_c$ ≈ 7–8.7 MHz. The limit is the output pole $g_{m14}/C_L$.

- Small-signal values: $g_{m1} = \sqrt{2\cdot110\ \mu\cdot7.18\cdot10\ \mu} = 125.7$ µS, $g_{m14} = 1256$ µS, $g_{m6} = \sqrt{2\cdot50\ \mu\cdot12.8\cdot20\ \mu} = 160$ µS, $g_{m8} = 66.3$ µS.
- Output node: $C_{out} = C_L + C_{db14}$ (54 fF) $+ C_{db13}$ (367 fF) $+ C_{gd13}$ (44 fF) ≈ 10.47 pF. First-stage output (gate of M14): $C_I = C_{gs14}$ (42.7 fF) $+ C_{db7}$ (24.7) $+ C_{gd7}$ (2.8) $+ C_{db9}$ (3.8) $+ C_{gd9}$ (0.2) ≈ 74 fF.
- Output pole: $p_2 \approx -g_{m14}C_c/[C_IC_{out} + C_c(C_I + C_{out})] \approx -1.15\times10^8$ rad/s (18.3 MHz) at $C_c$ = 2 pF (≈ $g_{m14}/C_L$ = 20 MHz).
- Mirror node (drain of M6, gates of M8, M9): $C \approx C_{gs8} + C_{gs9}$ (3.7 fF) $+ C_{db8}$ (3.8) $+ C_{db6}$ (24.7) $+ C_{gd6}$ (2.8) ≈ 35 fF → $p_3 \approx -g_{m8}/C$ = −1.9×10⁹ rad/s (≈ 300 MHz).
- Sources of M6 (M7): $C \approx C_{gs6}$ (23.9 fF) $+ C_{sb6}$ (24.7) $+ C_{db3}$ (36.3) $+ C_{gd3}$ (4.2) $+ C_{db1}$ (18.0) $+ C_{gd1}$ (1.6) ≈ 109 fF → $p_6 \approx -g_{m6}/C$ = −1.47×10⁹ rad/s (≈ 230 MHz). With $C_{gs6}$ alone it would be 7.6×10⁹ rad/s (1.2 GHz); the junction capacitances lower it about fivefold.
- Phase margin with $GB = g_{m1}/C_c$ and $z = g_{m14}/C_c$ (so GB/z = 0.1 for any $C_c$): $PM = 90° - \tan^{-1}(GB/p_2) - 5.7° - \tan^{-1}(GB/p_3) - \tan^{-1}(GB/p_6)$. At $C_c$ = 2 pF: 90 − 28.7 − 5.7 − 1.9 − 2.4 ≈ 51° (≈ 49° counting the M7-source pole separately). Setting PM = 60° gives GB ≈ 7.1 MHz, $C_c$ ≈ 2.8 pF. A full small-signal analysis (phase at the actual unity-gain crossover, which is below $g_{m1}/C_c$) gives 60° at $C_c$ ≈ 2.3 pF, GB = $g_{m1}/C_c$ ≈ 8.7 MHz.
- The higher-order poles are 25–40 times GB and cost only a few degrees; the binding constraint is $p_2 \approx g_{m14}/C_L$ ≈ 20 MHz, which with $g_{m14} = 10g_{m1}$ and $C_c = 0.2C_L$ was designed for exactly GB ≈ $p_2/2$. A larger GB would require a larger $g_{m14}$ (more output current), not a smaller $C_c$.

## Grading notes

+2: output pole 16–21 MHz; mirror pole in roughly 200–450 MHz and M6/M7-source poles 150–350 MHz (junction capacitances included); and the conclusion that 60° phase margin limits GB to about 6.5–9.5 MHz with $C_c$ ≈ 2.1–3.1 pF, i.e. GB cannot be raised above the original 10 MHz by changing $C_c$, because of the output pole. +1: the same conclusion with higher-order poles computed from $C_{gs}$ only (≈ 1.2 GHz) or off by more than 2×, or a GB/$C_c$ slightly outside the ranges from a different but stated phase-margin criterion. 0: poles estimated reasonably but no GB/$C_c$ conclusion, or the conclusion without any pole values. −2 (asserted as fact): a GB of tens of MHz (e.g. 58 MHz) claimed with 60° phase margin while the output pole is ≈ 20 MHz, GB computed with $C_c$ = 2 pF other than $g_{m1}/C_c$ = 10 MHz, or the output pole omitted from the phase-margin calculation.
