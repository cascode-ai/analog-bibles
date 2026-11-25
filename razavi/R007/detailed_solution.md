# Detailed solution - R007

**Approach:** Identify the source on each side of 1 V, apply body effect and the operating-region conditions, then assign the sign from the current arrow.

### Model and source selection

Use $\beta=\mu_nC_{ox}W/L$ and neglect channel-length modulation. The lower-potential channel terminal is the source. With the bulk grounded:

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

The long-channel relations for positive drain current and the positive magnitude of gate transconductance are:

$$\begin{aligned}
\text{Triode:}\quad&I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\tfrac12V_{DS}^2\right],&&g_m=\beta V_{DS},\\
\text{Saturation:}\quad&I_D=\tfrac12\beta(V_{GS}-V_{TH})^2,&&g_m=\beta(V_{GS}-V_{TH}).
\end{aligned}$$

### Below 1 V: region, sign and curve shape

The $V_X$ terminal is the source. Substitution gives, with voltages in V:

$$V_{GS}=1.9-V_X,\qquad V_{DS}=1-V_X,\qquad V_{SB}=V_X,$$
$$V_{TH}=0.7+0.45\left(\sqrt{0.9+V_X}-\sqrt{0.9}\right).$$

The triode condition $V_{DS}<V_{GS}-V_{TH}$ reduces to $V_{TH}<0.9$ V. Threshold increases from $0.700$ V to $0.893375$ V, so the device is on and in triode throughout $0\le V_X<1$ V.

Current flows from the 1-V terminal toward $V_X$, opposite the arrow:

$$I_X=-\beta\left[(1.9-V_X-V_{TH})(1-V_X)-\tfrac12(1-V_X)^2\right],\qquad g_m=\beta(1-V_X).$$

For a representative substitution, at $V_X=0.5$ V the threshold is $0.80554$ V, giving $I_X/\beta=-0.17223$ V² and $g_m/\beta=0.5$ V. At $V_X=0$, the corresponding values are $-0.700$ V² and $1$ V.

Differentiating the signed current yields:

$$\frac{dI_X}{dV_X}=\beta\left[V_{GS}-V_{TH}+\frac{\gamma V_{DS}}{2\sqrt{2|\phi_F|+V_{SB}}}\right]>0.$$

Both terms decrease over this interval, so current rises toward zero with decreasing slope. Gate transconductance decreases linearly; it is distinct from this sweep slope.

### Above 1 V: short triode interval and saturation

The 1-V terminal becomes the source, and current now follows the arrow:

$$V_{GS}=0.9\ \mathrm V,\quad V_{SB}=1\ \mathrm V,\quad V_{DS}=V_X-1\ \mathrm V,\quad I_X=I_D.$$

Substituting $V_{SB}=1$ V in the threshold formula gives $V_{TH}=0.893375$ V. Define the fixed overdrive $V_{ov}=V_{GS}-V_{TH}\approx0.006625$ V. For $0<V_{DS}<V_{ov}$:

$$I_X=\beta\left[V_{ov}(V_X-1)-\tfrac12(V_X-1)^2\right],\qquad g_m=\beta(V_X-1).$$

At $V_{DS}=V_{ov}$, or $V_X\approx1.006625$ V, saturation starts. Thereafter:

$$\frac{I_X}{\beta}=\tfrac12V_{ov}^2\approx2.195\times10^{-5}\ \mathrm{V^2},\qquad \frac{g_m}{\beta}=V_{ov}\approx0.006625\ \mathrm V.$$

Both quantities vanish at $V_X=1$ V and join continuously to these small positive plateaus. The tiny overdrive lies outside reliable strong-inversion square-law accuracy; weak-inversion current requires a more complete model.

### Required plots and conclusion

The current and gate transconductance each have their own axes; the lower panels resolve the short triode interval. For display only, $\beta=1\ \mathrm{mA/V^2}$; all current and transconductance ordinates scale linearly with $\beta$.

![R007: current and gate transconductance, full sweep and enlarged transition](/q/R007/solution-curves.svg)

Without body effect, the same region test gives $V_{ov}=0.200$ V, saturation from $V_X=1.2$ V, $I_X/\beta=0.020$ V² and $g_m/\beta=0.200$ V. This explains the alternative result allowed in the grading notes.
