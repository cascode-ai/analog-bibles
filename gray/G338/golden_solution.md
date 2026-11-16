# Golden Solution - G338

## Reference answer

$V_{\text{out}} = -\dfrac{10\,V_{\text{in}}}{V_{\text{ref}}}$ (volts): the circuit is an analog divider. It works only for $V_{\text{ref}} > 0$.

- The op amp's inverting input is a virtual ground (non-inverting input grounded), so $V_{\text{in}}/R + Z/R = 0$, i.e. $Z = -V_{\text{in}}$.
- The multiplier has $X = V_{\text{out}}$ and $Y = V_{\text{ref}}$: $Z = 0.1V_{\text{out}}V_{\text{ref}}$. Hence $0.1V_{\text{out}}V_{\text{ref}} = -V_{\text{in}}$.
- For fixed $V_{\text{ref}}$ the characteristic is a straight line through the origin with slope $-10/V_{\text{ref}}$ (e.g. slope −1 for $V_{\text{ref}} = 10$ V, −10 for $V_{\text{ref}} = 1$ V).
- Feedback polarity: the loop through the multiplier has gain $0.1V_{\text{ref}}$ and returns to the inverting input. It is negative feedback only for $V_{\text{ref}} > 0$. For $V_{\text{ref}} < 0$ the feedback is positive and the output latches to a supply limit; as $V_{\text{ref}} \to 0$ the gain becomes unbounded and the output saturates. With the usual ±10 V signal range, $|V_{\text{out}}| \le 10$ V requires $|V_{\text{in}}| \le V_{\text{ref}}$.

## Grading notes

+2: $V_{\text{out}} = -10V_{\text{in}}/V_{\text{ref}}$ and the condition $V_{\text{ref}} > 0$ for negative feedback (or an equivalent remark that the circuit fails or latches for negative $V_{\text{ref}}$). +1: the correct expression without the polarity condition, or the condition stated loosely. 0: the right virtual-ground setup with an algebra slip in the final expression (e.g. a factor of 10 error). −2 (asserted as fact): $V_{\text{out}} = +10V_{\text{in}}/V_{\text{ref}}$ or $-0.1V_{\text{in}}V_{\text{ref}}$ (multiplier treated as being in the forward path), or $X$ and $Z$ swapped so that the circuit is called a multiplier.
