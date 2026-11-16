# Detailed solution - R090

**Approach.** This is a common-source (CS) stage with source degeneration $R_S$. Follow $M_1$ from cutoff through saturation into triode. In saturation, describe the curve parametrically through $I_D$, with the threshold raised by the body effect ($V_{SB} = I_DR_S$), and find the slope from the small-signal model of a degenerated stage. In triode, find the floor that $V_{out}$ approaches. A numerical example shows the shape.

### Step 1 — Basic relations and cutoff

With drain current $I_D$:

$$
\begin{aligned}
V_S &= I_DR_S &&\text{(source voltage)},\\
V_{out} &= V_{DD} - I_DR_D &&\text{(drain voltage)},\\
V_{GS} &= V_{in} - I_DR_S,\\
V_{SB} &= V_S - 0 = I_DR_S ,
\end{aligned}
$$

so the body effect raises the threshold as the current grows:

$$V_{TH}(V_S) = 0.7 + 0.45\left(\sqrt{0.9 + V_S} - \sqrt{0.9}\right)\ \mathrm{V}.$$

With no current, $V_S = 0$ and $V_{TH} = V_{TH0} = 0.7$ V exactly. So $M_1$ is off for $V_{in} \le 0.7$ V, where

$$V_{out} = V_{DD} = 3\ \mathrm{V},$$

and turn-on is exactly at $V_{in} = V_{TH0} = 0.7$ V.

### Step 2 — Saturation: the large-signal equations

Just after turn-on the drain is near $V_{DD}$, far above the gate, so $M_1$ is **saturated** and $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$. Adding $V_S$:

$$V_{in} = V_{TH}(I_DR_S) + \sqrt{\frac{2I_D}{\beta}} + I_DR_S, \qquad V_{out} = V_{DD} - R_DI_D .$$

Choosing $I_D$ gives one point $(V_{in}, V_{out})$ directly. The input is shared between $V_{TH}$ (a bit above 0.7 V, rising with the current), the overdrive (growing only as $\sqrt{I_D}$) and the drop across $R_S$ (growing linearly). At larger currents the $I_DR_S$ term dominates, so most of each input increment appears across $R_S$.

### Step 3 — Slope in saturation (small-signal model)

In the small-signal model, $R_D$ runs from $out$ to ac ground and $R_S$ from the source $s$ to ground. $M_1$ contributes $g_mv_{gs}$ with $v_{gs} = v_{in} - v_s$ and $g_{mb}v_{bs}$ with $v_{bs} = -v_s$, both from $out$ to $s$, where $g_m = \sqrt{2\beta I_D}$ and $g_{mb} = \eta g_m$ with $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$.

<!-- diagram: diagram-01.cir -->

The small-signal drain current $i$ flows through $R_S$, so $v_s = iR_S$:

$$
\begin{aligned}
i &= g_m(v_{in} - v_s) + g_{mb}(0 - v_s) = g_mv_{in} - (g_m + g_{mb})\,iR_S\\
i\left[1 + (g_m + g_{mb})R_S\right] &= g_mv_{in}\\
i &= \frac{g_m}{1 + (g_m + g_{mb})R_S}\,v_{in} .
\end{aligned}
$$

With $v_{out} = -iR_D$,

$$\frac{dV_{out}}{dV_{in}} = -\frac{g_mR_D}{1 + (g_m + g_{mb})R_S} .$$

- **At turn-on**, $g_m = 0$: the slope is **zero**, and the curve leaves the $V_{DD}$ level tangentially.
- **As the current grows**, the slope steepens; once $g_mR_S \gg 1$,
$$\frac{dV_{out}}{dV_{in}} \approx -\frac{g_mR_D}{(1 + \eta)g_mR_S} = -\frac{R_D}{(1 + \eta)R_S} .$$
The curve becomes **nearly a straight line of slope $\approx -R_D/R_S$** (reduced by $1 + \eta \approx 1.2$): degeneration makes the gain a resistor ratio, which linearizes the characteristic.

### Step 4 — Entry into the triode region

$M_1$ leaves saturation when

$$V_{out} = V_{in} - V_{TH}(V_S), \qquad\text{equivalently}\qquad V_{DS} = V_{ov}:\quad V_{DD} - (R_D + R_S)I_D = \sqrt{\frac{2I_D}{\beta}} ,$$

using $V_{DS} = V_{out} - V_S = V_{DD} - (R_D + R_S)I_D$; the second form can be solved directly for the boundary current.

This happens within the sweep only if $R_D$ is large enough. If at $V_{in} = V_{DD}$ the drop across $R_D$ is still below a threshold, $R_DI_D < V_{TH}$, the device stays saturated and there is no triode segment.

### Step 5 — Triode: the floor of the curve

In triode the channel conductance $g_{ds} = \beta(V_{GS} - V_{TH} - V_{DS})$ adds a term $g_{ds}(v_{out} - v_s)$ to the device current, and with $g_m = \beta V_{DS}$,

$$\frac{dV_{out}}{dV_{in}} = -\frac{g_mR_D}{1 + (g_m + g_{mb})R_S + g_{ds}(R_D + R_S)} .$$

As $g_{ds}$ grows, the slope magnitude **decreases** toward zero.

**The floor.** The drain cannot go below the source, $V_{DS} \ge 0$, so

