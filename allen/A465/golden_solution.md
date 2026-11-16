# Golden Solution - A465

## Reference answer

$x = 28/3 \approx 9.33$.

Derivation (1 LSB $= V_{REF}/64$; code $= 8m + n$, $m$ = MSB value 0…7, $n$ = LSB value 0…7):
- Output $= 8m + 8n/x$ LSB (the LSB subDAC gives $(n/8)(V_{REF}/x)$).
- Steps inside a group: $8/x$ LSB → DNL $= 8/x - 1$ (between −1 and +1 for any $x > 4$).
- Steps at a group transition ($n$: 7 → 0, $m$ → $m+1$): $8 - 56/x$ LSB → DNL $= 7 - 56/x$.
- For $x > 8$ the transition DNL is positive and grows with $x$; it reaches +1 LSB at $7 - 56/x = 1$, i.e. $x = 56/6 = 28/3 \approx 9.33$ (the in-group DNL is then only −0.14). On the other side, $|DNL| = 1$ is reached at $x = 7$ (transition DNL = −1). So $7 \le x \le 9.33$ keeps $|DNL| \le 1$ LSB, and the largest $x$ giving a 1 LSB DNL is 9.33.

## Grading notes

+2: $x = 28/3 \approx 9.33$ (±0.05) with the transition step $8 - 56/x$ (or equivalent) identified. Mentioning the lower limit $x = 7$ is a plus, not required. +1: correct method and expression with a slip in the final value, or only the range 7–9.33 given without singling out 9.33 when the question is clearly answered. 0: correct in-group analysis but transition step wrong, giving a different value, with sound reasoning otherwise. −2 (asserted as fact): x = 6 (the value for M = K = 2), x = 16 (from the in-group step only), or another value from a wrong model.
