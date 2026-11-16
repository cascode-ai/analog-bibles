# Detailed solution - R151

**Approach.** For a small differential input the tail node $P$ is a virtual ground, so the differential gain equals that of a common-source half circuit, $|A_v| = g_{m1}(R_D\parallel r_{ds1})$, in every region of operation. The gate voltages (1.3 V and 1 V) are fixed, so only the drain voltages change as $V_{DD}$ rises. We find the bias with all devices saturated, the value of $V_{DD}$ at which $M_1$ and $M_2$ reach saturation, and the gain below and above that point.

### Step 1 — The circuit and the half-circuit gain

Reading the figure:

- $M_1$ and $M_2$ form an NMOS differential pair with sources at node $P$ and load resistors $R_D$ from $V_{DD}$ to the drains $X$ and $Y$.
- The tail transistor $M_3$ has its gate at $V_b = 1$ V and its source at ground.
- Both input gates sit at $V_{in,CM} = 1.3$ V, plus a small differential signal. All bulks are grounded.

The device parameter is $\beta = \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$ for all three transistors.

**Half circuit.** For a small differential input ($+v_{in}/2$ on $M_1$, $-v_{in}/2$ on $M_2$), the symmetric circuit changes the two drain currents by equal and opposite amounts. The tail current, and hence $V_P$, does not change: $P$ is an AC ground. Each half is then a common-source stage with a grounded source. The source does not move, so $v_{bs} = 0$ and the body effect plays no small-signal role. The model of $M_1$ is a controlled current source $g_{m1}v_{gs1}$ from $X$ to ground in parallel with the channel resistance $r_{ds1}$, all loaded by $R_D$:

<!-- diagram: diagram-01.cir -->

$$|A_v| = \left|\frac{v_{out1} - v_{out2}}{v_{in}}\right| = g_{m1}\,(R_D\parallel r_{ds1}),\qquad g_{m1} = \frac{\partial I_{D1}}{\partial V_{GS1}},\quad \frac{1}{r_{ds1}} = \frac{\partial I_{D1}}{\partial V_{DS1}} .$$

With $V_{ov} = V_{GS} - V_{TH}$ (the overdrive voltage), the square law gives:

- **saturation** ($V_{DS} \ge V_{ov}$): $I_D = \tfrac12\beta V_{ov}^2$, so $g_m = \beta V_{ov}$ and $r_{ds} = \infty$ (or $r_O = 1/(\lambda I_D)$ with channel-length modulation);
- **triode** ($V_{DS} < V_{ov}$): $I_D = \beta\left(V_{ov}V_{DS} - \tfrac12V_{DS}^2\right)$, so $g_m = \beta V_{DS}$ and $1/r_{ds} = \beta(V_{ov} - V_{DS})$.

In triode both factors work against the gain: $g_m$ is proportional to the small $V_{DS}$, and $r_{ds}$ is low.

### Step 2 — Bias with all devices saturated

**Tail current.** $M_3$ has $V_{GS3} = 1$ V and no body effect (source at ground), so $V_{TH3} = 0.7$ V. In saturation:

$$I_{SS} = \tfrac12\beta(V_{GS3} - V_{TH3})^2 = \tfrac12(13.4\ \mathrm{mA/V^2})(1 - 0.7\ \mathrm{V})^2 = 0.603\ \mathrm{mA},$$

so each side carries $I_{D1} = I_{SS}/2 = 0.3015$ mA. $M_3$ needs $V_P \ge V_{GS3} - V_{TH3} = 0.3$ V to stay saturated.

