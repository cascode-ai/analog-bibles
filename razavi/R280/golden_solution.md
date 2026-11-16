# Golden Solution - R280

## Reference answer

$R_{on} = \dfrac{1}{\mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS}-V_{TH}}{V_T}\right)}$.

- With $V_{DS} \ll V_T$: $1 - \exp(-V_{DS}/V_T) \approx V_{DS}/V_T$, so $I_D \approx \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS}-V_{TH}}{V_T}\right)V_{DS}$, linear in $V_{DS}$.
- $R_{on} = V_{DS}/I_D$ as above; it falls exponentially (by $e$ per $V_T$) as $V_{GS}$ rises.

## Grading notes

+2: the expression above (or equivalent, e.g., $R_{on} = V_T/I_{D,sat}$ where $I_{D,sat}$ is the saturation current at the same $V_{GS}$). +1: correct form with a minor algebra slip (e.g., a misplaced factor of $V_T$). 0: correct linearization but the resistance left unsimplified/incorrectly inverted with hedging. -2 (asserted as fact): $R_{on}$ proportional to $\exp[(V_{GS}-V_{TH})/V_T]$ (inverted), dependence on $V_{DS}$ retained as $V_{DS}^2$, or a strong-inversion formula $1/[\mu C_{ox}(W/L)(V_{GS}-V_{TH})]$ given.
