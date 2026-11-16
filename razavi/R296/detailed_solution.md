# Detailed solution - R296

**Approach.** The circuit is two cascaded common-source (CS) stages with ideal current-source loads. Associate a pole with each node: find the node's resistance and total capacitance to ac ground, splitting each gate–drain capacitance between its two nodes with Miller's theorem (low-frequency gains), and take $\omega = 1/(RC)$. Then check the accuracy and give a better estimate where the Miller picture is weak.

### Step 1 — Small-signal model

Call the gate of $M_1$ node **A** and its drain node **X**. With $V_{DD}$ at ac ground and the ideal current sources open:

- **Node A:** $R_S$ to the input source, $C_{GS1}$ to ground, $C_{GD1}$ to X.
- **Node X:** $g_{m1}V_A$, $r_{O1}$, $C_{DB1}$ and $C_{GS2}$ to ground, $C_{GD2}$ to the output.
- **Output node:** $g_{m2}V_X$, $r_{O2}$ and $C_{DB2}$ to ground.

$C_{SB1}$ and $C_{SB2}$ connect grounded sources to grounded bulks, so they play no role.

<!-- diagram: diagram-01.cir -->

### Step 2 — Node resistances, gains and Miller splitting

With the capacitors open and the input source zeroed:

- **Node A:** the gate draws no current, so $R_A = R_S$.
- **Node X:** $I_1$ is ideal and the gate of $M_2$ is open, so $R_X = r_{O1}$.
- **Output:** $I_2$ is ideal, so $R_{out} = r_{O2}$.

The low-frequency gains are

$$A_1 = \frac{V_X}{V_A} = -g_{m1}r_{O1}, \qquad A_2 = \frac{V_{out}}{V_X} = -g_{m2}r_{O2}.$$

Miller's theorem replaces a capacitor $C$ from node 1 to node 2 (gain $A_v$) by $C(1 - A_v)$ at node 1 and $C(1 - 1/A_v)$ at node 2:

$$C_{GD1}\ \to\ (1 + g_{m1}r_{O1})\,C_{GD1}\ \text{at A}, \qquad C_{GD1}\left(1 + \frac{1}{g_{m1}r_{O1}}\right)\ \text{at X},$$

$$C_{GD2}\ \to\ (1 + g_{m2}r_{O2})\,C_{GD2}\ \text{at X}, \qquad C_{GD2}\left(1 + \frac{1}{g_{m2}r_{O2}}\right)\ \text{at the output}.$$

### Step 3 — The input pole

$$C_A = C_{GS1} + (1 + g_{m1}r_{O1})\,C_{GD1},$$

$$\omega_{in} \approx \frac{1}{R_AC_A} = \frac{1}{R_S\left[C_{GS1} + (1 + g_{m1}r_{O1})\,C_{GD1}\right]}.$$

### Step 4 — The pole at node X

Node X collects $C_{DB1}$, $C_{GS2}$, the X-side part of $C_{GD1}$ and the large Miller part of $C_{GD2}$:

$$C_X^{tot} = C_{GD1}\left(1 + \frac{1}{g_{m1}r_{O1}}\right) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})\,C_{GD2},$$

$$\omega_X \approx \frac{1}{r_{O1}\left[C_{GD1}\left(1 + \dfrac{1}{g_{m1}r_{O1}}\right) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})\,C_{GD2}\right]}.$$

With the largest resistance ($r_{O1}$, against a typically much smaller $R_S$) and a large Miller capacitance, node X usually gives the **dominant pole**.

### Step 5 — The output pole

$$\omega_{out} \approx \frac{1}{r_{O2}\left[C_{DB2} + C_{GD2}\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)\right]} \approx \frac{1}{r_{O2}(C_{DB2} + C_{GD2})},$$

where the last form uses $g_{m2}r_{O2}\gg1$ (intrinsic gain typically 10–100).

### Step 6 — How good are these estimates?

Both Miller gains are the large intrinsic gains $g_mr_O$, which begin to fall at fairly low frequencies, so the estimates are rough. $\omega_{out}$ is the weakest: $C_{GD2}$ couples X and the output strongly and causes **pole splitting**.

