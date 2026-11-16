# Golden Solution - alsim-04-3-04

## Reference answer

Hand analysis: $V_{OUT}(\min) = V_T + 2V_{ON} \approx 1.08$ V; $r_{out} \approx g_{m2}r_{ds1}r_{ds2} \approx 0.66$ GΩ (≈ 0.76 GΩ with the body effect of M2).

- $V_{ON} = \sqrt{2\times10\ \mu/(110\ \mu\times5)} = 0.191$ V, $V_{GS} = 0.891$ V (no body effect). The gate of M2 is at $2V_{GS}$ = 1.78 V; M1's drain is at $V_{GS}$ = 0.891 V, so M2 stays saturated for $v_{OUT} \ge 2V_{GS} - V_T = V_T + 2V_{ON}$ = 1.08 V. (Including the body effect on M4 and M2 shifts both gate and source equally and gives the same 1.08 V.)
- $g_m = \sqrt{2\times110\ \mu\times5\times10\ \mu} = 105\ \mu\mathrm{A/V}$, $r_{ds} = 1/(0.04\times10\ \mu) = 2.5$ MΩ. $r_{out} = r_{ds1} + r_{ds2} + g_{m2}r_{ds1}r_{ds2} = 5\ \mathrm{M} + 655\ \mathrm{M} \approx 660$ MΩ. With $g_{mbs2}$ ($\eta$ = 0.16 at $V_{SB}$ ≈ 0.89 V): ≈ 764 MΩ.
- Expected simulation: $i_{OUT}$ within a few percent of 10 µA (≈ 10.0–10.3 µA; LEVEL-3 short-channel effects and the unequal $V_{DS}$ of M1/M3 cause the small excess), a flat $i_{OUT}$–$v_{OUT}$ curve above ≈ 1.1 V, and $r_{OUT}$ (from the slope, or from an ac test source) of the order of a few hundred MΩ to about 1 GΩ, since the LEVEL-3 output conductance differs from λ = 0.04.

## Grading notes

A correct answer gives $V_{OUT}(\min)$ ≈ 1.05–1.11 V and a hand $r_{out}$ of 0.6–0.8 GΩ ($\approx g_mr_{ds}^2$), and a simulation showing $i_{OUT}$ ≈ 10 µA (within ±5%) and $r_{OUT}$ in the 10⁸–10⁹ Ω range, consistent with the simulated slope. $r_{out} = r_{ds}$ (2.5 MΩ), $V_{OUT}(\min) = 2V_{ON}$ (0.38 V, the high-swing value) or $2V_T + 2V_{ON}$ (1.78 V, the gate voltage of M2) are wrong.
