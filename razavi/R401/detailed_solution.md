# Detailed solution - R401

**Approach.** $M_1$ is a common-gate stage, and the divider $C_1$–$C_2$ returns a fraction of $V_{out}$ to its gate, in series with the source–gate input loop: series–shunt feedback. So $Z_{in}$ is the open-loop value times $(1 + T)$ and $Z_{out}$ the open-loop value divided by $(1 + T)$. We find the open-loop quantities and $T$, then check both answers by direct KCL.

### Step 1 — Small-signal model

The ideal $I_1$ is an open circuit for small signals, and with $\lambda = 0$ there is no $r_O$. $M_1$ is a controlled current from the drain (output) to the source (input); its bulk is grounded, so $v_{BS} = 0 - v_{in}$:

$$i_d = g_{m1}v_{GS} + g_{mb1}v_{BS} = g_{m1}(v_P - v_{in}) - g_{mb1}v_{in}.$$

The gate (node P) draws no current, so the same current flows through $C_1$ and $C_2$. Nothing else is connected to the output node.

<!-- diagram: diagram-01.cir -->

### Step 2 — Identify the feedback

The divider sits across the output, so it senses the output **voltage** (shunt sensing). With no current drawn from P,

$$v_P = \beta\,v_{out}, \qquad \beta = \frac{1/(sC_2)}{1/(sC_1) + 1/(sC_2)} = \frac{C_1}{C_1 + C_2} .$$

$M_1$ responds to $v_{GS} = v_P - v_{in}$, so $v_P$ is subtracted in series from the input in the source–gate loop (series mixing). The feedback is therefore **series–shunt**: it raises $Z_{in}$ by $(1 + T)$ and lowers $Z_{out}$ by $(1 + T)$.

**Loading.** From the output, with P carrying no gate current, the divider is $C_1$ in series with $C_2$:

$$C_s = \frac{C_1C_2}{C_1 + C_2} .$$

From the gate side the divider carries no current, so in the open-loop circuit the gate is simply at ac ground.

### Step 3 — Open-loop circuit and loop gain

The open-loop circuit is a plain CG stage: gate at ac ground, output loaded only by $C_s$.

**Open-loop input impedance.** With the gate grounded, $i_d = -(g_{m1} + g_{mb1})v_{in}$, and the current entering the source from $V_{in}$ is $-i_d$:

$$Z_{in,open} = \frac{v_{in}}{-i_d} = \frac{1}{g_{m1} + g_{mb1}} ,$$

independent of the load because $\lambda = 0$.

**Open-loop output impedance.** With $v_{in} = 0$ and the gate grounded, $i_d = 0$ whatever the output voltage, and $I_1$ is open, so the output sees only the divider:

$$Z_{out,open} = \frac{1}{sC_s} .$$

**Loop gain.** Set $v_{in} = 0$ (source at ac ground, so the body effect is inactive), break the loop at the gate, and apply $v_t$ there:

$$
\begin{aligned}
i_d &= g_{m1}v_t \quad\text{(out of the output node, down through } M_1\text{)}\\
sC_s\,v_{out} &= -i_d \quad\text{(KCL at the output: only the divider can supply } i_d\text{)}\\
v_{out} &= -\frac{g_{m1}v_t}{sC_s}\\
v_P &= \beta\,v_{out} = -\frac{g_{m1}\beta}{sC_s}\,v_t .
\end{aligned}
$$

$$
\begin{aligned}
T &= -\frac{v_P}{v_t} = \frac{g_{m1}\beta}{sC_s},\\
\frac{\beta}{C_s} &= \frac{C_1}{C_1 + C_2}\cdot\frac{C_1 + C_2}{C_1C_2} = \frac{1}{C_2}
\quad\Longrightarrow\quad
T = \frac{g_{m1}}{sC_2} .
\end{aligned}
$$

Only $g_{m1}$ appears, because the returned signal acts on the gate, not the bulk. $|T| \to \infty$ as $\omega \to 0$, since the output node is loaded only by capacitors.

### Step 4 — Closed-loop input impedance

$$
\begin{aligned}
Z_{in} &= Z_{in,open}\,(1 + T)\\
&= \frac{1}{g_{m1} + g_{mb1}}\left(1 + \frac{g_{m1}}{sC_2}\right)\\
&= \frac{1}{g_{m1} + g_{mb1}} + \frac{g_{m1}}{(g_{m1} + g_{mb1})\,sC_2} .
\end{aligned}
$$

Without the body effect ($g_{mb1} = 0$):

$$Z_{in} = \frac{1}{g_{m1}} + \frac{1}{sC_2} .$$

### Step 5 — Direct check of $Z_{in}$

