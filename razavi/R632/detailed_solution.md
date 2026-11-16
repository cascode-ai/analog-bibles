# Detailed solution - R632

**Approach.** Apply a small test voltage $v_x$ at X and compute the current the load draws, keeping $C_{GS3}$. The source follower must charge $C_{GS3}$ through its own output resistance $1/g_{m5}$, so the gate of $M_3$, and hence its current, lags the voltage at X, which is the signature of an inductor. Derive $Z(s)$, identify the equivalent $R$–$L$ circuit, and state when the inductive part matters.

### Step 1 — Small-signal model

Call the source of $M_5$ (the gate of $M_3$) node G. With $\lambda = \gamma = 0$ and only $C_{GS3}$ kept:

- **$M_5$:** a controlled current $g_{m5}(v_x - v_g)$ from $V_{DD}$ (ac ground) into G; the ideal bias source is an open circuit.
- **$C_{GS3}$:** between G and the source of $M_3$, which is at $V_{DD}$, so effectively **from G to ground**.
- **$M_3$:** a controlled current $g_{m3}v_{sg3} = g_{m3}(0 - v_g) = -g_{m3}v_g$ from $V_{DD}$ into X (no $r_{O3}$).
- A test source $v_x$ at X, with $i_x$ the current flowing from it into the load.

<!-- diagram: diagram-01.cir -->

### Step 2 — Gate voltage of $M_3$: the follower now has a pole

The bias source carries no small-signal current, so KCL at G gives

$$g_{m5}(v_x - v_g) = sC_{GS3}\,v_g \quad\Longrightarrow\quad g_{m5}v_x = v_g\left(g_{m5} + sC_{GS3}\right),$$

$$v_g = \frac{g_{m5}}{g_{m5} + sC_{GS3}}\,v_x = \frac{v_x}{1 + sC_{GS3}/g_{m5}} .$$

At low frequencies $v_g = v_x$ (the unity-gain follower of the resistive case); at higher frequencies $1/g_{m5}$ and $C_{GS3}$ form a low-pass filter, so $v_g$ lags $v_x$.

### Step 3 — Current drawn from X

$M_3$ delivers $-g_{m3}v_g$ into X, i.e. draws $g_{m3}v_g$ from it. The gate of $M_5$ draws nothing, and the current that charges $C_{GS3}$ is supplied by $M_5$, whose drain is at $V_{DD}$; it does **not** come from X. Therefore

$$i_x = g_{m3}v_g = \frac{g_{m3}\,v_x}{1 + sC_{GS3}/g_{m5}} .$$

### Step 4 — Impedance of the composite load

$$Z(s) = \frac{v_x}{i_x} = \frac{1}{g_{m3}}\left(1 + \frac{sC_{GS3}}{g_{m5}}\right) = \frac{1}{g_{m3}} + s\,\frac{C_{GS3}}{g_{m3}g_{m5}} ,$$

a resistance in series with an inductance:

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

The load is inductive whenever the follower drives $C_{GS3}$ through a non-negligible output resistance $1/g_{m5}$, and the effect is significant at frequencies comparable to or above

$$\omega_z = \frac{g_{m5}}{C_{GS3}},$$

i.e. when the follower's time constant $C_{GS3}/g_{m5}$ is not small compared with the signal period. A weak follower (small $g_{m5}$) or a large $M_3$ (large $C_{GS3}$) lowers $\omega_z$ and raises $L_{eq} = C_{GS3}/(g_{m3}g_{m5})$. For $g_{m5} \to \infty$ the gate follows X instantly and the load is the pure resistance $1/g_{m3}$.

**Contrast with a diode-connected PMOS.** With the gate tied directly to X, the $C_{GS3}$ current would be drawn from X, and

$$Z_{diode} = \frac{1}{g_{m3} + sC_{GS3}},$$

which is **capacitive**. The follower moves the $C_{GS3}$ current off node X and replaces it with a delay.

**With finite $r_{O3}$.** The impedance becomes $r_{O3} \parallel Z(s)$, inductive from $\omega_z$ up to about $(1 + g_{m3}r_{O3})\,g_{m5}/C_{GS3}$, beyond which $r_{O3}$ limits it.

### Result

$$Z(s) = \frac{1}{g_{m3}}\left(1 + \frac{sC_{GS3}}{g_{m5}}\right) = \frac{1}{g_{m3}} + s\,\frac{C_{GS3}}{g_{m3}g_{m5}},$$

a resistance $1/g_{m3}$ in series with an inductance $L_{eq} = C_{GS3}/(g_{m3}g_{m5})$. The load becomes inductive because the follower drives $C_{GS3}$ through its finite output resistance $1/g_{m5}$, so the gate of $M_3$, and hence its current, lags $V_X$. The inductive behaviour is significant at and above $\omega_z = g_{m5}/C_{GS3}$, and stronger for a weaker follower (smaller $g_{m5}$) or a larger $C_{GS3}$. For $g_{m5} \to \infty$ the load reduces to the resistance $1/g_{m3}$.

**Common mistake.** Taking the $C_{GS3}$ current from node X, which gives the capacitive $Z = 1/(g_{m3} + sC_{GS3})$ of a diode-connected device. Here the capacitor is charged by $M_5$, whose drain is at $V_{DD}$.

**Common mistake.** Treating the follower as ideal ($v_g = v_x$ at all frequencies), which leaves a purely resistive load. The inductance exists only because $1/g_{m5}$ is finite.

**Common mistake.** Stating an invented condition such as "inductive only if $g_{m5} < g_{m3}$". The impedance has a zero and no pole, so it is inductive at all frequencies; $g_{m5}/C_{GS3}$ sets *where* the inductive part becomes important.
