# Detailed solution - R092

**Approach.** $M_1$ is a source follower (drain at $V_{DD}$, output at the source), and $R_F$ connects the input directly to the output. Before $M_1$ turns on, $R_F$ and $R_S$ divide the input. Find the turn-on point (with the body effect, since the source sits at $V_{out} > 0$), show that $M_1$ is always saturated once on, and derive the slope of the follower region from KCL and the small-signal model.

### Step 1 — The output-node equation

$$V_{GS} = V_{in} - V_{out}, \qquad V_{SB} = V_{out}, \qquad V_{TH}(V_{out}) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - \sqrt{0.9}\right)\ \mathrm{V}.$$

KCL at the output (current arrives through $R_F$ and $M_1$, leaves through $R_S$):

$$\frac{V_{in} - V_{out}}{R_F} + I_{D1} = \frac{V_{out}}{R_S} .$$

### Step 2 — $M_1$ off: the divider line

With $I_{D1} = 0$:

$$
\begin{aligned}
R_S(V_{in} - V_{out}) &= R_FV_{out}\\
V_{out} &= \frac{R_S}{R_S + R_F}\,V_{in} ,
\end{aligned}
$$

a **straight line through the origin** with slope $R_S/(R_S + R_F)$; the output is *not* zero while $M_1$ is off. On this line

$$V_{GS} = V_{in} - V_{out} = V_{in}\left(1 - \frac{R_S}{R_S + R_F}\right) = \frac{R_F}{R_F + R_S}\,V_{in} = \frac{R_F}{R_S}\,V_{out} ,$$

so only part of the input appears across the gate–source junction, and $M_1$ turns on later than $V_{in} = 0.7$ V.

### Step 3 — The turn-on point

$M_1$ turns on when $V_{GS} = V_{TH}(V_{out})$ on the divider line:

$$\frac{R_F}{R_F + R_S}\,V_{in,on} = V_{TH}(V_{out,on}), \qquad V_{out,on} = \frac{R_S}{R_F + R_S}\,V_{in,on},$$

i.e.

$$V_{in,on} = \frac{R_F + R_S}{R_F}\,V_{TH}(V_{out,on}) = \left(1 + \frac{R_S}{R_F}\right)V_{TH}(V_{out,on}) > 0.7\left(1 + \frac{R_S}{R_F}\right)\ \mathrm{V}.$$

The body effect matters here, because $V_{out,on}$ is not small.

**Example: $R_S = R_F$.** Then $V_{GS} = V_{out} = V_{in}/2$, and the condition is $V_{out} = V_{TH}(V_{out})$. With $w = \sqrt{0.9 + V_{out}}$, so $V_{out} = w^2 - 0.9$:

$$
\begin{aligned}
w^2 - 0.9 &= 0.7 + 0.45w - 0.4269\\
w^2 - 0.45w - 1.1731 &= 0\\
w &= \frac{0.45 + \sqrt{0.2025 + 4.6924}}{2} = \frac{0.45 + 2.2124}{2} = 1.3312,\\
V_{out,on} &= 1.3312^2 - 0.9 = 1.7721 - 0.9 = 0.872\ \mathrm{V},\\
V_{in,on} &= 2V_{out,on} = 1.744\ \mathrm{V},
\end{aligned}
$$

versus $2\times0.7 = 1.40$ V without the body effect.

**Can turn-on happen at all?** Solving the turn-on condition with $V_{in,on} = 3$ V shows that for $R_F/R_S < 0.527$ the turn-on point lies above $V_{DD}$. Then $M_1$ stays off over the whole sweep and the characteristic is just the divider line.

### Step 4 — Once on, $M_1$ is always saturated

$V_{DS} = 3 - V_{out} \ge V_{in} - V_{out} = V_{GS} > V_{GS} - V_{TH}$, since the gate never exceeds $V_{DD}$. So **$M_1$ never enters triode** in this sweep, and KCL becomes

$$\frac{V_{in} - V_{out}}{R_F} + \frac{\beta}{2}\left(V_{in} - V_{out} - V_{TH}(V_{out})\right)^2 = \frac{V_{out}}{R_S} .$$

### Step 5 — Slope of the follower region

In the small-signal model, $R_F$ runs from $in$ to $out$ and $R_S$ from $out$ to ground. $M_1$ (drain at ac ground, gate at $in$, source at $out$, bulk at ground) injects into $out$ the current $g_m(v_{in} - v_{out}) + g_{mb}(0 - v_{out})$, with $g_m = \sqrt{2\beta I_{D1}}$ and $g_{mb} = \eta g_m$.

<!-- diagram: diagram-01.cir -->

KCL at $out$:

$$
\begin{aligned}
\frac{v_{in} - v_{out}}{R_F} + g_m(v_{in} - v_{out}) - g_{mb}v_{out} &= \frac{v_{out}}{R_S}\\
v_{in}\left(\frac{1}{R_F} + g_m\right) &= v_{out}\left(\frac{1}{R_F} + g_m + g_{mb} + \frac{1}{R_S}\right)\\
\frac{dV_{out}}{dV_{in}} &= \frac{g_m + 1/R_F}{g_m + g_{mb} + 1/R_F + 1/R_S} .
\end{aligned}
$$

- **At turn-on**, $g_m = g_{mb} = 0$, and the slope is $(1/R_F)/(1/R_F + 1/R_S) = R_S/(R_S + R_F)$, the divider slope: the curve bends upward smoothly, with no jump in slope.
- **As the current grows**, the slope rises toward $g_m/(g_m + g_{mb}) = 1/(1 + \eta) \approx 0.85$ for $g_m \gg 1/R_F, 1/R_S$.
- The numerator is always smaller than the denominator, so the **slope stays below 1**.

**End point.** At $V_{in} = V_{DD}$, $V_{out} = 3 - V_{TH}(V_{out}) - \sqrt{2I_{D1}/\beta}$, slightly higher than for a plain follower: $R_F$ supplies part of the current in $R_S$, so $M_1$ needs less current and overdrive.

### Step 6 — A numerical example

For illustration take $R_F = R_S = 10\ \mathrm{k}\Omega$ and $\beta = 10\ \mathrm{mA/V^2}$. Turn-on is at $V_{in} = 1.744$ V (Step 3). Solving the KCL of Step 4:

| $V_{in}$ (V) | $V_{out}$ (V) | $I_{D1}$ (μA) | Slope |
|---|---|---|---|
| 0 | 0 | 0 | 0.50 |
| 1.0 | 0.500 | 0 | 0.50 |
| 1.744 | 0.872 | 0 (turn-on) | 0.50 |
| 2.0 | 1.052 | 10.5 | 0.76 |
| 2.4 | 1.368 | 33.5 | 0.81 |
| 3.0 | 1.860 | 71.9 | 0.83 |

A plain follower ($R_F$ removed) with the same $R_S$ and $\beta$ would give 1.80 V at $V_{in} = 3$ V; with $R_F$ the output is about 60 mV higher.

### Result

- **$M_1$ off:** no drain current, and $R_F$ and $R_S$ divide the input: $V_{out} = V_{in}R_S/(R_S + R_F)$, a line through the origin with slope $R_S/(R_S + R_F)$. $M_1$ stays off while $V_{GS} = V_{in}R_F/(R_F + R_S) < V_{TH}(V_{out})$.
- **Turn-on** at $V_{in,on} = \dfrac{R_F + R_S}{R_F}V_{TH}(V_{out,on})$, above $0.7(1 + R_S/R_F)$ V because of the body effect ($V_{SB} = V_{out,on} = V_{in,on}R_S/(R_F + R_S)$ is not small). For example, $R_S = R_F$ gives $V_{in,on} \approx 1.74$ V instead of 1.40 V. If $R_F/R_S < 0.527$ the turn-on point lies above 3 V and $M_1$ stays off over the whole sweep.
- **On:** $M_1$ is saturated throughout (drain at $V_{DD}$, gate at most $V_{DD}$). KCL: $(V_{in} - V_{out})/R_F + \tfrac12\beta(V_{in} - V_{out} - V_{TH})^2 = V_{out}/R_S$. Slope $(g_m + 1/R_F)/(g_m + g_{mb} + 1/R_F + 1/R_S)$, rising from $R_S/(R_S + R_F)$ toward $\approx 1/(1 + \eta)$ for large $g_m$, always below 1.
- **At $V_{in} = V_{DD}$:** $V_{out} \approx 3 - V_{TH}(V_{out}) - \sqrt{2I_D/\beta}$, slightly higher than for a plain follower.

**Common mistake.** Setting $V_{out} = 0$ until $M_1$ turns on. Below turn-on the output follows the divider line $V_{in}R_S/(R_S + R_F)$.

**Common mistake.** Placing the turn-on at $V_{in} = 0.7$ V, or at $0.7(1 + R_S/R_F)$ while ignoring the body effect. Only the fraction $R_F/(R_F + R_S)$ of the input appears as $V_{GS}$, and the source is already at $V_{out,on} > 0$.

**Common mistake.** Claiming that $M_1$ enters triode at high inputs, or drawing a slope above 1. The drain at $V_{DD}$ is never below the gate, and the follower slope is at most about $1/(1 + \eta)$.
