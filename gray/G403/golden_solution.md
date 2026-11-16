# Golden Solution - G403

## Reference answer

Without $C_{cs}$: $a_{cms}(s) = \dfrac{1}{1 + sR_{cs}C_1/2}$, a pole at $s = -2/(R_{cs}C_1)$.

With $C_{cs}$: $a_{cms}(s) = \dfrac{1 + sR_{cs}C_{cs}}{1 + sR_{cs}(C_{cs} + C_1/2)}$, a left-half-plane zero at $-1/(R_{cs}C_{cs})$ and a pole at $-1/[R_{cs}(C_{cs} + C_1/2)]$; the high-frequency gain is $2C_{cs}/(2C_{cs} + C_1)$ instead of 0.

- For a CM output ($v_{o1} = v_{o2} = v_{oc}$) the two branches are in parallel: $R_{cs}/2$ (or $Z/2$ with $Z = R_{cs}\|1/(sC_{cs})$) feeding $C_1$, so $v_{cms} = v_{oc}/(1 + sC_1Z/2)$. Substituting $Z = R_{cs}/(1 + sR_{cs}C_{cs})$ gives the result.
- Effect: the zero nearly cancels the pole (they form a closely spaced pair if $C_{cs} \gg C_1/2$). The CM detector then becomes a capacitive divider at high frequency with gain close to 1 and little phase lag, which improves the phase margin of the CMFB loop. The cost is extra capacitive loading of the op-amp outputs: each $C_{cs}$ goes to the DM ac-ground midpoint, so it adds directly to the DM load capacitance.

## Grading notes

+2: both transfer functions (equivalent forms accepted) with correct pole/zero locations, and the effect: the LHP zero cancels or reduces the phase lag of the pole, improving CMFB stability; mentioning the added output (DM) loading is a plus. +1: both functions right, effect described only vaguely, or a factor-of-2 slip in the pole location (e.g. $R_{cs}C_1$ instead of $R_{cs}C_1/2$). 0: first function right, second wrong or missing. −2 (asserted as fact): DM signals claimed to pass to $v_{cms}$ in a balanced detector, $C_{cs}$ said to add a pole/worsen phase margin, or a right-half-plane zero claimed.
