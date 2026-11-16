# Detailed solution - R088

**Approach.** $V_{in}$ drives the *source* of $M_1$, whose gate sits at $V_b$, so this is a common-gate (non-inverting) stage, with $R_F$ tying the output back to the input source. Write KCL at the output, find where $M_1$ turns off (with the body effect, since $V_{SB} = V_{in}$), and describe the off, saturation and triode regions with their equations, slopes and boundaries. A numerical example shows the shape.

### Step 1 — Terminal voltages and KCL at the output

Current enters the output node only through $R_D$ from $V_{DD}$, so $V_{in} \le V_{out} \le V_{DD}$, and the lower-potential terminal, $V_{in}$, is the source of $M_1$:

$$V_{GS} = V_b - V_{in}, \qquad V_{DS} = V_{out} - V_{in}, \qquad V_{SB} = V_{in} - 0 = V_{in}.$$

The threshold therefore depends on the input:

$$V_{TH}(V_{in}) = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{in}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{in}} - 0.9487\right)\ \mathrm{V}.$$

KCL at the output (current from $R_D$ leaves through $R_F$ and $M_1$):

$$\frac{V_{DD} - V_{out}}{R_D} = \frac{V_{out} - V_{in}}{R_F} + I_{D1} ,$$

with $I_{D1} = 0$ when $M_1$ is off. Since $I_{D1} \ge 0$, a conducting $M_1$ pulls $V_{out}$ *below* its value with $M_1$ off.

### Step 2 — Where $M_1$ turns off

$M_1$ conducts while $V_b - V_{in} > V_{TH}(V_{in})$. Raising $V_{in}$ reduces $V_{GS}$ *and* raises $V_{TH}$, so the device turns off at $V_{in,off}$, where

$$V_b - V_{in,off} = 0.7 + 0.45\left(\sqrt{0.9 + V_{in,off}} - 0.9487\right).$$

With $u = \sqrt{0.9 + V_{in,off}}$, so that $V_{in,off} = u^2 - 0.9$:

$$
\begin{aligned}
V_b - (u^2 - 0.9) &= 0.7 + 0.45u - 0.4269\\
u^2 + 0.45u - (V_b + 0.9 - 0.7 + 0.4269) &= 0\\
u^2 + 0.45u - (V_b + 0.6269) &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 4(V_b + 0.6269)}}{2},\\
V_{in,off} &= u^2 - 0.9 .
\end{aligned}
$$

For example, with $V_b = 1.5$ V:

$$
\begin{aligned}
u &= \frac{-0.45 + \sqrt{0.2025 + 8.5076}}{2} = \frac{-0.45 + 2.9513}{2} = 1.2507,\\
V_{in,off} &= 1.2507^2 - 0.9 = 1.5641 - 0.9 = 0.664\ \mathrm{V}.
\end{aligned}
$$

Check: $V_{TH}(0.664) = 0.7 + 0.45(1.2507 - 0.9487) = 0.836$ V and $V_b - V_{in} = 1.5 - 0.664 = 0.836$ V. ✓ Without the body effect the cutoff would be at $V_b - 0.7 = 0.8$ V; the body effect moves it **lower**.

### Step 3 — $M_1$ off ($V_{in} \ge V_{in,off}$): the divider line

With $I_{D1} = 0$, KCL becomes a divider between $V_{DD}$ and $V_{in}$:

$$
\begin{aligned}
R_F(V_{DD} - V_{out}) &= R_D(V_{out} - V_{in})\\
V_{out} &= \frac{R_FV_{DD} + R_DV_{in}}{R_D + R_F} .
\end{aligned}
$$

This is a **straight line of slope $R_D/(R_D + R_F)$**. At $V_{in} = V_{DD}$ it gives $V_{out} = V_{DD}(R_F + R_D)/(R_D + R_F) = V_{DD}$, so the curve **ends at $(3\ \mathrm{V}, 3\ \mathrm{V})$**. At cutoff it passes through

$$V_{out,off} = \frac{R_FV_{DD} + R_DV_{in,off}}{R_D + R_F} .$$

$V_{out}$ is *not* $V_{DD}$ here: $R_F$ still carries current from $V_{DD}$ through $R_D$ into the input source.

### Step 4 — $M_1$ saturated: the steep common-gate region

Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$:

$$V_{out} - V_{in} \ge V_b - V_{in} - V_{TH} \quad\Longleftrightarrow\quad V_{out} \ge V_b - V_{TH}(V_{in}) ,$$

and then

