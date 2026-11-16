# Golden Solution - G147

## Reference answer

$R_x = R_1 \parallel R_2 = \dfrac{R_1R_2}{R_1+R_2}$.

- With $V_{in} = 0$, the noninverting input is at $V_+ = -I_B R_x$ (the bias current flows out of ground through $R_x$ into the input).
- At the inverting input, KCL with $V_{out} = 0$ and the virtual short $V_- = V_+$: the bias current $I_B$ must come through $R_1$ and $R_2$, both returned to 0 V, so $V_- = -I_B (R_1\parallel R_2)$.
- $V_- = V_+$ then requires $R_x = R_1 \parallel R_2$: both inputs see the same dc resistance, so equal bias currents produce equal voltage drops. The result does not depend on the sign of $I_B$.
- With $R_x = 0$, the output would instead be $V_{out} = I_B R_2$.

## Grading notes

+2: $R_x = R_1R_2/(R_1+R_2)$ with a correct justification (equal resistances seen by both inputs, or explicit KCL). +1: correct value with a weak or partly incorrect argument. 0: correct method with an algebra slip giving a wrong combination. -2 (asserted as fact): $R_x = R_1$, $R_x = R_2$, $R_x = R_1 + R_2$, or $R_x = 0$ claimed to null the output.
