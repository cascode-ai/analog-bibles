# Detailed solution - R011

**Approach.** The resistive divider $R_1$–$R_2$ sits between $V_{DD}$ and $V_X$, so the gate sees a fixed fraction of $V_{DD} - V_X$. Find $V_{SG}$ and $V_{SD}$ as functions of $V_X$, show that $M_1$ is saturated whenever it conducts, and then write the square-law current and transconductance. Both fall to zero at the value of $V_X$ where $V_{SG}$ drops to $|V_{TH}|$.

### Step 1 — Reading the circuit

From the figure:

- $R_1$ connects $V_{DD}$ to the gate of $M_1$; $R_2$ connects the gate to the bottom node;
- the bottom node is the drain of $M_1$ and is driven by $V_X$ (0 to 3 V);
- the source of $M_1$ is at $V_{DD} = 3$ V, and $I_X$ is the current flowing from $V_{DD}$ into the source (the divider current is separate and is not part of $I_X$);
- the bulk is tied to $V_{DD}$, i.e. to the source.

Since $V_X \le V_{DD}$, the $V_{DD}$ terminal is the higher one, so it is indeed the **source** of the PMOS for the whole sweep, and the $V_X$ node is the **drain**. Bulk and source are at the same potential, so $V_{BS} = 0$: **no body effect**, and $|V_{TH}| = 0.8$ V throughout.

Symbols: $V_{SG}$ = source–gate voltage, $V_{SD}$ = source–drain voltage, $V_{ov} = V_{SG} - |V_{TH}|$ (overdrive), $\beta_p = \mu_pC_{ox}W/L$ (device gain factor).

### Step 2 — Gate voltage from the divider

No current flows into the MOS gate, so $R_1$ and $R_2$ carry the same current

$$I_{R} = \frac{V_{DD} - V_X}{R_1 + R_2}.$$

The voltage across $R_1$ (from $V_{DD}$ down to the gate) is $I_R R_1$, so

$$V_G = V_{DD} - I_RR_1 = V_{DD} - (V_{DD} - V_X)\frac{R_1}{R_1 + R_2}.$$

The source–gate voltage is therefore the drop across $R_1$:

$$V_{SG} = V_{DD} - V_G = (V_{DD} - V_X)\frac{R_1}{R_1 + R_2} = k\,(3 - V_X),$$

where $k = R_1/(R_1 + R_2)$ is the divider fraction ($0 < k < 1$). The source–drain voltage is simply

$$V_{SD} = V_{DD} - V_X = 3 - V_X .$$

### Step 3 — $M_1$ is saturated whenever it is on

Saturation requires $V_{SD} \ge V_{SG} - |V_{TH}|$. Substitute:

$$3 - V_X \;\ge\; k(3 - V_X) - 0.8 .$$

Since $k < 1$ and $3 - V_X \ge 0$, the left side is at least $k(3 - V_X)$, which is larger than the right side by at least 0.8 V. The inequality always holds.

**Physical reason.** The gate sits *between* the source and the drain potentials (it is a tap on a divider between them), so $V_{SG} \le V_{SD}$. Then $V_{SD} \ge V_{SG} > V_{SG} - |V_{TH}|$. The drain is always "further away" from the source than the gate is, which is the saturation condition.

### Step 4 — Turn-off point

$M_1$ conducts while $V_{SG} > |V_{TH}|$:

$$
\begin{aligned}
k\,(3 - V_X) &> 0.8\\
3 - V_X &> \frac{0.8}{k}\\
V_X &< 3 - \frac{0.8}{k} = 3 - 0.8\,\frac{R_1 + R_2}{R_1} .
\end{aligned}
$$

Call this $V_{X,\mathrm{off}}$. For $V_X > V_{X,\mathrm{off}}$, $M_1$ is off.

For $M_1$ to be on at all in the range ($V_{X,\mathrm{off}} > 0$) we need $3k > 0.8$, i.e. $R_1/(R_1 + R_2) > 0.27$. We assume this; otherwise $I_X = 0$ and $g_m = 0$ over the whole sweep.

### Step 5 — Drain current $I_X$

In saturation (Step 3), with channel-length modulation neglected:

$$I_X = \tfrac12\beta_p\,(V_{SG} - |V_{TH}|)^2 = \tfrac12\beta_p\left[(3 - V_X)\frac{R_1}{R_1 + R_2} - 0.8\right]^2, \qquad 0 \le V_X < V_{X,\mathrm{off}},$$

and $I_X = 0$ for $V_X \ge V_{X,\mathrm{off}}$. The current flows from $V_{DD}$ into the source, along the arrow, so $I_X > 0$.

**Slope:**

$$\frac{dI_X}{dV_X} = \beta_p\,V_{ov}\cdot\frac{dV_{SG}}{dV_X} = -\beta_p\,k\,V_{ov} .$$

