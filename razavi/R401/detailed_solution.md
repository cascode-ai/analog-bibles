# Detailed solution - R401

**Approach.** $M_1$ is a common-gate (CG) stage: the input drives its source and the output is taken at its drain. The capacitive divider $C_1$–$C_2$ samples $V_{out}$ and applies a fraction of it to the gate, i.e. in series with the input loop. This is series–shunt (voltage–voltage) feedback, so the input impedance is the open-loop value multiplied by $(1 + T)$ and the output impedance is the open-loop value divided by $(1 + T)$, where $T$ is the loop gain. We compute the open-loop quantities and $T$, then check both answers by direct KCL.

### Step 1 — Small-signal model

Reading the figure: the ideal current source $I_1$ feeds the output node, which is the drain of $M_1$. $C_1$ connects the output to node P (the gate of $M_1$), and $C_2$ connects P to ground. $V_{in}$ drives the source of $M_1$; the bulk of $M_1$ is at ground.

Small-signal elements:

- **$I_1$** is ideal, so it is an open circuit for small signals.
- **$M_1$** is a controlled current source from drain (output) to source (input) of value
$$i_d = g_{m1}v_{GS} + g_{mb1}v_{BS} = g_{m1}(v_P - v_{in}) - g_{mb1}v_{in},$$
where $g_{mb1}$ is the body-effect transconductance and $v_{BS} = 0 - v_{in}$ because the bulk is grounded. With $\lambda = 0$ there is no $r_O$.
- **The gate draws no current**, so the same current flows through $C_1$ and $C_2$.

<!-- diagram: diagram-01.cir -->

In words: a controlled current $i_d$ from the output node to the input node, $C_1$ from the output to P, and $C_2$ from P to ground. Nothing else is connected to the output node.

### Step 2 — Identify the feedback

**Sensing.** The divider is connected across the output (output to ground), so it senses the output **voltage** (a shunt connection at the output).

**Feedback factor.** With no current drawn from P, the divider gives

$$v_P = \beta\,v_{out}, \qquad \beta = \frac{1/(sC_2)}{1/(sC_1) + 1/(sC_2)} = \frac{C_1}{C_1 + C_2} .$$

**Mixing.** The transistor responds to $v_{GS} = v_P - v_{in}$, so the fed-back voltage $v_P$ is *subtracted in series* from the input voltage in the loop source–gate. This is series mixing at the input.

So the feedback is **series–shunt**. Series mixing *raises* the input impedance by $(1 + T)$; shunt sensing *lowers* the output impedance by $(1 + T)$.

**Loading by the divider.** Seen from the output, with node P left open (no current enters the gate), the divider is $C_1$ in series with $C_2$:

$$C_s = \frac{C_1C_2}{C_1 + C_2} .$$

Seen from the gate, the divider carries no current, so in the open-loop circuit the gate is simply at ac ground.

### Step 3 — Open-loop circuit and loop gain

**Open-loop circuit.** Gate at ac ground and the output loaded only by $C_s$. This is a plain CG stage.

**Open-loop input impedance.** With the gate grounded, $i_d = -(g_{m1} + g_{mb1})v_{in}$. The current entering the source from $V_{in}$ is $-i_d$, so

$$Z_{in,open} = \frac{v_{in}}{-i_d} = \frac{1}{g_{m1} + g_{mb1}} .$$

With $\lambda = 0$ this does not depend on the load.

**Open-loop output impedance.** With the input source set to zero ($v_{in} = 0$) and the gate grounded, $i_d = 0$ whatever the output voltage ($\lambda = 0$). The ideal $I_1$ is open, so the only thing the output sees is the divider:

$$Z_{out,open} = \frac{1}{sC_s} .$$

**Loop gain $T$.** Set $v_{in} = 0$ (source at ac ground, so the body effect is inactive), break the loop at the gate, and apply a test voltage $v_t$ to the gate:

$$
\begin{aligned}
i_d &= g_{m1}v_t \quad\text{(flowing out of the output node, down through } M_1\text{)}\\
sC_s\,v_{out} &= -i_d \quad\text{(KCL at the output: only the divider can supply } i_d\text{)}\\
v_{out} &= -\frac{g_{m1}v_t}{sC_s}\\
v_P &= \beta\,v_{out} = -\frac{g_{m1}\beta}{sC_s}\,v_t .
\end{aligned}
$$

The loop gain is minus the returned signal over the injected one:

$$T = -\frac{v_P}{v_t} = \frac{g_{m1}\beta}{sC_s} .$$

Simplify $\beta/C_s$:

$$\frac{\beta}{C_s} = \frac{C_1}{C_1 + C_2}\cdot\frac{C_1 + C_2}{C_1C_2} = \frac{1}{C_2}
\qquad\Longrightarrow\qquad
T = \frac{g_{m1}}{sC_2} .$$

Only $g_{m1}$ appears, because the returned signal acts on the gate, not on the bulk. $|T| \to \infty$ as $\omega \to 0$: at dc the output node is loaded only by capacitors, so the open-loop gain is unlimited.

### Step 4 — Closed-loop input impedance

Series mixing multiplies the open-loop input impedance by $(1 + T)$:

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

