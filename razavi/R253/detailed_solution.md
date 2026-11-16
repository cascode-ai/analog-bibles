# Detailed solution - R253

**Approach.** $V_1$ is the "supply" of the right-hand side: it feeds Y through $R_1$ and is the drain of $M_3$. While $M_3$ is off, X is a diode fed by the fixed $I_{REF}$, so $V_X$ is constant, and Y is the drain of a mirror device fed through $R_1$ from $V_1$. $M_3$, a follower from Y to X, turns on only when Y gets a threshold above X, and then closes a negative-feedback loop ($Y \to M_3 \to X \to M_1 \to Y$) that holds Y back. Follow $V_1$ upward through these regions.

### Step 1 — Node equations

Let $a = \sqrt{2I_{REF}/\beta}$ (the overdrive needed to carry $I_{REF}$) and $V_{GS}(I_{REF}) = 0.7 + a$. With the bulks grounded, $M_3$ (source at X) has

$$V_{TH3}(V_X) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right) .$$

KCL at X: $I_{REF} + I_{D3} = I_{D2} = \frac{\beta}{2}(V_X - 0.7)^2$. KCL at Y: $\dfrac{V_1 - V_Y}{R_1} = I_{D1}$.

**When can $M_3$ conduct?** Current flows from $V_1$ through $R_1$ into Y, so $V_Y \le V_1$. If $V_1 < V_X$, the source of $M_3$ is the $V_1$ terminal and $V_{GS3} = V_Y - V_1 \le 0$: off. If $V_1 > V_X$, the source is X and $M_3$ conducts only when

$$V_Y - V_X > V_{TH3}(V_X) ,$$

and then it is saturated ($V_{DS3} = V_1 - V_X \ge V_Y - V_X - V_{TH3}$ because $V_1 \ge V_Y$).

### Step 2 — While $M_3$ is off: $V_X$ is constant

With $I_{D3} = 0$, the diode carries exactly $I_{REF}$:

$$V_X = V_{GS}(I_{REF}) = 0.7 + a = 0.7 + \sqrt{\frac{2I_{REF}}{\beta}} = \text{const.}$$

### Step 3 — $V_Y$ with $M_3$ off

$M_1$ has overdrive $a$; whether it is saturated depends on how much voltage $V_1$ leaves it.

**(a) Small $V_1$: $M_1$ in triode.** With $I_{D1} = \beta(aV_Y - \tfrac12V_Y^2)$,

$$\frac{V_1 - V_Y}{R_1} = \beta\left(aV_Y - \tfrac12V_Y^2\right) ,$$

so $V_Y$ is a fraction of $V_1$, with $dV_Y/dV_1 = 1/[1 + \beta R_1(a - V_Y)]$: it starts at $1/(1 + \beta R_1a)$ ($M_1$ is a resistor $1/(\beta a)$ in a divider with $R_1$) and rises to 1 as $V_Y \to a$.

**(b) $M_1$ saturated** ($V_Y \ge a$): $M_1$ copies $I_{REF}$, so

$$V_Y = V_1 - R_1I_{REF} \qquad(\text{slope } 1),$$

starting at $V_1 = R_1I_{REF} + a$.

### Step 4 — $M_3$ turns on

With $V_X = V_{GS}(I_{REF})$ and (normally) $V_Y = V_1 - R_1I_{REF}$, $V_Y - V_X = V_{TH3}(V_X)$ gives

$$V_{1,on} = V_{GS}(I_{REF}) + V_{TH3}\big(V_{GS}(I_{REF})\big) + R_1I_{REF} ,$$

where, with $V_X \approx 1$ V, the body effect makes $V_{TH3}$ about 0.89 V rather than 0.7 V.

### Step 5 — With $M_3$ on: negative feedback holds $V_Y$ back

$M_3$'s current adds to $I_{REF}$ in $M_2$, so $V_X$ rises slightly; $M_1$ mirrors the larger current, the drop across $R_1$ grows, and Y is pulled back: Y can rise only as fast as the loop allows, with $V_Y \approx V_X + V_{GS3}$.

With $u = V_X - 0.7$, $I_{D2} = \frac{\beta}{2}u^2$, $I_{D3} = \frac{\beta}{2}(u^2 - a^2)$, $M_3$'s overdrive is $w = \sqrt{u^2 - a^2}$, and the saturated $M_1$ carries $\frac{\beta}{2}u^2$. Hence

$$V_Y = V_X + V_{TH3}(V_X) + w, \qquad V_1 = V_Y + \frac{\beta R_1}{2}u^2 .$$

Differentiating with respect to $u$ ($dV_X = du$, $dw/du = u/w$):

$$
\begin{aligned}
dV_Y &= D\,du, & D &= 1 + \frac{dV_{TH3}}{dV_X} + \frac{u}{w},\\
dV_1 &= dV_Y + \beta R_1u\,du = (D + \beta R_1u)\,du ,
\end{aligned}
$$

$$\frac{dV_X}{dV_1} = \frac{1}{D + \beta R_1u}, \qquad \frac{dV_Y}{dV_1} = \frac{D}{D + \beta R_1u} .$$

