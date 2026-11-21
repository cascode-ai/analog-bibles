# Detailed solution - G121

With $R_L\to\infty$, $M_1$ always carries $I_Q$, so its overdrive is constant and the only nonlinearity is the body effect: the source-bulk voltage, and hence $V_t$, rises with $V_o$. Write the transfer characteristic $V_i(V_o)$, solve for $V_o$ at the input peak, and differentiate.

### Step 1 — Transfer characteristic

$M_1$ is in saturation (its drain is at $V_{DD}$), and with channel-length modulation neglected

$$
I_{d1}=\frac{k'}{2}\left(\frac WL\right)_1V_{ov1}^2=I_Q\ \Rightarrow\ V_{ov1}=\sqrt{\frac{2I_Q}{k'(W/L)_1}}=\sqrt{\frac{2(1\ \mathrm{mA})}{(200\ \mu\mathrm{A/V^2})(1000)}}=0.1\ \mathrm V.
$$

The body is at $-V_{DD}$, so $V_{SB}=V_o+V_{DD}$, and $V_i=V_o+V_{gs1}=V_o+V_t+V_{ov1}$ gives

$$
V_i=V_o+V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{DD}+V_o}-\sqrt{2\phi_f}\right)+V_{ov1}.
$$

### Step 2 — Output at the positive input peak

At $V_i=V_I+\hat v_i=0.5$ V, substituting the numbers ($2\phi_f+V_{DD}=3.1$ V, $\sqrt{2\phi_f}=0.7746\ \mathrm V^{1/2}$):

$$
V_o+0.5\sqrt{V_o+3.1}=0.5-0.7-0.1+0.5(0.7746)=0.0873\ \mathrm V.
$$

Let $x=\sqrt{V_o+3.1}$, so $V_o=x^2-3.1$:

$$
x^2+0.5x-3.1873=0\ \Rightarrow\ x=\frac{-0.5+\sqrt{0.25+4(3.1873)}}{2}=1.5527\ \mathrm V^{1/2},
$$
$$
V_o=x^2-3.1=-0.689\ \mathrm V.
$$

At this point $V_{SB}=1.811$ V and $V_t=0.7+0.5(1.5527-0.7746)=1.089$ V; indeed $V_i-V_o=1.189\ \mathrm V=V_t+V_{ov1}$.

### Step 3 — Incremental slope

Differentiating the transfer characteristic with $V_{ov1}$ constant:

$$
\frac{dV_i}{dV_o}=1+\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=1+\chi,\qquad A_v^+=\frac{dV_o}{dV_i}=\frac1{1+\chi}.
$$

This is the familiar follower gain $g_m/(g_m+g_{mb})$ with $\chi=g_{mb}/g_m$, since with $R_L\to\infty$ and no channel-length modulation the load and $r_o$ drop out. At the peak,

$$
\chi=\frac{0.5\ \mathrm V^{1/2}}{2(1.5527\ \mathrm V^{1/2})}=0.161,\qquad A_v^+=\frac1{1.161}=0.861.
$$

So $A_v^+\approx0.861$ at $V_i=+0.5$ V ($V_o\approx-0.689$ V). The slope is below 1 because of the body effect alone, and it increases slowly as $V_o$ rises, since $\chi$ falls with growing $V_{SB}$.
