# Detailed solution - R318

**Approach.** For differential signals the tail is an ac ground and the gates are driven ideally, so each half is a transconductor $g_{m1}$ driving the load $Z_L$ formed by $M_3$, $R$ and $C$. Derive $Z_L(s)$ from the $R$–$C$ divider at the gate of $M_3$, obtain $V_{out}/V_{in} = -g_{m1}Z_L$, find when $|Z_L|$ rises with frequency (inductive load), and examine the phase of this one-pole, one-zero response at the unity-gain frequency.

### Step 1 — The half circuit

Call the gate of $M_3$ node G; on each side $R$ runs from the output (drain of $M_3$) to G, and $C$ from G to $V_{DD}$. For a differential input the tail node is an ac ground and the ideal voltage drive leaves no input pole, so each half is $M_1$ (source grounded, $v_{gs1} = V_{in}/2$) loaded by $Z_L$. $\lambda = 0$ and all other capacitances are neglected.

### Step 2 — The load impedance $Z_L$

<!-- diagram: diagram-01.cir -->

Apply a test voltage $V_{out}$ at the drain of $M_3$ and find the current $I$ flowing into the load (toward $V_{DD}$). The gate draws no current, so $R$ and $C$ divide $V_{out}$ onto G:

$$V_G = V_{out}\,\frac{1/(Cs)}{R + 1/(Cs)} = \frac{V_{out}}{1 + RCs}.$$

$M_3$, with its source at ac ground, carries $g_{m3}V_G$, and the $R$–$C$ branch carries $V_{out}/[R + 1/(Cs)] = Cs\,V_{out}/(1 + RCs)$:

$$I = g_{m3}\frac{V_{out}}{1 + RCs} + \frac{Cs\,V_{out}}{1 + RCs} = V_{out}\,\frac{g_{m3} + Cs}{1 + RCs},$$

$$Z_L(s) = \frac{V_{out}}{I} = \frac{1 + RCs}{g_{m3} + Cs}.$$

### Step 3 — The transfer function

Each half gives $V_{out1} = -g_{m1}Z_L\,V_{in}/2$, the other half the opposite, and $V_{out} = V_{out1} - V_{out2} = 2V_{out1}$:

$$\frac{V_{out}}{V_{in}}(s) = -g_{m1}Z_L(s) = -g_{m1}\,\frac{1 + RCs}{g_{m3} + Cs},$$

with dc gain $-g_{m1}/g_{m3}$, high-frequency gain $-g_{m1}R$, a zero at $\omega_z = 1/(RC)$ and a pole at $\omega_p = g_{m3}/C$.

### Step 4 — When is the load inductive?

$Z_L(0) = 1/g_{m3}$: $C$ is open, $R$ carries no current, and $M_3$ is **diode-connected**. $Z_L(\infty) = R$: $C$ shorts the gate to $V_{DD}$, $M_3$ becomes a current source (infinite impedance for $\lambda = 0$), and only $R$ remains. So $|Z_L|$ **rises** with frequency, i.e. the load is **inductive**, when

$$R > \frac{1}{g_{m3}}\qquad(\text{equivalently } \omega_z = 1/(RC) < \omega_p = g_{m3}/C).$$

Subtracting the dc value:

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

the difference of two angles between 0° and 90°, so $-90^\circ < \theta < +90^\circ$ at every frequency.

**Capacitive case** ($R < 1/g_{m3}$, pole below zero). The gain *falls* from $g_{m1}/g_{m3}$ to $g_{m1}R$, through unity if $g_{m1}R < 1 < g_{m1}/g_{m3}$. The phase is a lag below 90°, smaller even than a single pole's because the zero pulls it back: with the inversion, between 180° and 270°; without it, between 0° and 90°. **Never 135° of lag.**

**Inductive case** ($R > 1/g_{m3}$, zero below pole). The phase is a *lead*, at most $90^\circ - 2\arctan(1/\sqrt{g_{m3}R})$ (at $\omega = \sqrt{\omega_z\omega_p}$). Counting the inversion as 180°, a 45° lead would give "180° − 45° = 135°", which needs $g_{m3}R\ge(1 + \sqrt2)^2 = 3 + 2\sqrt2\approx5.8$; but here the gain **rises** from $g_{m1}/g_{m3}$ toward $g_{m1}R$ and never drops to unity.

**Answer.** With only $C_1$ and $C_2$, the circuit is first order (one pole, one zero) and cannot provide 135° of phase shift at the frequency where its gain drops to unity.

### Step 6 — Would the output-node capacitance help?

$Z_L\parallel(1/C_{out}s)$ is second order, but by Step 4 $Z_L$ is a network of **positive** resistors and an inductor (or a capacitor when $R < 1/g_{m3}$), and adding $C_{out}$ keeps it a passive RLC impedance. Its real part is non-negative, so its phase stays within ±90° and the half-circuit gain $-g_{m1}\left[Z_L\parallel(1/C_{out}s)\right]$ still has at most 90° of frequency-dependent lag. (The right-half-plane zero $g_{m1}/C_{GD1}$, also neglected here, would add only a few degrees.) Reaching 135° at unity gain needs an extra pole in the signal path itself, for example a second gain stage.

### Result

$$\frac{V_{out}}{V_{in}}(s) = -g_{m1}Z_L(s) = -g_{m1}\,\frac{1 + RCs}{g_{m3} + Cs}, \qquad Z_L = \frac{1 + RCs}{g_{m3} + Cs},$$

with $Z_L = 1/g_{m3}$ at dc and $R$ at high frequency, a zero at $1/(RC)$ and a pole at $g_{m3}/C$.

- **Inductive load** when $R > 1/g_{m3}$ (zero below pole, $|Z_L|$ rising): $Z_L = \dfrac{1}{g_{m3}} + \left(R - \dfrac{1}{g_{m3}}\right)\parallel sL$ with $L = \dfrac{C}{g_{m3}}\left(R - \dfrac{1}{g_{m3}}\right)$.
- **135° at unity gain: no.** The response has one pole and one zero, so its phase relative to the inversion stays within ±90°. The gain falls through unity only for a capacitive load ($R < 1/g_{m3}$), where the lag is below 90°; for an inductive load the phase is a lead but the gain rises instead of falling. A second pole in the signal path is required.

**Common mistake.** Swapping the zero and the pole, i.e. calling the load inductive for $R < 1/g_{m3}$. The zero is at $1/(RC)$ and the pole at $g_{m3}/C$; the zero comes first, and $|Z_L|$ rises, only when $R > 1/g_{m3}$.

**Common mistake.** Treating $M_3$ as a current source at all frequencies. Through $R$ its gate follows its drain at low frequency, so it is diode-connected ($1/g_{m3}$); only at high frequency does $C$ freeze its gate.

**Common mistake.** Deriving a second-order transfer function from $C_1$, $C_2$ alone. Each half has a single capacitor, hence exactly one pole and one zero; the differential output is just twice the half-circuit output.