The current $i_{in}$ that $V_{in}$ pushes into the source flows through $M_1$ ($i_d = -i_{in}$) into the output node and, since $I_1$ is ideal, out only through $C_1$ and then $C_2$ to ground. So

$$v_P = \frac{i_{in}}{sC_2} .$$

Substituting into $i_d = g_{m1}(v_P - v_{in}) - g_{mb1}v_{in}$ with $i_d = -i_{in}$:

$$
\begin{aligned}
-i_{in} &= g_{m1}\frac{i_{in}}{sC_2} - (g_{m1} + g_{mb1})\,v_{in}\\
(g_{m1} + g_{mb1})\,v_{in} &= i_{in}\left(1 + \frac{g_{m1}}{sC_2}\right)\\
Z_{in} = \frac{v_{in}}{i_{in}} &= \frac{1 + g_{m1}/(sC_2)}{g_{m1} + g_{mb1}} ,
\end{aligned}
$$

which matches Step 4. For $g_{mb1} = 0$: $v_{in}$ is the $v_{GS}$ needed to carry $i_{in}$ ($i_{in}/g_{m1}$) plus the gate voltage $i_{in}/(sC_2)$ the same current develops on $C_2$; $C_1$ drops out. As $V_{in}$ rises, the output and (through the divider) the gate rise with it, restoring $v_{GS}$, so $Z_{in} \to \infty$ at dc.

### Step 6 — Closed-loop output impedance and its check

$$
\begin{aligned}
Z_{out} &= \frac{Z_{out,open}}{1 + T} = \frac{1/(sC_s)}{1 + g_{m1}/(sC_2)}\\
&= \frac{1}{sC_s + g_{m1}C_s/C_2}\\
&= \frac{1}{sC_s + g_{m1}\,\dfrac{C_1}{C_1 + C_2}} .
\end{aligned}
$$

**Direct check.** Set $V_{in} = 0$ (so $v_{BS} = 0$ and $g_{mb1}$ plays no part) and apply $v_X$ at the output. The test source supplies $g_{m1}v_P = g_{m1}\beta v_X$ through $M_1$ and $sC_sv_X$ through the series capacitors:

$$
\begin{aligned}
I_X &= v_X\left(g_{m1}\frac{C_1}{C_1 + C_2} + s\frac{C_1C_2}{C_1 + C_2}\right) = v_X\,\frac{C_1\,(g_{m1} + sC_2)}{C_1 + C_2}\\
Z_{out} &= \frac{v_X}{I_X} = \frac{C_1 + C_2}{C_1\,(g_{m1} + sC_2)} ,
\end{aligned}
$$

in agreement with the feedback result. It is two branches in parallel:

$$Z_{out} = \frac{1 + C_2/C_1}{g_{m1}}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)} .$$

At low frequencies $Z_{out} \approx (1 + C_2/C_1)/g_{m1} = 1/(\beta g_{m1})$: a diode-connected transistor whose gate receives only the fraction $\beta$ of the drain voltage.

### Result

$$Z_{in} = \frac{1}{g_{m1}} + \frac{1}{sC_2}\qquad(\text{without body effect}),$$

$$Z_{in} = \frac{1}{g_{m1} + g_{mb1}} + \frac{g_{m1}}{(g_{m1} + g_{mb1})\,sC_2}\qquad(\text{with body effect}),$$

$$Z_{out} = \frac{C_1 + C_2}{C_1\,(g_{m1} + sC_2)} = \frac{1 + C_2/C_1}{g_{m1}}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)} \approx \frac{1 + C_2/C_1}{g_{m1}}\ \text{at low frequencies}.$$

The loop gain is $T = g_{m1}/(sC_2)$ with $\beta = C_1/(C_1 + C_2)$: $Z_{in} = Z_{in,open}(1 + T)$ and $Z_{out} = Z_{out,open}/(1 + T)$, with $Z_{in,open} = 1/(g_{m1} + g_{mb1})$ and $Z_{out,open} = 1/(sC_s)$.

**Common mistake.** Concluding that the input impedance stays at $1/g_{m1}$, or is reduced by the feedback. The divider returns $v_{out}$ to the gate, in series with the source–gate input loop, so the impedance rises by $(1 + T)$, hence the $1/(sC_2)$ term.

**Common mistake.** Inverting the divider ratio. $C_1$ runs from the output to P and $C_2$ from P to ground, so $v_P/v_{out} = C_1/(C_1 + C_2)$ and $Z_{out} \approx (1 + C_2/C_1)/g_{m1}$, not $(1 + C_1/C_2)/g_{m1}$.

**Common mistake.** Analysing the circuit as a common-source stage with the input at the gate. $V_{in}$ drives the **source**; the gate is driven only by the divider.
