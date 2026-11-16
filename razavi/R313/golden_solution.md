# Golden Solution - R313

## Reference answer

CG stage: low-frequency gain $g_mR_D/(1 + g_mR_S) \approx 1.68$; input pole ≈ $4.9\times10^{10}$ rad/s (≈ 7.8 GHz); output pole ≈ $8.0\times10^9$ rad/s (≈ 1.28 GHz). With λ = 0 these two poles are exact (the input and output are isolated).

Derivation:
- $g_m = \sqrt{2(134\ \mu)(100)(1\ \mathrm{mA})} = 5.18$ mS ($1/g_m = 193\ \Omega$).
- $C_{GS} = \tfrac23(96) + 20 = 84$ fF, $C_{GD} = 20$ fF, $C_{SB} = C_{DB} = 75(0.56) + 2(51.5)(0.0035) = 42.4$ fF.
- $C_S = C_{GS} + C_{SB} = 126.4$ fF (gate at ac ground); $C_D = C_{GD} + C_{DB} = 62.4$ fF.
- $\omega_{in} = \dfrac{1}{(R_S\|1/g_m)C_S} = \dfrac{g_m + 1/R_S}{C_S} = \dfrac{6.18\ \mathrm{mS}}{126.4\ \mathrm{fF}} = 4.89\times10^{10}$ rad/s; $\omega_{out} = \dfrac{1}{R_DC_D} = 8.02\times10^9$ rad/s.
- $\dfrac{V_{out}}{V_{in}} = \dfrac{g_mR_D}{1 + g_mR_S}\cdot\dfrac{1}{(1 + s/\omega_{in})(1 + s/\omega_{out})}$.

Comparison with the CS stage (same device, $R_S$, $R_D$, λ = 0):
- CS gain $-g_mR_D = -10.4$, about 6.2 times ($1 + g_mR_S$) larger: in the CG stage the low input resistance $1/g_m$ forms a divider with $R_S$.
- CS poles (exact, from its second-order denominator) ≈ $2.5\times10^9$ rad/s (≈ 0.39 GHz) and ≈ $3.3\times10^{10}$ rad/s (≈ 5.3 GHz), with a right-half-plane zero at $g_m/C_{GD}$ ≈ 41 GHz. The CS dominant pole is set by the Miller-multiplied $C_{GD}$ ($1 + g_mR_D = 11.4$) and is about 3 times lower than the CG's lowest pole.
- So the CG stage trades gain for bandwidth (no Miller multiplication); its gain–bandwidth here is lower, ≈ 1.7 × 1.2 GHz vs ≈ 10.4 × 0.39 GHz.
(If the body effect were included with $V_{SB} = 0$, $g_{mb} \approx 1.23$ mS: gain ≈ 1.73, input pole ≈ 9.3 GHz.)

## Grading notes

Credit split: CG results (gain and two poles) about 70%, comparison 30%. +2: CG gain ≈ 1.68 (±5%), input pole ≈ 7.8 GHz and output pole ≈ 1.28 GHz (±10%, either in rad/s or Hz clearly labelled), and a correct comparison: CS has ≈ 6× higher gain (≈ −10.4) but a much lower dominant pole due to the Miller effect (≈ 0.4–0.5 GHz depending on the method). +1: CG results right with a qualitative-only comparison, one capacitance slightly off, or the input pole approximated as $g_m/C_S$ (≈ 6.5 GHz, $R_S$ neglected) and said so. 0: CG gain right but poles wrong (e.g., $C_{SB}$/$C_{DB}$ omitted giving ≈ 11.7 GHz/4 GHz), or comparison absent. -2 (asserted as fact): input pole computed with $R_S$ alone ($1/R_SC_S$ ≈ 1.26 GHz), CG gain given as $g_mR_D$ ignoring $R_S$, Miller multiplication applied to the CG stage, or the CG claimed to have lower bandwidth than the CS stage.
