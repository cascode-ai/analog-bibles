# Detailed solution - R318

**Approach.** For differential signals the tail is an ac ground and the gates are driven ideally, so each half is a transconductor $g_{m1}$ driving the load impedance $Z_L$ formed by $M_3$, $R$ and $C$. We derive $Z_L(s)$ from the $R$–$C$ divider at the gate of $M_3$, obtain $V_{out}/V_{in} = -g_{m1}Z_L$, find when $|Z_L|$ rises with frequency (inductive load), and then examine the phase of this one-pole, one-zero response at the unity-gain frequency.

### Step 1 — Reading the circuit and the half circuit

From the figure, on each side:

- $M_1$ (NMOS) has its gate driven by the input and its drain at the output node.
- $M_3$ (PMOS) has its source at $V_{DD}$ and its drain at the same output node. Its gate (node **G**) is connected to $V_{DD}$ through $C_1 = C$ and to the output (its own drain) through $R_1 = R$.

The two sides are identical and $M_1$, $M_2$ share the ideal tail source $I_{SS}$. For a differential input:

- the tail node is an ac ground (equal and opposite currents);
- the gates are driven by an ideal voltage source, so there is no input pole;
- each half is $M_1$ (source grounded) loaded by $Z_L$, with $v_{gs1} = V_{in}/2$.

$\lambda = 0$ and all other capacitances are neglected.

### Step 2 — The load impedance $Z_L$

<!-- diagram: diagram-01.cir -->

Apply a test voltage $V_{out}$ at the drain of $M_3$ and find the current $I$ that flows into the load (toward $V_{DD}$).

**Gate voltage.** The gate draws no current, so $R$ and $C$ form a simple divider from $V_{out}$ to the ac-grounded $V_{DD}$:

$$V_G = V_{out}\,\frac{1/(Cs)}{R + 1/(Cs)} = \frac{V_{out}}{1 + RCs}.$$

**Current into the load.** Two parts:

- through $M_3$: its source is at ac ground, so it carries $g_{m3}v_{gs3} = g_{m3}V_G$ from drain to source;
- through the $R$–$C$ branch: $\dfrac{V_{out}}{R + 1/(Cs)} = \dfrac{Cs\,V_{out}}{1 + RCs}$.

$$I = g_{m3}\frac{V_{out}}{1 + RCs} + \frac{Cs\,V_{out}}{1 + RCs} = V_{out}\,\frac{g_{m3} + Cs}{1 + RCs}.$$

**Impedance:**

$$Z_L(s) = \frac{V_{out}}{I} = \frac{1 + RCs}{g_{m3} + Cs}.$$

### Step 3 — The transfer function

Each half: $M_1$ draws $g_{m1}V_{in}/2$ from the output node, so $V_{out1} = -g_{m1}Z_L\,V_{in}/2$. The other half gives the opposite, and $V_{out} = V_{out1} - V_{out2} = 2V_{out1}$:

$$\frac{V_{out}}{V_{in}}(s) = -g_{m1}Z_L(s) = -g_{m1}\,\frac{1 + RCs}{g_{m3} + Cs}.$$

- dc gain: $-g_{m1}/g_{m3}$;
- high-frequency gain: $-g_{m1}R$;
- one zero at $\omega_z = 1/(RC)$ and one pole at $\omega_p = g_{m3}/C$.

### Step 4 — When is the load inductive?

**Limits.** $Z_L(0) = 1/g_{m3}$ and $Z_L(\infty) = R$.

- At low frequency, $C$ is open, $R$ carries no current, the gate follows the drain, and $M_3$ is **diode-connected**: $1/g_{m3}$.
- At high frequency, $C$ shorts the gate to $V_{DD}$, so $M_3$ becomes a current source (infinite impedance with $\lambda = 0$), and $R$ now runs from the output to ac ground: only $R$ remains.

$|Z_L|$ **rises** with frequency, i.e. the load is **inductive**, when the high-frequency value exceeds the low-frequency value:

$$R > \frac{1}{g_{m3}}\qquad(\text{equivalently } \omega_z = 1/(RC) < \omega_p = g_{m3}/C).$$

**Equivalent network.** Subtract the dc value and simplify:

$$
\begin{aligned}
Z_L - \frac{1}{g_{m3}} &= \frac{g_{m3}(1 + RCs) - (g_{m3} + Cs)}{g_{m3}(g_{m3} + Cs)} = \frac{(g_{m3}R - 1)Cs}{g_{m3}(g_{m3} + Cs)}\\
&= \frac{\left(R - \dfrac{1}{g_{m3}}\right)\dfrac{C}{g_{m3}}s}{1 + \dfrac{C}{g_{m3}}s} = \left(R - \frac{1}{g_{m3}}\right)\parallel sL,\qquad L = \frac{C}{g_{m3}}\left(R - \frac{1}{g_{m3}}\right).
\end{aligned}
$$

