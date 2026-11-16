# Detailed solution - R196

**Approach.** The inputs are tied together, so the excitation is purely common-mode, and in a perfectly symmetric circuit the symmetric operating point ($V_X = V_Y$) satisfies all the equations. That gives $V_{out} = 0$. Because the load is a cross-coupled (positive-feedback) pair, we also check whether this symmetric point is *stable*. It is not once the pair conducts, which matters for a real circuit.

### Step 1 — Reading the circuit and the sweep

From the figure:

- $M_1$, $M_2$: NMOS input pair, sources at node P, tail transistor $M_5$ (gate at $V_b$).
- X is the left output (drain of $M_1$/$M_3$) and Y the right output (drain of $M_2$/$M_4$). $V_{out} = V_X - V_Y$.
- $M_3$, $M_4$: PMOS loads, sources at $V_{DD}$, gates **cross-coupled**: the gate of $M_3$ is at Y and the gate of $M_4$ is at X.
- The sweep: $V_{in1} = V_{in2} = V_{in,CM}$ goes from 0 to 3 V, so the differential input is zero.

### Step 2 — The symmetric solution: $V_{out} = 0$

Try $V_X = V_Y = V_O$:

1. $M_1$ and $M_2$ have the same gate ($V_{in,CM}$), source ($V_P$) and drain ($V_O$) voltages, so they carry equal currents. KCL at P gives $I_{D1} = I_{D2} = I_{D5}/2$.
2. $M_3$ has its gate at Y $= V_O$ and its drain at X $= V_O$, so $V_{SG3} = V_{SD3} = V_{DD} - V_O$. The same holds for $M_4$. Each PMOS therefore behaves exactly like a **diode-connected** device carrying $I_{D5}/2$.
3. KCL at X ($I_{D3} = I_{D1}$) and at Y ($I_{D4} = I_{D2}$) are then the same equation, satisfied by a single $V_O$.

So, for an ideal symmetric circuit,

$$V_X = V_Y \quad\Longrightarrow\quad V_{out} = 0 \quad\text{for the whole sweep}.$$

### Step 3 — The common level of the outputs (for reference)

Because each PMOS acts as a diode at the symmetric point, its square law gives

$$V_O = V_{DD} - |V_{GS3}|, \qquad |V_{GS3}| = |V_{THP}| + \sqrt{\frac{2(I_{D5}/2)}{\beta_p}} = |V_{THP}| + \sqrt{\frac{I_{D5}}{\beta_p}},$$

with $\beta_p = \mu_pC_{ox}(W/L)_{3,4}$.

- **$V_{in,CM} < V_{THN} = 0.7$ V:** the pair is off and no current flows. A diode-like PMOS at zero current has $V_{SG} \le |V_{THP}|$, so the outputs sit somewhere between $V_{DD} - |V_{THP}| = 2.2$ V and $V_{DD}$.
- **Pair conducting:** the outputs fall as the tail current grows and settle at $V_{DD} - |V_{GS3}(I_{SS}/2)|$ once $M_5$ is saturated.

*Example:* $\beta_p = 0.2\ \mathrm{mA/V^2}$ and $I_{SS} = 200\ \mu$A give

$$|V_{GS3}| = 0.8 + \sqrt{\frac{200\ \mu\mathrm{A}}{0.2\ \mathrm{mA/V^2}}} = 0.8 + 1.0 = 1.8\ \mathrm{V}, \qquad V_O = 3 - 1.8 = 1.2\ \mathrm{V}.$$

### Step 4 — Is the symmetric point stable? (Metastability)

Perturb the symmetric point differentially: $v_X = +v$ and $v_Y = -v$, with P a virtual ground.

- $M_3$'s gate is at Y, so its drain current into X changes by $g_{m3}v_{sg3} = g_{m3}(0 - v_Y) = +g_{m3}v$. A *rise* of X makes $M_3$ push *more* current into X.
- KCL at X, including the output resistances $r_{O1}$ and $r_{O3}$ and the node capacitance $C$:

$$C\frac{dv}{dt} = g_{m3}v - \left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}}\right)v = \left(g_{m3} - \frac{1}{r_{O1}} - \frac{1}{r_{O3}}\right)v .$$

Since $g_{m3} \gg 1/r_{O1} + 1/r_{O3}$ (that is, $g_mr_O \gg 1$), the bracket is positive and **any small differential disturbance grows exponentially**. Equivalently, the loop gain around $X \to M_4 \to Y \to M_3 \to X$ is

$$[g_{m3}(r_{O1}\parallel r_{O3})]^2 > 1 .$$

*Example* (with $\lambda = 0.05\ \mathrm{V^{-1}}$ at 100 µA):

$$
\begin{aligned}
g_{m3} &= \sqrt{2\beta_pI_D} = \sqrt{2(0.2\ \mathrm{mA/V^2})(100\ \mu\mathrm{A})} = 0.2\ \mathrm{mS},\\
r_{O} &= \frac{1}{\lambda I_D} = \frac{1}{(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 200\ \mathrm{k}\Omega,\\
g_{m3}(r_{O1}\parallel r_{O3}) &= (0.2\ \mathrm{mS})(100\ \mathrm{k}\Omega) = 20,
\end{aligned}
$$

so the loop gain is $20^2 = 400 \gg 1$.

For the common-mode, by contrast, both nodes move together and each PMOS behaves as a diode, so the common level is well defined and stable. Only the *differential* mode is unstable.

**Consequence.** The ideal analysis gives $V_{out} = 0$, but this balanced state is **metastable** once the pair conducts. In a real circuit, the slightest mismatch, offset or noise is amplified regeneratively, and the outputs latch to one of two states: X high / Y low ($V_{out}$ near $+V_{DD}$) or the reverse ($V_{out}$ near $-V_{DD}$). Which one is reached is set by the random imbalance, not by $V_{in,CM}$.

### Result

For a perfectly symmetric circuit,

$$V_{out} = 0 \quad\text{for } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

Equal inputs give identical voltages at the two outputs. With the pair on, each PMOS has $V_{SG} = V_{SD}$ and behaves like a diode, giving a common level of $V_{DD} - |V_{GS3}(I_{SS}/2)|$. This symmetric state is, however, **metastable** once the pair conducts. The cross-coupled load has loop gain $[g_{m3}(r_{O1}\parallel r_{O3})]^2 > 1$, so any tiny mismatch or noise makes the outputs regenerate to $V_{out}$ near $+V_{DD}$ or $-V_{DD}$. An ideal analysis gives 0; a real circuit latches.

**Common mistake.** Describing the voltage of one output node (the common level, for example falling from near $V_{DD}$ to $V_{DD} - |V_{GS3}|$) as "$V_{out}$". The question asks for the difference between the two outputs, which is zero for the ideal symmetric circuit.

**Common mistake.** Drawing a deterministic, smoothly varying nonzero $V_{out}$ versus the common-mode input. A symmetric circuit cannot produce a definite differential output from a common-mode input. Any nonzero output can only come from latching on random mismatch, and its sign is then unpredictable.
