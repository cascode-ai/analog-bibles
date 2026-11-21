# Detailed solution - G362

At 500 Hz the base-current flicker noise adds to the shot noise, which enlarges only the equivalent input noise current. Evaluate that increase from the 1-kHz corner, then reuse the closed-form minimum of the spot noise figure for uncorrelated generators. A full calculation with correlation is quoted for comparison.

### Step 1 — Base-current noise at 500 Hz

The corner frequency $f_c$ is where the flicker term $K_1I_B/f$ equals the shot term $2qI_B$, so $K_1I_B=2qI_Bf_c$ and

$$
\frac{\overline{i_b^2}}{\Delta f}=2qI_B\left(1+\frac{f_c}{f}\right)=2qI_B\left(1+\frac{1000\ \mathrm{Hz}}{500\ \mathrm{Hz}}\right)=3\cdot2qI_B .
$$

The flicker noise is in the base current only, so the equivalent input noise current triples while the voltage generator is unchanged:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right),\qquad
\frac{\overline{i_i^2}}{\Delta f}=3\,\frac{2qI_C}{\beta_F}.
$$

### Step 2 — Optimum source resistance and spot noise figure

For uncorrelated generators the spot noise figure $F=1+(\overline{v_i^2}+\overline{i_i^2}R_S^2)/(4kTR_S\Delta f)$ is minimized when $\overline{i_i^2}R_S^2=\overline{v_i^2}$:

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}},\qquad
F_{\mathrm{opt}}=1+\frac{2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}}{4kT\,\Delta f}.
$$

Without flicker noise this transistor ($g_m=76.9$ mS, $1/2g_m=13\ \Omega$) has $R_{S(\mathrm{opt})}=(\sqrt{\beta_F}/g_m)\sqrt{1+2g_mr_b}=372\ \Omega$ and $F_{\mathrm{opt}}-1=\sqrt{(1+2g_mr_b)/\beta_F}=\sqrt{16.4/50}=0.572$. Tripling $\overline{i_i^2}$ divides $R_{S(\mathrm{opt})}$ by $\sqrt3$ and multiplies $F_{\mathrm{opt}}-1$ by $\sqrt3$.

### Step 3 — Numerical values at 500 Hz

$$
R_{S(\mathrm{opt})}=\frac{372\ \Omega}{\sqrt3}=215\ \Omega,\qquad
F_{\mathrm{opt}}=1+\sqrt3\,(0.572)=1.99,\qquad
10\log_{10}1.99=3.0\ \mathrm{dB},
$$

compared with 1.97 dB at frequencies well above the flicker corner.

### Step 4 — Correlated calculation

In the actual circuit the base current noise, including its flicker part, flows through $r_b+R_S$, and the collector shot noise appears in both generators. Computing the spot noise figure directly from all sources and minimizing numerically gives $R_{S(\mathrm{opt})}\approx238\ \Omega$ and $F_{\mathrm{opt}}\approx2.59$ (4.1 dB). In either treatment flicker noise lowers the optimum source resistance and raises the minimum noise figure by about 1–1.5 dB at 500 Hz.
