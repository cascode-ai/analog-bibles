# Detailed solution - R005

**Approach.** The bulk–source voltage enters the square-law model only through the threshold voltage (body effect). So compute $V_{TH}$ for several values of $V_{BS}$, then draw the same square-law curve shifted horizontally to each threshold, and locate the break points (turn-on and, for a finite $V_{DS}$, the saturation-to-triode transition).

### Step 1 — The body-effect equation

With the bulk at a different potential from the source, the threshold voltage becomes

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right),$$

where:

- $V_{TH0} = 0.7$ V is the threshold with $V_{SB} = 0$;
- $\gamma = 0.45\ \mathrm{V^{1/2}}$ is the body-effect coefficient;
- $2|\phi_F| = 0.9$ V is twice the Fermi potential of the substrate (the surface potential at strong inversion);
- $V_{SB} = -V_{BS}$ is the source–bulk voltage.

In terms of the parameter of the problem, $V_{BS}$:

$$V_{TH}(V_{BS}) = 0.7\ \mathrm{V} + 0.45\ \mathrm{V^{1/2}}\left(\sqrt{0.9\ \mathrm{V} - V_{BS}} - \sqrt{0.9\ \mathrm{V}}\right).$$

**Why the threshold rises.** For an NMOS the p-type bulk normally sits at or below the source. Making $V_{BS}$ more negative (reverse body bias) widens the depletion region under the gate, so more fixed negative charge must be supported there. The gate needs a higher voltage before it can also attract the mobile electrons of the inversion layer, so $V_{TH}$ goes up.

The constant $\sqrt{0.9} = 0.9487\ \mathrm{V^{1/2}}$ appears in every evaluation below.

### Step 2 — Threshold for each value of $V_{BS}$

**$V_{BS} = 0$:**

$$V_{TH} = 0.7 + 0.45\,(0.9487 - 0.9487) = 0.700\ \mathrm{V}.$$

**$V_{BS} = -1$ V:**

$$V_{TH} = 0.7 + 0.45\left(\sqrt{1.9} - 0.9487\right) = 0.7 + 0.45\,(1.3784 - 0.9487) = 0.7 + 0.45\times0.4297 = 0.7 + 0.1934 = 0.893\ \mathrm{V}.$$

**$V_{BS} = -2$ V:**

$$V_{TH} = 0.7 + 0.45\left(\sqrt{2.9} - 0.9487\right) = 0.7 + 0.45\,(1.7029 - 0.9487) = 0.7 + 0.45\times0.7543 = 0.7 + 0.3394 = 1.039\ \mathrm{V}.$$

**$V_{BS} = -3$ V:**

$$V_{TH} = 0.7 + 0.45\left(\sqrt{3.9} - 0.9487\right) = 0.7 + 0.45\,(1.9748 - 0.9487) = 0.7 + 0.45\times1.0262 = 0.7 + 0.4618 = 1.162\ \mathrm{V}.$$

**Shrinking steps.** The successive shifts are

$$
\begin{aligned}
0 \to -1\ \mathrm{V}:&\quad 0.893 - 0.700 = 0.193\ \mathrm{V},\\
-1 \to -2\ \mathrm{V}:&\quad 1.039 - 0.893 = 0.146\ \mathrm{V},\\
-2 \to -3\ \mathrm{V}:&\quad 1.162 - 1.039 = 0.122\ \mathrm{V}.
\end{aligned}
$$

Equal steps of $V_{BS}$ give smaller and smaller shifts because $V_{TH}$ grows only as the **square root** of $0.9\ \mathrm{V} - V_{BS}$. The local sensitivity is $\partial V_{TH}/\partial V_{SB} = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$, which falls from $0.45/(2\times0.9487) = 0.237$ at $V_{SB} = 0$ to $0.45/(2\times1.9748) = 0.114$ at $V_{SB} = 3$ V.

### Step 3 — The current for each curve

Let $\beta = \mu_nC_{ox}W/L$ ($\mu_nC_{ox}$ the process transconductance parameter, $W/L$ the aspect ratio). With $V_{DS}$ fixed, each curve follows the square law with its own threshold:

- **Off**, $V_{GS} < V_{TH}(V_{BS})$: $I_D = 0$.
- **Saturation**, $V_{TH}(V_{BS}) < V_{GS} < V_{TH}(V_{BS}) + V_{DS}$: $I_D = \tfrac12\beta\,[V_{GS} - V_{TH}(V_{BS})]^2$.
- **Triode**, $V_{GS} > V_{TH}(V_{BS}) + V_{DS}$: $I_D = \beta\left\{[V_{GS} - V_{TH}(V_{BS})]V_{DS} - \tfrac12V_{DS}^2\right\}$.

The saturation boundary comes from $V_{DS} \ge V_{GS} - V_{TH}$, i.e. $V_{GS} \le V_{TH} + V_{DS}$.

$V_{BS}$ appears **only inside $V_{TH}$**. The factor $\beta$, the parabolic shape and the triode slope $\beta V_{DS}$ are the same for every curve. Each curve is therefore the $V_{BS} = 0$ curve **translated to the right** by $\Delta V_{TH} = V_{TH}(V_{BS}) - 0.7$ V.

### Step 4 — Break points

