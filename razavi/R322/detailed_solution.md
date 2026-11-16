# Detailed solution - R322

**Approach.** With $R_G$ in series with the gate, the gate becomes a node of its own. It is connected to ground through $R_G$ and to the drain through $C_{GD}$, so the gate moves with the output. We write KCL at the source, gate and drain, solve for the gate–source voltage, and obtain a second-order transfer function with one zero. The case $R_G = 0$ and a dominant-pole estimate check the result.

### Step 1 — Small-signal model

From the figure: $V_{in}$ drives the source (node **S**) through $R_S$; the drain (node **D**, the output) goes to $V_{DD}$ (ac ground) through $R_D$; the gate (node **G**) goes to $V_b$ (ac ground) through $R_G$.

<!-- diagram: diagram-01.cir -->

Elements kept:

- $R_S$, $R_D$, $R_G$ as described;
- $C_{GD}$ between G and D; $C_{DB}$ from D to the grounded bulk;
- the channel current $g_m(V_G - V_S)$ from D to S ($\lambda = \gamma = 0$).

No capacitance is attached to S, so the source node is purely resistive.

### Step 2 — The three KCL equations

**Node S** (current from $R_S$ plus the channel current arriving from D):

$$\frac{V_{in} - V_S}{R_S} + g_m(V_G - V_S) = 0 . \qquad (1)$$

**Node G** (current from $R_G$ and through $C_{GD}$; no gate current):

$$-\frac{V_G}{R_G} + (V_{out} - V_G)C_{GD}s = 0 . \qquad (2)$$

**Node D** (currents from $R_D$, $C_{DB}$, $C_{GD}$; the channel current leaves):

$$-\frac{V_{out}}{R_D} - V_{out}C_{DB}s + (V_G - V_{out})C_{GD}s - g_m(V_G - V_S) = 0 . \qquad (3)$$

### Step 3 — Gate voltage from node G

From (2):

$$
\begin{aligned}
V_G\left(\frac{1}{R_G} + C_{GD}s\right) &= C_{GD}s\,V_{out}\\
V_G &= \frac{R_GC_{GD}s}{1 + R_GC_{GD}s}\,V_{out}.
\end{aligned}
$$

$R_G$ and $C_{GD}$ form a high-pass divider from the output to the gate: at high frequency the gate follows the output.

### Step 4 — Channel current from node S

From (1), multiply by $R_S$:

$$
\begin{aligned}
V_{in} - V_S + g_mR_S(V_G - V_S) &= 0\\
V_S(1 + g_mR_S) &= V_{in} + g_mR_SV_G .
\end{aligned}
$$

Then

$$V_G - V_S = \frac{V_G(1 + g_mR_S) - V_{in} - g_mR_SV_G}{1 + g_mR_S} = \frac{V_G - V_{in}}{1 + g_mR_S}.$$

The channel current is therefore

$$g_m(V_G - V_S) = G_m'(V_G - V_{in}), \qquad G_m' \equiv \frac{g_m}{1 + g_mR_S}.$$

The source resistance degenerates the transistor: both $V_{in}$ and $V_G$ act through the reduced transconductance $G_m'$.

### Step 5 — Solve node D

Insert the channel current into (3) and collect the $V_{out}$ terms:

$$V_{out}\left[\frac{1}{R_D} + (C_{DB} + C_{GD})s\right] = V_G\left(C_{GD}s - G_m'\right) + G_m'V_{in}.$$

Substitute $V_G$ from Step 3 and multiply both sides by $(1 + R_GC_{GD}s)$:

$$V_{out}\left\{\left[\frac{1}{R_D} + (C_{DB} + C_{GD})s\right](1 + R_GC_{GD}s) - R_GC_{GD}s\left(C_{GD}s - G_m'\right)\right\} = G_m'(1 + R_GC_{GD}s)V_{in}.$$

Expand the curly bracket; the $R_GC_{GD}^2s^2$ terms cancel:

$$
\begin{aligned}
\{\cdots\} &= \frac{1}{R_D} + \frac{R_GC_{GD}}{R_D}s + (C_{DB} + C_{GD})s + R_GC_{GD}(C_{DB} + C_{GD})s^2 - R_GC_{GD}^2s^2 + G_m'R_GC_{GD}s\\
&= \frac{1}{R_D}\left\{1 + \left[R_DC_{DB} + (R_D + R_G + G_m'R_GR_D)C_{GD}\right]s + R_DR_GC_{GD}C_{DB}s^2\right\}.
\end{aligned}
$$

Hence

$$\frac{V_{out}}{V_{in}} = \frac{G_m'R_D\,(1 + R_GC_{GD}s)}{1 + \left[R_DC_{DB} + (R_D + R_G + G_m'R_GR_D)C_{GD}\right]s + R_DR_GC_{GD}C_{DB}s^2}.$$

### Step 6 — Final form

Multiply numerator and denominator by $(1 + g_mR_S)$, using $G_m'(1 + g_mR_S) = g_m$ and

$$(1 + g_mR_S)(R_D + R_G) + g_mR_GR_D = R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S):$$

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D(1 + R_GC_{GD}s)}{(1 + g_mR_S) + b_1s + (1 + g_mR_S)R_DR_GC_{GD}C_{DB}s^2},$$

$$b_1 = (1 + g_mR_S)R_DC_{DB} + \left[R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)\right]C_{GD}.$$

### Step 7 — Checks and interpretation

**dc gain.** $g_mR_D/(1 + g_mR_S)$, the usual common-gate gain with source resistance.

**$R_G = 0$.** The zero disappears and the denominator becomes $(1 + g_mR_S)[1 + R_D(C_{GD} + C_{DB})s]$:

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D}{(1 + g_mR_S)\left[1 + R_D(C_{GD} + C_{DB})s\right]},$$

a single output pole, as expected when the gate is a true ac ground and $C_{GD}$ simply adds to $C_{DB}$.

**Zero.** $s_z = -1/(R_GC_{GD})$, in the **left half plane**. At this complex frequency the series branch $R_G + 1/(C_{GD}s)$ from the output to the ac-grounded $V_b$ has zero impedance, so it shorts the output and $V_{out} = 0$.

**Dominant pole.** If the poles are well separated, $\omega_{p1}\approx(1 + g_mR_S)/b_1$, i.e.

$$\omega_{p1}\approx\frac{1}{R_DC_{DB} + \left[R_D + \left(1 + \dfrac{g_mR_D}{1 + g_mR_S}\right)R_G\right]C_{GD}} .$$

The term $\left(1 + \dfrac{g_mR_D}{1 + g_mR_S}\right)R_GC_{GD}$ shows a Miller-like effect: with $V_{in} = 0$, a change of the gate voltage is amplified to the drain with gain $-g_mR_D/(1 + g_mR_S)$ (the transistor acts as a degenerated common-source stage from the gate), so $C_{GD}$, seen through $R_G$, is multiplied by $1 + g_mR_D/(1 + g_mR_S)$. This is why a gate resistance degrades the bandwidth of a common-gate stage.

### Result

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D(1 + R_GC_{GD}s)}{(1 + g_mR_S) + b_1s + (1 + g_mR_S)R_DR_GC_{GD}C_{DB}s^2},$$

$$b_1 = (1 + g_mR_S)R_DC_{DB} + \left[R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)\right]C_{GD}.$$

- dc gain $g_mR_D/(1 + g_mR_S)$; two poles; one left-half-plane zero at $s = -1/(R_GC_{GD})$, created by $R_G$.
- For $R_G = 0$: $g_mR_D/\{(1 + g_mR_S)[1 + R_D(C_{GD} + C_{DB})s]\}$.
- Dominant pole $\approx 1/\{R_DC_{DB} + [R_D + (1 + g_mR_D/(1 + g_mR_S))R_G]C_{GD}\}$.

**Common mistake.** Treating the gate as an ac ground, so that $R_G$ has no effect. With $R_G$, $C_{GD}$ couples the output swing back to the gate, which then modulates the channel current; the response becomes second order and the dominant pole drops.

**Common mistake.** Placing the zero in the right half plane. Here the zero comes from the series $R_G$–$C_{GD}$ branch from the output to ac ground, whose impedance $R_G + 1/(C_{GD}s)$ vanishes at the negative real frequency $s = -1/(R_GC_{GD})$.

**Common mistake.** Writing the dc gain as $g_mR_D$. The source resistance and the input resistance $1/g_m$ of the common-gate stage form a divider, giving $g_mR_D/(1 + g_mR_S)$.
