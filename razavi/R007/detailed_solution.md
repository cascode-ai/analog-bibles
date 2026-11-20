# Detailed solution - R007

**Approach:** Split the sweep at $V_X=1$ V, identify source, body-effect threshold and operating region on each side, and assign current sign from the arrow.

### Step 1 — Source and threshold

The lower-potential NMOS terminal is the source: the $V_X$ terminal below 1 V and the 1-V terminal above it. With the bulk grounded:

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

Substituting the given parameters gives (voltages in V in numerical expressions):

$$V_{TH}=0.7+0.45\left(\sqrt{0.9+V_{SB}}-\sqrt{0.9}\right).$$

### Step 2 — Operating region below 1 V

$$V_{GS}=1.9-V_X,\qquad V_{DS}=1-V_X,\qquad V_{SB}=V_X.$$

The triode condition $V_{DS}<V_{GS}-V_{TH}$ reduces to $V_{TH}<0.9$ V. The threshold increases monotonically, with:

$$V_{TH}(0)=0.700\ \mathrm V,\qquad V_{TH}(1\ \mathrm V)=0.893375\ \mathrm V<0.9\ \mathrm V.$$

Thus the device is on and in triode over $0\le V_X<1$ V.

### Step 3 — Current and transconductance below 1 V

The general triode relations are:

$$I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac12V_{DS}^2\right],\qquad g_m=\beta V_{DS}.$$

Channel current flows from the 1-V terminal to the $V_X$ terminal, opposite the $I_X$ arrow, so:

$$I_X=-I_D=-\beta[(1.9-V_X-V_{TH})(1-V_X)-\tfrac12(1-V_X)^2],$$
$$g_m=\beta(1-V_X).$$

Substitution gives the key points in the reference-answer table. In particular, at $V_X=0.75$ V, $I_X/\beta=-0.043468\ldots$ V², rounding to −0.04347 V².

**Curve shape:** Differentiate the signed current:

$$\frac{dI_X}{dV_X}=\beta\left[V_{GS}-V_{TH}+\frac{\gamma V_{DS}}{2\sqrt{2|\phi_F|+V_{SB}}}\right]>0.$$

Both terms in brackets decrease as $V_X$ rises. Current therefore rises from negative values to zero with decreasing slope, while $g_m$ decreases linearly to zero. Here $g_m$ is the positive magnitude of device gate transconductance, distinct from the signed current's sweep slope.

### Step 4 — Short triode interval and saturation after the source swap

For $V_X>1$ V:

$$V_{GS}=0.9\ \mathrm V,\qquad V_{SB}=1\ \mathrm V,\qquad V_{DS}=V_X-1\ \mathrm V.$$

The threshold is fixed, so the overdrive $V_{ov}=V_{GS}-V_{TH}\approx0.006625$ V is fixed. Initially $0<V_{DS}<V_{ov}$, giving a short triode interval:

$$I_X=\beta\left[V_{ov}(V_X-1)-\frac12(V_X-1)^2\right],\qquad g_m=\beta(V_X-1).$$

For $V_{DS}\ge V_{ov}$, or $V_X\gtrsim1.006625$ V, the device saturates:

$$I_X=\frac12\beta V_{ov}^2,\qquad g_m=\beta V_{ov}.$$

Substitution gives plateau values $I_X/\beta\approx2.195\times10^{-5}$ V² and $g_m/\beta\approx0.006625$ V. These are small, positive values. With only about 6.6 mV of overdrive, the square law is a formal estimate and cannot accurately predict the actual subthreshold current.

### Step 5 — Curves and comparison without body effect

![R007: normalized current and gate transconductance](/q/R007/review-curves.svg)

The full sweep retains the zero crossing at 1 V, the short triode interval above it and the small positive plateau. The latter features are tiny on the main plot; use the piecewise equations for their exact extent.

Without body effect the fixed overdrive is 0.200 V, saturation begins at 1.2 V, and the plateau values are $I_X/\beta=0.020$ V² and $g_m/\beta=0.200$ V.
