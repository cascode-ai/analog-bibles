# Detailed solution - R388

**Approach.** With an ideal current-source load and $\lambda = 0$, the open-loop output resistance at the drain of $M_1$ is infinite. It becomes finite only through the loop: the divider $C_1$/$C_2$ samples the output, $M_2$ converts it to a current at the source of $M_1$, and $M_1$ passes part of it back to the output. Apply a test voltage at the output, follow it around the loop with KCL, and compute $V_X/I_X$.

### Step 1 — Small-signal model

Call the source of $M_1$ node S and the gate of $M_2$ node P. With $V_{in}$ at ac ground and a test source $V_X$ (current $I_X$) at the output:

- $M_1$: gate and bulk at ac ground, so $v_{gs1} = v_{bs1} = -V_S$ and it carries $-(g_{m1} + g_{mb1})V_S$ from out to S (no $r_{O1}$).
- $R_S$ from S to ground.
- $M_2$: $g_{m2}V_P$ from S to ground (source and bulk grounded, so no body effect; no $r_{O2}$).
- $C_1$ from out to P, $C_2$ from P to ground; the current-source load is an open circuit.

<!-- diagram: diagram-01.cir -->

### Step 2 — The feedback voltage at P

The gate of $M_2$ draws no current, so

$$V_P = \frac{C_1}{C_1 + C_2}V_X .$$

At low frequencies the current through the series $C_1$–$C_2$ branch, of order $\omega C_1C_2V_X/(C_1 + C_2)$, is negligible, so this branch only *senses* the output.

### Step 3 — KCL at the source of $M_1$

The current through $M_1$ enters S and leaves through $R_S$ and $M_2$:

$$-(g_{m1} + g_{mb1})V_S = \frac{V_S}{R_S} + g_{m2}V_P ,$$

$$
\begin{aligned}
-V_S\left(g_{m1} + g_{mb1} + \frac{1}{R_S}\right) &= g_{m2}V_P\\
V_S &= -\frac{g_{m2}V_PR_S}{1 + (g_{m1} + g_{mb1})R_S}.
\end{aligned}
$$

The drain current of $M_1$ (from out to S) is then

$$I_{D1} = -(g_{m1} + g_{mb1})V_S = g_{m2}V_P\,\frac{(g_{m1} + g_{mb1})R_S}{1 + (g_{m1} + g_{mb1})R_S} = g_{m2}V_P\,\frac{R_S}{R_S + \dfrac{1}{g_{m1} + g_{mb1}}}.$$

$M_2$ pulls $g_{m2}V_P$ out of S, supplied partly by $R_S$ and partly by $M_1$ (whose source looks like $1/(g_{m1} + g_{mb1})$); $M_1$'s share is drawn from the output.

### Step 4 — Output impedance

With the ideal current-source load, the test current can only flow through $M_1$, so $I_X = I_{D1}$:

$$I_X = \frac{C_1}{C_1 + C_2}\,g_{m2}\,\frac{(g_{m1} + g_{mb1})R_S}{1 + (g_{m1} + g_{mb1})R_S}\,V_X ,$$

$$Z_{out} = \frac{V_X}{I_X} = \frac{C_1 + C_2}{C_1}\cdot\frac{1 + (g_{m1} + g_{mb1})R_S}{g_{m2}(g_{m1} + g_{mb1})R_S} = \left(1 + \frac{C_2}{C_1}\right)\left[\frac{1}{g_{m2}} + \frac{1}{g_{m2}(g_{m1} + g_{mb1})R_S}\right].$$

### Step 5 — Interpretation and limits

- **Large $(g_{m1} + g_{mb1})R_S$:** almost all of $M_2$'s current comes through $M_1$, and $Z_{out} \to (1 + C_2/C_1)/g_{m2}$: the loop acts as a "diode" of transconductance $g_{m2}\beta$, with $\beta = C_1/(C_1 + C_2)$.
- **Without feedback** ($g_{m2} = 0$) the expression is infinite, the open-loop value.
- **Finite $R_D$:** the closed-loop impedance would be $R_D/(1 + \text{loop gain})$, with loop gain $R_D\,g_{m2}\beta(g_{m1} + g_{mb1})R_S/[1 + (g_{m1} + g_{mb1})R_S]$; letting $R_D \to \infty$ gives exactly the result above.

**Sign check.** A rising $V_X$ raises $V_P$, so $M_2$ draws more current from S, $V_S$ falls, and $M_1$ draws *more* current from the output: a positive, finite resistance.

### Result

$$Z_{out} = \frac{C_1 + C_2}{C_1}\cdot\frac{1 + (g_{m1} + g_{mb1})R_S}{g_{m2}(g_{m1} + g_{mb1})R_S} = \left(1 + \frac{C_2}{C_1}\right)\left[\frac{1}{g_{m2}} + \frac{1}{g_{m2}(g_{m1} + g_{mb1})R_S}\right],$$

which tends to $(1 + C_2/C_1)/g_{m2}$ for large $(g_{m1} + g_{mb1})R_S$. Without the feedback through $C_1$, $C_2$ and $M_2$ the output impedance would be infinite.

**Common mistake.** Concluding that $Z_{out}$ is infinite because the load is ideal and $\lambda = 0$. That is the open-loop value; the loop makes the output draw current in proportion to its voltage.

**Common mistake.** Inverting the divider ratio to $C_2/(C_1 + C_2)$. $V_P$ is the fraction of the output across $C_2$, i.e. $V_XC_1/(C_1 + C_2)$.

**Common mistake.** Returning $M_2$'s current directly to the output, ignoring the split at S. Only the fraction $R_S/[R_S + 1/(g_{m1} + g_{mb1})]$ passes through $M_1$; leaving out $g_{mb1}$ changes this fraction slightly.