$$\frac{V_{DD} - V_{out}}{R_D} = \frac{V_{out} - V_{in}}{R_F} + \frac{\beta}{2}\left(V_b - V_{in} - V_{TH}(V_{in})\right)^2 .$$

**Slope.** In the small-signal model, $R_D$ runs from $out$ to ac ground and $R_F$ from $out$ to $in$. $M_1$ has its gate at ac ground, source at $in$ and bulk at ground, so $v_{gs} = v_{bs} = -v_{in}$, and its current from $out$ to $in$ is $g_mv_{gs} + g_{mb}v_{bs} = -(g_m + g_{mb})v_{in}$, with $g_m = \beta(V_b - V_{in} - V_{TH})$ and $g_{mb} = \eta g_m$.

<!-- diagram: diagram-01.cir -->

KCL at $out$:

$$
\begin{aligned}
\frac{0 - v_{out}}{R_D} &= \frac{v_{out} - v_{in}}{R_F} - (g_m + g_{mb})\,v_{in}\\
-v_{out}\left(\frac{1}{R_D} + \frac{1}{R_F}\right) &= -v_{in}\left(\frac{1}{R_F} + g_m + g_{mb}\right)\\
\frac{dV_{out}}{dV_{in}} = \frac{v_{out}}{v_{in}} &= \left(g_m + g_{mb} + \frac{1}{R_F}\right)(R_D\|R_F) .
\end{aligned}
$$

The slope is **positive** (non-inverting) and **larger** than the divider slope $R_D/(R_D + R_F) = (1/R_F)(R_D\|R_F)$. As $V_{in}$ rises toward $V_{in,off}$, $g_m$ shrinks to zero and the slope falls to exactly $R_D/(R_D + R_F)$: the curve **joins the divider line tangentially** at cutoff, approaching it from below.

### Step 5 — $M_1$ in triode: the beginning of the sweep

At $V_{in} = 0$ the source is grounded and the gate is at $V_b$. If $\beta$ (or $R_D$) is large, $M_1$ pulls the output below $V_b - V_{TH}$ and starts in **triode**:

$$\frac{V_{DD} - V_{out}}{R_D} = \frac{V_{out} - V_{in}}{R_F} + \beta\left[(V_b - V_{in} - V_{TH})(V_{out} - V_{in}) - \tfrac12(V_{out} - V_{in})^2\right].$$

At $V_{in} = 0$ ($V_{TH} = 0.7$ V) this gives the **starting value**:

$$\frac{V_{DD} - V_{out}}{R_D} = \frac{V_{out}}{R_F} + \beta\left[(V_b - 0.7)V_{out} - \tfrac12V_{out}^2\right].$$

$M_1$ starts in saturation instead (no triode segment) if the saturation solution at $V_{in} = 0$, $V_{out}(0) = (R_D\|R_F)\left[V_{DD}/R_D - \tfrac12\beta(V_b - 0.7)^2\right]$, is at least $V_b - 0.7$.

**Slope in triode.** The drain current now also depends on $v_{ds}$ through $g_{ds} = \beta(V_{GS} - V_{TH} - V_{DS})$, with $g_m = \beta V_{DS}$. Adding $g_{ds}(v_{out} - v_{in})$ to the device current in the KCL of Step 4:

$$\frac{dV_{out}}{dV_{in}} = \frac{g_m + g_{mb} + g_{ds} + 1/R_F}{g_{ds} + 1/R_D + 1/R_F} .$$

Deep in triode $g_{ds}$ dominates and the slope is close to 1 (the channel ties the output to the input). As $V_{out} - V_{in}$ grows toward $V_b - V_{in} - V_{TH}$, $g_{ds}$ falls to zero and the slope rises to the saturation value, so **the curve is steepest at the triode/saturation boundary**, $V_{out} = V_b - V_{TH}(V_{in})$.

### Step 6 — A numerical example

Take, for illustration only, $V_b = 1.5$ V, $\beta = 2\ \mathrm{mA/V^2}$ and $R_D = R_F = 10\ \mathrm{k}\Omega$.

**Start ($V_{in} = 0$, triode).** Multiplying the triode equation by $R_D = 10\ \mathrm{k}\Omega$ ($\beta R_D = 20\ \mathrm{V^{-1}}$):

$$
\begin{aligned}
3 - V_{out} &= V_{out} + 20\left(0.8V_{out} - 0.5V_{out}^2\right)\\
10V_{out}^2 - 18V_{out} + 3 &= 0\\
V_{out} &= \frac{18 - \sqrt{324 - 120}}{20} = \frac{18 - 14.28}{20} = 0.186\ \mathrm{V},
\end{aligned}
$$

