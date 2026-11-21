# Detailed solution - G071

$Q_1$ is an emitter follower that drives the common emitter node; $Q_2$, with its base grounded, is a common-base stage fed from that node. Find the bias, solve the single emitter node for $v_e$, then pass the emitter current of $Q_2$ to $R_C$.

### Step 1 — DC bias

Both bases are at 0 V (the dc value of $v_i$ is zero), so the common emitter node sits at $-V_{BE(\text{on})}=-0.7$ V. The tail resistor current splits equally between the identical transistors:

$$
I_{R_{\text{TAIL}}}=\frac{-0.7\ \mathrm V-(-15\ \mathrm V)}{10\ \mathrm{k\Omega}}=1.43\ \mathrm{mA},\qquad
I_E=0.715\ \mathrm{mA},\qquad I_C=\frac{\beta_F}{\beta_F+1}I_E=0.711\ \mathrm{mA}.
$$

$$
g_m=\frac{I_C}{V_T}=27.4\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta_0}{g_m}=7.31\ \mathrm{k\Omega},\qquad
r_{e}=\frac{r_\pi}{\beta_0+1}=36.4\ \Omega .
$$

Check: $V_{CE2}=15\ \mathrm V-(0.711\ \mathrm{mA})(10\ \mathrm{k\Omega})+0.7\ \mathrm V=8.6$ V, so $Q_2$ is in the forward-active region.

### Step 2 — Input resistance

The emitter of $Q_1$ sees $R_{\text{TAIL}}$ in parallel with the emitter of $Q_2$. With its base grounded and $r_o$ neglected, the emitter of $Q_2$ looks like $r_\pi/(\beta_0+1)=r_e$. The follower reflects its emitter load by $(\beta_0+1)$:

$$
R_i=r_{\pi1}+(\beta_0+1)\left(R_{\text{TAIL}}\,\|\,r_{e2}\right)
=7.31\ \mathrm{k\Omega}+201\,(10\ \mathrm{k\Omega}\,\|\,36.4\ \Omega)
=7.31\ \mathrm{k\Omega}+7.28\ \mathrm{k\Omega}=14.6\ \mathrm{k\Omega}.
$$

Because $r_{e2}\ll R_{\text{TAIL}}$, $R_i\approx2r_\pi$: the source effectively sees the two base-emitter junctions in series, not the large $(\beta_0+1)R_{\text{TAIL}}\approx2$ MΩ.

### Step 3 — Voltage at the emitter node

KCL at the common emitter node $v_e$: the emitter current of $Q_1$, $(\beta_0+1)(v_i-v_e)/r_\pi$, flows in; the emitter current of $Q_2$, $(\beta_0+1)v_e/r_\pi$ (its base is at ground), and the current $v_e/R_{\text{TAIL}}$ flow out:

$$
\frac{v_e}{v_i}=\frac{(\beta_0+1)/r_\pi}{2(\beta_0+1)/r_\pi+1/R_{\text{TAIL}}}
=\frac{27.50\ \mathrm{mA/V}}{55.00\ \mathrm{mA/V}+0.10\ \mathrm{mA/V}}=0.4991 .
$$

The node moves about half as much as the input, as in a differential pair driven on one side.

### Step 4 — Voltage gain

For $Q_2$, $v_{be2}=0-v_e$, so its collector current is $i_{c2}=-g_mv_e$, and the output voltage across $R_C$ (supply at ac ground) is

$$
v_o=-i_{c2}R_C=g_mR_Cv_e
\quad\Rightarrow\quad
\frac{v_o}{v_i}=g_mR_C\frac{v_e}{v_i}=(27.36\ \mathrm{mA/V})(10\ \mathrm{k\Omega})(0.4991)=+137 .
$$

The gain is non-inverting: a rising $v_i$ raises the emitters, turns $Q_2$ down and lets $v_o$ rise. It is essentially $g_mR_C/2$, the single-ended output of a differential pair, reduced slightly by the current lost into $R_{\text{TAIL}}$.

### Step 5 — Output resistance

With $v_i=0$ and $r_o$ neglected, the collector of $Q_2$ is an ideal current source, so only $R_C$ remains at the output:

$$
R_o=R_C=10\ \mathrm{k\Omega}.
$$

The results are $R_i=14.6\ \mathrm{k\Omega}$, $v_o/v_i=+137$ and $R_o=10\ \mathrm{k\Omega}$.
