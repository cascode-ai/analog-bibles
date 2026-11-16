# Golden Solution - G100

## Reference answer

$dV_{OUT}/dT \approx +23\ \mu\mathrm{V/°C}$ (≈ +18 ppm/°C).

- Nominal design: the currents are PTAT, so the zero-TC output is $V_{OUT} = V_{G0} + (\gamma-1)V_T = 1.205 + 2.2(0.0257) = 1.2615$ V, and the voltage across $R_1$ and $R_2$ is $V_{R2} = V_{OUT} - V_{EB1} = 1.2615 - 0.6 = 0.66$ V.
- $V_{R2} = (R_2/R_3)\Delta V_{EB}$, and $\Delta V_{EB} = V_T\ln[(R_2/R_1)(I_{S2}/I_{S1})]$ does not depend on $R_3$. A 1 % low $R_3$ raises $R_2/R_3$ by 1.01 %: $\Delta V_{R2} = 0.66\times0.0101 = 6.7$ mV.
- Both currents rise by 1.01 %, raising $V_{EB1}$ by $V_T\ln(1.0101) = 0.26$ mV.
- $\Delta V_{OUT} = 6.7 + 0.26 \approx 6.9$ mV, and both increments are proportional to T, so $dV_{OUT}/dT = \Delta V_{OUT}/T = 6.94\ \mathrm{mV}/298\ \mathrm{K} \approx +23\ \mu\mathrm{V/K}$ (equivalently, $(\gamma-1)(V_T/T)\ln(T_0'/T)$ with the zero-TC temperature moved up).

## Grading notes

+2: +21 to +24.5 µV/°C (positive), from the 1 % increase of the PTAT voltage across $R_2$ (≈ 6.7 mV, optionally plus ≈ 0.26 mV) divided by T. +1: correct sign and mechanism with a slip (e.g. ΔV taken as 1 % of the whole output, ≈ 12.6 mV → ≈ 42 µV/°C, or $V_{R2}$ computed with a slightly different target). 0: correct mechanism without a usable number. -2 (asserted as fact): negative slope, a claim that the TC is unaffected, or the change attributed to ΔV_EB changing with $R_3$ so as to reverse the sign.
