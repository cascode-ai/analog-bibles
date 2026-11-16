# Detailed solution - R256

**Approach.** Write the device equations and Kirchhoff's current law (KCL) at X and Y. Then follow the circuit through its regions as $I_{REF}$ grows: (i) a self-biased region in which the source follower $M_3$ supplies part of the current, (ii) $M_3$ cut off, so the circuit is a plain current mirror with resistor load, and (iii) $M_1$ in the triode region. A numerical example ($\beta = 2.68\ \mathrm{mA/V^2}$, $R_1 = 10\ \mathrm{k}\Omega$) fixes the shapes.

### Step 1 — Reading the circuit

From the figure:

- $I_{REF}$ flows from $V_{DD}$ into node X.
- $M_2$ is **diode-connected**: its drain and gate are both at X, its source is grounded.
- $M_1$ has its gate at X (it mirrors $M_2$), its drain at Y and its source grounded. $R_1$ connects $V_{DD}$ to Y.
- $M_3$ has its drain at $V_{DD}$, its gate at Y and its source at X. It is a **source follower** from Y to X, able to push extra current into X. Its bulk is grounded, so its source–bulk voltage is $V_{SB3} = V_X$ and it suffers from the **body effect**.

Device equations (square law, $\lambda = 0$, $\beta = \mu_nC_{ox}W/L$):

$$
\begin{aligned}
I_{D2} &= \frac{\beta}{2}(V_X - V_{TH0})^2 \quad (M_2 \text{ always saturated, since } V_{DS2} = V_{GS2}),\\
I_{D1} &= \frac{\beta}{2}(V_X - V_{TH0})^2 \quad \text{while } M_1 \text{ is saturated, i.e. } V_Y \ge V_X - V_{TH0},\\
I_{D3} &= \frac{\beta}{2}\left(V_Y - V_X - V_{TH3}\right)^2 \quad \text{if } V_Y - V_X > V_{TH3}, \text{ else } 0,
\end{aligned}
$$

with the body-effect threshold

$$V_{TH3} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_X} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.949\right)\ \mathrm{V}.$$

When $M_3$ conducts it is saturated: $V_{DS3} = V_{DD} - V_X$ is at least $V_{GS3} - V_{TH3} = V_Y - V_X - V_{TH3}$ because $V_Y \le V_{DD}$.

### Step 2 — KCL equations

**KCL at X.** $I_{REF}$ and $I_{D3}$ flow in; $I_{D2}$ flows out (the gates draw no current):

$$I_{D2} = I_{REF} + I_{D3}. \tag{1}$$

**KCL at Y.** The current through $R_1$ goes entirely into $M_1$ (the gate of $M_3$ draws none):

$$\frac{V_{DD} - V_Y}{R_1} = I_{D1}. \tag{2}$$

While $M_1$ is saturated, $I_{D1} = I_{D2}$; call this common current $I_1$. Then $V_Y = V_{DD} - R_1I_1$ and $V_X = V_{TH0} + \sqrt{2I_1/\beta}$.

### Step 3 — $I_{REF} = 0$: the loop conducts by itself

**Can everything be off?** If no current flowed, $R_1$ would drop nothing, so $V_Y = V_{DD} = 3$ V. With $M_2$ off, $V_X \le 0.7$ V, so $V_{GS3} = V_Y - V_X \ge 2.3$ V, far above $V_{TH3}$. $M_3$ would conduct, a contradiction. So the circuit conducts even at $I_{REF} = 0$.

**The current loop.** With $I_{REF} = 0$, (1) gives $I_{D3} = I_{D2} = I_1 \equiv I_0$: $M_3$ feeds the diode $M_2$, $M_1$ copies the current, and the current flows through $R_1$. Going around the loop from $V_{DD}$ to ground,

$$V_Y = V_{GS2} + V_{GS3} \quad\text{and}\quad V_Y = V_{DD} - R_1I_0,$$

so $I_0$ solves

$$V_{DD} - R_1I_0 = \underbrace{V_{TH0} + \sqrt{\frac{2I_0}{\beta}}}_{V_{GS2} = V_X} + \underbrace{V_{TH3}(V_X) + \sqrt{\frac{2I_0}{\beta}}}_{V_{GS3}} .$$

