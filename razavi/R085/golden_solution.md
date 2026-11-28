# Golden Solution - R085

## Reference answer

### Device sizing

At the triode boundary of $M_1$,

$$\beta_1=\mu_nC_{ox}(W/L)_1=5.36\ \mathrm{mA/V^2},\qquad
V_{out}=V_{ov1}=\sqrt{2I_1/\beta_1}\approx0.611\ \mathrm V.$$

Output-node KCL and the diode-connected PMOS give

$$|I_{D2}|=I_1-I_S=0.25\ \mathrm{mA},\qquad
|V_{ov2}|=V_{DD}-V_{out}-|V_{TH2}|\approx1.589\ \mathrm V.$$

$$\left(\frac WL\right)_2=\frac{2|I_{D2}|}{\mu_pC_{ox}|V_{ov2}|^2}\approx5.16.$$

### Small-signal gain

The ideal source $I_S$ is open for small signals. The diode-connected $M_2$ loads the output with $1/g_{m2}$.

$$g_{m1}=\frac{2I_1}{V_{ov1}}\approx3.27\ \mathrm{mS},\qquad
g_{m2}=\frac{2|I_{D2}|}{|V_{ov2}|}\approx0.315\ \mathrm{mS},\qquad
A_v=-\frac{g_{m1}}{g_{m2}}\approx-10.4$$

## Grading notes

- +2 for $(W/L)_2\approx5.2$ and $A_v\approx-10.4$ (each within ±4%).
- +1 for one slip in an otherwise correct solution.
- 0 for one correct result, with the other wrong by a slip.
- −2 for assuming that $M_2$ carries 1 mA or 0.75 mA, setting the boundary at $V_{out}=V_{TH}$ or $V_{out}=V_{in}$, using $\mu_nC_{ox}$ for $M_2$, or evaluating $g_{m2}$ at the wrong current.
