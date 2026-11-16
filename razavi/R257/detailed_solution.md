# Detailed solution - R257

**Approach.** The NMOS mirror ($M_2 \to M_1$) and the PMOS mirror ($M_3 \to M_4$) are connected in a ring, which forms a **positive-feedback loop with a current gain of exactly one** when all four transistors are saturated. KCL shows that no all-saturated solution exists once $I_{REF} > 0$; we then find which transistors must leave saturation and solve the remaining equations for $V_X$ and $V_Y$ in closed form.

### Step 1 — The loop, device equations and KCL

$M_1$ copies the current of the diode $M_2$ and pulls it out of the diode $M_3$; $M_4$ copies $M_3$'s current and pushes it back into X, into $M_2$. Each mirror has a ratio of one, so the loop current gain is $1\times1 = 1$, and the feedback is positive: more current in $M_2$ gives more current back into X.

Let $\beta_n = \mu_nC_{ox}(W/L)_n$, $\beta_p = \mu_pC_{ox}(W/L)_p$ and

$$d \equiv V_X - V_Y .$$

- **Diodes $M_2$, $M_3$** are always saturated:
$$I_{D2} = \frac{\beta_n}{2}(V_X - 0.7)^2, \qquad |I_{D3}| = \frac{\beta_p}{2}(V_{DD} - V_Y - 0.8)^2 = \frac{\beta_p}{2}(2.2 - V_Y)^2 .$$
- **$M_1$** ($V_{GS1} = V_X$, $V_{DS1} = V_Y$) is saturated if $V_Y \ge V_X - 0.7$, i.e. if $d \le 0.7$ V.
- **$M_4$** ($V_{SG4} = V_{DD} - V_Y$, $V_{SD4} = V_{DD} - V_X$) is saturated if $V_{DD} - V_X \ge V_{DD} - V_Y - 0.8$, i.e. if $d \le 0.8$ V.

KCL at X and at Y:

$$I_{D2} = I_{REF} + |I_{D4}|, \tag{1}$$

$$I_{D1} = |I_{D3}|. \tag{2}$$

### Step 2 — No all-saturated solution exists for $I_{REF} > 0$

If $M_1$ and $M_4$ were both saturated, the mirrors would copy exactly ($\lambda = 0$): $I_{D1} = I_{D2}$ and $|I_{D4}| = |I_{D3}|$. Then (1) and (2) give

$$I_{D2} = I_{REF} + |I_{D3}| = I_{REF} + I_{D1} = I_{REF} + I_{D2} \quad\Longrightarrow\quad I_{REF} = 0 .$$

So **for any $I_{REF} > 0$ the circuit cannot have all devices saturated.** The unity-gain loop returns every increase of $M_2$'s current to X, so the current runs away until a transistor leaves saturation and the loop gain drops below one: the circuit **latches into a high-current state.**

### Step 3 — Which transistor leaves saturation?

The diodes cannot leave saturation, so $M_1$ or $M_4$ (or both) must:

- **$M_1$ saturated, $M_4$ in triode:** needs $d \le 0.7$ V *and* $d > 0.8$ V at once. Impossible.
- **$M_1$ in triode, $M_4$ saturated:** needs $0.7 < d \le 0.8$ V. Possible.
- **Both in triode:** $d > 0.8$ V. Possible.

So **$M_1$ is always in triode** for $I_{REF} > 0$, and $M_4$ follows at slightly larger $I_{REF}$. In every case $V_X - V_Y > 0.7$ V.

### Step 4 — Region A: $M_1$ in triode, $M_4$ saturated

Now $|I_{D4}| = |I_{D3}| = I_{D1}$ (exact PMOS mirror, then (2)), so (1) becomes $I_{REF} = I_{D2} - I_{D1}$. With $M_1$ in triode ($V_{GS1} = V_X$, $V_{DS1} = V_Y$):

$$
\begin{aligned}
I_{REF} &= \frac{\beta_n}{2}(V_X - 0.7)^2 - \beta_n\left[(V_X - 0.7)V_Y - \frac{V_Y^2}{2}\right]\\
&= \frac{\beta_n}{2}\left[(V_X - 0.7)^2 - 2(V_X - 0.7)V_Y + V_Y^2\right]\\
&= \frac{\beta_n}{2}(V_X - 0.7 - V_Y)^2 = \frac{\beta_n}{2}(d - 0.7)^2 .
\end{aligned}
$$

So, exactly,