**Why it is stable.** This is a **negative-feedback** loop. If $I_0$ increased, $V_Y = V_{DD} - R_1I_0$ would fall, $V_{GS3} = V_Y - V_X$ would fall, $M_3$ would deliver less current into X, and $I_{D2}$, and hence $I_{D1}$, would fall back. So the operating point is unique and well defined.

**Numbers** ($\beta = 134\ \mu\mathrm{A/V^2}\times(10/0.5) = 2.68\ \mathrm{mA/V^2}$, $R_1 = 10\ \mathrm{k}\Omega$). Solving numerically gives $I_0 = 89.6\ \mu\mathrm{A}$. Check:

$$
\begin{aligned}
V_{ov} &= \sqrt{2I_0/\beta} = \sqrt{2(89.6\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = \sqrt{0.0669}\ \mathrm{V} = 0.259\ \mathrm{V},\\
V_X &= 0.7 + 0.259 = 0.959\ \mathrm{V},\\
V_{TH3} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.959} - 0.949\right) = 0.7 + 0.45(1.363 - 0.949) = 0.887\ \mathrm{V},\\
V_{GS3} &= 0.887 + 0.259 = 1.145\ \mathrm{V},\\
V_Y &= V_X + V_{GS3} = 0.959 + 1.145 = 2.104\ \mathrm{V},\\
V_{DD} - R_1I_0 &= 3 - (10\ \mathrm{k}\Omega)(89.6\ \mu\mathrm{A}) = 2.104\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

$M_1$ is saturated ($V_Y = 2.10$ V $> V_X - 0.7 = 0.26$ V). The body effect raises $V_{TH3}$ by 0.19 V, which lowers the loop current a little.

### Step 4 — Small $I_{REF}$: $M_3$ gives up current

Now let $I_{REF}$ increase from zero. The feedback loop tries to keep $I_1$ (hence $V_X$ and $V_Y$) nearly constant, so most of the new $I_{REF}$ simply replaces current that $M_3$ was supplying. To quantify this, take small changes. Define the transconductances

$$g_m = \beta(V_X - V_{TH0}) \ (M_1, M_2), \qquad g_{m3} = \beta(V_Y - V_X - V_{TH3}), \qquad g_{mb3} = g_{m3}\,\frac{\gamma}{2\sqrt{2|\phi_F| + V_X}} .$$

Here $g_{mb3}$ is $M_3$'s body transconductance: raising its source voltage $V_X$ raises $V_{TH3}$ and so reduces $I_{D3}$, in addition to the reduction of $V_{GS3}$.

From $V_X = V_{TH0} + \sqrt{2I_1/\beta}$ and $V_Y = V_{DD} - R_1I_1$:

$$dV_X = \frac{dI_1}{g_m}, \qquad dV_Y = -R_1\,dI_1 .$$

The change in $M_3$'s current:

$$
\begin{aligned}
dI_{D3} &= g_{m3}(dV_Y - dV_X) - g_{mb3}\,dV_X\\
&= g_{m3}\left(-R_1\,dI_1 - \frac{dI_1}{g_m}\right) - g_{mb3}\frac{dI_1}{g_m}\\
&= -\,dI_1\left[g_{m3}R_1 + \frac{g_{m3} + g_{mb3}}{g_m}\right].
\end{aligned}
$$

KCL (1): $dI_1 = dI_{REF} + dI_{D3}$. Substitute and collect $dI_1$:

$$
\begin{aligned}
dI_1\left[1 + g_{m3}R_1 + \frac{g_{m3} + g_{mb3}}{g_m}\right] &= dI_{REF},\\
\frac{dV_Y}{dI_{REF}} = \frac{-R_1}{1 + g_{m3}R_1 + (g_{m3} + g_{mb3})/g_m}, &\qquad \frac{dV_X}{dI_{REF}} = \frac{1/g_m}{1 + g_{m3}R_1 + (g_{m3} + g_{mb3})/g_m}.
\end{aligned}
$$

**Numbers at $I_{REF} = 0$** (all three devices carry 89.6 μA):

