# Detailed solution - R012

**Approach.** The divider $R_1$–$R_2$ sits between $V_{DD}$ and $V_X$, and the source of the NMOS is the $V_X$ node. Express $V_{GS}$, $V_{DS}$ and $V_{SB}$ in terms of $V_X$, show that $M_1$ is saturated whenever it conducts, and write the square-law current and transconductance. The body effect (bulk grounded, source at $V_X$) raises $V_{TH}$ as $V_X$ rises and brings the cut-off point earlier.

### Step 1 — Terminal voltages

Since $V_X \le V_{DD}$, the lower-potential terminal, the $V_X$ node, is the source and the $V_{DD}$ terminal is the drain. The gate draws no current, so $R_1$ and $R_2$ carry $(V_{DD} - V_X)/(R_1 + R_2)$, and $V_{GS}$ is the drop across $R_2$:

$$
\begin{aligned}
V_{GS} &= V_G - V_X = (3 - V_X)\frac{R_2}{R_1 + R_2} = k\,(3 - V_X), \qquad k = \frac{R_2}{R_1 + R_2},\\
V_{DS} &= V_{DD} - V_X = 3 - V_X,\\
V_{SB} &= V_X - 0 = V_X .
\end{aligned}
$$

With the body effect,

$$V_{TH}(V_X) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right)\ \mathrm{V},$$

which **increases** as the source rises above the grounded bulk: 0.70 V at $V_X = 0$, 0.81 V at 0.5 V, 0.89 V at 1 V.

### Step 2 — Saturation whenever on

Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$:

$$3 - V_X \;\ge\; k(3 - V_X) - V_{TH}.$$

Since $k < 1$, the left side is at least $k(3 - V_X)$, and $V_{TH} > 0$, so the inequality always holds: **$M_1$ is saturated whenever it conducts**. (The gate is tapped between drain and source, so $V_{GS} \le V_{DS}$.)

### Step 3 — Drain current

Neglecting channel-length modulation,

$$I_X = \tfrac12\beta\,(V_{GS} - V_{TH})^2 = \tfrac12\beta\left[(3 - V_X)\frac{R_2}{R_1 + R_2} - V_{TH}(V_X)\right]^2 ,$$

assuming $3R_2/(R_1 + R_2) > 0.7$ V so that $M_1$ is on at $V_X = 0$ (otherwise it is off over the whole sweep).

Raising $V_X$ hurts the gate drive twice: $V_{GS} = k(3 - V_X)$ shrinks at a rate $k$ per volt, and $V_{TH}$ grows at a rate $\eta = dV_{TH}/dV_{SB} = \gamma/(2\sqrt{0.9 + V_X})$ per volt ($0.237$ at $V_X = 0$, falling to about $0.16$ at $V_X = 1.2$ V). So

$$\frac{dI_X}{dV_X} = -\beta\,V_{ov}\,(k + \eta).$$

The current falls, steeply at first and then more gently, and reaches zero **tangentially** (its slope vanishes with $V_{ov}$): approximately a parabola.

### Step 4 — Cut-off point

$M_1$ turns off where $V_{GS} = V_{TH}$:

$$k\,(3 - V_X) = 0.7 + 0.45\sqrt{0.9 + V_X} - 0.45\sqrt{0.9}.$$

With $u = \sqrt{0.9 + V_X}$ (so $V_X = u^2 - 0.9$) and $0.7 - 0.45\sqrt{0.9} = 0.7 - 0.4269 = 0.2731$:

$$
\begin{aligned}
k\,(3.9 - u^2) &= 0.2731 + 0.45u\\
k\,u^2 + 0.45u + (0.2731 - 3.9k) &= 0,\\
u &= \frac{-0.45 + \sqrt{0.2025 - 4k\,(0.2731 - 3.9k)}}{2k},\\
V_{X,\mathrm{off}} &= u^2 - 0.9 .
\end{aligned}
$$

**Without body effect** the condition would be $k(3 - V_X) = 0.7$, i.e. $V_X = 3 - 0.7\,(R_1 + R_2)/R_2$. Because $V_{TH}$ grows with $V_X$, the real cut-off comes **earlier** (at a lower $V_X$). For $V_X > V_{X,\mathrm{off}}$: $I_X = 0$ and $g_m = 0$.

### Step 5 — Transconductance

In saturation,

$$g_m = \beta\,(V_{GS} - V_{TH}) = \beta\left[(3 - V_X)\frac{R_2}{R_1 + R_2} - V_{TH}(V_X)\right],$$

with slope

$$\frac{dg_m}{dV_X} = -\beta\left(\frac{R_2}{R_1 + R_2} + \frac{dV_{TH}}{dV_X}\right) = -\beta\,(k + \eta),$$

