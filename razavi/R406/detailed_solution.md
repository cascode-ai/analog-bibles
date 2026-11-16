# Detailed solution - R406

**Approach.** Model each stage as a transconductor with output resistance $R_0$, write KCL on a differential half circuit to obtain $Z_{in}(s)$, and read the frequency behaviour from its poles and zeros. Then explain the result in two equivalent ways: as shunt feedback whose loop gain falls with frequency, and as a gyrator that turns $C_1$ into an inductance.

### Step 1 — Model and connections

**One stage ([Fig. 1]).** A differential pair with current-source loads is a transconductor: a differential input $v_d$ puts $\pm v_d/2$ on the two input transistors, and each output node receives a current $\mp G_mv_d/2$ (each transistor inverts at its drain, as the "$+\,-$" markings show). Each output node has $R_0 = r_{ON}\parallel r_{OP}$ to ground, so the differential gain is $-G_mR_0$.

**The loop ([Fig. 2]).** Call the input terminals A (top) and B (bottom) and the output nodes $O_1$ (top) and $O_2$ (bottom).

- $G_{m2}$ is driven by A, B and drives $O_1$, $O_2$. Each output node is loaded by $R_0$ and $C_1$ to ground.
- $G_{m1}$ is driven by the outputs and drives A, B. Each input node is loaded by $R_0$ (the output resistance of $G_{m1}$).

Raising $v_A$ pulls $O_1$ down and pushes $O_2$ up; with the cross-connections of the figure, $G_{m1}$ then pulls current *out of* A, opposing the change. The loop is negative. Because $G_{m1}$ returns a **current** to the input nodes, the feedback is shunt mixing at the input, which lowers $Z_{in}$.

### Step 2 — Half-circuit equations

Drive a differential test current $I_t$ into A and out of B. By symmetry $v_B = -v_A$ and $v_{O2} = -v_{O1}$, with $v_{in} = v_A - v_B = 2v_A$. Per half:

- at $O_1$: $G_{m2}$ draws $G_{m2}(v_A - v_B)/2 = G_{m2}v_A$ out of the node, whose load is $Z(s) = R_0\parallel\dfrac{1}{sC_1} = \dfrac{R_0}{1 + sR_0C_1}$;
- at A: the test current $I_t$ flows in, $G_{m1}$ injects $G_{m1}(v_{O1} - v_{O2})/2 = G_{m1}v_{O1}$, and $R_0$ goes to ground.

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

Insert $T(s)$ and multiply numerator and denominator by $1 + sR_0C_1$:

$$Z_{in}(s) = \frac{2R_0\,(1 + sR_0C_1)}{1 + G_{m1}G_{m2}R_0^2 + sR_0C_1} .$$

### Step 3 — How $|Z_{in}|$ varies with frequency

Each stage has a large intrinsic gain ($G_mR_0 \gg 1$), so $G_{m1}G_{m2}R_0^2 \gg 1$. Then:

| frequency range | $\lvert Z_{in}\rvert$ | behaviour |
|---|---|---|
| $\omega \ll 1/(R_0C_1)$ | $\dfrac{2R_0}{1 + G_{m1}G_{m2}R_0^2} \approx \dfrac{2}{G_{m1}G_{m2}R_0}$ | low, flat plateau |
| $\omega_z = \dfrac{1}{R_0C_1}$ | — | zero: the rise begins |
| $\dfrac{1}{R_0C_1} \ll \omega \ll \dfrac{G_{m1}G_{m2}R_0}{C_1}$ | $\approx \omega\,\dfrac{2C_1}{G_{m1}G_{m2}}$ | rises at +20 dB/dec, like an inductor |
| $\omega_p = \dfrac{1 + G_{m1}G_{m2}R_0^2}{R_0C_1} \approx \dfrac{G_{m1}G_{m2}R_0}{C_1}$ | — | pole: the rise stops |
| $\omega \gg \omega_p$ | $2R_0$ | high, flat plateau (open-loop value) |

The ratio of the two plateaus is $1 + G_{m1}G_{m2}R_0^2$, the same as the ratio $\omega_p/\omega_z$, so the rising segment spans exactly the gap between them.

### Step 4 — Intuition 1: shunt feedback whose loop gain falls

