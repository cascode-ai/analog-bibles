# Golden Solution - R004

## Reference answer

For fixed $V_{DS}>0$, define $V_{ov}=V_{GS}-V_{TH}$ and $\beta=\mu_nC_{ox}(W/L)$, with $V_{TH}=0.7$ V. The square-law model without CLM gives
$$
I_D=\begin{cases}
0,&V_{GS}\le V_{TH},\\
\tfrac12\beta(V_{GS}-V_{TH})^2,&V_{TH}<V_{GS}\le V_{TH}+V_{DS},\\
\beta[(V_{GS}-V_{TH})V_{DS}-\tfrac12V_{DS}^2],&V_{GS}>V_{TH}+V_{DS}.
\end{cases}
$$
The region order as $V_{GS}$ increases is cutoff → saturation → triode. Turn-on occurs at $V_{GS}=0.7$ V. The saturation condition $V_{DS}\ge V_{GS}-V_{TH}$ places the second boundary at $V_{GS}=0.7\ \mathrm V+V_{DS}$.

All curves follow the same saturation parabola, then leave it along straight triode lines with slopes $\beta V_{DS}$. At the second boundary, both branches give $I_D=\beta V_{DS}^2/2$ and slope $\beta V_{DS}$, so the join is tangent, not a kink. Larger $V_{DS}$ extends the parabolic segment and gives a steeper line; its curve is never lower than a smaller-$V_{DS}$ curve.

| $V_{DS}$ (V) | Second boundary $V_{GS}$ (V) | Boundary $I_D/\beta$ (V²) |
|---|---|---|
| 0.2 | 0.9 | 0.020 |
| 0.5 | 1.2 | 0.125 |
| 1.0 | 1.7 | 0.500 |

![Transfer curve family with turn-on and saturation-to-triode boundaries](/q/R004/solution-curves.svg)

The vertical axis is normalized because $\beta$ is not specified. For $V_{DS}\ge2.3$ V, the conducting part of the plotted 0–3 V sweep is entirely saturated. For $V_{DS}=0$, $I_D=0$ for every gate voltage.

## Grading notes

+2: both boundaries at $V_{GS}=V_{TH}=0.7$ V and $V_{GS}=V_{TH}+V_{DS}$, with a parabolic saturation segment followed by a straight triode segment and the correct family ordering. In the no-CLM square-law model, curves coincide in saturation and separate at their own second boundaries; larger $V_{DS}$ never gives a lower curve. A clearly stated, internally consistent CLM extension may make the saturation curves fan out slightly without changing the region-boundary voltages. Slope continuity in the no-CLM model is welcome, not required for full credit.

+1: correct boundaries and segment shapes, but family ordering is unclear or there is a minor slip.

0: only the threshold boundary is identified, with the rest otherwise sound but incomplete.

-2 (asserted as fact): regions inverted, linear-then-quadratic segments, or a wrong expression for the second boundary.
