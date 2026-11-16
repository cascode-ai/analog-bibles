# Detailed solution - R566

**Approach.** Replace the op amp by its model (internal source $-A_vV_X$ behind $R_{out}$) and write KCL at the two nodes that matter: the inverting input X and the output. Treat the capacitors by their impedances $1/(sC)$. Eliminating $V_X$ gives $V_{out}/V_{in}$. Finally read off the dc gain, the zero, the pole and the high-frequency limit.

### Step 1 — The circuit with the op-amp model

With $R_F = \infty$, the circuit is: $V_{in}$ drives $C_1$ into node X; $C_2$ connects X to $V_{out}$; the op amp senses X at its inverting input (noninverting input grounded). The op amp is modelled as:

- infinite input impedance, so no current flows into X from the op amp;
- an internal ideal voltage source of value $-A_vV_X$ (node "int");
- the output resistance $R_{out}$ between that internal node and $V_{out}$.

There is no load other than $C_2$. Since $C_1$ is in series with an ideal source $V_{in}$, the output sees $C_2$ in series with $C_1$ to an ac ground.

<!-- diagram: diagram-01.cir -->

Capacitor currents are written as admittance times voltage difference: a capacitor $C$ carries $Cs\,(V_a - V_b)$ from node a to node b.

### Step 2 — KCL at node X

Current arriving through $C_1$ equals current leaving through $C_2$ (none enters the op amp):

$$C_1s\,(V_{in} - V_X) = C_2s\,(V_X - V_{out}).$$

Cancel $s$ and collect $V_X$:

$$
\begin{aligned}
C_1V_{in} - C_1V_X &= C_2V_X - C_2V_{out}\\
V_X\,(C_1 + C_2) &= C_1V_{in} + C_2V_{out}\\
V_X &= \frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2}.
\end{aligned}
$$

$V_X$ is the capacitive-divider mix of the input and output voltages.

### Step 3 — KCL at the output node

The current through $R_{out}$, from the internal source to $V_{out}$, all flows into $C_2$ toward X:

$$\frac{-A_vV_X - V_{out}}{R_{out}} = C_2s\,(V_{out} - V_X).$$

Multiply by $R_{out}$:

$$-A_vV_X - V_{out} = R_{out}C_2s\,V_{out} - R_{out}C_2s\,V_X .$$

Move the $V_X$ terms to the left and the $V_{out}$ terms to the right:

$$V_X\,(R_{out}C_2s - A_v) = V_{out}\,(1 + R_{out}C_2s).$$

### Step 4 — Eliminate $V_X$

Substitute $V_X$ from Step 2 and multiply both sides by $(C_1 + C_2)$:

$$(C_1V_{in} + C_2V_{out})(R_{out}C_2s - A_v) = V_{out}(1 + R_{out}C_2s)(C_1 + C_2).$$

Move the $V_{out}$ terms to the right:

$$C_1V_{in}(R_{out}C_2s - A_v) = V_{out}\left[(1 + R_{out}C_2s)(C_1 + C_2) - C_2(R_{out}C_2s - A_v)\right].$$

Expand the bracket term by term:

$$
\begin{aligned}
&(C_1 + C_2) + R_{out}C_2s\,C_1 + R_{out}C_2s\,C_2 - R_{out}C_2^2s + A_vC_2\\
&= C_1 + C_2 + A_vC_2 + R_{out}C_1C_2s\\
&= C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s .
\end{aligned}
$$

(The two $R_{out}C_2^2s$ terms cancel.) Therefore

$$\frac{V_{out}}{V_{in}}(s) = \frac{C_1(R_{out}C_2s - A_v)}{C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s} = -\frac{C_1\,(A_v - R_{out}C_2s)}{C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s}.$$

Dividing numerator and denominator by $C_2$ gives the equivalent form

$$\frac{V_{out}}{V_{in}}(s) = -\frac{C_1}{C_2}\cdot\frac{A_v - R_{out}C_2s}{1 + A_v + \dfrac{C_1}{C_2} + R_{out}C_1s}.$$

**Check.** This is the resistive inverting-amplifier formula with $R_1 \to 1/(C_1s)$ and $R_2 \to 1/(C_2s)$, as expected.

### Step 5 — With the given values

$C_1/C_2 = 2/0.5 = 4$, $R_{out}C_2s = (0.5\ \mathrm{pF})R_{out}s$ and $R_{out}C_1s = (2\ \mathrm{pF})R_{out}s$:

$$\frac{V_{out}}{V_{in}}(s) = -4\,\frac{A_v - (0.5\ \mathrm{pF})R_{out}s}{5 + A_v + (2\ \mathrm{pF})R_{out}s}.$$