$$V_X - V_Y = 0.7\ \mathrm{V} + \sqrt{\frac{2I_{REF}}{\beta_n}} .$$

This region ends when $d = 0.8$ V, i.e. at

$$I_{REF} = \frac{\beta_n}{2}(0.1\ \mathrm{V})^2 .$$

For $W/L = 10/0.5$ and $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\beta_n = 2.68\ \mathrm{mA/V^2}$ and this is $\tfrac12(2.68\ \mathrm{mA/V^2})(0.01\ \mathrm{V^2}) = 13.4\ \mu\mathrm{A}$: very small, so for most of the range both $M_1$ and $M_4$ are in triode.

### Step 5 — Region B: both $M_1$ and $M_4$ in triode

$M_4$ is in triode with $V_{SG4} - 0.8 = 2.2 - V_Y$ and $V_{SD4} = 3 - V_X$. By the same algebra as in Step 4,

$$|I_{D3}| - |I_{D4}| = \frac{\beta_p}{2}\left[(2.2 - V_Y) - (3 - V_X)\right]^2 = \frac{\beta_p}{2}(d - 0.8)^2 .$$

Splitting $I_{REF}$ from (1) into three differences and using (2):

$$I_{REF} = I_{D2} - |I_{D4}| = (I_{D2} - I_{D1}) + (I_{D1} - |I_{D3}|) + (|I_{D3}| - |I_{D4}|) = \frac{\beta_n}{2}(d - 0.7)^2 + 0 + \frac{\beta_p}{2}(d - 0.8)^2 .$$

Both regions are covered by one formula:

$$I_{REF} = \frac{\beta_n}{2}(d - 0.7)^2 + \frac{\beta_p}{2}\left[\max(d - 0.8,\,0)\right]^2 . \tag{3}$$

The right side increases with $d$, so **$d = V_X - V_Y$ grows monotonically with $I_{REF}$**, with an infinite slope at $I_{REF} = 0^+$ (a square-root start).

### Step 6 — The second equation: where $V_Y$ sits

KCL at Y, (2), with $M_1$ in triode and $V_X = V_Y + d$:

$$\beta_n\left[(d - 0.7)V_Y + \frac{V_Y^2}{2}\right] = \frac{\beta_p}{2}(2.2 - V_Y)^2 . \tag{4}$$

The left side grows with $V_Y$ and the right side shrinks, so $V_Y$ is unique for each $d$.

**Limit $I_{REF} \to 0^+$** ($d \to 0.7$ V):

$$\frac{\beta_n}{2}V_Y^2 = \frac{\beta_p}{2}(2.2 - V_Y)^2 \ \Longrightarrow\ \sqrt{\beta_n}\,V_Y = \sqrt{\beta_p}\,(2.2 - V_Y) \ \Longrightarrow\ V_Y = \frac{2.2\ \mathrm{V}}{1 + r}, \quad V_X = 0.7\ \mathrm{V} + \frac{2.2\ \mathrm{V}}{1 + r},$$

with $r = \sqrt{\beta_n/\beta_p}$. For comparable NMOS and PMOS strengths ($r \approx 1$) this is near mid-supply; for a much stronger NMOS, $V_Y \to 0$ and $V_X \to 0.7$ V.

**Trends.** Differentiating (4) with respect to $d$:

$$\frac{dV_Y}{dd} = -\frac{\beta_nV_Y}{\beta_n(V_X - 0.7) + \beta_p(2.2 - V_Y)} .$$

This is negative, so **$V_Y$ falls** as $I_{REF}$ grows. Its magnitude is below one because $V_Y < V_X - 0.7$ in triode, so $dV_X/dd = 1 + dV_Y/dd > 0$: **$V_X$ rises**.

### Step 7 — The special case $I_{REF} = 0$

With $I_{REF} = 0$, the all-saturated equations hold for **any** loop current $I$ that keeps $M_1$ saturated: $V_X = 0.7 + \sqrt{2I/\beta_n}$ and $V_Y = 2.2 - \sqrt{2I/\beta_p}$. The solution is **not unique**: anything from zero current (all off, $V_X \le 0.7$ V) up to the current at which $M_1$ reaches the triode edge ($d = 0.7$ V). The state reached as $I_{REF} \to 0^+$ is exactly that edge state, the upper end of the range.

### Step 8 — Numerical example and table

Take all $W/L = 10/0.5$, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$:

$$\beta_n = 2.68\ \mathrm{mA/V^2}, \qquad \beta_p = 0.768\ \mathrm{mA/V^2}, \qquad r = \sqrt{2.68/0.768} = 1.868 .$$

