# Detailed solution - R541

**Approach.** In steady state the op amp's output must sit at whatever DC voltage the PMOS gates need, $V_G = V_{DD} - |V_{GS}|$. A voltage amplifier with finite gain $A_1$ can produce that output only if its inputs differ by $V_G/A_1$. Requiring this residual difference to stay below $V_e$ gives the minimum gain. We then check the feedback polarity and estimate what the residual error does to the output.

### Step 1 — What the op amp must deliver

The op amp output drives the common gate node of $M_1$–$M_4$, whose sources are at $V_{DD}$. To carry the bias current set by the loop, the PMOS devices need a source–gate voltage $|V_{GS}|$, so the op amp output must be at

$$V_G = V_{DD} - |V_{GS}| .$$

This is a fixed DC level of order volts. For example, $|V_{GS}| \approx 1$ V (threshold 0.8 V plus about 0.2 V of overdrive) gives $V_G \approx 2$ V. Since the PMOS threshold is $-0.8$ V, $|V_{GS}| > 0.8$ V and $V_G < 2.2$ V.

### Step 2 — Input difference required by a finite gain

With the given model (output $= A_1(V_+ - V_-)$), the non-inverting input at Y and the inverting input at X give

$$V_G = A_1\,(V_Y - V_X)\quad\Longrightarrow\quad V_Y - V_X = \frac{V_G}{A_1} = \frac{V_{DD} - |V_{GS}|}{A_1}.$$

An infinite gain would force $V_X = V_Y$ exactly. With a finite gain the loop settles where the op amp sees just enough input to hold its output at $V_G$.

**Polarity check (negative feedback).** If the gate voltage rises, all PMOS currents fall. $V_X$ (two emitter–base voltages) drops only logarithmically, while $V_Y$ (two emitter–base voltages plus $I_{D2}R_1$) drops more because of the linear $IR_1$ term. So $V_Y - V_X$ falls, which pushes the op amp output back down. The loop is indeed negative-feedback, and in steady state $V_Y$ sits slightly *above* $V_X$.

### Step 3 — Minimum gain

Require $|V_X - V_Y| < V_e$:

$$\frac{V_{DD} - |V_{GS}|}{A_1} < V_e
\quad\Longrightarrow\quad
\boxed{A_{1,min} = \frac{V_{DD} - |V_{GS}|}{V_e}}$$

**Numerical example.** With $V_{DD} = 3$ V and $|V_{GS}| \approx 1$ V, $V_G \approx 2$ V, so

$$A_1 \gtrsim \frac{2\ \mathrm{V}}{V_e}:\qquad V_e = 1\ \mathrm{mV} \Rightarrow A_1 > 2000\ (66\ \mathrm{dB}),\qquad V_e = 0.1\ \mathrm{mV} \Rightarrow A_1 > 20{,}000\ (86\ \mathrm{dB}).$$

### Step 4 — Why $V_e$ must be small: effect on the output

The difference $V_Y - V_X$ acts exactly like an input offset of the op amp. Writing the loop condition with it (and equal branch currents $I$):

$$V_Y = |V_{EB3}| + |V_{EB4}| + IR_1 = V_X + \frac{V_G}{A_1}
\quad\Longrightarrow\quad
IR_1 = 2V_T\ln n + \frac{V_G}{A_1},$$

using $V_X - |V_{EB3}| - |V_{EB4}| = 2V_T\ln n$ (the $n$-times-larger area of $Q_3$, $Q_4$). Here $V_T = kT/q$. The output $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)IR_1$ therefore shifts by about

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{V_G}{A_1} < \left(1 + \frac{R_2}{R_1}\right)V_e .$$

With a typical $1 + R_2/R_1 \approx 8$, a 1-mV residual becomes an 8-mV output error, and it varies with temperature and supply because $V_G$ does. That is why the op-amp gain matters in bandgap references.

### Step 5 — A note on the op-amp model

The model used here has zero output at zero input. A real op amp has some output level $V_{O0}$ for zero differential input (set by its internal biasing). The input then needs to supply only the difference, $V_Y - V_X = (V_G - V_{O0})/A_1$, and the requirement becomes $A_1 > |V_G - V_{O0}|/V_e$. Designing the op amp so that its natural output level is close to $V_G$ relaxes the gain requirement.

### Result

The op amp must hold its output at the PMOS gate voltage $V_G = V_{DD} - |V_{GS}|$, which requires a differential input $|V_Y - V_X| = V_G/A_1$. Hence

$$A_{1,min} = \frac{V_{DD} - |V_{GS}|}{V_e} .$$

Example: $|V_{GS}| \approx 1$ V gives $V_G \approx 2$ V and $A_1 \gtrsim 2\ \mathrm{V}/V_e$ (2000 for $V_e = 1$ mV). The residual $V_X - V_Y$ behaves like an offset in the PTAT loop, so the output error is about $(1 + R_2/R_1)$ times it. (With an op-amp output bias level $V_{O0}$ at zero input, the requirement becomes $|V_G - V_{O0}|/V_e$.)

**Common mistake.** Arguing that feedback makes the gain irrelevant ("the loop forces $V_X = V_Y$"). That holds only for infinite gain. A finite-gain amplifier needs a nonzero input to produce its nonzero output $V_G$, and this input *is* the error $V_Y - V_X$.

**Common mistake.** Using the bandgap output ($V_{out} \approx 2.3$–2.5 V) as the op amp's output voltage. The op amp drives the PMOS *gates*, so its output is $V_{DD} - |V_{GS}|$, not $V_{out}$.

**Common mistake.** Writing a dimensionally inconsistent condition such as $A_1 > 1/V_e$. The gain is dimensionless, so the bound must be a voltage ($V_G$) divided by a voltage ($V_e$).
