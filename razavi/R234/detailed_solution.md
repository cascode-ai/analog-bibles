# Detailed solution - R234

**Approach.** $V_X$ is the $V_{GS}$ of the diode-connected $M_1$, set by $I_{REF}$. If $V_Y = V_X$, then $M_2$ has the same $V_{GS}$ and $V_{DS}$ as $M_1$ and copies $I_{REF}$ exactly, so $M_3$ (same size) needs the same $V_{GS}$ as $M_1$. KVL from $V_b$ to ground then gives $V_b$.

### Step 1 — $V_X$ from the reference device

All three devices have $W/L = 40/0.5 = 80$ and, with $\gamma = 0$, $V_{TH} = 0.7$ V, even for $M_3$, whose source is above ground. $M_1$ is diode-connected and saturated, so

$$I_{REF} = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS1} - V_{TH}\right)^2, \qquad \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(80) = 10.72\ \mathrm{mA/V^2} ,$$

$$V_{ov} = \sqrt{\frac{2I_{REF}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2(0.3\ \mathrm{mA})}{10.72\ \mathrm{mA/V^2}}} = \sqrt{0.05597\ \mathrm{V^2}} = 0.237\ \mathrm{V} ,$$

$$V_X = V_{GS1} = V_{TH} + V_{ov} = 0.7 + 0.237 = 0.937\ \mathrm{V} .$$

### Step 2 — What $V_Y = V_X$ implies for $M_2$ and $M_3$

$M_2$ has $V_{GS2} = V_{GS1}$, and with $V_Y = V_X$ also $V_{DS2} = V_{DS1}$. Same size, $V_{GS}$ and $V_{DS}$ as $M_1$, so

$$I_{D2} = I_{REF} = 0.3\ \mathrm{mA}$$

(an exact copy even if channel-length modulation were present). $M_3$ is in series with $M_2$, so $I_{D3} = 0.3$ mA; with the same size, current and threshold as $M_1$,

$$V_{GS3} = V_{GS1} = 0.937\ \mathrm{V} .$$

### Step 3 — KVL for $V_b$

$$V_b = V_{GS3} + V_Y = V_{GS1} + V_{GS1} = 2V_{GS1} = 2(0.937\ \mathrm{V}) = 1.873\ \mathrm{V} .$$

$V_b$ equals the voltage across a stack of two diode-connected devices carrying $I_{REF}$, which is how it is often generated in practice.

### Step 4 — Checks

- **$M_2$ saturated:** $V_{DS2} = V_Y = 0.937$ V $\ge V_{ov} = 0.237$ V ✓.
- **$M_3$ saturated** requires $V_P \ge V_Y + V_{ov} = 0.937 + 0.237 = 1.173$ V, equivalently $V_P \ge V_b - V_{TH} = 1.873 - 0.7 = 1.173$ V. This is the minimum voltage the circuit above must leave at P: one threshold more than the minimum $2V_{ov}$ of a cascode, the price of setting $V_Y = V_X$.

### Result

$$V_X = V_{GS1} = 0.7 + \sqrt{\frac{2(0.3\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(80)}} = 0.937\ \mathrm{V}, \qquad V_b = V_Y + V_{GS3} = 2V_{GS} \approx 1.87\ \mathrm{V} .$$

**Common mistake.** Choosing $V_b = V_{GS} + V_{ov}$ or $V_b = V_{GS} + V_{TH}$, the biasing for maximum output swing. That gives $V_Y = V_{ov}$ or $V_{TH}$, not $V_Y = V_X$; the condition asked for needs $V_Y = V_{GS}$ and therefore $V_b = 2V_{GS}$.

**Common mistake.** Using $W/L = 40$ or $100$ instead of $40/0.5 = 80$ ($\mu_nC_{ox}W/L = 10.72\ \mathrm{mA/V^2}$).

**Common mistake.** Adding a body-effect increase to $V_{TH3}$ because the source of $M_3$ is above ground. With $\gamma = 0$, $V_{GS3} = V_{GS1}$ exactly.
