# Golden Solution - A074

## Reference answer

$v_{out}(t_1) \approx 1.42$ V (error ≈ 0.58 V below the 2.0-V input).

- Before the falling edge $C_1$ has charged to $V_S = 2.0$ V, so $V_{SB} = 2$ V and $V_T = 0.7 + 0.4(\sqrt{2.7} - \sqrt{0.7}) = 1.023$ V.
- $U = 5\ \mathrm{V}/10\ \mathrm{ns} = 5\times10^8$ V/s, $\beta = 110\ \mu \times 5 = 550\ \mu\mathrm{A/V^2}$, $C_{channel} = 5\ \mu\mathrm{m}\times1\ \mu\mathrm{m}\times24.7\times10^{-4} = 12.35$ fF.
- (Slow-regime check: $V_{HT} = 5 - 2 - 1.023 = 1.977$ V, $\beta V_{HT}^2/(2C_L) = 3.6\times10^{10}$ V/s ≫ $U$.)
- First term: $\dfrac{5 + 6.175}{30}\sqrt{\dfrac{\pi \times 5\times10^8 \times 30\times10^{-15}}{2 \times 550\times10^{-6}}} = 0.3725 \times 0.207 = 0.077$ V.
- Second term (overlap feedthrough after M1 turns off, gate swinging from $V_S + V_T$ to 0): $\dfrac{5}{30}(2 + 1.023 - 0) = 0.504$ V.
- $V_{error} = 0.581$ V, so $v_{out}(t_1) = 2.0 - 0.581 = 1.419$ V. The large error comes from the overlap capacitance (5 fF) being a sixth of $C_1$.

## Grading notes

+2: $v_{out}(t_1)$ = 1.40–1.44 V (error 0.56–0.60 V) with the body-effect threshold ≈ 1.02 V and both terms of the expression. +1: correct setup with one small numerical slip (result within about ±0.03 V of the window). 0: body effect ignored ($V_T = 0.7$ V, giving ≈ 1.47 V) with the rest right, or the error computed correctly but not subtracted to give $v_{out}$. −2 (asserted as fact): $v_{out}$ above 2.0 V (wrong sign of the injected charge), the overlap capacitance taken as $5\ \mu\mathrm{m} \times 220$ pF/m instead of the stated 5 fF, the gate swing $V_H$ (5 V) used in place of $V_S$ in the overlap term (giving ≈ 0.9 V), or a value near 1.78 V, which the stated data do not produce.
