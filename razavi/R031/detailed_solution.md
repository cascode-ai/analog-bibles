# Detailed solution - R031

### Model and initial condition

**Approach:** Apply capacitor-voltage continuity, write the saturation charging equation including body effect, and find its zero-current limit. The plotted quantity is $V_X(t)$.

The figure places $C_1$ between the source and ground; the drain is at $V_{DD}=3\ \mathrm{V}$ and the bulk is grounded. For $t<0$, $V_{GS}=-1\ \mathrm{V}$, so $M_1$ is off and $V_X=1\ \mathrm{V}$. With no parasitic capacitive coupling, finite channel current cannot cause an instantaneous jump: $V_X(0^+)=1\ \mathrm{V}$.

Use the long-channel square-law model with $\beta=\mu_n C_{ox}W/L$, neglecting channel-length modulation and subthreshold current. For $t>0$,

$$
V_{GS}=V_{DS}=3\ \mathrm{V}-V_X,\qquad V_{SB}=V_X,
$$

so the saturation condition $V_{DS}\ge V_{GS}-V_{TH}$ holds throughout conduction.

### Charging equation and key values

The body-effect threshold and capacitor KCL are

$$
V_{TH}(V_X)=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_X}-\sqrt{2|\phi_F|}\right),
$$

$$
C_1\frac{dV_X}{dt}=I_D
=\frac{\beta}{2}\left[3\ \mathrm{V}-V_X-V_{TH}(V_X)\right]^2 .
$$

At $V_X=1\ \mathrm{V}$, substitution of $V_{TH0}=0.7\ \mathrm{V}$, $\gamma=0.45\ \mathrm{V^{1/2}}$ and $2|\phi_F|=0.9\ \mathrm{V}$ gives

$$
V_{TH}(1\ \mathrm{V})=0.8934\ \mathrm{V},\quad
I_D(0^+)=0.6123\,\beta\,\mathrm{V^2},\quad
\left.\frac{dV_X}{dt}\right|_{0^+}
=\frac{0.6123\,\beta\,\mathrm{V^2}}{C_1}.
$$

The equilibrium overdrive is zero. Solving $3\ \mathrm{V}-V_X=V_{TH}(V_X)$ gives $V_{X,\infty}=1.96520\ \mathrm{V}$ and $V_{TH}=1.03480\ \mathrm{V}$. Body effect lowers the limit from the no-body-effect result of 2.3 V.

### Shape and calculated graph

As $V_X$ rises, both $V_{GS}$ and the overdrive decrease, so the charging slope decreases. Near equilibrium, define $\Delta V=V_{X,\infty}-V_X$ and $\eta_\infty=\gamma/[2\sqrt{2|\phi_F|+V_{X,\infty}}]$. Linearizing the overdrive gives

$$
\frac{d\Delta V}{dt}\simeq-\frac{\beta(1+\eta_\infty)^2}{2C_1}(\Delta V)^2 .
$$

Consequently $\Delta V\propto1/t$ asymptotically. This statement concerns the late-time limit; the complete curve follows the nonlinear equation above.

The graph integrates that equation with example parameters $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1\ \mathrm{pF}$. It gives $V_X(1\ \mathrm{ns})=1.37323\ \mathrm{V}$ and $V_X(10\ \mathrm{ns})=1.83181\ \mathrm{V}$, with initial slope $0.6123\ \mathrm{V/ns}$. Other positive $\beta,C_1$ scale the time axis through $C_1/\beta$.

![R031: calculated source-follower charging waveform and asymptote](/q/R031/solution-waveform.svg)

**Common mistake:** A gate step does not directly add 3 V to the voltage of this grounded capacitor. The output has no jump, remains in saturation while charging, and approaches the body-effect limit rather than 3 V. Real subthreshold conduction can continue beyond the square-law cutoff limit.
