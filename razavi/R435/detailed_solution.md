# Detailed solution - R435

**Approach.** Nodes X and Y are the gates of the second-stage PMOS transistors $M_5$ and $M_6$, whose sources are at $V_{DD}$. Requiring 1 mA in each fixes $|V_{GS5}|$, and therefore the common-mode level of X and Y. Since X and Y are also the drains of the input pair, this level then limits how high the input common-mode voltage can go before $M_1$, $M_2$ leave saturation; the body effect of the input pair must be included.

### Step 1 — Reading the circuit

- **First stage:** NMOS pair $M_1$–$M_2$ with an ideal tail $I_{SS} = 1$ mA at node P; PMOS current-source loads $M_3$, $M_4$ (gates at $V_{b1}$) at the drains X and Y.
- **Second stage:** PMOS common-source transistors $M_5$ (gate at X) and $M_6$ (gate at Y), sources at $V_{DD}$, driving $V_{out1}$ and $V_{out2}$; NMOS current sources $M_7$, $M_8$ (gates at $V_{b2}$) as loads.

All devices have $W/L = 100/0.5 = 200$. At balance, $M_1$–$M_4$ carry 0.5 mA each.

### Step 2 — Common-mode level of X and Y

For $M_5$ to conduct 1 mA in saturation, its source–gate voltage must be

$$
\begin{aligned}
|V_{OD5}| &= \sqrt{\frac{2|I_{D5}|}{\mu_pC_{ox}(W/L)}} = \sqrt{\frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.2604\ \mathrm{V^2}} = 0.510\ \mathrm{V},\\
|V_{GS5}| &= |V_{THP}| + |V_{OD5}| = 0.8 + 0.510 = 1.310\ \mathrm{V}.
\end{aligned}
$$

The source of $M_5$ (and its bulk) is at $V_{DD}$, so there is no body effect, and its gate, node X, must sit at

$$V_{X,CM} = V_{DD} - |V_{GS5}| = 3 - 1.310 = 1.69\ \mathrm{V},$$

and likewise $V_{Y,CM} = 1.69$ V.

X and Y are high-impedance nodes (the drains of a current-source-loaded pair), so their common-mode level is not set by the first stage itself: it must be *established* at this value, in practice by common-mode feedback (for example by adjusting $V_{b1}$). For reference, $M_3$ carries 0.5 mA when $V_{b1} = V_{DD} - 0.8 - 0.361 = 1.84$ V, and it stays saturated for $V_X \le V_{b1} + 0.8 = 2.64$ V, which 1.69 V satisfies.

### Step 3 — Saturation condition of the input pair

An NMOS is saturated while its drain is no lower than one threshold below its gate:

$$V_X \ge V_{in,CM} - V_{TH1}\ \Longrightarrow\ V_{in,CM} \le V_X + V_{TH1} .$$

So the first stage's output common-mode level, which the PMOS second stage dictates, caps the input common-mode range at one threshold above $V_X$.

### Step 4 — Threshold of $M_1$ at the limit (body effect)

The bulk of $M_1$ is at ground and its source is at P. At the limit, $M_1$ is at the edge of saturation, so its drain–source voltage equals its overdrive:

$$
\begin{aligned}
V_{OD1} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.0373\ \mathrm{V^2}} = 0.193\ \mathrm{V},\\
V_P &= V_X - V_{OD1} = 1.690 - 0.193 = 1.497\ \mathrm{V}.
\end{aligned}
$$

The threshold with $V_{SB1} = V_P$:

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 1.497} - \sqrt{0.9}\right)\\
&= 0.7 + 0.45\,(1.5481 - 0.9487) = 0.7 + 0.45\times0.5994 = 0.970\ \mathrm{V}.
\end{aligned}
$$

### Step 5 — Maximum input common-mode level

$$V_{in,CM,max} = V_X + V_{TH1} = 1.690 + 0.970 \approx 2.66\ \mathrm{V}.$$

Consistency check: $V_{in,CM} - V_P = 2.66 - 1.497 = 1.163\ \mathrm{V} = V_{TH1} + V_{OD1} = 0.970 + 0.193$ ✓, so $M_1$ indeed carries 0.5 mA at the edge of saturation.

Without the body effect the limit would be only $1.69 + 0.7 = 2.39$ V. The body effect *helps* here: the source of the pair is high (about 1.5 V), which raises the threshold by 0.27 V and lets the gate go correspondingly higher before the device leaves saturation.

### Result

$$V_{X,CM} = V_{Y,CM} = V_{DD} - |V_{GS5}| = 3 - 1.31 \approx 1.69\ \mathrm{V}$$

for $I_{D5} = I_{D6} = 1$ mA. The input pair must stay saturated, so

$$V_{in,CM} \le V_X + V_{TH1} \approx 1.69 + 0.97 \approx 2.66\ \mathrm{V}$$

(with the body effect, $V_{TH1} \approx 0.97$ V at $V_{SB} \approx 1.5$ V; about 2.39 V without it). The second stage's bias requirement thus sets the upper end of the input common-mode range.

**Common mistake.** Deriving $V_X$ from $V_{b1}$ or from the $V_{GS}$ of an NMOS device. Nodes X and Y are the *gates* of the PMOS second-stage devices, so their level is dictated by $|V_{GS5}|$ at the desired 1 mA.

**Common mistake.** Writing the constraint as $V_{in,CM} \le V_X$ or $V_{in,CM} \le V_X - V_{TH1}$. The gate of an NMOS may rise up to one threshold *above* its drain before the device leaves saturation, so the limit is $V_X + V_{TH1}$.

**Common mistake.** Presenting the result as a *minimum* input level. Raising the input common-mode level raises the source of the pair while X stays fixed, which pushes $M_1$, $M_2$ toward the triode region; the constraint is an upper bound.
