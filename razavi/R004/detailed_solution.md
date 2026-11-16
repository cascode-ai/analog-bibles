# Detailed solution - R004

**Approach.** Fix $V_{DS}$ and sweep $V_{GS}$. As $V_{GS}$ rises the transistor goes from off, to saturation, to triode, so each curve has two break points. Write the square-law current in each region, find where the regions meet, check that the pieces join smoothly, and then compare curves for several values of $V_{DS}$.

### Step 1 — Symbols and the three regions

The NMOS has its source and bulk grounded, so the source–bulk voltage is zero, there is no body effect, and the threshold voltage is constant: $V_{TH} = 0.7$ V.

Define:

- $V_{ov} = V_{GS} - V_{TH}$, the overdrive voltage;
- $\beta = \mu_nC_{ox}W/L$, the device gain factor ($\mu_nC_{ox}$ is the process transconductance parameter and $W/L$ the aspect ratio). It is not specified, so currents are given in units of $\beta$.

The square-law model has three regions:

| Region | Condition | Drain current |
|---|---|---|
| Cut-off | $V_{GS} < V_{TH}$ | $I_D = 0$ |
| Saturation | $V_{GS} > V_{TH}$ and $V_{DS} \ge V_{GS} - V_{TH}$ | $I_D = \tfrac12\beta(V_{GS} - V_{TH})^2$ |
| Triode | $V_{GS} > V_{TH}$ and $V_{DS} < V_{GS} - V_{TH}$ | $I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\right]$ |

The saturation condition says the channel is pinched off at the drain end: the gate–drain voltage $V_{GD} = V_{GS} - V_{DS}$ is below $V_{TH}$. In triode the channel reaches all the way to the drain.

### Step 2 — Order of the regions when $V_{GS}$ is swept at fixed $V_{DS}$

Rewrite the saturation condition with $V_{DS}$ fixed:

$$V_{DS} \ge V_{GS} - V_{TH} \quad\Longleftrightarrow\quad V_{GS} \le V_{TH} + V_{DS} .$$

So, as $V_{GS}$ increases from 0:

1. $V_{GS} < V_{TH}$: **off**.
2. $V_{TH} < V_{GS} < V_{TH} + V_{DS}$: **saturation** (a small overdrive cannot "reach" the fixed drain voltage).
3. $V_{GS} > V_{TH} + V_{DS}$: **triode** (the overdrive now exceeds $V_{DS}$, so the channel extends to the drain).

Note the order: for a sweep of $V_{GS}$ the device enters saturation *first* and triode *second*. This is the reverse of the familiar $I_D$–$V_{DS}$ sweep at fixed $V_{GS}$, where triode comes first.

**The two break points of each curve** are therefore

$$V_{GS,1} = V_{TH} = 0.7\ \mathrm{V} \quad (\text{turn-on}), \qquad V_{GS,2} = V_{TH} + V_{DS} \quad (\text{saturation} \to \text{triode}).$$

For example:

$$
\begin{aligned}
V_{DS} = 0.2\ \mathrm{V}:&\quad V_{GS,2} = 0.7 + 0.2 = 0.9\ \mathrm{V},\\
V_{DS} = 0.5\ \mathrm{V}:&\quad V_{GS,2} = 0.7 + 0.5 = 1.2\ \mathrm{V},\\
V_{DS} = 1.0\ \mathrm{V}:&\quad V_{GS,2} = 0.7 + 1.0 = 1.7\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Shape of each segment

**Saturation segment.** $I_D = \tfrac12\beta(V_{GS} - V_{TH})^2$ is a parabola starting from zero, with zero slope at $V_{GS} = V_{TH}$. It does **not depend on $V_{DS}$**, so in the square-law model (no channel-length modulation) every curve of the family follows the *same* parabola in this region.

**Triode segment.** Expand the triode formula:

$$I_D = \beta V_{DS}\,V_{GS} - \beta V_{DS}V_{TH} - \tfrac12\beta V_{DS}^2 .$$

