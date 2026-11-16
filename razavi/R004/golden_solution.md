# Golden Solution - R004

## Reference answer

For each fixed $V_{DS}$ the curve has two break points: $V_{GS} = V_{TH} = 0.7$ V (turn-on) and $V_{GS} = V_{TH} + V_{DS}$ (saturation → triode).
- $V_{GS} < V_{TH}$: $I_D \approx 0$.
- $V_{TH} < V_{GS} < V_{TH} + V_{DS}$: saturation, $I_D = \tfrac12\mu_nC_{ox}\frac{W}{L}(V_{GS}-V_{TH})^2$, the same parabola for every $V_{DS}$ (raised slightly by $1+\lambda V_{DS}$ if CLM is included).
- $V_{GS} > V_{TH} + V_{DS}$: triode, $I_D = \mu_nC_{ox}\frac{W}{L}[(V_{GS}-V_{TH})V_{DS} - V_{DS}^2/2]$, a straight line in $V_{GS}$ with slope $\mu_nC_{ox}(W/L)V_{DS}$. The slope is continuous at the break point (the line is tangent to the parabola).
- Family: a larger $V_{DS}$ extends the parabolic part further and gives a steeper triode line; a small $V_{DS}$ gives an almost straight line from $V_{TH}$ (deep triode, $I_D \approx \mu_nC_{ox}(W/L)V_{DS}(V_{GS}-V_{TH})$). For example, $V_{DS}$ = 0.2, 0.5, 1 V put the second break point at 0.9, 1.2, 1.7 V.

## Grading notes

+2: both break points ($V_{TH}$ and $V_{TH}+V_{DS}$), parabolic segment followed by a linear (triode) segment, and the family ordered correctly (curves coincide in saturation and split off, larger $V_{DS}$ higher). Mentioning slope continuity is a plus, not required. +1: break points and segment shapes right but the ordering of the family unclear, or a minor slip. 0: only the $V_{TH}$ break point identified, rest sound but incomplete. -2 (asserted as fact): regions inverted (triode just above $V_{TH}$, saturation at large $V_{GS}$ for fixed $V_{DS}$), linear-then-quadratic shapes, or the second break point placed at a wrong expression.
