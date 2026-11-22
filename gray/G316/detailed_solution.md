# Detailed solution - G316

With the zero removed and the third pole far away, the loop gain in unity-gain feedback is a two-pole function. Its dominant pole comes from Miller multiplication of $C$, and its second pole $p_2$ is set by $g_{m6}$ and the node capacitances. A 60° phase margin requires the second pole to contribute only 30° of phase at the crossover. Express $\omega_u$ and $|p_2|$ in terms of $C$ and solve.

### Step 1 — Poles and unity-gain frequency

For the two-stage model with $R_Z=1/g_{m6}$,
$$
p_1\approx-\frac{1}{g_{m6}R_1R_2C},\qquad
p_2\approx-\frac{g_{m6}C}{C_1C_2+C(C_1+C_2)}\approx-\frac{g_{m6}}{C_1+C_2},
$$
where the last form holds for $C\gg C_1$ ($C_1C_2$ is then small compared with $C(C_1+C_2)$). Above $|p_1|$, the loop gain $a(s)$ falls at $-20$ dB/dec from $a_0=g_{m1}R_1g_{m6}R_2$, so its magnitude reaches 1, ignoring $p_2$, at
$$
\omega_u\approx a_0|p_1|=\frac{g_{m1}}{C}.
$$

### Step 2 — Condition for 60° phase margin

Above $|p_1|$, the phase of the loop gain is $-90^\circ-\tan^{-1}(\omega/|p_2|)$. A phase margin of 60° at the crossover means
$$
\tan^{-1}\frac{\omega_u}{|p_2|}=30^\circ\quad\Rightarrow\quad |p_2|=\sqrt3\,\omega_u .
$$

### Step 3 — Solve for $C$

Substituting both expressions:
$$
\frac{g_{m6}}{C_1+C_2}=\sqrt3\,\frac{g_{m1}}{C}
\quad\Rightarrow\quad
C=\sqrt3\,\frac{g_{m1}}{g_{m6}}\,(C_1+C_2)=1.732\times\frac{1\ \mathrm{mA/V}}{1.55\ \mathrm{mA/V}}\times5.12\ \mathrm{pF}=5.7\ \mathrm{pF}.
$$
The variants of the same rule differ only slightly:

| Form of $p_2$ | $C$ |
|---|---|
| $g_{m6}/(C_1+C_2)$ | 5.72 pF |
| $g_{m6}/C_2$ ($C_1$ neglected) | 5.59 pF |
| full expression | 5.84 pF |

With the full expression, $|p_2|=\sqrt3\,g_{m1}/C$ becomes the quadratic $C^2-5.72C-0.67=0$ (in pF), whose positive root is 5.84 pF.

### Step 4 — Exact two-pole crossover

The crossover actually falls below $\omega_u$, because the second pole also reduces the magnitude. For 60° margin the crossover must be at $\omega_c=|p_2|/\sqrt3$, where the loop-gain magnitude is
$$
|T(j\omega_c)|=\frac{g_{m1}}{C\,\omega_c}\cdot\frac{1}{\sqrt{1+1/3}}=1
\quad\Rightarrow\quad
\frac{g_{m1}}{C}=\frac{2}{\sqrt3}\,\omega_c=\frac23\,|p_2| .
$$
Then $C=1.5\,(g_{m1}/g_{m6})(C_1+C_2)=4.95$ pF. So $C\approx5.7$ pF with the usual $\omega_u\approx g_{m1}/C$ rule, or about 5.0 pF from the exact crossover. For comparison, a 45° margin ($|p_2|=\omega_u$) would need only 3.3 pF: the extra 15° of margin costs about 70% more capacitance.
