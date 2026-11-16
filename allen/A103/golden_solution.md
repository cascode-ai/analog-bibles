# Golden Solution - A103

## Reference answer

One design: $R$ = 25 kΩ (100 µA total), $R_1$ = 32.6 kΩ, $R_2$ = 88.9 kΩ, giving $V_{EB}$ = 0.6525 V and $V_{REF}$ = 2.50 V; sensitivity $S \approx 0.15$.

- Total current $(5 - 2.5)/R$ = 100 µA with $R$ = 25 kΩ; send 20 µA through $R_1$, so $I_E$ = 80 µA, $I_C = I_E\beta_F/(\beta_F + 1)$ = 79.2 µA, $I_B$ = 0.79 µA.
- $V_{EB} = V_t\ln(I_C/I_s) = 0.026\ln(79.2\ \mu/1\ \mathrm{f}) = 0.6525$ V; $R_1 = V_{EB}/20\ \mu\mathrm{A} = 32.6$ kΩ.
- The base current adds to the divider current in $R_2$: $R_2 = (2.5 - 0.6525)/(20 + 0.79)\ \mu\mathrm{A} = 88.9$ kΩ. (Ideal multiplier: $V_{REF} = V_{EB}(1 + R_2/R_1)$ plus the $I_BR_2$ term.)
- Sensitivity: $\partial V_{REF}/\partial V_{DD} = r_{out}/(R + r_{out})$, where $r_{out}$ is the small-signal resistance of the transistor–divider combination: $g_m = I_C/V_t$ = 3.05 mS, $r_\pi = \beta/g_m$ = 32.8 kΩ, $r_{out} = (R_1 + R_2 + R_1R_2/r_\pi)/(1 + g_mR_1(1 + 1/\beta)) = 2.07$ kΩ. So $\partial V_{REF}/\partial V_{DD} = 2.07/27.07 = 0.0764$ and $S = (5/2.5)\times0.0764 \approx 0.15$.
- Without the base-current loading of the divider (β → ∞), $r_{out} \approx (R_1 + R_2)/(1 + g_mR_1) = 1.21$ kΩ and $S \approx 0.09$. Other designs give $S$ of roughly 0.08–0.2: $S \approx (V_{DD}/V_{REF})\,r_{out}/R$, with $r_{out} \approx (V_{REF}/V_{EB})/g_m$ and $R = (V_{DD} - V_{REF})/I$, depending mainly on the fraction of the current in the transistor and on β.

## Grading notes

Design problem: accept any values of $R$, $R_1$, $R_2$ for which $V_{REF}$ = 2.5 V at $V_{DD}$ = 5 V follows from the stated $I_s$ and $\beta_F$ with correct supporting calculation, and a sensitivity computed for that design. +2: valid design plus $S$ within ±20% of the value for that design including the base-current ($r_\pi$) loading (≈ 0.15 for the reference design). +1: valid design with $S$ computed neglecting the base current (≈ 0.09 for the reference design), or a correct method with a slip. 0: valid design but no or a wrong-method sensitivity, or a correct sensitivity method with a design that misses 2.5 V by more than 2%. −2 (asserted as fact): $S$ = 1 or $S$ = $V_{DD}/V_{REF}$ = 2 claimed, $V_{REF}$ taken as $V_{EB}(R_2/R_1)$ (wrong divider), or a design that ignores the multiplier and sets $V_{REF} = V_{EB}$.
