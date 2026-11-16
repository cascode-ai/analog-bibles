# Detailed solution - R311

**Approach.** Replace each transistor by its small-signal model, apply a test voltage $v_X$ at node X, and find the test current $i_X$ with KCL at node X and at the drain of $M_1$. The ratio $v_X/i_X$ gives $Z_X(s)$. Its zero, pole and asymptotes then give the Bode sketch of $|Z_X|$, which turns out to be inductive.

### Step 1 — Read the circuit

Name the drain of $M_1$ **node D**. The connections are:

- $R_D$ runs from $V_{DD}$ to node D, and $C_1$ runs from node D to ground.
- $M_1$ (NMOS) has its gate at node X, its source at ground and its drain at node D. It is a common-source stage that senses $v_X$.
- $M_2$ (NMOS) has its gate at node D, its drain at $V_{DD}$ and its source at node X. Seen from X, $M_2$ is a source follower whose gate is driven by node D.
- The ideal current source $I_1$ goes from node X to ground and sets the bias current of $M_2$.
- $Z_X$ is the impedance seen looking into node X.

Both transistors are in saturation, as the problem states.

### Step 2 — Build the small-signal model

Small-signal analysis keeps only the *changes* around the bias point:

- **DC supplies become AC ground.** $V_{DD}$ is a constant voltage, so in the small-signal circuit the top of $R_D$ and the drain of $M_2$ are grounded.
- **An ideal current source becomes an open circuit.** $I_1$ carries a constant current, so its small-signal current is zero; it is simply removed.
- **$M_1$** is replaced by a voltage-controlled current source $g_{m1}v_{gs1}$ from D to ground, with $v_{gs1} = v_X - 0 = v_X$. Here $g_{m1}$ is the transconductance of $M_1$. There is no output resistance $r_{O1}$ because $\lambda = 0$.
- **$M_2$** is replaced by a current source $g_{m2}v_{gs2}$ that flows from its drain (AC ground) into its source (node X), with $v_{gs2} = v_D - v_X$. There is no $r_{O2}$ ($\lambda = 0$) and no body-effect source $g_{mb2}$ ($\gamma = 0$).
- **Gates draw no current**, so neither the gate of $M_1$ (at X) nor the gate of $M_2$ (at D) takes any current.
- **Test source.** Apply a voltage $v_X$ at node X and call $i_X$ the current it pushes into X. Then $Z_X = v_X/i_X$. All quantities are Laplace transforms, with $s = j\omega$ for sinusoidal steady state. $C_1$ has impedance $1/(C_1s)$.

### Step 3 — KCL at node X

The branches attached to node X are the test source (current $i_X$ in), the source of $M_2$ (current $g_{m2}v_{gs2}$ in), the gate of $M_1$ (no current) and $I_1$ (open). The currents entering X must sum to zero:

$$i_X + g_{m2}(v_D - v_X) = 0 .$$

Solve for $i_X$:

$$i_X = g_{m2}\,(v_X - v_D). \qquad (1)$$

If node D stayed fixed, this would give $i_X = g_{m2}v_X$, i.e. $Z_X = 1/g_{m2}$, the familiar impedance looking into the source of a follower. But node D is *not* fixed, so we need $v_D$.

### Step 4 — KCL at node D

The branches leaving node D are:

- $R_D$ to AC ground: current $v_D/R_D$;
- $C_1$ to ground: current $v_D\,C_1s$;
- the drain of $M_1$: current $g_{m1}v_X$ (flowing down through $M_1$);
- the gate of $M_2$: no current.

Set the sum of the currents leaving D to zero:

$$\frac{v_D}{R_D} + v_D\,C_1s + g_{m1}v_X = 0 .$$

Collect the $v_D$ terms:

$$v_D\left(\frac{1}{R_D} + C_1s\right) = -g_{m1}v_X .$$

Multiply both sides by $R_D$:

$$v_D\,(1 + R_DC_1s) = -g_{m1}R_D\,v_X .$$

Solve for $v_D$:

$$v_D = -\frac{g_{m1}R_D}{1 + R_DC_1s}\,v_X. \qquad (2)$$

