# Detailed solution - R689

**Approach.** The circuit is a CMOS inverter. Trace the transfer curve region by region with the square law and $I_{D1} = I_{D2}$, then observe that $C_{ox}$ multiplies both sides of every one of those equations, so a thicker oxide common to both devices cannot move the curve.

### Step 1 — Effect of the thicker oxide on the device equations

A longer oxidation cycle makes $t_{ox}$ larger for **both** transistors (they are grown in the same step), so $C_{ox} = \varepsilon_{ox}/t_{ox}$ falls by a common factor:

$$C_{ox,\text{actual}} = \alpha\,C_{ox,\text{target}}, \qquad \alpha = \frac{t_{ox,\text{target}}}{t_{ox,\text{actual}}} < 1 .$$

The thresholds ($V_{THN} = 0.7$ V, $V_{THP} = -0.8$ V), mobilities and dimensions are unchanged, so $\mu_nC_{ox}$ and $\mu_pC_{ox}$ both drop by $\alpha$. Each bulk is tied to its source, so there is no body effect.

With $V_{GS1} = V_{in}$, $V_{DS1} = V_{out}$, $V_{SG2} = 3 - V_{in}$ and $V_{SD2} = 3 - V_{out}$ ($\lambda = 0$ for now), the overdrives are $V_{in} - 0.7$ for $M_1$ and $2.2 - V_{in}$ for $M_2$. $M_1$ is saturated if $V_{out} \ge V_{in} - 0.7$; $M_2$ is saturated if $3 - V_{out} \ge 2.2 - V_{in}$, i.e. $V_{out} \le V_{in} + 0.8$.

Define the strength ratio

$$r = \sqrt{\frac{\mu_nC_{ox}(W/L)_1}{\mu_pC_{ox}(W/L)_2}} = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}},$$

which, by the second form, does not contain $C_{ox}$.

### Step 2 — The two ends of the curve

**$V_{in} < 0.7$ V: $M_1$ off.** $M_2$ has $V_{SG2} = 3 - V_{in} > 2.3$ V, so its channel exists, but it must carry $I_{D2} = I_{D1} = 0$, which requires $V_{SD2} = 0$ (deep triode):

$$V_{out} = V_{DD} = 3\ \mathrm{V}.$$

**$V_{in} > 2.2$ V: $M_2$ off.** $V_{SG2} = 3 - V_{in} < 0.8\ \mathrm{V} = |V_{THP}|$, so $I_{D2} = 0$, and the strongly-on $M_1$ carries zero current only at $V_{DS1} = 0$:

$$V_{out} = 0 .$$

Neither level contains $C_{ox}$.

### Step 3 — Switching threshold $V_M$ (both devices saturated)

In the middle of the transition both transistors are saturated. At $V_{in} = V_M$:

$$\tfrac12\mu_nC_{ox}(W/L)_1(V_M - 0.7)^2 = \tfrac12\mu_pC_{ox}(W/L)_2(2.2 - V_M)^2 .$$

Cancelling $\tfrac12C_{ox}$, dividing by $\mu_p(W/L)_2$ and taking positive square roots (both overdrives are positive):

$$r^2(V_M - 0.7)^2 = (2.2 - V_M)^2 \quad\Longrightarrow\quad r(V_M - 0.7) = 2.2 - V_M \quad\Longrightarrow\quad V_M(1 + r) = 2.2 + 0.7r,$$

$$\boxed{V_M = \frac{V_{DD} - |V_{THP}| + rV_{THN}}{1 + r} = \frac{2.2 + 0.7r}{1 + r}\ \mathrm{V}}$$

**Examples.**

- $r = 1$ (PMOS made wider to match the NMOS strength): $V_M = (2.2 + 0.7)/2 = 1.45$ V.
- Equal $W/L$ with typical values $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$: $r = \sqrt{134/38.4} = 1.87$, so $V_M = (2.2 + 0.7\times1.87)/2.87 = 3.509/2.87 = 1.22$ V. The stronger NMOS pulls the threshold low.

With $\lambda = 0$ this current equation holds for **any** $V_{out}$ that keeps both devices saturated, $V_M - 0.7 \le V_{out} \le V_M + 0.8$. So in the ideal square-law model the curve drops **vertically** at $V_{in} = V_M$ from $V_M + 0.8$ to $V_M - 0.7$ (infinite gain); with channel-length modulation the slope is large but finite (Step 6).

### Step 4 — Upper bend: $M_1$ saturated, $M_2$ in triode ($0.7\ \mathrm{V} < V_{in} < V_M$)

Above 0.7 V, $M_1$ draws a small current, which $M_2$ supplies in triode with a small $V_{SD2}$, so $V_{out}$ dips slightly below 3 V. With $x = 3 - V_{out} = V_{SD2}$:

$$\tfrac12\mu_nC_{ox}(W/L)_1(V_{in} - 0.7)^2 = \mu_pC_{ox}(W/L)_2\big[(2.2 - V_{in})x - \tfrac12x^2\big].$$

Dividing by $\tfrac12\mu_pC_{ox}(W/L)_2$ (again $C_{ox}$ disappears) and rearranging:

$$r^2(V_{in} - 0.7)^2 = 2(2.2 - V_{in})x - x^2 \quad\Longrightarrow\quad x^2 - 2(2.2 - V_{in})x + r^2(V_{in} - 0.7)^2 = 0 .$$

The triode solution is the smaller root (it must satisfy $x \le 2.2 - V_{in}$):

$$x = (2.2 - V_{in}) - \sqrt{(2.2 - V_{in})^2 - r^2(V_{in} - 0.7)^2},\qquad V_{out} = 3 - x .$$

