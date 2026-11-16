# Detailed solution - R152

**Approach.** Follow the NMOS reasoning with every voltage measured from $V_{DD}$ instead of from ground. A PMOS conducts when its gate is at least $|V_{THP}|$ *below* its source, so the pair conducts at *low* input common-mode levels and turns off at high ones: the plots are the NMOS plots mirrored about $V_{in,CM} = V_{DD}/2$, with the outputs measured up from ground.

### Step 1 — The PMOS circuit and its equations

The drains of $M_1$ and $M_2$ are called $X$ and $Y$.

<!-- diagram: diagram-01.cir -->

Current flows from $V_{DD}$ through $M_3$, splits equally between $M_1$ and $M_2$, and flows down through the resistors to ground:

$$I_{D1} = I_{D2} = \tfrac12 I_{D3}, \qquad V_{out1} = V_{out2} = R_D\,I_{D1}, \qquad V_P = V_{in,CM} + |V_{GS1}| .$$

The source of a conducting PMOS sits $|V_{GS1}|$ *above* its gate; with $V_{SG} = |V_{GS}|$ and $|V_{TH}| = 0.8$ V, a PMOS conducts if $V_{SG} > |V_{TH}|$ and is saturated if $V_{SD} \ge V_{SG} - |V_{TH}|$.

### Step 2 — High $V_{in,CM}$: the pair is off

$M_1$ and $M_2$ conduct only if $V_P - V_{in,CM} > |V_{TH1}|$, and $V_P$ cannot exceed $V_{DD}$, so for

$$V_{in,CM} > V_{DD} - |V_{TH1}| = 3 - 0.8 = 2.2\ \mathrm{V}$$

the pair is **off**: $I_{D1} = I_{D2} = 0$. Then:

- $M_3$ carries no current although its channel is on ($V_{SG3} = V_{DD} - V_b > |V_{TH3}|$), so $V_{SD3} = 0$: it sits in deep triode and pulls $V_P$ up to $V_{DD}$;
- no current flows in the resistors, so $V_{out1} = V_{out2} = 0$.

(At this point $V_P = V_{DD}$, so even with the bulks at $V_{DD}$ there is no body effect and the break point is exactly $V_{DD} - |V_{THP}| = 2.2$ V.) This mirrors the NMOS pair, which is off for $V_{in,CM} < V_{TH1}$.

### Step 3 — Intermediate $V_{in,CM}$: tail in triode

As $V_{in,CM}$ falls below 2.2 V, $M_1$ and $M_2$ turn on. At first the current is small, so $M_3$ needs only a small $V_{SD3}$: it is in **triode** and acts like a resistor between $V_{DD}$ and $P$. Lowering $V_{in,CM}$ further increases $V_{SG1}$:

- $I_{D1}$, $I_{D2}$ rise from zero (roughly quadratically at first);
- $V_P = V_{in,CM} + |V_{GS1}|$ falls away from $V_{DD}$, leaving it with zero slope and steepening toward a slope of about 1;
- $V_{out} = R_DI_{D1}$ rises from 0.

**$M_3$ saturates** when $V_{SD3} = V_{DD} - V_P$ reaches its overdrive $|V_{GS3} - V_{TH3}| = V_{SG3} - |V_{TH3}|$:

$$
\begin{aligned}
V_{DD} - V_P &= |V_{GS3} - V_{TH3}|\\
V_{DD} - V_{in,CM} - |V_{GS1}| &= |V_{GS3} - V_{TH3}|\\
V_{in,CM} &= V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}| ,
\end{aligned}
$$

with $|V_{GS1}|$ evaluated at the full current $I_{SS}/2$: the mirror image of the NMOS break point $V_{GS1} + (V_{GS3} - V_{TH3})$.

### Step 4 — Low $V_{in,CM}$: tail saturated

For $V_{in,CM} \le V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$, $M_3$ is a current source delivering $I_{SS}$:

- $I_{D1} = I_{D2} = I_{SS}/2$, flat;
- $V_{out1} = V_{out2} = R_DI_{SS}/2$, flat, measured up from ground (the NMOS outputs settle at $V_{DD} - R_DI_{SS}/2$);
- $V_P = V_{in,CM} + |V_{GS1}|$, a straight line of slope ≈ 1 lying $|V_{GS1}|$ *above* the input (the NMOS one lies $V_{GS1}$ below). If the bulks of $M_1$, $M_2$ are tied to $V_{DD}$, the body effect raises $|V_{TH1}|$ as $V_P$ falls, which makes the slope slightly less than 1 and shifts the break points a little.

**Lower limit of the useful range.** $M_1$ stays saturated only if $V_{SD1} \ge V_{SG1} - |V_{TH1}|$:

