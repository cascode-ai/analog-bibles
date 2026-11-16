# Detailed solution - R259

**Approach.** With $I_{REF}$ fixed, the overdrive voltages are fixed too, so sweeping the cascode gate voltage $V_b$ reduces to finding which transistor leaves saturation at each end of the sweep. Using the square law with body effect for $M_3$ and $M_4$, find the "normal" window where all devices are saturated, then follow the circuit below and above it.

### Step 1 — Notation and saturation conditions

Define the saturation overdrives at the fixed current $I_{REF}$:

$$v_L = \sqrt{\frac{2I_{REF}}{\beta_{12}}} \ \ (M_1, M_2), \qquad v_U = \sqrt{\frac{2I_{REF}}{\beta_{34}}} \ \ (M_3, M_4),$$

where $\beta_{12} = \mu_nC_{ox}(W/L)_{1,2}$ and $\beta_{34} = \mu_nC_{ox}(W/L)_{3,4}$. The cascode devices have grounded bulks, so with source voltage $s$

$$V_{TH}(s) = 0.7 + 0.45\left(\sqrt{0.9 + s} - \sqrt{0.9}\right)\ \mathrm{V}.$$

Saturation conditions:

- $M_2$: $V_A \ge V_X - 0.7$.
- $M_4$: $V_X - V_A \ge V_b - V_A - V_{TH}(V_A)$, i.e. $V_X \ge V_b - V_{TH}(V_A)$.
- $M_3$: $V_{DD} - V_B \ge V_b - V_B - V_{TH}(V_B)$, i.e. $V_b \le V_{DD} + V_{TH}$, which holds over the whole sweep up to $V_{DD}$, so **$M_3$ is always saturated**.

Whenever $M_3$ and $M_4$ are both saturated ($\lambda = 0$), the two stacks are identical circuits with the same gate voltages, so $V_A = V_B$ and $I_{out} = I_{REF}$ exactly, whatever region $M_1$ and $M_2$ are in: in each stack the upper device's current falls as the middle node rises while the lower device's current rises or stays constant, so the middle-node voltage is unique.

### Step 2 — The normal region: all transistors saturated

**$V_X$.** $M_2$ carries $I_{REF}$ in saturation:

$$V_X = V_{GS2} = 0.7 + v_L = \text{constant},$$

independent of $V_b$.

**$V_A = V_B$.** $M_4$ carries $I_{REF}$ in saturation, so $V_{GS4} = V_{TH}(V_A) + v_U$ is fixed:

$$V_A = V_b - V_{GS4} \quad\Longleftrightarrow\quad V_A + V_{TH}(V_A) = V_b - v_U .$$

$M_4$ acts as a source follower, so $V_A$ tracks $V_b$. With $\eta = dV_{TH}/dV_A = \gamma/(2\sqrt{0.9 + V_A})$:

$$(1 + \eta)\,dV_A = dV_b \quad\Longrightarrow\quad \frac{dV_A}{dV_b} = \frac{1}{1 + \eta} \approx \frac{1}{1 + 0.19} \approx 0.84 .$$

The slope is a little below 1 because the body effect raises $V_{TH4}$ as $V_A$ rises.

**$I_{out}$.** $M_1$ has the same $V_{GS}$ as $M_2$ and is saturated, so $I_{out} = I_{REF}$.

### Step 3 — Lower edge: $M_2$ enters triode

$M_2$ stays saturated while $V_A \ge V_X - 0.7 = v_L$. Setting $V_A = v_L$ in $V_A + V_{TH}(V_A) = V_b - v_U$ gives the lower edge of the normal region:

$$V_{b,low} = v_L + V_{TH}(v_L) + v_U ,$$

one threshold plus two overdrives, the familiar minimum bias of a low-voltage cascode.

### Step 4 — Low $V_b$: $M_2$ (and $M_1$) in triode, $V_X$ shoots up

For $V_b < V_{b,low}$, $V_A < v_L$ and $M_2$ is in triode. $M_4$ is still saturated, so $V_A$ still obeys $V_A + V_{TH}(V_A) = V_b - v_U$ and keeps falling with $V_b$. $M_2$ must still carry $I_{REF}$ with a smaller $V_{DS}$, so its gate voltage must rise:

$$
\begin{aligned}
I_{REF} &= \beta_{12}\left[(V_X - 0.7)V_A - \tfrac12V_A^2\right]\\
V_X - 0.7 &= \frac{I_{REF}}{\beta_{12}V_A} + \frac{V_A}{2} = \frac{v_L^2}{2V_A} + \frac{V_A}{2}\\
V_X &= 0.7 + \frac{v_L^2 + V_A^2}{2V_A}, \qquad \text{using } I_{REF}/\beta_{12} = v_L^2/2 .
\end{aligned}
$$

