# Detailed solution - R258

**Approach.** This is a low-voltage cascode current mirror. We use the square-law model with body effect for the cascode devices $M_3$ and $M_4$. The key observation is that, as long as $M_4$ is saturated, the two branches are identical circuits driven by the same gate voltages, so they must carry the same current and have the same middle-node voltage. We then follow each voltage as $I_{REF}$ grows and locate the point where $M_2$ (and $M_1$) leave saturation.

### Step 1 — Reading the circuit

From the figure:

- $I_{REF}$ flows from $V_{DD}$ into node X.
- **Reference branch:** $M_4$ (drain at X, gate at $V_b$, source at A) is stacked on $M_2$ (drain at A, gate at X, source grounded).
- **Output branch:** $M_3$ (drain at $V_{DD}$, where $I_{out}$ enters, gate at $V_b$, source at B) is stacked on $M_1$ (drain at B, gate at X, source grounded).
- $M_1$ and $M_2$ share the gate voltage $V_X$; $M_3$ and $M_4$ share the gate voltage $V_b$.

Notation: $\beta_{12} = \mu_nC_{ox}(W/L)_{1,2}$ and $\beta_{34} = \mu_nC_{ox}(W/L)_{3,4}$. The bulks are grounded, so the cascode devices have a source–bulk voltage equal to their source voltage, and their threshold is

$$V_{TH}(s) = 0.7 + 0.45\left(\sqrt{0.9 + s} - \sqrt{0.9}\right)\ \mathrm{V}, \qquad s = V_A \text{ or } V_B .$$

### Step 2 — Device equations

Square law with $\lambda = 0$:

$$
\begin{aligned}
M_4:&\quad I_{REF} = \frac{\beta_{34}}{2}\left[V_b - V_A - V_{TH}(V_A)\right]^2 \quad \text{if saturated, i.e. } V_X - V_A \ge V_b - V_A - V_{TH}(V_A),\\
M_2:&\quad I_{REF} = \frac{\beta_{12}}{2}(V_X - 0.7)^2 \quad \text{if saturated, i.e. } V_A \ge V_X - 0.7,\\
& \quad I_{REF} = \beta_{12}\left[(V_X - 0.7)V_A - \tfrac12V_A^2\right] \quad \text{if in triode.}
\end{aligned}
$$

The output branch obeys the same equations with A replaced by B, $I_{REF}$ by $I_{out}$, and $M_3$'s drain at $V_{DD}$ instead of X.

**$M_3$ is always saturated.** Its condition is $V_{DD} - V_B \ge V_b - V_B - V_{TH}(V_B)$, i.e. $V_b \le V_{DD} + V_{TH}$, which holds for any reasonable $V_b$.

### Step 3 — Why $V_A = V_B$ and $I_{out} = I_{REF}$ while $M_4$ is saturated

With $M_3$ and $M_4$ both saturated and $\lambda = 0$, neither cascode current depends on its drain voltage. The two branches are then **the same circuit**: the same gate voltages ($V_X$ below, $V_b$ above) and the same device equations.

In either branch, call the middle-node voltage $V$ and the branch current $I$:

- the upper device gives $I = \tfrac{\beta_{34}}{2}[V_b - V - V_{TH}(V)]^2$, which **decreases** as $V$ rises;
- the lower device's current **increases** with its drain voltage $V$ (in triode) or stays constant (in saturation).

A decreasing curve and a non-decreasing curve cross only once, so each branch has a single solution, and the two branches have the same one:

$$V_A = V_B, \qquad I_{out} = I_{REF} \quad \text{(exactly, whatever region } M_1, M_2 \text{ are in).}$$

This is the purpose of the cascode: it forces $V_{DS1} = V_{DS2}$, so the copy is exact even though $M_1$'s drain is not tied to its gate.

### Step 4 — $V_A$ and $V_B$ as functions of $I_{REF}$

From $M_4$'s saturation equation, define the overdrive $V_{ov4} = \sqrt{2I_{REF}/\beta_{34}}$. Then

$$V_b - V_A - V_{TH}(V_A) = V_{ov4} \quad\Longrightarrow\quad V_A + V_{TH}(V_A) = V_b - \sqrt{\frac{2I_{REF}}{\beta_{34}}} .$$

- At $I_{REF} \to 0$: $V_A + V_{TH}(V_A) = V_b$, so $V_A$ starts at about $V_b - V_{TH}$.
- As $I_{REF}$ grows the right-hand side falls as $\sqrt{I_{REF}}$, so **$V_A = V_B$ fall**, like a mirror image of a diode curve.

**Effect of the body effect.** Differentiate, writing $\eta = dV_{TH}/dV_A = \gamma/(2\sqrt{0.9 + V_A}) \approx 0.18$–0.23:

$$(1 + \eta)\,dV_A = -\,dV_{ov4} \quad\Longrightarrow\quad \frac{dV_A}{dI_{REF}} = -\frac{1}{(1 + \eta)\,g_{m4}}, \qquad g_{m4} = \sqrt{2\beta_{34}I_{REF}} .$$

