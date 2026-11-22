# Detailed solution - G363

The base-current flicker noise, which equals the shot noise at the 1-kHz corner, raises only the equivalent input noise current at 500 Hz. Find the increase, then apply the closed-form optimum of the spot noise figure for uncorrelated generators.

### Step 1 — Base-current noise at 500 Hz

With the corner at $f_c=1$ kHz, $K_1I_B=2qI_Bf_c$, so

$$
\frac{\overline{i_b^2}}{\Delta f}=2qI_B\left(1+\frac{f_c}{f}\right)=2qI_B\left(1+\frac{1000\ \mathrm{Hz}}{500\ \mathrm{Hz}}\right)=3\cdot2qI_B,\qquad I_B=\frac{10\ \mu\mathrm A}{100}=0.1\ \mu\mathrm A .
$$

Hence

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(300+1300)\ \Omega,\qquad
\frac{\overline{i_i^2}}{\Delta f}=3\cdot2qI_B ,
$$

with $g_m=10\ \mu\mathrm A/26\ \mathrm{mV}=0.385$ mS and $1/2g_m=1.3$ kΩ.

### Step 2 — Optimum for uncorrelated generators

The spot noise figure $F=1+(\overline{v_i^2}+\overline{i_i^2}R_S^2)/(4kTR_S\Delta f)$ is minimum at $R_S^2=\overline{v_i^2}/\overline{i_i^2}$, where $F_{\mathrm{opt}}=1+2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}/(4kT\Delta f)$. Without flicker noise the device has $R_{S(\mathrm{opt})}=(\sqrt{\beta_F}/g_m)\sqrt{1+2g_mr_b}=28.8$ kΩ and $F_{\mathrm{opt}}-1=\sqrt{1.231/100}=0.111$. Tripling $\overline{i_i^2}$ divides $R_{S(\mathrm{opt})}$ by $\sqrt3$ and multiplies $F_{\mathrm{opt}}-1$ by $\sqrt3$.

### Step 3 — Numerical values at 500 Hz

$$
R_{S(\mathrm{opt})}=\frac{28.8\ \mathrm{k\Omega}}{\sqrt3}=16.6\ \mathrm{k\Omega},\qquad
F_{\mathrm{opt}}=1+\sqrt3\,(0.111)=1.192,\qquad
10\log_{10}1.192=0.76\ \mathrm{dB},
$$

compared with 0.46 dB well above the flicker corner. A full calculation keeping the correlation (base current noise through $r_b+R_S$, collector shot noise in both generators) gives about 16.6 kΩ and 0.82 dB.

### Step 4 — Interpretation

Because flicker noise enlarges only the current generator, the optimum source resistance moves down and the minimum noise figure rises. The low-current device keeps a low noise figure even at 500 Hz, still well below 1 dB, but only for a source resistance near 17 kΩ.
