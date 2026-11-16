# Golden Solution - R053

## Reference answer

No in both cases.
- In every region the dc current depends on $\mu_nC_{ox}$ and $W/L$ only through their product $K = \mu_nC_{ox}W/L$: saturation $\tfrac12K(V_{GS}-V_{TH})^2$, triode $K[(V_{GS}-V_{TH})V_{DS} - V_{DS}^2/2]$. Any set of dc measurements yields K, but scaling $\mu_nC_{ox}$ up and $W/L$ down by the same factor leaves every reading unchanged.
- Two devices with $(W/L)_2 = 2(W/L)_1$: measurements give $K_1$ and $K_2 = 2K_1$; the second result follows from the first and the known ratio, so there are still two unknowns ($\mu_nC_{ox}$ and $(W/L)_1$) with only one independent equation. A ratio of aspect ratios contains no absolute scale.
- Separating them needs independent information, e.g. $C_{ox}$ from a C–V measurement (plus μ), or absolute W and L from the layout.

## Grading notes

+2: "no" for both cases, with the reason that only the product $\mu_nC_{ox}W/L$ appears in the dc equations and that the known 2:1 ratio adds no absolute scale. +1: correct answers with incomplete reasoning for the second case. 0: first case right, second wrong (claims the 2:1 ratio allows separation) presented as uncertain, or the reverse. -2 (asserted as fact): a procedure claimed to extract $\mu_nC_{ox}$ and $W/L$ separately from dc measurements in either case.