**Low frequencies.** Suppose a current is pushed into A. The input voltage starts to rise, $G_{m2}$ amplifies it by $G_{m2}R_0$, and $G_{m1}$ turns the result into a current $G_{m1}G_{m2}R_0^2$ times larger than the current that $R_0$ alone would absorb, drawn back out of A. The returned current cancels almost all of the input current, so the input voltage barely moves: the input node is nearly a virtual ground, and $Z_{in} = 2R_0/(1 + T)$ is very small.

**Rising frequency.** Above $1/(R_0C_1)$, $C_1$ starts to short the outputs of $G_{m2}$. The output swing for a given input, and hence the current returned by $G_{m1}$, falls in proportion to $1/\omega$, so the loop gain $T(s)$ falls at 20 dB/dec. Weaker feedback cancels less of the input current, and $|Z_{in}|$ grows in proportion to $\omega$.

**High frequencies.** When $|T| < 1$ (above about $G_{m1}G_{m2}R_0/C_1$), the feedback has essentially vanished, and the input sees only the open-loop resistance: $R_0$ on each side, $2R_0$ differentially.

### Step 5 — Intuition 2: a gyrator (active inductor)

Write the admittance from Step 2:

$$\frac{1}{Z_{in}} = \frac{1}{2R_0} + \frac{G_{m1}G_{m2}R_0}{2(1 + sR_0C_1)} = \frac{1}{2R_0} + \frac{1}{\dfrac{2}{G_{m1}G_{m2}R_0} + s\,\dfrac{2C_1}{G_{m1}G_{m2}}} .$$

So

$$Z_{in} = 2R_0\ \Big\|\ \left[\frac{2}{G_{m1}G_{m2}R_0} + s\,L_d\right], \qquad L_d = \frac{2C_1}{G_{m1}G_{m2}}$$

(per side: $R_0\parallel[1/(G_{m1}G_{m2}R_0) + sC_1/(G_{m1}G_{m2})]$, an inductance $C_1/(G_{m1}G_{m2})$).

Two transconductors connected back to back with opposite signs form a **gyrator**: the impedance seen at one port is $1/(G_{m1}G_{m2}Z_{load})$, the *inverse* of the load at the other port. The load here is $R_0\parallel C_1$, whose admittance $1/R_0 + sC_1$ grows with frequency, so the input impedance grows with frequency: the capacitor $C_1$ appears at the input as an inductor. The resistor $1/(G_{m1}G_{m2}R_0)$ in series with it is the inverted image of the output $R_0$, and the $2R_0$ in parallel is the input nodes' own resistance. This is the principle of the active inductor.

### Result

$$Z_{in} = \frac{2R_0\,(1 + sR_0C_1)}{1 + G_{m1}G_{m2}R_0^2 + sR_0C_1} = 2R_0\ \Big\|\ \left[\frac{2}{G_{m1}G_{m2}R_0} + s\,\frac{2C_1}{G_{m1}G_{m2}}\right].$$

$|Z_{in}|$ is small at low frequencies ($\approx 2/(G_{m1}G_{m2}R_0)$), begins to rise at $1/(R_0C_1)$ at +20 dB/dec like an inductor, and levels off at the open-loop value $2R_0$ above $\approx G_{m1}G_{m2}R_0/C_1$.

Intuitively, the shunt feedback through $G_{m1}$ almost cancels any input current at low frequencies, which holds the input voltage down. As $C_1$ shunts the outputs of $G_{m2}$, the loop gain falls as $1/\omega$, the feedback weakens, and $Z_{in}$ climbs toward $2R_0$. Equivalently, the two transconductors form a gyrator that converts the load capacitance $C_1$ into an input inductance $C_1/(G_{m1}G_{m2})$ per side.

**Common mistake.** Concluding that the input is capacitive ($|Z_{in}|$ falling with frequency) because the only capacitor in the circuit is $C_1$. $C_1$ is at the *output* of $G_{m2}$; the gyrator action inverts its impedance, so it appears at the input as an inductance, not a capacitance.

**Common mistake.** Claiming that the feedback is positive or that it raises $Z_{in}$. The returned current opposes the input current (negative shunt feedback), so $Z_{in}$ is always *below* the open-loop $2R_0$, approaching it only when the loop gain has died out.

**Common mistake.** Drawing plateaus that go to zero or infinity. At dc the loop gain is finite ($G_{m1}G_{m2}R_0^2$), so $Z_{in}$ has a nonzero floor $2R_0/(1 + G_{m1}G_{m2}R_0^2)$; at high frequency the resistors $R_0$ at the input nodes remain, so $Z_{in}$ saturates at $2R_0$.
