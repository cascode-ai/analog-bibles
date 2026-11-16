# Detailed solution - R689

**Approach.** The circuit is a CMOS inverter: $M_1$ (NMOS) and $M_2$ (PMOS) share the input at their gates and the output at their drains. We trace the transfer curve region by region using the square-law model and KCL at the output ($I_{D1} = I_{D2}$), and then observe that the gate-oxide capacitance per unit area $C_{ox}$ multiplies both sides of every one of those equations, so a thicker oxide common to both devices cannot move the curve.

### Step 1 — Effect of the thicker oxide on the device equations

The oxide capacitance per unit area is $C_{ox} = \varepsilon_{ox}/t_{ox}$, where $\varepsilon_{ox}$ is the oxide permittivity and $t_{ox}$ its thickness. A longer oxidation cycle makes $t_{ox}$ larger for **both** transistors (they are grown in the same step), so

$$C_{ox,\text{actual}} = \alpha\,C_{ox,\text{target}}, \qquad \alpha = \frac{t_{ox,\text{target}}}{t_{ox,\text{actual}}} < 1 .$$

The thresholds ($V_{THN} = 0.7$ V, $V_{THP} = -0.8$ V), the mobilities and the dimensions are unchanged, so $\mu_nC_{ox}$ and $\mu_pC_{ox}$ both drop by the same factor $\alpha$.

Both bulks are tied to their sources ($M_1$: bulk and source at ground; $M_2$: bulk and source at $V_{DD}$), so there is no body effect and the thresholds stay fixed for every $V_{in}$.

**Terminal voltages.** $V_{GS1} = V_{in}$, $V_{DS1} = V_{out}$, $V_{SG2} = V_{DD} - V_{in} = 3 - V_{in}$, $V_{SD2} = 3 - V_{out}$.

**Square-law currents** ($\lambda = 0$ for now):

$$
\begin{aligned}
I_{D1} &= \tfrac12\mu_nC_{ox}(W/L)_1(V_{in} - 0.7)^2 && \text{sat. if } V_{out} \ge V_{in} - 0.7,\\
I_{D1} &= \mu_nC_{ox}(W/L)_1\big[(V_{in} - 0.7)V_{out} - \tfrac12V_{out}^2\big] && \text{triode otherwise},\\
I_{D2} &= \tfrac12\mu_pC_{ox}(W/L)_2(2.2 - V_{in})^2 && \text{sat. if } V_{out} \le V_{in} + 0.8,\\
I_{D2} &= \mu_pC_{ox}(W/L)_2\big[(2.2 - V_{in})(3 - V_{out}) - \tfrac12(3 - V_{out})^2\big] && \text{triode otherwise}.
\end{aligned}
$$

Here $2.2 - V_{in} = V_{SG2} - |V_{THP}|$ is the overdrive of $M_2$. The saturation condition for $M_2$ is $V_{SD2} \ge V_{SG2} - |V_{THP}|$, i.e. $3 - V_{out} \ge 2.2 - V_{in}$, i.e. $V_{out} \le V_{in} + 0.8$.

Define the strength ratio

$$r = \sqrt{\frac{\mu_nC_{ox}(W/L)_1}{\mu_pC_{ox}(W/L)_2}} = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}},$$

which, as the second form shows, does not contain $C_{ox}$.

### Step 2 — The two ends of the curve

**$V_{in} < 0.7$ V: $M_1$ off.** $V_{GS1} < V_{THN}$, so $I_{D1} = 0$. $M_2$ has $V_{SG2} = 3 - V_{in} > 2.3$ V, well above $|V_{THP}|$, so its channel exists; but it must carry $I_{D2} = I_{D1} = 0$. A conducting channel carries zero current only when $V_{SD2} = 0$ (deep triode), so

$$V_{out} = V_{DD} = 3\ \mathrm{V}.$$

**$V_{in} > 2.2$ V: $M_2$ off.** $V_{SG2} = 3 - V_{in} < 0.8\ \mathrm{V} = |V_{THP}|$, so $I_{D2} = 0$. $M_1$ is strongly on, and zero current forces $V_{DS1} = 0$:

$$V_{out} = 0 .$$

Neither level contains $C_{ox}$.

### Step 3 — Switching threshold $V_M$ (both devices saturated)

In the middle of the transition both transistors are saturated. Equate the two saturation currents at $V_{in} = V_M$:

$$\tfrac12\mu_nC_{ox}(W/L)_1(V_M - 0.7)^2 = \tfrac12\mu_pC_{ox}(W/L)_2(2.2 - V_M)^2 .$$

Cancel $\tfrac12C_{ox}$ from both sides and divide by $\mu_p(W/L)_2$:

$$r^2(V_M - 0.7)^2 = (2.2 - V_M)^2 .$$

Take positive square roots (both overdrives are positive):

$$r(V_M - 0.7) = 2.2 - V_M .$$

Collect the $V_M$ terms:

$$V_M(1 + r) = 2.2 + 0.7r,$$

$$\boxed{V_M = \frac{V_{DD} - |V_{THP}| + rV_{THN}}{1 + r} = \frac{2.2 + 0.7r}{1 + r}\ \mathrm{V}}$$

**Examples.**

- $r = 1$ (PMOS made wider to match the NMOS strength): $V_M = (2.2 + 0.7)/2 = 1.45$ V.
- Equal $W/L$ with typical values $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$: $r = \sqrt{134/38.4} = 1.87$, so $V_M = (2.2 + 0.7\times1.87)/2.87 = 3.509/2.87 = 1.22$ V. The stronger NMOS pulls the threshold toward the low side.

With $\lambda = 0$ the current equation at $V_M$ holds for **any** $V_{out}$ that keeps both devices saturated, $V_M - 0.7 \le V_{out} \le V_M + 0.8$. So in the ideal square-law model the curve drops **vertically** at $V_{in} = V_M$ from $V_M + 0.8$ to $V_M - 0.7$ (infinite gain). With channel-length modulation the drop has a large but finite slope (Step 6).

### Step 4 — Upper bend: $M_1$ saturated, $M_2$ in triode ($0.7\ \mathrm{V} < V_{in} < V_M$)

As soon as $V_{in}$ exceeds 0.7 V, $M_1$ draws a small current. $M_2$ supplies it with only a small $V_{SD2}$, i.e. in triode, so $V_{out}$ dips slightly below 3 V. Equate the currents and write $x = 3 - V_{out} = V_{SD2}$:

$$\tfrac12\mu_nC_{ox}(W/L)_1(V_{in} - 0.7)^2 = \mu_pC_{ox}(W/L)_2\big[(2.2 - V_{in})x - \tfrac12x^2\big].$$

Divide by $\tfrac12\mu_pC_{ox}(W/L)_2$ (again $C_{ox}$ disappears):

$$r^2(V_{in} - 0.7)^2 = 2(2.2 - V_{in})x - x^2 .$$

Rearrange as a quadratic in $x$:

$$x^2 - 2(2.2 - V_{in})x + r^2(V_{in} - 0.7)^2 = 0 .$$

The triode solution is the smaller root (it must satisfy $x \le 2.2 - V_{in}$):

$$x = (2.2 - V_{in}) - \sqrt{(2.2 - V_{in})^2 - r^2(V_{in} - 0.7)^2},\qquad V_{out} = 3 - x .$$

At $V_{in} = V_M$ the square root vanishes, so $x = 2.2 - V_M$ and $V_{out} = V_M + 0.8$: this is the top of the vertical segment.

### Step 5 — Lower bend: $M_1$ in triode, $M_2$ saturated ($V_M < V_{in} < 2.2$ V)

Now $M_1$ conducts the saturation current of $M_2$ with a small $V_{DS1}$:

$$\mu_nC_{ox}(W/L)_1\big[(V_{in} - 0.7)V_{out} - \tfrac12V_{out}^2\big] = \tfrac12\mu_pC_{ox}(W/L)_2(2.2 - V_{in})^2 .$$

