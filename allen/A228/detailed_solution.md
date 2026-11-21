# Detailed solution - A228

At each extreme of the input only one transistor conducts, and all of its current flows in $R_L$. Equate the saturated square-law current of that device to the load current, solve the resulting quadratic for $v_{OUT}$, and note that the threshold itself depends on $v_{OUT}$ through the body effect.

### Step 1 — Maximum: $v_{IN}=V_{DD}$, M1 conducting

With $v_{IN}=V_{DD}$, M1's gate is at $V_{DD}+V_{BIAS}$ and M2 is off. M1 is saturated, because

$$
V_{DS1}=V_{DD}-v_{OUT}\ \ge\ V_{GS1}-V_{T1}=V_{DD}+V_{BIAS}-v_{OUT}-V_{T1}
\iff V_{BIAS}\le V_{T1}.
$$

KCL at the output: the whole drain current of M1 flows into $R_L$,

$$
\frac{\beta_1}{2}\big(V_{DD}+V_{BIAS}-v_{OUT}-V_{T1}\big)^2=\frac{v_{OUT}}{R_L}.
$$

### Step 2 — Solve for $v_{OUT}(\max)$

Let $A=V_{DD}+V_{BIAS}-V_{T1}$ and $u=A-v_{OUT}\ge0$ (the overdrive of M1). The equation becomes a quadratic in $u$:

$$
\frac{\beta_1R_L}{2}u^2+u-A=0\quad\Rightarrow\quad
u=\frac{-1+\sqrt{1+2\beta_1R_LA}}{\beta_1R_L},
$$

taking the positive root. Then $v_{OUT}=A-u$:

$$
v_{OUT}(\max)=(V_{DD}+V_{BIAS}-V_{T1})+\frac{1}{\beta_1R_L}-\sqrt{\frac{1}{(\beta_1R_L)^2}+\frac{2(V_{DD}+V_{BIAS}-V_{T1})}{\beta_1R_L}} .
$$

### Step 3 — Minimum: $v_{IN}=V_{SS}$, M2 conducting

With $v_{IN}=V_{SS}$, M2's gate is at $V_{SS}-V_{BIAS}$ and M1 is off. M2 is saturated by the same argument ($V_{BIAS}\le|V_{T2}|$), and its source current is the current drawn out of $R_L$, $-v_{OUT}/R_L$:

$$
\frac{\beta_2}{2}\big(v_{OUT}-V_{SS}+V_{BIAS}-|V_{T2}|\big)^2=-\frac{v_{OUT}}{R_L}.
$$

With $B=|V_{SS}|+V_{BIAS}-|V_{T2}|$ and $w=v_{OUT}+B\ge0$, this is $\tfrac{\beta_2R_L}{2}w^2+w-B=0$, so $w=\big(-1+\sqrt{1+2\beta_2R_LB}\big)/(\beta_2R_L)$ and $v_{OUT}=w-B$:

$$
v_{OUT}(\min)=-(|V_{SS}|+V_{BIAS}-|V_{T2}|)-\frac{1}{\beta_2R_L}+\sqrt{\frac{1}{(\beta_2R_L)^2}+\frac{2(|V_{SS}|+V_{BIAS}-|V_{T2}|)}{\beta_2R_L}} .
$$

### Step 4 — Body effect and limiting cases

The thresholds are evaluated at the extreme output voltages, M1's source being $v_{OUT}(\max)-V_{SS}$ above its bulk and M2's source $V_{DD}-v_{OUT}(\min)$ below its bulk:

$$
V_{T1}=V_{T0N}+\gamma_N\left(\sqrt{2|\phi_{FN}|+v_{OUT}(\max)-V_{SS}}-\sqrt{2|\phi_{FN}|}\right),
$$

$$
|V_{T2}|=|V_{T0P}|+\gamma_P\left(\sqrt{2|\phi_{FP}|+V_{DD}-v_{OUT}(\min)}-\sqrt{2|\phi_{FP}|}\right).
$$

Since each threshold depends on the result, solve iteratively: guess $v_{OUT}$, compute the threshold, recompute $v_{OUT}$, and repeat.

For $R_L\to\infty$ the square-root terms reduce to $A$ and $B$ and the load current vanishes:

$$
v_{OUT}(\max)\to V_{DD}+V_{BIAS}-V_{T1},\qquad v_{OUT}(\min)\to V_{SS}-V_{BIAS}+|V_{T2}| .
$$

Example: $V_{DD}=-V_{SS}=2.5$ V, $V_{BIAS}=0.7$ V and the book parameters ($\gamma_N=0.4\ \mathrm{V^{1/2}}$, $2|\phi_{FN}|=0.7$ V; $\gamma_P=0.57\ \mathrm{V^{1/2}}$, $2|\phi_{FP}|=0.8$ V). Iterating the unloaded limits converges to $V_{T1}=1.27$ V, $v_{OUT}(\max)=1.93$ V and $|V_{T2}|=1.47$ V, $v_{OUT}(\min)=-1.73$ V. Even with no load the body effect costs about 0.6–0.8 V at each end, so the swing is far from rail to rail. Any finite $R_L$ lowers it further. If the gates could not be driven beyond the rails, $V_{DD}+V_{BIAS}$ and $|V_{SS}|+V_{BIAS}$ would be replaced by $V_{DD}$ and $|V_{SS}|$.
