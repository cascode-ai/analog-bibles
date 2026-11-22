# Detailed solution - G323

In the $g_mR\gg1$ limit, the nested-Miller amplifier has a dominant pole set by $C_{m2}$ and a quadratic factor $D'(s)$ whose roots, $p_2$ and $p_3$, are set mainly by $C_{m1}$. Choosing $C_{m1}$ small enough makes the pair complex; a convenient choice is a Butterworth pair with $Q=0.707$. Then $C_{m2}$, which sets the crossover frequency $g_{m0}/C_{m2}$, is chosen so that the phase at crossover is $-120^\circ$. This is one condition on two capacitors, so the design is a one-parameter family; one member is worked out and others listed.

### Step 1 — Loop gain in the $g_mR\gg1$ limit

From the node equations of [Fig. 1] (KCL at $v_1$, $v_2$, $v_o$), keeping the highest power of $R$ in each coefficient and dropping the feedforward zeros, the denominator is $1+a_1s+a_2s^2+a_3s^3$ with $a_1=R_0R_1R_2\,g_{m1}g_{m2}C_{m2}$. The dominant pole is $p_1\approx-1/a_1$, and above it the loop gain for $f=1$ is
$$
T(s)\approx\frac{g_{m0}}{sC_{m2}}\cdot\frac1{D'(s)},\qquad D'(s)=1+b_2s+b_3s^2,
$$
$$
b_2=\frac{(g_{m2}-g_{m1})C_{m1}}{g_{m1}g_{m2}}+\frac{C_0C_{m1}}{g_{m1}C_{m2}},\qquad
b_3=\frac{C_1C_2+C_{m1}(C_1+C_2)}{g_{m1}g_{m2}}+\frac{C_0\left(C_1C_2+C_1C_{m1}+C_1C_{m2}+C_2C_{m1}+C_{m1}C_{m2}\right)}{g_{m1}g_{m2}C_{m2}} .
$$
With $C_0$ neglected and $g_{m2}=6g_{m1}$ (capacitances in pF),
$$
D'(s)=1+\frac{5C_{m1}}{6g_{m1}}s+\frac{3+6.5C_{m1}}{6g_{m1}^2}s^2 .
$$
The given $C_0=0.5$ pF raises $b_2$ by about 10% and $b_3$ by about 16%. All coefficients scale with $g_{m1}$ in such a way that the capacitor values do not depend on $g_{m1}$.

### Step 2 — Condition for complex $p_2$, $p_3$

The roots of $D'$ are complex when $b_2^2<4b_3$. With $C_0$ neglected:
$$
\frac{25C_{m1}^2}{36}<\frac{4(3+6.5C_{m1})}{6}\quad\Rightarrow\quad 25C_{m1}^2-156C_{m1}-72<0\quad\Rightarrow\quad C_{m1}<6.7\ \mathrm{pF}
$$
(about 6.4 pF with $C_0$ included). The 16-pF value of a widely spaced real-pole design is far outside this range.

### Step 3 — Choose $C_{m1}$ for a Butterworth pair

For $D'(s)=1+s/(Q\omega_0)+s^2/\omega_0^2$, the quality factor is $Q=\sqrt{b_3}/b_2$. Setting $Q=1/\sqrt2$ with $C_0$ neglected:
$$
\frac{3+6.5C_{m1}}{6}=\frac12\left(\frac{5C_{m1}}{6}\right)^2
\quad\Rightarrow\quad 25C_{m1}^2-78C_{m1}-36=0
\quad\Rightarrow\quad C_{m1}=3.53\ \mathrm{pF}.
$$
Then $\omega_0=1/\sqrt{b_3}=0.481\,g_{m1}/\mathrm{pF}$ and $p_{2,3}=(-0.340\pm j0.340)\,g_{m1}/\mathrm{pF}$.

### Step 4 — Choose $C_{m2}$ for 60°

A 60° margin needs the phase of $T(j\omega_c)$ to be $-120^\circ$ where $|T(j\omega_c)|=1$. Since $1/(sC_{m2})$ contributes $-90^\circ$, $D'$ must contribute only $-30^\circ$ at the crossover:
$$
\tan^{-1}\frac{b_2\omega_c}{1-b_3\omega_c^2}=30^\circ,\qquad \frac{g_{m0}}{\omega_cC_{m2}}=\left|D'(j\omega_c)\right| .
$$
The first condition gives $\omega_c=0.171\,g_{m1}/\mathrm{pF}$, about $0.36\,\omega_0$, where $|D'(j\omega_c)|=1.01$. The second then gives
$$
C_{m2}=\frac{g_{m0}}{\omega_c\,|D'(j\omega_c)|}=\frac{g_{m1}}{(0.171\,g_{m1}/\mathrm{pF})(1.01)}=5.79\ \mathrm{pF}.
$$
For $g_{m1}=1$ mA/V, the crossover is at 171 Mrad/s.

### Step 5 — Same design with $C_0$ included, and other members

Repeating Steps 3–4 with the full $b_2$ and $b_3$ (which then also depend on $C_{m2}$) gives $C_{m1}=3.41$ pF and $C_{m2}=6.14$ pF, with $Q=0.707$, $p_{2,3}=(-0.32\pm j0.32)\,g_{m1}/\mathrm{pF}$ and $\omega_c=0.162\,g_{m1}/\mathrm{pF}$. Other choices of $C_{m1}$ inside the complex range also work. Each pair below gives 60° in the model named:

| Model | $C_{m1}$ (pF) | $C_{m2}$ (pF) | $Q$ |
|---|---|---|---|
| $C_0$ neglected | 3.53 | 5.79 | 0.71 |
| $C_0$ neglected | 2.0 | 3.93 | 0.98 |
| $C_0$ included | 3.41 | 6.14 | 0.71 |
| $C_0$ included | 2.0 | 4.37 | 0.94 |
| $C_0$ included | 1.8 | 4.11 | 1.00 |

A design made with $C_0$ neglected loses a few degrees when $C_0$ is restored: the pair (3.53, 5.79 pF) gives about 57° in the full model. The pair $C_{m1}\approx3.4$ pF, $C_{m2}\approx6.1$ pF meets 60° with $C_0$ included.

Compared with the widely spaced real-pole design for 45° ($C_{m1}\approx16$ pF, $C_{m2}\approx13.4$ pF), the complex-pole design uses much smaller capacitors and gives about 2.3 times the unity-gain frequency $g_{m0}/C_{m2}$, at a higher phase margin.
