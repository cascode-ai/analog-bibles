# Detailed solution - R311

**Approach.** Apply a test voltage $v_X$ at node X and find the test current $i_X$ by KCL at X and at the drain of $M_1$; $Z_X = v_X/i_X$. Its zero, pole and asymptotes give the Bode sketch of $|Z_X|$, which turns out to be inductive.

### Step 1 — Small-signal model

Call the drain of $M_1$ node **D**. With $V_{DD}$ at ac ground, the ideal $I_1$ open, and no $r_O$ or $g_{mb}$ ($\lambda = \gamma = 0$):

- $M_1$, a common-source stage sensing $v_X$, draws $g_{m1}v_X$ from D to ground;
- $M_2$, a follower seen from X with its gate driven by D, carries $g_{m2}v_{gs2} = g_{m2}(v_D - v_X)$ from its drain (ac ground) into X;
- $R_D$ and $C_1$ run from D to ac ground.

Apply a test voltage $v_X$ at X, pushing $i_X$ into it.

### Step 2 — KCL at node X

The gate of $M_1$ draws no current and $I_1$ is open, so

$$i_X + g_{m2}(v_D - v_X) = 0 \quad\Longrightarrow\quad i_X = g_{m2}\,(v_X - v_D). \qquad (1)$$

If D stayed fixed, this would give the plain follower value $Z_X = 1/g_{m2}$; but D moves.

### Step 3 — KCL at node D

The currents leaving D through $R_D$, $C_1$ and $M_1$ sum to zero (the gate of $M_2$ draws none):

$$\frac{v_D}{R_D} + v_D\,C_1s + g_{m1}v_X = 0 .$$

Collecting the $v_D$ terms and multiplying by $R_D$:

$$v_D\,(1 + R_DC_1s) = -g_{m1}R_D\,v_X \quad\Longrightarrow\quad v_D = -\frac{g_{m1}R_D}{1 + R_DC_1s}\,v_X, \qquad (2)$$

the gain of the common-source stage $M_1$ with load $R_D\parallel C_1$: $-g_{m1}R_D$ at low frequency, and $v_D\to0$ at high frequency, where $C_1$ shorts D.

### Step 4 — Solve for $Z_X$

Substitute (2) into (1) and put the bracket over a common denominator:

$$i_X = g_{m2}\,v_X\left(1 + \frac{g_{m1}R_D}{1 + R_DC_1s}\right) = g_{m2}\,v_X\,\frac{1 + R_DC_1s + g_{m1}R_D}{1 + R_DC_1s},$$

$$\boxed{Z_X = \frac{v_X}{i_X} = \frac{1 + R_DC_1s}{g_{m2}\,(1 + g_{m1}R_D + R_DC_1s)}}$$

Dividing numerator and denominator by $(1 + g_{m1}R_D)$:

$$Z_X = \frac{1}{g_{m2}(1 + g_{m1}R_D)}\cdot\frac{1 + s/\omega_z}{1 + s/\omega_p}, \qquad \omega_z = \frac{1}{R_DC_1}, \qquad \omega_p = \frac{1 + g_{m1}R_D}{R_DC_1} = (1 + g_{m1}R_D)\,\omega_z .$$

### Step 5 — Low- and high-frequency limits

- **Low frequency** ($s \to 0$, $C_1$ open):
$$Z_X(0) = \frac{1}{g_{m2}(1 + g_{m1}R_D)} .$$
- **High frequency** ($s \to \infty$, the $R_DC_1s$ terms dominate):
$$Z_X(\infty) = \frac{R_DC_1s}{g_{m2}R_DC_1s} = \frac{1}{g_{m2}} .$$

Since $1 + g_{m1}R_D > 1$, the zero comes first ($\omega_z < \omega_p$) and $|Z_X|$ *increases* with frequency; the ratio $\omega_p/\omega_z = 1 + g_{m1}R_D$ equals the ratio of the two plateaus, consistent with a +20 dB/dec rise joining them.

At low frequency $M_1$ and $M_2$ form a negative-feedback loop of gain $g_{m1}R_D$: a rise in $v_X$ pulls D down, so $v_{gs2} = v_D - v_X = -(1 + g_{m1}R_D)v_X$ and $M_2$ absorbs $(1 + g_{m1}R_D)$ times more current than a plain follower. At high frequency $C_1$ shorts D, the loop gain vanishes, and only $1/g_{m2}$ remains.

### Step 6 — The magnitude and the Bode sketch

With $s = j\omega$:

$$Z_X(j\omega) = \frac{1 + j\omega R_DC_1}{g_{m2}\,(1 + g_{m1}R_D + j\omega R_DC_1)}, \qquad |Z_X(j\omega)| = \frac{1}{g_{m2}}\sqrt{\frac{1 + \omega^2R_D^2C_1^2}{(1 + g_{m1}R_D)^2 + \omega^2R_D^2C_1^2}} .$$

Keeping the larger term under each square root (e.g. for $\omega_z \ll \omega \ll \omega_p$, $\omega R_DC_1 \gg 1$ in the numerator and $\omega R_DC_1 \ll 1 + g_{m1}R_D$ in the denominator):

| Frequency range | Approximation of $\lvert Z_X\rvert$ | Behaviour |
|---|---|---|
| $\omega \ll \omega_z$ | $\dfrac{1}{g_{m2}(1+g_{m1}R_D)}$ | flat (resistive) |
| $\omega_z \ll \omega \ll \omega_p$ | $\dfrac{\omega R_DC_1}{g_{m2}(1+g_{m1}R_D)}$ | rises +20 dB/dec, proportional to $\omega$ (inductive) |
| $\omega \gg \omega_p$ | $\dfrac{1}{g_{m2}}$ | flat (resistive) |