- **At turn-on** $w = 0$ and $D \to \infty$: $V_Y$'s slope is still 1 and $V_X$'s is 0, a smooth transition with $V_X - V_{GS}(I_{REF}) \approx (V_1 - V_{1,on})^2/(2a)$ at first.
- **Further on**, $D$ drops toward about 2, so the slope of $V_Y$ falls **below 1** and $V_X$ starts to rise.
- **Strength of the clamp** is set by $\beta R_1u$: strong for a large $R_1$, weak (slope near 1) for a small $R_1$, where the extra current produces little extra drop.

### Step 6 — Which regions appear within $0 < V_1 < 3$ V

- If $R_1I_{REF} + a \ge 3$ V, $M_1$ never saturates: only region (a) appears.
- If $V_{GS}(I_{REF}) + V_{TH3} + R_1I_{REF} \ge 3$ V, $M_3$ never turns on: the sweep ends in region (b) with $V_X$ constant.
- Otherwise all three regions appear.

### Step 7 — Numerical example

$I_{REF} = 100\ \mu$A, $W/L = 10/0.5$ ($\beta = 2.68\ \mathrm{mA/V^2}$), $R_1 = 3\ \mathrm{k}\Omega$:

$$
\begin{aligned}
a &= \sqrt{2(0.1\ \mathrm{mA})/(2.68\ \mathrm{mA/V^2})} = 0.273\ \mathrm{V}, \qquad V_X = 0.973\ \mathrm{V},\\
V_{TH3}(0.973\ \mathrm{V}) &= 0.7 + 0.45(\sqrt{1.873} - 0.9487) = 0.889\ \mathrm{V},\\
\text{initial slope} &= 1/(1 + \beta R_1a) = 1/(1 + 2.20) = 0.31,\\
M_1\ \text{saturates at}\ V_1 &= 0.3 + 0.273 = 0.57\ \mathrm{V},\\
V_{1,on} &= 0.973 + 0.889 + 0.3 = 2.16\ \mathrm{V} .
\end{aligned}
$$

Solving the circuit:

| $V_1$ (V) | 0.25 | 0.50 | 0.75 | 1.0 | 1.5 | 2.0 | 2.16 | 2.3 | 2.5 | 2.75 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $V_X$ (V) | 0.973 | 0.973 | 0.973 | 0.973 | 0.973 | 0.973 | 0.973 | 0.987 | 1.021 | 1.066 | 1.110 |
| $V_Y$ (V) | 0.088 | 0.214 | 0.450 | 0.700 | 1.200 | 1.700 | 1.860 | 1.968 | 2.086 | 2.213 | 2.326 |
| $I_{D3}$ (μA) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 38 | 79 | 125 |
| $M_1$ | triode | triode | sat | sat | sat | sat | sat | sat | sat | sat | sat |

After turn-on the slope of $V_Y$ drops to about 0.5. With $R_1 = 300\ \Omega$ the post-turn-on slope is about 0.85–0.95 (weak clamp); with $R_1 = 30\ \mathrm{k}\Omega$, $M_1$ stays in triode over the whole sweep ($V_Y \approx 0.2$ V at 3 V) and $M_3$ never turns on.

### Result

- **$V_X$** stays at $V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$ until $M_3$ turns on, then rises slowly (with zero slope at first).
- **$V_Y$** rises from 0. First $M_1$ is in triode (initial slope $1/(1 + \beta R_1\sqrt{2I_{REF}/\beta})$, increasing to 1). Then $V_Y = V_1 - R_1I_{REF}$ (slope 1) once $M_1$ saturates at $V_1 = R_1I_{REF} + \sqrt{2I_{REF}/\beta}$.
- **$M_3$ turns on** when $V_Y$ reaches $V_X + V_{TH3}(V_X)$, i.e. at $V_1 = V_{GS}(I_{REF}) + V_{TH3} + R_1I_{REF}$ ($V_{TH3} \approx 0.89$ V with body effect). Its current is added to $M_2$'s and mirrored into $M_1$, and the extra drop across $R_1$ holds $V_Y$ back (negative feedback, $V_Y \approx V_X + V_{GS3}$). Both voltages keep rising, $V_Y$ with a slope that falls below 1. The clamp is strong for large $\beta R_1(V_X - 0.7)$ and weak (slope near 1) for small $R_1$.
- Depending on $R_1I_{REF}$, the sweep may end before $M_1$ saturates or before $M_3$ turns on.

**Common mistake.** Assuming $M_3$ conducts from the start. As a follower from Y to X it needs $V_Y$ to exceed $V_X$ by a threshold (≈ 0.89 V with body effect), i.e. $V_1$ above about $V_{GS}(I_{REF}) + V_{TH3} + R_1I_{REF}$.

**Common mistake.** Drawing $V_Y = V_1 - R_1I_{REF}$ from $V_1 = 0$, which is negative for small $V_1$. There $M_1$ is in triode and $V_Y$ rises with slope $1/(1 + \beta R_1a)$.

**Common mistake.** Reading $M_3$'s drain as connected to $V_{DD}$, or letting $V_X$ follow $V_1$. The drain is on the $V_1$ node, and $V_X$ moves only once $M_3$ adds current to $M_2$, and then only slowly.
