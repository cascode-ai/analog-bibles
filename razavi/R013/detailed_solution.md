# Detailed solution - R013

**Approach:** Use source-node KCL to find the floating source voltage. Distinguish intrinsic transconductance from the slope of the swept drain current.

### Model and node equation

Assume a long-channel square-law device with $\lambda=0$, an ideal current sink, and negligible junction currents. Define $\beta=\mu_n C_{ox}W/L$, source voltage $V_S$, and overdrive $V_{ov}=V_{GS}-V_{TH}$. The body-effect law is

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

Here $V_{GS}=2\,\mathrm V-V_S$, $V_{DS}=V_X-V_S$, $V_{SB}=V_S$; $V_{TH0}=0.7\,\mathrm V$, $\gamma=0.45\,\mathrm{V^{1/2}}$, and $2|\phi_F|=0.9\,\mathrm V$. Since $R_1$ connects drain to source,

$$I_X+\frac{V_X-V_S}{R_1}=I_1,\qquad
I_X=\begin{cases}
\beta(V_{ov}V_{DS}-V_{DS}^2/2),&0\le V_{DS}<V_{ov},\\
\beta V_{ov}^2/2,&V_{DS}\ge V_{ov}>0,\\
0,&V_{ov}\le0.
\end{cases}$$

These equations determine the curves for specified $R_1,I_1,\beta$ within the model's valid range.

### Region boundaries

At $V_X=0$, KCL requires $V_S<0$. The channel-only model gives triode operation and $0<I_X<I_1$; it does not require that the channel carry most of $I_1$. If $V_{DS}\ll V_{ov}$, $R_{on}\simeq1/(\beta V_{ov})$ gives $I_X\simeq I_1R_1/(R_1+R_{on})$.

Saturation starts at $V_{DS}=V_{ov}$, equivalently $V_X=2\,\mathrm V-V_{TH}(V_S)$. At this boundary, KCL gives

$$\frac{\beta}{2}V_{ov}^2+\frac{V_{ov}}{R_1}=I_1,\qquad
V_{ov}=\frac{\sqrt{1+2\beta I_1R_1^2}-1}{\beta R_1}.$$

Then solve $2\,\mathrm V-V_S-V_{TH}(V_S)=V_{ov}$ for the boundary source voltage. Saturation requires the drain voltage to be at least the gate voltage minus threshold.

At cutoff, solve $2\,\mathrm V-V_{S,off}=V_{TH}(V_{S,off})$ with the given body-effect data:

$$V_{S,off}=1.0918\,\mathrm V,\qquad V_{X,off}=1.0918\,\mathrm V+I_1R_1.$$

Above this point $I_X=g_m=0$ and $V_S=V_X-I_1R_1$. Cutoff appears in the 0–3 V sweep only if $I_1R_1\le1.9082\,\mathrm V$.

### Current slope and intrinsic transconductance

Define $G_1=1/R_1$, $g_m=\partial I_X/\partial V_{GS}$ at fixed $V_{DS},V_{BS}$, $g_{mb}=\partial I_X/\partial V_{BS}$, and $g_{ds}=\partial I_X/\partial V_{DS}$. Differentiating KCL at fixed gate and bulk gives

$$[g_{ds}+G_1](dV_X-dV_S)-(g_m+g_{mb})dV_S=0,$$

$$\frac{dI_X}{dV_X}=-\frac{G_1(g_m+g_{mb})}{g_m+g_{mb}+g_{ds}+G_1}<0.$$

Thus $I_X$ decreases while the channel conducts and approaches zero tangentially at cutoff. The requested $g_m$ is not $dI_X/dV_X$:

$$g_m=\begin{cases}\beta V_{DS},&\text{triode},\\\beta V_{ov}=\sqrt{2\beta I_X},&\text{saturation},\\0,&\text{cutoff}.\end{cases}$$

It rises as $V_{DS}=(I_1-I_X)R_1$ grows, peaks at the triode/saturation boundary, and then falls.

### Computed example and limits

For illustration only, take $I_1=1\,\mathrm{mA}$, $R_1=1\,\mathrm{k\Omega}$ and $\beta=1\,\mathrm{mA/V^2}$. At the region boundary the quadratic gives $V_{ov}=0.73205\,\mathrm V$, hence $V_X=1.20050\,\mathrm V$, $I_X=0.26795\,\mathrm{mA}$ and $g_m=0.73205\,\mathrm{mS}$. Cutoff occurs at $V_X=2.09181\,\mathrm V$.

The channel-only continuation at $V_X=0$ gives $V_S=-0.38512\,\mathrm V$, $I_X=0.61488\,\mathrm{mA}$ and $g_m=0.38512\,\mathrm{mS}$. The source–bulk junction is forward biased; without junction parameters one cannot certify negligible current. The dashed interval ends at $V_X=0.48616\,\mathrm V$, where $V_S=0$. A physical ground-referenced current sink also needs compliance voltage; negative $V_S$ is not guaranteed realizable. The low-input continuation is conditional, not a verified physical prediction.

![Model curves and validity limits](/q/R013/solution-r013.svg)
