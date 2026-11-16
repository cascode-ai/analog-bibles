# Detailed solution - R688

**Approach.** $M_1$ is a common-source stage with the diode-connected PMOS load $M_2$. Write $I_{D1} = I_{D2}$ with the square law in each region of $M_1$ and check how $C_{ox}$ enters: a thicker oxide scales $C_{ox}$ by the same factor for both transistors, so it cancels from every equation that fixes $V_{out}$.

### Step 1 — What a thicker oxide changes, and the equations

A longer oxidation cycle raises $t_{ox}$, so $C_{ox} = \varepsilon_{ox}/t_{ox}$ falls, by the same factor for both transistors since they share the gate oxide:

$$C_{ox,\text{actual}} = \alpha\,C_{ox,\text{target}}, \qquad \alpha = \frac{t_{ox,\text{target}}}{t_{ox,\text{actual}}} < 1 .$$

Thresholds, mobilities and $W/L$ are unchanged, so $\mu_nC_{ox}$ and $\mu_pC_{ox}$ both fall by $\alpha$. Each bulk is tied to its source, so there is no body effect and the thresholds stay at 0.7 V and 0.8 V.

Take $\lambda = 0$ for now. The diode-connected $M_2$ is saturated whenever it conducts, with $V_{SG2} = V_{DD} - V_{out}$:

$$I_{D2} = \frac12\mu_pC_{ox}\Big(\frac{W}{L}\Big)_2 (V_{DD} - V_{out} - |V_{THP}|)^2 = \frac12\mu_pC_{ox}\Big(\frac{W}{L}\Big)_2 (2.2\ \mathrm{V} - V_{out})^2 .$$

The output is unloaded, so $I_{D1} = I_{D2}$. Define the dimensionless ratio

$$A = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}} = \sqrt{\frac{\mu_nC_{ox}(W/L)_1}{\mu_pC_{ox}(W/L)_2}},$$

which, by the second form, does not depend on $C_{ox}$.

### Step 2 — Region I: $M_1$ off ($0 \le V_{in} \le 0.7$ V)

With $M_1$ off, $M_2$ must also carry zero current, which in the square-law model requires

$$V_{SG2} \le |V_{THP}| \quad\Longrightarrow\quad V_{DD} - V_{out} \le 0.8\ \mathrm{V} \quad\Longrightarrow\quad V_{out} \ge 2.2\ \mathrm{V}.$$

The model cannot pick a single value in $[2.2, 3]$ V. The conventional answer is the edge of conduction, which is also the value the curve takes the moment $M_1$ turns on:

$$V_{out} = V_{DD} - |V_{THP}| = 3 - 0.8 = 2.2\ \mathrm{V}.$$

(In a real device, subthreshold conduction of $M_2$ slowly charges the output toward $V_{DD}$ while $M_1$ is fully off.) This level contains no $C_{ox}$.

### Step 3 — Region II: $M_1$ saturated (the straight-line section)

Just above $V_{in} = 0.7$ V, $V_{out} \approx 2.2$ V is far above $V_{in} - 0.7$ V, so $M_1$ is saturated. Equate the two saturation currents:

$$\frac12\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1 (V_{in} - 0.7)^2 = \frac12\mu_pC_{ox}\Big(\frac{W}{L}\Big)_2 (2.2 - V_{out})^2 .$$

The factor $\tfrac12 C_{ox}$ cancels, and dividing by $\mu_p(W/L)_2$ gives

$$(2.2 - V_{out})^2 = A^2 (V_{in} - 0.7)^2 .$$

Both brackets are positive while both devices conduct, so

$$\boxed{V_{out} = 2.2\ \mathrm{V} - A\,(V_{in} - 0.7\ \mathrm{V})}$$

a **straight line** of slope

$$\frac{dV_{out}}{dV_{in}} = -A = -\sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}} .$$

This is the small-signal gain $-g_{m1}/g_{m2}$: $g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I_D}$ and $g_{m2} = \sqrt{2\mu_pC_{ox}(W/L)_2I_D}$ carry the same current, so their ratio is $A$. The stage is linear because both devices obey the same square law.

### Step 4 — Where $M_1$ leaves saturation