With $V_{DS}$ fixed, this is **linear in $V_{GS}$**: a straight line with slope

$$\frac{\partial I_D}{\partial V_{GS}}\bigg|_{\text{triode}} = \beta V_{DS} .$$

A larger $V_{DS}$ gives a steeper line. Physically, in triode the device acts like a resistor whose conductance grows linearly with the overdrive, and a fixed $V_{DS}$ across it then gives a current linear in $V_{GS}$.

### Step 4 — The pieces join smoothly at the second break point

**Continuity of the current.** At $V_{GS} = V_{TH} + V_{DS}$ the overdrive is $V_{ov} = V_{DS}$. Evaluate both formulas there:

$$
\begin{aligned}
\text{saturation:}\quad I_D &= \tfrac12\beta V_{DS}^2,\\
\text{triode:}\quad I_D &= \beta\left[V_{DS}\cdot V_{DS} - \tfrac12V_{DS}^2\right] = \beta\left[V_{DS}^2 - \tfrac12V_{DS}^2\right] = \tfrac12\beta V_{DS}^2 .
\end{aligned}
$$

They agree, so the curve is continuous.

**Continuity of the slope.** The slope of the parabola is $\partial I_D/\partial V_{GS} = \beta(V_{GS} - V_{TH})$, which at $V_{GS} = V_{TH} + V_{DS}$ equals $\beta V_{DS}$: exactly the slope of the triode line. So **the triode line is tangent to the parabola** at the break point. The "break" is a change from curved to straight, not a kink.

**Locus of the break points.** The break point of each curve sits at current $\tfrac12\beta V_{DS}^2 = \tfrac12\beta(V_{GS} - V_{TH})^2$, i.e. *on the saturation parabola itself*. The parabola is the upper envelope of the whole family.

### Step 5 — Numerical family of curves

$I_D/\beta$ in V² (multiply by $\beta$ to get amperes):

| $V_{GS}$ (V) | $V_{DS} = 0.2$ V | $V_{DS} = 0.5$ V | $V_{DS} = 1.0$ V | $V_{DS} \ge 2.3$ V (always sat.) |
|---|---|---|---|---|
| ≤ 0.7 | 0 | 0 | 0 | 0 |
| 0.8 | 0.005 | 0.005 | 0.005 | 0.005 |
| 0.9 | **0.020** (break) | 0.020 | 0.020 | 0.020 |
| 1.0 | 0.040 | 0.045 | 0.045 | 0.045 |
| 1.2 | 0.080 | **0.125** (break) | 0.125 | 0.125 |
| 1.5 | 0.140 | 0.275 | 0.320 | 0.320 |
| 1.7 | 0.180 | 0.375 | **0.500** (break) | 0.500 |
| 2.0 | 0.240 | 0.525 | 0.800 | 0.845 |
| 2.5 | 0.340 | 0.775 | 1.300 | 1.620 |
| 3.0 | 0.440 | 1.025 | 1.800 | 2.645 |

Sample calculations:

- Saturation, $V_{GS} = 1.5$ V, $V_{DS} = 1$ V (since $1.5 < 1.7$): $I_D = \tfrac12\beta(0.8\ \mathrm{V})^2 = 0.32\beta\ \mathrm{V^2}$.
- Triode, $V_{GS} = 2.0$ V, $V_{DS} = 0.5$ V (since $2.0 > 1.2$): $I_D = \beta[(1.3\ \mathrm{V})(0.5\ \mathrm{V}) - \tfrac12(0.5\ \mathrm{V})^2] = \beta(0.65 - 0.125)\ \mathrm{V^2} = 0.525\beta\ \mathrm{V^2}$.
- Triode slopes: $\beta V_{DS} = (0.2\ \mathrm{V})\beta$, $(0.5\ \mathrm{V})\beta$ and $(1.0\ \mathrm{V})\beta$ for the three finite $V_{DS}$ values. For example, in the $V_{DS} = 0.2$ V column $I_D/\beta$ rises by $(0.2\ \mathrm{V})(0.5\ \mathrm{V}) = 0.1\ \mathrm{V^2}$ for every 0.5 V step of $V_{GS}$ (0.14 → 0.24 → 0.34 → 0.44).

