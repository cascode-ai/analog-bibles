# Detailed solution - R091

**Approach:** The output is the source of $M_1$, so the circuit is a source follower; $R_D$ only sets the drain voltage. Follow $M_1$ from cutoff through saturation (a follower with slope below 1, reduced further by the body effect) and, if $R_D$ is large enough, into triode, where the output levels off at a ceiling set by the $R_D$–$R_S$ divider. A numerical example shows both cases.

### Step 1 — Basic relations and cutoff

With drain current $I_D$:

$$
\begin{aligned}
V_{out} &= V_S = I_DR_S,\\
V_D &= V_{DD} - I_DR_D,\\
V_{GS} &= V_{in} - V_{out},\\
V_{SB} &= V_{out} ,
\end{aligned}
$$

and the body effect gives

$$V_{TH}(V_{out}) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - \sqrt{0.9}\right)\ \mathrm{V}.$$

With no current, $V_{out} = 0$ and $V_{TH} = 0.7$ V, so $M_1$ conducts only for $V_{in} > 0.7$ V:

$$V_{out} = 0 \qquad\text{for } V_{in} \le 0.7\ \mathrm{V}.$$

### Step 2 — Saturation: the follower equation

Just after turn-on the drain is near $V_{DD}$, far above the gate, so $M_1$ is saturated and $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$. With $V_{in} = V_{GS} + V_{out}$ and $I_D = V_{out}/R_S$:

$$V_{in} = V_{out} + V_{TH}(V_{out}) + \sqrt{\frac{2V_{out}}{\beta R_S}} .$$

Choosing $V_{out}$ gives $V_{in}$ directly. The output is the input minus a level shift $V_{GS}$ that grows slowly with the current, through the threshold (body effect) and the overdrive. With $\lambda = 0$ the saturated current does not depend on the drain voltage, so $R_D$ has no effect on $V_{out}$ in this region.

### Step 3 — Slope in saturation

In the small-signal model, $R_D$ runs from the drain $d$ to ac ground and $R_S$ from $out$ to ground. $M_1$ carries $g_mv_{gs} + g_{mb}v_{bs}$ from $d$ to $out$, with $v_{gs} = v_{in} - v_{out}$, $v_{bs} = -v_{out}$, $g_m = \sqrt{2\beta I_D}$, $g_{mb} = \eta g_m$ and $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{out}})$.

<!-- diagram: diagram-01.cir -->

KCL at $out$ (the device current flows into $R_S$):

$$
\begin{aligned}
g_m(v_{in} - v_{out}) - g_{mb}v_{out} &= \frac{v_{out}}{R_S}\\
g_mv_{in} &= v_{out}\left(\frac{1}{R_S} + g_m + g_{mb}\right)\\
\frac{dV_{out}}{dV_{in}} &= \frac{g_m}{1/R_S + g_m + g_{mb}} = \frac{g_mR_S}{1 + (g_m + g_{mb})R_S} .
\end{aligned}
$$

- At turn-on, $g_m = 0$: the slope is 0 and the curve leaves the axis tangentially.
- As the current grows, the slope rises toward its limit for $g_mR_S \gg 1$,
$$\frac{dV_{out}}{dV_{in}} \to \frac{g_mR_S}{(1 + \eta)g_mR_S} = \frac{1}{1 + \eta} ,$$
about 0.8–0.87 with $\eta \approx 0.15$–$0.24$ (for $V_{SB}$ between about 1.5 V and 0).
- The slope is always below 1: part of every input increment goes into $V_{GS}$, and the body effect raises $V_{TH}$ as the output rises.

### Step 4 — When does $M_1$ enter triode?

The drain *falls* as the current rises while the gate rises. $M_1$ leaves saturation when the drain drops a threshold below the gate:

$$V_D = V_{in} - V_{TH}(V_{out}) \quad\Longleftrightarrow\quad V_{DD} - \frac{R_D}{R_S}V_{out} = V_{in} - V_{TH}(V_{out}) .$$

At the end of the sweep, $V_{in} = V_{DD}$, the condition for staying saturated, $V_{DD} - I_DR_D \ge V_{DD} - V_{TH}$, simplifies to

$$I_DR_D \le V_{TH} .$$

So if the drop across $R_D$ at $V_{in} = 3$ V is less than a threshold, the follower stays saturated all the way to $V_{DD}$, with slope approaching $1/(1 + \eta)$; a larger $R_D$ makes $M_1$ enter triode before the end.

### Step 5 — Triode: the output levels off at a ceiling

The drain cannot be below the source ($V_{DS} \ge 0$):

$$
\begin{aligned}
V_{DD} - I_DR_D &\ge I_DR_S\\
I_D &\le \frac{V_{DD}}{R_D + R_S}\\
V_{out} = I_DR_S &\le \frac{V_{DD}R_S}{R_D + R_S} .
\end{aligned}
$$

So in triode $V_{out}$ flattens toward the ceiling $V_{DD}R_S/(R_S + R_D)$, its value if $M_1$ were a short, without reaching it. The triode channel conductance $g_{ds}$ makes the slope fall toward zero:

$$\frac{dV_{out}}{dV_{in}} = \frac{g_mR_S}{1 + (g_m + g_{mb})R_S + g_{ds}(R_D + R_S)}, \qquad g_m = \beta V_{DS} .$$

### Step 6 — A numerical example

For illustration take $\beta = 10\ \mathrm{mA/V^2}$ and $R_S = 1\ \mathrm{k}\Omega$, and compare $R_D = 0$ with $R_D = 2\ \mathrm{k}\Omega$.

One saturation point in detail, $V_{out} = 0.5$ V ($I_D = 0.5$ mA):