in triode, since $0.186\ \mathrm{V} < V_b - 0.7 = 0.8$ V. Solving the equations of Steps 3–5 at other inputs:

| $V_{in}$ (V) | $V_{out}$ (V) | Region of $M_1$ | Slope $dV_{out}/dV_{in}$ |
|---|---|---|---|
| 0 | 0.186 | triode | 1.25 |
| 0.2 | 0.469 | triode | 1.7 |
| 0.30 | 0.711 | triode | 4.6 |
| 0.304 | 0.733 | triode/saturation boundary ($V_{out} = V_b - V_{TH}$) | 5.7 (maximum) |
| 0.4 | 1.208 | saturation | 4.3 |
| 0.5 | 1.561 | saturation | 2.8 |
| 0.6 | 1.771 | saturation | 1.4 |
| 0.664 | 1.832 | cutoff ($V_{in,off}$) | 0.5 |
| 1.0 | 2.000 | off | 0.5 |
| 2.0 | 2.500 | off | 0.5 |
| 3.0 | 3.000 | off | 0.5 |

The curve rises gently, then very steeply around the triode/saturation boundary, bends over through saturation, and merges smoothly into the divider line $V_{out} = 1.5\ \mathrm{V} + V_{in}/2$ at $V_{in} = 0.664$ V, which it follows up to $(3, 3)$.

### Result

The characteristic is **non-inverting (common-gate)**: $V_{out}$ rises monotonically from a low value at $V_{in} = 0$ to $V_{DD}$ at $V_{in} = V_{DD}$, while $M_1$ goes from triode (if strongly driven at the start) through saturation to cutoff.

- **Cutoff** at $V_{in,off}$, where $V_b - V_{in,off} = V_{TH}(V_{in,off})$ with $V_{TH}(V) = 0.7 + 0.45(\sqrt{0.9 + V} - \sqrt{0.9})$ (body effect, $V_{SB} = V_{in}$). It lies slightly below $V_b - 0.7$ V (0.664 V for $V_b = 1.5$ V).
- **Off ($V_{in} \ge V_{in,off}$):** the straight divider line $V_{out} = (R_FV_{DD} + R_DV_{in})/(R_D + R_F)$, slope $R_D/(R_D + R_F)$, ending at $(V_{DD}, V_{DD})$.
- **On:** $(V_{DD} - V_{out})/R_D = (V_{out} - V_{in})/R_F + I_{D1}$, so $V_{out}$ lies below that line, with $V_{in} \le V_{out}$.
- **Saturation** for $V_{out} \ge V_b - V_{TH}(V_{in})$, with $I_{D1} = \tfrac12\beta(V_b - V_{in} - V_{TH})^2$ and slope $(g_m + g_{mb} + 1/R_F)(R_D\|R_F)$, larger than $R_D/(R_D + R_F)$ and falling to it at cutoff, where the curve joins the line tangentially.
- **Triode** for $V_{out} < V_b - V_{TH}(V_{in})$, near $V_{in} = 0$ if $\beta$ is large. $V_{out}(0)$ follows from $(V_{DD} - V_{out})/R_D = V_{out}/R_F + \beta[(V_b - 0.7)V_{out} - V_{out}^2/2]$. The slope there is moderate (about 1) and grows toward the triode/saturation boundary, where the curve is steepest.
- **Transition points:** $V_{out} = V_b - V_{TH}(V_{in})$ (triode → saturation); $V_{in} = V_{in,off}$ (cutoff, with $V_{out} = (R_FV_{DD} + R_DV_{in,off})/(R_D + R_F)$); end point $(V_{DD}, V_{DD})$.

**Common mistake.** Drawing an inverting curve, as if $V_{in}$ drove the gate. Here $V_{in}$ drives the *source*: raising it reduces $V_{GS}$, so $M_1$ draws *less* current and $V_{out}$ *rises*.

**Common mistake.** Setting $V_{out} = V_{DD}$ once $M_1$ is off. $R_F$ still connects the output to the input source, so $V_{out}$ follows the divider line and reaches $V_{DD}$ only at $V_{in} = V_{DD}$.

**Common mistake.** Placing the cutoff at $V_{in} = V_b - 0.7$ V. With the bulk grounded, $V_{SB} = V_{in}$ raises the threshold and the device turns off earlier.
