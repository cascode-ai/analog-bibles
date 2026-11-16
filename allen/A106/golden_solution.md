# Golden Solution - A106

## Reference answer

$V_{REF} \approx 1.169$ V.

- The ideal mirror forces $I_1 = I_2 = I$. Q3 and Q4 share the base voltage: $V_{BE4} = V_{BE3} + IR_1$, and with equal currents and a 10:1 area ratio, $IR_1 = V_{th}\ln10 = 0.0599$ V, so $I = 0.0599/1200 = 49.9\ \mu$A.
- $V_{BE4} = V_{th}\ln(I/I_s) = 0.026\ln(49.9\ \mu/100\ \mathrm{f}) = 0.5207$ V.
- $V_{REF} = V_{BE4} + IR_2 = 0.5207 + 49.9\ \mu\times13\ \mathrm{k} = 0.5207 + 0.6486 = 1.169$ V.

## Grading notes

+2: 1.168–1.170 V, with $I$ ≈ 49.9 µA from $V_{th}\ln10/R_1$. +1: correct method with a rounding slip giving 1.165–1.173 V. 0: correct current but $V_{BE}$ computed with the ×10 saturation current for Q4 (giving ≈ 1.11 V), or the correct method with a larger numerical error. −2 (asserted as fact): $V_{REF}$ ≈ 1.26 V assumed as a generic bandgap value, $IR_1 = V_{th}\ln10$ applied with the area ratio inverted, or $V_{REF}$ taken across $R_2$ only.
