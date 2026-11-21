# Detailed solution - G123

With $R_L\to\infty$, $M_1$ always carries $I_Q$, so its overdrive is constant and the slope of the transfer characteristic is set by the body effect alone. Write $V_i(V_o)$, solve for $V_o$ at the negative input peak, and differentiate there.

### Step 1 — Transfer characteristic

$M_1$ is saturated (drain at $V_{DD}$); with channel-length modulation neglected, $I_{d1}=\tfrac12k'(W/L)_1V_{ov1}^2=I_Q$ gives

$$
V_{ov1}=\sqrt{\frac{2I_Q}{k'(W/L)_1}}=\sqrt{\frac{2(1\ \mathrm{mA})}{(200\ \mu\mathrm{A/V^2})(1000)}}=0.1\ \mathrm V.
$$

With the body at $-V_{DD}$, $V_{SB}=V_o+V_{DD}$, and $V_i=V_o+V_t+V_{ov1}$ becomes

$$
V_i=V_o+V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{DD}+V_o}-\sqrt{2\phi_f}\right)+V_{ov1}.
$$

### Step 2 — Output at the negative input peak

At $V_i=V_I-\hat v_i=-0.5$ V, with $2\phi_f+V_{DD}=3.1$ V and $\sqrt{2\phi_f}=0.7746\ \mathrm V^{1/2}$:

$$
V_o+0.5\sqrt{V_o+3.1}=-0.5-0.7-0.1+0.5(0.7746)=-0.9127\ \mathrm V.
$$

With $x=\sqrt{V_o+3.1}$:

$$
x^2+0.5x-2.1873=0\ \Rightarrow\ x=\frac{-0.5+\sqrt{0.25+4(2.1873)}}{2}=1.2499\ \mathrm V^{1/2},\qquad V_o=x^2-3.1=-1.538\ \mathrm V.
$$

Here $V_{SB}=0.962$ V and $V_t=0.7+0.5(1.2499-0.7746)=0.938$ V; the check $V_i-V_o=1.038\ \mathrm V=V_t+V_{ov1}$ holds.

### Step 3 — Incremental slope

Differentiating with $V_{ov1}$ constant,

$$
A_v^-=\frac{dV_o}{dV_i}=\frac1{1+\chi},\qquad \chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{0.5\ \mathrm V^{1/2}}{2(1.2499\ \mathrm V^{1/2})}=0.200,
$$
$$
A_v^-=\frac1{1.200}=0.833.
$$

So $A_v^-\approx0.833$ at $V_i=-0.5$ V ($V_o\approx-1.538$ V). It is lower than the quiescent slope (about 0.849) because the smaller source-body voltage makes $\sqrt{2\phi_f+V_{SB}}$ smaller and the body effect relatively stronger.
