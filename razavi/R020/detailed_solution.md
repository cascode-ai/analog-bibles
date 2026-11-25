# Detailed solution - R020

**Approach:** Solve the source-node current balance together with the body-effect law. Use the source–bulk bias to determine where the resulting transfer curve applies.

### Source-node equation and saturation

Let $V_S$ be the source voltage, $I_D$ the channel current and $I_{BS}$ the source–bulk junction current flowing from the bulk into the source. Neglect gate current. The source-node current balance is

$$I_D+I_{BS}=I_1.$$

The gate and drain are at $V_{DD}$, so $V_{DS}=V_{GS}$. The body is driven by $V_{in}$, giving

$$V_{out}=V_{GS}=V_{DD}-V_S,\qquad V_{SB}=V_{DD}-V_{out}-V_{in}.$$

For $V_{SB}\ge0$, neglect junction leakage. If the sink can maintain $I_1$ at the computed $V_S$, the conducting channel is saturated since $V_{DS}=V_{GS}\ge V_{GS}-V_{TH}$. The long-channel square law with $\lambda=0$ gives

$$I_1=\frac{\beta}{2}(V_{GS}-V_{TH})^2,\qquad
V_{ov}=\sqrt{\frac{2I_1}{\beta}},\qquad V_{out}=V_{TH}(V_{SB})+V_{ov},$$

where $V_{ov}=V_{GS}-V_{TH}$ is the positive overdrive. Use the body-effect law

$$V_{TH}(V_{SB})=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

with $V_{TH0}=0.7\,\mathrm{V}$, $\gamma=0.45\,\mathrm{V}^{1/2}$ and $2|\phi_F|=0.9\,\mathrm{V}$. An assumed physical sink requires $V_S$ above its minimum compliance voltage, which the problem does not specify.

### Slope and the zero-bias point

With $V_{ov}$ fixed, $dV_{out}=\eta\,dV_{SB}$ for $\eta=dV_{TH}/dV_{SB}=\gamma/(2\sqrt{2|\phi_F|+V_{SB}})$. Combining this relation with $dV_{SB}=-dV_{out}-dV_{in}$ gives

$$\frac{dV_{out}}{dV_{in}}=-\frac{\eta}{1+\eta},\qquad
\frac{dV_{SB}}{dV_{in}}=-\frac{1}{1+\eta}.$$

As $V_{in}$ increases, $V_{SB}$ decreases, $\eta$ increases, and $d^2V_{out}/dV_{in}^2<0$. This branch falls with a progressively steeper slope. At $V_{SB}=0$ the body and source are at the same potential, so the output and input at this point are

$$V_{out,0}=V_{TH0}+V_{ov},\qquad V_{in,0}=V_{DD}-V_{TH0}-V_{ov}.$$

For fixed $I_1$ and $\beta$, this branch applies up to that input when it lies in the sweep and the sink remains compliant.

### Source–bulk forward bias

Above the zero-bias input, the source–bulk junction is forward biased on the branch connected to the zero-bias point. Once $I_{BS}$ matters, the channel carries $I_D=I_1-I_{BS}$, so its overdrive is no longer fixed by $I_1$. There is no specified junction current law from which to compute the high-input curve or the magnitude of current diversion. The drain–bulk junction remains at zero or reverse bias because $V_{in}\le V_{DD}$.

If the junction supplies nearly all of a fixed $I_1$, the source can track the bulk with an approximately constant drop $V_F=V_{in}-V_S$ set by the junction at that current. In that limit, $V_{out}\approx V_{DD}-V_{in}+V_F$ and the slope is near $-1$. The location and extent of this regime depend on device and bias data.

### Computed curve

Take $V_{ov}=0.2\,\mathrm{V}$ for illustration. At $V_{in}=0$, solve $V_{SB}+V_{TH}(V_{SB})=V_{DD}-V_{ov}$ to obtain $V_{SB}\approx1.7890\,\mathrm{V}$ and $V_{out}\approx1.2110\,\mathrm{V}$. At the zero-bias point, $V_{in,0}=2.100\,\mathrm{V}$ and $V_{out,0}=0.900\,\mathrm{V}$. The plot solves the same equation with $V_{DD}-V_{ov}-V_{in}$ on the right for each point on the non-forward-biased branch.

![Gate–source voltage versus bulk voltage with the zero-bias point and the forward-bias region](/q/R020/solution-r020.svg)

For this example, formally continuing the fixed-channel-current equation to $V_{in}=3\,\mathrm{V}$ gives $V_{SB}\approx-0.683\,\mathrm{V}$. The magnitude $0.683\,\mathrm{V}$ is the implied forward voltage $V_{in}-V_S$ in that extrapolation. Since $V_{in}=V_{DD}$ at the endpoint, it also equals the extrapolated $V_{out}$. The shaded interval indicates where the forward-bias model is needed.
