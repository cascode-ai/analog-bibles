# Detailed solution - R297

**Approach.** The circuit is a common-gate (CG) stage $M_1$ followed by a common-source (CS) stage $M_2$, both with ideal current-source loads and $\lambda = 0$. First place every transistor capacitance at the right node. Then write KCL at the three nodes (input, X, output) and solve exactly. With $\lambda = 0$ the input node is decoupled from the rest, so its pole is exact. Nodes X and output have no resistive path to ground, so the usual "one pole per node" rule must be applied with care: the exact solution gives one pole at the origin and one finite, split pole.

### Step 1 — Reading the circuit and placing the capacitances

From the figure:

- $V_{in}$ drives the **source** of $M_1$ (node **S**) through $R_S$. The gate of $M_1$ is at the bias voltage $V_b$, an ac ground. So $M_1$ is a CG stage.
- The drain of $M_1$ (node **X**) is loaded by the ideal current source $I_1$ and drives the gate of $M_2$.
- $M_2$ is a CS stage (source grounded) whose drain is the output, loaded by the ideal current source $I_2$.
- Bulks are grounded, so $M_1$ has a body effect (its source moves) but $M_2$ does not.

Where each capacitance goes (ac grounds: ground, $V_{DD}$, $V_b$):

| Capacitance | Connects | Acts as |
|---|---|---|
| $C_{GS1}$ | S to gate of $M_1$ ($V_b$) | S to ground |
| $C_{SB1}$ | S to bulk (ground) | S to ground |
| $C_{GD1}$ | X to gate of $M_1$ ($V_b$) | X to ground |
| $C_{DB1}$ | X to bulk | X to ground |
| $C_{GS2}$ | X to source of $M_2$ (ground) | X to ground |
| $C_{GD2}$ | X to output | **bridging** X and output |
| $C_{DB2}$ | output to bulk | output to ground |
| $C_{SB2}$ | ground to ground | no effect |

Define the grounded capacitance at S and at X:

$$C_S = C_{GS1} + C_{SB1}, \qquad C_X = C_{GD1} + C_{DB1} + C_{GS2}.$$

### Step 2 — Small-signal model

- **Node S:** $R_S$ to the input, $C_S$ to ground, and the channel of $M_1$ to X.
- **$M_1$:** drain-to-source current $i_{d1} = g_{m1}v_{gs1} + g_{mb1}v_{bs1}$, where $g_{mb1}$ is the body transconductance. The gate and bulk are at ac ground, so $v_{gs1} = v_{bs1} = -V_S$, and
$$i_{d1} = -(g_{m1} + g_{mb1})V_S .$$
The drain of $M_1$ draws $i_{d1}$ from X, so the current **injected into X** is $I = -i_{d1} = (g_{m1} + g_{mb1})V_S$. (If $V_S$ rises, $M_1$ conducts less and X is pulled up.) Because $\lambda = 0$ there is no $r_{O1}$, so this current does not depend on $V_X$.
- **Node X:** $C_X$ to ground and $C_{GD2}$ to the output. The ideal $I_1$ is an open circuit, and the gate of $M_2$ draws no current.
- **Output node:** current source $g_{m2}V_X$ to ground, $C_{DB2}$ to ground, and $C_{GD2}$ to X. Ideal $I_2$ is open, no $r_{O2}$.

<!-- diagram: diagram-01.cir -->

### Step 3 — The input pole (exact)

**KCL at S.** Current arriving through $R_S$ leaves through $C_S$ and through the channel:

$$\frac{V_{in} - V_S}{R_S} = V_SC_Ss + (g_{m1} + g_{mb1})V_S .$$

Multiply by $R_S$ and collect $V_S$:

$$V_{in} = V_S\left[1 + (g_{m1} + g_{mb1})R_S + R_SC_Ss\right],$$

$$\frac{V_S}{V_{in}} = \frac{1}{1 + (g_{m1} + g_{mb1})R_S + R_SC_Ss}.$$

This has one pole:

$$\omega_{in} = \frac{1 + (g_{m1} + g_{mb1})R_S}{R_S(C_{GS1} + C_{SB1})} = \frac{1}{\left(R_S\parallel\dfrac{1}{g_{m1} + g_{mb1}}\right)(C_{GS1} + C_{SB1})}.$$

**Why it is exact.** With $\lambda = 0$, the drain voltage of $M_1$ has no influence on its current, so nothing that happens at X or at the output feeds back to S. The resistance seen at S is $R_S$ in parallel with the CG input resistance $1/(g_{m1} + g_{mb1})$.

### Step 4 — Why a naive "pole per node" fails at X and the output

The quick rule $\omega = 1/(R_{node}C_{node})$ needs the resistance from each node to ac ground. At X, $I_1$ is ideal, $M_1$ has no $r_O$ and the gate of $M_2$ is open, so $R_X = \infty$. At the output, $I_2$ is ideal and $M_2$ has no $r_O$, so $R_{out} = \infty$. Taken literally, the rule would put **two** poles at the origin. That is wrong, because $C_{GD2}$ couples the two nodes through the gain of $M_2$ (it is a feedback capacitor around $M_2$). We must solve the two nodes together.

### Step 5 — KCL at X and at the output

Write $I \equiv (g_{m1} + g_{mb1})V_S$ for the current injected into X.

**KCL at the output** (currents leaving the node):

