# Detailed solution - R632

**Approach.** Apply a small test voltage $v_x$ at the drain of $M_3$ (node X) and compute the current the load draws, keeping $C_{GS3}$. The source follower now has to charge $C_{GS3}$ through its own output resistance $1/g_{m5}$, so the gate of $M_3$ lags the voltage at X. The current of $M_3$ therefore lags the voltage, which is the signature of an inductor. We derive $Z(s)$, identify the equivalent $R$–$L$ circuit, and state when the inductive part matters.

### Step 1 — The load and the small-signal model

Reading the figure (left side): PMOS $M_3$ has its source at $V_{DD}$ and its drain at X. NMOS $M_5$ is a source follower with its gate at X, its drain at $V_{DD}$, and its source (node G) driving the gate of $M_3$; node G is biased by an ideal current source to ground.

Small-signal model with $\lambda = \gamma = 0$, keeping only $C_{GS3}$:

- **$M_5$:** a controlled current $g_{m5}(v_x - v_g)$ flowing from $V_{DD}$ (AC ground) into node G. The ideal bias source is an open circuit.
- **$C_{GS3}$:** between the gate of $M_3$ (node G) and the source of $M_3$. That source is at $V_{DD}$, i.e. AC ground, so $C_{GS3}$ is effectively **from G to ground**.
- **$M_3$:** a controlled current $g_{m3}v_{sg3} = g_{m3}(0 - v_g) = -g_{m3}v_g$ flowing from $V_{DD}$ into X. With $\lambda = 0$ there is no $r_{O3}$.
- A test source $v_x$ at X; $i_x$ is the current flowing from it into the load.

<!-- diagram: diagram-01.cir -->

### Step 2 — Gate voltage of $M_3$: the follower now has a pole

**KCL at node G.** The current delivered by $M_5$ must flow into $C_{GS3}$, since the bias source carries no small-signal current:

$$g_{m5}(v_x - v_g) = sC_{GS3}\,v_g .$$

Collect the $v_g$ terms:

$$g_{m5}v_x = v_g\left(g_{m5} + sC_{GS3}\right).$$

Solve:

$$v_g = \frac{g_{m5}}{g_{m5} + sC_{GS3}}\,v_x = \frac{v_x}{1 + sC_{GS3}/g_{m5}} .$$

At low frequencies $v_g = v_x$, the unity-gain follower of the resistive case. At higher frequencies the follower's output resistance $1/g_{m5}$ and $C_{GS3}$ form a low-pass filter, so $v_g$ falls behind $v_x$ in phase and amplitude.

### Step 3 — Current drawn from X

Which currents leave node X into the load?

- The drain current of $M_3$. It delivers $-g_{m3}v_g$ *into* X, so it draws $g_{m3}v_g$ *from* X.
- The gate of $M_5$: no current (its capacitances are neglected).
- The current that charges $C_{GS3}$ is supplied by $M_5$, whose drain is at $V_{DD}$. It does **not** come from X.

Therefore

$$i_x = g_{m3}v_g = \frac{g_{m3}\,v_x}{1 + sC_{GS3}/g_{m5}} .$$

### Step 4 — Impedance of the composite load

$$Z(s) = \frac{v_x}{i_x} = \frac{1}{g_{m3}}\left(1 + \frac{sC_{GS3}}{g_{m5}}\right) = \frac{1}{g_{m3}} + s\,\frac{C_{GS3}}{g_{m3}g_{m5}} .$$

This is a resistance in series with an inductance:

$$R_{eq} = \frac{1}{g_{m3}}, \qquad L_{eq} = \frac{C_{GS3}}{g_{m3}g_{m5}} .$$

$Z(s)$ has a zero at

$$\omega_z = \frac{g_{m5}}{C_{GS3}}$$

and no pole. On the $j\omega$ axis:

$$|Z(j\omega)| = \frac{1}{g_{m3}}\sqrt{1 + \left(\frac{\omega}{\omega_z}\right)^2}, \qquad \angle Z(j\omega) = +\tan^{-1}\frac{\omega}{\omega_z} .$$

