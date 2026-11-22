# Detailed solution - A236

Write the follower's gain, output resistance and output pole from the output-node equation, then insert $g_m\propto\sqrt{I_D}$ and $g_{ds}=\lambda I_D$ at fixed geometry. With the source–bulk voltage held fixed, the body transconductance is a fixed fraction of $g_{m1}$.

### Step 1 — Small-signal quantities

KCL at the output (gate of M1 at $v_{in}$, source at $v_{out}$, bulk at $V_{SS}$; M2 a current sink contributing only $g_{ds2}$), with $C_1$ between input and output and $C_2$ from output to ground:

$$
(g_{m1}+sC_1)(v_{in}-v_{out})=(g_{mbs1}+g_{ds1}+g_{ds2}+sC_2)\,v_{out},
$$

which gives, at low frequency,

$$
A_v=\frac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}},\qquad
R_{out}=\frac{1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}\approx\frac{1}{g_{m1}+g_{mbs1}},
$$

and the output pole

$$
|p|=\frac{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}{C_1+C_2}\approx\frac{g_{m1}+g_{mbs1}}{C_1+C_2}.
$$

### Step 2 — Current dependence

$$
g_{m1}=\sqrt{2K'_N\frac{W_1}{L_1}I_D}\propto I_D^{1/2},\qquad
g_{mbs1}=\eta_1g_{m1},\quad \eta_1=\frac{\gamma}{2\sqrt{2|\phi_F|+V_{SB}}},\qquad
g_{ds1}+g_{ds2}=(\lambda_1+\lambda_2)I_D .
$$

$\eta_1$ depends only on the fixed $V_{SB}$, not on the current.

### Step 3 — Scaling laws

Dividing numerator and denominator of the gain by $g_{m1}$ and using $(g_{ds1}+g_{ds2})/g_{m1}=(\lambda_1+\lambda_2)I_D/\sqrt{2K'_N(W_1/L_1)I_D}$,

$$
A_v=\frac{1}{1+\eta_1+(\lambda_1+\lambda_2)\sqrt{\dfrac{I_DL_1}{2K'_NW_1}}}\approx\frac{1}{1+\eta_1}.
$$

The gain is essentially independent of $I_D$, set by the body effect; the small $g_{ds}/g_m$ term, which grows as $\sqrt{I_D}$, makes it decrease only slightly as the current rises. The output conductance is dominated by $g_{m1}(1+\eta_1)\propto\sqrt{I_D}$, so

$$
R_{out}\approx\frac{1}{(1+\eta_1)g_{m1}}\ \propto\ I_D^{-1/2},\qquad
|p|\approx\frac{(1+\eta_1)g_{m1}}{C_1+C_2}\ \propto\ I_D^{1/2}.
$$

Unlike a gain stage, the follower trades no gain for bandwidth: more current lowers the output resistance and raises the (high-frequency) output pole as $\sqrt{I_D}$ while the gain stays near $1/(1+\eta_1)$.
