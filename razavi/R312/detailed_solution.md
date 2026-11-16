# Detailed solution - R312

**Approach.** Apply a test voltage at X (the drain of $M_1$, also the gate of $M_2$), with each transistor a plain controlled current source ($\lambda = \gamma = 0$) and $I_1$ open. KCL at the source of $M_2$ gives the gate voltage of $M_1$; KCL at X then gives the test current. The result is $R_D$ in parallel with a resistor-plus-inductor branch, so $|Z_X|$ rises with frequency.

### Step 1 — Small-signal model

Call the source of $M_2$ (gate of $M_1$) node **S**. The loop is X → follower $M_2$ → S → common-source $M_1$ → X. With $V_{DD}$ at ac ground and $I_1$ open:

- $R_D$ runs from X to ground;
- **$M_1$:** a current $g_{m1}v_S$ from X to ground;
- **$M_2$:** a current $g_{m2}(v_X - v_S)$ from its drain (ac ground) into S;
- **$C_1$** runs from S to ground.

<!-- diagram: diagram-01.cir -->

Apply $v_X$ and let $i_X$ be the current flowing into X from the test source.

### Step 2 — KCL at S: the follower output

$M_2$'s current leaves S only through $C_1$ (the gate of $M_1$ draws nothing, $I_1$ is open):

$$
\begin{aligned}
g_{m2}(v_X - v_S) &= C_1s\,v_S\\
g_{m2}v_X &= v_S(g_{m2} + C_1s)\\
v_S &= \frac{g_{m2}}{g_{m2} + C_1s}\,v_X .
\end{aligned}
$$

At low frequency $v_S\approx v_X$ (the follower copies X onto S); at high frequency $v_S\to0$ ($C_1$ shorts S to ground).

### Step 3 — KCL at X: the test current

The test current leaves X through $R_D$ and $M_1$ (the gate of $M_2$ draws nothing):

$$i_X = \frac{v_X}{R_D} + g_{m1}v_S = v_X\left[\frac{1}{R_D} + \frac{g_{m1}g_{m2}}{g_{m2} + C_1s}\right].$$

### Step 4 — The impedance and its equivalent network

$$Z_X = \frac{v_X}{i_X} = \frac{1}{\dfrac{1}{R_D} + \dfrac{g_{m1}g_{m2}}{g_{m2} + C_1s}} .$$

Multiplying numerator and denominator by $R_D(g_{m2} + C_1s)$:

$$Z_X = \frac{R_D(g_{m2} + C_1s)}{g_{m2} + C_1s + g_{m1}g_{m2}R_D} = R_D\,\frac{g_{m2} + C_1s}{g_{m2}(1 + g_{m1}R_D) + C_1s}.$$

Inverting the second admittance,

$$\frac{g_{m2} + C_1s}{g_{m1}g_{m2}} = \frac{1}{g_{m1}} + \frac{C_1}{g_{m1}g_{m2}}\,s ,$$

a resistance $1/g_{m1}$ in series with an inductance. Hence

$$Z_X = R_D\parallel\left(\frac{1}{g_{m1}} + sL\right), \qquad L = \frac{C_1}{g_{m1}g_{m2}} .$$

<!-- diagram: diagram-02.cir -->

### Step 5 — Limits, corner frequencies and physical picture

**Low frequency** ($s\to0$):

$$Z_X\to R_D\,\frac{g_{m2}}{g_{m2}(1 + g_{m1}R_D)} = \frac{R_D}{1 + g_{m1}R_D} = R_D\parallel\frac{1}{g_{m1}} .$$

Here $C_1$ is open and the follower makes $v_S = v_X$, so $M_1$ acts as a diode-connected device ($1/g_{m1}$) in parallel with $R_D$.

**High frequency** ($s\to\infty$):

$$Z_X\to R_D\,\frac{C_1s}{C_1s} = R_D .$$

Here $C_1$ holds the gate of $M_1$ at ac ground, so $M_1$ is a current source (infinite impedance for $\lambda = 0$) and only $R_D$ remains.

**Zero and pole:**

$$\omega_z = \frac{g_{m2}}{C_1}, \qquad \omega_p = \frac{g_{m2}(1 + g_{m1}R_D)}{C_1}.$$

The zero lies below the pole by the factor $1 + g_{m1}R_D$, exactly the ratio of the high- and low-frequency levels. Since $|Z_X|$ increases with frequency, the impedance is **inductive**.

### Step 6 — Sketch of $|Z_X|$ versus frequency

On log–log axes:

- **Flat** at $R_D/(1 + g_{m1}R_D)$ for $\omega\ll\omega_z = g_{m2}/C_1$.
- **Rising at +20 dB/decade** (slope +1) between $\omega_z$ and $\omega_p$, where $|Z_X|\approx\omega L$ with $L = C_1/(g_{m1}g_{m2})$.
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

**Common mistake.** Concluding that $|Z_X|$ falls with frequency because the only reactive element is a capacitor. $C_1$ sits at the gate of $M_1$, not at X; shorting S at high frequency *removes* the low-impedance diode-like path, so the impedance at X *rises*.

**Common mistake.** Taking the low-frequency value as $R_D$ or $1/g_{m2}$. At low frequency the follower makes $M_1$ act as a diode, so X sees $1/g_{m1}$ in parallel with $R_D$; $1/g_{m2}$ is the impedance at S, not at X.

**Common mistake.** Getting the inductance wrong, e.g. $L = C_1/g_{m2}$ or $R_DC_1/g_{m2}$. The follower gives a time constant $C_1/g_{m2}$ at S, and $M_1$ converts it into an impedance by dividing by $g_{m1}$: $L = C_1/(g_{m1}g_{m2})$.
