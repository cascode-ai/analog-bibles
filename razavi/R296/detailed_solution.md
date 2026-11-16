# Detailed solution - R296

**Approach.** The circuit is two cascaded common-source (CS) stages with ideal current-source loads. We estimate the poles by "associating a pole with each node": for every node we find the small-signal resistance to ac ground and the total capacitance to ac ground, and use Miller's theorem (with the low-frequency gains) to split each gate–drain capacitance between its two nodes. Each node then gives $\omega = 1/(RC)$. At the end we comment on the accuracy and give a better estimate where the Miller picture is weak.

### Step 1 — Reading the circuit and the small-signal model

From the figure:

- $V_{in}$ drives the gate of $M_1$ (call this node **A**) through $R_S$.
- The drain of $M_1$ (node **X**) is loaded by the ideal current source $I_1$ and drives the gate of $M_2$.
- The drain of $M_2$ is the output, loaded by the ideal current source $I_2$.
- Both sources are grounded.

Small-signal model (all sources and bulks at ground, $V_{DD}$ at ac ground, ideal current sources open):

- **Node A:** $R_S$ to the input source, $C_{GS1}$ to ground, $C_{GD1}$ to X.
- **Node X:** current source $g_{m1}V_A$ from X to ground, $r_{O1}$ to ground, $C_{DB1}$ to ground, $C_{GS2}$ to ground (source of $M_2$ is grounded), $C_{GD2}$ to the output.
- **Output node:** current source $g_{m2}V_X$ to ground, $r_{O2}$ to ground, $C_{DB2}$ to ground.

$C_{SB1}$ and $C_{SB2}$ connect grounded sources to grounded bulks, so they play no role.

<!-- diagram: diagram-01.cir -->

### Step 2 — Resistance at each node

With the capacitors open (low frequency) and the input source set to zero:

- **Node A:** the gate of $M_1$ draws no current, so the only resistance to ground is through $R_S$ to the (zeroed) input source: $R_A = R_S$.
- **Node X:** $I_1$ is ideal (infinite resistance) and the gate of $M_2$ is an open circuit, so the only resistance is the output resistance of $M_1$: $R_X = r_{O1}$.
- **Output:** $I_2$ is ideal and nothing else is connected, so $R_{out} = r_{O2}$.

**Low-frequency gains** of the two stages (CS gain $= -g_m\times$ drain resistance):

$$A_1 = \frac{V_X}{V_A} = -g_{m1}r_{O1}, \qquad A_2 = \frac{V_{out}}{V_X} = -g_{m2}r_{O2}.$$

### Step 3 — Miller's theorem for a bridging capacitor

If a capacitor $C$ connects node 1 to node 2 and the voltage gain from node 1 to node 2 is $A_v$, Miller's theorem replaces it by

$$C_{(1)} = C\,(1 - A_v)\ \text{from node 1 to ground}, \qquad C_{(2)} = C\left(1 - \frac{1}{A_v}\right)\ \text{from node 2 to ground}.$$

We use the low-frequency gains of Step 2 for $A_v$ (the usual "Miller approximation").

**$C_{GD1}$** (from A to X, gain $A_1 = -g_{m1}r_{O1}$):

$$C_{GD1}\ \to\ (1 + g_{m1}r_{O1})\,C_{GD1}\ \text{at A}, \qquad C_{GD1}\left(1 + \frac{1}{g_{m1}r_{O1}}\right)\ \text{at X}.$$

**$C_{GD2}$** (from X to the output, gain $A_2 = -g_{m2}r_{O2}$):

$$C_{GD2}\ \to\ (1 + g_{m2}r_{O2})\,C_{GD2}\ \text{at X}, \qquad C_{GD2}\left(1 + \frac{1}{g_{m2}r_{O2}}\right)\ \text{at the output}.$$

### Step 4 — The input pole

Total capacitance at node A: $C_{GS1}$ plus the Miller part of $C_{GD1}$:

$$C_A = C_{GS1} + (1 + g_{m1}r_{O1})\,C_{GD1}.$$

$$\omega_{in} \approx \frac{1}{R_AC_A} = \frac{1}{R_S\left[C_{GS1} + (1 + g_{m1}r_{O1})\,C_{GD1}\right]}.$$

### Step 5 — The pole at node X

Node X collects four capacitances: $C_{DB1}$, $C_{GS2}$, the X-side part of $C_{GD1}$, and the large Miller part of $C_{GD2}$:

$$C_X^{tot} = C_{GD1}\left(1 + \frac{1}{g_{m1}r_{O1}}\right) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})\,C_{GD2}.$$

$$\omega_X \approx \frac{1}{r_{O1}\left[C_{GD1}\left(1 + \dfrac{1}{g_{m1}r_{O1}}\right) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})\,C_{GD2}\right]}.$$

Node X has both the largest resistance ($r_{O1}$, compared with a typically much smaller $R_S$) and a large Miller-multiplied capacitance, so it usually gives the **dominant (lowest-frequency) pole**.

### Step 6 — The output pole