**A better estimate for the X and output poles.** Treat the second stage as a CS stage driven by $r_{O1}$, with grounded capacitance $C_X \approx C_{DB1} + C_{GS2} + C_{GD1}$ at its input and $C_{out} = C_{DB2}$ at its output. Its denominator is

$$D(s) = r_{O1}r_{O2}\,\xi\,s^2 + \left[r_{O1}(1 + g_{m2}r_{O2})C_{GD2} + r_{O1}C_X + r_{O2}(C_{GD2} + C_{out})\right]s + 1,$$

$$\xi = C_XC_{GD2} + C_XC_{out} + C_{GD2}C_{out}.$$

For widely spaced roots, the lower one is the inverse of the $s$ coefficient:

$$\omega_X \approx \frac{1}{r_{O1}\left[(1 + g_{m2}r_{O2})C_{GD2} + C_X\right] + r_{O2}(C_{GD2} + C_{out})},$$

the Miller result of Step 4 plus an extra $r_{O2}(C_{GD2} + C_{out})$ in the time constant. The higher one is the $s$ coefficient over the $s^2$ coefficient; when the Miller term $r_{O1}g_{m2}r_{O2}C_{GD2}$ dominates,

$$\omega_{out} \approx \frac{r_{O1}g_{m2}r_{O2}C_{GD2}}{r_{O1}r_{O2}\,\xi} = \frac{g_{m2}C_{GD2}}{C_XC_{GD2} + C_XC_{out} + C_{GD2}C_{out}}.$$

$r_{O2}$ has disappeared: at high frequencies $C_{GD2}$ effectively diode-connects $M_2$, so the output resistance drops to about $1/g_{m2}$. The actual output pole is therefore much **higher** than $1/[r_{O2}(C_{DB2} + C_{GD2})]$ from Step 5, while the X pole is pushed lower.

**Zeros.** Each gate–drain capacitance also gives a feedforward path, with right-half-plane zeros at $s = +g_{m1}/C_{GD1}$ and $s = +g_{m2}/C_{GD2}$.

### Result

Associating a pole with each node (Miller approximation, $A_1 = -g_{m1}r_{O1}$ and $A_2 = -g_{m2}r_{O2}$):

$$\omega_{in} \approx \frac{1}{R_S\left[C_{GS1} + (1 + g_{m1}r_{O1})C_{GD1}\right]}$$

$$\omega_X \approx \frac{1}{r_{O1}\left[C_{GD1}\left(1 + \dfrac{1}{g_{m1}r_{O1}}\right) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})C_{GD2}\right]}$$

$$\omega_{out} \approx \frac{1}{r_{O2}\left[C_{DB2} + C_{GD2}\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)\right]} \approx \frac{1}{r_{O2}(C_{DB2} + C_{GD2})}$$

Node X is usually dominant. Because $C_{GD2}$ splits the X and output poles, a more accurate output pole is $\omega_{out}\approx g_{m2}C_{GD2}/\left[C_XC_{out} + (C_X + C_{out})C_{GD2}\right]$, with $C_X \approx C_{DB1} + C_{GS2} + C_{GD1}$ and $C_{out} = C_{DB2}$. The circuit also has right-half-plane zeros at $g_{m1}/C_{GD1}$ and $g_{m2}/C_{GD2}$.

**Common mistake.** Using the wrong node resistances, for example $1/g_{m2}$ at node X or $R_S\parallel r_{O1}$ at the input. The gate of $M_2$ is open and $I_1$ is ideal, so X sees only $r_{O1}$; the gate of $M_1$ draws no current, so A sees only $R_S$.

**Common mistake.** Forgetting the Miller multiplication of $C_{GD2}$ at X or of $C_{GD1}$ at the input. Each bridges an inverting stage of gain $-g_mr_O$ and appears at its input multiplied by $1 + g_mr_O$, usually the largest capacitance at that node.

**Common mistake.** Treating the Miller estimates as exact. They ignore pole splitting and underestimate the output pole in particular, because at high frequencies $C_{GD2}$ lowers the output resistance from $r_{O2}$ to roughly $1/g_{m2}$.
