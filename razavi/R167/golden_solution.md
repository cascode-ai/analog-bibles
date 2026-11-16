# Golden Solution - R167

## Reference answer

The currents are equal at $V_{in1} - V_{in2} = (1 - 1/\sqrt2)\sqrt{I_{SS}/\beta} \approx 0.29\sqrt{I_{SS}/\beta}$ ($V_{in1}$ higher).
- Sketch: $I_{D1} + I_{D2} = I_{SS}$, crossing curves shifted to the right compared with a symmetric pair. At $V_{in1} = V_{in2}$ (equal $V_{GS}$), $I_{D2} = 2I_{D1}$: $I_{D1} = I_{SS}/3$, $I_{D2} = 2I_{SS}/3$.
- $M_1$ is off ($I_{D2} = I_{SS}$) for $V_{in1} - V_{in2} \le -\sqrt{I_{SS}/\beta}$ (the overdrive of the 2W device at $I_{SS}$); $M_2$ is off ($I_{D1} = I_{SS}$) for $V_{in1} - V_{in2} \ge \sqrt{2I_{SS}/\beta}$. The transition region is therefore asymmetric about zero, and the curves are not mirror images about the crossing point.
- Equal currents: $V_{GS1} - V_{GS2} = \sqrt{2(I_{SS}/2)/\beta} - \sqrt{2(I_{SS}/2)/(2\beta)} = \sqrt{I_{SS}/\beta}\,(1 - 1/\sqrt2)$. This shift acts as an input offset.

## Grading notes

Sketch and value, equal weight. +2: crossing at ≈ 0.29$\sqrt{I_{SS}/\beta}$ (any equivalent form, e.g. $(\sqrt2 - 1)\sqrt{I_{SS}/(2\beta)}$), with $V_{in1} > V_{in2}$; sketch showing $I_{D2} = 2I_{D1}$ at zero input and complete steering at $-\sqrt{I_{SS}/\beta}$ and $+\sqrt{2I_{SS}/\beta}$ (or a clear asymmetric right-shifted crossing). +1: value right, sketch only roughly right (e.g., symmetric shape merely shifted). 0: one part right. -2 (asserted as fact): currents equal at $V_{in1} = V_{in2}$, crossing at negative $V_{in1} - V_{in2}$, or $I_{D1} = 2I_{D2}$ at zero input.