It is negative (the current falls as $V_X$ rises) and its magnitude shrinks with $V_{ov}$, reaching zero at $V_{X,\mathrm{off}}$. So $I_X$ is a **downward parabola-arc that meets the axis tangentially** at $V_{X,\mathrm{off}}$, then stays at zero.

**Value at $V_X = 0$:**

$$I_X(0) = \tfrac12\beta_p\,(3k - 0.8)^2 .$$

### Step 6 — Transconductance

In saturation,

$$g_m = \frac{\partial I_D}{\partial V_{SG}} = \beta_p\,(V_{SG} - |V_{TH}|) = \beta_p\left[(3 - V_X)\frac{R_1}{R_1 + R_2} - 0.8\right].$$

This is **linear in $V_X$**, with slope

$$\frac{dg_m}{dV_X} = -\beta_p\,\frac{R_1}{R_1 + R_2},$$

starting at $g_m(0) = \beta_p(3k - 0.8)$ and reaching zero at the same point $V_{X,\mathrm{off}}$. It stays zero beyond.

### Step 7 — A numerical example ($R_1 = R_2$)

The answer is general, but one case makes the sketch concrete. With $R_1 = R_2$, $k = 0.5$:

$$
\begin{aligned}
V_{SG} &= 0.5\,(3 - V_X),\\
V_{X,\mathrm{off}} &= 3 - \frac{0.8}{0.5} = 3 - 1.6 = 1.4\ \mathrm{V}.
\end{aligned}
$$

| $V_X$ (V) | $V_{SG}$ (V) | $V_{SD}$ (V) | $V_{ov}$ (V) | $I_X/\beta_p$ (V²) | $g_m/\beta_p$ (V) |
|---|---|---|---|---|---|
| 0 | 1.50 | 3.0 | 0.70 | 0.245 | 0.70 |
| 0.5 | 1.25 | 2.5 | 0.45 | 0.101 | 0.45 |
| 1.0 | 1.00 | 2.0 | 0.20 | 0.020 | 0.20 |
| 1.4 | 0.80 | 1.6 | 0 | 0 | 0 |
| 1.4 – 3 | 0.8 → 0 | 1.6 → 0 | off | 0 | 0 |

Sample line, $V_X = 0.5$ V: $V_{SG} = 0.5\times(3 - 0.5) = 1.25$ V, $V_{ov} = 1.25 - 0.8 = 0.45$ V, $I_X = \tfrac12\beta_p(0.45\ \mathrm{V})^2 = 0.101\beta_p\ \mathrm{V^2}$, $g_m = \beta_p(0.45\ \mathrm{V})$. In every row $V_{SD}$ is far above $V_{ov}$, confirming saturation.

A larger $R_1$ relative to $R_2$ (larger $k$) raises the starting current and pushes $V_{X,\mathrm{off}}$ toward $3 - 0.8 = 2.2$ V (the limit $k \to 1$, gate tied to $V_X$).

### Result

- $V_{SG} = (V_{DD} - V_X)\dfrac{R_1}{R_1 + R_2}$ (source at $V_{DD}$, no body effect since bulk = source), and $V_{SD} = V_{DD} - V_X \ge V_{SG}$, so **$M_1$ is saturated whenever it is on**.
- $$I_X = \tfrac12\beta_p\left[(3 - V_X)\frac{R_1}{R_1 + R_2} - 0.8\right]^2$$ for $V_X < 3 - 0.8(R_1 + R_2)/R_1$ (assuming $3R_1/(R_1 + R_2) > 0.8$ so that $M_1$ is on at $V_X = 0$). $I_X$ **falls quadratically** and touches zero tangentially at $V_X = V_{DD} - |V_{TH}|(R_1 + R_2)/R_1$; it is zero above.
- $$g_m = \beta_p\left[(3 - V_X)\frac{R_1}{R_1 + R_2} - 0.8\right],$$ a **straight line** falling with slope $-\beta_pR_1/(R_1 + R_2)$ to zero at the same point, and zero above.
- Example: $R_1 = R_2$ gives cut-off at $V_X = 1.4$ V, $I_X(0) = 0.245\beta_p$ and $g_m(0) = 0.7\beta_p$.

**Common mistake.** Inverting the divider ratio, i.e. writing $V_{SG} = (V_{DD} - V_X)R_2/(R_1 + R_2)$. The source–gate voltage is the drop across the resistor connected between the *source* ($V_{DD}$) and the gate, which is $R_1$.

**Common mistake.** Claiming that $M_1$ enters triode as $V_X$ rises toward $V_{DD}$. Because the gate is tapped between source and drain, $V_{SD} \ge V_{SG}$ always, so the device reaches cut-off before it could ever reach triode.

**Common mistake.** Drawing $I_X$ increasing with $V_X$. Raising $V_X$ shrinks the voltage across the divider and hence $V_{SG}$, so the PMOS is driven *less* hard and its current falls.
