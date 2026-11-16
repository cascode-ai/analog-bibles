# Detailed solution - R388

**Approach.** With an ideal current-source load and no channel-length modulation, the open-loop output resistance at the drain of $M_1$ is infinite. The output impedance becomes finite only through the feedback loop: the output voltage is sampled by the divider $C_1$/$C_2$, converted to a current by $M_2$, and returned to the source of $M_1$, which passes part of it back to the output. We apply a test voltage at the output, follow it around this loop with KCL, and compute $V_X/I_X$.

### Step 1 — The circuit and its small-signal model

Reading the figure (with $R_D$ replaced by an ideal current source):

- $M_1$: gate = $V_{in}$ (set to AC ground for an output-impedance calculation), drain = output, source = node S.
- $R_S$ from S to ground.
- $M_2$: drain at S, source grounded, gate at node P.
- $C_1$ from the output to P, $C_2$ from P to ground.
- The load is an ideal current source: an open circuit for small signals.

**Small-signal model in words.** Nodes: out, S and P. A test source $V_X$ is applied at the output and supplies the current $I_X$.

- $M_1$: from out to S it carries $g_{m1}v_{gs1} + g_{mb1}v_{bs1}$. With the gate and the bulk at AC ground, $v_{gs1} = v_{bs1} = -V_S$, so the current is $-(g_{m1} + g_{mb1})V_S$. Here $g_{m1}$ is the transconductance and $g_{mb1}$ the body transconductance. There is no $r_{O1}$ ($\lambda = 0$).
- $R_S$ from S to ground.
- $M_2$: a controlled current $g_{m2}V_P$ from S (its drain) to ground; its source and bulk are grounded, so it has no body effect; no $r_{O2}$.
- $C_1$ from out to P, $C_2$ from P to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — The feedback voltage at P

The gate of $M_2$ draws no current, so P is set by the capacitive divider:

$$V_P = \frac{C_1}{C_1 + C_2}V_X .$$

At low frequencies the current through the series $C_1$–$C_2$ branch, of order $\omega C_1C_2V_X/(C_1 + C_2)$, is negligible compared with the transistor currents, so this branch only *senses* the output voltage.

### Step 3 — KCL at the source of $M_1$

The current through $M_1$ enters S and leaves through $R_S$ and through $M_2$:

$$-(g_{m1} + g_{mb1})V_S = \frac{V_S}{R_S} + g_{m2}V_P .$$

Collect the $V_S$ terms:

$$
\begin{aligned}
-V_S\left(g_{m1} + g_{mb1} + \frac{1}{R_S}\right) &= g_{m2}V_P\\
V_S &= -\frac{g_{m2}V_PR_S}{1 + (g_{m1} + g_{mb1})R_S}.
\end{aligned}
$$

The drain current of $M_1$ (from out to S) is then

$$I_{D1} = -(g_{m1} + g_{mb1})V_S = g_{m2}V_P\,\frac{(g_{m1} + g_{mb1})R_S}{1 + (g_{m1} + g_{mb1})R_S} = g_{m2}V_P\,\frac{R_S}{R_S + \dfrac{1}{g_{m1} + g_{mb1}}}.$$

**Interpretation as a current divider.** $M_2$ pulls the current $g_{m2}V_P$ out of node S. That current is supplied partly by $R_S$ and partly by $M_1$, whose source looks like a resistance $1/(g_{m1} + g_{mb1})$. The fraction delivered by $M_1$ is $R_S/[R_S + 1/(g_{m1} + g_{mb1})]$, and it is drawn from the output node.

### Step 4 — Output impedance

With the ideal current-source load, the only path for the test current at the output is $M_1$ (the capacitive branch is negligible), so $I_X = I_{D1}$:

$$I_X = \frac{C_1}{C_1 + C_2}\,g_{m2}\,\frac{(g_{m1} + g_{mb1})R_S}{1 + (g_{m1} + g_{mb1})R_S}\,V_X .$$

Therefore

$$Z_{out} = \frac{V_X}{I_X} = \frac{C_1 + C_2}{C_1}\cdot\frac{1 + (g_{m1} + g_{mb1})R_S}{g_{m2}(g_{m1} + g_{mb1})R_S}.$$

Splitting the second fraction:

$$Z_{out} = \left(1 + \frac{C_2}{C_1}\right)\left[\frac{1}{g_{m2}} + \frac{1}{g_{m2}(g_{m1} + g_{mb1})R_S}\right].$$

### Step 5 — Interpretation and limits

- **Large $(g_{m1} + g_{mb1})R_S$:** almost all of $M_2$'s current comes through $M_1$, and $Z_{out} \to (1 + C_2/C_1)/g_{m2}$. The loop then acts as a "diode" of transconductance $g_{m2}\beta$, with $\beta = C_1/(C_1 + C_2)$ the fraction of the output fed back.
- **Without feedback** ($g_{m2} = 0$) the expression is infinite, consistent with the open-loop output resistance of a degenerated device with $\lambda = 0$ and an ideal current-source load.
- **Consistency with a finite $R_D$:** with the resistor $R_D$ in place, the closed-loop output impedance would be $R_D/(1 + \text{loop gain})$, with loop gain $R_D\,g_{m2}\beta(g_{m1} + g_{mb1})R_S/[1 + (g_{m1} + g_{mb1})R_S]$. Letting $R_D \to \infty$ gives exactly the result above.

**Sign check.** If $V_X$ rises, $V_P$ rises, $M_2$ draws more current from S, $V_S$ falls, $M_1$'s $V_{GS}$ grows and it draws *more* current from the output. A rising voltage that draws more current is a positive, finite resistance: the feedback lowers the impedance from infinity to $Z_{out}$.

### Result

$$Z_{out} = \frac{C_1 + C_2}{C_1}\cdot\frac{1 + (g_{m1} + g_{mb1})R_S}{g_{m2}(g_{m1} + g_{mb1})R_S} = \left(1 + \frac{C_2}{C_1}\right)\left[\frac{1}{g_{m2}} + \frac{1}{g_{m2}(g_{m1} + g_{mb1})R_S}\right],$$

which tends to $(1 + C_2/C_1)/g_{m2}$ for large $(g_{m1} + g_{mb1})R_S$. Without the feedback through $C_1$, $C_2$ and $M_2$ the output impedance would be infinite.

**Common mistake.** Concluding that $Z_{out}$ is infinite because the load is an ideal current source and $\lambda = 0$. That is the open-loop value; the feedback loop through the divider and $M_2$ makes the output draw current in proportion to its voltage.

**Common mistake.** Inverting the divider ratio to $C_2/(C_1 + C_2)$. The voltage at P is the fraction of the output across $C_2$, i.e. $V_P = V_XC_1/(C_1 + C_2)$ (the larger $C_1$, the more of the output reaches P).

**Common mistake.** Returning $M_2$'s current directly to the output, or ignoring the split at node S. $M_2$ draws its current from the source of $M_1$, and only the fraction $R_S/[R_S + 1/(g_{m1} + g_{mb1})]$ of it passes through $M_1$ to the output. Leaving out $g_{mb1}$ changes this fraction slightly.