This is simply the gain of the common-source stage $M_1$, whose load is $R_D \parallel C_1$. At low frequency $v_D = -g_{m1}R_Dv_X$; at high frequency $C_1$ shorts node D and $v_D \to 0$.

### Step 5 — Solve for $Z_X$

Substitute (2) into (1):

$$i_X = g_{m2}\left(v_X + \frac{g_{m1}R_D}{1 + R_DC_1s}\,v_X\right) = g_{m2}\,v_X\left(1 + \frac{g_{m1}R_D}{1 + R_DC_1s}\right).$$

Put the bracket over a common denominator:

$$i_X = g_{m2}\,v_X\,\frac{1 + R_DC_1s + g_{m1}R_D}{1 + R_DC_1s}.$$

Invert to get the impedance:

$$\boxed{Z_X = \frac{v_X}{i_X} = \frac{1 + R_DC_1s}{g_{m2}\,(1 + g_{m1}R_D + R_DC_1s)}}$$

Divide the numerator and the denominator by $(1 + g_{m1}R_D)$ to show the pole and zero explicitly:

$$Z_X = \frac{1}{g_{m2}(1 + g_{m1}R_D)}\cdot\frac{1 + s/\omega_z}{1 + s/\omega_p},$$

with

$$\omega_z = \frac{1}{R_DC_1}, \qquad \omega_p = \frac{1 + g_{m1}R_D}{R_DC_1} = (1 + g_{m1}R_D)\,\omega_z .$$

### Step 6 — Low- and high-frequency limits

- **Low frequency** ($s \to 0$): $C_1$ is an open circuit, and
$$Z_X(0) = \frac{1}{g_{m2}(1 + g_{m1}R_D)} .$$
- **High frequency** ($s \to \infty$): the $R_DC_1s$ terms dominate both the numerator and the denominator:
$$Z_X(\infty) = \frac{R_DC_1s}{g_{m2}R_DC_1s} = \frac{1}{g_{m2}} .$$

Because $1 + g_{m1}R_D > 1$, the zero comes first ($\omega_z < \omega_p$), so $|Z_X|$ *increases* with frequency. The pole-to-zero ratio $\omega_p/\omega_z = 1 + g_{m1}R_D$ equals the ratio of the high- and low-frequency levels. This is consistent with a straight +20 dB/dec rise joining the two plateaus.

**Physical intuition.** At low frequency $M_1$ and $M_2$ form a negative-feedback loop. If $v_X$ rises, $M_1$ pulls node D down by $g_{m1}R_Dv_X$, which increases $v_{gs2} = v_D - v_X$ by a factor $(1 + g_{m1}R_D)$. $M_2$ then absorbs $(1 + g_{m1}R_D)$ times more current than a plain follower would, so the impedance drops by that factor; the loop gain is $g_{m1}R_D$. At high frequency $C_1$ shorts node D to ground, the loop gain vanishes, and only the follower's $1/g_{m2}$ remains.

### Step 7 — The magnitude and the Bode sketch

Set $s = j\omega$ and take magnitudes, using $|a + jb| = \sqrt{a^2 + b^2}$:

$$|Z_X(j\omega)| = \frac{1}{g_{m2}}\sqrt{\frac{1 + \omega^2R_D^2C_1^2}{(1 + g_{m1}R_D)^2 + \omega^2R_D^2C_1^2}} .$$

The asymptotic (Bode) description:

| Frequency range | Approximation of $\lvert Z_X\rvert$ | Behaviour |
|---|---|---|
| $\omega \ll \omega_z$ | $\dfrac{1}{g_{m2}(1+g_{m1}R_D)}$ | flat (resistive) |
| $\omega_z \ll \omega \ll \omega_p$ | $\dfrac{\omega R_DC_1}{g_{m2}(1+g_{m1}R_D)}$ | rises +20 dB/dec, proportional to $\omega$ (inductive) |
| $\omega \gg \omega_p$ | $\dfrac{1}{g_{m2}}$ | flat (resistive) |

At each corner the exact curve deviates from the asymptotes by about 3 dB:

