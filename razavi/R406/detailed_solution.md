# Detailed solution - R406

**Approach.** Model each stage as a transconductor with output resistance $R_0$, write KCL on a differential half circuit to obtain $Z_{in}(s)$, and read the frequency behaviour from its pole and zero. Then explain the result in two equivalent ways: as shunt feedback whose loop gain falls with frequency, and as a gyrator that turns $C_1$ into an inductance.

### Step 1 — Model and connections

Each stage is a transconductor: a differential input $v_d$ sends $\mp G_mv_d/2$ into its two output nodes, each loaded by $R_0$, so its differential gain is $-G_mR_0$. Call the input terminals of Fig. 2 A (top) and B (bottom) and the outputs of $G_{m2}$ $O_1$ (top) and $O_2$ (bottom). Each output node is loaded by $R_0$ and $C_1$ to ground; each input node by $R_0$ (the output resistance of $G_{m1}$).

Raising $v_A$ pulls $O_1$ down and pushes $O_2$ up; with the cross-connections of the figure, $G_{m1}$ then pulls current *out of* A, opposing the change. The loop is negative, and since $G_{m1}$ returns a **current** to the input nodes (shunt mixing), it lowers $Z_{in}$.

### Step 2 — Half-circuit equations

Drive a differential test current $I_t$ into A and out of B. By symmetry $v_B = -v_A$ and $v_{O2} = -v_{O1}$, with $v_{in} = v_A - v_B = 2v_A$. Per half:

- at $O_1$: $G_{m2}$ draws $G_{m2}(v_A - v_B)/2 = G_{m2}v_A$ out of the node, whose load is $Z(s) = R_0\parallel\dfrac{1}{sC_1} = \dfrac{R_0}{1 + sR_0C_1}$;
- at A: $I_t$ flows in, $G_{m1}$ injects $G_{m1}(v_{O1} - v_{O2})/2 = G_{m1}v_{O1}$, and $R_0$ goes to ground.

<!-- diagram: diagram-01.cir -->

**KCL at $O_1$:**

$$\frac{v_{O1}}{Z} = -G_{m2}v_A \quad\Longrightarrow\quad v_{O1} = -G_{m2}Z\,v_A .$$

**KCL at A:**

$$I_t + G_{m1}v_{O1} = \frac{v_A}{R_0} .$$

**Combine:**

$$
\begin{aligned}
I_t &= \frac{v_A}{R_0} + G_{m1}G_{m2}Z\,v_A = v_A\,\frac{1 + G_{m1}G_{m2}R_0Z}{R_0}\\
Z_{in} = \frac{2v_A}{I_t} &= \frac{2R_0}{1 + T(s)}, \qquad T(s) = G_{m1}G_{m2}R_0Z(s) = \frac{G_{m1}G_{m2}R_0^2}{1 + sR_0C_1} .
\end{aligned}
$$

Multiplying numerator and denominator by $1 + sR_0C_1$:

$$Z_{in}(s) = \frac{2R_0\,(1 + sR_0C_1)}{1 + G_{m1}G_{m2}R_0^2 + sR_0C_1} .$$

### Step 3 — How $|Z_{in}|$ varies with frequency

Each stage has a large intrinsic gain ($G_mR_0 \gg 1$), so $G_{m1}G_{m2}R_0^2 \gg 1$:

| frequency range | $\lvert Z_{in}\rvert$ | behaviour |
|---|---|---|
| $\omega \ll 1/(R_0C_1)$ | $\dfrac{2R_0}{1 + G_{m1}G_{m2}R_0^2} \approx \dfrac{2}{G_{m1}G_{m2}R_0}$ | low, flat plateau |
| $\omega_z = \dfrac{1}{R_0C_1}$ | — | zero: the rise begins |
| $\dfrac{1}{R_0C_1} \ll \omega \ll \dfrac{G_{m1}G_{m2}R_0}{C_1}$ | $\approx \omega\,\dfrac{2C_1}{G_{m1}G_{m2}}$ | rises at +20 dB/dec, like an inductor |
| $\omega_p = \dfrac{1 + G_{m1}G_{m2}R_0^2}{R_0C_1} \approx \dfrac{G_{m1}G_{m2}R_0}{C_1}$ | — | pole: the rise stops |
| $\omega \gg \omega_p$ | $2R_0$ | high, flat plateau (open-loop value) |