As $V_A$ falls, $V_{TH4}$ falls too, which partly compensates. So $V_A$ falls slightly less than $\sqrt{I_{REF}}$ would suggest.

### Step 5 — $V_X$, and the point where $M_2$ leaves saturation

**While $M_2$ is saturated:**

$$V_X = 0.7\ \mathrm{V} + \sqrt{\frac{2I_{REF}}{\beta_{12}}} \qquad \text{(slow, square-root rise)}.$$

**Edge of saturation.** $M_2$ saturates only while $V_A \ge V_X - 0.7 = \sqrt{2I_{REF}/\beta_{12}}$. $V_A$ falls and $V_X - 0.7$ rises, so they meet at some current. For equal $\beta$ and no body effect, $V_A = V_b - 0.7 - V_{ov}$ and the edge $V_A = V_{ov}$ gives $V_{ov} = (V_b - 0.7)/2$, i.e.

$$I_{REF,edge} \approx \frac{\beta}{2}\left(\frac{V_b - 0.7}{2}\right)^2 = \frac{\beta}{8}(V_b - V_{TH})^2 .$$

The body effect raises $V_{TH4}$ above 0.7 V, lowers $V_A$, and so moves the edge to a somewhat **smaller** current.

$M_1$ has the same $V_{GS}$ and, by Step 3, the same $V_{DS}$ ($V_B = V_A$), so it leaves saturation at the same moment. That does **not** disturb $I_{out} = I_{REF}$.

**Beyond the edge** ($M_2$ in triode), solve the triode equation for $V_X$:

$$
\begin{aligned}
I_{REF} &= \beta_{12}\left[(V_X - 0.7)V_A - \tfrac12V_A^2\right]\\
(V_X - 0.7)V_A &= \frac{I_{REF}}{\beta_{12}} + \frac{V_A^2}{2}\\
V_X &= 0.7 + \frac{I_{REF}}{\beta_{12}V_A} + \frac{V_A}{2} .
\end{aligned}
$$

Because $V_A$ keeps falling, the term $I_{REF}/(\beta_{12}V_A)$ grows much faster than $\sqrt{I_{REF}}$: **$V_X$ bends sharply upward**. It would diverge as $V_A \to 0$, i.e. as $I_{REF} \to \tfrac{\beta_{34}}{2}(V_b - 0.7)^2$, the largest current $M_4$ can carry with its source grounded. In practice the $I_{REF}$ source runs out of headroom when $V_X$ approaches $V_{DD}$, so the curve stops there.

### Step 6 — Is $M_4$ saturated? (the range of $V_b$)

$M_4$ is saturated if $V_X \ge V_b - V_{TH}(V_A)$. The hardest point is $I_{REF} \to 0$, where $V_X \to 0.7$ V and $V_A \to V_b - V_{TH}(V_A)$. The condition becomes $V_A \le 0.7$ V, i.e.

$$V_b \le 0.7 + V_{TH}(0.7) = 0.7 + 0.7 + 0.45\left(\sqrt{1.6} - \sqrt{0.9}\right) = 0.7 + 0.842 = 1.54\ \mathrm{V}.$$

For equal $\beta$, $M_4$ then stays saturated for all larger $I_{REF}$. The condition reads $V_X - V_A \ge V_{ov4}$, i.e. $0.7 + V_{ov2} - V_A \ge V_{ov4}$, and with $V_{ov2} = V_{ov4}$ it reduces to $V_A \le 0.7$ V, which only gets easier as $V_A$ falls. Also $V_b$ must exceed 0.7 V, otherwise no current can flow at all.

So the intended low-voltage bias is $0.7\ \mathrm{V} < V_b \lesssim 1.54$ V, and in that range Steps 3–5 hold for every $I_{REF}$.

### Step 7 — Numerical example

Take all $W/L = 20/0.5$, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, so $\beta = 134\ \mu\mathrm{A/V^2}\times40 = 5.36\ \mathrm{mA/V^2}$, and $V_b = 1.5$ V.

**At $I_{REF} = 100\ \mu\mathrm{A}$:**

$$
\begin{aligned}
V_{ov} &= \sqrt{2(100\ \mu\mathrm{A})/(5.36\ \mathrm{mA/V^2})} = \sqrt{0.0373}\ \mathrm{V} = 0.193\ \mathrm{V},\\
V_X &= 0.7 + 0.193 = 0.893\ \mathrm{V},\\
V_A + V_{TH}(V_A) &= 1.5 - 0.193 = 1.307\ \mathrm{V}.
\end{aligned}
$$

Try $V_A = 0.501$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.401} - 0.949) = 0.7 + 0.45(1.184 - 0.949) = 0.806$ V, and $0.501 + 0.806 = 1.307$ V ✓. So $V_A = V_B = 0.501$ V. $M_2$ is saturated because $V_A = 0.501 > V_X - 0.7 = 0.193$ V.

**Edge of saturation:** with equal $\beta$ the edge is $V_A = V_{ov}$, so $2V_{ov} + V_{TH}(V_{ov}) = 1.5$ V. This gives $V_{ov} = 0.361$ V and

