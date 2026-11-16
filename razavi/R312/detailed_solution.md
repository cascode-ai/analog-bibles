# Detailed solution - R312

**Approach.** Apply a test voltage at node X (the drain of $M_1$, which is also the gate of $M_2$), replace both transistors by their small-signal models ($\lambda = \gamma = 0$: just controlled current sources) and the ideal current source $I_1$ by an open circuit. KCL at the source of $M_2$ gives the gate voltage of $M_1$; KCL at X then gives the test current. The result is $R_D$ in parallel with a resistor-plus-inductor branch, so $|Z_X|$ rises with frequency.

### Step 1 — Reading the circuit

From the figure:

- $R_D$ connects $V_{DD}$ to node **X**, the drain of $M_1$. $Z_X$ is the impedance looking into X.
- X is also the **gate of $M_2$**. $M_2$ has its drain at $V_{DD}$ and its source at node **S**: it is a source follower from X to S.
- Node S is the **gate of $M_1$**; it is also connected to ground through $C_1$ and through the ideal current source $I_1$.
- $M_1$ has its source grounded and its drain at X.

So there is a loop: X → (follower $M_2$) → S → (common-source $M_1$) → X.

### Step 2 — Small-signal model

- $V_{DD}$ is an ac ground, so $R_D$ goes from X to ground. $I_1$ is ideal: open circuit.
- **$M_1$:** current $g_{m1}v_S$ from X to ground.
- **$M_2$:** current $g_{m2}(v_X - v_S)$ from its drain (ac ground) into S.
- **$C_1$** from S to ground.

<!-- diagram: diagram-01.cir -->

Apply $v_X$ and let $i_X$ be the current flowing into X from the test source.

### Step 3 — KCL at S: the follower output

At S, current $g_{m2}(v_X - v_S)$ arrives from $M_2$ and leaves through $C_1$ (the gate of $M_1$ draws nothing, $I_1$ is open):

$$g_{m2}(v_X - v_S) = C_1s\,v_S .$$

Solve for $v_S$:

$$
\begin{aligned}
g_{m2}v_X &= v_S(g_{m2} + C_1s)\\
v_S &= \frac{g_{m2}}{g_{m2} + C_1s}\,v_X .
\end{aligned}
$$

At low frequency $v_S\approx v_X$ (the follower copies X onto S); at high frequency $v_S\to0$ ($C_1$ shorts S to ground).

### Step 4 — KCL at X: the test current

At X, the test current leaves through $R_D$ and through $M_1$ (the gate of $M_2$ draws nothing):

$$i_X = \frac{v_X}{R_D} + g_{m1}v_S = v_X\left[\frac{1}{R_D} + \frac{g_{m1}g_{m2}}{g_{m2} + C_1s}\right].$$

### Step 5 — The impedance and its equivalent network

$$Z_X = \frac{v_X}{i_X} = \frac{1}{\dfrac{1}{R_D} + \dfrac{g_{m1}g_{m2}}{g_{m2} + C_1s}} .$$

**Combine into one fraction.** Multiply numerator and denominator by $R_D(g_{m2} + C_1s)$:

$$Z_X = \frac{R_D(g_{m2} + C_1s)}{g_{m2} + C_1s + g_{m1}g_{m2}R_D} = R_D\,\frac{g_{m2} + C_1s}{g_{m2}(1 + g_{m1}R_D) + C_1s}.$$

**Equivalent network.** The second admittance can be inverted:

$$\frac{g_{m2} + C_1s}{g_{m1}g_{m2}} = \frac{1}{g_{m1}} + \frac{C_1}{g_{m1}g_{m2}}\,s .$$

This is a resistance $1/g_{m1}$ in series with an inductance. Hence

$$Z_X = R_D\parallel\left(\frac{1}{g_{m1}} + sL\right), \qquad L = \frac{C_1}{g_{m1}g_{m2}} .$$

<!-- diagram: diagram-02.cir -->

### Step 6 — Limits, corner frequencies and physical picture

**Low frequency** ($s\to0$):