$$
\begin{aligned}
V_P - V_{out} &\ge V_P - V_{in,CM} - |V_{TH1}|\\
V_{in,CM} &\ge V_{out} - |V_{TH1}| = \frac{R_DI_{SS}}{2} - |V_{TH1}| .
\end{aligned}
$$

If this bound is positive, the pair enters triode below it. The tail is still saturated, so the currents and outputs are unchanged, but the differential gain drops, and $V_P$ stays above the straight line (it can no longer fall below the output level). So the allowed common-mode range is

$$\frac{R_DI_{SS}}{2} - |V_{TH1}| \;\le\; V_{in,CM} \;\le\; V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}| .$$

### Step 5 — An illustrative example

For illustration only, choose $I_{SS} = 0.5$ mA, $|V_{GS3} - V_{TH3}| = 0.3$ V, an overdrive of 0.2 V for $M_1$, $M_2$ at 0.25 mA (so $|V_{GS1}| = 1.0$ V, body effect neglected) and $R_D = 4$ kΩ (so $R_DI_{SS}/2 = 1.0$ V). The break points are then:

- pair turns off: $V_{DD} - |V_{TH1}| = 3 - 0.8 = 2.2$ V;
- tail saturates: $V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}| = 3 - 1.0 - 0.3 = 1.7$ V;
- pair leaves saturation: $R_DI_{SS}/2 - |V_{TH1}| = 1.0 - 0.8 = 0.2$ V.

Solving the square-law equations point by point gives:

| $V_{in,CM}$ (V) | $I_{D1} = I_{D2}$ (mA) | $V_P$ (V) | $V_{out1} = V_{out2}$ (V) | regions |
|---|---|---|---|---|
| 3.0 | 0 | 3.00 | 0 | pair off |
| 2.2 | 0 | 3.00 | 0 | turn-on point |
| 2.1 | 0.037 | 2.98 | 0.15 | $M_3$ triode |
| 2.0 | 0.104 | 2.93 | 0.42 | $M_3$ triode |
| 1.9 | 0.173 | 2.87 | 0.69 | $M_3$ triode |
| 1.8 | 0.227 | 2.79 | 0.91 | $M_3$ triode |
| 1.7 | 0.250 | 2.70 | 1.00 | $M_3$ just saturated |
| 1.0 | 0.250 | 2.00 | 1.00 | all saturated |
| 0.2 | 0.250 | 1.20 | 1.00 | $M_1$, $M_2$ at edge of triode |
| 0 | 0.250 | 1.08 | 1.00 | $M_1$, $M_2$ in triode |

### Result

The PMOS-pair plots are the NMOS plots **mirrored about $V_{in,CM} = V_{DD}/2$**, with the outputs referred to ground:

- **$I_{D1}$, $I_{D2}$ versus $V_{in,CM}$:** zero for $V_{in,CM} > V_{DD} - |V_{TH1}| \approx 2.2$ V (pair off, $M_3$ in deep triode). Rising as $V_{in,CM}$ decreases ($M_3$ in triode, acting as a resistor). Flat at $I_{SS}/2$ for $V_{in,CM} \le V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$, where $M_3$ saturates.
- **$V_P$ versus $V_{in,CM}$:** equal to $V_{DD}$ while the pair is off. Below 2.2 V it follows $V_P = V_{in,CM} + |V_{GS1}|$, a line of slope ≈ 1 that lies $|V_{GS1}|$ *above* the input and bends up to meet $V_{DD}$ with zero slope at $V_{in,CM} \to 2.2$ V.
- **$V_{out1}$, $V_{out2}$ versus $V_{in,CM}$:** $V_{out} = R_DI_{D1}$. Zero for $V_{in,CM} > 2.2$ V, rising as $V_{in,CM}$ decreases, flat at $R_DI_{SS}/2$ for $V_{in,CM} \le V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$.
- **Break points:** $V_{DD} - |V_{TH1}|$ (= 2.2 V) and $V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$. Lower edge of the useful range: $V_{in,CM} \ge R_DI_{SS}/2 - |V_{THP}|$, below which $M_1$, $M_2$ enter triode and the differential gain drops.

**Common mistake.** Copying the NMOS plots unchanged, with the current turning on as the common-mode level *rises* past $V_{TH}$. The PMOS pair turns on as $V_{in,CM}$ *falls* below $V_{DD} - |V_{THP}|$.

**Common mistake.** Drawing the outputs near $V_{DD}$, falling to $V_{DD} - R_DI_{SS}/2$. The load resistors go to ground, so $V_{out} = R_DI_D$ rises from zero to $R_DI_{SS}/2$.

**Common mistake.** Placing $V_P$ below $V_{in,CM}$. The source of a conducting PMOS is the *higher* terminal, $V_P = V_{in,CM} + |V_{GS1}|$, and $V_P$ goes to $V_{DD}$ (not ground) when the pair is off.
