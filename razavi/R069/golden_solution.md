# Golden Solution - R069

## Reference answer

### DC bias

With $V_{ov}=V_{in}-V_{TH}$ and $\beta=\mu_nC_{ox}(W/L)=13.4\ \mathrm{mA/V^2}$, solve the load line and triode current together:

$$V_{out}=V_{ov}-0.050\ \mathrm{V},\qquad
\frac{V_{DD}-V_{out}}{R_D}=\beta\left(V_{ov}V_{out}-\frac{V_{out}^2}{2}\right).$$

The physical solution gives $V_{in}=V_{TH}+V_{ov}\approx 1.144\ \mathrm{V}$, with $V_{ov}\approx 0.444\ \mathrm{V}$ and $V_{DS}=V_{out}\approx 0.394\ \mathrm{V}$. This satisfies $0<V_{DS}<V_{ov}$.

### Small-signal gain

$$g_m=\beta V_{DS}\approx 5.28\ \mathrm{mS},\qquad
g_{ds}=\beta(V_{ov}-V_{DS})=0.67\ \mathrm{mS}.$$

$$A_v=-\frac{g_m}{g_{ds}+1/R_D}\approx -4.5\ \mathrm{V/V}.$$

## Grading notes

- +2 for $V_{in}\approx 1.144\ \mathrm{V}$ (within $\pm 0.01\ \mathrm{V}$) and $A_v\approx -4.5\ \mathrm{V/V}$ (within $\pm 5\%$), with triode output conductance included.
- +1 for the correct method with one slip.
- 0 for the correct $V_{in}$ with the gain calculated as $-\beta V_{DS}R_D\approx -10.6$ by omitting triode output conductance.
- −2 for asserting the saturation gain (about $-11.7$ or larger in magnitude) in triode, or finding the input by adding 50 mV directly to the boundary input to obtain 1.187 V.
