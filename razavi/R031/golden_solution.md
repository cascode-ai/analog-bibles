# Golden Solution - R031

## Reference answer

### Initial value and charging

$V_X=1\ \mathrm{V}$ for $t<0$; $M_1$ is off. The capacitor is connected to ground, so $V_X(0^+)=1\ \mathrm{V}$ without a jump. After the gate steps to 3 V, the source follower charges $C_1$. Whenever it conducts, $V_{DS}=V_{GS}$ and $M_1$ is in saturation.

With $\beta=\mu_n C_{ox}W/L$ and the square-law model (neglecting channel-length modulation, subthreshold current and parasitic capacitances),

$$
V_{TH}(V_X)=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_X}-\sqrt{2|\phi_F|}\right),
\qquad
C_1\frac{dV_X}{dt}=\frac{\beta}{2}[3\ \mathrm{V}-V_X-V_{TH}(V_X)]^2 .
$$

Initially $V_{TH}=0.8934\ \mathrm{V}$ and

$$
I_D(0^+)=0.6123\,\beta\,\mathrm{V^2},
\qquad
\left.\frac{dV_X}{dt}\right|_{0^+}
=\frac{0.6123\,\beta\,\mathrm{V^2}}{C_1}.
$$

### Final value and waveform

$V_X$ rises continuously with decreasing slope toward the root of

$$
3\ \mathrm{V}-V_{X,\infty}=V_{TH}(V_{X,\infty}),
\qquad V_{X,\infty}\approx1.9652\ \mathrm{V}.
$$

The remaining voltage difference is proportional to $1/t$ at late times; this is not an RC exponential. Without body effect, the limit would be 2.3 V. The graph uses example parameters $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1\ \mathrm{pF}$; the initial slope is then $0.6123\ \mathrm{V/ns}$.

![R031: continuous rise from 1 V toward 1.9652 V, including body effect](/q/R031/solution-waveform.svg)

## Grading notes

+2: $V_X$ = 1 V before the step, rising after it with decreasing slope toward ≈ 1.97 V (±0.05 V) = $V_{DD} - V_{TH}(V_X)$, with the body effect included; never quite reaching it. +1: final value 2.3 V (body effect ignored) or the approach called exponential, otherwise right. 0: correct mechanism with a wrong final value from a slip. -2 (asserted as fact): $V_X$ jumping to 3 V or 4 V, decaying, or settling at 3 V.
