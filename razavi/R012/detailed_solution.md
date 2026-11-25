# Detailed solution - R012

**Approach:** Use the divider to find the gate-to-source voltage, include the grounded-bulk threshold shift, and apply the saturation square law only where the channel is on.

### 1. Divider, body effect, and region

For $0\le V_X\le V_{DD}=3\ \mathrm{V}$, the lower terminal is the NMOS source. Define the divider fraction $k=R_2/(R_1+R_2)$. Neglecting gate current,

$$V_{GS}=k(V_{DD}-V_X),\qquad V_{DS}=V_{DD}-V_X,\qquad V_{SB}=V_X.$$

The source rises above the grounded bulk, so

$$V_{TH}(V_X)=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_X}-\sqrt{2|\phi_F|}\right),$$

with $V_{TH0}=0.7\ \mathrm{V}$, $\gamma=0.45\ \mathrm{V^{1/2}}$, and $2|\phi_F|=0.9\ \mathrm{V}$. The threshold grows from 0.700 V at $V_X=0$ to 0.893 V at 1 V. Since $0<k<1$, $V_{DS}\ge V_{GS}>V_{GS}-V_{TH}$ when on: there is no triode segment. $I_X$ denotes the transistor drain current, excluding the divider current.

### 2. Current and intrinsic transconductance

With channel-length modulation neglected, the saturation model gives, only for $V_{GS}>V_{TH}$,

$$I_X=\frac{\beta}{2}[k(V_{DD}-V_X)-V_{TH}(V_X)]^2,\qquad g_m=\left.\frac{\partial I_X}{\partial V_{GS}}\right|_{V_{DS},V_{SB}}=\beta[k(V_{DD}-V_X)-V_{TH}(V_X)].$$

The intrinsic $g_m$ is positive. Define the dimensionless threshold sensitivity

$$\eta=\frac{dV_{TH}}{dV_X}=\frac{\gamma}{2\sqrt{2|\phi_F|+V_X}}>0.$$

Differentiating along the sweep,

$$\frac{dI_X}{dV_X}=-(k+\eta)g_m<0,\qquad \frac{dg_m}{dV_X}=-\beta(k+\eta)<0.$$

The threshold sensitivity $\eta$ decreases with $V_X$, so

$$\frac{d^2g_m}{dV_X^2}=\frac{\beta\gamma}{4(2|\phi_F|+V_X)^{3/2}}>0.$$

Thus $g_m$ has upward curvature while decreasing; it is only approximately linear. The current is square-law in overdrive, not exactly quadratic in $V_X$. Its slope vanishes at cutoff as $g_m\to0$.

### 3. Cutoff and the all-off case

If $kV_{DD}\le V_{TH0}$, the transistor is off throughout. Otherwise the decreasing function $k(V_{DD}-V_X)-V_{TH}(V_X)$ has exactly one zero on the sweep, defined by

$$k(V_{DD}-V_{X,\mathrm{off}})=V_{TH}(V_{X,\mathrm{off}}).$$

Set $u=\sqrt{2|\phi_F|+V_{X,\mathrm{off}}}$ and take the positive root of the resulting quadratic.

$$ku^2+\gamma u=k(V_{DD}+2|\phi_F|)-V_{TH0}+\gamma\sqrt{2|\phi_F|}\equiv C.$$

$$u=\frac{\sqrt{\gamma^2+4kC}-\gamma}{2k},\qquad V_{X,\mathrm{off}}=u^2-2|\phi_F|.$$

For $V_X\ge V_{X,\mathrm{off}}$, set $I_X=g_m=0$; do not extend the squared conducting expression beyond its domain. Without body effect the root would be $V_{DD}-V_{TH0}/k$. At any positive source voltage the threshold is larger than $V_{TH0}$, so body effect brings cutoff earlier.

### 4. Equal-resistor example and plot

For the plot, take $R_1=R_2$ and $\beta=1\,\mathrm{mA/V^2}$. Inserting $k=1/2$ in the cutoff equation gives $V_{X,\mathrm{off}}=1.16\,\mathrm{V}$. Omitting body effect gives $1.60\,\mathrm{V}$. At $V_X=0$, the overdrive is $1.5\,\mathrm{V}-0.7\,\mathrm{V}=0.8\,\mathrm{V}$, so $I_X=0.320\,\mathrm{mA}$ and $g_m=0.800\,\mathrm{mS}$.

![Drain current and intrinsic transconductance](/q/R012/solution-curves.svg)

The device size is illustrative. At a fixed divider ratio both quantities scale with $\beta$. The square-law model omits subthreshold leakage.
