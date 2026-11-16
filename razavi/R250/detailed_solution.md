# Detailed solution - R250

**Approach.** $M_2$ is diode-connected and fed by $I_{REF}$, but part of $I_{REF}$ can be diverted through $R_2$ to Y (or extra current can arrive from Y), and $M_1$ mirrors whatever $M_2$ carries. KCL at X and Y shows that X stays close to the diode voltage $V_{GS}(I_{REF})$ while Y follows $V_1$ through a divider-like relation; the curves cross where $R_2$ carries no current.

### Step 1 — Node equations

Let $V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$, the gate voltage a diode needs to carry exactly $I_{REF}$. KCL at X ($I_{REF}$ in; $M_2$ and $R_2$ out) and at Y (in from $V_1$ through $R_1$ and from X through $R_2$; out through $M_1$):

$$I_{REF} = I_{D2} + \frac{V_X - V_Y}{R_2} , \qquad (1)$$

$$\frac{V_1 - V_Y}{R_1} + \frac{V_X - V_Y}{R_2} = I_{D1} . \qquad (2)$$

With $M_1$ saturated, $I_{D1} = I_{D2}$ (same $V_{GS} = V_X$).

### Step 2 — The crossing point

If $V_X = V_Y$, $R_2$ carries no current, (1) gives $I_{D2} = I_{REF}$ and $V_X = V_{GS}(I_{REF})$, and $M_1$ ($V_{DS1} = V_{GS1}$, saturated) carries $I_{REF}$ too. Then (2) becomes $(V_1 - V_Y)/R_1 = I_{REF}$, so this happens at

$$V_1 = V_{GS}(I_{REF}) + R_1I_{REF} = 0.7 + \sqrt{\frac{2I_{REF}}{\beta}} + R_1I_{REF},$$

where $V_X = V_Y = V_{GS}(I_{REF})$.

- **Below this $V_1$:** $V_Y < V_X$, current flows from X through $R_2$ to Y, and $M_2$ carries *less* than $I_{REF}$, so $V_X$ is slightly *below* $V_{GS}(I_{REF})$.
- **Above it:** $V_Y > V_X$, current flows from Y into X, and $M_2$ carries *more* than $I_{REF}$, so $V_X$ is slightly *above* $V_{GS}(I_{REF})$.

### Step 3 — Small $V_1$: a possible off region

If both transistors are off, all of $I_{REF}$ must flow from X through $R_2$ and $R_1$ into the source $V_1$:

$$V_Y = V_1 + I_{REF}R_1, \qquad V_X = V_1 + I_{REF}(R_1 + R_2) ,$$

which is self-consistent only while $V_X < 0.7$ V, i.e. for

$$V_1 < 0.7\ \mathrm{V} - I_{REF}(R_1 + R_2) .$$

So if $I_{REF}(R_1 + R_2) < 0.7$ V, the sweep starts with both curves rising with slope 1, X above Y by $I_{REF}R_2$, until $V_X$ reaches 0.7 V; if $I_{REF}(R_1 + R_2) \ge 0.7$ V, the transistors are on already at $V_1 = 0$.

### Step 4 — The on region: $V_X$ nearly flat, $V_Y$ roughly linear

**$V_X$.** $M_2$ is a diode carrying $I_{D2} = I_{REF} + (V_Y - V_X)/R_2$, so $V_X = 0.7 + \sqrt{2I_{D2}/\beta}$. A change $dV_Y$ changes $I_{D2}$ by $(dV_Y - dV_X)/R_2$, which the diode converts into $dV_X = dI_{D2}/g_m$:

$$dV_X = \frac{dV_Y}{1 + g_mR_2}, \qquad g_m = \sqrt{2\beta I_{D2}} .$$

For $g_mR_2 \gg 1$, **$V_X$ is nearly flat**, rising slowly around $V_{GS}(I_{REF})$.

**$V_Y$.** With $I_{D1} = I_{D2} = I_{REF} + (V_Y - V_X)/R_2$, (2) becomes

$$\frac{V_1 - V_Y}{R_1} = I_{REF} + \frac{2(V_Y - V_X)}{R_2} ,$$

the factor 2 arising because the $R_2$ current both changes $M_2$'s current, which $M_1$ copies, and flows directly at Y. Differentiating and using $dV_X = dV_Y/(1 + g_mR_2)$:

