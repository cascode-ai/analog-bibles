# Golden Solution - G327

## Reference answer

Slew rate ≈ 103 V/μs.

- While slewing the op amp is nonlinear, the feedback is not effective and the virtual ground at the inverting input is lost. The output current $I_{\text{TAIL}}$ then charges the total capacitance seen from the output to ground with the connection to the inverting input opened: $C_L + C_I \| (C_S + C_{ip}) = 1.5 + \dfrac{4 \times 0.5}{4.5} = 1.944$ pF.
- SR $= 0.2\text{ mA}/1.944\text{ pF} = 103$ V/μs.

## Grading notes

+2: effective load $C_L + C_I\|(C_S + C_{ip})$ ≈ 1.94 pF and SR ≈ 103 V/μs (±5%). +1: correct reasoning with an arithmetic slip. 0: $C_L$ alone used (133 V/μs) or $C_L + C_I$ (36 V/μs) with otherwise correct reasoning. −2 (asserted as fact): SR from half the tail current with a wrong load, or a slew rate claimed to be set by the feedback factor.
