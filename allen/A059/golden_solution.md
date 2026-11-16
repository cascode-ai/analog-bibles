# Golden Solution - A059

## Reference answer

|p| ≈ 0.79 MHz: the node capacitance is ≈ 202 fF, so $|p| = 1/(2\pi\cdot1\ \mathrm{M\Omega}\cdot202\ \mathrm{fF})$ ≈ 789 kHz (4.96×10⁶ rad/s).

- Layout: M1 and M3 (n-channel, in the p-wells) have W/L = 10 µm/2 µm; M2 and M4 (p-channel) have W/L = 20 µm/2 µm. The drain of M1 at node $v_x$ is a 10 µm × 6 µm n⁺ diffusion (A = 60 µm², P = 32 µm); the drain of M2 is a 20 µm × 6 µm p⁺ diffusion (A = 120 µm², P = 52 µm).
- Operating point (all nodes at 2.5 V): every transistor is saturated (e.g. M3: $V_{GS} - V_T$ = 1.8 V < $V_{DS}$ = 2.5 V).
- Drain junctions at $v_x$, each reverse biased by 2.5 V: $C_{BD1} = 46.2\ \mathrm{fF}/3.5^{0.5} + 12.16\ \mathrm{fF}/3.5^{0.38}$ = 24.7 + 7.6 = 32.2 fF; $C_{BD2} = 67.2\ \mathrm{fF}/3.5^{0.5} + 18.2\ \mathrm{fF}/3.5^{0.35}$ = 35.9 + 11.7 = 47.7 fF.
- Gate–drain overlaps of the driving inverter (saturated): $C_{GD1} + C_{GD2}$ = 220 pF/m × (10 + 20) µm = 6.6 fF.
- Gate of the second inverter (saturated): $C_{ox}WL$ = 49.4 fF (M3) and 98.8 fF (M4). $C_{GS3}$ = 2.2 + 0.67×49.4 = 35.3 fF, $C_{GD3}$ = 2.2 fF, $C_{GB3}$ = 700 pF/m × 2 µm = 1.4 fF; $C_{GS4}$ = 4.4 + 0.67×98.8 = 70.6 fF, $C_{GD4}$ = 4.4 fF, $C_{GB4}$ = 1.4 fF; together 115.3 fF.
- Total ≈ 32.2 + 47.7 + 6.6 + 115.3 = 201.8 fF; $|p| = 1/(10^6\ \Omega \times 201.8\ \mathrm{fF})$ = 4.96×10⁶ rad/s = 789 kHz.
- (With the junctions at zero bias they would be 58.4 and 85.4 fF, the total 266 fF and the pole ≈ 600 kHz.)

## Grading notes

+2: a total of about 180–225 fF built from the right contributions (both drain junctions at 2.5 V reverse bias, the gate–drain overlaps of M1 and M2, and the saturated gate capacitances of M3 and M4 with W/L read as 10/2 and 20/2), giving |p| ≈ 0.71–0.88 MHz. Minor choices (2/3 vs 0.67, gate-side edge left out of the perimeter, $C_{GB}$ omitted, Miller doubling of the overlaps) are fine while the result stays in this range. The question defines the pole magnitude as $1/(R\sum C)$ and then asks for Hz, so an answer that gives $1/(R\sum C)$ ≈ 4.4–5.6×10⁶ s⁻¹ (rad/s) together with $f = 1/(2\pi R\sum C)$ in the range above, or that boxes $1/(R\sum C)$ but states that the frequency in Hz is this value divided by 2π, is also +2. +1: the junctions evaluated at zero bias (≈ 0.6 MHz) with everything else right, or the definition followed literally, $1/(R\sum C)$ ≈ 4.4–5.6 MHz reported as Hz with no mention of 2π. 0: one major contribution missing (the junction capacitances, or the second inverter's gate capacitance) with the rest correct, or the right contributions with a computational slip (arithmetic or unit) that moves the result outside the range. −2 (asserted as fact): layout misread (e.g. L = 1 µm, or the PMOS width taken equal to the NMOS width) so that the capacitance is wrong by tens of percent or more, or the gate capacitance of the first inverter counted at $v_x$.
