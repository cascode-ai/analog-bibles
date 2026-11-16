# Golden Solution - A488

## Reference answer

$v_{OUT} = k_0[b_0 + k_1(b_1 + k_2b_2)]V_{REF} = \left(\frac{7}{16}b_0 + \frac{5}{16}b_1 + \frac{3}{16}b_2\right)V_{REF}$.
INL: +1 LSB and −0.5 LSB; DNL: +0.5 LSB and −1.5 LSB; the DAC is not monotonic.

Characteristic (LSB $= V_{REF}/8 = 2/16\,V_{REF}$), codes 000 … 111:
- Actual: 0, 3/16, 5/16, 8/16, 7/16, 10/16, 12/16, 15/16 $V_{REF}$.
- Ideal ($b_0/2 + b_1/4 + b_2/8$): 0, 2/16, 4/16, 6/16, 8/16, 10/16, 12/16, 14/16 $V_{REF}$.
- INL (LSB): 0, +0.5, +0.5, +1, −0.5, 0, 0, +0.5 → $+INL = +1$ (code 011), $-INL = -0.5$ (code 100).
- Steps (LSB): 1.5, 1, 1.5, −0.5, 1.5, 1, 1.5 → DNL +0.5, 0, +0.5, −1.5, +0.5, 0, +0.5; $+DNL = +0.5$, $-DNL = -1.5$ at 011→100. The output falls there (8/16 → 7/16), so the DAC is nonmonotonic.

## Grading notes

+2: the expression with weights 7/16, 5/16, 3/16, the eight output levels, INL +1/−0.5 LSB, DNL +0.5/−1.5 LSB, and "nonmonotonic". +1: one INL/DNL value wrong by a slip, or the plot/levels described only partially. 0: correct expression but INL/DNL mostly wrong, or values right with no expression. −2 (asserted as fact): the DAC called monotonic, weights computed as $k_2$ for $b_0$ (reversed order), or LSB taken as $V_{REF}/16$ with INL/DNL doubled.
