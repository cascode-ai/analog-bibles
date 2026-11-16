# Detailed solution - R297

**Approach.** The circuit is a common-gate (CG) stage $M_1$ followed by a common-source (CS) stage $M_2$, both with ideal current-source loads and $\lambda = 0$. Place each capacitance at its node, then write KCL at the input, X and the output and solve exactly. With $\lambda = 0$ the input node is decoupled from the rest, so its pole is exact. X and the output have no resistive path to ground, so "one pole per node" fails there: the exact solution gives one pole at the origin and one finite, split pole.

### Step 1 — Small-signal model

Call the source of $M_1$ node **S** and its drain node **X**. The gate of $M_1$ ($V_b$), ground and $V_{DD}$ are ac grounds and the bulks are grounded, so $C_{GS1}$ and $C_{SB1}$ load S; $C_{GD1}$, $C_{DB1}$ and $C_{GS2}$ load X; $C_{GD2}$ **bridges** X and the output; $C_{DB2}$ loads the output; and $C_{SB2}$ (ground to ground) has no effect:

$$C_S = C_{GS1} + C_{SB1}, \qquad C_X = C_{GD1} + C_{DB1} + C_{GS2}.$$

The gate and bulk of $M_1$ are at ac ground, so $v_{gs1} = v_{bs1} = -V_S$ and

$$i_{d1} = g_{m1}v_{gs1} + g_{mb1}v_{bs1} = -(g_{m1} + g_{mb1})V_S .$$

The current **injected into X** is $I = -i_{d1} = (g_{m1} + g_{mb1})V_S$, independent of $V_X$ because $\lambda = 0$. With $I_1$, $I_2$ open and no $r_O$, X sees only $C_X$ and $C_{GD2}$, and the output sees $g_{m2}V_X$, $C_{DB2}$ and $C_{GD2}$.

<!-- diagram: diagram-01.cir -->

### Step 2 — The input pole (exact)

KCL at S:

$$\frac{V_{in} - V_S}{R_S} = V_SC_Ss + (g_{m1} + g_{mb1})V_S .$$

Multiplying by $R_S$ and collecting $V_S$:

$$V_{in} = V_S\left[1 + (g_{m1} + g_{mb1})R_S + R_SC_Ss\right],\qquad \frac{V_S}{V_{in}} = \frac{1}{1 + (g_{m1} + g_{mb1})R_S + R_SC_Ss},$$

which has one pole:

$$\omega_{in} = \frac{1 + (g_{m1} + g_{mb1})R_S}{R_S(C_{GS1} + C_{SB1})} = \frac{1}{\left(R_S\parallel\dfrac{1}{g_{m1} + g_{mb1}}\right)(C_{GS1} + C_{SB1})}.$$

It is exact because, with $\lambda = 0$, nothing at X or the output feeds back to S. S sees $R_S$ in parallel with the CG input resistance $1/(g_{m1} + g_{mb1})$.

### Step 3 — KCL at X and at the output

At X, $I_1$ is ideal, $M_1$ has no $r_O$ and the gate of $M_2$ is open, so $R_X = \infty$; at the output, $I_2$ is ideal and $M_2$ has no $r_O$, so $R_{out} = \infty$. A literal "pole per node" would put **two** poles at the origin, but $C_{GD2}$ is a feedback capacitor around $M_2$ that couples the two nodes, so they must be solved together.

**KCL at the output** (currents leaving the node):

$$(V_{out} - V_X)C_{GD2}s + g_{m2}V_X + V_{out}C_{DB2}s = 0,$$

$$V_{out}(C_{GD2} + C_{DB2})s = V_X(C_{GD2}s - g_{m2}),\qquad V_{out} = V_X\,\frac{C_{GD2}s - g_{m2}}{(C_{GD2} + C_{DB2})s}. \qquad (1)$$

**KCL at X** ($I$ enters, the capacitors carry it away):

$$I = V_XC_Xs + (V_X - V_{out})C_{GD2}s = V_X(C_X + C_{GD2})s - V_{out}C_{GD2}s .$$

Substitute (1), cancelling one factor $s$ in the last term:

$$I = V_X\left[(C_X + C_{GD2})s - \frac{C_{GD2}(C_{GD2}s - g_{m2})}{C_{GD2} + C_{DB2}}\right].$$

Multiply by $(C_{GD2} + C_{DB2})$ and expand:

$$
\begin{aligned}
I\,(C_{GD2} + C_{DB2}) &= V_X\left[(C_X + C_{GD2})(C_{GD2} + C_{DB2})s - C_{GD2}^2s + g_{m2}C_{GD2}\right]\\
&= V_X\left[(C_XC_{GD2} + C_XC_{DB2} + C_{GD2}^2 + C_{GD2}C_{DB2} - C_{GD2}^2)s + g_{m2}C_{GD2}\right]\\
&= V_X\left[\xi s + g_{m2}C_{GD2}\right],
\end{aligned}
$$

