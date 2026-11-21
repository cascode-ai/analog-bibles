# Detailed solution - G364

Treat the unbypassed emitter resistor as series feedback: refer its thermal noise and the base current noise flowing through it into the equivalent input generators, then minimize the noise figure over $R_S$. Because the same base current noise also flows through $R_S$, the two generators are correlated here; the exact result is obtained by writing the total input noise directly and minimizing it numerically.

### Step 1 — Bias and transistor generators

At $I_C=2$ mA, $g_m=76.9$ mS ($1/2g_m=13\ \Omega$) and $I_B=I_C/\beta_F=40\ \mu$A. The transistor alone has

$$
\frac{\overline{v_{ia}^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right),\qquad
\frac{\overline{i_{ia}^2}}{\Delta f}=2qI_B=2(1.6\times10^{-19}\ \mathrm C)(40\ \mu\mathrm A)=1.28\times10^{-23}\ \mathrm{A^2/Hz}.
$$

### Step 2 — Standard analysis with uncorrelated generators

With $R_E$ in the emitter, shorting the input sends the base current noise through $R_E$, and $R_E$ adds its own thermal noise in series:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}+R_E\right)+2qI_BR_E^2
=(1.66\times10^{-20}\ \mathrm{V\cdot C})(1106.5\ \Omega)+1.28\times10^{-17}=3.12\times10^{-17}\ \mathrm{V^2/Hz},
$$

while $\overline{i_i^2}=\overline{i_{ia}^2}$. Minimizing $F=1+(\overline{v_i^2}+\overline{i_i^2}R_S^2)/(4kTR_S\Delta f)$:

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}}=\sqrt{\frac{3.12\times10^{-17}}{1.28\times10^{-23}}}\ \Omega=1.56\ \mathrm{k\Omega},\qquad
F_{\mathrm{opt}}=1+\frac{2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}}{4kT\,\Delta f}=3.41\ (5.3\ \mathrm{dB}).
$$

### Step 3 — Exact analysis including correlation

The same base current noise flows around the whole input loop, through $R_t=R_S+r_b+R_E$, so its contributions through $R_S$ and $R_E$ add coherently. The collector shot noise, referred to the input with this loop resistance, needs a source voltage $i_c(1/g_m+R_t/\beta_F)$. The total equivalent input noise voltage density is therefore

$$
\frac{\overline{v_{n,tot}^2}}{\Delta f}=4kT(R_S+r_b+R_E)+2qI_BR_t^2+2qI_C\left(\frac{1}{g_m}+\frac{R_t}{\beta_F}\right)^2,
$$

and

$$
F=1+\frac{4kT(r_b+R_E)+2qI_BR_t^2+2qI_C\left(1/g_m+R_t/\beta_F\right)^2}{4kTR_S}.
$$

Representative evaluation at the minimum, $R_S=1.63$ kΩ ($R_t=2.73$ kΩ): the three numerator terms are $1.83\times10^{-17}$, $9.51\times10^{-17}$ and $2.9\times10^{-18}$ V²/Hz, giving $F=1+4.31=5.31$.

| $R_S$ | 1.0 kΩ | 1.63 kΩ | 2.5 kΩ |
|---|---|---|---|
| $F$ | 5.62 | 5.31 | 5.55 |

The exact optimum is $R_{S(\mathrm{opt})}\approx1.63$ kΩ with $F_{\mathrm{opt}}\approx5.3$ (7.2 dB). The difference from Step 2 is the cross term $2\cdot2qI_BR_SR_E$ between the base current noise in $R_S$ and in $R_E$, which the uncorrelated model omits.

### Step 4 — Effect of the emitter resistor

Without $R_E$ the same transistor reaches $F_{\mathrm{opt}}\approx2$ dB at $R_S\approx370\ \Omega$. The 1-kΩ emitter resistor raises the optimum source resistance to about 1.6 kΩ and the minimum noise figure to about 5–7 dB, because its thermal noise and the base current noise flowing in it both add to the input noise. Degeneration improves linearity and input resistance, never the noise.
