# Detailed solution - R327

**Approach.** Set $C_{GD} = 0$ in the exact transfer function and simplify the numerator, $\xi$, and the coefficient of $s$. Then show that the resulting second-order denominator factors exactly into $(1 + R_SC_{GS}s)(1 + R_DC_{DB}s)$. Finally, derive the input-node and output-node transfer functions directly from the circuit ("association of poles with nodes") and show that their product is the same expression, explaining why the factorization is exact here.

### Step 1 — Substitute $C_{GD} = 0$

**Numerator:**

$$(C_{GD}s - g_m)R_D\Big|_{C_{GD} = 0} = -g_mR_D .$$

The zero at $s = +g_m/C_{GD}$ moves to infinity: without $C_{GD}$ there is no feedforward path from the gate to the output.

**The constant $\xi$:**

$$\xi = C_{GS}C_{GD} + C_{GS}C_{DB} + C_{GD}C_{DB}\Big|_{C_{GD} = 0} = C_{GS}C_{DB} .$$

**The $s^2$ coefficient:**

$$R_SR_D\xi = R_SR_DC_{GS}C_{DB}.$$

**The $s$ coefficient.** The first term, $R_S(1 + g_mR_D)C_{GD}$, vanishes; so does the $C_{GD}$ part of the third term:

$$R_S(1 + g_mR_D)\cdot0 + R_SC_{GS} + R_D(0 + C_{DB}) = R_SC_{GS} + R_DC_{DB}.$$

So

$$\frac{V_{out}}{V_{in}}(s)\Big|_{C_{GD} = 0} = \frac{-g_mR_D}{R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1}.$$

### Step 2 — Factor the denominator

Expand the product of two first-order factors, one with the input-node time constant $R_SC_{GS}$ and one with the output-node time constant $R_DC_{DB}$:

$$
\begin{aligned}
(1 + R_SC_{GS}s)(1 + R_DC_{DB}s) &= 1 + R_DC_{DB}s + R_SC_{GS}s + R_SC_{GS}\,R_DC_{DB}\,s^2\\
&= R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1 .
\end{aligned}
$$

This matches the denominator of Step 1 term by term: the constant (1), the $s$ coefficient ($R_SC_{GS} + R_DC_{DB}$), and the $s^2$ coefficient ($R_SR_DC_{GS}C_{DB}$). Therefore

$$\frac{V_{out}}{V_{in}}(s) = \frac{-g_mR_D}{(1 + R_SC_{GS}s)(1 + R_DC_{DB}s)} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s}.$$

The poles are exactly $\omega_{in} = 1/(R_SC_{GS})$ and $\omega_{out} = 1/(R_DC_{DB})$.

### Step 3 — The same factors by association of poles with nodes

<!-- diagram: diagram-01.cir -->

With $C_{GD} = 0$ the small-signal circuit splits into two parts that are linked only by the controlled source $g_mV_X$.

**Input node X** (gate). Connected to $V_{in}$ through $R_S$ and to ground through $C_{GS}$; the gate draws no current, and nothing else is connected. KCL at X:

$$\frac{V_{in} - V_X}{R_S} = C_{GS}s\,V_X\quad\Longrightarrow\quad\frac{V_X}{V_{in}} = \frac{1}{1 + R_SC_{GS}s}.$$

This is a simple RC low-pass: the resistance seen at X is $R_S$ and the capacitance is $C_{GS}$, so the pole is $1/(R_SC_{GS})$, obtained by inspection.

**Output node.** $M_1$ draws $g_mV_X$ from the output; the output is loaded by $R_D$ (to $V_{DD}$, an ac ground) and $C_{DB}$ to ground. KCL at the output:

$$-g_mV_X = \frac{V_{out}}{R_D} + C_{DB}s\,V_{out}\quad\Longrightarrow\quad\frac{V_{out}}{V_X} = \frac{-g_mR_D}{1 + R_DC_{DB}s}.$$

The resistance seen at the output is $R_D$ (the transistor is a current source, $\lambda = 0$) and the capacitance is $C_{DB}$, so the pole is $1/(R_DC_{DB})$.

**Product:**

$$\frac{V_{out}}{V_{in}} = \frac{V_X}{V_{in}}\cdot\frac{V_{out}}{V_X} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s},$$

identical to Step 2.

### Step 4 — Why the factorization is exact here

- **No feedback from output to input.** With $C_{GD} = 0$ (and $\lambda = 0$), no element connects the output node to node X, so $V_X$ is determined by $V_{in}$, $R_S$ and $C_{GS}$ alone, whatever the output does.
- **No feedforward.** The only link from X to the output is the controlled source $g_mV_X$, which is frequency independent. There is no capacitive path that adds a second signal route, so there is no zero.
- **The two nodes are therefore isolated**, each with its own resistance and capacitance, and each contributes an exact pole. The overall response is the product of the two node responses.

With $C_{GD}\ne0$, this capacitor couples the two nodes: the $s$ coefficient acquires the Miller term $R_S(1 + g_mR_D)C_{GD}$, $\xi$ acquires the cross terms $C_{GD}(C_{GS} + C_{DB})$, the denominator no longer factors into two node time constants, and associating a pole with each node becomes only an approximation.

### Result

With $C_{GD} = 0$: $\xi = C_{GS}C_{DB}$, the numerator becomes $-g_mR_D$, and the denominator becomes $R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1 = (1 + R_SC_{GS}s)(1 + R_DC_{DB}s)$. Hence

$$\frac{V_{out}}{V_{in}} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s}.$$

The first factor is $V_X/V_{in}$, the input node with $R_S$ and $C_{GS}$ (pole $1/(R_SC_{GS})$). The second is $V_{out}/V_X$, the current $g_mV_X$ flowing into $R_D\parallel C_{DB}$ (pole $1/(R_DC_{DB})$). Without $C_{GD}$ the two nodes are isolated, so the transfer function factors exactly, and the zero $g_m/C_{GD}$ moves to infinity.

**Common mistake.** Pairing the resistances and capacitances incorrectly, for example writing factors with $R_SC_{DB}$ or $R_DC_{GS}$. The expansion in Step 2 shows that only the pairing (input resistance with input capacitance, output resistance with output capacitance) reproduces the $s$ coefficient $R_SC_{GS} + R_DC_{DB}$.

**Common mistake.** Keeping a zero in the reduced expression. The zero $g_m/C_{GD}$ comes from feedforward through $C_{GD}$; with $C_{GD} = 0$ the numerator is the constant $-g_mR_D$.

**Common mistake.** Claiming that the expression does not factor because it is second order. A quadratic with real coefficients factors into real first-order terms whenever its roots are real; here the roots are exactly $-1/(R_SC_{GS})$ and $-1/(R_DC_{DB})$, as Step 2 shows.