At each corner the exact curve deviates from the asymptotes by about 3 dB: $|Z_X| \approx \sqrt2\,Z_X(0)$ at $\omega = \omega_z$, and $|Z_X| \approx 1/(\sqrt2\,g_{m2})$ at $\omega = \omega_p$ when $g_{m1}R_D \gg 1$. The phase, $\angle Z_X = \arctan(\omega/\omega_z) - \arctan(\omega/\omega_p) > 0$, is positive: the impedance is **inductive**.

**Numerical illustration** (assumed values, only to visualize the sketch): $g_{m1} = g_{m2} = 1$ mS, $R_D = 10\ \mathrm{k}\Omega$, $C_1 = 1$ pF give $g_{m1}R_D = 10$, $Z_X(0) = 1/(10^{-3}\times 11) = 90.9\ \Omega$, $Z_X(\infty) = 1\ \mathrm{k}\Omega$, $\omega_z = 1/(10^4\times10^{-12}) = 10^8$ rad/s and $\omega_p = 11\times10^8$ rad/s:

| $\omega$ (rad/s) | $10^7$ | $10^8$ ($\omega_z$) | $3.32\times10^8$ ($\sqrt{\omega_z\omega_p}$) | $1.1\times10^9$ ($\omega_p$) | $10^{10}$ |
|---|---|---|---|---|---|
| $\lvert Z_X\rvert$ ($\Omega$) | 91 | 128 | 302 | 710 | 994 |

### Step 7 — Equivalent R–L network (an "active inductor")

Write $Z_X$ as a resistor $R_0$ in series with $R_1$ in parallel with an inductor $L$:

$$Z_X = R_0 + \frac{R_1\cdot Ls}{R_1 + Ls} = R_0 + \frac{Ls}{1 + Ls/R_1}.$$

Set $R_0 = Z_X(0)$ and subtract it from $Z_X$:

$$
\begin{aligned}
Z_X - R_0 &= \frac{1}{g_{m2}}\left[\frac{1 + R_DC_1s}{1 + g_{m1}R_D + R_DC_1s} - \frac{1}{1 + g_{m1}R_D}\right]\\
&= \frac{1}{g_{m2}}\cdot\frac{(1 + g_{m1}R_D)(1 + R_DC_1s) - (1 + g_{m1}R_D + R_DC_1s)}{(1 + g_{m1}R_D)(1 + g_{m1}R_D + R_DC_1s)}\\
&= \frac{1}{g_{m2}}\cdot\frac{g_{m1}R_D\cdot R_DC_1s}{(1 + g_{m1}R_D)(1 + g_{m1}R_D + R_DC_1s)}\\
&= \frac{\dfrac{g_{m1}R_D^2C_1}{g_{m2}(1 + g_{m1}R_D)^2}\,s}{1 + \dfrac{R_DC_1}{1 + g_{m1}R_D}\,s}.
\end{aligned}
$$

Matching with $Ls/(1 + Ls/R_1)$, the numerator gives

$$L = \frac{g_{m1}R_D^2C_1}{g_{m2}(1 + g_{m1}R_D)^2} \approx \frac{C_1}{g_{m1}g_{m2}} \quad (g_{m1}R_D \gg 1),$$

and the denominator gives $L/R_1 = R_DC_1/(1 + g_{m1}R_D)$, so

$$R_1 = \frac{g_{m1}R_D}{g_{m2}(1 + g_{m1}R_D)} = \frac{1}{g_{m2}} - R_0 .$$

Check: at high frequency the inductor is open, so $Z_X \to R_0 + R_1 = 1/g_{m2}$, as in Step 5.

### Result

$$Z_X = \frac{1 + R_DC_1s}{g_{m2}\,(1 + g_{m1}R_D + R_DC_1s)}$$

- At low frequencies, $|Z_X| = \dfrac{1}{g_{m2}(1 + g_{m1}R_D)}$.
- Between the zero $\omega_z = 1/(R_DC_1)$ and the pole $\omega_p = (1 + g_{m1}R_D)/(R_DC_1)$, $|Z_X|$ rises at +20 dB/dec.
- Above $\omega_p$, $|Z_X|$ flattens at $1/g_{m2}$.

The port is **inductive**. It is equivalent to $R_0 = 1/[g_{m2}(1 + g_{m1}R_D)]$ in series with ($1/g_{m2} - R_0$) in parallel with $L = g_{m1}R_D^2C_1/[g_{m2}(1 + g_{m1}R_D)^2] \approx C_1/(g_{m1}g_{m2})$.

**Common mistake.** Concluding that $|Z_X|$ falls with frequency because "there is a capacitor". $C_1$ is not across the port but inside the feedback loop; shorting D at high frequency *removes* the impedance-lowering feedback, so the impedance rises.

**Common mistake.** Giving $1/g_{m2}$ (or $1/g_{m1}$) as the low-frequency value, which ignores that $M_1$ moves the gate of $M_2$: $v_{gs2} = v_D - v_X = -(1 + g_{m1}R_D)v_X$. Writing $v_{gs2} = v_D$, as if $M_2$'s source were grounded, is the related error; its source *is* node X.

**Common mistake.** Replacing $I_1$ by a short or a resistor. An ideal current source is an open circuit for small signals and does not appear in $Z_X$.
