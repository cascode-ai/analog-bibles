# Detailed solution - R026

**Approach:** Apply KCL before selecting a transistor region. The current source fixes the discharge current only over the range where its bias and the transistor model remain feasible.

### Node equations and assumptions

Call the source node S. Neglect gate current, junction currents and parasitic capacitance, and let $I_1>0$ flow toward ground as drawn. Then

$$I_X=I_1,\qquad C_1\frac{dV_X}{dt}=-I_X,$$

so $V_X=3\,\mathrm V-I_1t/C_1$. This is a straight ramp and a horizontal current trace, independent of whether the channel is saturated or in triode. It requires a realizable gate bias and sufficient current-source compliance.

Define $\beta=\mu_nC_{ox}W/L$ in $\mathrm{A/V^2}$ and take $\lambda=0$. If body effect is included, its general model is

$$V_{TH}(V_S)=V_{TH0}+\gamma[\sqrt{2|\phi_F|+V_S}-\sqrt{2|\phi_F|}],$$

with $V_{SB}=V_S$. The question gives only $V_{TH0}$, so body-dependent voltages cannot be evaluated uniquely. A fixed $V_S$ implies a fixed threshold, not necessarily $V_{TH0}$.

### Saturation and triode feasibility

In saturation,

$$I_1=\frac{\beta}{2}[V_b-V_S-V_{TH}(V_S)]^2,$$

$$V_S+V_{TH}(V_S)=V_b-\sqrt{2I_1/\beta},\qquad V_X\ge V_b-V_{TH}(V_S).$$

The source is constant in this phase. If the calculated source lies outside the current-source range, this phase is not physically available. With a stated constant threshold the crossing time is

$$t_1=\frac{C_1[3\,\mathrm V-(V_b-V_{TH})]}{I_1},$$

only when a positive-duration initial saturated phase exists. Otherwise start in triode or identify the infeasible bias.

In triode the source follows the root of

$$I_1=\beta\left\{[V_b-V_S-V_{TH}(V_S)](V_X-V_S)-\frac{(V_X-V_S)^2}{2}\right\}.$$

For constant $V_{TH}$, define $d=V_X-V_S$. The physical root is

$$d=-(V_b-V_{TH}-V_X)+\sqrt{(V_b-V_{TH}-V_X)^2+2I_1/\beta},\qquad V_S=V_X-d.$$

The source can fall while maintaining the same $I_1$; triode entry alone does not cause a current tail.

### Example and endpoint limitation

For the plotted example only, set $V_{TH}=0.7\,\mathrm V$ with no body effect, $V_b=2\,\mathrm V$, $I_1=1\,\mathrm{mA}$, $\beta=2\,\mathrm{mA/V^2}$ and $C_1=1\,\mathrm{pF}$. Saturation gives $V_S=0.3\,\mathrm V$, slope $-1\,\mathrm{V/ns}$ and $t_1=1.7\,\mathrm{ns}$. In triode, $V_X=0.8\,\mathrm V$ gives $V_S=0.18197\,\mathrm V$; the source reaches zero at $V_X=0.46934\,\mathrm V$, $t=2.53066\,\mathrm{ns}$.

The figure stops there to avoid using an unspecified forward-biased junction model. A real current source may lose regulation earlier, depending on its minimum voltage. An ideal current source with a channel-only constant-threshold model would mathematically continue the ramp; a real grounded body can instead supply current when a junction forward biases, so $I_X$ need not equal $I_1$. Neither a universal clamp voltage nor an exponential tail follows from the supplied data.

![Answer plot: voltage](/q/R026/solution-voltage.svg)

![Answer plot: current](/q/R026/solution-current.svg)
