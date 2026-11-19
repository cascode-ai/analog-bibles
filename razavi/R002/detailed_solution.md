# Detailed solution - R002

Derive the small-signal parameters by differentiating the saturation-current model, then evaluate them at the given bias current.

### Step 1 — Model and approximations

Both devices are specified to be saturated. Let $I=|I_D|$ and $V_{ov}=|V_{GS}|-|V_{TH}|>0$. The square-law model with first-order CLM is

$$
I_0=\tfrac12\beta V_{ov}^2,\quad \beta=\mu C_{ox}(W/L),\quad
I=|I_D|=I_0(1+\lambda|V_{DS}|).
$$
$$
\begin{aligned}
g_m&\approx\frac{\partial I_0}{\partial V_{ov}}=\beta V_{ov}, & V_{ov}&\approx\sqrt{2I/\beta},\\
g_m&\approx\sqrt{2\beta I}, &
g_o&=\frac{\partial I}{\partial |V_{DS}|}=\lambda I_0=\frac{\lambda I}{1+\lambda|V_{DS}|},\\
r_O&=\frac{1}{g_o}=\frac{1+\lambda|V_{DS}|}{\lambda I}\approx\frac{1}{\lambda I}.
\end{aligned}
$$

The numerical answer uses the conventional approximation $\lambda|V_{DS}|\ll1$: neglect CLM in the DC current used to determine $V_{ov}$ and $g_m$, but retain its first derivative to obtain finite $r_O$. Since $V_{DS}$ is not supplied, the correction factor and the accuracy of this approximation cannot be evaluated here.

### Step 2 — Evaluate both devices

Use $W/L=100$ and $I=0.5$ mA:

$$
\begin{aligned}
\beta_n&=(134\ \mu\mathrm{A/V^2})(100)=13.4\ \mathrm{mA/V^2},\\
\beta_p&=(38.4\ \mu\mathrm{A/V^2})(100)=3.84\ \mathrm{mA/V^2},\\
g_{m,n}&\approx\sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})}=3.66\ \mathrm{mS},\\
g_{m,p}&\approx\sqrt{2(3.84\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})}=1.96\ \mathrm{mS},\\
r_{O,n}&\approx\frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})}=20\ \mathrm{k\Omega},\\
r_{O,p}&\approx\frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})}=10\ \mathrm{k\Omega},\\
(g_mr_O)_n&\approx(3.66\ \mathrm{mS})(20\ \mathrm{k\Omega})=73.2,\\
(g_mr_O)_p&\approx(1.96\ \mathrm{mS})(10\ \mathrm{k\Omega})=19.6.
\end{aligned}
$$

For a region check, $V_{ov}=2I/g_m$ gives 0.273 V (NMOS) and 0.510 V (PMOS). Saturation requires $|V_{DS}|\ge V_{ov}$; the stated operating condition assumes these limits are met. The gain products are dimensionless since $\mathrm{S}\cdot\Omega=1$.

### Step 3 — Meaning of the intrinsic gain

For a common-source stage with source at AC ground, no body-effect signal, and an ideal current-source load, the small-signal output sees $g_mv_{in}$ in parallel with $r_O$:

<!-- diagram: diagram-01.cir -->

KCL at the output gives
$$
g_mv_{in}+\frac{v_{out}}{r_O}=0
\quad\Rightarrow\quad A_v=-g_mr_O.
$$
Thus the intrinsic gain magnitudes are 73.2 for the NMOS and 19.6 for the PMOS. A finite resistive load replaces $r_O$ by $r_O\parallel R_L$, reducing the common-source gain magnitude.
