# Detailed solution - G122

With $R_L\to\infty$, $M_1$ always carries $I_Q$, so its overdrive is constant and the gain departs from 1 only through the body effect. Write the transfer characteristic $V_i(V_o)$, find the quiescent output for $V_i=0$, and differentiate there.

### Step 1 — Transfer characteristic

$M_1$ is saturated (drain at $V_{DD}$); with channel-length modulation neglected, $I_{d1}=\tfrac12k'(W/L)_1V_{ov1}^2=I_Q$ gives

$$
V_{ov1}=\sqrt{\frac{2I_Q}{k'(W/L)_1}}=\sqrt{\frac{2(1\ \mathrm{mA})}{(200\ \mu\mathrm{A/V^2})(1000)}}=0.1\ \mathrm V.
$$

The body is at $-V_{DD}$, so $V_{SB}=V_o+V_{DD}$, and $V_i=V_o+V_t+V_{ov1}$ becomes

$$
V_i=V_o+V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{DD}+V_o}-\sqrt{2\phi_f}\right)+V_{ov1}.
$$

### Step 2 — Quiescent output

At $V_i=0$, with $2\phi_f+V_{DD}=3.1$ V and $\sqrt{2\phi_f}=0.7746\ \mathrm V^{1/2}$:

$$
V_o+0.5\sqrt{V_o+3.1}=0-0.7-0.1+0.5(0.7746)=-0.4127\ \mathrm V.
$$

With $x=\sqrt{V_o+3.1}$, i.e. $V_o=x^2-3.1$:

$$
x^2+0.5x-2.6873=0\ \Rightarrow\ x=\frac{-0.5+\sqrt{0.25+4(2.6873)}}{2}=1.4083\ \mathrm V^{1/2},\qquad V_o=x^2-3.1=-1.117\ \mathrm V.
$$

So $V_{SB}=1.383$ V, $2\phi_f+V_{SB}=1.983$ V, and $V_t=0.7+0.5(1.4083-0.7746)=1.017$ V; the check $V_i-V_o=1.117\ \mathrm V=V_t+V_{ov1}$ holds.

### Step 3 — Incremental slope at the quiescent point

Differentiating with $V_{ov1}$ constant,

$$
\frac{dV_i}{dV_o}=1+\chi,\qquad \chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{g_{mb}}{g_m},\qquad A_{vQ}=\frac1{1+\chi}.
$$

At the quiescent point,

$$
\chi=\frac{0.5\ \mathrm V^{1/2}}{2\sqrt{1.983\ \mathrm V}}=0.1775,\qquad A_{vQ}=\frac1{1.1775}=0.849.
$$

The quiescent slope is $A_{vQ}\approx0.849$, with $V_o\approx-1.117$ V. Evaluating $\chi$ at $V_o=0$ instead (0.875) would ignore the actual source-body bias of 1.38 V.
