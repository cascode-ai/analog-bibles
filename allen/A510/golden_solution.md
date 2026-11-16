# Golden Solution - A510

## Reference answer

$|\varepsilon| = 0.0179$ (for $\varepsilon = -0.0179$, i.e. a first-stage gain of about 1.964, the 5th bit becomes wrong). For positive $\varepsilon$ the first error needs $\varepsilon = +0.0714$.

- Ideal residues (units of $V_{REF}$): $V_0 = 0.7$, $V_1 = 0.4$, $V_2 = -0.2$, $V_3 = 0.6$, $V_4 = 0.2$ → word 11011.
- With the gain error, $V_1 = 1.4(1 + \varepsilon) - 1 = 0.4 + 1.4\varepsilon$, and each later stage doubles the error: $V_2 = -0.2 + 2.8\varepsilon$, $V_3 = 0.6 + 5.6\varepsilon$, $V_4 = 0.2 + 11.2\varepsilon$.
- A bit changes when a residue crosses zero: $V_4$ at $\varepsilon = -0.2/11.2 = -0.0179$, $V_2$ at $\varepsilon = +0.2/2.8 = +0.0714$, $V_1$ at $-0.286$, $V_3$ at $-0.107$. The smallest magnitude is 0.0179 (the 5th bit turns from 1 to 0).

## Grading notes

+2: $|\varepsilon| \approx 0.0179$ (±0.0005), with the error growing by 2 per stage and the 5th-stage residue (0.2$V_{REF}$) as the critical one. Mentioning the sign (negative ε) is a plus, not required. +1: right value with an incomplete justification, or the right critical stage with a rounding slip. 0: correct method but a different number of stages assumed (e.g., 0.0045 for 8 stages, 0.0714 for 4 stages) with the assumption stated, or a single arithmetic slip. −2 (asserted as fact): a value from a wrong error model (e.g., the error not multiplied by later stages, giving 0.14) or from a wrong residue sequence.
