# Golden Solution - grsim-10-11

## Reference answer

Target: $I_o = I_i^{3/2}/\sqrt{I_B}$ with $I_B = 100\ \mu$A, i.e. $K = 100\ \mathrm{A^{-1/2}}$; equivalently the loop equation $I_o^2I_B = I_i^3$.

One design (all transistors identical npn):
- $Q_1$, $Q_2$, $Q_3$: diode-connected and stacked from the input node to ground. The input current $I_i$ is fed into the top of the stack, so the input node sits at $3V_{BE}$ ≈ 2.3 V (≥ $V_{BE}$).
- $Q_4$: emitter follower, base at the top of the stack, collector at $V_{CC}$, emitter (node W) loaded by a current sink $I_B$ = 100 µA. The sink is made by an npn mirror ($Q_7$ diode, $Q_8$ output) fed through 42 kΩ from $V_{CC}$: (5 − 0.78) V/100 µA.
- $Q_5$: output transistor, base at W, emitter into diode-connected $Q_6$ to ground; $I_o$ is the collector current of $Q_5$.
- Loop: $V_{BE1} + V_{BE2} + V_{BE3} = V_{BE4} + V_{BE5} + V_{BE6}$ → $I_i^3 = I_BI_o^2$ → $I_o = I_i^{3/2}/\sqrt{I_B}$ = 100 µA at $I_i$ = 100 µA.
- Output bias: the base of $Q_5$ is at $2V_{BE}$ ≈ 1.56 V ($V_{BE}$ = 0.778 V at 100 µA with $I_S = 10^{-17}$ A). With the output node at $2V_{BE}$, $V_{CB5}$ ≈ 0 and $Q_5$ stays forward active. A collector at a lower voltage would saturate it.

Expected results (hand model, $I_B$ = 100 µA), as $I_i$ = 10 / 30 / 100 / 300 / 1000 µA:
- Ideal: $I_o$ = 3.16 / 16.4 / 100 / 520 / 3162 µA.
- With β = 100: 2.68 / 15.5 / 97.1 / 499 / 2766 µA. The $Q_4$ base current is taken from $I_i$, and the $Q_5$ base current $I_o/\beta$ adds to the current in $Q_4$. Trimming $I_B$ to ≈ 94.3 µA restores exactly 100 µA at 100 µA.
- Adding $r_b$ = 200 Ω and $r_e$ = 2 Ω (each junction drop rises by ≈ $I_C(r_e + r_b/\beta)$ ≈ 4 Ω × $I_C$): 2.66 / 15.4 / 97.1 / 492 / 2409 µA. Near 100 µA all loop currents are about equal and the ohmic drops cancel, so there is no visible change. At high current the two output-side junctions carry ≈ 3× the input-side current, so $I_o$ falls by ≈ 13% at $I_i$ = 1 mA. At low current the effect is negligible.

## Grading notes

Accept any translinear design with correct analysis that:
- realizes $I_o^2I_B = I_i^3$ (or the same law with area ratios or another current setting $K$), with $K = 100\ \mathrm{A^{-1/2}}$ so that $I_o$ = 100 µA at $I_i$ = 100 µA;
- keeps the input node at ≥ $V_{BE}$;
- has an output transistor that stays active with its collector at $2V_{BE}$;
- fits within 5 V.

A correct simulation shows the 3/2-power law over roughly a decade around 100 µA, with $I_o$ within a few percent of 100 µA at $I_i$ = 100 µA (≈ 3% low from β = 100 unless trimmed) and errors growing at the current extremes. It also shows that $r_b$/$r_e$ have little effect near the balanced point and reduce $I_o$ noticeably (of order 10%) at milliampere currents. Wrong: a loop with unequal numbers of junctions on the two sides (temperature- and $I_S$-dependent result), a law other than 3/2 (e.g. $I_o = I_i^2/I_B$ or $\sqrt{I_iI_B}$), or an output stage that saturates at the specified $2V_{BE}$ output bias.
