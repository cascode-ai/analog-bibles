# Detailed solution - R541

**Approach.** In steady state the op amp's output must sit at the DC voltage the PMOS gates need, $V_G = V_{DD} - |V_{GS}|$. A finite gain $A_1$ produces that output only if its inputs differ by $V_G/A_1$; requiring this residual to stay below $V_e$ gives the minimum gain. Then check the feedback polarity and estimate the effect on the output.

### Step 1 — What the op amp must deliver

The op amp drives the common gate of $M_1$–$M_4$, whose sources are at $V_{DD}$, so its output must be at

$$V_G = V_{DD} - |V_{GS}| ,$$

a fixed DC level of order volts. For example, $|V_{GS}| \approx 1$ V (threshold 0.8 V plus about 0.2 V of overdrive) gives $V_G \approx 2$ V; since $|V_{GS}| > 0.8$ V, $V_G < 2.2$ V.

### Step 2 — Input difference required by a finite gain

With the non-inverting input at Y and the inverting input at X,

$$V_G = A_1\,(V_Y - V_X)\quad\Longrightarrow\quad V_Y - V_X = \frac{V_G}{A_1} = \frac{V_{DD} - |V_{GS}|}{A_1}.$$

**Polarity check.** If the gate voltage rises, all PMOS currents fall. $V_X$ (two emitter–base voltages) drops only logarithmically, while $V_Y$ drops more because of the linear $I_{D2}R_1$ term, so $V_Y - V_X$ falls and pushes the op amp output back down: negative feedback, with $V_Y$ slightly *above* $V_X$ in steady state.

### Step 3 — Minimum gain

$$\frac{V_{DD} - |V_{GS}|}{A_1} < V_e
\quad\Longrightarrow\quad
\boxed{A_{1,min} = \frac{V_{DD} - |V_{GS}|}{V_e}}$$

With $V_{DD} = 3$ V and $|V_{GS}| \approx 1$ V, $V_G \approx 2$ V, so

$$A_1 \gtrsim \frac{2\ \mathrm{V}}{V_e}:\qquad V_e = 1\ \mathrm{mV} \Rightarrow A_1 > 2000\ (66\ \mathrm{dB}),\qquad V_e = 0.1\ \mathrm{mV} \Rightarrow A_1 > 20{,}000\ (86\ \mathrm{dB}).$$

The model has zero output at zero input. If the op amp instead has an output level $V_{O0}$ at zero differential input, the input supplies only the difference, $V_Y - V_X = (V_G - V_{O0})/A_1$, and the requirement becomes $A_1 > |V_G - V_{O0}|/V_e$; an op amp whose natural output level is close to $V_G$ needs less gain.

### Step 4 — Why $V_e$ must be small: effect on the output

$V_Y - V_X$ acts like an op-amp input offset. With equal branch currents $I$:

$$V_Y = |V_{EB3}| + |V_{EB4}| + IR_1 = V_X + \frac{V_G}{A_1}
\quad\Longrightarrow\quad
IR_1 = 2V_T\ln n + \frac{V_G}{A_1},$$

using $V_X - |V_{EB3}| - |V_{EB4}| = 2V_T\ln n$. The output $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)IR_1$ therefore shifts by about

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{V_G}{A_1} < \left(1 + \frac{R_2}{R_1}\right)V_e .$$

With a typical $1 + R_2/R_1 \approx 8$, a 1-mV residual becomes an 8-mV output error, which also varies with temperature and supply because $V_G$ does.

### Result

The op amp must hold its output at the PMOS gate voltage $V_G = V_{DD} - |V_{GS}|$, which requires a differential input $|V_Y - V_X| = V_G/A_1$. Hence

$$A_{1,min} = \frac{V_{DD} - |V_{GS}|}{V_e} .$$

Example: $|V_{GS}| \approx 1$ V gives $V_G \approx 2$ V and $A_1 \gtrsim 2\ \mathrm{V}/V_e$ (2000 for $V_e = 1$ mV). The residual $V_X - V_Y$ behaves like an offset in the PTAT loop, so the output error is about $(1 + R_2/R_1)$ times it. (With an op-amp output bias level $V_{O0}$ at zero input, the requirement becomes $|V_G - V_{O0}|/V_e$.)

**Common mistake.** Arguing that feedback makes the gain irrelevant ("the loop forces $V_X = V_Y$"). That holds only for infinite gain; a finite gain needs a nonzero input to produce $V_G$, and this input *is* the error $V_Y - V_X$.

**Common mistake.** Using the bandgap output ($V_{out} \approx 2.3$–2.5 V) as the op amp's output voltage. The op amp drives the PMOS *gates*, so its output is $V_{DD} - |V_{GS}|$.

**Common mistake.** Writing a dimensionally inconsistent condition such as $A_1 > 1/V_e$. The bound must be a voltage ($V_G$) divided by a voltage ($V_e$).
