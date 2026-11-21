# Detailed solution - G361

Use the uncorrelated input-generator model of the bipolar transistor, write the noise figure as a function of the source resistance, and minimize it. The same closed-form optimum applies as for any bipolar device; only the bias point changes.

### Step 1 — Generators and noise figure

At low frequency, with flicker noise neglected,

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right),\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B=\frac{2qI_C}{\beta_F},\qquad
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}.
$$

### Step 2 — Optimum source resistance and minimum noise figure

$dF/dR_S=0$ requires $\overline{i_i^2}R_S^2=\overline{v_i^2}$. Using $2qI_C=2kTg_m$,

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}}=\frac{\sqrt{\beta_F}}{g_m}\sqrt{1+2g_mr_b},\qquad
F_{\mathrm{opt}}=1+\sqrt{\frac{1+2g_mr_b}{\beta_F}} .
$$

### Step 3 — Numerical values

At $I_C=10\ \mu$A, $g_m=10\ \mu\mathrm A/26\ \mathrm{mV}=0.385$ mS, so $1/g_m=2.6$ kΩ and $1/2g_m=1.3$ kΩ. Then $2g_mr_b=2(0.385\ \mathrm{mS})(300\ \Omega)=0.231$ and $\sqrt{1.231}=1.109$. With $\sqrt{\beta_F}=10$:

$$
R_{S(\mathrm{opt})}=10\times2.6\ \mathrm{k\Omega}\times1.109=28.8\ \mathrm{k\Omega},\qquad
F_{\mathrm{opt}}=1+\frac{1.109}{10}=1.111,\qquad
10\log_{10}1.111=0.46\ \mathrm{dB}.
$$

A full analysis that keeps the correlation (collector shot noise in both generators, base current noise flowing through $r_b+R_S$) gives $R_{S(\mathrm{opt})}\approx28.7$ kΩ and $F_{\mathrm{opt}}\approx1.123$ (0.50 dB), essentially the same.

### Step 4 — Interpretation

Compared with a device at milliampere current, the low collector current makes $1/2g_m$ large enough that $r_b$ hardly matters ($2g_mr_b=0.23$), and the higher $\beta_F$ lowers the base current noise. Both push $F_{\mathrm{opt}}$ toward $1+1/\sqrt{\beta_F}$, giving a very low noise figure, but only for a high source resistance of about 29 kΩ.
