# Golden Solution - G041

## Reference answer

$V_t \approx 0.476$ V and $\mu_nC_{ox}(W/L) \approx 191\ \mu\mathrm{A/V^2}$.

- Square law in the active region: $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_{GS}-V_t)^2$ (same $V_{DS}$ assumed, so channel-length modulation cancels in the ratio).
- $\sqrt{100/10} = (1.5 - V_t)/(0.8 - V_t)$ → $3.162(0.8 - V_t) = 1.5 - V_t$ → $V_t = (2.530 - 1.5)/2.162 = 0.476$ V.
- $\mu_nC_{ox}(W/L) = 2I_D/(V_{GS}-V_t)^2 = 200\ \mu\mathrm{A}/(1.024)^2 = 191\ \mu\mathrm{A/V^2}$ (check: $\tfrac12(191\ \mu)(0.324)^2 = 10\ \mu$A).

## Grading notes

+2: $V_t$ = 0.47–0.48 V and $\mu_nC_{ox}W/L$ = 185–197 μA/V². +1: one value right and the other with an arithmetic slip, or $k = \tfrac12\mu_nC_{ox}W/L$ ≈ 95 μA/V² reported and clearly labelled as the half-value. 0: correct square-root method with an algebra slip giving both values wrong. −2 (asserted as fact): linear (triode) model used for the active region, $V_t$ outside 0–0.8 V, or $\mu_nC_{ox}W/L$ given as 95 μA/V² while claiming it is $\mu_nC_{ox}W/L$.
