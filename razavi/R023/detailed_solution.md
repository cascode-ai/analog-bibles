# Detailed solution - R023

**Approach:** Use the fixed gate overdrive to select the initial region, then integrate the capacitor equation in each region.

### Model and initial-region selection

The source and body are grounded, so $V_{GS}=V_b$, $V_{DS}=V_X$ and $V_{TH}=V_{TH0}=0.7\,\mathrm V$. Define $\beta=\mu_nC_{ox}W/L$ in $\mathrm{A/V^2}$ and $U=V_b-V_{TH}$. With $\lambda=0$ and no leakage, the long-channel model is

$$I_X=\begin{cases}0,&U\le0,\\ \beta U^2/2,&U>0,\ V_X\ge U,\\ \beta(UV_X-V_X^2/2),&U>0,\ 0\le V_X<U.\end{cases}$$

The current arrow leaves the capacitor, hence $C_1 dV_X/dt=-I_X$. For $U\le0$ the ideal initial voltage stays at 3 V. For $U\ge3\,\mathrm V$ the initial point is already in triode (at the boundary if equal).

### Initial saturation when $0<U<3\,\mathrm V$

The saturation current is constant, so

$$V_X=3\,\mathrm V-\frac{\beta U^2}{2C_1}t,\qquad t_1=\frac{2C_1(3\,\mathrm V-U)}{\beta U^2}.$$

At $t_1$, $V_X=U$ and both current laws give $\beta U^2/2$. Thus the voltage slope has no corner. If $U\ge3\,\mathrm V$, set $t_1=0$ and omit this phase.

### Exact triode solution and late tail

Let $V_a$ be the voltage at entry to triode: $V_a=U$ after saturation, or $V_a=3\,\mathrm V$ for initial triode. Separating $C_1\dot V_X=-\beta V_X(U-V_X/2)$ gives

$$\ln\!\left[\frac{V_X/(2U-V_X)}{V_a/(2U-V_a)}\right]=-\frac{t-t_1}{\tau},\qquad\tau=\frac{C_1}{\beta U}.$$

Writing $A=V_a/(2U-V_a)$ and $E=e^{-(t-t_1)/\tau}$,

$$V_X=\frac{2UAE}{1+AE},\qquad I_X=\frac{2\beta U^2AE}{(1+AE)^2}.$$

For $AE\ll1$, $V_X$ has an exponential tail with $R_{on}=1/(\beta U)$. It tends to zero, not to $U$; the gate remains above threshold throughout. In the saturation-entry case $A=1$, so $I_X(t_1)=\beta U^2/2$ and the current also joins smoothly.

### Sketches and representative values

For the plotted example $\beta=1\,\mathrm{mA/V^2}$, $C_1=1\,\mathrm{pF}$, $V_b=1.7\,\mathrm V$, we have $U=1\,\mathrm V$, $I_{sat}=0.5\,\mathrm{mA}$, $t_1=4\,\mathrm{ns}$ and $\tau=1\,\mathrm{ns}$. At 5 ns the exact triode solution gives $V_X=0.53788\,\mathrm V$ and $I_X=0.39322\,\mathrm{mA}$. The other plotted gates show cutoff, the $t_1=0$ boundary, and initial triode; they are examples, not given values. Subthreshold leakage is outside this ideal model.

![Answer plot: voltage](/q/R023/solution-voltage.svg)

![Answer plot: current](/q/R023/solution-current.svg)