$$
\begin{aligned}
V_{TH} &= 0.7 + 0.45(\sqrt{1.4} - \sqrt{0.9}) = 0.7 + 0.45(1.1832 - 0.9487) = 0.806\ \mathrm{V},\\
\sqrt{\frac{2V_{out}}{\beta R_S}} &= \sqrt{\frac{2(0.5\ \mathrm{V})}{(10\ \mathrm{mA/V^2})(1\ \mathrm{k}\Omega)}} = \sqrt{0.1}\ \mathrm{V} = 0.316\ \mathrm{V},\\
V_{in} &= 0.5 + 0.806 + 0.316 = 1.622\ \mathrm{V}.
\end{aligned}
$$

Slope there: $g_m = \sqrt{2(10\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.16$ mS, $\eta = 0.45/(2\times1.1832) = 0.190$, so the slope is $3.16/[1 + (1.190)(3.16)] = 3.16/4.76 = 0.66$.

Triode entry for $R_D = 2\ \mathrm{k}\Omega$. At the boundary $V_{DS} = V_{ov}$, i.e. $V_{DD} - (R_D + R_S)I_D = \sqrt{2I_D/\beta}$; with $I_D$ in mA, $3 - 3I_D = \sqrt{0.2I_D}$, so $9I_D^2 - 18.2I_D + 9 = 0$ and $I_D = 0.862$ mA. This gives $V_{out} = 0.862$ V at $V_{in} = 0.862 + V_{TH}(0.862) + \sqrt{0.172} = 0.862 + 0.870 + 0.415 = 2.147$ V. The ceiling is $3\times1/(1 + 2) = 1$ V.

| $V_{in}$ (V) | $V_{out}$, $R_D = 0$ | $V_{out}$, $R_D = 2\ \mathrm{k}\Omega$ | Slope ($R_D = 0$) | Slope ($R_D = 2\ \mathrm{k}\Omega$) |
|---|---|---|---|---|
| ≤ 0.70 | 0 | 0 | 0 | 0 |
| 0.965 | 0.100 | 0.100 | 0.52 | 0.52 |
| 1.229 | 0.250 | 0.250 | 0.60 | 0.60 |
| 1.622 | 0.500 | 0.500 | 0.66 | 0.66 |
| 1.988 | 0.750 | 0.750 | 0.70 | 0.70 |
| 2.147 | 0.862 | 0.862 (triode entry) | 0.71 | 0.71 |
| 2.4 | 1.043 | 0.936 | 0.72 | 0.13 |
| 3.0 | 1.486 | 0.971 | 0.75 | 0.03 |

With $R_D = 0$ the device stays saturated up to 3 V ($I_DR_D = 0 < V_{TH}$); in this example any $R_D$ below about $V_{TH}/I_D = 0.97\ \mathrm{V}/1.49\ \mathrm{mA} \approx 0.65\ \mathrm{k}\Omega$ does. With $R_D = 2\ \mathrm{k}\Omega$ the curve bends over at 2.15 V and creeps toward the 1-V ceiling.

At a specified output $v$ in triode, let $D=V_{DD}-(R_D+R_S)v/R_S$. The triode law $v/R_S=\beta[(V_{in}-v-V_{TH}(v))D-D^2/2]$ gives

$$V_{in}=v+V_{TH}(v)+\frac{v}{\beta R_SD}+\frac{D}{2}.$$

Use this relation only for $0<D<V_{in}-v-V_{TH}(v)$. At triode entry $g_{ds}=0$, so the two slope formulas meet. The endpoint test in Step 4 evaluates $I_D$ and $V_{TH}$ on the trial saturation branch.

![R091 output characteristic](/q/R091/solution-vout.svg)

### Result

A source-follower (non-inverting) characteristic:

- $V_{in} \le 0.7$ V: $V_{out} = 0$.
- Saturation: $V_{out} = I_DR_S$ with $V_{in} = V_{out} + V_{TH}(V_{out}) + \sqrt{2I_D/\beta}$. The slope $g_mR_S/[1 + (g_m + g_{mb})R_S]$ rises from 0 toward $\approx 1/(1 + \eta)$ (about 0.8–0.85) for $g_mR_S \gg 1$, always below 1. $R_D$ does not affect this region ($\lambda = 0$).
- Triode entry when the drain voltage $V_{DD} - I_DR_D$ falls below $V_{in} - V_{TH}(V_{out})$, i.e. $V_{DD} - (R_D/R_S)V_{out} < V_{in} - V_{TH}$. Beyond it the slope decreases and $V_{out}$ levels off toward the ceiling $V_{DD}R_S/(R_S + R_D)$ ($M_1$ acting as a small resistance). This happens within the 0–3 V range only for a large enough $R_D$ (and $\beta$): if $I_DR_D < V_{TH}$ at $V_{in} = V_{DD}$, the follower stays saturated to the end.
- Transition points: turn-on at 0.7 V, triode entry as above, ceiling $V_{DD}R_S/(R_D + R_S)$.

**Common mistake:** Drawing a slope equal to (or above) 1. Even with $g_mR_S \gg 1$ the body effect limits it to $1/(1 + \eta) \approx 0.8$–$0.85$, and at low currents it is smaller still.

**Common mistake:** Asserting a follower slope of about 0.85 all the way to 3 V for any $R_D$. If $I_DR_D$ exceeds $V_{TH}$ before the end of the sweep, $M_1$ enters triode and $V_{out}$ is capped below $V_{DD}R_S/(R_S + R_D)$.

**Common mistake:** Drawing an inverting curve, or a nonzero output below 0.7 V. The output is the source, which rises with the gate, and with $M_1$ off no current flows through $R_S$.
