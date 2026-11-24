# Golden Solution - R017

## Reference answer

The output is the electrical source and the input is the drain. The curve rises from the origin and levels off in saturation when $\lambda=0$.

$$V_{GS}=2\,\mathrm{V}-V_{out},\qquad V_{DS}=V_{in}-V_{out},\qquad V_{SB}=V_{out}.$$

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{out}}-\sqrt{2|\phi_F|}\right).$$

### Triode

In triode, $V_{in}<2\,\mathrm{V}-V_{TH}(V_{out})$ and the load equation is

$$\frac{V_{out}}{R_1}=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac{V_{DS}^2}{2}\right].$$

At small $V_{DS}$, close tracking requires $\beta R_1(V_{GS}-V_{TH})\gg1$.

### Saturation plateau

The plateau satisfies

$$2\,\mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})=\sqrt{\frac{2V_{out,s}}{\beta R_1}}>0.$$

The plateau begins at $V_{in,s}=2\,\mathrm{V}-V_{TH}(V_{out,s})$ and extends to 3 V. For finite $\beta R_1$, the plateau is below 1.0918 V and the transition is between 1.0918 V and 1.3 V. The upper bound equals the gate voltage minus the threshold evaluated at that bound.

![Output versus input voltage](/q/R017/solution-transfer.svg)

## Grading notes

+2: identify the electrical source at $V_{out}$; correct triode load equation at low input and transition $V_{in}=2\ \mathrm{V}-V_{TH}(V_{out})$; saturation plateau set by the load equation, flat only under $\lambda=0$; body-effect upper bound approximately 1.092 V. Do not require near-unity initial gain or a plateau close to 1.09 V without a strong-device/light-load assumption. A plateau much lower than 1.09 V is correct for small $\beta R_1$. +1: correct model and shape with body effect omitted (upper bound 1.3 V), or a minor boundary error. 0: rising-then-flat shape without the plateau-setting relation or body-effect bound. -2 (asserted as fact): wrong source leading to an inverting curve, zero output throughout, unbounded tracking, or a plateau of 2 V. Do not penalize source/drain names alone if the voltage polarity, reverse operation, body bias, and channel model are consistent.