$$I_{REF,edge} = \tfrac12(5.36\ \mathrm{mA/V^2})(0.361\ \mathrm{V})^2 = 349\ \mu\mathrm{A}$$

(without body effect it would be $\tfrac{\beta}{8}(0.8\ \mathrm{V})^2 = 429\ \mu\mathrm{A}$).

**Above the edge, $I_{REF} = 600\ \mu\mathrm{A}$:** $V_{ov4} = 0.473$ V and $V_A = 0.268$ V. Then

$$V_X = 0.7 + \frac{600\ \mu\mathrm{A}}{(5.36\ \mathrm{mA/V^2})(0.268\ \mathrm{V})} + \frac{0.268}{2} = 0.7 + 0.418 + 0.134 = 1.25\ \mathrm{V}.$$

| $I_{REF}$ | $V_X$ (V) | $V_A = V_B$ (V) | $I_{out}$ | $M_1$, $M_2$ |
|---|---|---|---|---|
| $\to 0$ | 0.700 | 0.664 | 0 | saturation |
| 25 μA | 0.797 | 0.582 | 25 μA | saturation |
| 100 μA | 0.893 | 0.501 | 100 μA | saturation |
| 300 μA | 1.035 | 0.383 | 300 μA | saturation |
| 349 μA | 1.061 | 0.361 | 349 μA | edge |
| 600 μA | 1.252 | 0.268 | 600 μA | triode |
| 800 μA | 1.524 | 0.207 | 800 μA | triode |
| 1 mA | 1.99 | 0.154 | 1 mA | triode |

$V_X$ reaches $V_{DD} = 3$ V at about 1.2 mA, where a real reference source would stop working.

### Step 8 — Remark: a larger $V_b$

If $V_b > 1.54$ V, $M_4$ is in triode at small $I_{REF}$ ($V_X$ is too low to saturate it). Then $V_A$ starts near $V_X \approx 0.7$ V, while $V_B = V_b - V_{GS3}$ is higher, so $V_A < V_B$. While $M_2$ is saturated, $M_1$ (with an even larger $V_{DS}$) is saturated too, so still $I_{out} = I_{REF}$. Once $V_X$ has risen enough to saturate $M_4$, $V_A$ merges into $V_B$. Only for a very high $V_b$, where $M_2$ enters triode while $M_4$ is still in triode, does $I_{out}$ exceed $I_{REF}$, and then by a small amount (well under 1 % for equal sizes at $V_b = 3$ V). This is not the intended bias.

### Result

For the intended bias ($0.7\ \mathrm{V} < V_b \lesssim 1.54$ V, $M_4$ saturated):

- **$I_{out} = I_{REF}$**: a straight line of slope 1 through the origin, exact even after $M_1$/$M_2$ enter triode, because the cascodes force $V_B = V_A$.
- **$V_X = 0.7 + \sqrt{2I_{REF}/\beta_{12}}$**: a slow square-root rise. Once $M_2$ enters triode (where $V_A = \sqrt{2I_{REF}/\beta_{12}}$, at about $\tfrac{\beta}{8}(V_b - V_{TH})^2$ for equal sizes, a bit lower with body effect), it becomes $V_X = 0.7 + I_{REF}/(\beta_{12}V_A) + V_A/2$ and bends sharply upward, until the reference source runs out of headroom near $V_{DD}$.
- **$V_A = V_B$**: from $V_A + V_{TH}(V_A) = V_b - \sqrt{2I_{REF}/\beta_{34}}$, they start near $V_b - V_{TH}$ and fall roughly as $\sqrt{I_{REF}}$ (a little less, because of body effect), smoothly, with no kink at the triode edge, toward 0 as $I_{REF} \to \tfrac{\beta_{34}}{2}(V_b - 0.7)^2$.
- Example ($\beta = 5.36\ \mathrm{mA/V^2}$, $V_b = 1.5$ V): $I_{REF} = 25$, 100, 300, 600 μA give $V_X \approx 0.80$, 0.89, 1.03, 1.25 V and $V_A = V_B \approx 0.58$, 0.50, 0.38, 0.27 V. $M_2$ is in triode above about 350 μA, and $I_{out} = I_{REF}$ throughout.

**Common mistake.** Drawing $V_A$ and $V_B$ *rising* with $I_{REF}$ (as if they were diode voltages). They are the sources of followers whose gates are fixed at $V_b$. More current needs more overdrive, so the source must go *down*.

**Common mistake.** Concluding that $I_{out} \ne I_{REF}$ once $M_1$ and $M_2$ enter triode. Both are in triode with the same $V_{GS}$ and the same $V_{DS}$ (because $V_A = V_B$), so their currents are still equal. Only $V_X$ shows the transition, as a sharp upward bend.

**Common mistake.** Ignoring the body effect of $M_3$/$M_4$. With their sources about 0.3–0.6 V above ground, $V_{TH}$ is about 0.1 V higher than 0.7 V. That lowers $V_A$ and moves $M_2$'s triode edge from 429 μA to 349 μA in the example.
