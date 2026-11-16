# Golden Solution - A273

## Reference answer

$SR^- \approx 9.1$ V/µs.

- Internal limit: the first stage can deliver at most $I_5$ to $C_c$: $I_5/C_c = 45.7\ \mu\mathrm A/5\ \mathrm{pF} = 9.1$ V/µs.
- Output limit: on a falling edge M6 is cut off and M7 must sink both the load current and the current $I_5$ flowing through $C_c$: $C_L\,dv/dt = I_7 - I_5$ → $(228 - 45.7)\ \mu\mathrm A/20\ \mathrm{pF} = 9.1$ V/µs. Equivalently, treating the first-stage node as fixed during output-limited slewing, M7 discharges $C_L + C_c$: $I_7/(C_L + C_c) = 228\ \mu\mathrm A/25\ \mathrm{pF} = 9.1$ V/µs (both forms give the same condition $I_7 = I_5(1 + C_L/C_c)$ for the two limits to meet).
- Both limits coincide (since $I_7 = 5I_5$ and $C_L = 4C_c$), so $SR^- = \min[I_5/C_c,\ (I_7 - I_5)/C_L] = 9.1$ V/µs.

## Grading notes

+2: ≈ 9.1 V/µs (8.7–9.5) with both the internal limit $I_5/C_c$ and an output-stage limit ($(I_7 - I_5)/C_L$ or $I_7/(C_L + C_c)$, equivalent criteria here) considered and the smaller taken. +1: ≈ 9.1 V/µs from one correct mechanism alone ($I_5/C_c$, $(I_7 - I_5)/C_L$ or $I_7/(C_L + C_c)$) without checking the other limit; or ≈ 9.1 V/µs as the minimum of $I_5/C_c$ and an output limit written as $I_7/C_L$ = 11.4 V/µs (the $C_c$ current ignored). 0: the right mechanisms with a computational slip in the final value. −2 (asserted as fact): $I_7/C_L$ = 11.4 V/µs as the slew rate, or a value based on $I_5/2$.