At $V_A = v_L$ this gives $0.7 + v_L$, joining the flat region continuously. As $V_A \to 0$, $V_X \to \infty$; $V_A$ reaches 0 when $V_b - v_U = V_{TH}(0) = 0.7$ V, i.e. at

$$V_b \to 0.7 + v_U .$$

- **Ideal current source:** $V_X$ diverges as $V_b \to 0.7 + v_U$, and below that there is no dc solution.
- **Real current source:** node X runs out of headroom near $V_{DD}$, the reference current itself falls, and $I_{out}$ falls with it, reaching zero as $V_b$ drops toward $V_{TH}$.

Throughout this region $M_3$ and $M_4$ are saturated, so still $V_A = V_B$ and $I_{out} = I_{REF}$ (as long as the source can deliver $I_{REF}$).

### Step 5 — Upper edge: $M_4$ enters triode

$M_4$ stays saturated while $V_X \ge V_b - V_{TH}(V_A)$. In the normal region $V_X = 0.7 + v_L$ and $V_A = V_b - V_{TH}(V_A) - v_U$. At the edge, $V_b - V_{TH}(V_A) = V_X$, so $V_A = V_X - v_U$ and

$$V_{b,high} = V_{GS2} + V_{TH}\!\left(V_{GS2} - v_U\right).$$

There $M_4$'s drain–source voltage $V_X - V_A$ equals exactly its overdrive $v_U$.

The normal window exists only if $V_{b,high} > V_{b,low}$. For equal sizes ($v_L = v_U = v$) the difference is $0.7 - v + V_{TH}(0.7) - V_{TH}(v)$, which is positive for $v$ below roughly 0.7 V, the usual case.

### Step 6 — High $V_b$: $V_A$ flattens, $V_B$ keeps rising

For $V_b > V_{b,high}$, $M_4$ is in triode. $M_2$ is now comfortably saturated (its drain $V_A$ is high), so $V_X = 0.7 + v_L$ stays flat. $M_4$ passes $I_{REF}$ with a small drain–source voltage:

$$I_{REF} = \beta_{34}\left[(V_b - V_A - V_{TH}(V_A))(V_X - V_A) - \tfrac12(V_X - V_A)^2\right] \ \Longrightarrow\ V_X - V_A \approx \frac{I_{REF}}{\beta_{34}\,(V_b - V_A - V_{TH})} .$$

As $V_b$ grows, $M_4$'s overdrive grows and $V_X - V_A$ shrinks, so **$V_A$ flattens just below $V_X = V_{GS2}$**: $M_4$ behaves like a closed switch from A to X.

$M_3$, however, is still saturated (its drain is at $V_{DD}$), so

$$V_B + V_{TH}(V_B) = V_b - v_U :$$

**$V_B$ keeps rising** with slope $1/(1 + \eta)$, and now $V_B > V_A$. $M_1$ has $V_{DS1} = V_B > V_A > v_L$, so it is saturated with $V_{GS1} = V_X$, hence $I_{out} = I_{REF}$ still (with $\lambda = 0$; with $\lambda > 0$, $V_{DS1} > V_{DS2}$ would make $I_{out}$ slightly larger).

### Step 7 — Numerical example

Take all $W/L = 20/0.5$, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, so $\beta_{12} = \beta_{34} = 5.36\ \mathrm{mA/V^2}$, and $I_{REF} = 100\ \mu\mathrm{A}$:

$$
\begin{aligned}
v_L = v_U &= \sqrt{2(100\ \mu\mathrm{A})/(5.36\ \mathrm{mA/V^2})} = \sqrt{0.0373}\ \mathrm{V} = 0.193\ \mathrm{V},\\
V_{GS2} &= 0.7 + 0.193 = 0.893\ \mathrm{V},\\
V_{TH}(v_L) &= 0.7 + 0.45\left(\sqrt{1.093} - 0.949\right) = 0.744\ \mathrm{V},\\
V_{b,low} &= 0.193 + 0.744 + 0.193 = 1.13\ \mathrm{V},\\
V_{TH}(V_{GS2} - v_U) &= V_{TH}(0.700) = 0.7 + 0.45\left(\sqrt{1.6} - 0.949\right) = 0.842\ \mathrm{V},\\
V_{b,high} &= 0.893 + 0.842 = 1.74\ \mathrm{V},\\
\text{divergence of } V_X: \ V_b &\to 0.7 + v_U = 0.89\ \mathrm{V}.
\end{aligned}
$$

