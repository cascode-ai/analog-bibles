# Detailed solution - G065

With $R=10\ \mathrm{k\Omega}$ the resistor carries a large share of the drain current, so the bias point must be solved with both the load current and the body effect, and the gain must include $g_{mb}$ and the $1/R$ conductance at the source node.

### Step 1 — Bias equations

KCL at the source node gives the drain current; saturation and the body-effect threshold (body grounded, $V_{SB}=V_O$) give the output:

$$
I_D=200\ \mu\mathrm A+\frac{V_O}{R},\qquad
V_O=3\ \mathrm V-V_t-\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}},\qquad
V_t=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_O}-\sqrt{2\phi_f}\right),
$$

with $\mu_nC_{ox}(W/L)=900\ \mu\mathrm{A/V^2}$, $\gamma=0.19\ \mathrm{V^{1/2}}$ and $2\phi_f=0.61$ V.

### Step 2 — Solve by fixed-point iteration

Because $R$ is small, $V_O$ will be well below the $R\to\infty$ value of 1.505 V; start from $V_O=1.30$ V. Then $I_D=200\ \mu\mathrm A+1.30\ \mathrm V/10\ \mathrm{k\Omega}=330\ \mu$A, and

$$
V_t=0.7+0.19\left(\sqrt{0.61+1.30}-\sqrt{0.61}\right)=0.8142\ \mathrm V,\qquad
\sqrt{\frac{2(330\ \mu\mathrm A)}{900\ \mu\mathrm{A/V^2}}}=0.8563\ \mathrm V,
$$

$$
V_O=3-0.8142-0.8563=1.3295\ \mathrm V .
$$

Further passes:

| Pass | $I_D$ (µA) | $V_t$ (V) | $V_{GS}-V_t$ (V) | new $V_O$ (V) |
|---|---|---|---|---|
| 1 | 330.0 | 0.8142 | 0.8563 | 1.3295 |
| 2 | 332.9 | 0.8162 | 0.8602 | 1.3236 |
| 3 | 332.4 | 0.8158 | 0.8594 | 1.3248 |
| 4 | 332.5 | 0.8159 | 0.8596 | 1.3246 |

So $V_O=1.325$ V, $I_D=332.5\ \mu$A ($132.5\ \mu$A of it in $R$), $V_t=0.816$ V and overdrive 0.860 V. The device is saturated: $V_{DS}=5-1.325=3.68$ V $>0.860$ V.

### Step 3 — Small-signal parameters

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(900\ \mu\mathrm{A/V^2})(332.5\ \mu\mathrm A)}=0.774\ \mathrm{mA/V},
$$

$$
\chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{0.19\ \mathrm{V^{1/2}}}{2\sqrt{0.61\ \mathrm V+1.325\ \mathrm V}}=0.0683,
\qquad g_{mb}=\chi g_m=52.8\ \mu\mathrm{A/V}.
$$

### Step 4 — Gain

With $v_{gs}=v_i-v_o$ and $v_{bs}=-v_o$, KCL at the source (only $R$ conducts small-signal current to ground, since the current source is ideal and $\lambda=0$):

$$
g_m(v_i-v_o)-g_{mb}v_o=\frac{v_o}{R}
\quad\Rightarrow\quad
\frac{v_o}{v_i}=\frac{g_mR}{1+(g_m+g_{mb})R}.
$$

$$
\frac{v_o}{v_i}=\frac{(0.774\ \mathrm{mA/V})(10\ \mathrm{k\Omega})}{1+(0.826\ \mathrm{mA/V})(10\ \mathrm{k\Omega})}=\frac{7.74}{9.26}=0.835 .
$$

Without the body effect the same bias would give $g_mR/(1+g_mR)=0.886$; the small load resistance (the 1 in the denominator) now causes most of the gain loss, more than $g_{mb}$. The answers are $V_O=1.32$ V and $v_o/v_i=0.835$.
