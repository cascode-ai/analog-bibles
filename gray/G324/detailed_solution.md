# Detailed solution - G324

In a single-stage op amp the load capacitor itself sets the dominant pole, so the unity-gain frequency scales as $1/C_L$. The nondominant pole comes from an internal node and does not depend on $C_L$. Raising $C_L$ therefore lowers the crossover relative to that fixed pole and raises the phase margin. Use the 45° condition at 2 pF to find the fixed pole in terms of $g_{m1}$, then solve for the $C_L$ that gives 60°.

### Step 1 — The two poles

The output node is the only high-resistance node: its resistance $R_o$ is the cascode output resistance, of order $g_mr_o^2$. With $C_L$ dominating the output capacitance,
$$
p_1\approx-\frac1{R_oC_L} .
$$
The nondominant pole comes from a low-impedance internal node, such as the cascode node at the source of $M_{2A}$ (resistance about $1/g_{m2A}$, capacitance $C_p$) or the mirror node at the drain of $M_{3A}$:
$$
p_2\approx-\frac{g_{m2A}}{C_p},
$$
which contains no $C_L$. The low-frequency gain is $a_0=g_{m1}R_o$, so above $|p_1|$ the gain falls at $-20$ dB/dec and reaches unity, ignoring $p_2$, at
$$
\omega_u\approx a_0|p_1|=\frac{g_{m1}}{C_L} .
$$

### Step 2 — Phase margin as a function of $C_L$

With $f=1$, the loop gain is $a_v(s)$. Above $|p_1|$, its phase is $-90^\circ-\tan^{-1}(\omega/|p_2|)$, so at the crossover
$$
\mathrm{PM}\approx90^\circ-\tan^{-1}\frac{\omega_u}{|p_2|}=90^\circ-\tan^{-1}\frac{g_{m1}}{C_L|p_2|} .
$$
A larger $C_L$ lowers $\omega_u$ while $|p_2|$ stays put, so the margin increases.

### Step 3 — Use the known 45° point

At $C_L=2$ pF the margin is 45°, so
$$
\tan^{-1}\frac{g_{m1}}{(2\ \mathrm{pF})|p_2|}=45^\circ\quad\Rightarrow\quad |p_2|=\frac{g_{m1}}{2\ \mathrm{pF}} .
$$

### Step 4 — $C_L$ for 60°

For 60°, $\omega_u/|p_2|=\tan30^\circ=1/\sqrt3$:
$$
\frac{g_{m1}}{C_L}=\frac{|p_2|}{\sqrt3}=\frac{g_{m1}}{\sqrt3\,(2\ \mathrm{pF})}
\quad\Rightarrow\quad C_L=2\sqrt3\ \mathrm{pF}=3.46\ \mathrm{pF}.
$$

### Step 5 — Exact two-pole crossover

The true crossover $\omega_c$, where $|a_v(j\omega_c)|=1$, lies below $\omega_u$ because $p_2$ also reduces the magnitude, by $1/\sqrt{1+(\omega/|p_2|)^2}$.

- 45° needs $\omega_c=|p_2|$, where the magnitude is $g_{m1}/(C_L|p_2|\sqrt2)=1$, so $g_{m1}/C_L=\sqrt2\,|p_2|$.
- 60° needs $\omega_c=|p_2|/\sqrt3$, where the magnitude is $g_{m1}\sqrt3/(C_L|p_2|)\cdot\sqrt{3/4}=1$, so $g_{m1}/C_L=\tfrac23|p_2|$.

The ratio of the two load capacitances is then
$$
C_L=2\ \mathrm{pF}\times\frac{\sqrt2}{2/3}=4.24\ \mathrm{pF}.
$$
So $C_L\approx3.5$ pF with the usual $\omega_u\approx g_{m1}/C_L$ approximation, or 4.2 pF from the exact two-pole crossover. In either case the load must be increased, not reduced, to raise the margin.