$M_1$ stays saturated while $V_{out} \ge V_{in} - 0.7$. The line of Step 3 meets $V_{out} = V_{in} - 0.7$ where

$$2.2 - A(V_{in} - 0.7) = V_{in} - 0.7 \quad\Longrightarrow\quad 2.2 = (1 + A)(V_{in} - 0.7),$$

$$V_{in,B} = 0.7 + \frac{2.2}{1 + A}\ \mathrm{V}, \qquad V_{out,B} = V_{in,B} - 0.7 = \frac{2.2}{1 + A}\ \mathrm{V}.$$

Only $A$ appears, so this break point does not depend on $C_{ox}$.

### Step 5 — Region III: $M_1$ in the triode region

For $V_{in} > V_{in,B}$, equate the triode current of $M_1$ with the saturation current of $M_2$:

$$\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1\Big[(V_{in} - 0.7)V_{out} - \tfrac12V_{out}^2\Big] = \frac12\mu_pC_{ox}\Big(\frac{W}{L}\Big)_2 (2.2 - V_{out})^2 .$$

Again $C_{ox}$ cancels. Dividing by $\tfrac12\mu_pC_{ox}(W/L)_2$:

$$A^2\Big[2(V_{in} - 0.7)V_{out} - V_{out}^2\Big] = (2.2 - V_{out})^2 ,$$

a quadratic in $V_{out}$ for each $V_{in}$. As $V_{in}$ grows, $M_1$ becomes a smaller resistor $R_{on1} \approx 1/[\mu_nC_{ox}(W/L)_1(V_{in} - 0.7)]$ and $V_{out}$ sinks toward zero **but never reaches it**: at $V_{out} = 0$, $M_1$ would carry no current while $M_2$ carries its maximum, violating KCL. The curve flattens at a small positive value set by the divider between $R_{on1}$ and the diode $M_2$.

### Step 6 — Numerical illustration with $A = 2$

Take $A = 2$ (for example $\mu_n \approx 2\mu_p$ and $(W/L)_1 = 2(W/L)_2$); other values of $A$ give the same shape with a different slope and break point.

**Break point:**

$$V_{in,B} = 0.7 + \frac{2.2}{1 + 2} = 0.7 + 0.733 = 1.433\ \mathrm{V}, \qquad V_{out,B} = 0.733\ \mathrm{V}.$$

**Triode equation**, with $V_{ov1} = V_{in} - 0.7$:

$$
\begin{aligned}
4\big(2V_{ov1}V_{out} - V_{out}^2\big) &= 4.84 - 4.4V_{out} + V_{out}^2\\
5V_{out}^2 - (8V_{ov1} + 4.4)V_{out} + 4.84 &= 0 .
\end{aligned}
$$

The valid root is the smaller one (it must satisfy $V_{out} < V_{ov1}$):

$$V_{out} = \frac{(8V_{ov1} + 4.4) - \sqrt{(8V_{ov1} + 4.4)^2 - 96.8}}{10}.$$

**End point, $V_{in} = 3$ V** ($V_{ov1} = 2.3$ V):

$$
\begin{aligned}
8V_{ov1} + 4.4 &= 8(2.3) + 4.4 = 22.8,\\
(22.8)^2 - 96.8 &= 519.84 - 96.8 = 423.04,\\
\sqrt{423.04} &= 20.568,\\
V_{out} &= \frac{22.8 - 20.568}{10} = 0.223\ \mathrm{V}.
\end{aligned}
$$

**Points ($A = 2$), valid for both oxide thicknesses:**

| $V_{in}$ (V) | Region of $M_1$ | $V_{out}$ (V) |
|---|---|---|
| 0 – 0.7 | off | 2.20 |
| 1.0 | saturation | $2.2 - 2(0.3) = 1.60$ |
| 1.2 | saturation | $2.2 - 2(0.5) = 1.20$ |
| 1.433 | edge of triode | 0.733 |
| 1.5 | triode | 0.635 |
| 2.0 | triode | 0.374 |
| 2.5 | triode | 0.278 |
| 3.0 | triode | 0.223 |