with

$$\xi = C_XC_{GD2} + C_XC_{DB2} + C_{GD2}C_{DB2}.$$

So

$$V_X = I\,\frac{C_{GD2} + C_{DB2}}{\xi s + g_{m2}C_{GD2}}.$$

Inserting into (1), the factor $(C_{GD2} + C_{DB2})$ cancels:

$$\frac{V_{out}}{I} = \frac{C_{GD2}s - g_{m2}}{s\left(\xi s + g_{m2}C_{GD2}\right)} = -\frac{g_{m2} - C_{GD2}s}{s\left[g_{m2}C_{GD2} + \xi s\right]}.$$

### Step 4 — The complete transfer function, poles and zero

Multiply $V_{out}/I$ by $I/V_{in} = (g_{m1} + g_{mb1})\,V_S/V_{in}$ from Step 2:

$$\frac{V_{out}}{V_{in}} = \frac{-(g_{m1} + g_{mb1})(g_{m2} - C_{GD2}s)}{\left[1 + (g_{m1} + g_{mb1})R_S + R_S(C_{GS1} + C_{SB1})s\right]\,s\,\left[g_{m2}C_{GD2} + (C_XC_{DB2} + C_XC_{GD2} + C_{GD2}C_{DB2})s\right]}.$$

The roots of the denominator are:

1. **Input pole:** $\omega_{in} = \dfrac{1 + (g_{m1} + g_{mb1})R_S}{R_S(C_{GS1} + C_{SB1})}$.
2. **One pole at the origin**, $s = 0$.
3. **A finite pole** from the second bracket:
$$\omega_2 = \frac{g_{m2}C_{GD2}}{C_XC_{DB2} + (C_X + C_{DB2})C_{GD2}}, \qquad C_X = C_{GD1} + C_{DB1} + C_{GS2}.$$

The numerator gives a **right-half-plane zero** at $s = +g_{m2}/C_{GD2}$ (feedforward through $C_{GD2}$).

### Step 5 — Interpretation

**Only one pole at the origin.** $M_2$ with $C_{GD2}$ around it is a **Miller integrator**: the current $I$ flows through $C_{GD2}$ into the output, while $V_X$ settles at the finite value at which $M_2$ sinks that current. At low frequency,

$$\frac{V_{out}}{V_{in}} \approx -\frac{g_{m1} + g_{mb1}}{1 + (g_{m1} + g_{mb1})R_S}\cdot\frac{1}{C_{GD2}s},$$

a single integration.

**The finite pole is a "split" pole.** $\omega_2$ contains $g_{m2}$ but no output resistance: at high frequencies $C_{GD2}$ effectively diode-connects $M_2$, as in a CS stage with a large Miller capacitance.

**What would move the origin pole.** It stays at $s = 0$ as long as X or the output lacks a resistive path to ground. With finite $r_O$ (λ ≠ 0) both nodes have one, the dc gain becomes finite, and the pole moves to a low but nonzero frequency.

### Result

$$\omega_{in} = \frac{1 + (g_{m1} + g_{mb1})R_S}{R_S(C_{GS1} + C_{SB1})},\qquad \omega = 0,\qquad \omega_2 = \frac{g_{m2}C_{GD2}}{C_XC_{DB2} + (C_X + C_{DB2})C_{GD2}},$$

with $C_X = C_{GD1} + C_{DB1} + C_{GS2}$, and a right-half-plane zero at $+g_{m2}/C_{GD2}$. The exact transfer function is

$$\frac{V_{out}}{V_{in}} = \frac{-(g_{m1} + g_{mb1})(g_{m2} - C_{GD2}s)}{\left[1 + (g_{m1} + g_{mb1})R_S + R_S(C_{GS1} + C_{SB1})s\right]s\left[g_{m2}C_{GD2} + (C_XC_{DB2} + C_XC_{GD2} + C_{GD2}C_{DB2})s\right]}.$$

**Common mistake.** Taking the input resistance as $R_S$ alone, or as $R_S + 1/g_{m1}$. S has two paths to ground, through $R_S$ and into the CG input $1/(g_{m1} + g_{mb1})$, in **parallel**; hence the factor $1 + (g_{m1} + g_{mb1})R_S$ in the input pole.

**Common mistake.** Claiming two poles at the origin because X and the output both have infinite resistance to ground. $C_{GD2}$ around $M_2$ makes the pair a Miller integrator, which integrates once; the second pole is finite.

**Common mistake.** Treating $M_1$ as a common-source stage. Its gate is at the fixed bias $V_b$ and the signal enters at its source, so it is a common-gate stage with a low input impedance and a non-inverting current gain.
