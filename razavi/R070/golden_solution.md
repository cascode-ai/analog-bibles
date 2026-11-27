# Golden Solution - R070

## Reference answer

With $\beta=\mu_nC_{ox}(W/L)_1=13.4\ \mathrm{mA/V^2}$, the load line and saturation model give

$$I_D=\frac{V_{DD}-V_{out}}{R_D},\qquad
V_{ov}=\sqrt{\frac{2I_D}{\beta}},\qquad
V_{in}=V_{TH}+V_{ov}.$$

| $V_{out}=V_{DS}$ (V) | $I_D$ (mA) | $V_{ov}$ (V) | $V_{in}$ (V) |
|---:|---:|---:|---:|
| 1.0 | 1.00 | 0.386 | 1.086 |
| 2.5 | 0.25 | 0.193 | 0.893 |

Both points satisfy $V_{DS}\ge V_{ov}>0$, so $M_1$ is saturated.

## Grading notes

- +2 for both inputs within $\pm 0.01\ \mathrm{V}$ of 1.086 V and 0.893 V, respectively.
- +1 for one correct value and an arithmetic slip in the other.
- 0 for the correct method with arithmetic slips in both values.
- −2 for asserting a result based on the triode equation, omitting $V_{TH}$ by reporting overdrive as the input, or failing to derive the currents from $(V_{DD}-V_{out})/R_D$.
