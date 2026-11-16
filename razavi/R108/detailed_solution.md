# Detailed solution - R108

**Approach.** Both gates are at fixed biases, so $M_1$ (NMOS) and $M_2$ (PMOS) are two current sources whose common drain is driven by $V_X$. KCL at the drain gives $I_X = I_{D1} - |I_{D2}|$. Then use each device's output characteristic: $M_1$ is in triode at low $V_X$ and saturated above $V_{b2} - 0.7$ V; $M_2$ is saturated at low $V_X$ and in triode above $V_{b1} + 0.8$ V.

### Step 1 — KCL at the drain node

$I_X$ and $M_2$'s drain current $|I_{D2}|$ flow into $X$, and $M_1$'s drain current flows out:

$$I_X + |I_{D2}| = I_{D1} \quad\Longrightarrow\quad I_X = I_{D1} - |I_{D2}| .$$

With both devices on ($V_{b2} > 0.7$ V, $V_{DD} - V_{b1} > 0.8$ V) and no body effect, the saturation currents are

$$I_1 = \frac12\beta_n(V_{b2} - 0.7)^2, \qquad I_2 = \frac12\beta_p(V_{DD} - V_{b1} - 0.8)^2 = \frac12\beta_p(2.2 - V_{b1})^2 .$$

Take $\lambda = 0$ (none is given); $\lambda > 0$ is discussed in Step 4.

### Step 2 — Output characteristic of $M_1$

With $V_{GS1} = V_{b2}$ and $V_{DS1} = V_X$:

- **Triode, $V_X < V_{b2} - 0.7$ V:** $I_{D1} = \beta_n\left[(V_{b2} - 0.7)V_X - \tfrac12V_X^2\right]$, rising from 0 at $V_X = 0$;
- **Saturation, $V_X \ge V_{b2} - 0.7$ V:** $I_{D1} = I_1$.

### Step 3 — Output characteristic of $M_2$

$V_{SG2} = 3 - V_{b1}$ (fixed) and $V_{SD2} = 3 - V_X$, so saturation requires

$$3 - V_X \ge 3 - V_{b1} - 0.8 \quad\Longleftrightarrow\quad V_X \le V_{b1} + 0.8\ \mathrm{V}$$

(the drain may rise to within one overdrive of $V_{DD}$: $V_{DD} - |V_{ov2}| = V_{DD} - (V_{DD} - V_{b1} - 0.8) = V_{b1} + 0.8$).

- **Saturation, $V_X \le V_{b1} + 0.8$ V:** $|I_{D2}| = I_2$;
- **Triode, $V_X > V_{b1} + 0.8$ V:** $|I_{D2}| = \beta_p\left[(2.2 - V_{b1})(3 - V_X) - \tfrac12(3 - V_X)^2\right]$, falling to **zero at $V_X = 3$ V**, where $V_{SD2} = 0$.

### Step 4 — Combine (usual order $V_{b2} - 0.7 < V_{b1} + 0.8$)

| Range of $V_X$ | $M_1$ | $M_2$ | $I_X$ | Slope $dI_X/dV_X$ |
|---|---|---|---|---|
| $0 \le V_X < V_{b2} - 0.7$ | triode | sat | $\beta_n[(V_{b2} - 0.7)V_X - V_X^2/2] - I_2$ | $\beta_n(V_{b2} - 0.7 - V_X)$, falling to 0 |
| $V_{b2} - 0.7 \le V_X \le V_{b1} + 0.8$ | sat | sat | $I_1 - I_2$ (flat) | 0 |
| $V_{b1} + 0.8 < V_X \le 3$ | sat | triode | $I_1 - \beta_p[(2.2 - V_{b1})(3 - V_X) - (3 - V_X)^2/2]$ | $\beta_p(V_X - V_{b1} - 0.8)$, rising |

- **Start:** $I_X(0) = -I_2$: $M_1$ carries nothing with $V_{DS} = 0$, while $M_2$ pushes its full $I_2$ into the source.
- **End:** $I_X(3\ \mathrm{V}) = I_1$: $M_2$ carries nothing with $V_{SD} = 0$, while $M_1$ draws $I_1$.
- **Middle:** a flat segment at $I_1 - I_2$, positive or negative depending on which source is stronger. With $\lambda = 0$ its slope is exactly zero; with channel-length modulation it is $\lambda_nI_1 + \lambda_pI_2 = 1/r_{O1} + 1/r_{O2}$.
- **Opposite order** ($V_{b2} - 0.7 > V_{b1} + 0.8$): in the middle range both devices are in triode, and $I_X$ rises steadily there instead of being flat.

$I_X$ increases monotonically from $-I_2$ to $+I_1$.

