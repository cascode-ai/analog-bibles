# Golden Solution - alsim-05-3-14

## Reference answer

One design (hand analysis with the square-law model, λ neglected in the dc design):
- Current: slew rate > 5 V/µs into 5 pF needs $I$ > 25 µA; choose $I$ = 30 µA (SR = 6 V/µs). With $I_{Bias}$ = 30 µA in each bias branch the supply current is 90 µA, $P_{diss}$ = 0.45 mW ≤ 0.5 mW.
- M3 (and M4): $v_{OUT}(\max) = V_{DD} - \sqrt{2I/(K'_P W_3/L_3)} \ge 3.5$ V needs $W_3/L_3 \ge 0.53$; take $W_3/L_3 = W_4/L_4$ = 1 µm/1 µm → $V_{SD3(sat)}$ = 1.10 V, $v_{OUT}(\max)$ = 3.90 V.
- M1: $|A_v| = g_{m1}/g_{ds3} = \sqrt{2K'_N(W_1/L_1)/(\lambda_P^2I)} \ge 100$ needs $W_1/L_1 \ge 3.4$; take 4 µm/1 µm → $|A_v|$ ≈ 108 (≈ 106 with the cascode branch included).
- M2: $V_{DS1(sat)} = \sqrt{2I/(K'_N\cdot4)}$ = 0.37 V; with $W_2/L_2$ = 1 µm/1 µm, $V_{DS2(sat)}$ = 0.74 V → $v_{OUT}(\min)$ = 1.11 V ≤ 1.5 V.
- Cascode bias: $V_{GG2} = V_{DS1(sat)} + V_{GS2}$ = 0.37 + 0.70 + 0.74 ≈ 1.81 V (≈ 1.89 V if the body effect on M2 is included); M5 diode with $I_{Bias}$ = 30 µA: $W_5/L_5 = 2I_{Bias}/[K'_N(V_{GG2}-V_T)^2]$ ≈ 0.44 (e.g. 1 µm/2.25 µm; ≈ 0.38 with the body-effect value). These values put M1 exactly at the edge of saturation: in simulation M1 leaves saturation below $v_{OUT}$ ≈ 2.3 V (0.38) or the gain stays below 100 (0.44). Give $V_{GG2}$ ≈ 0.15 V of margin: $V_{GG2}$ ≈ 2.03 V, $W_5/L_5$ ≈ 0.3 (e.g. 1 µm/3.3 µm), so $V_{DS1}$ ≈ 0.50 V.

Expected simulation results: dc operating point with ≈ 30–32 µA in the output branch (λ makes M3 carry slightly more than M4) and $P_{diss}$ ≈ 0.45–0.47 mW; with the dc input set so that the output sits near mid-range (≈ 2.5 V; $v_{IN}$ ≈ 1.07 V), a small-signal gain of about −105 to −120 V/V; a voltage-transfer curve whose high-gain (all-saturated) region spans roughly 1.2 V to 3.9 V (with the margin in $V_{GG2}$); a transient slew rate of ≈ 6 V/µs (current-limited by $I$ on the rising edge) with $C_L$ = 5 pF.

## Grading notes

A correct answer gives a complete design (all W/L, $I$, $I_{Bias}$, $V_{GG2}$ or M5 sizing) that meets every specification by hand analysis and a simulation (netlist and results) confirming it: total supply power ≤ 0.5 mW including the bias branches, $|A_v| \ge$ 100 at a properly chosen input bias, all-saturated output range covering at least 1.5–3.5 V, and slew rate > 5 V/µs into 5 pF (a design at exactly 25 µA, giving 5.0 V/µs, does not satisfy "greater than"). Simulated values should agree with the designer's hand analysis within about 10–15% (gain) and 0.1–0.2 V (swing limits). Other valid designs are equally acceptable. Errors: power computed from the output branch only while the bias branches push the total above 0.5 mW, gain checked with λ of the wrong device, or a "verification" whose numbers are inconsistent with the stated circuit.
