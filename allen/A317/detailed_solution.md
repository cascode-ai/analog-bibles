# Detailed solution - A317

The output resistance of an emitter follower is $1/g_m$ plus the resistance seen from its base divided by $1+\beta_F$. With the MOS follower present, the base sees about $1/g_{m9}$; with the base tied directly to the second-stage output, it sees that node's resistance $r_{ds6}\parallel r_{ds7}$, which is much larger. Compute both terms and compare.

### Step 1 — Output resistance expression

Looking into the emitter of Q10 with the base driven from a source resistance $R_B$:

$$
R_{out}=\frac{r_{\pi10}+R_B}{1+\beta_F}\approx\frac1{g_{m10}}+\frac{R_B}{1+\beta_F},
$$

using $r_{\pi10}/(1+\beta_F)\approx1/g_{m10}$. Without M8 and M9, $R_B$ is the second-stage output resistance:

$$
R_{out}\approx\frac1{g_{m10}}+\frac{r_{ds6}\parallel r_{ds7}}{1+\beta_F} .
$$

Compared with the given expression, $1/g_{m9}$ is replaced by $r_{ds6}\parallel r_{ds7}$.

### Step 2 — Numerical value

M6 is n-channel ($\lambda_N$) and M7 p-channel ($\lambda_P$):

$$
\frac1{g_{m10}}=\frac{kT/q}{I_C}=\frac{25.9\ \mathrm{mV}}{0.5\ \mathrm{mA}}=51.8\ \Omega,
$$
$$
r_{ds6}=\frac1{(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=250\ \mathrm{k\Omega},\qquad
r_{ds7}=\frac1{(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=200\ \mathrm{k\Omega},
$$
$$
\frac{r_{ds6}\parallel r_{ds7}}{1+\beta_F}=\frac{111.1\ \mathrm{k\Omega}}{101}=1100\ \Omega,\qquad
R_{out}\approx51.8+1100\approx1.15\ \mathrm{k\Omega}.
$$

### Step 3 — Comparison

With the follower, the second term is $1/[g_{m9}(1+\beta_F)]$, only a few ohms (about 7 Ω for $g_{m9}\approx1.5$ mS), so $R_{out}\approx1/g_{m10}$, tens of ohms. Without it, the base-side term dominates and $R_{out}$ rises by a factor of about 20. Driving Q10 directly also loads the high-impedance second-stage output with $r_\pi+(1+\beta_F)R_L$, which lowers the op amp's gain; this is why the MOS follower is inserted.