Solving the full square-law equations:

| $V_b$ (V) | $V_X$ (V) | $V_A$ (V) | $V_B$ (V) | $I_{out}$ | Region |
|---|---|---|---|---|---|
| 0.92 | 1.57 | 0.022 | 0.022 | 100 μA | $M_2$ triode |
| 0.95 | 1.13 | 0.046 | 0.046 | 100 μA | $M_2$ triode |
| 1.00 | 0.96 | 0.087 | 0.087 | 100 μA | $M_2$ triode |
| 1.13 | 0.893 | 0.193 | 0.193 | 100 μA | lower edge |
| 1.40 | 0.893 | 0.417 | 0.417 | 100 μA | all saturated |
| 1.60 | 0.893 | 0.585 | 0.585 | 100 μA | all saturated |
| 1.74 | 0.893 | 0.700 | 0.700 | 100 μA | upper edge |
| 2.00 | 0.893 | 0.826 | 0.926 | 100 μA | $M_4$ triode |
| 2.50 | 0.893 | 0.868 | 1.358 | 100 μA | $M_4$ triode |
| 3.00 | 0.893 | 0.878 | 1.795 | 100 μA | $M_4$ triode |

In the normal window the slope of $V_A$ is $(0.585 - 0.417)/0.2 = 0.84$, matching $1/(1 + \eta)$.

### Result

Three regions (usual sizing, $v_U = \sqrt{2I_{REF}/\beta_{34}} < 0.7$ V, sweep up to $V_b \approx V_{DD}$):

- **Normal region**, $v_L + V_{TH}(v_L) + v_U \lesssim V_b \lesssim V_{GS2} + V_{TH}(V_{GS2} - v_U)$, all devices saturated: $V_X = V_{GS2} = 0.7 + \sqrt{2I_{REF}/\beta_{12}}$ (flat); $V_A = V_B = V_b - V_{GS4}$, rising with slope $1/(1 + \eta) \approx 0.8$; $I_{out} = I_{REF}$.
- **Low $V_b$:** $M_2$ and $M_1$ in triode, $V_A = V_B$ still falling with $V_b$, and $V_X = 0.7 + (v_L^2 + V_A^2)/(2V_A)$ rising steeply. With an ideal source it diverges as $V_b \to 0.7 + v_U$. With a real source the X node runs out of headroom near $V_{DD}$, and the reference current and $I_{out}$ then collapse toward zero as $V_b \to V_{TH}$.
- **High $V_b$:** $M_4$ in triode, so $V_A$ flattens just below $V_{GS2}$, while $V_B = V_b - V_{GS3}$ keeps rising ($M_3$ saturated because its drain is at $V_{DD}$). $M_1$ remains saturated, so $I_{out} = I_{REF}$ (with $\lambda = 0$).
- **$I_{out} = I_{REF}$ wherever a solution exists.**
- **Example** ($\beta = 5.36\ \mathrm{mA/V^2}$ for all, $I_{REF} = 100\ \mu\mathrm{A}$): $V_X = 0.89$ V for $V_b \gtrsim 1.13$ V; $V_A = V_B \approx 0.25$, 0.42, 0.59 V at $V_b = 1.2$, 1.4, 1.6 V; above about 1.74 V, $V_A \approx 0.83$–0.88 V while $V_B \approx 0.93$, 1.36, 1.80 V at $V_b = 2$, 2.5, 3 V.

**Common mistake.** Letting $V_X$ follow $V_b$. In the normal and high regions $V_X$ is $M_2$'s gate–source voltage at the fixed current $I_{REF}$, independent of $V_b$; only at the low end does $V_X$ move, and then it goes *up* as $V_b$ goes *down*, because $M_2$ is squeezed into triode.

**Common mistake.** Clamping $V_B$ together with $V_A$ at high $V_b$. Only $M_4$ enters triode, because its drain is X, at the low $V_{GS2}$; $M_3$'s drain is at $V_{DD}$, so $V_B$ keeps tracking $V_b$.

**Common mistake.** Making $I_{out}$ proportional to $V_b$. $I_{out}$ is set by $M_1$'s gate voltage $V_X$; $V_b$ only sets the drain voltages of $M_1$ and $M_2$, which do not matter with $\lambda = 0$ as long as $M_1$ is saturated or matched to $M_2$.
