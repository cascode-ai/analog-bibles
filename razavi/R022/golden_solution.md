# Golden Solution - R022

## Reference answer

For the symmetric NMOS, the resistor pulls the output below 2 V: the output terminal is the source, and the gate and drain are both at 2 V. With $\lambda=0$ and negligible junction currents,

$$\frac{V_{out}}{R_1}=\frac{\beta}{2}[2\,\mathrm V-V_{out}-V_{TH}(V_{out}-V_{in})]^2,$$

$$V_{TH}(V_{SB})=0.7\,\mathrm V+\gamma[\sqrt{0.9\,\mathrm V+V_{SB}}-\sqrt{0.9\,\mathrm V}],\quad \beta=\mu_n C_{ox}W/L.$$

The positive-overdrive root is saturated because $V_{DS}=V_{GS}$. Raising the body lowers the threshold, so $V_{out}$ rises with slope $g_{mb}/(g_m+g_{mb}+1/R_1)$ between 0 and 1. The starting output depends on $\beta R_1$: 0.758 V for $10\,\mathrm{V^{-1}}$, 0.972 V for $100\,\mathrm{V^{-1}}$, and 1.092 V in the light-load limit.

For $V_{in}>V_{out}$ the source–body junction is forward biased. Its current, and eventually that of the junction to the 2-V terminal, require additional data; no unique continuation to $V_{in}=3$ V or fixed 0.7-V clamp follows from the question.

![Answer plot: transfer](/q/R022/solution-transfer.svg)

## Grading notes

+2: correct source identification, saturated MOS KCL with stated assumptions, rising output with load-dependent level, the requested sketch, and the source–body forward-bias limitation. A clearly stated load example or light-load limit is acceptable; no particular junction-region voltage is required. +1: correct rising MOS response but an essential level, equation, sketch or limitation is missing. 0: internally inconsistent model or an unexplained mixture of the channel-off and follower interpretations. −2: asserts that the channel never conducts solely because the marked source is at 2 V, or predicts a decreasing MOS response. Do not penalize an explicit statement that the junction-dominated continuation is undetermined.
