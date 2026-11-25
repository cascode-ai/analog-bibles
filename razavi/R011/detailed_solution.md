# Detailed solution - R011

**Approach:** Determine the gate voltage from the unloaded divider, check the PMOS operating region, then obtain $I_X$ and the positive intrinsic $g_m$ from the saturation model.

### 1. Divider and operating region

The upper terminal is the PMOS source for $0\le V_X\le V_{DD}=3\ \mathrm{V}$. The source and bulk coincide, so $|V_{TH}|=0.8\ \mathrm{V}$ has no body-effect shift. Define the divider fraction $k=R_1/(R_1+R_2)$, with $0<k<1$ for positive resistors. Define $I_R$ as the divider current from $V_{DD}$ toward $V_X$. With zero gate current,

$$I_R=\frac{V_{DD}-V_X}{R_1+R_2},\qquad V_{SG}=I_RR_1=k(V_{DD}-V_X),\qquad V_{SD}=V_{DD}-V_X.$$

Because $V_{SD}\ge V_{SG}$, the saturation inequality $V_{SD}\ge V_{SG}-|V_{TH}|$ is satisfied whenever $V_{SG}>|V_{TH}|$. There is no triode segment. The marked $I_X$ is the channel current, excluding $I_R$.

### 2. Conducting interval and cutoff

The conduction condition $k(V_{DD}-V_X)>|V_{TH}|$ gives

$$V_{X,\mathrm{off}}=V_{DD}-\frac{|V_{TH}|}{k}.$$

If $kV_{DD}\le|V_{TH}|$, the whole sweep is off. Otherwise the conducting interval is $0\le V_X<V_{X,\mathrm{off}}$; at and above cutoff, the ideal model gives $I_X=g_m=0$.

### 3. Current and intrinsic transconductance

For the conducting branch, neglect channel-length modulation. Apply the saturation square law and take its gate derivative at fixed $V_{SD}$ and fixed bulk bias.

$$I_X=\frac{\beta_p}{2}(V_{SG}-|V_{TH}|)^2,\qquad
g_m=\left.\frac{\partial I_X}{\partial V_{SG}}\right|_{V_{SD},V_{SB}}
=\beta_p(V_{SG}-|V_{TH}|).$$

Substituting the divider relation gives the overdrive $V_{SG}-|V_{TH}|=k(V_{DD}-V_X)-|V_{TH}|$. Thus $g_m$ is positive and the two curves have slopes

$$\frac{dg_m}{dV_X}=-\beta_p k,\qquad \frac{dI_X}{dV_X}=-k g_m.$$

The current falls with positive curvature $d^2I_X/dV_X^2=\beta_p k^2$ and joins the zero-current segment tangentially. The transconductance joins its zero segment with a change of slope.

### 4. Example and sketch

For the plot, take $R_1=R_2$ and $\beta_p=1\,\mathrm{mA/V^2}$. Cutoff is at $1.4\,\mathrm{V}$. At $V_X=0$, the overdrive is $1.5\,\mathrm{V}-0.8\,\mathrm{V}=0.7\,\mathrm{V}$, so $I_X=0.245\,\mathrm{mA}$ and $g_m=0.700\,\mathrm{mS}$.

![Drain current and intrinsic transconductance](/q/R011/solution-curves.svg)

The device size is illustrative. At a fixed divider ratio both quantities scale with $\beta_p$. The square-law model omits subthreshold leakage.
