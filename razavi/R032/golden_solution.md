# Golden Solution - R032

## Reference answer

### Initial condition and operating region

$V_X=1\ \mathrm{V}$ for $t<0$, with $M_1$ off. The grounded capacitor voltage is continuous, so $V_X(0^+)=1\ \mathrm{V}$ without a jump. After the gate steps to 3 V, $V_{GS}-V_{TH}=2.3\ \mathrm{V}$ and $V_{DS}=V_X<2.3\ \mathrm{V}$. The transistor therefore remains in triode throughout discharge; there is no saturation ramp.

### Discharge waveform

Using $\beta=\mu_n C_{ox}W/L$ and the square-law model without parasitic capacitances,

$$
C_1\frac{dV_X}{dt}
=-\beta\left[(2.3\ \mathrm{V})V_X-\frac{V_X^2}{2}\right],
\qquad
\left.\frac{dV_X}{dt}\right|_{0^+}
=-\frac{1.8\,\beta\,\mathrm{V^2}}{C_1}.
$$

For $t\ge0$ the exact solution is

$$
V_X(t)=\frac{4.6\ \mathrm{V}}{1+3.6e^{t/\tau}},
\qquad
\tau=\frac{C_1}{\beta(2.3\ \mathrm{V})}.
$$

$V_X$ decreases continuously from 1 V toward 0 V. Its initial decay is slower than $(1\ \mathrm{V})e^{-t/\tau}$; at late times, $V_X\simeq(1.2778\ \mathrm{V})e^{-t/\tau}$. The graph uses example parameters $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1\ \mathrm{pF}$, for which $\tau=0.43478\ \mathrm{ns}$ and the initial slope is $-1.8\ \mathrm{V/ns}$.

![R032: calculated triode discharge from 1 V to 0 V with no jump](/q/R032/solution-waveform.svg)

## Grading notes

+2: $V_X$ constant at 1 V before the step, then decaying (triode, $M_1$ acting as a resistor) to 0 V with time constant ≈ $C_1R_{on}$, $R_{on} = 1/[\beta(V_{in} - V_{TH})]$. +1: correct decay but the region of operation not identified or a linear (saturation) ramp claimed at the start while the end is right. 0: mechanism right with a slip in the time constant. -2 (asserted as fact): $V_X$ rising, settling at a nonzero value, or jumping with the input.
