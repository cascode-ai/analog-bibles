# Golden Solution - A463

## Reference answer

The scaling factor must be within $x = 1/8 \pm 1/112$, i.e. a tolerance of $\pm 7.14$% ($\pm 1/14$). In terms of the division ratio $1/x$ this is 7.47 to 8.62 (−6.7%, +7.7% about 8).

Derivation:
- Only the LSB subDAC output is affected: error $= \Delta x\left(\frac{b_3}{2} + \frac{b_4}{4} + \frac{b_5}{8}\right)V_{REF}$.
- Worst case $b_3 = b_4 = b_5 = 1$: $|\Delta x|\cdot\frac{7}{8}V_{REF} \le \frac{1}{2}\cdot\frac{V_{REF}}{64} = \frac{V_{REF}}{128}$ → $|\Delta x| \le \frac{1}{112}$.
- Relative tolerance: $\frac{1/112}{1/8} = \frac{1}{14} = 7.14$%; $x$ from $13/112$ to $15/112$. This is tighter than the single-bit value $\pm 100\%/2^K = \pm 12.5$% because all LSB-subDAC bits are affected at once.

## Grading notes

+2: ±7.1% (±0.2%) on the scaling factor, or the equivalent divisor range 7.47–8.62 (−6.7%/+7.7%) clearly stated, with the worst case taken at $b_3 = b_4 = b_5 = 1$ and the ±½ LSB = $V_{REF}/128$ criterion. +1: correct method and worst case with an arithmetic slip, or the result given only as $\Delta x = 1/112$ without the percentage. 0: right approach but the tolerance referred to the wrong quantity in a way that changes the number noticeably (e.g. ±6.7% presented as the scaling-factor tolerance without explanation). −2 (asserted as fact): ±12.5% (single-bit argument ignoring the other LSB bits), ±1/2⁶ = ±1.56% or another value from a wrong worst case or wrong LSB size.
