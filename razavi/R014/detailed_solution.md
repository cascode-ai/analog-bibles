# Detailed solution - R014

**Approach:** Solve the source-node current balance with the body-dependent threshold. Use the result to select the operating region and compute the transistor's intrinsic transconductance.

### Source-node equation and model

Let $V_S$ be the source-node voltage. An ideal sink draws $I_1>0$, and the gate current is neglected. With junction currents neglected, KCL gives

$$I_X+\frac{V_G-V_S}{R_1}=I_1.$$

The figure has $V_G=V_X$, drain at $2\,\mathrm V$, and bulk at ground. Thus $V_{GS}=V_X-V_S$, $V_{DS}=2\,\mathrm V-V_S$ and $V_{SB}=V_S$. Use the long-channel square law with $\lambda=0$. For nonnegative $V_{SB}$ the threshold is

$$V_{TH}(V_S)=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_S}-\sqrt{2|\phi_F|}\right),$$

where $V_{TH0}=0.7\,\mathrm V$, $\gamma=0.45\,\mathrm{V}^{1/2}$ and $2|\phi_F|=0.9\,\mathrm V$. Define $V_{ov}=V_{GS}-V_{TH}$ and $g_m=\partial I_X/\partial V_{GS}$ at fixed $V_{DS}$ and $V_{SB}$.

### Saturation and triode

When $V_{DS}\ge V_{ov}>0$, the square law gives $I_X=\beta V_{ov}^2/2$ and $g_m=\beta V_{ov}$. Inserting the saturation current into KCL gives

$$\frac{\beta R_1}{2}V_{ov}^2+V_{ov}=I_1R_1-V_{TH}(V_S).$$

For a trial $V_S$ with $I_1R_1>V_{TH}(V_S)$, take the positive root.

$$V_{ov}=\frac{\sqrt{1+2\beta R_1[I_1R_1-V_{TH}(V_S)]}-1}{\beta R_1}.$$

Use $V_X=V_S+V_{TH}+V_{ov}$ to recover the input. If $V_{TH}$ is held fixed, the equation fixes $V_{ov}$ and both curves are flat while saturation holds.

The saturation boundary follows from $V_{DS}=V_{ov}$, or $V_X=2\,\mathrm V+V_{TH}(V_S)$. If $0<V_{DS}<V_{ov}$, solve KCL using the triode law and its gate derivative

$$I_X=\beta\left(V_{ov}V_{DS}-\frac{V_{DS}^2}{2}\right),\qquad g_m=\beta V_{DS}.$$

The current and $g_m$ are continuous at this boundary. With the specified body effect, a node voltage above the fixed $2\,\mathrm V$ terminal cannot support reverse channel conduction. The lower terminal would then be at $2\,\mathrm V$, where the threshold is about $1.039\,\mathrm V$, and its gate overdrive is negative even at $V_X=3\,\mathrm V$.

### Sweep slopes and cutoff

Define $\eta=dV_{TH}/dV_S>0$ and $g_{ds}=\partial I_X/\partial V_{DS}$ at fixed $V_{GS},V_{SB}$. Here $g_{ds}=0$ in saturation and $g_{ds}=\beta(V_{ov}-V_{DS})$ in triode. Differentiate KCL using $dV_{GS}=dV_X-dV_S$ and $dV_{DS}=-dV_S$.

$$\frac{dV_S}{dV_X}=\frac{1+R_1g_m}{1+R_1[g_m(1+\eta)+g_{ds}]},\qquad
\frac{dI_X}{dV_X}=-\frac{\eta g_m+g_{ds}}{1+R_1[g_m(1+\eta)+g_{ds}]}.$$

The source rises and the current decreases in both conducting regions. In saturation, $g_m=\sqrt{2\beta I_X}$ also decreases. In triode it decreases because $V_{DS}$ falls. The current can change appreciably when $I_1R_1$ is close to the threshold.

At cutoff $I_X=g_m=0$, so $V_{GS}=I_1R_1$. If the resulting $V_S=V_X-I_1R_1$ is nonnegative and $I_1R_1\le V_{TH}(V_S)$, the off solution applies. Since $V_{TH}$ increases with $V_S$, an initially conducting channel cuts off within the nonnegative-source portion of the sweep if it reaches equality there. For a positive $V_S$ at cutoff within the sweep, this means $0.7\,\mathrm V<I_1R_1\le 1.0348\,\mathrm V$ (upper endpoint rounded), where the upper endpoint solves $I_1R_1=V_{TH}(3\,\mathrm V-I_1R_1)$. If $I_1R_1\le0.7\,\mathrm V$, the channel is off throughout the portion with $V_S\ge0$.

### Computed curves and model limits

For the cutoff example use $I_1=0.1\,\mathrm{mA}$, $R_1=9\,\mathrm{k\Omega}$ and $\beta=2\,\mathrm{mA/V^2}$. With $V_S=0$, the saturation equation gives $V_{ov}=0.1035\,\mathrm V$, so $V_X=0.8035\,\mathrm V$, $I_X=0.01072\,\mathrm{mA}$ and $g_m=0.2071\,\mathrm{mS}$. At cutoff, $V_{TH}(V_S)=0.9\,\mathrm V$ gives $V_S=1.0408\,\mathrm V$ and $V_X=1.9408\,\mathrm V$.

For the triode example use $I_1=1\,\mathrm{mA}$, $R_1=2.5\,\mathrm{k\Omega}$ and $\beta=0.4\,\mathrm{mA/V^2}$. Solving the same KCL equation with $V_{DS}=V_{ov}$ gives entry into triode at $V_X=2.8840\,\mathrm V$. At 3 V, the triode solution gives $V_S=1.0477\,\mathrm V$, $I_X=0.2191\,\mathrm{mA}$ and $g_m=0.3809\,\mathrm{mS}$.

![Drain current versus input voltage for two parameter sets](/q/R014/solution-r014.svg)

![Intrinsic transconductance versus input voltage for the same parameter sets](/q/R014/solution-r014-gm.svg)

The shaded sections show where the ideal current balance would require negative $V_S$. The source–bulk junction is then forward biased. Its current depends on diode parameters, and the real sink also requires compliance voltage. The plotted branches assume negligible junction current and an ideal sink for $V_S\ge0$. A real sink may require additional headroom even there.