steeper than the divider alone would give. Since $\eta$ changes only slowly (0.24 to 0.16), $g_m$ falls **almost linearly** to zero at $V_{X,\mathrm{off}}$ (very slightly concave up), and stays zero above.

### Step 6 — Numerical example ($R_1 = R_2$, $k = 0.5$)

**Cut-off:**

$$u = \frac{-0.45 + \sqrt{0.2025 - 4(0.5)(0.2731 - 1.95)}}{2(0.5)} = -0.45 + \sqrt{0.2025 + 3.3538} = -0.45 + 1.8858 = 1.4358,$$

$$V_{X,\mathrm{off}} = 1.4358^2 - 0.9 = 2.0616 - 0.9 = 1.16\ \mathrm{V}.$$

Check: $V_{GS} = 0.5(3 - 1.16) = 0.92$ V and $V_{TH} = 0.7 + 0.45(1.4358 - 0.9487) = 0.92$ V. ✓ Without body effect the cut-off would be at $3 - 0.7\times2 = 1.6$ V, so the body effect moves it by about 0.44 V.

| $V_X$ (V) | $V_{GS}$ (V) | $V_{TH}$ (V) | $V_{ov}$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---|---|---|---|---|
| 0 | 1.500 | 0.700 | 0.800 | 0.320 | 0.80 |
| 0.25 | 1.375 | 0.756 | 0.619 | 0.192 | 0.62 |
| 0.5 | 1.250 | 0.806 | 0.444 | 0.099 | 0.44 |
| 0.75 | 1.125 | 0.851 | 0.274 | 0.0375 | 0.27 |
| 1.0 | 1.000 | 0.893 | 0.107 | 0.0057 | 0.11 |
| 1.16 | 0.919 | 0.919 | 0 | 0 | 0 |
| 1.16 – 3 | 0.92 → 0 | 0.92 → 1.16 | < 0 (off) | 0 | 0 |

Sample line, $V_X = 0.5$ V: $V_{GS} = 0.5(3 - 0.5) = 1.25$ V; $V_{TH} = 0.7 + 0.45(\sqrt{1.4} - 0.9487) = 0.806$ V; $V_{ov} = 1.25 - 0.806 = 0.444$ V; $I_X = \tfrac12\beta(0.444\ \mathrm{V})^2 = 0.099\beta\ \mathrm{V^2}$; $g_m = 0.444\beta$. In every row $V_{DS} = 3 - V_X \ge 1.84$ V, far above $V_{ov}$, confirming saturation.

### Result

- $V_{GS} = (3 - V_X)\dfrac{R_2}{R_1 + R_2}$, $V_{DS} = 3 - V_X \ge V_{GS}$, and $V_{SB} = V_X$, so $V_{TH} = 0.7 + 0.45(\sqrt{0.9 + V_X} - \sqrt{0.9})$ rises with $V_X$. $M_1$ (drain at $V_{DD}$, source at $V_X$) is **saturated whenever it is on**.
- Assuming $3R_2/(R_1 + R_2) > 0.7$ V, $I_X$ **falls quadratically** to zero at the cut-off point where $(3 - V_X)R_2/(R_1 + R_2) = V_{TH}(V_X)$, and is zero above it:
$$I_X = \tfrac12\beta\left[(3 - V_X)\frac{R_2}{R_1 + R_2} - V_{TH}(V_X)\right]^2 .$$
Because of the body effect the cut-off lies below the no-body-effect value $3 - 0.7(R_1 + R_2)/R_2$ (for $R_1 = R_2$: 1.16 V instead of 1.6 V).
- $g_m$ decreases **almost linearly** to zero, with slope magnitude $\beta\left[R_2/(R_1 + R_2) + dV_{TH}/dV_X\right]$, steeper than the divider alone gives, and is zero above cut-off:
$$g_m = \beta\left[(3 - V_X)\frac{R_2}{R_1 + R_2} - V_{TH}(V_X)\right].$$

**Common mistake.** Taking the source at ground. The source is the $V_X$ node, so $V_{GS}$ is the drop across $R_2$ only, $(3 - V_X)R_2/(R_1 + R_2)$, which shrinks as $V_X$ rises; hence $I_X$ *decreases* with $V_X$.

**Common mistake.** Ignoring the body effect. $V_{SB} = V_X$ raises the threshold by up to about 0.2 V in the conducting range and moves the cut-off point noticeably earlier.

**Common mistake.** Claiming triode operation as $V_X$ rises. Since $V_{DS} \ge V_{GS}$, the device goes straight from saturation to cut-off.
