# Golden Solution - A192

## Reference answer

$A_i(0) = g_{m2}/(g_{m1}+g_{ds1})$ ≈ 0.988; $R_{in} = 1/(g_{m1}+g_{ds1})$ ≈ 2.98 kΩ; $R_{out} = r_{ds2}$ = 250 kΩ; $f_{-3\mathrm{dB}}$ ≈ 970 MHz.

- $g_{m1} = g_{m2} = \sqrt{2\cdot110\cdot5\cdot100}$ µS = 332 µS; $g_{ds} = 0.04\cdot100$ µA = 4 µS.
- Input node: diode-connected M1 gives $1/(g_{m1}+g_{ds1})$ = 2.98 kΩ (3.02 kΩ if $g_{ds1}$ is neglected). $v_{gs} = i_{in}R_{in}$ and $i_{out} = g_{m2}v_{gs}$ → $A_i$ = 332/336 = 0.988 (exactly 1 if $g_{ds1}$ is neglected).
- Output: $R_{out} = 1/g_{ds2}$ = 250 kΩ.
- Pole at the input node: with $R_L$ = 0, $C_{gd1}$ is shorted (gate = drain of M1), $C_{gd2}$ goes to ac ground and $C_{bd2}$ is shorted, so $C = C_{gs1}+C_{gs2}+C_{bd1}+C_{gd2}$ = 55 fF. $\omega_{-3\mathrm{dB}} = (g_{m1}+g_{ds1})/C$ = 6.10×10⁹ rad/s → $f_{-3\mathrm{dB}}$ ≈ 971 MHz (960 MHz with $g_m$ alone). The feedforward zero through $C_{gd2}$ is at $g_{m2}/C_{gd2}$ ≈ 10.6 GHz, far above.

## Grading notes

+2: $A_i$ ≈ 0.99 (0.988, or 1 with $g_{ds1}$ neglected), $R_{in}$ 2.95–3.05 kΩ, $R_{out}$ = 250 kΩ, $f_{-3\mathrm{dB}}$ 940–1000 MHz with the 55-fF input capacitance. +1: one capacitance wrongly included or omitted (e.g. 60 fF with $C_{gd1}$, ≈ 0.9 GHz) with the rest right. 0: low-frequency results right but the frequency missing or wrong by more than 20%. −2 (asserted as fact): a current gain of 5 or 1/5 (W/L misuse), $R_{in}$ taken as $r_{ds}$, $R_{out}$ evaluated at a wrong current by a large factor, or the −3 dB frequency given in rad/s as if it were hertz (≈ 6 GHz).
