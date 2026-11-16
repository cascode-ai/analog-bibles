# Golden Solution - G074

## Reference answer

One design: $I_C = 5.2\ \mu$A per transistor, $R_C = 2.5$ MΩ, $R_{\text{TAIL}} \approx 1.25$ MΩ; $V_{CC,\min} = 13$ V, $V_{EE,\min} \approx 13.7$ V. (The specifications fix all values, so any correct design is essentially this one.)

- $R_{id} = 2r_\pi = 2$ MΩ → $r_\pi = 1$ MΩ → $g_m = \beta_0/r_\pi = 0.2$ mA/V → $I_C = g_m V_T = 5.2\ \mu$A.
- $|A_{dm}| = g_m R_C = 500$ → $R_C = 2.5$ MΩ.
- CMRR $= 1 + 2g_m R_{\text{TAIL}} = 500$ → $R_{\text{TAIL}} = 499/(2 \times 0.2\ \mathrm{mA/V}) = 1.25$ MΩ (1.24 MΩ if the factor $1 + 1/\beta_0$ is kept).
- $V_{CC}$: the collectors sit at $V_{CC} - I_C R_C = V_{CC} - 13$ V; forward-active needs $V_{CB} \ge 0$ with the bases at 0 V, so $V_{CC} \ge 13$ V.
- $V_{EE}$: the tail node is at $-V_{BE} \approx -0.7$ V and carries $2I_E = 2 \times 5.2\ \mu\mathrm{A}/\alpha_0 = 10.45\ \mu$A: $V_{EE} = 0.7 + 10.45\ \mu\mathrm{A} \times 1.25\ \mathrm{M\Omega} \approx 13.7$ V (13.6 V if $V_{BE} \approx 0.54$ V from $I_S = 5\times10^{-15}$ A is used).

## Grading notes

+2: $I_C \approx 5.2\ \mu$A, $R_C \approx 2.5$ MΩ, $R_{\text{TAIL}} \approx 1.24$–1.25 MΩ, $V_{CC,\min} \approx 13$ V and $V_{EE,\min} \approx 13.5$–13.8 V, each from correct relations. A different but justified active-region margin (e.g. requiring $V_{CE} \ge 0.2$–0.3 V, giving $V_{CC} \approx 12.5$–12.7 V) is acceptable if stated. +1: one quantity with a slip, or $V_{EE}$ computed without the $V_{BE}$ term. 0: resistor values right but supply values wrong or missing. −2 (asserted as fact): $R_{id} = r_\pi$ (giving $I_C = 2.6\ \mu$A), $A_{dm} = g_m R_C/2$ for the differential output, CMRR $= g_m R_{\text{TAIL}}$, or supply values off by a factor of 2 from such errors.