### Step 6 — Features of the response

**Low frequency** ($s \to 0$):

$$\frac{V_{out}}{V_{in}}\Big|_{s=0} = -\frac{4A_v}{5 + A_v} \;\to\; -4 = -\frac{C_1}{C_2}\quad\text{as } A_v \to \infty.$$

The finite-gain error is the familiar $1/(1 + A_v\beta)$ type, with feedback factor $\beta = C_2/(C_1 + C_2) = 0.2$.

**Pole** (denominator = 0):

$$s_p = -\frac{1 + A_v + C_1/C_2}{R_{out}C_1} = -\frac{5 + A_v}{(2\ \mathrm{pF})\,R_{out}}.$$

Interpretation: the output sees $C_1$ and $C_2$ in series, $C_{eq} = C_1C_2/(C_1 + C_2) = 0.4$ pF, driven through $R_{out}$. Feedback lowers the effective output resistance by $(1 + \beta A_v)$, so the time constant is $R_{out}(0.4\ \mathrm{pF})/(1 + 0.2A_v) = R_{out}(2\ \mathrm{pF})/(5 + A_v)$, which matches.

**Zero** (numerator = 0):

$$s_z = +\frac{A_v}{R_{out}C_2} = \frac{A_v}{(0.5\ \mathrm{pF})\,R_{out}},$$

a **right-half-plane zero**. It comes from the feedforward path through $C_2$: at $s_z$, the current that $V_X$ pushes forward through $C_2$ equals the current the amplifier sends through $R_{out}$, so they cancel at the output and $V_{out} = 0$. (Check: with $V_{out} = 0$, the output KCL reads $-A_vV_X/R_{out} = -C_2sV_X$, so $s = A_v/(R_{out}C_2)$.)

**High frequency** ($s \to \infty$):

$$\frac{V_{out}}{V_{in}} \to -4\cdot\frac{-(0.5\ \mathrm{pF})R_{out}s}{(2\ \mathrm{pF})R_{out}s} = +1 .$$

At very high frequencies the capacitors are near short circuits compared with $R_{out}$, so they couple $V_{in}$ directly to the output and the amplifier no longer matters.

**Illustration** (values not given in the problem): with $A_v = 1000$ and $R_{out} = 10$ kΩ, the dc gain is $-4000/1005 = -3.98$, the pole is at $1005/(10\ \mathrm{k}\Omega\times2\ \mathrm{pF}) = 5.0\times10^{10}$ rad/s, and the RHP zero is at $1000/(10\ \mathrm{k}\Omega\times0.5\ \mathrm{pF}) = 2\times10^{11}$ rad/s.

### Result

$$\frac{V_{out}}{V_{in}}(s) = -\frac{C_1\,(A_v - R_{out}C_2s)}{C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s} = -\frac{C_1}{C_2}\cdot\frac{A_v - R_{out}C_2s}{1 + A_v + \dfrac{C_1}{C_2} + R_{out}C_1s}.$$

With the given values:

$$\frac{V_{out}}{V_{in}} = -4\,\frac{A_v - (0.5\ \mathrm{pF})R_{out}s}{5 + A_v + (2\ \mathrm{pF})R_{out}s}.$$

The low-frequency gain is $-4A_v/(5 + A_v)$ (→ −4 for large $A_v$). There is a right-half-plane zero at $s = A_v/(R_{out}C_2)$ (feedforward through $C_2$ into $R_{out}$), a pole at $s = -(1 + A_v + C_1/C_2)/(R_{out}C_1)$, and at very high frequency the gain tends to +1. A Norton op-amp model ($G_m$ with $R_{out}$) gives the same result with $A_v = G_mR_{out}$.

**Common mistake.** Concluding that $R_{out}$ has no effect and the gain is simply $-C_1/C_2$. That is only the low-frequency, infinite-gain limit. $R_{out}$ creates both the pole and the right-half-plane zero.

**Common mistake.** Dropping the feedforward current through $C_2$, i.e. writing $V_{out} = -A_vV_X$ (an output that is not loaded by $C_2$) or omitting the $-R_{out}C_2s$ term in the numerator. The current through $C_2$ flows through $R_{out}$ and produces the zero. Without it the high-frequency gain would wrongly go to zero instead of +1.

**Common mistake.** Sign or bookkeeping errors in the output KCL, for example taking the internal source as $+A_vV_X$, which gives a noninverting low-frequency gain. The inverting input is at X, so the internal source is $-A_vV_X$, and the dc gain must be negative.
