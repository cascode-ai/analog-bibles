# Detailed solution - R006

**Approach:** Use the diode connection to identify the operating region, then obtain current and gate transconductance from the body-effect threshold. Derivatives explain the curve shapes.

### Step 1 — Terminal voltages and operating region

The $V_X$ terminal is always below 3 V and is the source; the bulk is grounded:

$$V_{GS}=V_{DS}=V_{DD}-V_X,\qquad V_{SB}=V_X,\qquad I_X=I_D.$$

With gate and drain tied and a positive threshold, conduction implies $V_{DS}\ge V_{GS}-V_{TH}$, hence saturation.

### Step 2 — Body-effect threshold

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

Substituting the given parameters gives (voltages in V in numerical expressions):

$$V_{TH}(V_X)=0.7+0.45\left(\sqrt{0.9+V_X}-\sqrt{0.9}\right).$$

As the source rises, source–bulk reverse bias increases and the threshold rises from 0.700 V to about 0.970 V.

### Step 3 — Current and gate transconductance

Neglect CLM and use $\beta=\mu_nC_{ox}W/L$:

$$I_D=\frac12\beta(V_{GS}-V_{TH})^2,\qquad g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS},V_{SB}}=\beta(V_{GS}-V_{TH}).$$

Substituting the terminal voltages gives:

$$\frac{I_X}{\beta}=\frac12[V_{DD}-V_X-V_{TH}(V_X)]^2,\qquad
\frac{g_m}{\beta}=V_{DD}-V_X-V_{TH}(V_X).$$

The overdrive decreases monotonically and reaches its minimum, 0.530 V, at the sweep endpoint. It stays positive, confirming conduction and saturation throughout. Normalized current falls from 2.645 V² to 0.140 V², and normalized transconductance from 2.300 V to 0.530 V. No device dimensions need to be assumed.

### Step 4 — Sweep slope versus gate transconductance

Sweeping the source changes both $V_{GS}$ and $V_{SB}$. The threshold equation and chain rule give:

$$\frac{dV_{TH}}{dV_X}=\frac{\gamma}{2\sqrt{2|\phi_F|+V_X}},$$
$$\frac{dI_X}{dV_X}=-g_m\left(1+\frac{\gamma}{2\sqrt{2|\phi_F|+V_X}}\right)<0,$$
$$\frac{dg_m}{dV_X}=-\beta\left(1+\frac{\gamma}{2\sqrt{2|\phi_F|+V_X}}\right)<0.$$

Both curves decrease. The slope of $g_m$ varies little, so it is nearly linear; the current decreases progressively less steeply and is convex. The negative sweep slope $dI_X/dV_X$ is distinct from the positive gate transconductance $g_m$.

### Step 5 — Curves and key points

![R006: normalized current and gate transconductance](/q/R006/review-curves.svg)

The vertical axes are $I_X/\beta$ (V²) and $g_m/\beta$ (V); endpoints and decreasing trends agree with the equations above.

### Step 6 — Cutoff beyond the sweep

The cutoff condition $V_{GS}=V_{TH}$ is:

$$V_{DD}-V_X=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_X}-\sqrt{2|\phi_F|}\right).$$

Substituting the given parameters and solving gives $V_X\approx1.965$ V, beyond the 1.5-V sweep endpoint. Without body effect, cutoff would occur at $V_X=V_{DD}-V_{TH0}=2.3$ V; at 1.5 V, $I_X/\beta=0.320$ V² and $g_m/\beta=0.800$ V. Body effect reduces the endpoint current by more than half.
