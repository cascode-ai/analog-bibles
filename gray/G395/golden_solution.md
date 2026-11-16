# Golden Solution - G395

## Reference answer

The pole falls from about $1.2 \times 10^{10}$ rad/s (0.4 mA) to about $4.6 \times 10^9$ rad/s (0.1 mA), a factor of about 2.6 for a 4× current reduction.

- 0.4 mA: $g_{m23}$ = 2 mA/V, $W_{23} \approx 63\ \mu$m, $C_{gs23} \approx 78$ fF, $C \approx 168$ fF, $|p| \approx 1.19 \times 10^{10}$ rad/s.
- 0.1 mA: $g_{m23}$ = 0.5 mA/V, $W_{23} \approx 16\ \mu$m, $C_{gs23} \approx 19$ fF, $C \approx 109$ fF, $|p| \approx 4.6 \times 10^9$ rad/s.
- Explanation: at fixed overdrive, $g_{m23}$ (numerator) scales with the current (×1/4), and $W_{23}$, hence $C_{gs23}$, also scales by 1/4. The fixed 90-fF capacitance (the mirrored transistor's gate) does not scale, so the total capacitance falls only to 0.65 of its value. The pole therefore drops by 0.25/0.65 ≈ 0.38. Saving power in the CM-sense amplifier lowers this nondominant pole in the CMFB loop and reduces the CMFB phase margin. Only if the fixed capacitance were negligible would the pole stay constant.

## Grading notes

+2: both pole values approximately right (±10%) and the explanation that $g_m$ and $C_{gs23}$ scale with current but the fixed 90-fF capacitance does not, so the pole falls (by ≈ 2.6×). Mentioning the consequence for CMFB stability or phase margin is welcome but not required, since the question does not ask for it. +1: correct trend and explanation with numbers missing or slightly off. 0: numbers right but no correct explanation, or the explanation right but the direction of change misstated in one place. −2 (asserted as fact): the claim that the pole is unchanged or increases at lower current, or that it scales exactly by 4×.