Divide by $\tfrac12\mu_nC_{ox}(W/L)_1$:

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

Look back at Steps 2–5: every relation that determined $V_{out}$ was $I_{D1} = I_{D2}$ with $C_{ox}$ appearing as a common factor on both sides, or did not involve $C_{ox}$ at all. Hence, with the thick oxide:

- the output levels (3 V and 0 V) and the break points $V_{in} = 0.7$ V and $2.2$ V are unchanged;
- the switching threshold $V_M = (2.2 + 0.7r)/(1 + r)$ is unchanged, since $r$ contains no $C_{ox}$;
- the shapes of both bends are unchanged.

**Gain at $V_M$ with channel-length modulation.** In the transition both devices are saturated and act as transconductors driven by the same input. Small-signal model: input $v_{in}$ on both gates, current sources $g_{m1}v_{in}$ and $g_{m2}v_{in}$ both pulling the output the same way, and $r_{O1}$, $r_{O2}$ from the output to AC ground. KCL at the output gives

$$A_v = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2}).$$

At the same operating point (same overdrives), $g_m = \mu C_{ox}(W/L)V_{ov} \propto C_{ox}$ and $r_O = 1/(\lambda I_D) \propto 1/C_{ox}$ because $I_D \propto C_{ox}$. The product is independent of $C_{ox}$, so the slope at $V_M$ is unchanged too.

**What does change: the currents.** At every $V_{in}$ the overdrive voltages are the same as in the target circuit, so every current scales by $\alpha$. For instance, the peak ("crowbar") current that flows at $V_M$ is

$$I_{peak} = \tfrac12\mu_nC_{ox}(W/L)_1(V_M - 0.7)^2 \;\propto\; C_{ox},$$

and the current available to charge or discharge a load capacitance is reduced by the same factor. The gate capacitance ($\propto C_{ox}WL$) falls too, but the junction, wiring and external load capacitances do not, so the inverter has **weaker drive and slower edges**. For example, an oxide 20 % thicker than intended gives $\alpha = 0.83$: 17 % less current.

### Result

The thick-oxide inverter has **exactly the same** $V_{out}$–$V_{in}$ characteristic as the target design, because $C_{ox}$ multiplies both sides of every current-balance equation. With $r = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$:

- $V_{in} < 0.7$ V: $M_1$ off, $V_{out} = 3$ V.
- $0.7\ \mathrm{V} < V_{in} < V_M$: $V_{out}$ bends down slightly from 3 V ($M_1$ saturated, $M_2$ triode).
- $V_{in} = V_M = (2.2 + 0.7r)/(1 + r)$: steep (ideally vertical) drop from $V_M + 0.8$ to $V_M - 0.7$; $V_M = 1.45$ V for $r = 1$, $1.22$ V for equal $W/L$ ($r = 1.87$).
- $V_M < V_{in} < 2.2$ V: $V_{out}$ approaches 0 ($M_1$ triode, $M_2$ saturated); $V_{in} > 2.2$ V: $M_2$ off, $V_{out} = 0$.
- Only the currents (peak current, drive current) fall, in proportion to $C_{ox}$, so the circuit is slower.

**Common mistake.** Claiming that $V_M$ shifts or the gain drops because "$g_m$ is smaller with a thicker oxide". $V_M$ depends only on the ratio $\mu_nC_{ox}(W/L)_1/[\mu_pC_{ox}(W/L)_2]$ and on the thresholds, and the gain is $(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})$, in which the $C_{ox}$ dependence of $g_m$ and $r_O$ cancels.

**Common mistake.** Putting $V_{out}$ at less than 3 V for $V_{in} < 0.7$ V (for example at $V_{DD} - |V_{THP}|$). Here the PMOS gate is driven by $V_{in}$, not tied to its drain, so $M_2$ is a closed switch in deep triode; with no current drawn it passes the full $V_{DD}$.

**Common mistake.** Not recognizing the circuit as an inverter and treating $M_2$ as a fixed current source or a diode load. Both gates move with $V_{in}$, which is why both devices switch and the output swings rail to rail.