$$
\begin{aligned}
V_{DD} - I_DR_D &\ge I_DR_S\\
I_D &\le \frac{V_{DD}}{R_D + R_S}\\
V_{out} = V_{DD} - I_DR_D &\ge V_{DD} - \frac{V_{DD}R_D}{R_D + R_S} = \frac{V_{DD}R_S}{R_D + R_S} .
\end{aligned}
$$

The limit needs $M_1$ to be a perfect short (an infinite gate voltage), so **$V_{out}$ approaches $V_{DD}R_S/(R_D + R_S)$ from above and stays somewhat above it at $V_{in} = V_{DD}$**; it never reaches 0 V.

### Step 6 — A numerical example

For illustration take $\beta = 10\ \mathrm{mA/V^2}$, $R_D = 2\ \mathrm{k}\Omega$ and $R_S = 1\ \mathrm{k}\Omega$. Then the floor is $3\times1/(1 + 2) = 1$ V and the limiting slope is about $-2/1.18 \approx -1.7$.

**One saturation point in detail**, $I_D = 0.5$ mA:

$$
\begin{aligned}
V_S &= (0.5\ \mathrm{mA})(1\ \mathrm{k}\Omega) = 0.5\ \mathrm{V},\\
V_{TH} &= 0.7 + 0.45(\sqrt{1.4} - \sqrt{0.9}) = 0.7 + 0.45(1.1832 - 0.9487) = 0.806\ \mathrm{V},\\
V_{ov} &= \sqrt{2(0.5\ \mathrm{mA})/(10\ \mathrm{mA/V^2})} = \sqrt{0.1}\ \mathrm{V} = 0.316\ \mathrm{V},\\
V_{in} &= 0.806 + 0.316 + 0.5 = 1.622\ \mathrm{V},\\
V_{out} &= 3 - (2\ \mathrm{k}\Omega)(0.5\ \mathrm{mA}) = 2.0\ \mathrm{V}.
\end{aligned}
$$

$V_{in} - V_{TH} = 0.816$ V $< V_{out} = 2.0$ V, so $M_1$ is saturated. Slope: $g_m = \sqrt{2(10\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.16$ mS, $\eta = 0.45/(2\times1.1832) = 0.190$, so $dV_{out}/dV_{in} = -(3.16)(2)/[1 + (1.190)(3.16)] = -6.32/4.76 = -1.33$.

**Triode boundary.** With $I_D$ in mA, $3 - 3I_D = \sqrt{0.2I_D}$; squaring gives $9I_D^2 - 18.2I_D + 9 = 0$, so $I_D = (18.2 - \sqrt{7.24})/18 = 0.862$ mA. Then $V_{out} = 3 - 1.723 = 1.277$ V and $V_{in} = V_{TH}(0.862) + \sqrt{0.172} + 0.862 = 0.870 + 0.415 + 0.862 = 2.147$ V.

| $V_{in}$ (V) | $I_D$ (mA) | $V_{out}$ (V) | Region | Slope |
|---|---|---|---|---|
| ≤ 0.70 | 0 | 3.00 | off | 0 |
| 0.965 | 0.10 | 2.80 | saturation | −1.04 |
| 1.229 | 0.25 | 2.50 | saturation | −1.21 |
| 1.622 | 0.50 | 2.00 | saturation | −1.33 |
| 1.988 | 0.75 | 1.50 | saturation | −1.40 |
| 2.147 | 0.862 | 1.277 | triode entry | −1.42 |
| 2.4 | 0.936 | 1.129 | triode | −0.26 |
| 3.0 | 0.971 | 1.059 | triode | −0.05 |

(Here $g_mR_S$ reaches only about 4, so the slope gets to −1.4 rather than all the way to −1.7.)

### Result

An **inverting** characteristic:

- **$V_{in} \le 0.7$ V:** $M_1$ off, $V_{out} = V_{DD}$. Turn-on is exactly at $V_{TH0}$, because the source is at 0 V when $I_D = 0$.
- **Saturation:** $V_{in} = V_{TH}(I_DR_S) + \sqrt{2I_D/\beta} + I_DR_S$ and $V_{out} = V_{DD} - R_DI_D$. The slope $-g_mR_D/[1 + (g_m + g_{mb})R_S]$ grows from 0 toward $\approx -R_D/[(1 + \eta)R_S]$ once $g_mR_S \gg 1$, a nearly linear falling segment.
- **Triode** once $V_{out} < V_{in} - V_{TH}(V_S)$ (drain below gate minus threshold), if $R_D$ is large enough for this to happen within the sweep. The slope magnitude then decreases, and $V_{out}$ approaches the floor $V_{DD}R_S/(R_S + R_D)$ (the value with $M_1$ a short), staying somewhat above it at $V_{in} = V_{DD}$.
- **Transition points:** $V_{in} = 0.7$ V; $V_{out} = V_{in} - V_{TH}$; lower bound $V_{DD}R_S/(R_D + R_S)$.

**Common mistake.** Drawing the curve falling toward 0 V, as for an undegenerated CS stage. The current can never exceed $V_{DD}/(R_D + R_S)$, so $V_{out}$ cannot go below $V_{DD}R_S/(R_D + R_S)$.

**Common mistake.** Claiming a large gain $g_mR_D$ independent of $R_S$. With degeneration the slope is $-g_mR_D/[1 + (g_m + g_{mb})R_S] \approx -R_D/[(1 + \eta)R_S]$ for $g_mR_S \gg 1$.

**Common mistake.** Shifting the turn-on point above 0.7 V because of the body effect. At turn-on no current flows, so $V_S = 0$ and $V_{TH} = V_{TH0}$.