Let $i_{in}$ be the current that $V_{in}$ pushes into the source. It flows through $M_1$ (source to drain, so $i_d = -i_{in}$) into the output node. Since $I_1$ is ideal, this current has only one way out: down through $C_1$ and then $C_2$ to ground. The same current $i_{in}$ therefore flows through $C_2$:

$$v_P = \frac{i_{in}}{sC_2} .$$

The transistor equation $i_d = g_{m1}(v_P - v_{in}) - g_{mb1}v_{in}$ with $i_d = -i_{in}$ gives:

$$
\begin{aligned}
-i_{in} &= g_{m1}\frac{i_{in}}{sC_2} - (g_{m1} + g_{mb1})\,v_{in}\\
(g_{m1} + g_{mb1})\,v_{in} &= i_{in}\left(1 + \frac{g_{m1}}{sC_2}\right)\\
Z_{in} = \frac{v_{in}}{i_{in}} &= \frac{1 + g_{m1}/(sC_2)}{g_{m1} + g_{mb1}} ,
\end{aligned}
$$

which matches Step 4. For $g_{mb1} = 0$ the result has a simple reading: $v_{in}$ equals the gate-to-source voltage needed to carry $i_{in}$ ($i_{in}/g_{m1}$) plus the gate voltage $v_P = i_{in}/(sC_2)$ that the same current develops on $C_2$. The value of $C_1$ drops out.

**Intuition.** If $V_{in}$ rises, $M_1$ conducts less, the output rises, and the divider raises the gate. That restores part of $v_{GS}$, so less current change is drawn from the source: the impedance goes up. At dc the restoration is complete, so $Z_{in} \to \infty$.

### Step 6 — Closed-loop output impedance and its check

Shunt sensing divides the open-loop output impedance by $(1 + T)$:

$$
\begin{aligned}
Z_{out} &= \frac{Z_{out,open}}{1 + T} = \frac{1/(sC_s)}{1 + g_{m1}/(sC_2)}\\
&= \frac{1}{sC_s + g_{m1}C_s/C_2}\\
&= \frac{1}{sC_s + g_{m1}\,\dfrac{C_1}{C_1 + C_2}} .
\end{aligned}
$$

**Direct check.** Set $V_{in} = 0$ (source grounded, so $v_{BS} = 0$ and $g_{mb1}$ plays no part) and apply $v_X$ to the output. The current $I_X$ drawn from the test source has two parts:

- through $M_1$: $g_{m1}v_P = g_{m1}\beta v_X$;
- through the series capacitors: $sC_sv_X$.

$$
\begin{aligned}
I_X &= v_X\left(g_{m1}\frac{C_1}{C_1 + C_2} + s\frac{C_1C_2}{C_1 + C_2}\right) = v_X\,\frac{C_1\,(g_{m1} + sC_2)}{C_1 + C_2}\\
Z_{out} &= \frac{v_X}{I_X} = \frac{C_1 + C_2}{C_1\,(g_{m1} + sC_2)} .
\end{aligned}
$$

This agrees with the feedback result. It is two branches in parallel:

$$Z_{out} = \frac{1 + C_2/C_1}{g_{m1}}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)} .$$

At low frequencies $Z_{out} \approx (1 + C_2/C_1)/g_{m1} = 1/(\beta g_{m1})$. The circuit acts like a diode-connected transistor whose gate receives only the fraction $\beta$ of the drain voltage.

### Result

$$Z_{in} = \frac{1}{g_{m1}} + \frac{1}{sC_2}\qquad(\text{without body effect}),$$

$$Z_{in} = \frac{1}{g_{m1} + g_{mb1}} + \frac{g_{m1}}{(g_{m1} + g_{mb1})\,sC_2}\qquad(\text{with body effect}),$$

$$Z_{out} = \frac{C_1 + C_2}{C_1\,(g_{m1} + sC_2)} = \frac{1 + C_2/C_1}{g_{m1}}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)} \approx \frac{1 + C_2/C_1}{g_{m1}}\ \text{at low frequencies}.$$

The loop gain is $T = g_{m1}/(sC_2)$ with $\beta = C_1/(C_1 + C_2)$: $Z_{in} = Z_{in,open}(1 + T)$ and $Z_{out} = Z_{out,open}/(1 + T)$, with $Z_{in,open} = 1/(g_{m1} + g_{mb1})$ and $Z_{out,open} = 1/(sC_s)$.

**Common mistake.** Concluding that the input impedance stays at $1/g_{m1}$, or is reduced by the feedback. The divider returns the output voltage to the gate, which is *in series* with the source–gate input loop. Series mixing raises the impedance by $(1 + T)$, which is why a $1/(sC_2)$ term appears.

**Common mistake.** Inverting the divider ratio. $C_1$ is the upper capacitor (output to P) and $C_2$ the lower one (P to ground), so $v_P/v_{out} = C_1/(C_1 + C_2)$ and $Z_{out} \approx (1 + C_2/C_1)/g_{m1}$, not $(1 + C_1/C_2)/g_{m1}$.

**Common mistake.** Analysing the circuit as a common-source stage with the input at the gate. Here $V_{in}$ drives the **source**, and the gate is driven only by the divider. Treating the gate as the input changes both the loop and the impedances.