**First break point (turn-on):** $V_{GS} = V_{TH}(V_{BS})$, i.e. 0.70, 0.89, 1.04 and 1.16 V for $V_{BS} = 0$, $-1$, $-2$, $-3$ V.

**Second break point (saturation → triode):** $V_{GS} = V_{TH}(V_{BS}) + V_{DS}$. Its location depends on the chosen $V_{DS}$:

- For example, with $V_{DS} = 0.5$ V it falls at 1.20, 1.39, 1.54 and 1.66 V. Above it each curve becomes a straight line of slope $\beta V_{DS}$, tangent to its parabola.
- If $V_{DS}$ is large (say $V_{DS} = 3$ V with $V_{GS}$ swept to 3 V), then $V_{GS} - V_{TH} \le 2.3\ \mathrm{V} < V_{DS}$ for every curve, so the second break point lies off the plot and every curve is a pure parabola.

### Step 5 — Numerical family (large $V_{DS}$, all curves saturated)

$I_D/\beta$ in V², from $I_D/\beta = \tfrac12[V_{GS} - V_{TH}(V_{BS})]^2$:

| $V_{GS}$ (V) | $V_{BS} = 0$ ($V_{TH} = 0.70$) | $V_{BS} = -1$ V ($0.89$) | $V_{BS} = -2$ V ($1.04$) | $V_{BS} = -3$ V ($1.16$) |
|---|---|---|---|---|
| 1.0 | 0.045 | 0.006 | 0 | 0 |
| 1.5 | 0.320 | 0.184 | 0.106 | 0.057 |
| 2.0 | 0.845 | 0.612 | 0.461 | 0.351 |
| 2.5 | 1.620 | 1.291 | 1.067 | 0.895 |
| 3.0 | 2.645 | 2.219 | 1.922 | 1.690 |

Sample calculation for $V_{BS} = -2$ V at $V_{GS} = 2.0$ V:

$$\frac{I_D}{\beta} = \tfrac12\,(2.0 - 1.039)^2\ \mathrm{V^2} = \tfrac12\,(0.961)^2\ \mathrm{V^2} = \tfrac12\times0.923\ \mathrm{V^2} = 0.461\ \mathrm{V^2}.$$

**Sketch description.**

- Four parabolas of identical shape, starting from the axis at 0.70, 0.89, 1.04 and 1.16 V.
- More negative $V_{BS}$ → curve further to the **right** → less current at any given $V_{GS}$.
- The gaps between neighbouring curves shrink (0.19, 0.15, 0.12 V) as the reverse bias grows.
- At equal current the curves have equal slope, because they are translated copies; at equal $V_{GS}$ the reverse-biased curves are flatter, since their overdrive is smaller.

### Step 6 — Positive $V_{BS}$

A positive $V_{BS}$ (bulk above source) *lowers* the threshold, shifting the curve slightly to the left. For example, at $V_{BS} = +0.3$ V:

$$V_{TH} = 0.7 + 0.45\left(\sqrt{0.6} - 0.9487\right) = 0.7 + 0.45\,(0.7746 - 0.9487) = 0.7 - 0.0783 = 0.622\ \mathrm{V}.$$

This only works for a few hundred millivolts. $V_{BS} > 0$ forward-biases the p-bulk to n+-source junction, and beyond about 0.4–0.6 V that junction conducts substantial current, which the MOS model does not describe.

### Result

$V_{BS}$ shifts the curves **horizontally** through the body effect:

$$V_{TH}(V_{BS}) = 0.7 + 0.45\left(\sqrt{0.9 - V_{BS}} - \sqrt{0.9}\right)\ \mathrm{V},$$

giving $V_{TH} \approx 0.70$, 0.89, 1.04 and 1.16 V for $V_{BS} = 0$, $-1$, $-2$, $-3$ V.

- **First break point** at $V_{GS} = V_{TH}(V_{BS})$: each curve is zero up to its own threshold and then follows the *same* square-law parabola $\tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$, shifted right by $\Delta V_{TH}$. The factor $\mu_nC_{ox}W/L$ and the shape are unchanged.
- **Second break point** at $V_{GS} = V_{TH}(V_{BS}) + V_{DS}$ for the fixed $V_{DS}$, above which the curve is a straight triode line. With a large $V_{DS}$ it lies off the plot and all curves stay saturated.
- Equal steps of $V_{BS}$ give **shrinking** shifts (0.19, 0.15, 0.12 V), a consequence of the square-root dependence. A positive $V_{BS}$ lowers $V_{TH}$ slightly, but only by a few hundred millivolts at most, before the source–bulk junction conducts.

**Common mistake.** Shifting the curves to the *left* for negative $V_{BS}$. Reverse body bias widens the depletion region and adds bulk charge that the gate must overcome, so the threshold *increases* and the curve moves right.

**Common mistake.** Changing the slope or the factor $\mu_nC_{ox}W/L$ with $V_{BS}$, as if the body effect made the device "weaker". In the square-law model $V_{BS}$ enters only through $V_{TH}$; the curves are rigid translations of one another.

**Common mistake.** Spacing the curves equally, as if $V_{TH}$ were linear in $V_{BS}$, or dropping the $\sqrt{2|\phi_F|}$ reference term (which would give $V_{TH} = 0.7 + 0.45\sqrt{1.9} = 1.32$ V at $V_{BS} = -1$ V instead of 0.89 V).
