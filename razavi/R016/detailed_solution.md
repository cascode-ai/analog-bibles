# Detailed solution - R016

**Approach.** $V_{out}$ is the source of $M_1$, which is then a source follower (with body effect) whose drain sits at only 1 V. Find the turn-on point, solve the follower equation in saturation, and find where the device enters triode, after which $V_{out}$ flattens just below 1 V.

### Step 1 — Terminal voltages and the off region

The current in $R_1$ can only come from the 1-V battery through $M_1$, so $0 \le V_{out} < 1$ V: the lower-potential terminal, $V_{out}$, is the source, and the 1-V terminal (drawn with the arrow) is the drain. Hence

$$
\begin{aligned}
V_{GS} &= V_{in} - V_{out},\\
V_{DS} &= 1 - V_{out},\\
V_{SB} &= V_{out} - 0 = V_{out},
\end{aligned}
$$

and with the body effect

$$V_{TH}(V_{out}) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - 0.9487\right)\ \mathrm{V},$$

which rises from 0.70 V at $V_{out} = 0$ to $0.7 + 0.45(\sqrt{1.9} - 0.9487) = 0.89$ V at $V_{out} = 1$ V.

With $V_{out} = 0$, $M_1$ conducts only if $V_{GS} = V_{in} > V_{TH}(0) = 0.7$ V, so

$$V_{out} = 0 \quad\text{for}\quad 0 \le V_{in} \le 0.7\ \mathrm{V}.$$

### Step 2 — Follower region (saturation)

Just above 0.7 V the overdrive is small while $V_{DS} \approx 1$ V, so $M_1$ is saturated. KCL at the output:

$$\frac{V_{out}}{R_1} = \tfrac12\beta\,(V_{in} - V_{out} - V_{TH})^2 .$$

Taking the positive square root and solving for $V_{out}$:

$$
\begin{aligned}
V_{in} - V_{out} - V_{TH} &= \sqrt{\frac{2V_{out}}{\beta R_1}}\\
V_{out} &= V_{in} - V_{TH}(V_{out}) - \sqrt{\frac{2V_{out}}{\beta R_1}} ,
\end{aligned}
$$

the input minus a threshold minus the overdrive needed to carry the load current.

**Slope.** Differentiating the KCL equation, with $g_m = \beta V_{ov}$ and $\eta = \partial V_{TH}/\partial V_{SB} = \gamma/(2\sqrt{0.9 + V_{out}})$:

$$
\begin{aligned}
\frac{dV_{out}}{R_1} &= g_m\left(dV_{in} - dV_{out} - \eta\,dV_{out}\right)\\
dV_{out}\left(\frac{1}{R_1} + g_m(1 + \eta)\right) &= g_m\,dV_{in}\\
\frac{dV_{out}}{dV_{in}} &= \frac{g_m}{g_m(1 + \eta) + 1/R_1} = \frac{g_mR_1}{1 + (g_m + g_{mb})R_1},
\end{aligned}
$$

with $g_{mb} = \eta g_m$. The slope is **always below 1**: below $1/(1 + \eta) \approx 0.81$–$0.86$ because of the body effect, and lower still at small currents where $g_mR_1$ is small. Just above 0.7 V, $g_m \to 0$ and the curve starts with zero slope.

### Step 3 — Entry into triode

Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$:

$$
\begin{aligned}
1 - V_{out} &\ge V_{in} - V_{out} - V_{TH}\\
V_{in} &\le 1 + V_{TH}(V_{out}).
\end{aligned}
$$

The gate may rise at most one threshold above the 1-V drain. Since $V_{TH}$ is about 0.83–0.87 V near the boundary, **$M_1$ enters triode at $V_{in} \approx 1.8$–$1.9$ V**. At the boundary $V_{ov} = V_{DS} = 1 - V_{out}$, so the KCL becomes $V_{out} = \tfrac12\beta R_1(1 - V_{out})^2$.

**Example $\beta R_1 = 10\ \mathrm{V^{-1}}$:**

$$
\begin{aligned}
V_{out} &= 5\,(1 - V_{out})^2\\
5V_{out}^2 - 11V_{out} + 5 &= 0\\
V_{out} &= \frac{11 - \sqrt{121 - 100}}{10} = \frac{11 - 4.583}{10} = 0.642\ \mathrm{V},
\end{aligned}
$$

(the other root, 1.56 V, exceeds 1 V and is rejected). Then $V_{TH} = 0.7 + 0.45(\sqrt{1.542} - 0.9487) = 0.832$ V, and the boundary is at $V_{in} = 1 + 0.832 = 1.83$ V.

**Example $\beta R_1 = 100\ \mathrm{V^{-1}}$:** $50V_{out}^2 - 101V_{out} + 50 = 0$ gives $V_{out} = (101 - \sqrt{201})/100 = 0.868$ V, $V_{TH} = 0.871$ V, boundary at $V_{in} = 1.87$ V.