**Input devices.** Overdrive and transconductance at 0.3015 mA:

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2I_{D1}}{\beta}} = \sqrt{\frac{2(0.3015\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.212\ \mathrm{V},\\
g_m &= \beta V_{ov1} = (13.4\ \mathrm{mA/V^2})(0.212\ \mathrm{V}) = 2.84\ \mathrm{mS}.
\end{aligned}
$$

**Tail node and body effect.** $V_P = V_{in,CM} - V_{TH1} - V_{ov1}$, where $V_{TH1}$ depends on $V_{SB1} = V_P$:

$$V_{TH1} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_P} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right).$$

Iterate, starting from $V_P = 0.32$ V:

- $V_{TH1} = 0.7 + 0.45(\sqrt{1.22} - 0.9487) = 0.7 + 0.45(0.1559) = 0.770$ V, so $V_P = 1.3 - 0.770 - 0.212 = 0.318$ V;
- $V_{TH1} = 0.7 + 0.45(\sqrt{1.218} - 0.9487) = 0.770$ V: converged.

So $V_{TH1} \approx 0.770$ V and $V_P \approx 0.318$ V. Since $V_P > 0.3$ V, $M_3$ is saturated whenever $M_1$ and $M_2$ are. (Without body effect, $V_P = 1.3 - 0.7 - 0.212 = 0.388$ V.)

### Step 3 — The value of $V_{DD}$ at which $M_1$, $M_2$ saturate

$M_1$ is saturated if $V_{DS1} \ge V_{ov1}$, i.e. $V_X - V_P \ge V_{GS1} - V_{TH1}$. Since $V_{GS1} = V_{in,CM} - V_P$, this is

$$V_X \ge V_{in,CM} - V_{TH1} = 1.3 - 0.770 = 0.530\ \mathrm{V}.$$

The drain voltage is $V_X = V_{DD} - R_DI_{SS}/2$. Therefore the input pair is saturated for

$$V_{DD} \ge V_{DD,sat} = V_{in,CM} - V_{TH1} + \frac{R_DI_{SS}}{2} = 0.530\ \mathrm{V} + (0.3015\ \mathrm{mA})R_D .$$

(Without body effect: $0.60\ \mathrm{V} + (0.3015\ \mathrm{mA})R_D$.) Examples:

| $R_D$ | $V_{DD,sat}$ | plateau $g_mR_D$ | with $r_O$: $g_m(R_D\parallel r_O)$ |
|---|---|---|---|
| 2 kΩ | 0.530 + 0.603 = 1.13 V | 5.69 | 5.36 |
| 4 kΩ | 0.530 + 1.206 = 1.74 V | 11.4 | 10.1 |
| 6 kΩ | 0.530 + 1.809 = 2.34 V | 17.1 | 14.4 |

$V_{DD,sat}$ reaches 3 V for $R_D = (3 - 0.530)\ \mathrm{V}/0.3015\ \mathrm{mA} = 8.2\ \mathrm{k}\Omega$; with a larger $R_D$ the plateau is never reached in the 0–3 V range.

### Step 4 — The plateau ($V_{DD} \ge V_{DD,sat}$)

All three transistors are saturated. The tail current is set by $V_b$ alone, so $I_{SS}$, $g_m$ and $V_P$ no longer depend on $V_{DD}$. Raising $V_{DD}$ only lifts the drains, pushing $M_1$ and $M_2$ deeper into saturation. Hence

$$|A_v| = g_mR_D = (2.84\ \mathrm{mS})\,R_D,$$

constant up to $V_{DD} = 3$ V. Including channel-length modulation, $r_O = 1/(\lambda I_{D1}) = 1/[(0.1\ \mathrm{V^{-1}})(0.3015\ \mathrm{mA})] = 33.2\ \mathrm{k}\Omega$ and $|A_v| = g_m(R_D\parallel r_O)$: still nearly constant, only slightly lower (last column of the table).

### Step 5 — Below the plateau: the input pair in triode

**Current flows for any $V_{DD} > 0$.** The gate voltages come from separate sources: $V_{GS3} = 1$ V $> V_{TH}$, and $M_1$, $M_2$ have $V_{GS} \approx 1.3$ V minus a small $V_P$. All three channels are therefore formed. As soon as $V_{DD} > 0$, current flows through $R_D$, $M_1$ (or $M_2$) and $M_3$ in series, but the devices are in **triode**, and at small $V_{DD}$ they act as low resistors.

**Operating point.** For given $V_{DD}$ and $R_D$, three equations must hold simultaneously: the triode/saturation current of $M_3$ at $V_{DS3} = V_P$, the current of $M_1$ at $V_{GS1} = 1.3\ \mathrm{V} - V_P$ and $V_{DS1} = V_X - V_P$ (with the body-effect threshold), and $V_X = V_{DD} - R_DI_{D1}$. Solving them numerically for $R_D = 2$ kΩ at $V_{DD} = 0.8$ V gives

$$V_P = 0.201\ \mathrm{V},\quad V_X = 0.263\ \mathrm{V},\quad I_{D1} = 0.269\ \mathrm{mA},\quad V_{TH1} = 0.745\ \mathrm{V}.$$

Then:

$$
\begin{aligned}
V_{ov1} &= 1.3 - 0.201 - 0.745 = 0.354\ \mathrm{V}, \qquad V_{DS1} = 0.263 - 0.201 = 0.062\ \mathrm{V} < V_{ov1}\ \text{(triode)},\\
g_{m1} &= \beta V_{DS1} = (13.4\ \mathrm{mA/V^2})(0.062\ \mathrm{V}) = 0.83\ \mathrm{mS},\\
r_{ds1} &= \frac{1}{\beta(V_{ov1} - V_{DS1})} = \frac{1}{(13.4\ \mathrm{mA/V^2})(0.292\ \mathrm{V})} = 256\ \Omega,\\
|A_v| &= g_{m1}(R_D\parallel r_{ds1}) = (0.83\ \mathrm{mS})(2000\parallel 256\ \Omega) = (0.83\ \mathrm{mS})(227\ \Omega) = 0.19 .
\end{aligned}
$$

Repeating the calculation for other supply values ($R_D = 2$ kΩ):

| $V_{DD}$ (V) | $V_P$ (V) | $V_X$ (V) | $V_{DS1}$ (V) | $V_{ov1}$ (V) | region of $M_1$ | $\lvert A_v\rvert$ |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | — | no current | 0 |
| 0.5 | 0.110 | 0.140 | 0.030 | 0.465 | triode | 0.06 |
| 0.8 | 0.201 | 0.263 | 0.062 | 0.354 | triode | 0.19 |
| 1.0 | 0.284 | 0.399 | 0.115 | 0.253 | triode | 0.65 |
| 1.10 | 0.316 | 0.497 | 0.181 | 0.215 | triode (edge) | 2.6 |
| 1.13 | 0.318 | 0.527 | 0.209 | 0.212 | edge of saturation | 5.1 |
| ≥ 1.14 | 0.318 | $V_{DD} - 0.603$ | ≥ 0.212 | 0.212 | saturation | 5.69 |

At low $V_{DD}$ the gain is far below 1, because $g_m = \beta V_{DS}$ is tiny and $r_{ds}$ shunts $R_D$. In the last ~0.1 V before $V_{DD,sat}$, $V_{DS1}$ approaches $V_{ov1}$, $r_{ds1}$ shoots up toward infinity, and the gain climbs steeply to the plateau. At the boundary, $\beta V_{DS} = \beta V_{ov}$, so the curve joins the plateau continuously. $M_3$ itself leaves triode slightly earlier (around $V_{DD} \approx 1.04$ V for $R_D = 2$ kΩ), when $V_P$ passes 0.3 V. For larger $R_D$ the same shape is stretched to higher $V_{DD}$ (break points 1.74 V and 2.34 V for 4 kΩ and 6 kΩ).

### Result

Sketch of $|A_v|$ versus $V_{DD}$:

- **$V_{DD} = 0$:** no current and $V_{DS} = 0$, so the gain is zero.
- **$0 < V_{DD} < V_{DD,sat}$:** current flows (both gates are above threshold), but $M_1$, $M_2$ (and at the lowest $V_{DD}$ also $M_3$) are in triode. The gain $g_{m1}(R_D\parallel r_{ds1})$ with $g_{m1} = \beta V_{DS1}$ stays $\ll 1$ (for $R_D = 2$ kΩ: ≈ 0.06 at 0.5 V, 0.19 at 0.8 V, 0.65 at 1.0 V), then rises steeply near the break point.
- **Break point:** $V_{DD,sat} = V_{in,CM} - V_{TH1} + R_DI_{SS}/2 \approx 0.53\ \mathrm{V} + (0.30\ \mathrm{mA})R_D$, with $I_{SS} = 0.603$ mA, $V_{TH1} \approx 0.77$ V (body effect at $V_P \approx 0.32$ V). Examples: 1.13 V for 2 kΩ, 1.74 V for 4 kΩ, 2.34 V for 6 kΩ.
- **Plateau, $V_{DD,sat} \le V_{DD} \le 3$ V:** flat at
$$|A_v| = g_mR_D \approx (2.84\ \mathrm{mS})\,R_D$$
(e.g. 5.7 for $R_D = 2$ kΩ), or $g_m(R_D\parallel r_O)$ with $r_O \approx 33$ kΩ if channel-length modulation is included. For $R_D \gtrsim 8.2$ kΩ the plateau is not reached below 3 V.

**Common mistake.** Letting the gain grow indefinitely with $V_{DD}$. Once all devices are saturated, $I_{SS}$ is fixed by $V_b$, so $g_m$ and $R_D$ (and hence $g_mR_D$) do not depend on $V_{DD}$. A larger $V_{DD}$ only raises the drain voltages.

**Common mistake.** Making the gain *fall* at high $V_{DD}$ because "the input pair enters triode". Raising $V_{DD}$ raises $V_X$ while the gates stay at 1.3 V, so $V_{DS1}$ grows and the pair goes deeper into saturation. Triode operation happens at *low* $V_{DD}$, not high.

**Common mistake.** Drawing a threshold-like turn-on at $V_{DD} = V_{TH}$ with full gain immediately afterwards, or forgetting the $R_DI_{SS}/2$ drop in the break point. The gates are biased from separate sources, so current flows for any $V_{DD} > 0$. The pair becomes useful only when its drains reach $V_{in,CM} - V_{TH1}$, which needs $V_{DD} \ge 0.53\ \mathrm{V} + R_DI_{SS}/2$.
