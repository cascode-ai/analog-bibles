# Golden Solution - R024

## Reference answer

With the source and gate tied to $V_X$, $V_{GS}=V_{DS}=V_X$; the device is saturated whenever it conducts. Taking $\lambda=0$ and $V_{TH}=0.7\,\mathrm V$,

$$C_1\dot V_X=-\frac{\beta}{2}(V_X-0.7\,\mathrm V)^2.$$

Let $T=2C_1/[\beta(2.3\,\mathrm V)]$. Then

$$V_X=0.7\,\mathrm V+\frac{2.3\,\mathrm V}{1+t/T},\qquad I_X=\frac{(2.645\,\mathrm V^2)\beta}{(1+t/T)^2}.$$

Thus $V_X$ approaches 0.7 V as $1/t$ and $I_X\to0$ as $1/t^2$, slower than an RC exponential. The 0.7-V endpoint is an ideal strong-inversion result; subthreshold and leakage currents are outside the supplied model.

![Answer plot: voltage](/q/R024/solution-voltage.svg)

![Answer plot: current](/q/R024/solution-current.svg)

## Grading notes

+2: diode-connected saturation, correct hyperbolic VX and IX curves with units, initial current and ideal-model endpoint. +1: correct shapes but misses the slower-than-exponential condition or a requested quantity. −2: asserts triode behavior or VX→0 in the ideal square-law model.