### Step 4 — Triode region: $V_{out}$ flattens toward 1 V

For $V_{in} > 1 + V_{TH}$:

$$\frac{V_{out}}{R_1} = \beta\left[(V_{in} - V_{out} - V_{TH})(1 - V_{out}) - \tfrac12(1 - V_{out})^2\right].$$

As $V_{in}$ grows, $M_1$ becomes a shrinking resistor $R_{on} \approx 1/[\beta(V_{in} - V_{out} - V_{TH})]$ between the 1-V battery and the output, so

$$V_{out} \approx 1\ \mathrm{V}\times\frac{R_1}{R_1 + R_{on}} \;\to\; 1\ \mathrm{V}.$$

$V_{out}$ **approaches 1 V asymptotically but can never exceed it**, since the battery is the highest potential feeding the channel.

### Step 5 — Numerical curves

Solving the equations of Steps 2 and 4 point by point:

| $V_{in}$ (V) | $V_{out}$, $\beta R_1 = 10\ \mathrm{V^{-1}}$ | $V_{out}$, $\beta R_1 = 100\ \mathrm{V^{-1}}$ | Region |
|---|---|---|---|
| 0 – 0.7 | 0 | 0 | off |
| 0.8 | 0.024 | 0.054 | saturation |
| 1.0 | 0.119 | 0.194 | saturation |
| 1.2 | 0.232 | 0.343 | saturation |
| 1.5 | 0.420 | 0.574 | saturation |
| 1.8 | 0.620 | 0.811 | saturation |
| 2.0 | 0.738 | 0.937 | triode (boundary 1.83 / 1.87 V) |
| 2.5 | 0.874 | 0.984 | triode |
| 3.0 | 0.921 | 0.991 | triode |

Sample check, $\beta R_1 = 10\ \mathrm{V^{-1}}$, $V_{in} = 1.5$ V: guess $V_{out} = 0.420$ V. Then $V_{TH} = 0.7 + 0.45(\sqrt{1.32} - 0.9487) = 0.7 + 0.45(1.1489 - 0.9487) = 0.790$ V, $V_{ov} = 1.5 - 0.420 - 0.790 = 0.290$ V, and $\tfrac12\beta R_1V_{ov}^2 = 5\times(0.290)^2 = 0.420$ V $= V_{out}$. ✓

**Shape.** Flat at zero up to 0.7 V; a rising follower curve that starts with zero slope and steepens to about 0.6–0.8 in the middle (the slope from 1.2 to 1.5 V is 0.63 for $\beta R_1 = 10$ and 0.77 for $\beta R_1 = 100$); a knee at $V_{in} \approx 1.8$–1.9 V; then a flat approach toward 1 V. A larger $\beta R_1$ makes the follower region steeper and closer to $V_{in} - V_{TH}$, and brings the final level closer to 1 V.

### Result

- **$V_{in} \le 0.7$ V:** $M_1$ off, $V_{out} = 0$.
- **$0.7\ \mathrm{V} < V_{in} \lesssim 1 + V_{TH} \approx 1.8$–$1.9$ V:** $M_1$ is a **source follower** with the $V_{out}$ node as source and the 1-V node as drain ($V_{GS} = V_{in} - V_{out}$, $V_{SB} = V_{out}$). It is saturated, with
$$V_{out} = \tfrac12\beta R_1(V_{in} - V_{out} - V_{TH})^2 \quad\Longleftrightarrow\quad V_{out} = V_{in} - V_{TH}(V_{out}) - \sqrt{\frac{2V_{out}}{\beta R_1}} .$$
The slope is below 1, because of finite $\beta R_1$ and the body effect ($V_{TH}$ rising from 0.7 V toward 0.89 V as $V_{out} \to 1$ V).
- **$V_{in} \gtrsim 1 + V_{TH}(V_{out})$** (1.83 V for $\beta R_1 = 10\ \mathrm{V^{-1}}$, 1.87 V for $100\ \mathrm{V^{-1}}$): $M_1$ enters **triode** and $V_{out}$ flattens, approaching but never exceeding **1 V** (0.92 V and 0.99 V at $V_{in} = 3$ V for the two examples).

**Common mistake.** Taking the 1-V terminal (the one with the arrow) as the source, which turns the circuit into a common-source stage with an inverting curve. The output node, pulled toward ground by $R_1$, is always the lower terminal.

**Common mistake.** Letting $V_{out}$ follow $V_{in}$ all the way up (for example $V_{out} = V_{in} - V_{TH}$ up to 2.3 V). The drain is at only 1 V, so the device enters triode once $V_{in} > 1 + V_{TH}$, and the output never exceeds 1 V.

**Common mistake.** Ignoring the body effect in the follower region. $V_{TH}$ grows by almost 0.2 V as the source rises toward 1 V, which lowers the curve and its slope and moves the triode knee from 1.7 V to about 1.8–1.9 V.
