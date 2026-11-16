# Detailed solution - R327

**Approach.** Set $C_{GD} = 0$ in the exact transfer function and simplify the numerator, $\xi$ and the $s$ coefficient. Show that the resulting denominator factors exactly into $(1 + R_SC_{GS}s)(1 + R_DC_{DB}s)$, then derive the input-node and output-node transfer functions directly from the circuit and show that their product is the same expression.

### Step 1 — Substitute $C_{GD} = 0$

$$(C_{GD}s - g_m)R_D\Big|_{C_{GD} = 0} = -g_mR_D ,$$

so the zero at $s = +g_m/C_{GD}$ moves to infinity (no feedforward from gate to output).

$$\xi = C_{GS}C_{GD} + C_{GS}C_{DB} + C_{GD}C_{DB}\Big|_{C_{GD} = 0} = C_{GS}C_{DB}, \qquad R_SR_D\xi = R_SR_DC_{GS}C_{DB}.$$

In the $s$ coefficient, the term $R_S(1 + g_mR_D)C_{GD}$ and the $C_{GD}$ part of the third term vanish:

$$R_S(1 + g_mR_D)\cdot0 + R_SC_{GS} + R_D(0 + C_{DB}) = R_SC_{GS} + R_DC_{DB}.$$

So

$$\frac{V_{out}}{V_{in}}(s)\Big|_{C_{GD} = 0} = \frac{-g_mR_D}{R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1}.$$

### Step 2 — Factor the denominator

Expanding the product of the input-node and output-node factors,

$$
\begin{aligned}
(1 + R_SC_{GS}s)(1 + R_DC_{DB}s) &= 1 + R_DC_{DB}s + R_SC_{GS}s + R_SC_{GS}\,R_DC_{DB}\,s^2\\
&= R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1 ,
\end{aligned}
$$

which matches the denominator of Step 1 term by term (constant 1, $s$ coefficient $R_SC_{GS} + R_DC_{DB}$, $s^2$ coefficient $R_SR_DC_{GS}C_{DB}$). Therefore

$$\frac{V_{out}}{V_{in}}(s) = \frac{-g_mR_D}{(1 + R_SC_{GS}s)(1 + R_DC_{DB}s)} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s},$$

with poles exactly at $\omega_{in} = 1/(R_SC_{GS})$ and $\omega_{out} = 1/(R_DC_{DB})$.

### Step 3 — The same factors by association of poles with nodes

<!-- diagram: diagram-01.cir -->

With $C_{GD} = 0$ the circuit splits into two parts linked only by the controlled source $g_mV_X$, where X is the gate.

**Input node X.** It sees $R_S$ to $V_{in}$ and $C_{GS}$ to ground, and the gate draws no current:

$$\frac{V_{in} - V_X}{R_S} = C_{GS}s\,V_X\quad\Longrightarrow\quad\frac{V_X}{V_{in}} = \frac{1}{1 + R_SC_{GS}s},$$

an RC low-pass with pole $1/(R_SC_{GS})$.

**Output node.** $M_1$ draws $g_mV_X$, and the output sees $R_D$ (to $V_{DD}$, an ac ground; $\lambda = 0$) and $C_{DB}$:

$$-g_mV_X = \frac{V_{out}}{R_D} + C_{DB}s\,V_{out}\quad\Longrightarrow\quad\frac{V_{out}}{V_X} = \frac{-g_mR_D}{1 + R_DC_{DB}s},$$

with pole $1/(R_DC_{DB})$. The product,

$$\frac{V_{out}}{V_{in}} = \frac{V_X}{V_{in}}\cdot\frac{V_{out}}{V_X} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s},$$

is identical to Step 2.

### Step 4 — Why the factorization is exact here

With $C_{GD} = 0$ (and $\lambda = 0$) nothing connects the output back to X, so $V_X$ depends only on $V_{in}$, $R_S$ and $C_{GS}$; and the only link from X to the output is the frequency-independent source $g_mV_X$, so there is no second signal path and no zero. The two nodes are isolated, each contributing an exact pole.

With $C_{GD}\ne0$, the capacitor couples the nodes: the $s$ coefficient gains the Miller term $R_S(1 + g_mR_D)C_{GD}$, $\xi$ gains the cross terms $C_{GD}(C_{GS} + C_{DB})$, the denominator no longer factors into two node time constants, and associating a pole with each node becomes only an approximation.

### Result

With $C_{GD} = 0$: $\xi = C_{GS}C_{DB}$, the numerator becomes $-g_mR_D$, and the denominator becomes $R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1 = (1 + R_SC_{GS}s)(1 + R_DC_{DB}s)$. Hence

$$\frac{V_{out}}{V_{in}} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s}.$$

The first factor is $V_X/V_{in}$, the input node with $R_S$ and $C_{GS}$ (pole $1/(R_SC_{GS})$). The second is $V_{out}/V_X$, the current $g_mV_X$ flowing into $R_D\parallel C_{DB}$ (pole $1/(R_DC_{DB})$). Without $C_{GD}$ the two nodes are isolated, so the transfer function factors exactly, and the zero $g_m/C_{GD}$ moves to infinity.

**Common mistake.** Pairing the resistances and capacitances incorrectly, e.g. factors with $R_SC_{DB}$ or $R_DC_{GS}$. Only input resistance with input capacitance and output resistance with output capacitance reproduce the $s$ coefficient $R_SC_{GS} + R_DC_{DB}$.

**Common mistake.** Keeping a zero in the reduced expression. The zero $g_m/C_{GD}$ comes from feedforward through $C_{GD}$; with $C_{GD} = 0$ the numerator is the constant $-g_mR_D$.

**Common mistake.** Claiming that a second-order denominator cannot factor. A real quadratic factors into real first-order terms whenever its roots are real; here they are exactly $-1/(R_SC_{GS})$ and $-1/(R_DC_{DB})$.
