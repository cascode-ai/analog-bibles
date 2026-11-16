# Detailed solution - R196

**Approach.** The inputs are tied together, so the excitation is purely common-mode, and in a perfectly symmetric circuit the symmetric operating point ($V_X = V_Y$) satisfies all the equations: $V_{out} = 0$. Because the load is a cross-coupled (positive-feedback) pair, also check whether this point is *stable*; once the pair conducts it is not, which matters for a real circuit.

### Step 1 — The symmetric solution: $V_{out} = 0$

Call the left output (drains of $M_1$, $M_3$; gate of $M_4$) X, the right output (drains of $M_2$, $M_4$; gate of $M_3$) Y and the common source node of $M_1$, $M_2$ P. Throughout the sweep $V_{in1} = V_{in2} = V_{in,CM}$.

Try $V_X = V_Y = V_O$. $M_1$ and $M_2$ then have the same gate, source and drain voltages, so KCL at P gives $I_{D1} = I_{D2} = I_{D5}/2$. $M_3$ has its gate at Y $= V_O$ and its drain at X $= V_O$, so $V_{SG3} = V_{SD3} = V_{DD} - V_O$, and likewise for $M_4$: each PMOS behaves exactly like a **diode-connected** device carrying $I_{D5}/2$. KCL at X ($I_{D3} = I_{D1}$) and at Y ($I_{D4} = I_{D2}$) are then the same equation, satisfied by a single $V_O$. So, for an ideal symmetric circuit,

$$V_X = V_Y \quad\Longrightarrow\quad V_{out} = 0 \quad\text{for the whole sweep}.$$

### Step 2 — The common level of the outputs (for reference)

With each PMOS acting as a diode at the symmetric point,

$$V_O = V_{DD} - |V_{GS3}|, \qquad |V_{GS3}| = |V_{THP}| + \sqrt{\frac{2(I_{D5}/2)}{\beta_p}} = |V_{THP}| + \sqrt{\frac{I_{D5}}{\beta_p}},$$

with $\beta_p = \mu_pC_{ox}(W/L)_{3,4}$.

- **$V_{in,CM} < V_{THN} = 0.7$ V:** the pair is off; a diode-like PMOS at zero current needs only $V_{SG} \le |V_{THP}|$, so the outputs sit somewhere between $V_{DD} - |V_{THP}| = 2.2$ V and $V_{DD}$.
- **Pair conducting:** the outputs fall as the tail current grows and settle at $V_{DD} - |V_{GS3}(I_{SS}/2)|$ once $M_5$ is saturated.

*Example:* $\beta_p = 0.2\ \mathrm{mA/V^2}$ and $I_{SS} = 200\ \mu$A give

$$|V_{GS3}| = 0.8 + \sqrt{\frac{200\ \mu\mathrm{A}}{0.2\ \mathrm{mA/V^2}}} = 0.8 + 1.0 = 1.8\ \mathrm{V}, \qquad V_O = 3 - 1.8 = 1.2\ \mathrm{V}.$$

### Step 3 — Is the symmetric point stable? (Metastability)

Perturb it differentially: $v_X = +v$, $v_Y = -v$, with P a virtual ground. $M_3$'s gate is at Y, so its drain current into X changes by $g_{m3}v_{sg3} = g_{m3}(0 - v_Y) = +g_{m3}v$: a *rise* of X makes $M_3$ push *more* current into X. KCL at X, with $r_{O1}$, $r_{O3}$ and the node capacitance $C$:

$$C\frac{dv}{dt} = g_{m3}v - \left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}}\right)v = \left(g_{m3} - \frac{1}{r_{O1}} - \frac{1}{r_{O3}}\right)v .$$

Since $g_{m3} \gg 1/r_{O1} + 1/r_{O3}$ ($g_mr_O \gg 1$), the bracket is positive and **any small differential disturbance grows exponentially**; equivalently, the loop gain around $X \to M_4 \to Y \to M_3 \to X$ is

$$[g_{m3}(r_{O1}\parallel r_{O3})]^2 > 1 .$$

*Example* (with $\lambda = 0.05\ \mathrm{V^{-1}}$ at 100 µA):

$$
\begin{aligned}
g_{m3} &= \sqrt{2\beta_pI_D} = \sqrt{2(0.2\ \mathrm{mA/V^2})(100\ \mu\mathrm{A})} = 0.2\ \mathrm{mS},\\
r_{O} &= \frac{1}{\lambda I_D} = \frac{1}{(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 200\ \mathrm{k}\Omega,\\
g_{m3}(r_{O1}\parallel r_{O3}) &= (0.2\ \mathrm{mS})(100\ \mathrm{k}\Omega) = 20,
\end{aligned}
$$

so the loop gain is $20^2 = 400 \gg 1$. In the common mode, by contrast, both nodes move together and each PMOS is a diode, so the common level is stable; only the *differential* mode is unstable.

**Consequence.** The ideal analysis gives $V_{out} = 0$, but this balanced state is **metastable** once the pair conducts. In a real circuit the slightest mismatch, offset or noise is amplified regeneratively, and the outputs latch to X high / Y low ($V_{out}$ near $+V_{DD}$) or the reverse ($V_{out}$ near $-V_{DD}$), chosen by the random imbalance, not by $V_{in,CM}$.

### Result

For a perfectly symmetric circuit,

$$V_{out} = 0 \quad\text{for } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

Equal inputs give identical voltages at the two outputs. With the pair on, each PMOS has $V_{SG} = V_{SD}$ and behaves like a diode, giving a common level of $V_{DD} - |V_{GS3}(I_{SS}/2)|$. This symmetric state is, however, **metastable** once the pair conducts: the cross-coupled load has loop gain $[g_{m3}(r_{O1}\parallel r_{O3})]^2 > 1$, so any tiny mismatch or noise makes the outputs regenerate to $V_{out}$ near $+V_{DD}$ or $-V_{DD}$. An ideal analysis gives 0; a real circuit latches.

**Common mistake.** Describing one output (the common level, for example falling from near $V_{DD}$ to $V_{DD} - |V_{GS3}|$) as "$V_{out}$". The question asks for the difference between the outputs, which is zero for the ideal symmetric circuit.

**Common mistake.** Drawing a deterministic, smoothly varying nonzero $V_{out}$ versus the common-mode input. A nonzero output can only come from latching on random mismatch, and its sign is then unpredictable.