**Sketch description.**

- All curves sit on the horizontal axis up to 0.7 V and then rise together along one parabola.
- Each curve leaves the parabola at its own $V_{GS} = 0.7\ \mathrm{V} + V_{DS}$ and continues as a straight tangent line of slope $\beta V_{DS}$.
- Small $V_{DS}$ peels off early and stays low; larger $V_{DS}$ follows the parabola longer and ends higher. The family is ordered: **at any $V_{GS}$, a larger $V_{DS}$ gives a current equal to or higher than a smaller $V_{DS}$**.
- If $V_{DS}$ exceeds the largest overdrive in the plot (here $V_{DS} \ge 2.3$ V for a sweep to 3 V), the curve is the full parabola with no second break point.

### Step 6 — Limiting cases and channel-length modulation

**Very small $V_{DS}$ (deep triode).** For $V_{DS} \ll V_{GS} - V_{TH}$, the $\tfrac12V_{DS}^2$ term is negligible and

$$I_D \approx \beta V_{DS}(V_{GS} - V_{TH}),$$

an almost straight line starting right at $V_{TH}$: the transistor behaves as a resistor $R_{on} = 1/[\beta(V_{GS} - V_{TH})]$ controlled by the gate. At $V_{DS} = 0$ the current is zero for every $V_{GS}$.

**Channel-length modulation.** If the factor $(1 + \lambda V_{DS})$ is included in saturation, the parabolic segments are no longer identical: each is scaled up by $(1 + \lambda V_{DS})$, so the curves fan out slightly even before the second break point, with larger $V_{DS}$ still on top. The break points do not move.

### Result

For each fixed $V_{DS}$, $I_D(V_{GS})$ has **two break points**:

- $V_{GS} = V_{TH} = 0.7$ V: turn-on. Below it $I_D \approx 0$.
- $V_{GS} = V_{TH} + V_{DS}$: saturation → triode.
  - Between the two: saturation, $I_D = \tfrac12\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})^2$, the same parabola for every $V_{DS}$ (raised slightly by $1 + \lambda V_{DS}$ if CLM is included).
  - Above: triode, $I_D = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS} - V_{TH})V_{DS} - V_{DS}^2/2\right]$, a straight line with slope $\mu_nC_{ox}(W/L)V_{DS}$, tangent to the parabola at the break point.

Larger $V_{DS}$ extends the parabolic part and gives a steeper, higher triode line; very small $V_{DS}$ gives a nearly straight line from $V_{TH}$. For $V_{DS} = 0.2$, 0.5, 1 V the second break point is at 0.9, 1.2 and 1.7 V.

**Common mistake.** Putting triode just above $V_{TH}$ and saturation at large $V_{GS}$, by copying the order from the $I_D$–$V_{DS}$ characteristic. At fixed $V_{DS}$ a small overdrive is *below* $V_{DS}$, which is the saturation condition; triode needs $V_{GS} - V_{TH} > V_{DS}$, which happens only at large $V_{GS}$.

**Common mistake.** Drawing the curve as linear first and quadratic afterwards, or placing the second break point at $V_{GS} = V_{DS}$ or $V_{GS} = V_{DS} - V_{TH}$. The saturation boundary is $V_{GS} - V_{TH} = V_{DS}$, so the break is at $V_{TH} + V_{DS}$, and the parabola comes *before* the line.

**Common mistake.** Ordering the family the wrong way round. In triode the current grows with $V_{DS}$ (slope $\beta V_{DS}$), and in saturation it is independent of $V_{DS}$ (or slightly increasing with CLM), so a larger $V_{DS}$ never gives a lower curve.
