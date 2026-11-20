# Golden Solution - R005

## Reference answer

Body effect changes the transfer curve through threshold, not $\beta=\mu_nC_{ox}W/L$. Substituting the given parameters gives

$$
V_{TH}(V_{BS})=0.7\ \mathrm V+(0.45\ \mathrm{V^{1/2}})
\left[\sqrt{0.9\ \mathrm V-V_{BS}}-\sqrt{0.9\ \mathrm V}\right],
\qquad V_{SB}=-V_{BS}.
$$

$$
\frac{I_D}{\beta}=\begin{cases}
0,&u\le0,\\
u^2/2,&0<u\le V_{DS},\\
uV_{DS}-V_{DS}^2/2,&u>V_{DS},
\end{cases}\qquad u=V_{GS}-V_{TH}(V_{BS}).
$$

Thus the break points are $V_{GS}=V_{TH}(V_{BS})$ (cutoff → saturation) and $V_{GS}=V_{TH}(V_{BS})+V_{DS}$ (saturation → triode). For example:

| $V_{BS}$ (V) | $V_{TH}$ (V) | $V_{TH}+0.5\ \mathrm V$ (V) |
|---|---|---|
| 0 | 0.700 | 1.200 |
| −1 | 0.893 | 1.393 |
| −2 | 1.039 | 1.539 |
| −3 | 1.162 | 1.662 |

More negative $V_{BS}$ translates each curve to the right; equal 1-V body-bias steps give shrinking shifts of about 0.193, 0.146 and 0.122 V. Above the second boundary the slope of the actual current $I_D$ is $\beta V_{DS}$. The plots choose fixed $V_{DS}=3$ V and 0.5 V; the former has no triode segment over the plotted gate range. Positive $V_{BS}$ lowers threshold but forward-biases the source–bulk junction, limiting this model.

![Solution curves with axes, regions, boundaries and key values](/q/R005/solution-curves.svg)

## Grading notes

+2: curves translate right as $V_{BS}$ becomes more negative, with turn-on at $V_{TH}(V_{BS})$. Give approximately correct thresholds (±0.03 V: 0.700, 0.893, 1.039, 1.162 V for $V_{BS}=0,-1,-2,-3$ V), or explicitly identify the shrinking square-root spacing. Identify the second boundary symbolically as $V_{GS}=V_{TH}(V_{BS})+V_{DS}$, or mark it when it falls inside the chosen gate-voltage sweep. A finite $V_{DS}$ alone does not guarantee that the second boundary is visible. A large fixed $V_{DS}$ may leave only saturated conducting segments in the plotted interval. An isolated threshold-argument typo contradicted by correct values is trivial.

+1: correct right shift and boundaries, but neither numerical thresholds nor the sublinear spacing are supplied.

0: correct shift direction, but no boundaries identified.

-2 (asserted as fact): reverse body bias shifting curves left, body effect changing the square-law gain factor instead of threshold, or a wrong threshold formula giving clearly wrong values.
