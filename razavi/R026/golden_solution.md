# Golden Solution - R026

## Reference answer

While the series source can sink $I_1>0$ and body-junction currents are negligible, source-node KCL forces

$$I_X=I_1,\qquad V_X(t)=3\,\mathrm V-\frac{I_1}{C_1}t.$$

The ramp does not change slope merely because $M_1$ enters triode. The source voltage adjusts to carry $I_1$. With $\lambda=0$, $\beta=\mu_nC_{ox}W/L$, initial saturation, and a feasible bias,

$$V_S+V_{TH}(V_S)=V_b-\sqrt{2I_1/\beta},\qquad V_X\ge V_b-V_{TH}(V_S).$$

For an explicitly constant threshold, the transition is at $V_X=V_b-V_{TH}$; a larger gate bias can put the device in triode from the start. Body-effect parameters, source compliance and junction parameters are unspecified. Consequently a universal ending at 0 V or −0.7 V, and the late-time $I_X$, cannot be determined. The illustrated constant-threshold example ends conservatively at $V_S=0$; it is not a predicted physical stopping point.

![Answer plot: voltage](/q/R026/solution-voltage.svg)

![Answer plot: current](/q/R026/solution-current.svg)

## Grading notes

+2: conditional KCL IX=I1, linear VX with slope −I1/C1 while the series path is feasible, a sketch of both requested quantities, and a clear distinction between channel-region transition and loss of source regulation or onset of body-junction current. A stated parameter example is acceptable; unspecified endpoint behavior may be explicitly left undetermined. +1: correct ramp but missing a requested quantity, feasibility condition or endpoint limitation. 0: claims that current must decay immediately upon M1 entering triode while I1 still regulates. −2: asserts an initial RC exponential for a feasible constant-current interval or a universal stopping level Vb−VTH. Do not require a 0-V or −0.7-V endpoint without an additional model.
