# Detailed solution - R566

**Approach.** Replace the op amp by its model (internal source $-A_vV_X$ behind $R_{out}$) and write KCL at X and at the output, with the capacitors as admittances $Cs$. Eliminating $V_X$ gives $V_{out}/V_{in}$; then read off the dc gain, the zero, the pole and the high-frequency limit.

### Step 1 — The circuit with the op-amp model

With $R_F = \infty$, call the internal node of the op-amp model "int": the ideal source $-A_vV_X$ drives it, and $R_{out}$ connects it to $V_{out}$. No current enters the op amp at X, and the only load is $C_2$.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at node X

The current through $C_1$ equals the current through $C_2$:

$$C_1s\,(V_{in} - V_X) = C_2s\,(V_X - V_{out}),$$

$$
\begin{aligned}
C_1V_{in} - C_1V_X &= C_2V_X - C_2V_{out}\\
V_X\,(C_1 + C_2) &= C_1V_{in} + C_2V_{out}\\
V_X &= \frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2}.
\end{aligned}
$$

### Step 3 — KCL at the output node

The current through $R_{out}$ all flows into $C_2$ toward X:

$$\frac{-A_vV_X - V_{out}}{R_{out}} = C_2s\,(V_{out} - V_X),$$

$$-A_vV_X - V_{out} = R_{out}C_2s\,V_{out} - R_{out}C_2s\,V_X ,$$

$$V_X\,(R_{out}C_2s - A_v) = V_{out}\,(1 + R_{out}C_2s).$$

### Step 4 — Eliminate $V_X$

Substituting $V_X$ from Step 2 and multiplying by $(C_1 + C_2)$:

$$(C_1V_{in} + C_2V_{out})(R_{out}C_2s - A_v) = V_{out}(1 + R_{out}C_2s)(C_1 + C_2),$$

$$C_1V_{in}(R_{out}C_2s - A_v) = V_{out}\left[(1 + R_{out}C_2s)(C_1 + C_2) - C_2(R_{out}C_2s - A_v)\right].$$

Expanding the bracket, the two $R_{out}C_2^2s$ terms cancel:

$$
\begin{aligned}
&(C_1 + C_2) + R_{out}C_2s\,C_1 + R_{out}C_2s\,C_2 - R_{out}C_2^2s + A_vC_2\\
&= C_1 + C_2 + A_vC_2 + R_{out}C_1C_2s\\
&= C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s .
\end{aligned}
$$

Therefore

$$\frac{V_{out}}{V_{in}}(s) = \frac{C_1(R_{out}C_2s - A_v)}{C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s} = -\frac{C_1\,(A_v - R_{out}C_2s)}{C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s},$$

or, dividing numerator and denominator by $C_2$,

$$\frac{V_{out}}{V_{in}}(s) = -\frac{C_1}{C_2}\cdot\frac{A_v - R_{out}C_2s}{1 + A_v + \dfrac{C_1}{C_2} + R_{out}C_1s}.$$

This is the resistive inverting-amplifier formula with $R_1 \to 1/(C_1s)$ and $R_2 \to 1/(C_2s)$.

### Step 5 — With the given values

$C_1/C_2 = 2/0.5 = 4$, $R_{out}C_2s = (0.5\ \mathrm{pF})R_{out}s$ and $R_{out}C_1s = (2\ \mathrm{pF})R_{out}s$:

$$\frac{V_{out}}{V_{in}}(s) = -4\,\frac{A_v - (0.5\ \mathrm{pF})R_{out}s}{5 + A_v + (2\ \mathrm{pF})R_{out}s}.$$

### Step 6 — Features of the response

**Low frequency** ($s \to 0$):

$$\frac{V_{out}}{V_{in}}\Big|_{s=0} = -\frac{4A_v}{5 + A_v} \;\to\; -4 = -\frac{C_1}{C_2}\quad\text{as } A_v \to \infty,$$

the familiar finite-gain error with feedback factor $\beta = C_2/(C_1 + C_2) = 0.2$.

**Pole:**

$$s_p = -\frac{1 + A_v + C_1/C_2}{R_{out}C_1} = -\frac{5 + A_v}{(2\ \mathrm{pF})\,R_{out}}.$$

The output sees $C_1$ and $C_2$ in series, $C_{eq} = C_1C_2/(C_1 + C_2) = 0.4$ pF, through $R_{out}$ lowered by feedback to $R_{out}/(1 + \beta A_v)$; the time constant $R_{out}(0.4\ \mathrm{pF})/(1 + 0.2A_v) = R_{out}(2\ \mathrm{pF})/(5 + A_v)$ matches.

**Zero:**

$$s_z = +\frac{A_v}{R_{out}C_2} = \frac{A_v}{(0.5\ \mathrm{pF})\,R_{out}},$$

a **right-half-plane zero** from the feedforward path through $C_2$: there the current $V_X$ pushes through $C_2$ cancels the amplifier's current through $R_{out}$, so $V_{out} = 0$ (with $V_{out} = 0$ the output KCL reads $-A_vV_X/R_{out} = -C_2sV_X$, so $s = A_v/(R_{out}C_2)$).

**High frequency** ($s \to \infty$):

$$\frac{V_{out}}{V_{in}} \to -4\cdot\frac{-(0.5\ \mathrm{pF})R_{out}s}{(2\ \mathrm{pF})R_{out}s} = +1 :$$

the capacitors, near short circuits compared with $R_{out}$, couple $V_{in}$ directly to the output.

**Illustration** (values not given in the problem): with $A_v = 1000$ and $R_{out} = 10$ kΩ, the dc gain is $-4000/1005 = -3.98$, the pole is at $1005/(10\ \mathrm{k}\Omega\times2\ \mathrm{pF}) = 5.0\times10^{10}$ rad/s, and the RHP zero is at $1000/(10\ \mathrm{k}\Omega\times0.5\ \mathrm{pF}) = 2\times10^{11}$ rad/s.

### Result

$$\frac{V_{out}}{V_{in}}(s) = -\frac{C_1\,(A_v - R_{out}C_2s)}{C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s} = -\frac{C_1}{C_2}\cdot\frac{A_v - R_{out}C_2s}{1 + A_v + \dfrac{C_1}{C_2} + R_{out}C_1s}.$$

With the given values:

$$\frac{V_{out}}{V_{in}} = -4\,\frac{A_v - (0.5\ \mathrm{pF})R_{out}s}{5 + A_v + (2\ \mathrm{pF})R_{out}s}.$$

The low-frequency gain is $-4A_v/(5 + A_v)$ (→ −4 for large $A_v$). There is a right-half-plane zero at $s = A_v/(R_{out}C_2)$ (feedforward through $C_2$ into $R_{out}$), a pole at $s = -(1 + A_v + C_1/C_2)/(R_{out}C_1)$, and at very high frequency the gain tends to +1. A Norton op-amp model ($G_m$ with $R_{out}$) gives the same result with $A_v = G_mR_{out}$.

**Common mistake.** Concluding that $R_{out}$ has no effect and the gain is simply $-C_1/C_2$. That is only the low-frequency, infinite-gain limit; $R_{out}$ creates both the pole and the right-half-plane zero.

**Common mistake.** Dropping the feedforward current through $C_2$, i.e. writing $V_{out} = -A_vV_X$ or omitting the $-R_{out}C_2s$ term in the numerator. That current flows through $R_{out}$ and produces the zero; without it the high-frequency gain would wrongly go to zero instead of +1.

**Common mistake.** Taking the internal source as $+A_vV_X$, which gives a noninverting low-frequency gain. The inverting input is at X, so the source is $-A_vV_X$ and the dc gain must be negative.