The ratio of the plateaus, $1 + G_{m1}G_{m2}R_0^2$, equals $\omega_p/\omega_z$, so the rising segment spans exactly the gap between them.

### Step 4 — Intuition 1: shunt feedback whose loop gain falls

**Low frequencies.** A current pushed into A starts to raise $v_A$; $G_{m2}$ amplifies this by $G_{m2}R_0$, and $G_{m1}$ draws back out of A a current $G_{m1}G_{m2}R_0^2$ times larger than $R_0$ alone would absorb. The returned current cancels almost all of the input current, so A is nearly a virtual ground and $Z_{in} = 2R_0/(1 + T)$ is very small.

**Rising frequency.** Above $1/(R_0C_1)$, $C_1$ starts to short the outputs of $G_{m2}$. The output swing, and hence the current returned by $G_{m1}$, falls as $1/\omega$, so $T(s)$ falls at 20 dB/dec, less input current is cancelled, and $|Z_{in}|$ grows in proportion to $\omega$.

**High frequencies.** Once $|T| < 1$ (above about $G_{m1}G_{m2}R_0/C_1$), the feedback has vanished and the input sees only the open-loop resistance: $R_0$ per side, $2R_0$ differentially.

### Step 5 — Intuition 2: a gyrator (active inductor)

The admittance from Step 2 is

$$\frac{1}{Z_{in}} = \frac{1}{2R_0} + \frac{G_{m1}G_{m2}R_0}{2(1 + sR_0C_1)} = \frac{1}{2R_0} + \frac{1}{\dfrac{2}{G_{m1}G_{m2}R_0} + s\,\dfrac{2C_1}{G_{m1}G_{m2}}} ,$$

so

$$Z_{in} = 2R_0\ \Big\|\ \left[\frac{2}{G_{m1}G_{m2}R_0} + s\,L_d\right], \qquad L_d = \frac{2C_1}{G_{m1}G_{m2}}$$

(per side: $R_0\parallel[1/(G_{m1}G_{m2}R_0) + sC_1/(G_{m1}G_{m2})]$, an inductance $C_1/(G_{m1}G_{m2})$).

Two transconductors connected back to back with opposite signs form a **gyrator**: the impedance at one port is $1/(G_{m1}G_{m2}Z_{load})$, the *inverse* of the load at the other. The load $R_0\parallel C_1$ has admittance $1/R_0 + sC_1$, growing with frequency, so $C_1$ appears at the input as an inductor, $R_0$ as the series resistor $1/(G_{m1}G_{m2}R_0)$, and the input nodes' own $2R_0$ sits in parallel. This is the principle of the active inductor.

### Result

$$Z_{in} = \frac{2R_0\,(1 + sR_0C_1)}{1 + G_{m1}G_{m2}R_0^2 + sR_0C_1} = 2R_0\ \Big\|\ \left[\frac{2}{G_{m1}G_{m2}R_0} + s\,\frac{2C_1}{G_{m1}G_{m2}}\right].$$

$|Z_{in}|$ is small at low frequencies ($\approx 2/(G_{m1}G_{m2}R_0)$), begins to rise at $1/(R_0C_1)$ at +20 dB/dec like an inductor, and levels off at the open-loop value $2R_0$ above $\approx G_{m1}G_{m2}R_0/C_1$.

Intuitively, the shunt feedback through $G_{m1}$ almost cancels any input current at low frequencies, which holds the input voltage down. As $C_1$ shunts the outputs of $G_{m2}$, the loop gain falls as $1/\omega$, the feedback weakens, and $Z_{in}$ climbs toward $2R_0$. Equivalently, the two transconductors form a gyrator that converts the load capacitance $C_1$ into an input inductance $C_1/(G_{m1}G_{m2})$ per side.

**Common mistake.** Concluding that the input is capacitive because the only capacitor is $C_1$. $C_1$ is at the *output* of $G_{m2}$; the gyrator inverts its impedance, so it appears at the input as an inductance.

**Common mistake.** Claiming that the feedback is positive or raises $Z_{in}$. The returned current opposes the input current, so $Z_{in}$ is always *below* the open-loop $2R_0$.

**Common mistake.** Drawing plateaus that go to zero or infinity. The dc loop gain $G_{m1}G_{m2}R_0^2$ is finite, so $Z_{in}$ has the floor $2R_0/(1 + G_{m1}G_{m2}R_0^2)$; at high frequency the input $R_0$'s remain, so $Z_{in}$ saturates at $2R_0$.