$$\frac{dV_1 - dV_Y}{R_1} = \frac{2}{R_2}\cdot\frac{g_mR_2}{1 + g_mR_2}\,dV_Y \;\Longrightarrow\; \frac{dV_Y}{dV_1} = \frac{1}{1 + \dfrac{2g_mR_1}{1 + g_mR_2}} \approx \frac{R_2}{R_2 + 2R_1}\quad(g_mR_2 \gg 1) .$$

So **$V_Y$ rises roughly linearly**, much faster than $V_X$, and crosses it at the point of Step 2.

**Can $M_1$ be in triode?** That needs $V_Y < V_X - 0.7$ V, while (1) gives $V_X - V_Y = R_2(I_{REF} - I_{D2}) \le R_2I_{REF}$. So triode is possible (at small $V_1$) only if $I_{REF}R_2 > 0.7$ V, more likely with a small $R_1$; otherwise $M_1$ is saturated over the whole sweep.

### Step 5 — Numerical example

$I_{REF} = 100\ \mu$A, $W/L = 10/0.5$ ($\beta = 2.68\ \mathrm{mA/V^2}$), $R_1 = R_2 = 10\ \mathrm{k}\Omega$: $V_{GS}(I_{REF}) = 0.7 + 0.273 = 0.973$ V, the crossing is at $V_1 = 0.973 + 1.0 = 1.97$ V, and $I_{REF}(R_1 + R_2) = 2$ V $> 0.7$ V (no off region). Solving (1) and (2):

| $V_1$ (V) | 0 | 0.5 | 1.0 | 1.5 | 1.97 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|
| $V_X$ (V) | 0.868 | 0.900 | 0.927 | 0.952 | 0.973 | 0.995 | 1.015 |
| $V_Y$ (V) | 0.245 | 0.433 | 0.618 | 0.801 | 0.973 | 1.164 | 1.343 |
| $I_{D1} = I_{D2}$ (μA) | 38 | 53 | 69 | 85 | 100 | 117 | 133 |
| $R_2$ current X→Y (μA) | 62 | 47 | 31 | 15 | 0 | −17 | −33 |

$M_1$ stays saturated ($V_X - V_Y \le 0.62$ V $< 0.7$ V). The slope of $V_Y$ is about 0.36, close to $R_2/(R_2 + 2R_1) = 0.33$, and $V_X$ changes by only 0.15 V over the whole sweep.

### Result

Both voltages rise monotonically with $V_1$:

- **$V_X$** is a diode voltage and rises only slowly, staying close to $V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$: slightly below it for small $V_1$ (part of $I_{REF}$ escapes through $R_2$), slightly above it for large $V_1$.
- **$V_Y$** rises roughly linearly, with slope $\approx R_2/(R_2 + 2R_1)$ while $M_1$ is saturated.
- They **cross at $V_1 = V_{GS}(I_{REF}) + R_1I_{REF}$**, where $V_X = V_Y = V_{GS}(I_{REF})$ and $R_2$ carries no current. $V_Y < V_X$ below this point and $V_Y > V_X$ above it.
- If $I_{REF}(R_1 + R_2) < 0.7$ V, the sweep starts with both transistors off: $V_X = V_1 + I_{REF}(R_1 + R_2)$ and $V_Y = V_1 + I_{REF}R_1$ (slope 1) until $V_X$ reaches 0.7 V.

(Example, $I_{REF} = 100\ \mu$A, $\beta = 2.68\ \mathrm{mA/V^2}$, $R_1 = R_2 = 10\ \mathrm{k}\Omega$: $V_1 = 0, 2, 3$ V gives $V_X \approx 0.87, 0.97, 1.02$ V and $V_Y \approx 0.25, 0.98, 1.34$ V.)

**Common mistake.** Treating $V_X$ as exactly constant at $V_{GS}(I_{REF})$ and writing $V_Y = V_1 - R_1I_{REF}$, ignoring $R_2$. The $R_2$ current changes the diode current and also flows directly into Y, which is why the slope of $V_Y$ is about $R_2/(R_2 + 2R_1)$ rather than 1.

**Common mistake.** Letting $V_X$ follow $V_1$ once the transistors are on. $M_2$ clamps X like a diode, and changes at Y reach X attenuated by $1 + g_mR_2$.

**Common mistake.** Reading $R_1$ as returned to $V_{DD}$, or drawing $V_Y$ decreasing with $V_1$. $R_1$ goes to the swept source $V_1$, so raising $V_1$ raises Y.
