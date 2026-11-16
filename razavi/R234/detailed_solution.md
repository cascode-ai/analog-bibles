# Detailed solution - R234

**Approach.** $V_X$ is the gate–source voltage of the diode-connected $M_1$, set by $I_{REF}$. If $V_Y = V_X$, then $M_2$ has the same $V_{GS}$ and $V_{DS}$ as $M_1$ and copies $I_{REF}$ exactly, so $M_3$ (same size) needs the same $V_{GS}$ as $M_1$. KVL from $V_b$ down to ground then gives $V_b$.

### Step 1 — The circuit

Reading the figure:

- $I_{REF}$ flows from $V_{DD}$ into node X, the drain of the diode-connected NMOS $M_1$ (gate tied to drain, source grounded).
- $M_2$ shares its gate with $M_1$ (gate at $V_X$), has its source grounded, and its drain at node Y.
- $M_3$ is the cascode device: gate at the bias voltage $V_b$, source at Y, drain at P, where the output current $I_{out}$ enters from the analog circuit above.

All three devices have $W/L = 40/0.5 = 80$, $\gamma = 0$ (no body effect, so every threshold is $V_{TH} = 0.7$ V even though the source of $M_3$ is above ground), and channel-length modulation is neglected.

### Step 2 — $V_X$ from the reference device

$M_1$ is diode-connected ($V_{DS1} = V_{GS1}$), so it is always saturated. The square law with $\lambda = 0$ gives

$$I_{REF} = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS1} - V_{TH}\right)^2 .$$

**Device parameter:**

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(80) = 10.72\ \mathrm{mA/V^2} .$$

**Overdrive** $V_{ov} = V_{GS} - V_{TH}$:

$$V_{ov} = \sqrt{\frac{2I_{REF}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2(0.3\ \mathrm{mA})}{10.72\ \mathrm{mA/V^2}}} = \sqrt{0.05597\ \mathrm{V^2}} = 0.237\ \mathrm{V} .$$

**Gate–source voltage:**

$$V_X = V_{GS1} = V_{TH} + V_{ov} = 0.7 + 0.237 = 0.937\ \mathrm{V} .$$

### Step 3 — What $V_Y = V_X$ implies for $M_2$ and $M_3$

**$M_2$.** Its gate is at $V_X$ and its source at ground, so $V_{GS2} = V_{GS1}$. If $V_Y = V_X$, then also $V_{DS2} = V_{DS1}$. $M_2$ then operates under exactly the same conditions as $M_1$ (same size, same $V_{GS}$, same $V_{DS}$), so

$$I_{D2} = I_{REF} = 0.3\ \mathrm{mA} .$$

(This is the purpose of choosing $V_Y = V_X$: with channel-length modulation present, the copy would still be exact, because both devices would have the same $V_{DS}$.)

**$M_3$.** It is in series with $M_2$, so $I_{D3} = I_{D2} = 0.3$ mA. Same size, same current, and the same threshold ($\gamma = 0$) as $M_1$, so

$$V_{GS3} = V_{GS1} = 0.937\ \mathrm{V} .$$

### Step 4 — KVL for $V_b$

Go from the gate of $M_3$ down to ground through its gate–source voltage and node Y:

$$V_b = V_{GS3} + V_Y .$$

Insert $V_Y = V_X = V_{GS1}$ and $V_{GS3} = V_{GS1}$:

$$V_b = V_{GS1} + V_{GS1} = 2V_{GS1} = 2(0.937\ \mathrm{V}) = 1.873\ \mathrm{V} .$$

**Intuition.** $V_b$ must equal the voltage of a stack of two diode-connected devices carrying $I_{REF}$. In practice, $V_b$ is often generated exactly that way: a diode-connected device stacked on top of $M_1$.

### Step 5 — Checks

- **$M_2$ saturated:** $V_{DS2} = V_Y = 0.937$ V $\ge V_{ov} = 0.237$ V ✓.
- **$M_3$ saturated** requires $V_{DS3} \ge V_{ov}$, i.e. $V_P \ge V_Y + V_{ov} = 0.937 + 0.237 = 1.173$ V. Equivalently $V_P \ge V_b - V_{TH} = 1.873 - 0.7 = 1.173$ V. This is the minimum voltage the analog circuit must leave at P. It is one threshold more than the minimum $2V_{ov}$ that a cascode could in principle work with, which is the price of setting $V_Y = V_X$.

### Result

$$V_X = V_{GS1} = 0.7 + \sqrt{\frac{2(0.3\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(80)}} = 0.937\ \mathrm{V}, \qquad V_b = V_Y + V_{GS3} = 2V_{GS} \approx 1.87\ \mathrm{V} .$$

**Common mistake.** Choosing $V_b = V_{GS} + V_{ov}$ or $V_b = V_{GS} + V_{TH}$, which is the biasing for maximum output swing (it puts $M_2$ at the edge of saturation). That gives $V_Y = V_{ov}$ or $V_{TH}$, not $V_Y = V_X$, so $M_2$ would not have the same $V_{DS}$ as $M_1$. The condition asked for here, $V_X = V_Y$, needs $V_Y = V_{GS}$ and therefore $V_b = 2V_{GS}$.

**Common mistake.** Using the wrong aspect ratio, e.g. $W/L = 40$ or $100$ instead of $40/0.5 = 80$. With the effective dimensions given, $W/L = 80$ and $\mu_nC_{ox}W/L = 10.72\ \mathrm{mA/V^2}$.

**Common mistake.** Adding a body-effect increase to $V_{TH3}$ because the source of $M_3$ sits above ground. The problem specifies $\gamma = 0$, so $V_{TH3} = 0.7$ V and $V_{GS3} = V_{GS1}$ exactly.
