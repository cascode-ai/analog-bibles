# Detailed solution - R012

**Approach.** The divider $R_1$–$R_2$ sits between $V_{DD}$ and $V_X$, and the source of the NMOS is the $V_X$ node. Express $V_{GS}$, $V_{DS}$ and $V_{SB}$ in terms of $V_X$, show that $M_1$ is saturated whenever it conducts, and then write the square-law current and the transconductance. The body effect (bulk grounded, source at $V_X$) raises $V_{TH}$ as $V_X$ rises and brings the cut-off point earlier.

### Step 1 — Reading the circuit

From the figure:

- the drain of $M_1$ is at $V_{DD} = 3$ V, and $I_X$ flows from $V_{DD}$ into the drain;
- the source of $M_1$ is the bottom node, driven by $V_X$ (0 to 3 V);
- $R_1$ connects $V_{DD}$ to the gate and $R_2$ connects the gate to the $V_X$ node;
- the bulk is grounded.

Since $V_X \le V_{DD}$, the $V_X$ node is the lower terminal, so it is indeed the **source** of the NMOS and the $V_{DD}$ terminal is the **drain**.

Symbols: $V_{ov} = V_{GS} - V_{TH}$ (overdrive), $\beta = \mu_nC_{ox}W/L$ (device gain factor), $V_{SB}$ (source–bulk voltage).

### Step 2 — Terminal voltages

**Gate voltage.** No current flows into the gate, so $R_1$ and $R_2$ carry the same current $(V_{DD} - V_X)/(R_1 + R_2)$, and the drop across $R_2$ (from gate down to $V_X$) is

$$V_G - V_X = (V_{DD} - V_X)\frac{R_2}{R_1 + R_2}.$$

So

$$
\begin{aligned}
V_{GS} &= V_G - V_X = (3 - V_X)\frac{R_2}{R_1 + R_2} = k\,(3 - V_X), \qquad k = \frac{R_2}{R_1 + R_2},\\
V_{DS} &= V_{DD} - V_X = 3 - V_X,\\
V_{SB} &= V_X - 0 = V_X .
\end{aligned}
$$

**Threshold with body effect** ($V_{TH0} = 0.7$ V, $\gamma = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V):

$$V_{TH}(V_X) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right)\ \mathrm{V}.$$

As $V_X$ rises the source moves further above the grounded bulk and $V_{TH}$ **increases**: 0.70 V at $V_X = 0$, 0.81 V at 0.5 V, 0.89 V at 1 V.

### Step 3 — Saturation whenever on

Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$:

$$3 - V_X \;\ge\; k(3 - V_X) - V_{TH}.$$

Since $k < 1$, the left side is at least $k(3 - V_X)$, and $V_{TH} > 0$, so the inequality always holds. **$M_1$ is saturated whenever it conducts.**

Physically, the gate is tapped from a divider between the drain ($V_{DD}$) and the source ($V_X$), so $V_{GS} \le V_{DS}$, and then certainly $V_{DS} > V_{GS} - V_{TH}$.

### Step 4 — Drain current

With channel-length modulation neglected, the square-law saturation current is

$$I_X = \tfrac12\beta\,(V_{GS} - V_{TH})^2 = \tfrac12\beta\left[(3 - V_X)\frac{R_2}{R_1 + R_2} - V_{TH}(V_X)\right]^2 .$$

We assume $3R_2/(R_1 + R_2) > 0.7$ V so that $M_1$ is on at $V_X = 0$; otherwise it is off over the whole sweep.

**How it varies.** Raising $V_X$ hurts the gate drive twice:

1. $V_{GS} = k(3 - V_X)$ shrinks, at a rate $k$ per volt;
2. $V_{TH}$ grows, at a rate $\eta = dV_{TH}/dV_{SB} = \gamma/(2\sqrt{0.9 + V_X})$ per volt ($0.237$ at $V_X = 0$, falling to about $0.16$ at $V_X = 1.2$ V).

So the overdrive falls at the rate $k + \eta$, and

$$\frac{dI_X}{dV_X} = -\beta\,V_{ov}\,(k + \eta).$$

The current falls, steeply at first and then more gently, and reaches zero **tangentially** (its slope vanishes with $V_{ov}$). The curve is approximately a parabola.

### Step 5 — Cut-off point

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

**Without body effect** the condition would be $k(3 - V_X) = 0.7$, i.e. $V_X = 3 - 0.7\,(R_1 + R_2)/R_2$. Because $V_{TH}$ grows with $V_X$, the real cut-off comes **earlier** (at a lower $V_X$) than this.

For $V_X > V_{X,\mathrm{off}}$: $I_X = 0$ and $g_m = 0$.

### Step 6 — Transconductance

In saturation,

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta\,(V_{GS} - V_{TH}) = \beta\left[(3 - V_X)\frac{R_2}{R_1 + R_2} - V_{TH}(V_X)\right].$$

Its slope versus $V_X$ is

$$\frac{dg_m}{dV_X} = -\beta\left(\frac{R_2}{R_1 + R_2} + \frac{dV_{TH}}{dV_X}\right) = -\beta\,(k + \eta),$$

steeper than the divider alone would give. Since $\eta$ changes only slowly (0.24 to 0.16), $g_m$ falls **almost linearly** to zero at $V_{X,\mathrm{off}}$ (very slightly concave up), and stays zero above.

### Step 7 — Numerical example ($R_1 = R_2$, $k = 0.5$)

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
- $$I_X = \tfrac12\beta\left[(3 - V_X)\frac{R_2}{R_1 + R_2} - V_{TH}(V_X)\right]^2$$ (assuming $3R_2/(R_1 + R_2) > 0.7$ V). It **falls quadratically** to zero at the cut-off point where $(3 - V_X)R_2/(R_1 + R_2) = V_{TH}(V_X)$. Because of the body effect this lies below the no-body-effect value $3 - 0.7(R_1 + R_2)/R_2$ (for $R_1 = R_2$: 1.16 V instead of 1.6 V). $I_X = 0$ above it.
- $$g_m = \beta\left[(3 - V_X)\frac{R_2}{R_1 + R_2} - V_{TH}(V_X)\right]$$ decreases **almost linearly** to zero, with slope magnitude $\beta\left[R_2/(R_1 + R_2) + dV_{TH}/dV_X\right]$, steeper than the divider alone gives. It is zero above cut-off.

**Common mistake.** Taking the source at ground or the gate voltage relative to ground. The source of $M_1$ is the $V_X$ node, so $V_{GS}$ is the drop across $R_2$ only, $(3 - V_X)R_2/(R_1 + R_2)$, which shrinks as $V_X$ rises; hence $I_X$ *decreases* with $V_X$.

**Common mistake.** Ignoring the body effect. The bulk is grounded while the source rises with $V_X$, so $V_{SB} = V_X$ raises the threshold by up to about 0.2 V in the conducting range and moves the cut-off point noticeably earlier.

**Common mistake.** Claiming triode operation as $V_X$ rises. The gate is always between source and drain potentials, so $V_{DS} \ge V_{GS}$; the device goes straight from saturation to cut-off.
