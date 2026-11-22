# Detailed solution - A292

Without the level shifter, Miller compensation acts on a two-pole loop and simply splits the two poles. Here the source follower MT1 adds a third node, the gate of M6, inside the Miller loop ($v_{o1}$ → MT1 → M6 → $v_{out}$ → $C_c$ → $v_{o1}$). Write the characteristic polynomial of the three-node model, follow its roots as $C_c$ grows, and read off what the gate pole does to the achievable bandwidth.

### Step 1 — Poles with $C_c=0$

The three nodes and their poles are:

- the first-stage output $v_{o1}$: the cascode resistance $R_I=1/G_I$ is very large, so $p_{o1}=-G_I/C_I$ is the lowest pole;
- the output: $p_{out}=-G_{II}/C_L$ with $G_{II}=g_{ds6}+g_{ds7}$;
- the M6 gate: the follower output resistance is about $1/g_{mT1}$ and the node capacitance $C_{G6}$ is $C_{gs6}$ plus the Miller-multiplied $C_{gd6}$ and MT2's drain capacitance, so $p_{G6}\approx-g_{mT1}/C_{G6}$, normally the highest.

### Step 2 — Characteristic polynomial with $C_c$

The follower passes $v_{o1}$ to the M6 gate with transfer $g_{mT1}/(g_{mT1}+sC_{G6})$. Writing KCL at $v_{o1}$ and $v_{out}$ with $C_c$ between them and eliminating the gate node gives

$$
P(s)=(g_{mT1}+sC_{G6})\left[(G_I+sC_I)(G_{II}+sC_L)+sC_c\bigl(G_I+G_{II}+s(C_I+C_L)\bigr)\right]+sC_cg_{m6}g_{mT1} .
$$

For $C_c=0$ its roots are the three poles of Step 1. The transfer from $v_{o1}$ to the output has numerator $sC_c(g_{mT1}+sC_{G6})-g_{m6}g_{mT1}$: a RHP zero near $+g_{m6}/C_c$ and a LHP zero near $-g_{mT1}/C_{G6}$ when $g_{m6}/C_c\ll g_{mT1}/C_{G6}$.

### Step 3 — Root locus as $C_c$ increases

- $p_{o1}$ moves toward the origin and becomes the dominant pole, $p_1\approx-G_IG_{II}/(g_{m6}C_c)$.
- $p_{out}$ moves out to higher frequency (pole splitting), toward the gate pole, which moves in.
- If $|p_{G6}|$ is not far above $g_{m6}/(C_I+C_L)$ (roughly $|p_{G6}|<4g_{m6}/(C_I+C_L)$), the two meet on the real axis at a break-away point and leave as a complex-conjugate pair.

As $C_c\to\infty$ the pair does not run off to infinity: dividing $P(s)$ by $sC_c$, it tends to the roots of

$$
C_{G6}(C_I+C_L)s^2+g_{mT1}(C_I+C_L)s+g_{mT1}g_{m6}=0,
$$
$$
\omega_0\approx\sqrt{\frac{g_{mT1}g_{m6}}{C_{G6}(C_I+C_L)}},\qquad \mathrm{Re}\,s\approx-\frac{g_{mT1}}{2C_{G6}},\qquad
\zeta_\infty\approx\frac12\sqrt{\frac{g_{mT1}(C_I+C_L)}{g_{m6}C_{G6}}} .
$$

The real part stays near $-|p_{G6}|/2$ while the imaginary part rises toward a limit, so the damping falls toward $\zeta_\infty$. If instead $|p_{G6}|\gg g_{m6}/C_L$, the gate pole barely moves and the output pole saturates near $g_{m6}/(C_I+C_L)$, as in the ordinary two-stage op amp.

### Step 4 — Example locus

With illustrative values $G_I=10$ nS, $C_I=0.1$ pF, $G_{II}=10\ \mu$S, $C_L=10$ pF, $g_{m6}=1$ mS ($g_{m6}/C_L=100$ Mrad/s), $g_{mT1}=0.5$ mS and $C_{G6}=10$ pF ($|p_{G6}|=50$ Mrad/s), the poles start at −0.1, −1 and −50 Mrad/s. The output and gate poles meet at about −25.5 Mrad/s when $C_c\approx14$ fF; at $C_c=5$ pF the pair is at $(-25.5\pm j65.2)$ Mrad/s with $\zeta\approx0.36$, close to the limits $\omega_0=70$ Mrad/s and $\zeta_\infty=0.36$.

![Root locus in the s-plane: the gate pole at −50 Mrad/s and the output pole at −1 Mrad/s move together, meet at −25.5 Mrad/s and rise as a complex pair toward ±65 Mrad/s, while the first-stage pole moves to the origin](/q/A292/solution-locus.svg)

### Step 5 — Influence on the compensation

- If $|p_{G6}|$ is well above $GB$ (several times, ideally about 10×), the circuit behaves like the ordinary two-stage op amp; the gate pole only adds a phase lag of about $\arctan(GB/|p_{G6}|)$.
- If $|p_{G6}|$ is not high enough, the complex pair cannot be pushed beyond about $\omega_0$, so the achievable $GB\approx g_{m1}/C_c$ is limited by the gate pole. A larger $C_c$ restores the phase margin only by lowering $GB$; to keep $GB$ one must raise $|p_{G6}|$ with a larger $g_{mT1}$ or a smaller M6 gate capacitance.
