# Golden Solution - R230

## Reference answer

$I_{out} = 0$ for $V_{DD} < |V_{THP}| = 0.8$ V; it rises from zero above 0.8 V while $M_2$ is in the triode region, and it levels off at $I_{out} = \dfrac{(W/L)_2}{(W/L)_1}\cdot\dfrac{(W/L)_4}{(W/L)_3}I_{REF}$ once $V_{DD} \ge V_{DD,1} = |V_{THP}| + \sqrt{\dfrac{2I_{D2}}{\mu_pC_{ox}(W/L)_3}} + \sqrt{\dfrac{2I_{REF}}{\mu_nC_{ox}(W/L)_1}}$, staying flat up to 3 V.

- Because $I_{REF}$ is ideal, $M_1$ always carries $I_{REF}$ and $V_{GS1} = 0.7\ \mathrm{V} + \sqrt{2I_{REF}/[\mu_nC_{ox}(W/L)_1]}$ is independent of $V_{DD}$, so $M_2$'s gate is always biased.
- The $M_2$–$M_3$ branch needs $V_{DD} = |V_{GS3}| + V_{DS2}$. For $V_{DD} < 0.8$ V the diode $M_3$ cannot turn on: $I_{D2} = I_{D3} = I_{out} = 0$.
- Just above 0.8 V, $V_{DS2}$ is small ($M_2$ in deep triode, acting as a resistor $1/[\mu_nC_{ox}(W/L)_2(V_{GS1}-V_{TH})]$), so the current is set mainly by $M_3$: roughly $\tfrac12\mu_pC_{ox}(W/L)_3(V_{DD}-0.8)^2$ at first, then bending over.
- $M_2$ saturates when $V_{DS2} = V_{GS1} - V_{TH} = \sqrt{2I_{REF}/[\mu_nC_{ox}(W/L)_1]}$, i.e., at $V_{DD,1}$ above, where $I_{D2} = [(W/L)_2/(W/L)_1]I_{REF}$. The curve reaches the plateau smoothly (zero slope at the edge of saturation).
- $M_4$ mirrors $M_3$ with ratio $(W/L)_4/(W/L)_3$; with its drain at ground it stays saturated. Above $V_{DD,1}$ the output is constant (it would rise slightly with $\lambda > 0$).

## Grading notes

+2: zero output below $V_{DD} \approx |V_{THP}|$ = 0.8 V, a rising segment in which $M_2$ is in triode, and a flat plateau at $[(W/L)_2/(W/L)_1][(W/L)_4/(W/L)_3]I_{REF}$ beyond $V_{DD} \approx |V_{GS3}| + (V_{GS1}-V_{TH})$. Exact curve shape between the break points is not required. +1: correct onset and plateau but the second break point missing or misplaced by one term (e.g., placed at $|V_{GS3}| + V_{GS1}$). 0: only the plateau value given (constant $I_{out}$ for all $V_{DD}$) with no low-$V_{DD}$ behaviour. -2 (asserted as fact): nonzero $I_{out}$ at $V_{DD} = 0$ or below 0.8 V, $I_{out}$ proportional to $V_{DD}$ throughout, the mirror ratios inverted, or the onset placed at the NMOS threshold 0.7 V because of $M_1$ (which is always biased by the ideal source).
