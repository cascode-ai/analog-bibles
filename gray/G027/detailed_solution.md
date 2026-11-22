# Detailed solution - G027

Differentiate the active-region current of the velocity-saturated gradual-channel model with respect to $V_{GS}$, and compare with the square-law $g_m$. Both scale with $C_{ox}$, which here grows as $1/L$ because $t_{ox}=L/50$; their ratio depends only on $V_{ov}/(\mathcal E_cL)$, which sets the accuracy limit.

### Step 1 — Active-region current with velocity saturation

Integrating $I_D=WC_{ox}[V_{ov}-V(y)]\,v_d$ along the channel with $v_d=\mu_n\mathcal E/(1+\mathcal E/\mathcal E_c)$ gives the triode current $I_D=\tfrac12\mu_nC_{ox}(W/L)(2V_{ov}V_{DS}-V_{DS}^2)/[1+V_{DS}/(\mathcal E_cL)]$. Its maximum, which is the active-region current, is reached at

$$
V_{DS(act)}=\mathcal E_cL\left(\sqrt{1+u}-1\right),\qquad u=\frac{2V_{ov}}{\mathcal E_cL},\qquad
I_D=\frac12\mu_nC_{ox}\frac WLV_{DS(act)}^2 .
$$

### Step 2 — Transconductance with and without velocity saturation

Since $dV_{DS(act)}/dV_{ov}=1/\sqrt{1+u}$,

$$
g_m=\frac{dI_D}{dV_{ov}}=\mu_nC_{ox}\frac WL\frac{V_{DS(act)}}{\sqrt{1+u}}=WC_{ox}\mu_n\mathcal E_c\,\frac{\sqrt{1+u}-1}{\sqrt{1+u}} .
$$

Without velocity saturation, $g_{m0}=\mu_nC_{ox}(W/L)V_{ov}$. The ratio is

$$
\frac{g_m}{g_{m0}}=\frac2u\cdot\frac{\sqrt{1+u}-1}{\sqrt{1+u}}\approx1-\frac32\frac{V_{ov}}{\mathcal E_cL}\quad(u\ll1),
$$

independent of $C_{ox}$. With $C_{ox}=\epsilon_{ox}/t_{ox}=50\epsilon_{ox}/L$, $g_{m0}\propto1/L^2$.

### Step 3 — Numerical values

At $L=1\ \mu$m: $t_{ox}=200$ Å, $C_{ox}=50(3.45\times10^{-11}\ \mathrm{F/m})/(10^{-6}\ \mathrm m)=1.725\times10^{-3}\ \mathrm{F/m^2}$, $\mu_nC_{ox}=77.6\ \mu\mathrm{A/V^2}$, $\mathcal E_cL=1.5$ V and $u=0.1333$:

$$
\begin{aligned}
g_{m0}&=(77.6\ \mu\mathrm{A/V^2})(10)(0.1\ \mathrm V)=77.6\ \mu\mathrm S,\\
g_m&=(10\ \mu\mathrm m)(1.725\times10^{-3}\ \mathrm{F/m^2})(0.045\ \mathrm{m^2/V\,s})(1.5\times10^6\ \mathrm{V/m})\frac{\sqrt{1.1333}-1}{\sqrt{1.1333}}=70.6\ \mu\mathrm S .
\end{aligned}
$$

| $L$ (µm) | $t_{ox}$ (Å) | $\mu_nC_{ox}$ (µA/V²) | $g_m$ (µS) | $g_{m0}$ (µS) | $g_{m0}/g_m-1$ |
|---|---|---|---|---|---|
| 10 | 2000 | 7.76 | 0.769 | 0.776 | 1.0% |
| 5 | 1000 | 15.5 | 3.04 | 3.11 | 2.0% |
| 2 | 400 | 38.8 | 18.5 | 19.4 | 5.0% |
| 1 | 200 | 77.6 | 70.6 | 77.6 | 9.9% |
| 0.8 | 160 | 97.0 | 108 | 121 | 12% |
| 0.5 | 100 | 155 | 260 | 311 | 20% |
| 0.4 | 80 | 194 | 390 | 485 | 24% |

### Step 4 — Range of validity of the square-law $g_m$

The square-law value overestimates $g_m$, and the error grows as $L$ shrinks because $V_{ov}/(\mathcal E_cL)$ grows. Solving for the 10% point: $g_{m0}/g_m=1.1$ at $L=0.99\ \mu$m (equivalently $g_m/g_{m0}=0.9$ at $L=0.89\ \mu$m). The model without velocity saturation is therefore accurate within 10% for $L\gtrsim1\ \mu$m; at 0.4 µm it overestimates $g_m$ by 24%.
