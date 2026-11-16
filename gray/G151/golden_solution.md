# Golden Solution - G151

## Reference answer

About 2 mV peak ($v_o \approx v_{sup}/PSRR^+ = 20\ \mathrm{mV}/10$).

- Op-amp output: $v_o = A_{dm}v_{id} + A^+v_{dd} = A_{dm}\left(v_{id} + v_{dd}/PSRR^+\right)$. The supply variation acts as an equivalent differential input source $v_{dd}/PSRR^+ = 2$ mV.
- Follower: $v_{id} = v_s - v_o = -v_o$, so $v_o = \dfrac{A_{dm}}{1 + A_{dm}}\cdot\dfrac{v_{dd}}{PSRR^+} \approx \dfrac{20\ \mathrm{mV}}{10} = 2$ mV.
- The follower has unity closed-loop gain, so the equivalent input source appears at the output almost unchanged.

## Grading notes

+2: 2 mV peak (±5 %), with the supply ripple treated as an equivalent input $v_{dd}/PSRR^+$ amplified by the follower's unity gain. +1: 2 mV stated with little justification, or $A_{dm}/(1+A_{dm})$ kept and evaluated correctly with an assumed $A_{dm}$. 0: right method with an arithmetic slip. -2 (asserted as fact): 200 mV ($v_{sup}\times PSRR$), 20 mV (no rejection), or 0.2 mV / any result that multiplies by $A_{dm}$ or divides by PSRR twice.