$$Z_X\to R_D\,\frac{g_{m2}}{g_{m2}(1 + g_{m1}R_D)} = \frac{R_D}{1 + g_{m1}R_D} = R_D\parallel\frac{1}{g_{m1}} .$$

$C_1$ is open, the follower makes $v_S = v_X$, so $M_1$ behaves as if its gate were tied to its drain: a diode-connected device of resistance $1/g_{m1}$, in parallel with $R_D$.

**High frequency** ($s\to\infty$):

$$Z_X\to R_D\,\frac{C_1s}{C_1s} = R_D .$$

$C_1$ holds the gate of $M_1$ at ac ground, so $M_1$ is a current source (infinite impedance for $\lambda = 0$) and only $R_D$ remains.

**Zero and pole:**

$$\omega_z = \frac{g_{m2}}{C_1}, \qquad \omega_p = \frac{g_{m2}(1 + g_{m1}R_D)}{C_1}.$$

The zero lies below the pole by the factor $1 + g_{m1}R_D$, which is exactly the ratio of the high- and low-frequency levels. Because $|Z_X|$ increases with frequency, the impedance is **inductive**.

### Step 7 — Sketch of $|Z_X|$ versus frequency

On log–log axes:

- **Flat** at $R_D/(1 + g_{m1}R_D)$ for $\omega\ll\omega_z = g_{m2}/C_1$.
- **Rising at +20 dB/decade** (slope +1) between $\omega_z$ and $\omega_p$; in this range $|Z_X|\approx\omega L$, with $L = C_1/(g_{m1}g_{m2})$.
- **Flat** at $R_D$ for $\omega\gg\omega_p = g_{m2}(1 + g_{m1}R_D)/C_1$.

The phase is positive throughout (inductive), peaking between the two corners.

*Example* ($g_{m1}R_D = 9$, so the levels are $R_D/10$ and $R_D$ and $\omega_p = 10\,\omega_z$):

| $\omega/\omega_z$ | $\lvert Z_X\rvert/R_D$ | phase |
|---|---|---|
| 0.1 | 0.100 | +5° |
| 1 | 0.141 | +39° |
| 3.16 | 0.316 | +55° |
| 10 | 0.711 | +39° |
| 100 | 0.995 | +5° |

### Result

$$Z_X = R_D\,\frac{g_{m2} + C_1s}{g_{m2}(1 + g_{m1}R_D) + C_1s} = R_D\parallel\left(\frac{1}{g_{m1}} + \frac{C_1}{g_{m1}g_{m2}}\,s\right).$$

$|Z_X|$ starts at $R_D\parallel(1/g_{m1}) = R_D/(1 + g_{m1}R_D)$, rises at +20 dB/decade between the zero $\omega_z = g_{m2}/C_1$ and the pole $\omega_p = g_{m2}(1 + g_{m1}R_D)/C_1$, and flattens at $R_D$. The circuit behaves as $R_D$ in parallel with ($1/g_{m1}$ in series with $L = C_1/(g_{m1}g_{m2})$): an active inductor.

**Common mistake.** Concluding that $|Z_X|$ falls with frequency because the only reactive element is a capacitor. $C_1$ sits at the gate of $M_1$, not at X: as it shorts S at high frequency, it *removes* the low-impedance diode-like path, so the impedance at X *rises*.

**Common mistake.** Taking the low-frequency value as $R_D$ or $1/g_{m2}$. At low frequency the follower $M_2$ makes $M_1$ act as a diode, so X sees $1/g_{m1}$ in parallel with $R_D$. $1/g_{m2}$ is the impedance at S, not at X.

**Common mistake.** Getting the inductance wrong, e.g. $L = C_1/g_{m2}$ or $R_DC_1/g_{m2}$. From $Z_X = R_D\parallel(1/g_{m1} + sC_1/(g_{m1}g_{m2}))$, the inductance is $C_1/(g_{m1}g_{m2})$: the follower gives a time constant $C_1/g_{m2}$ at S, and $M_1$ converts it into an impedance by dividing by $g_{m1}$.