**Zero crossing** (the node voltage with the source removed). If $I_1 < I_2$, the flat segment is negative and the crossing lies in the last segment, where $M_2$ (in triode) has weakened to $I_1$: $\beta_p[(2.2 - V_{b1})(3 - V_X) - \frac12(3 - V_X)^2] = I_1$. If $I_1 > I_2$, it lies in the first segment, where $M_1$ (in triode) carries $I_2$: $\beta_n[(V_{b2} - 0.7)V_X - \frac12V_X^2] = I_2$. Only for $I_1 = I_2$ is the whole flat segment at zero, and the node voltage is then undefined between the two breakpoints (with $\lambda = 0$).

### Step 5 — A numerical example

For illustration take $V_{b2} = 1.0$ V, $\beta_n = 4\ \mathrm{mA/V^2}$, $V_{b1} = 1.5$ V, $\beta_p = 1\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
I_1 &= \tfrac12(4\ \mathrm{mA/V^2})(0.3\ \mathrm{V})^2 = 0.18\ \mathrm{mA},\qquad V_{b2} - 0.7 = 0.3\ \mathrm{V},\\
I_2 &= \tfrac12(1\ \mathrm{mA/V^2})(0.7\ \mathrm{V})^2 = 0.245\ \mathrm{mA},\qquad V_{b1} + 0.8 = 2.3\ \mathrm{V}.
\end{aligned}
$$

For $V_X > 2.3$ V, with $s = 3 - V_X$, $|I_{D2}| = (1\ \mathrm{mA/V^2})(0.7s - 0.5s^2)$. The zero crossing $0.18 = 0.7s - 0.5s^2$ gives $s = 0.339$ V, i.e. $V_X = 2.66$ V.

| $V_X$ (V) | $I_{D1}$ (mA) | $\lvert I_{D2}\rvert$ (mA) | $I_X$ (mA) |
|---|---|---|---|
| 0 | 0 | 0.245 | −0.245 |
| 0.1 | 0.100 | 0.245 | −0.145 |
| 0.2 | 0.160 | 0.245 | −0.085 |
| 0.3 | 0.180 | 0.245 | −0.065 |
| 1.5 | 0.180 | 0.245 | −0.065 |
| 2.3 | 0.180 | 0.245 | −0.065 |
| 2.6 | 0.180 | 0.200 | −0.020 |
| 2.66 | 0.180 | 0.180 | 0 |
| 2.8 | 0.180 | 0.120 | 0.060 |
| 3.0 | 0.180 | 0 | 0.180 |

### Result

$$I_X = I_{D1} - |I_{D2}|, \qquad I_1 = \tfrac12\beta_n(V_{b2} - 0.7)^2, \quad I_2 = \tfrac12\beta_p(V_{DD} - V_{b1} - 0.8)^2 .$$

$I_X$ starts at $-I_2$, rises while $M_1$ is in triode, is flat at $I_1 - I_2$ while both devices are saturated, and rises again to $I_1$ at $V_X = V_{DD}$ as $M_2$ goes into triode.

- **$M_1$:** triode for $V_X < V_{b2} - 0.7$ V, $I_{D1} = \beta_n[(V_{b2} - 0.7)V_X - V_X^2/2]$; saturated beyond, $I_1$.
- **$M_2$:** saturated for $V_X \le V_{b1} + 0.8$ V ($I_2$); triode above, its current falling to 0 at $V_X = 3$ V.
- **With $V_{b2} - 0.7 < V_{b1} + 0.8$:** $I_X = -I_2$ at 0, rising to $I_1 - I_2$ at $V_X = V_{b2} - 0.7$ V, flat (slope $\lambda_nI_1 + \lambda_pI_2$ if channel-length modulation is included) up to $V_X = V_{b1} + 0.8$ V, then rising to $I_1$ at 3 V. If the two breakpoints are in the opposite order, the middle segment has both devices in triode and rises steadily.
- **Transition points:** $V_X = V_{b2} - 0.7$ V and $V_X = V_{b1} + 0.8$ V.

**Common mistake.** Putting $M_2$'s breakpoint at $V_X = V_{b1} - 0.8$ V. Saturation of a PMOS with its source at $V_{DD}$ gives $V_X \le V_{b1} + |V_{THP}|$: the drain may rise *above* the gate by up to one threshold.

**Common mistake.** Ending the curve at $I_1 - I_2$, or starting it there. At $V_X = V_{DD}$, $M_2$ carries nothing, so $I_X = I_1$; at $V_X = 0$, $M_1$ carries nothing, so $I_X = -I_2$.

**Common mistake.** Drawing only one device's output characteristic. The test source must supply $M_1$ *and* absorb $M_2$'s current, so both combine, with $M_2$'s subtracted.
