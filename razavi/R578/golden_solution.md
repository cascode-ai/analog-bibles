# Golden Solution - R578

## Reference answer

≈ 0.71 ns (0.7 ns). This is only ≈ 3% faster than the NMOS alone (0.73 ns). The PMOS stops conducting once $V_{out}$ falls to about $|V_{THP}|$ (≈ 1.1 V with body effect, 0.8 V without), after ≈ 0.12 ns. The rest of the discharge, down to 1 mV, is done by the NMOS alone in triode, with time constant $C_H/[\beta_n(V_{DD} - V_{THN})]$ = 81 ps.

- NMOS: the source is the grounded input (no body effect); it is saturated at 14.2 mA while $V_{out}$ > 2.3 V, then in triode with $\beta_n = 5.36$ mA/V².
- PMOS: the source is the $V_{out}$ side (higher terminal), with gate at 0, so $V_{SG} = V_{SD} = V_{out}$ and the device is saturated whenever on: $|I| = \tfrac12(38.4\ \mu\mathrm{A/V^2} \times 120)(V_{out} - |V_{THP}|)^2 = 2.30\ \mathrm{mA/V^2}\,(V_{out} - |V_{THP}|)^2$. Here $|V_{THP}| = 0.8 + 0.4(\sqrt{3.8 - V_{out}} - \sqrt{0.8})$ rises from 0.8 V at $V_{out}$ = 3 V to ≈ 1.10 V, where the PMOS turns off.
- Integrating $C_H\,dV_{out}/dt = -(I_N + I_P)$ numerically: 1.1 V is reached at ≈ 0.12 ns and 1 mV at ≈ 0.709 ns (0.704 ns if the PMOS body effect is ignored). From 1.1 V down the decay is the NMOS-only triode discharge.
- A simple linear estimate with $R_{on,N}$ = 81 Ω alone gives $\tau\ln(3000)$ ≈ 0.65 ns. Using the parallel combination $R_{on,N} \parallel R_{on,P}$ for the whole transient would be wrong, because the PMOS is off near $V_{in} = 0$.

## Grading notes

+2: 0.65–0.75 ns with the key observation that the PMOS turns off below ≈ $|V_{THP}|$, so the final settling is set by the NMOS alone (τ ≈ 81 ps). +1: a value in range from an NMOS-only analysis, with the PMOS ignored or its role not explained. 0: right method with slips that take the value outside the range. -2 (asserted as fact): the final settling computed with a parallel $R_{on,N} \parallel R_{on,P}$ (PMOS assumed on down to 0 V), giving well under 0.5 ns; or a time above 1 ns from a formula error.
