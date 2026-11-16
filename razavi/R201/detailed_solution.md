# Detailed solution - R201

**Approach.** Use the differential half circuit: the tail node P is a virtual ground. Each half has **two** internal nodes. Node A is the output, at the drain of the PMOS and the top of $R_1$. Node B is at the bottom of $R_1$, which is both the drain of $M_1$ and the **gate** of the PMOS. We write KCL at A and B with the full small-signal models (including $r_O$), solve the two equations, and finally check the result in limiting cases.

### Step 1 — Reading the circuit

From the figure (left half; the right half mirrors it):

- $M_3$: PMOS with source at $V_{DD}$ and drain at node A, the left output terminal.
- $R_1$ runs from A down to node B.
- Node B is the drain of $M_1$, **and the gate of $M_3$ is connected to B**.
- $M_1$, $M_2$: NMOS differential pair with sources at P and tail $M_5$ (gate at $V_b$).
- $V_{out} = V_A - V_{A'}$, where A′ is the right output.

All transistors are saturated and $\lambda \ne 0$. Body effect plays no role: the sources of $M_1$/$M_2$ sit at the virtual ground P, and the sources of $M_3$/$M_4$ are at $V_{DD}$, their bulk.

### Step 2 — The half-circuit small-signal model

Apply $v_{in1} = +v_d/2$ and $v_{in2} = -v_d/2$. By symmetry the two halves respond oppositely, P stays at AC ground, and $v_{A'} = -v_A$. Write $v_{in} = v_d/2$ for the left half.

Elements of the left half circuit:

- **$M_1$**: gate at $v_{in}$, source at ground, drain at B. The current flowing from B down through $M_1$ is $g_{m1}v_{in} + v_B/r_{O1}$.
- **$M_3$**: gate at B, source at AC ground, drain at A. Its drain-to-source current, which flows out of A through $M_3$, is $g_{m3}v_{gs3} + v_{ds3}/r_{O3} = g_{m3}v_B + v_A/r_{O3}$.
- **$R_1$**: carries $(v_A - v_B)/R_1$ from A to B.

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL at the two nodes

**KCL at A** (currents leaving A sum to zero):

$$g_{m3}v_B + \frac{v_A}{r_{O3}} + \frac{v_A - v_B}{R_1} = 0 . \tag{1}$$

**KCL at B** (current arriving from $R_1$ equals current leaving through $M_1$; no current enters the gate of $M_3$):

$$\frac{v_A - v_B}{R_1} = g_{m1}v_{in} + \frac{v_B}{r_{O1}} . \tag{2}$$

### Step 4 — Solve for $v_A$

Substitute (2) into (1) to replace the $R_1$ current:

$$g_{m3}v_B + \frac{v_A}{r_{O3}} + g_{m1}v_{in} + \frac{v_B}{r_{O1}} = 0 .$$

Multiply by $r_{O3}$ and solve for $v_A$:

$$v_A = -r_{O3}\left[g_{m1}v_{in} + \left(g_{m3} + \frac{1}{r_{O1}}\right)v_B\right]. \tag{3}$$

From (2), solve for $v_A$ as well:

$$v_A = v_B\left(1 + \frac{R_1}{r_{O1}}\right) + g_{m1}R_1v_{in}. \tag{4}$$

Set (3) equal to (4) and collect the terms in $v_B$:

$$
\begin{aligned}
v_B\left(1 + \frac{R_1}{r_{O1}} + g_{m3}r_{O3} + \frac{r_{O3}}{r_{O1}}\right) &= -g_{m1}v_{in}(R_1 + r_{O3})\\
v_B &= -\frac{g_{m1}r_{O1}(R_1 + r_{O3})}{R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}}\,v_{in}.
\end{aligned}
$$

(The second line multiplies numerator and denominator by $r_{O1}$.) Call the denominator

$$D = R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}.$$

Substitute $v_B$ into (4):

$$
\begin{aligned}
v_A &= -\frac{g_{m1}(R_1 + r_{O3})(r_{O1} + R_1)}{D}v_{in} + g_{m1}R_1v_{in}\\
&= \frac{g_{m1}v_{in}}{D}\left[R_1D - (R_1 + r_{O3})(r_{O1} + R_1)\right].
\end{aligned}
$$

Expand the bracket:

$$
\begin{aligned}
R_1D &= R_1^2 + R_1r_{O1} + R_1r_{O3} + g_{m3}r_{O1}r_{O3}R_1,\\
(R_1 + r_{O3})(r_{O1} + R_1) &= R_1^2 + R_1r_{O1} + R_1r_{O3} + r_{O1}r_{O3},\\
\text{difference} &= g_{m3}r_{O1}r_{O3}R_1 - r_{O1}r_{O3} = -r_{O1}r_{O3}(1 - g_{m3}R_1).
\end{aligned}
$$

Therefore

$$v_A = -\frac{g_{m1}r_{O1}r_{O3}(1 - g_{m3}R_1)}{R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}}\,v_{in}.$$

### Step 5 — Differential gain

$v_{out} = v_A - v_{A'} = 2v_A$ and $v_{in1} - v_{in2} = 2v_{in}$, so the differential gain equals the half-circuit gain $v_A/v_{in}$:

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{g_{m1}r_{O1}r_{O3}(1 - g_{m3}R_1)}{R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}} .$$

### Step 6 — Checks and interpretation

**Limit $r_O \to \infty$.** Divide numerator and denominator by $r_{O1}r_{O3}$:

$$A_v = -\frac{g_{m1}(1 - g_{m3}R_1)}{g_{m3} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{R_1}{r_{O1}r_{O3}}}\ \longrightarrow\ -\frac{g_{m1}(1 - g_{m3}R_1)}{g_{m3}} = -g_{m1}\left(\frac{1}{g_{m3}} - R_1\right).$$

With $\lambda = 0$ the two KCL equations give this directly. B sits at $v_B = -(g_{m1}/g_{m3})v_{in}$ (the PMOS must supply the extra $g_{m1}v_{in}$ through its gate drive). The output then sits above B by the drop across $R_1$, so $v_A = v_B + R_1g_{m1}v_{in} = v_B(1 - g_{m3}R_1)$.

**Limit $R_1 = 0$.** Then $A_v = -g_{m1}r_{O1}r_{O3}/(r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}) = -g_{m1}(1/g_{m3}\parallel r_{O1}\parallel r_{O3})$, the familiar diode-connected load, as expected because A and B merge.

**Effect of $R_1$.** The output is taken above $R_1$, so it moves **opposite** to the gate node B: more current pulls B down but raises A relative to B. The gain therefore falls as $R_1$ grows, vanishes at $R_1 = 1/g_{m3}$, and changes sign for $R_1 > 1/g_{m3}$.

*Numerical feel:* with $g_{m1} = g_{m3} = 1$ mS, $r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$ and $R_1 = 500\ \Omega$:

$$
\begin{aligned}
\text{numerator} &= (1\ \mathrm{mS})(50\ \mathrm{k}\Omega)^2(1 - 0.5) = 1.25\times10^{6}\ \Omega,\\
D &= 0.5\ \mathrm{k}\Omega + 50\ \mathrm{k}\Omega + 50\ \mathrm{k}\Omega + (1\ \mathrm{mS})(50\ \mathrm{k}\Omega)^2 = 2.6005\times10^{6}\ \Omega,\\
A_v &= -\frac{1.25\times10^{6}}{2.6005\times10^{6}} = -0.48,
\end{aligned}
$$

close to the $\lambda = 0$ value $-(1\ \mathrm{mS})(1\ \mathrm{k}\Omega - 0.5\ \mathrm{k}\Omega) = -0.5$.

### Result

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{g_{m1}r_{O1}r_{O3}\,(1 - g_{m3}R_1)}{R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}}, \qquad A_v \xrightarrow{\ r_O\to\infty\ } -g_{m1}\left(\frac{1}{g_{m3}} - R_1\right).$$

The gain falls as $R_1$ grows, vanishes at $R_1 = 1/g_{m3}$ and changes sign beyond.

**Common mistake.** Writing $-g_{m1}(1/g_{m3} + R_1)$, i.e. treating $R_1$ as adding to the diode impedance. The gate of $M_3$ is at the *bottom* of $R_1$ and the output at the *top*, so the drop across $R_1$ opposes the change at the gate: $R_1$ **subtracts**.

**Common mistake.** Ignoring $R_1$ and giving the plain diode-load gain $-g_{m1}/g_{m3}$, or taking the output at the drain of $M_1$ (node B). The output terminal in the figure is node A, at the top of $R_1$.

**Common mistake.** Algebra slips in the two-node solution, for example forgetting that no current enters the gate of $M_3$, so the current in $R_1$ is exactly the drain current of $M_1$. Checking the final result against the two limits ($R_1 = 0$ and $r_O \to \infty$) catches most such errors.
