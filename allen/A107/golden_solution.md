# Golden Solution - A107

## Reference answer

$V_{REF} = V_{G0} + (\gamma - \alpha)V_{t0} \approx 1.262$ V, and $R_2 = R_1\,\dfrac{V_{G0} + (\gamma - \alpha)V_{t0} - V_{D3}}{V_t\ln n} = 10\ \mathrm{k\Omega}\times\dfrac{1.262 - V_{D3}}{0.0599\ \mathrm{V}}$, i.e. ≈ 110.6 kΩ for $V_{D3}$ = 0.6 V.

- M1 and M2 have equal currents and sizes, so $V_{GS1} = V_{GS2}$ and $V_{D1} = I_2R_1 + V_{D2}$. With D2 having $n$ times D1's area: $I_2 = V_t\ln n/R_1 = 0.026\times2.303/10\ \mathrm{k} = 5.99\ \mu$A (PTAT).
- $I_3 = I_2$ flows through $R_2$ and D3: $V_{REF} = V_{D3} + (R_2/R_1)V_t\ln n$.
- Zero TC: $(R_2/R_1)V_{t0}\ln n = V_{G0} - V_{D3} + (\gamma - \alpha)V_{t0}$, which gives $R_2$ above, and then $V_{REF} = V_{G0} + (\gamma - \alpha)V_{t0} = 1.205 + 0.057 = 1.262$ V.
- For $V_{D3}$ = 0.6 V: $R_2/R_1 = 0.662/0.0599 = 11.06$, $R_2$ = 110.6 kΩ (for $V_{D3}$ = 0.7 V it would be 93.9 kΩ).

## Grading notes

+2: $V_{REF}$ ≈ 1.262 V, $I$ = $V_t\ln n/R_1$ ≈ 6 µA, and $R_2 = R_1(1.262 - V_{D3})/(V_t\ln10)$ ≈ 110 kΩ (108–113 kΩ) for $V_{D3}$ = 0.6 V. +1: correct expression with a numerical slip, or $V_{REF}$ right with $R_2$ only symbolic. 0: one of the two results right. −2 (asserted as fact): $R_2$ chosen without the zero-TC condition, $V_{REF}$ given as $V_{D3}$ or $V_{G0}$ alone, or $I = V_t\ln n/R_1$ replaced by $V_t/R_1$.