So for $R > 1/g_{m3}$ the load is $1/g_{m3}$ in series with $(R - 1/g_{m3})\parallel L$, an **active inductor**.

<!-- diagram: diagram-02.cir -->

For $R < 1/g_{m3}$ the same algebra gives a negative "inductance": the pole comes first, $|Z_L|$ falls from $1/g_{m3}$ to $R$, and the load is capacitive.

### Step 5 — Phase of the response

Relative to the dc inversion, the phase of $V_{out}/V_{in}$ at $s = j\omega$ is

$$\theta(\omega) = \arctan\frac{\omega}{\omega_z} - \arctan\frac{\omega}{\omega_p} = \arctan(\omega RC) - \arctan\frac{\omega C}{g_{m3}},$$

the difference of two angles each between 0° and 90°. So $-90^\circ < \theta < +90^\circ$ at every frequency.

**Capacitive case** ($R < 1/g_{m3}$, pole below zero). The gain *falls* from $g_{m1}/g_{m3}$ to $g_{m1}R$, and it passes through unity if $g_{m1}R < 1 < g_{m1}/g_{m3}$. The phase is a lag, $|\theta| < 90^\circ$, and even smaller than that of a single pole because the zero pulls it back. With the dc inversion counted, the total is between 180° and 270°; without it, between 0° and 90°. **Never 135° of lag.**

**Inductive case** ($R > 1/g_{m3}$, zero below pole). The phase is a *lead*, at most $90^\circ - 2\arctan(1/\sqrt{g_{m3}R})$ (at $\omega = \sqrt{\omega_z\omega_p}$). If the inversion is counted as 180°, a 45° lead would give "180° − 45° = 135°", which needs $g_{m3}R\ge(1 + \sqrt2)^2 = 3 + 2\sqrt2\approx5.8$. But in this case the gain **rises** from $g_{m1}/g_{m3}$ toward $g_{m1}R$; it never drops to unity, so this does not meet the requirement either.

**Answer.** With only $C_1$ and $C_2$, the circuit is first order (one pole, one zero) and cannot provide 135° of phase shift at the frequency where its gain drops to unity.

### Step 6 — Would the output-node capacitance help?

A phase lag of 135° requires a second pole. One might hope that the output capacitance $C_{out}$ (neglected here) supplies it, since $Z_L\parallel(1/C_{out}s)$ is second order. It does not suffice by itself: from Step 4, $Z_L$ is equivalent to a network of **positive** resistors and an inductor (or a capacitor when $R < 1/g_{m3}$), and adding $C_{out}$ in parallel keeps it a passive RLC impedance. A passive impedance always has a non-negative real part, so its phase stays between −90° and +90° at every frequency, and the half-circuit gain $-g_{m1}\left[Z_L\parallel(1/C_{out}s)\right]$ still has at most 90° of frequency-dependent lag. (The right-half-plane zero $g_{m1}/C_{GD1}$, also neglected here, would add only a few degrees.) To reach 135° at unity gain, the extra pole must lie in the signal path itself, for example in a second gain stage.

### Result

$$\frac{V_{out}}{V_{in}}(s) = -g_{m1}Z_L(s) = -g_{m1}\,\frac{1 + RCs}{g_{m3} + Cs}, \qquad Z_L = \frac{1 + RCs}{g_{m3} + Cs},$$

with $Z_L = 1/g_{m3}$ at dc and $R$ at high frequency, a zero at $1/(RC)$ and a pole at $g_{m3}/C$.

- **Inductive load** when $R > 1/g_{m3}$ (zero below pole, $|Z_L|$ rising): $Z_L = \dfrac{1}{g_{m3}} + \left(R - \dfrac{1}{g_{m3}}\right)\parallel sL$ with $L = \dfrac{C}{g_{m3}}\left(R - \dfrac{1}{g_{m3}}\right)$.
- **135° at unity gain: no.** The response has one pole and one zero, so its phase relative to the inversion stays within ±90°. The gain falls through unity only for a capacitive load ($R < 1/g_{m3}$), where the lag is below 90°; for an inductive load the phase is a lead but the gain rises instead of falling. A second pole in the signal path is required.

**Common mistake.** Swapping the zero and the pole, i.e. claiming the load is inductive for $R < 1/g_{m3}$. The zero is at $1/(RC)$ and the pole at $g_{m3}/C$; the zero comes first, and $|Z_L|$ rises, only when $R > 1/g_{m3}$.

**Common mistake.** Treating $M_3$ as a current source at all frequencies. Through $R$, its gate follows its drain at low frequency, so it is diode-connected ($1/g_{m3}$); only at high frequency does $C$ freeze its gate.

**Common mistake.** Deriving a second-order transfer function from $C_1$, $C_2$ alone. Each half has a single capacitor, which creates exactly one pole and one zero; the differential output is just twice the half-circuit output.
