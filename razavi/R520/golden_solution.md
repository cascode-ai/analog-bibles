# Golden Solution - R520

## Reference answer

With $I_D$ fixed:
- $V_{GS}-V_{TH} = (3I_D/\beta)^{1/3} \propto (W/L)^{-1/3}$ decreases, more slowly than the square law's $(W/L)^{-1/2}$: 8 times the $W/L$ halves the overdrive, instead of 4 times.
- $g_m = 3I_D/(V_{GS}-V_{TH}) = (3I_D)^{2/3}\beta^{1/3} \propto (W/L)^{1/3}$ rises with infinite initial slope and a concave shape, more slowly than the square law's $\sqrt{W/L}$: doubling $g_m$ takes 8 times the $W/L$.
- As $W/L$ grows and the overdrive approaches zero, the device enters weak inversion and $g_m$ levels off at $I_D/(\xi V_T)$, as for the square-law device. The model's $g_m$ reaches this limit near $V_{GS} - V_{TH} \approx 3\xi V_T \approx 0.12$ V.

## Grading notes

+2: $g_m \propto (W/L)^{1/3}$ (rising, concave) and $V_{GS}-V_{TH} \propto (W/L)^{-1/3}$ (falling). Mentioning the weak-inversion ceiling $I_D/(\xi V_T)$ is a plus, not required. Saying that the formal cubic-law curve has no upper asymptote is fine; asserting that this hypothetical device has no ceiling at all ($g_m$ grows without bound with $W/L$), without noting that a real device would level off at $I_D/(\xi V_T)$ in weak inversion, is a minor false claim (+1), not critical, since the question gives only the saturation law for this device. +1: right directions and shapes with a correct comparison ("slower than the square law") but no exponents, or one exponent right and the other missing. 0: shapes only (indistinguishable from the square-law plots), or one curve wrong. -2 (asserted as fact): square-law exponents (±1/2) given for this device, $g_m$ decreasing with $W/L$, or the overdrive increasing with $W/L$.