| $\omega/\omega_z$ | $g_{m3}\lvert Z\rvert$ | Phase of $Z$ | Character |
|---|---|---|---|
| 0.1 | 1.005 | +5.7° | essentially $1/g_{m3}$ |
| 1 | 1.414 | +45° | equal resistive and inductive parts |
| 3 | 3.16 | +71.6° | mostly inductive |
| 10 | 10.05 | +84.3° | nearly a pure inductor |

The phase is positive (voltage leads current) and $|Z|$ rises with frequency: inductive behaviour.

### Step 5 — The condition for inductive behaviour

**Physical reason.** Raising $v_x$ raises the gate of $M_3$, which reduces its current. The follower can move the gate only by charging $C_{GS3}$ through $1/g_{m5}$, so the change in the current of $M_3$ is delayed with respect to $v_x$. A current that lags the voltage is what an inductor produces.

**Condition.** The load is inductive whenever the follower has a non-negligible output resistance $1/g_{m5}$ driving $C_{GS3}$, and the effect is significant at frequencies comparable to or above

$$\omega_z = \frac{g_{m5}}{C_{GS3}},$$

i.e. when the follower's time constant $C_{GS3}/g_{m5}$ is not small compared with the signal period. A weak follower (small $g_{m5}$) or a large $M_3$ (large $C_{GS3}$) moves $\omega_z$ down and makes the inductance $L_{eq} = C_{GS3}/(g_{m3}g_{m5})$ larger. In the limit $g_{m5} \to \infty$ the gate follows X instantly and the load is the pure resistance $1/g_{m3}$.

**Contrast with a diode-connected PMOS.** If the gate of $M_3$ were tied directly to X, $C_{GS3}$ would be connected from X to AC ground, its current would be drawn from X, and

$$Z_{diode} = \frac{1}{g_{m3} + sC_{GS3}},$$

which is **capacitive**. The follower moves the $C_{GS3}$ current off node X and replaces it with a delay, turning a capacitive load into an inductive one.

**With finite $r_{O3}$.** The impedance becomes $r_{O3} \parallel Z(s)$. It is inductive from $\omega_z$ up to about $(1 + g_{m3}r_{O3})\,g_{m5}/C_{GS3}$, beyond which $r_{O3}$ limits it.

### Result

$$Z(s) = \frac{1}{g_{m3}}\left(1 + \frac{sC_{GS3}}{g_{m5}}\right) = \frac{1}{g_{m3}} + s\,\frac{C_{GS3}}{g_{m3}g_{m5}},$$

a resistance $1/g_{m3}$ in series with an inductance $L_{eq} = C_{GS3}/(g_{m3}g_{m5})$. The load becomes inductive because the follower drives $C_{GS3}$ through its finite output resistance $1/g_{m5}$, so the gate of $M_3$, and hence its current, lags $V_X$. The inductive behaviour is significant at and above $\omega_z = g_{m5}/C_{GS3}$, and stronger for a weaker follower (smaller $g_{m5}$) or a larger $C_{GS3}$. For $g_{m5} \to \infty$ the load reduces to the resistance $1/g_{m3}$.

**Common mistake.** Taking the $C_{GS3}$ current from node X, which gives $Z = 1/(g_{m3} + sC_{GS3})$ or a similar capacitive expression. That is correct for a diode-connected device, but here the capacitor is charged by $M_5$, whose drain is at $V_{DD}$.

**Common mistake.** Treating the follower as ideal ($v_g = v_x$ at all frequencies), which leaves a purely resistive load $1/g_{m3}$. The inductance exists only because the follower's output resistance $1/g_{m5}$ is finite.

**Common mistake.** Stating an invented condition such as "inductive only if $g_{m5} < g_{m3}$". In this model the impedance has a zero and no pole, so it is inductive at all frequencies; the relevant question is *where* the inductive part becomes important, which is set by $g_{m5}/C_{GS3}$.
