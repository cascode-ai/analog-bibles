# Detailed solution - R435

**Approach.** X and Y are the gates of the second-stage PMOS transistors $M_5$ and $M_6$, whose sources are at $V_{DD}$, so requiring 1 mA in each fixes $|V_{GS5}|$ and hence the common-mode level of X and Y. Since X and Y are also the drains of the input pair, this level limits how high the input common-mode voltage can go before $M_1$, $M_2$ leave saturation, with the body effect of the input pair included.

### Step 1 — Common-mode level of X and Y

All devices have $W/L = 100/0.5 = 200$; at balance $M_1$–$M_4$ carry 0.5 mA each. For $M_5$ to conduct 1 mA in saturation:

$$
\begin{aligned}
|V_{OD5}| &= \sqrt{\frac{2|I_{D5}|}{\mu_pC_{ox}(W/L)}} = \sqrt{\frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.2604\ \mathrm{V^2}} = 0.510\ \mathrm{V},\\
|V_{GS5}| &= |V_{THP}| + |V_{OD5}| = 0.8 + 0.510 = 1.310\ \mathrm{V}.
\end{aligned}
$$

The source and bulk of $M_5$ are at $V_{DD}$ (no body effect), so

$$V_{X,CM} = V_{DD} - |V_{GS5}| = 3 - 1.310 = 1.69\ \mathrm{V},$$

and likewise $V_{Y,CM} = 1.69$ V. X and Y are high-impedance nodes, so this level must be *established*, in practice by common-mode feedback (e.g. adjusting $V_{b1}$). As a check, $M_3$ carries 0.5 mA when $V_{b1} = V_{DD} - 0.8 - 0.361 = 1.84$ V, and stays saturated for $V_X \le V_{b1} + 0.8 = 2.64$ V, which 1.69 V satisfies.

### Step 2 — Saturation condition of the input pair

$M_1$ stays saturated while its drain is no lower than one threshold below its gate:

$$V_X \ge V_{in,CM} - V_{TH1}\ \Longrightarrow\ V_{in,CM} \le V_X + V_{TH1} ,$$

so the level dictated by the PMOS second stage caps the input common-mode range.

### Step 3 — Threshold of $M_1$ at the limit (body effect)

At the limit $M_1$ is at the edge of saturation, so its $V_{DS}$ equals its overdrive:

$$
\begin{aligned}
V_{OD1} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.0373\ \mathrm{V^2}} = 0.193\ \mathrm{V},\\
V_P &= V_X - V_{OD1} = 1.690 - 0.193 = 1.497\ \mathrm{V}.
\end{aligned}
$$

With the bulk grounded, $V_{SB1} = V_P$:

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 1.497} - \sqrt{0.9}\right)\\
&= 0.7 + 0.45\,(1.5481 - 0.9487) = 0.7 + 0.45\times0.5994 = 0.970\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — Maximum input common-mode level

$$V_{in,CM,max} = V_X + V_{TH1} = 1.690 + 0.970 \approx 2.66\ \mathrm{V}.$$

Check: $V_{in,CM} - V_P = 2.66 - 1.497 = 1.163\ \mathrm{V} = V_{TH1} + V_{OD1} = 0.970 + 0.193$ ✓, so $M_1$ carries 0.5 mA at the edge of saturation.

Without the body effect the limit would be only $1.69 + 0.7 = 2.39$ V: here the body effect *helps*, since the high source node (about 1.5 V) raises the threshold by 0.27 V.

### Result

$$V_{X,CM} = V_{Y,CM} = V_{DD} - |V_{GS5}| = 3 - 1.31 \approx 1.69\ \mathrm{V}$$

for $I_{D5} = I_{D6} = 1$ mA. The input pair must stay saturated, so

$$V_{in,CM} \le V_X + V_{TH1} \approx 1.69 + 0.97 \approx 2.66\ \mathrm{V}$$

(with the body effect, $V_{TH1} \approx 0.97$ V at $V_{SB} \approx 1.5$ V; about 2.39 V without it). The second stage's bias requirement thus sets the upper end of the input common-mode range.

**Common mistake.** Deriving $V_X$ from $V_{b1}$ or from an NMOS $V_{GS}$. X and Y are the *gates* of the PMOS second-stage devices, so their level is dictated by $|V_{GS5}|$ at 1 mA.

**Common mistake.** Writing the constraint as $V_{in,CM} \le V_X$ or $V_{in,CM} \le V_X - V_{TH1}$. The gate of an NMOS may rise one threshold *above* its drain before the device leaves saturation.

**Common mistake.** Presenting the result as a *minimum* input level. Raising $V_{in,CM}$ raises the pair's source while X stays fixed, pushing $M_1$, $M_2$ toward triode: the constraint is an upper bound.
