# Golden Solution - R086

## Reference answer

At fixed $I_1$, $g_{m1}$ is constant. The diode-connected $M_2$ carries $|I_{D2}|=I_1-I_S$, so its square-law transconductance scales as $\sqrt{I_1-I_S}$. The ideal current source contributes zero small-signal conductance, and $A_v=-g_{m1}/g_{m2}$.

With $A_0=|A_v|_{I_S=0}$,

$$\frac{|A_v|}{A_0}=\frac{1}{\sqrt{1-I_S/I_1}},\qquad
\frac{A_v}{A_0}=-\frac{1}{\sqrt{1-I_S/I_1}},\qquad 0\le I_S/I_1\le0.75.$$

The normalized magnitude is increasing and convex.

| $I_S/I_1$ | 0 | 0.25 | 0.50 | 0.75 |
|---|---:|---:|---:|---:|
| $\lvert A_v\rvert/A_0$ | 1.000 | 1.155 | 1.414 | 2.000 |

![Normalized small-signal gain magnitude versus current ratio](/q/R086/solution-gain.svg)

## Grading notes

- +2 for the $1/\sqrt{1-I_S/I_1}$ dependence or an equivalent result, the doubling at $I_S=0.75I_1$, and the explanation that $g_{m2}$ falls as its current decreases while $g_{m1}$ stays fixed.
- +1 for the increasing trend and correct endpoint with a loose description of the curve.
- 0 for the increasing trend and correct explanation with no quantitative law.
- −2 for asserting that the magnitude falls or stays constant, or giving an incorrect law such as $1/(1-I_S/I_1)$, which predicts a fourfold increase.
