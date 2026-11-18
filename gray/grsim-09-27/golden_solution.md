# Golden Solution - grsim-09-27

## Reference answer

Hand estimates (the simulation should agree within the accuracy of the parasitic-capacitance estimates, roughly a factor of 1.5–2 on pole frequencies and $R_x$):

Open-loop (forward) gain, output loaded by ≈ 1 MΩ:
- $g_{m1}R_1 = 207$ ($R_1$ = 2.13 MΩ); $g_{m6}(R_2 \| 1\text{ MΩ}) = 194\text{ μA/V} \times 516\text{ kΩ} = 100$; $a_0 ≈ 2.1 \times 10^4$ (≈ 86 dB).
- Parasitics (2-μm-wide diffusions, junction capacitances at the bias voltages): at node X (gate of $M_6$) $C_1 ≈ 0.58$ pF ($C_{gs6}$ ≈ 0.40 pF plus drain junctions and overlaps of $M_2$, $M_4$); at the output $C_2 ≈ 0.19$ pF; $C_{gd6} ≈ 35$ fF between them.
- Two-pole response (pole splitting by $C_{gd6}$): $p_1 ≈ 18$ kHz, $p_2 ≈ 9$ MHz, right-half-plane zero $g_{m6}/C_{gd6}$ ≈ 0.9 GHz, plus a current-mirror pole-zero pair near 30/60 MHz. Phase passes −135° near 9 MHz; with unity feedback the margin would be only ≈ 10°.

$R_x$ for given phase margins (feedback factor $\beta = R_x/(1\text{ MΩ} + R_x)$, closed-loop gain ≈ $1/\beta$):

| PM | β | $R_x$ | closed-loop gain | loop crossover |
|---|---|---|---|---|
| 80° | ≈ 0.004–0.005 | ≈ 4–5 kΩ | ≈ 210–250 (47 dB) | ≈ 1.5–1.7 MHz |
| 60° | ≈ 0.013–0.016 | ≈ 13–17 kΩ | ≈ 60–75 (36 dB) | ≈ 4.5–5.3 MHz |
| 45° | ≈ 0.025–0.034 | ≈ 26–36 kΩ | ≈ 30–40 (30 dB) | ≈ 7–9 MHz |
| 20° | ≈ 0.075–0.17 | ≈ 80–210 kΩ | ≈ 6–13 (16–22 dB) | ≈ 14–24 MHz |
(The lower $R_x$ in each range includes the mirror pole-zero pair.)

Closed-loop behaviour expected from second-order theory: PM 80° → damping ≈ 1.2, no peaking, no overshoot; 60° → ≈ 0.3 dB peaking, ≈ 9% overshoot; 45° → ≈ 2.4 dB peaking, ≈ 23% overshoot; 20° → ≈ 9 dB peaking near the crossover and ≈ 55–60% overshoot with prolonged ringing. The −3-dB bandwidth rises as the closed-loop gain falls, but the response becomes increasingly peaked and the step response increasingly oscillatory.

## Grading notes

A correct simulation of the uncompensated op amp shows ≈ 85–88 dB dc gain, a dominant pole in the 10–30 kHz range, a second pole in the few-MHz to ~15-MHz range and phase reaching −180° in the tens of MHz. $R_x$ must increase monotonically as the required margin decreases (≈ kΩ for 80°, tens of kΩ for 45°, ~100 kΩ or more for 20°), with values within about a factor of 2 of the hand estimates. Closed-loop plots must show no peaking at 80°, slight peaking at 60°, ≈ 2–3 dB at 45° and large (≈ 8–10 dB) peaking at 20°; step responses with overshoot ≈ 0%, ≈ 5–12%, ≈ 20–28%, ≈ 50–60% respectively. Comments should tie the peaking/overshoot to the phase margin. Results with the opposite trend (more overshoot at larger margin) or a stable unity-gain configuration indicate an error.
