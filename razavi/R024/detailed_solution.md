# Detailed solution - R024

**Approach:** Use the diode-connected saturation law and integrate the capacitor equation.

### Model and integration

$V_{GS}=V_{DS}=V_X$ and $V_{TH}=0.7\,\mathrm V$. With $\lambda=0$,

$$C_1\dot V_X=-\frac{\beta}{2}(V_X-V_{TH})^2.$$

For $u=V_X-0.7\,\mathrm V$ and $u_0=2.3\,\mathrm V$,

$$\frac1u=\frac1{u_0}+\frac{\beta t}{2C_1}.$$

Define $T=2C_1/(\beta u_0)$. The plotted functions are

$$V_X=0.7\,\mathrm V+\frac{2.3\,\mathrm V}{1+t/T},\qquad I_X=\frac{(2.645\,\mathrm V^2)\beta}{(1+t/T)^2}.$$

### Waveform and model limit

The initial current is $(2.645\,\mathrm V^2)\beta$; the voltage tends to 0.7 V without reaching it in finite time. The approach is hyperbolic, not exponential. Actual subthreshold current can continue the discharge below 0.7 V, but its parameters are not supplied.

![Answer plot: voltage](/q/R024/solution-voltage.svg)

![Answer plot: current](/q/R024/solution-current.svg)
