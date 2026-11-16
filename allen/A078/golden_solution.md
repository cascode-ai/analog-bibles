# Golden Solution - A078

## Reference answer

Case 1 (fast regime): $V_{error} \approx 37.5$ mV, $v_{CL} \approx 1.462$ V. Case 2 (slow regime): $V_{error} \approx 16.3$ mV, $v_{CL} \approx 1.484$ V.

- $V_T(V_{SB} = 1.5\ \mathrm{V}) = 0.7 + 0.4(\sqrt{2.2} - \sqrt{0.7}) = 0.959$ V; $V_{HT} = 5 - 1.5 - 0.959 = 2.541$ V; $\beta = 220\ \mu\mathrm{A/V^2}$.
- $W\cdot CGDO = 1.6\ \mu\mathrm{m}\times220\ \mathrm{pF/m} = 0.352$ fF; $C_{channel} = 1.6\times0.8\ \mu\mathrm{m^2}\times24.7\times10^{-4} = 3.16$ fF; $(0.352 + 1.581)/150 = 0.0129$.
- Overlap term (both cases): $(0.352/150)(1.5 + 0.959 - 0) = 5.8$ mV.
- Regime test: $\beta V_{HT}^2/(2C_L) = 4.74\times10^9$ V/s.
- Case 1: $U = 5\ \mathrm{V}/0.1\ \mathrm{ns} = 5\times10^{10}$ V/s, ten times larger: fast. $\beta V_{HT}^3/(6UC_L) = 0.080$ V, so $V_{error} = 0.0129\times(2.541 - 0.080) + 0.0058 = 31.7 + 5.8 = 37.5$ mV; $v_{CL} = 1.5 - 0.0375 = 1.4625$ V.
- Case 2: $U = 5\ \mathrm{V}/8\ \mathrm{ns} = 6.25\times10^8$ V/s, 7.6 times smaller: slow. $\sqrt{\pi U C_L/(2\beta)} = 0.818$, so $V_{error} = 0.0129\times0.818 + 0.0058 = 10.5 + 5.8 = 16.3$ mV; $v_{CL} = 1.4837$ V.
- The slower edge gives less than half the error, because most of the channel charge flows back to the source while the switch is still on.

## Grading notes

Two parts, equal weight. +2: fast regime for Case 1 with an error of 35–40 mV ($v_{CL}$ ≈ 1.46 V) and slow regime for Case 2 with 15–17.5 mV ($v_{CL}$ ≈ 1.484 V), body effect included. +1: both regimes right with one small numerical slip, or the errors right but the final voltages not given. 0: one case right and the other wrong, or the overlap term evaluated with 5 V in place of $V_S$ (≈ 46 mV and ≈ 25 mV). −2 (asserted as fact): regimes interchanged, final voltages above 1.5 V, final voltages near 1.97 V and 1.98 V (referred to 2 V instead of the 1.5-V input), or the overlap capacitance taken as 220 fF.