$$(V_{out} - V_X)C_{GD2}s + g_{m2}V_X + V_{out}C_{DB2}s = 0 .$$

Solve for $V_{out}$:

$$V_{out}(C_{GD2} + C_{DB2})s = V_X(C_{GD2}s - g_{m2}),\qquad V_{out} = V_X\,\frac{C_{GD2}s - g_{m2}}{(C_{GD2} + C_{DB2})s}. \qquad (1)$$

**KCL at X** (current $I$ enters, the capacitors carry it away):

$$I = V_XC_Xs + (V_X - V_{out})C_{GD2}s = V_X(C_X + C_{GD2})s - V_{out}C_{GD2}s .$$

Substitute (1) and cancel one factor $s$ in the last term:

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

Insert into (1); the factor $(C_{GD2} + C_{DB2})$ cancels:

$$\frac{V_{out}}{I} = \frac{C_{GD2}s - g_{m2}}{s\left(\xi s + g_{m2}C_{GD2}\right)} = -\frac{g_{m2} - C_{GD2}s}{s\left[g_{m2}C_{GD2} + \xi s\right]}.$$

### Step 6 — The complete transfer function, poles and zero

Multiply $V_{out}/I$ by $I/V_{in} = (g_{m1} + g_{mb1})\,V_S/V_{in}$ from Step 3:

$$\frac{V_{out}}{V_{in}} = \frac{-(g_{m1} + g_{mb1})(g_{m2} - C_{GD2}s)}{\left[1 + (g_{m1} + g_{mb1})R_S + R_S(C_{GS1} + C_{SB1})s\right]\,s\,\left[g_{m2}C_{GD2} + (C_XC_{DB2} + C_XC_{GD2} + C_{GD2}C_{DB2})s\right]}.$$

Reading off the roots of the denominator:

1. **Input pole:** $\omega_{in} = \dfrac{1 + (g_{m1} + g_{mb1})R_S}{R_S(C_{GS1} + C_{SB1})}$.
2. **One pole at the origin**, $s = 0$.
3. **A finite pole** from the second bracket:
$$\omega_2 = \frac{g_{m2}C_{GD2}}{C_XC_{DB2} + (C_X + C_{DB2})C_{GD2}}, \qquad C_X = C_{GD1} + C_{DB1} + C_{GS2}.$$

The numerator gives a **right-half-plane zero** at $s = +g_{m2}/C_{GD2}$ (feedforward through $C_{GD2}$).

### Step 7 — Interpretation

**Only one pole at the origin.** For a constant current $I$ into X, the output cannot settle: there is no dc path at either node, so the circuit integrates. But $M_2$ with $C_{GD2}$ around it behaves as a **Miller integrator**: the current $I$ flows through $C_{GD2}$ into the output, while $V_X$ settles at the finite value at which $M_2$ sinks exactly that current. At low frequency,

$$\frac{V_{out}}{V_{in}} \approx -\frac{g_{m1} + g_{mb1}}{1 + (g_{m1} + g_{mb1})R_S}\cdot\frac{1}{C_{GD2}s},$$

a single integration, i.e. a single pole at the origin.

**The finite pole is a "split" pole.** In $\omega_2$ the output resistance does not appear, only $g_{m2}$: at high frequencies $C_{GD2}$ effectively diode-connects $M_2$. This is the same pole-splitting expression found for a CS stage with a large Miller capacitance.

**What would move the origin pole.** It stays at $s = 0$ as long as either X or the output lacks a resistive path to ground. With finite $r_O$ (λ ≠ 0), both nodes have such paths, the dc gain becomes finite, and the origin pole moves to a low but nonzero frequency.

### Result

$$\omega_{in} = \frac{1 + (g_{m1} + g_{mb1})R_S}{R_S(C_{GS1} + C_{SB1})},\qquad \omega = 0,\qquad \omega_2 = \frac{g_{m2}C_{GD2}}{C_XC_{DB2} + (C_X + C_{DB2})C_{GD2}},$$

with $C_X = C_{GD1} + C_{DB1} + C_{GS2}$, and a right-half-plane zero at $+g_{m2}/C_{GD2}$. The exact transfer function is

$$\frac{V_{out}}{V_{in}} = \frac{-(g_{m1} + g_{mb1})(g_{m2} - C_{GD2}s)}{\left[1 + (g_{m1} + g_{mb1})R_S + R_S(C_{GS1} + C_{SB1})s\right]s\left[g_{m2}C_{GD2} + (C_XC_{DB2} + C_XC_{GD2} + C_{GD2}C_{DB2})s\right]}.$$

**Common mistake.** Taking the input resistance as $R_S$ alone, or as $R_S + 1/g_{m1}$. The source of $M_1$ is a node with two paths to ground: through $R_S$ to the (zeroed) input source, and into the CG input, $1/(g_{m1} + g_{mb1})$. These are in **parallel**, which is why the input pole contains $1 + (g_{m1} + g_{mb1})R_S$.

**Common mistake.** Claiming two poles at the origin because both X and the output have infinite resistance to ground. $C_{GD2}$ around $M_2$ makes the X–output pair a Miller integrator, which integrates once; the second pole is finite.

**Common mistake.** Treating $M_1$ as a common-source stage. Its gate is at a fixed bias $V_b$ and the signal enters at its source, so it is a common-gate stage with a low input impedance and a non-inverting current gain.
