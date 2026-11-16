# Golden Solution - A466

## Reference answer

$x = 56/9 \approx 6.22$.

Derivation (1 LSB $= V_{REF}/64$; code $= 8m + n$):
- Output $= 8m + 8n/x$ LSB.
- In-group steps $8/x$ → DNL $= 8/x - 1$; group-transition steps $8 - 56/x$ → DNL $= 7 - 56/x$.
- The worst-case DNL equals 2 LSB in magnitude at $7 - 56/x = -2$, i.e. $x = 56/9 \approx 6.22$ (in-group DNL then +0.29; the output falls by 1 LSB at each group transition), and at $7 - 56/x = +2$, i.e. $x = 56/5 = 11.2$. For $x < 56/9$ the magnitude exceeds 2 LSB, so the smallest value of $x$ that gives a 2 LSB DNL is 56/9.
- (At $x = 8/3$ the in-group DNL is +2, but the transition DNL is then −14, so that is not a 2 LSB DNL of the DAC.)

## Grading notes

+2: $x = 56/9 \approx 6.22$ (±0.05) from the transition DNL $7 - 56/x = -2$. Mentioning the second solution 11.2 is a plus. +1: correct expressions with a slip in the final value. 0: correct method but the answer given as 11.2 only (the larger solution) with sound reasoning. −2 (asserted as fact): x = 2.4 (the value for M = K = 2), x = 8/3 (in-group step only, ignoring the −14 LSB transition), or another value from a wrong model.
