# Detailed solution - G325

In the single-stage telescopic op amp, the load capacitor sets the dominant pole at the output, so the unity-gain frequency is $g_{m1}/C_L$. The nondominant pole is fixed by an internal node. A 45° margin places that pole at the crossover, which fixes $C_L$ directly.

### Step 1 — Loop gain

The output node has the large cascode resistance $R_o$, so with $C_L$ dominating there,
$$
p_1\approx-\frac1{R_oC_L},\qquad a_0=g_{m1}R_o .
$$
With $f=1$, the loop gain is $a(s)=a_0/[(1-s/p_1)(1-s/p_2)]$. Above $|p_1|$, $|a|$ falls at $-20$ dB/dec and, ignoring $p_2$, reaches unity at
$$
\omega_u\approx a_0|p_1|=\frac{g_{m1}}{C_L} .
$$
$|p_2|=200$ Mrad/s comes from an internal cascode or mirror node and does not depend on $C_L$.

### Step 2 — 45° condition

Above $|p_1|$, the phase is $-90^\circ-\tan^{-1}(\omega/|p_2|)$. A 45° margin therefore requires $\omega_u=|p_2|$:
$$
\frac{g_{m1}}{C_L}=|p_2|\quad\Rightarrow\quad
C_L=\frac{g_{m1}}{|p_2|}=\frac{0.3\ \mathrm{mA/V}}{2\times10^8\ \mathrm{rad/s}}=1.5\ \mathrm{pF}.
$$
$|p_2|$ is given in rad/s, so no factor of $2\pi$ enters.

### Step 3 — Exact two-pole crossover

At $\omega=|p_2|$ the second pole also reduces the magnitude, by $1/\sqrt2$. For the true crossover to fall exactly at $|p_2|$:
$$
|a(j|p_2|)|=\frac{g_{m1}}{C_L|p_2|}\cdot\frac1{\sqrt2}=1
\quad\Rightarrow\quad
C_L=\frac{g_{m1}}{\sqrt2\,|p_2|}=1.06\ \mathrm{pF}.
$$
So $C_L\approx1.5$ pF by the usual $\omega_u=|p_2|$ rule, which gives a margin somewhat above 45°, and 1.06 pF for exactly 45°.