At $V_{in} = V_M$ the square root vanishes, so $x = 2.2 - V_M$ and $V_{out} = V_M + 0.8$, the top of the vertical segment.

### Step 5 — Lower bend: $M_1$ in triode, $M_2$ saturated ($V_M < V_{in} < 2.2$ V)

Now $M_1$ conducts the saturation current of $M_2$ with a small $V_{DS1}$:

$$\mu_nC_{ox}(W/L)_1\big[(V_{in} - 0.7)V_{out} - \tfrac12V_{out}^2\big] = \tfrac12\mu_pC_{ox}(W/L)_2(2.2 - V_{in})^2 .$$

Dividing by $\tfrac12\mu_nC_{ox}(W/L)_1$:

$$2(V_{in} - 0.7)V_{out} - V_{out}^2 = \frac{(2.2 - V_{in})^2}{r^2}.$$

Smaller root (triode requires $V_{out} \le V_{in} - 0.7$):

$$V_{out} = (V_{in} - 0.7) - \sqrt{(V_{in} - 0.7)^2 - \frac{(2.2 - V_{in})^2}{r^2}} .$$

At $V_{in} = V_M$ this gives $V_{out} = V_M - 0.7$, the bottom of the vertical segment; at $V_{in} = 2.2$ V it gives $V_{out} = 0$.

**Table for $r = 1$** (identical for target and thick oxide):

| $V_{in}$ (V) | $M_1$ | $M_2$ | $V_{out}$ (V) |
|---|---|---|---|
| 0 – 0.7 | off | triode | 3.00 |
| 1.0 | sat | triode | 2.96 |
| 1.2 | sat | triode | 2.87 |
| 1.4 | sat | triode | 2.59 |
| 1.45 ($V_M$) | sat | sat | 2.25 → 0.75 (vertical) |
| 1.5 | triode | sat | 0.41 |
| 1.7 | triode | sat | 0.13 |
| 1.9 | triode | sat | 0.04 |
| 2.2 – 3 | triode | off | 0 |

For $r = 1$ the curve is point-symmetric about $(1.45\ \mathrm{V},\ 1.5\ \mathrm{V})$.

### Step 6 — Comparison with the target oxide thickness

Every relation that determined $V_{out}$ in Steps 2–5 either had $C_{ox}$ as a common factor of both sides of $I_{D1} = I_{D2}$ or did not involve $C_{ox}$. Hence, with the thick oxide:

- the output levels (3 V and 0 V) and the break points $V_{in} = 0.7$ V and $2.2$ V are unchanged;
- the switching threshold $V_M = (2.2 + 0.7r)/(1 + r)$ is unchanged, since $r$ contains no $C_{ox}$;
- the shapes of both bends are unchanged.

**Gain at $V_M$ with channel-length modulation.** Both saturated devices are driven by $v_{in}$ and their currents add at the output, so

$$A_v = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2}).$$

At the same overdrives, $g_m = \mu C_{ox}(W/L)V_{ov} \propto C_{ox}$ and $r_O = 1/(\lambda I_D) \propto 1/C_{ox}$ because $I_D \propto C_{ox}$. The product is independent of $C_{ox}$, so the slope at $V_M$ is unchanged too.

**What does change: the currents.** At every $V_{in}$ the overdrives are those of the target circuit, so every current scales by $\alpha$. For instance, the peak ("crowbar") current at $V_M$ is

$$I_{peak} = \tfrac12\mu_nC_{ox}(W/L)_1(V_M - 0.7)^2 \;\propto\; C_{ox},$$

and the current available to charge or discharge a load capacitance falls by the same factor. The gate capacitance ($\propto C_{ox}WL$) falls too, but the junction, wiring and external load capacitances do not, so the inverter has **weaker drive and slower edges**. For example, an oxide 20 % thicker than intended gives $\alpha = 0.83$: 17 % less current.

### Result

The thick-oxide inverter has **exactly the same** $V_{out}$–$V_{in}$ characteristic as the target design, because $C_{ox}$ multiplies both sides of every current-balance equation. With $r = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$:

- $V_{in} < 0.7$ V: $M_1$ off, $V_{out} = 3$ V.
- $0.7\ \mathrm{V} < V_{in} < V_M$: $V_{out}$ bends down slightly from 3 V ($M_1$ saturated, $M_2$ triode).
- $V_{in} = V_M = (2.2 + 0.7r)/(1 + r)$: steep (ideally vertical) drop from $V_M + 0.8$ to $V_M - 0.7$; $V_M = 1.45$ V for $r = 1$, $1.22$ V for equal $W/L$ ($r = 1.87$).
- $V_M < V_{in} < 2.2$ V: $V_{out}$ approaches 0 ($M_1$ triode, $M_2$ saturated); $V_{in} > 2.2$ V: $M_2$ off, $V_{out} = 0$.
- Only the currents (peak current, drive current) fall, in proportion to $C_{ox}$, so the circuit is slower.

**Common mistake.** Claiming that $V_M$ shifts or the gain drops because "$g_m$ is smaller with a thicker oxide". $V_M$ depends only on the ratio $\mu_nC_{ox}(W/L)_1/[\mu_pC_{ox}(W/L)_2]$ and the thresholds, and in the gain $(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})$ the $C_{ox}$ dependence of $g_m$ and $r_O$ cancels.

**Common mistake.** Putting $V_{out}$ below 3 V for $V_{in} < 0.7$ V (for example at $V_{DD} - |V_{THP}|$). The PMOS gate is driven by $V_{in}$, not tied to its drain, so $M_2$ is a closed switch in deep triode and passes the full $V_{DD}$.

**Common mistake.** Treating $M_2$ as a fixed current source or a diode load. Both gates move with $V_{in}$, so both devices switch and the output swings rail to rail.