- At $\omega = \omega_z$, $|Z_X| \approx \sqrt2\,Z_X(0)$.
- At $\omega = \omega_p$, $|Z_X| \approx 1/(\sqrt2\,g_{m2})$ when $g_{m1}R_D \gg 1$.

The phase is $\angle Z_X = \arctan(\omega/\omega_z) - \arctan(\omega/\omega_p) > 0$. A positive phase means the voltage leads the current, which is the signature of an **inductive** impedance.

**Numerical illustration** (assumed values, only to visualize the sketch): $g_{m1} = g_{m2} = 1$ mS, $R_D = 10\ \mathrm{k}\Omega$, $C_1 = 1$ pF. Then

- $g_{m1}R_D = 10$;
- $Z_X(0) = 1/(10^{-3}\times 11) = 90.9\ \Omega$;
- $Z_X(\infty) = 1\ \mathrm{k}\Omega$;
- $\omega_z = 1/(10^4\times10^{-12}) = 10^8$ rad/s and $\omega_p = 11\times10^8$ rad/s.

| $\omega$ (rad/s) | $10^7$ | $10^8$ ($\omega_z$) | $3.32\times10^8$ ($\sqrt{\omega_z\omega_p}$) | $1.1\times10^9$ ($\omega_p$) | $10^{10}$ |
|---|---|---|---|---|---|
| $\lvert Z_X\rvert$ ($\Omega$) | 91 | 128 | 302 | 710 | 994 |

### Step 8 — Equivalent R–L network (an "active inductor")

The same $Z_X$ can be produced by a resistor $R_0$ in series with a parallel combination of $R_1$ and an inductor $L$:

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

Match this term by term with $Ls/(1 + Ls/R_1)$.

The numerator gives the inductance:

$$L = \frac{g_{m1}R_D^2C_1}{g_{m2}(1 + g_{m1}R_D)^2} \approx \frac{C_1}{g_{m1}g_{m2}} \quad (g_{m1}R_D \gg 1).$$

The denominator gives $L/R_1 = R_DC_1/(1 + g_{m1}R_D)$. Solving for $R_1$:

$$R_1 = \frac{g_{m1}R_D}{g_{m2}(1 + g_{m1}R_D)} = \frac{1}{g_{m2}} - R_0 .$$

As a check, at high frequency the inductor is an open circuit, so $Z_X \to R_0 + R_1 = 1/g_{m2}$, as found in Step 6.

### Result

$$Z_X = \frac{1 + R_DC_1s}{g_{m2}\,(1 + g_{m1}R_D + R_DC_1s)}$$

- At low frequencies, $|Z_X| = \dfrac{1}{g_{m2}(1 + g_{m1}R_D)}$.
- Between the zero $\omega_z = 1/(R_DC_1)$ and the pole $\omega_p = (1 + g_{m1}R_D)/(R_DC_1)$, $|Z_X|$ rises at +20 dB/dec.
- Above $\omega_p$, $|Z_X|$ flattens at $1/g_{m2}$.

The port is **inductive**. It is equivalent to $R_0 = 1/[g_{m2}(1 + g_{m1}R_D)]$ in series with ($1/g_{m2} - R_0$) in parallel with $L = g_{m1}R_D^2C_1/[g_{m2}(1 + g_{m1}R_D)^2] \approx C_1/(g_{m1}g_{m2})$.

**Common mistake.** Concluding that $|Z_X|$ falls with frequency because "there is a capacitor". $C_1$ is not across the port. It sits inside the feedback loop, and shorting node D at high frequency *removes* the impedance-lowering feedback. The impedance therefore rises: it is inductive, not capacitive.

**Common mistake.** Giving $1/g_{m2}$ (or $1/g_{m1}$) as the low-frequency value. That ignores the fact that $M_1$ moves the gate of $M_2$: $v_{gs2} = v_D - v_X = -(1 + g_{m1}R_D)v_X$, not $-v_X$. Writing $v_{gs2}$ as $v_D$ alone (treating $M_2$ as a common-source device with a grounded source) is the same error.

**Common mistake.** Replacing $I_1$ by a short or by a resistor. An ideal current source has infinite small-signal impedance, so it is an open circuit and does not appear in $Z_X$.
