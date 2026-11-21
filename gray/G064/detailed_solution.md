# Detailed solution - G064

Now $R=100\ \mathrm{k\Omega}$ draws extra current from the source node, so both the overdrive and the threshold depend on $V_O$. Solve the bias equation by iteration, then write KCL at the source including $g_{mb}$ and the $1/R$ conductance.

### Step 1 — Bias equations

KCL at the source node: the transistor supplies the 200-µA source current plus the current in $R$,

$$
I_D=200\ \mu\mathrm A+\frac{V_O}{R}.
$$

In saturation the gate-source voltage is threshold plus overdrive, and with the body grounded $V_{SB}=V_O$:

$$
V_O=3\ \mathrm V-V_t-\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}},\qquad
V_t=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_O}-\sqrt{2\phi_f}\right),
$$

with $\mu_nC_{ox}(W/L)=900\ \mu\mathrm{A/V^2}$, $\gamma=0.19\ \mathrm{V^{1/2}}$, $2\phi_f=0.61$ V.

### Step 2 — Solve by fixed-point iteration

Start from the $R\to\infty$ solution, $V_O=1.505$ V. One representative pass: $I_D=200\ \mu\mathrm A+1.505\ \mathrm V/100\ \mathrm{k\Omega}=215.05\ \mu$A, then

$$
V_t=0.7+0.19\left(\sqrt{0.61+1.505}-\sqrt{0.61}\right)=0.8279\ \mathrm V,\qquad
\sqrt{\frac{2(215.05\ \mu\mathrm A)}{900\ \mu\mathrm{A/V^2}}}=0.6913\ \mathrm V,
$$

$$
V_O=3-0.8279-0.6913=1.4808\ \mathrm V .
$$

Repeating converges quickly:

| Pass | $I_D$ (µA) | $V_t$ (V) | $V_{GS}-V_t$ (V) | new $V_O$ (V) |
|---|---|---|---|---|
| 1 | 215.05 | 0.8279 | 0.6913 | 1.4808 |
| 2 | 214.81 | 0.8263 | 0.6909 | 1.4828 |
| 3 | 214.83 | 0.8265 | 0.6909 | 1.4826 |

So $V_O=1.483$ V, $I_D=214.8\ \mu$A, $V_t=0.826$ V. The extra 14.8 µA in $R$ raises the overdrive and lowers $V_O$ by about 22 mV relative to the $R\to\infty$ case. The device is saturated, since $V_{DS}=5-1.483=3.52$ V exceeds $V_{GS}-V_t=0.691$ V.

### Step 3 — Small-signal parameters

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(900\ \mu\mathrm{A/V^2})(214.8\ \mu\mathrm A)}=0.622\ \mathrm{mA/V},
$$

$$
\chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{0.19\ \mathrm{V^{1/2}}}{2\sqrt{0.61\ \mathrm V+1.483\ \mathrm V}}=0.0657,
\qquad g_{mb}=\chi g_m=40.8\ \mu\mathrm{A/V}.
$$

### Step 4 — Gain

With $v_{gs}=v_i-v_o$ and $v_{bs}=-v_o$, the small-signal drain current $g_m(v_i-v_o)-g_{mb}v_o$ must flow out of the source node through $R$ (the ideal current source and $\lambda=0$ add no conductance):

$$
g_m(v_i-v_o)-g_{mb}v_o=\frac{v_o}{R}
\quad\Rightarrow\quad
\frac{v_o}{v_i}=\frac{g_mR}{1+(g_m+g_{mb})R}.
$$

$$
\frac{v_o}{v_i}=\frac{(0.622\ \mathrm{mA/V})(100\ \mathrm{k\Omega})}{1+(0.663\ \mathrm{mA/V})(100\ \mathrm{k\Omega})}=\frac{62.2}{67.3}=0.924 .
$$

Both the body effect (the $g_{mb}R$ term, about 6% loss) and the finite load (the 1 in the denominator, about 1.5%) reduce the gain below one. The answers are $V_O=1.48$ V and $v_o/v_i=0.924$.