$$
\begin{aligned}
g_m = g_{m3} &= \beta V_{ov} = (2.68\ \mathrm{mA/V^2})(0.259\ \mathrm{V}) = 0.693\ \mathrm{mS},\\
g_{mb3} &= 0.693\ \mathrm{mS}\times\frac{0.45}{2(1.363)} = 0.114\ \mathrm{mS},\\
\text{denominator} &= 1 + (0.693\ \mathrm{mS})(10\ \mathrm{k}\Omega) + \frac{0.693 + 0.114}{0.693} = 1 + 6.93 + 1.17 = 9.10,\\
\frac{dV_Y}{dI_{REF}} &= -\frac{10\ \mathrm{k}\Omega}{9.10} = -1.10\ \mathrm{k}\Omega, \qquad \frac{dV_X}{dI_{REF}} = \frac{1.44\ \mathrm{k}\Omega}{9.10} = 0.16\ \mathrm{k}\Omega .
\end{aligned}
$$

So **$V_X$ rises very slightly and $V_Y$ decreases slowly**. As $I_{D3}$ shrinks, $g_{m3}$ and $g_{mb3}$ go to zero, and the slope of $V_Y$ steepens smoothly toward $-R_1$: in this region the $V_Y$ curve bends downward.

### Step 5 — The breakpoint: $M_3$ turns off

$M_3$ stops conducting when $I_{D3} = 0$, i.e. when $V_Y - V_X = V_{TH3}$. At that point $I_1 = I_{REF}$, so

$$V_{DD} - R_1I_{REF}^* = V_{GS}(I_{REF}^*) + V_{TH3}(V_X), \qquad V_{GS}(I) = 0.7\ \mathrm{V} + \sqrt{2I/\beta}.$$

For the example, try $I_{REF}^* = 112\ \mu\mathrm{A}$:

$$
\begin{aligned}
V_X &= 0.7 + \sqrt{2(112\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.7 + 0.289 = 0.989\ \mathrm{V},\\
V_{TH3} &= 0.7 + 0.45\left(\sqrt{1.889} - 0.949\right) = 0.892\ \mathrm{V},\\
V_X + V_{TH3} &= 1.881\ \mathrm{V}, \qquad V_{DD} - R_1I_{REF}^* = 3 - 1.12 = 1.880\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

So $M_3$ turns off at $I_{REF}^* \approx 112\ \mu\mathrm{A}$, with $V_X \approx 0.99$ V and $V_Y \approx 1.88$ V.

### Step 6 — $M_3$ off: a plain mirror with a resistor load

For $I_{REF} > I_{REF}^*$, $I_{D3} = 0$, so $I_{D2} = I_{REF}$. While $M_1$ is saturated it copies $I_{REF}$:

$$V_X = 0.7\ \mathrm{V} + \sqrt{\frac{2I_{REF}}{\beta}} \ \ \text{(slow, square-root rise)}, \qquad V_Y = V_{DD} - R_1I_{REF} \ \ \text{(straight line, slope } -R_1).$$

$M_3$ cannot turn back on: $V_Y$ falls and $V_X$ rises, so $V_Y - V_X$ only moves further below $V_{TH3}$.

### Step 7 — $M_1$ enters triode; $V_Y$ flattens near zero

$M_1$ leaves saturation when $V_Y = V_X - V_{TH0}$:

$$V_{DD} - R_1I_{REF} = \sqrt{\frac{2I_{REF}}{\beta}} .$$

Example: at $I_{REF} = 256\ \mu\mathrm{A}$, $3 - 2.56 = 0.44$ V and $\sqrt{2(256\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.437$ V, so the edge is at about 256 μA ($V_X = 1.14$ V, $V_Y = 0.44$ V).

Beyond it, $M_1$ acts more and more like a resistor $R_{on1} = 1/[\beta(V_X - V_{TH0})]$, and $V_Y \approx V_{DD}\,R_{on1}/(R_1 + R_{on1})$. Because $V_X$ keeps rising, $R_{on1}$ keeps falling and **$V_Y$ flattens toward zero**. $M_1$'s current saturates near $V_{DD}/R_1 = 0.3$ mA no matter how large $I_{REF}$ becomes. $V_X$ continues to follow $V_{GS}(I_{REF})$, because all of $I_{REF}$ still flows in $M_2$.

### Step 8 — Table of values for the sketch

Full square-law solution of (1)–(2) with body effect, $\beta = 2.68\ \mathrm{mA/V^2}$, $R_1 = 10\ \mathrm{k}\Omega$:

| $I_{REF}$ | $V_X$ (V) | $V_Y$ (V) | $I_{D3}$ | Region |
|---|---|---|---|---|
| 0 | 0.959 | 2.104 | 89.6 μA | $M_3$ on (self-biased loop) |
| 50 μA | 0.968 | 2.041 | 45.9 μA | $M_3$ on |
| 100 μA | 0.981 | 1.939 | 6.1 μA | $M_3$ on |
| 112 μA | 0.989 | 1.881 | 0 | $M_3$ turns off |
| 150 μA | 1.035 | 1.500 | 0 | mirror, $M_1$ saturated |
| 200 μA | 1.086 | 1.000 | 0 | mirror, $M_1$ saturated |
| 256 μA | 1.137 | 0.437 | 0 | $M_1$ at the triode edge |
| 500 μA | 1.311 | 0.205 | 0 | $M_1$ in triode |
| 1 mA | 1.564 | 0.134 | 0 | $M_1$ in triode |

### Result

- **Small $I_{REF}$ (including zero):** the loop $M_3 \to M_2 \to M_1 \to R_1$ is a negative-feedback loop that conducts by itself. $M_3$ supplies $I_{D3} = I_{D1} - I_{REF}$, and $V_Y = V_X + V_{GS3}$. At $I_{REF} = 0$ the loop current $I_0$ satisfies $V_{DD} - R_1I_0 = V_{GS2}(I_0) + V_{GS3}(I_0)$, with $V_{TH3}$ raised by the body effect ($V_{SB3} = V_X$). As $I_{REF}$ increases, $V_X$ rises slightly and $V_Y$ decreases slowly while $M_3$'s share shrinks.
- **Breakpoint:** $M_3$ turns off at $I_{REF}^*$ given by $V_{DD} - R_1I_{REF}^* = V_{GS}(I_{REF}^*) + V_{TH3}(V_X)$.
- **Beyond it:** $V_X = 0.7 + \sqrt{2I_{REF}/\beta}$ (slow rise) and $V_Y = V_{DD} - R_1I_{REF}$ (linear fall, slope $-R_1$).
- **Large $I_{REF}$:** when $V_Y < V_X - 0.7$ V, $M_1$ enters triode and $V_Y$ flattens near zero.
- **Example** ($\beta = 2.68\ \mathrm{mA/V^2}$, $R_1 = 10\ \mathrm{k}\Omega$): at $I_{REF} = 0$, $V_X \approx 0.96$ V and $V_Y \approx 2.10$ V (90 μA loop current); $M_3$ is off from about 112 μA ($V_Y \approx 1.88$ V); $M_1$ is in triode beyond about 256 μA; at 1 mA, $V_X \approx 1.56$ V and $V_Y \approx 0.13$ V.

**Common mistake.** Assuming $M_3$ is off for all $I_{REF}$ and writing $V_Y = V_{DD} - R_1I_{REF}$ from zero. At small $I_{REF}$ that would put $V_Y$ near 3 V and $V_X$ near 0.7 V, which gives $M_3$ more than 2 V of gate–source voltage, so it must conduct. The self-biased region is real.

**Common mistake.** Claiming that $M_3$ conducts harder at large $I_{REF}$ and pulls $V_X$ toward $V_{DD}$. $M_3$ needs $V_Y - V_X > V_{TH3}$, but $V_Y$ falls and $V_X$ rises with $I_{REF}$, so $M_3$ turns off and stays off.

**Common mistake.** Treating $M_3$ as a diode or PMOS load, or ignoring its body effect. $M_3$ is an NMOS source follower whose source sits about 1 V above its bulk, so its threshold is about 0.19 V higher than $V_{TH0}$. That shifts both the $I_{REF} = 0$ point and the breakpoint.