Output capacitance: $C_{DB2}$ plus the output-side part of $C_{GD2}$:

$$\omega_{out} \approx \frac{1}{r_{O2}\left[C_{DB2} + C_{GD2}\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)\right]} \approx \frac{1}{r_{O2}(C_{DB2} + C_{GD2})},$$

where the last form uses $g_{m2}r_{O2}\gg1$ (the intrinsic gain of a MOSFET is typically 10–100).

### Step 7 — How good are these estimates?

The Miller approximation uses the **low-frequency** gain. Here both gains are the intrinsic gains $g_mr_O$, which are large and begin to fall at fairly low frequencies, so the estimates are rough. The estimate of $\omega_{out}$ is the weakest one: $C_{GD2}$ couples X and the output strongly and causes **pole splitting**.

**A better estimate for the X and output poles.** View the second stage as a CS stage driven by a source resistance $r_{O1}$, with grounded capacitance at its input $C_X \approx C_{DB1} + C_{GS2} + C_{GD1}$ and at its output $C_{out} = C_{DB2}$. This is the standard CS circuit, whose denominator is

$$D(s) = r_{O1}r_{O2}\,\xi\,s^2 + \left[r_{O1}(1 + g_{m2}r_{O2})C_{GD2} + r_{O1}C_X + r_{O2}(C_{GD2} + C_{out})\right]s + 1,$$

$$\xi = C_XC_{GD2} + C_XC_{out} + C_{GD2}C_{out}.$$

If the two roots are far apart, the lower one is the inverse of the $s$ coefficient, and the higher one is the $s$ coefficient divided by the $s^2$ coefficient:

$$\omega_X \approx \frac{1}{r_{O1}\left[(1 + g_{m2}r_{O2})C_{GD2} + C_X\right] + r_{O2}(C_{GD2} + C_{out})}.$$

This is the Miller result of Step 5 plus one extra term $r_{O2}(C_{GD2} + C_{out})$ in the time constant. For the second pole, when the Miller term $r_{O1}g_{m2}r_{O2}C_{GD2}$ dominates the $s$ coefficient:

$$\omega_{out} \approx \frac{r_{O1}g_{m2}r_{O2}C_{GD2}}{r_{O1}r_{O2}\,\xi} = \frac{g_{m2}C_{GD2}}{C_XC_{GD2} + C_XC_{out} + C_{GD2}C_{out}}.$$

Notice that $r_{O2}$ has disappeared: at high frequencies $C_{GD2}$ effectively diode-connects $M_2$, so the output resistance drops to about $1/g_{m2}$. The actual output pole is therefore much **higher** than $1/[r_{O2}(C_{DB2} + C_{GD2})]$ from Step 6, while the X pole is pushed lower. This is pole splitting.

**Zeros.** Each gate–drain capacitance also provides a feedforward path, giving right-half-plane zeros at $s = +g_{m1}/C_{GD1}$ and $s = +g_{m2}/C_{GD2}$.

### Result

Associating a pole with each node (Miller approximation, $A_1 = -g_{m1}r_{O1}$ and $A_2 = -g_{m2}r_{O2}$):

$$\omega_{in} \approx \frac{1}{R_S\left[C_{GS1} + (1 + g_{m1}r_{O1})C_{GD1}\right]}$$

$$\omega_X \approx \frac{1}{r_{O1}\left[C_{GD1}\left(1 + \dfrac{1}{g_{m1}r_{O1}}\right) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})C_{GD2}\right]}$$

$$\omega_{out} \approx \frac{1}{r_{O2}\left[C_{DB2} + C_{GD2}\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)\right]} \approx \frac{1}{r_{O2}(C_{DB2} + C_{GD2})}$$

Node X is usually dominant. Because $C_{GD2}$ splits the X and output poles, a more accurate output pole is $\omega_{out}\approx g_{m2}C_{GD2}/\left[C_XC_{out} + (C_X + C_{out})C_{GD2}\right]$, with $C_X \approx C_{DB1} + C_{GS2} + C_{GD1}$ and $C_{out} = C_{DB2}$. The circuit also has right-half-plane zeros at $g_{m1}/C_{GD1}$ and $g_{m2}/C_{GD2}$.

**Common mistake.** Using the wrong node resistances, for example $1/g_{m2}$ at node X or $R_S\parallel r_{O1}$ at the input. The gate of $M_2$ is an open circuit and $I_1$ is ideal, so X sees only $r_{O1}$; the gate of $M_1$ draws no current, so A sees only $R_S$.

**Common mistake.** Forgetting the Miller multiplication of $C_{GD2}$ at node X, or of $C_{GD1}$ at the input. Each gate–drain capacitance bridges an inverting stage of gain $-g_mr_O$ and appears at the stage's input multiplied by $1 + g_mr_O$, which usually makes it the largest capacitance at that node.

**Common mistake.** Treating the Miller estimates as exact. The Miller theorem with low-frequency gains ignores pole splitting; the output pole in particular is underestimated, because at high frequencies $C_{GD2}$ lowers the output resistance from $r_{O2}$ to roughly $1/g_{m2}$.