The sketch is a flat level at 2.2 V, a straight fall of slope $-A$ from $V_{in} = 0.7$ V, a smooth bend at $V_{in,B}$, and a tail flattening to a few hundred millivolts.

### Step 7 — Comparison with the target oxide thickness

Every equation that set $V_{out}$ (Steps 2–5) contains $C_{ox}$ either not at all or as a common factor of both sides of $I_{D1} = I_{D2}$. So the 2.2 V plateau, the turn-on point $V_{in} = 0.7$ V, the slope $-A$, the break point $V_{in,B}$ and the low level at $V_{in} = 3$ V are **all unchanged**: the thick-oxide curve lies exactly on top of the target curve.

**Channel-length modulation does not alter this.** The extra factors $(1 + \lambda_nV_{out})$ and $(1 + \lambda_p(V_{DD} - V_{out}))$ multiply both sides but contain no $C_{ox}$. In small-signal terms, at a given operating point $g_m = \mu C_{ox}(W/L)V_{ov} \propto C_{ox}$ and $r_O = 1/(\lambda I_D) \propto 1/C_{ox}$, so gains such as $g_{m1}/g_{m2}$ and $g_{m1}r_{O1}$ do not depend on $C_{ox}$.

**What does change: the current and the speed.** At any $V_{in}$ the overdrives are those of the target design, so the current scales with $C_{ox}$:

$$I_{D,\text{actual}} = \alpha\, I_{D,\text{target}}, \qquad \alpha = \frac{t_{ox,\text{target}}}{t_{ox,\text{actual}}}.$$

For example, an oxide 20 % thicker than intended gives $\alpha = 1/1.2 = 0.83$, i.e. 17 % less current. The transconductances drop by the same factor, so the diode load's resistance $1/g_{m2}$ rises by $1/\alpha$. The gate capacitances ($\propto C_{ox}WL$) also fall, but the junction and external load capacitances do not, so **the stage is slower**, although its DC transfer curve is identical.

### Result

The thick-oxide $V_{out}$–$V_{in}$ characteristic is **identical to the target one**, because $\mu_nC_{ox}$ and $\mu_pC_{ox}$ drop by the same factor and $C_{ox}$ cancels in $I_{D1} = I_{D2}$. With $A = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$:

- $0 \le V_{in} \le 0.7$ V: $M_1$ off, $V_{out} = V_{DD} - |V_{THP}| = 2.2$ V (conventional; subthreshold leakage of $M_2$ would slowly pull it toward 3 V).
- $M_1$ saturated: $V_{out} = 2.2 - A(V_{in} - 0.7)$, a straight line of slope $-A$ (the small-signal gain $-g_{m1}/g_{m2}$).
- $M_1$ enters triode at $V_{in} = 0.7 + 2.2/(1 + A)$; beyond it $V_{out}$ flattens toward a small nonzero value given by $A^2[2(V_{in} - 0.7)V_{out} - V_{out}^2] = (2.2 - V_{out})^2$. For $A = 2$: break at 1.43 V, $V_{out} = 0.22$ V at $V_{in} = 3$ V.
- Only the bias current and the transconductances fall, by $t_{ox,\text{target}}/t_{ox,\text{actual}}$, so the circuit is slower.

**Common mistake.** Arguing that "a thicker oxide lowers $g_m$, so the gain drops". Both $g_{m1}$ and $g_{m2}$ fall by the same factor and the gain is their ratio; only the current level (and hence speed) changes.

**Common mistake.** Treating $M_2$ as a current source and drawing an output that falls all the way to 0 V. The diode-connected $M_2$ is a square-law "resistor" of about $1/g_{m2}$: it makes the saturation region a straight line of slope $-A$, and $V_{out}$ stays above zero even at $V_{in} = V_{DD}$.

**Common mistake.** Drawing the output at $V_{DD} = 3$ V for $V_{in} < 0.7$ V with a vertical jump to 2.2 V at turn-on. Once appreciable current flows, $M_2$ needs $V_{SG2} \ge |V_{THP}|$, so in the square-law picture the output is at 2.2 V right at turn-on; subthreshold conduction only makes it drift gradually toward $V_{DD}$ well below threshold.