Edge state ($I_{REF} \to 0^+$):

$$V_Y = \frac{2.2}{2.868} = 0.767\ \mathrm{V}, \quad V_X = 1.467\ \mathrm{V}, \quad I_{loop} = \frac{\beta_n}{2}V_Y^2 = (1.34\ \mathrm{mA/V^2})(0.588\ \mathrm{V^2}) = 0.79\ \mathrm{mA}.$$

Check at $I_{REF} = 1\ \mu\mathrm{A}$: from (3), $d = 0.7 + \sqrt{2(1\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.7 + 0.027 = 0.727$ V. Then (4) becomes the quadratic

$$\tfrac12(\beta_n - \beta_p)V_Y^2 + \left[\beta_n(d - 0.7) + 2.2\beta_p\right]V_Y - 2.42\beta_p = 0,$$

i.e. $0.956V_Y^2 + 1.763V_Y - 1.859 = 0$ (each term in mA, with $V_Y$ in volts). The positive root is $V_Y = (-1.763 + \sqrt{1.763^2 + 4(0.956)(1.859)})/(2\times0.956) = 0.750$ V, so $V_X = V_Y + d = 1.477$ V.

| $I_{REF}$ | $d = V_X - V_Y$ (V) | $V_X$ (V) | $V_Y$ (V) | State |
|---|---|---|---|---|
| $0^+$ | 0.700 | 1.467 | 0.767 | $M_1$ at the triode edge |
| 1 μA | 0.727 | 1.477 | 0.750 | $M_1$ triode, $M_4$ saturated |
| 13.4 μA | 0.800 | 1.506 | 0.706 | $M_4$ at the triode edge |
| 25 μA | 0.835 | 1.522 | 0.686 | both in triode |
| 100 μA | 0.960 | 1.583 | 0.624 | both in triode |
| 500 μA | 1.259 | 1.765 | 0.506 | both in triode |
| 1 mA | 1.483 | 1.924 | 0.442 | both in triode |

The loop's own current (about 0.8–1.2 mA here) is set by the transistors; $I_{REF}$ changes the operating point noticeably only once it becomes comparable to it.

### Result

- The two mirrors form a **unity-gain positive-feedback loop**. Any $I_{REF} > 0$ makes the all-saturated state impossible, so the circuit **latches** into a high-current state with **$M_1$ in triode** (and $M_4$ in triode as well once $I_{REF} > \beta_n(0.1\ \mathrm{V})^2/2$, about 13 μA for $W/L = 10/0.5$).
- Always $V_X - V_Y > 0.7$ V, with $I_{REF} = \tfrac{\beta_n}{2}(d - 0.7)^2 + \tfrac{\beta_p}{2}[\max(d - 0.8, 0)]^2$ and $\beta_n[(V_X - 0.7)V_Y - V_Y^2/2] = \tfrac{\beta_p}{2}(2.2 - V_Y)^2$.
- **$V_X$ rises and $V_Y$ falls monotonically** with $I_{REF}$: a square-root-like start just above zero, then a slow change.
- As $I_{REF} \to 0^+$: $V_Y \to 2.2\ \mathrm{V}/(1 + r)$ and $V_X \to 0.7\ \mathrm{V} + 2.2\ \mathrm{V}/(1 + r)$, with $r = \sqrt{\beta_n/\beta_p}$. At exactly $I_{REF} = 0$ the state is not unique (any loop current from zero up to that edge value).
- Example ($W/L = 10/0.5$ for all devices): $V_X \approx 1.48$, 1.52, 1.58, 1.92 V and $V_Y \approx 0.75$, 0.69, 0.62, 0.44 V at $I_{REF} = 1$ μA, 25 μA, 100 μA, 1 mA.

**Common mistake.** Treating the circuit as an ordinary mirror, with $V_X = V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta_n}$ and $M_4$ simply adding a copy of $I_{REF}$. KCL at X then gives $I_{D2} = I_{REF} + I_{D2}$, which has no solution.

**Common mistake.** Assuming $V_X = V_Y$ or keeping $M_1$ saturated. Step 3 shows that $M_1$ must be in triode, with $V_X - V_Y$ always larger than 0.7 V.

**Common mistake.** Expecting the transistor currents to be set by $I_{REF}$. The positive feedback sets a loop current of the order of a milliampere for these sizes, even for $I_{REF}$ of only a few microamperes.
