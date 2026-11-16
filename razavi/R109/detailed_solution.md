# Detailed solution - R109

**Approach.** $M_2$ is a diode-connected PMOS (gate tied to the drain node $X$), and $M_1$ is an NMOS current source with its gate at $V_b$. Write KCL at $X$, $I_X = I_{D1} - |I_{D2}|$. $M_2$'s current is a square law in $3 - V_X$ that vanishes at $V_X = V_{DD} - |V_{THP}| = 2.2$ V, and $M_1$'s current follows its triode-then-saturation output characteristic. Combine the two.

### Step 1 — The circuit and KCL

From the figure: $M_2$ (PMOS) has source and bulk at $V_{DD} = 3$ V, and its gate and drain are both connected to node $X$. $M_1$ (NMOS) has drain at $X$, gate at $V_b$, source and bulk at ground. The test source drives $X$, and $I_X$ flows into $X$. There is no body effect in either device.

**KCL at $X$.** Into the node: $I_X$ and $M_2$'s drain current (from $V_{DD}$). Out of the node: $M_1$'s drain current:

$$I_X = I_{D1} - |I_{D2}| .$$

### Step 2 — The diode-connected PMOS $M_2$

With gate and drain both at $X$:

$$V_{SG2} = V_{SD2} = 3 - V_X .$$

Since $V_{SD2} = V_{SG2} > V_{SG2} - |V_{THP}|$, **$M_2$ is saturated whenever it is on**. It conducts while $V_{SG2} > 0.8$ V, i.e. $V_X < 2.2$ V:

$$|I_{D2}| = \frac12\beta_p(3 - V_X - 0.8)^2 = \frac12\beta_p(2.2 - V_X)^2 \quad (V_X < 2.2\ \mathrm{V}), \qquad |I_{D2}| = 0 \quad (V_X \ge 2.2\ \mathrm{V}).$$

This current is largest at $V_X = 0$, $\frac12\beta_p(2.2)^2 = 2.42\,\beta_p$ (in V²), and **decreases quadratically to zero at $V_X = V_{DD} - |V_{THP}| = 2.2$ V**, joining zero with zero slope.

### Step 3 — The current source $M_1$

$V_{GS1} = V_b$ (fixed, $> 0.7$ V), $V_{DS1} = V_X$:

- **Triode, $V_X < V_b - 0.7$ V:** $I_{D1} = \beta_n\left[(V_b - 0.7)V_X - \tfrac12V_X^2\right]$, rising from 0;
- **Saturation, $V_X \ge V_b - 0.7$ V:** $I_{D1} = I_1 = \frac12\beta_n(V_b - 0.7)^2$.

### Step 4 — Combine: $I_X = I_{D1} - |I_{D2}|$

- **Start:** at $V_X = 0$, $I_{D1} = 0$, so
$$I_X(0) = -\tfrac12\beta_p(2.2\ \mathrm{V})^2 = -2.42\,\beta_p\ (\mathrm{V^2}) .$$
- **Rise:** both effects push $I_X$ up as $V_X$ increases: $I_{D1}$ grows (or is constant) and $|I_{D2}|$ shrinks. The slope is
$$\frac{dI_X}{dV_X} = g_{ds1} + g_{m2}, \qquad g_{ds1} = \beta_n(V_b - 0.7 - V_X)\ \text{(triode only)}, \quad g_{m2} = \beta_p(2.2 - V_X)\ (V_X < 2.2\ \mathrm{V}),$$
where $1/g_{m2}$ is the small-signal resistance of the diode-connected $M_2$. So **$I_X$ is monotonically increasing**.
- **Zero crossing** where $I_{D1} = |I_{D2}|$: the voltage at which the node would sit with the source removed. If $M_1$ is already saturated there, equate $I_1 = \tfrac12\beta_p(2.2 - V_X)^2$ and take the square root:
$$V_{X0} = 2.2\ \mathrm{V} - (V_b - 0.7)\sqrt{\frac{\beta_n}{\beta_p}},$$
valid when this lies above $V_b - 0.7$ V; otherwise the crossing falls in $M_1$'s triode region and follows from $\beta_n[(V_b - 0.7)V_X - V_X^2/2] = \tfrac12\beta_p(2.2 - V_X)^2$.
- **Final plateau:** for $V_X$ above **both** $V_b - 0.7$ V and 2.2 V, $M_2$ is off and $M_1$ is saturated:
$$I_X = I_1 = \tfrac12\beta_n(V_b - 0.7)^2 ,$$
flat up to 3 V (with channel-length modulation the slope would be $\lambda I_1$).

**Transition points:** $V_X = V_b - 0.7$ V ($M_1$ saturates; the slope loses the $g_{ds1}$ term) and $V_X = 2.2$ V ($M_2$ turns off). Their order depends on $V_b$; for a typical $V_b$ below 2.9 V, $M_1$ saturates first.

### Step 5 — A numerical example

For illustration take $V_b = 1.0$ V, $\beta_n = 4\ \mathrm{mA/V^2}$, $\beta_p = 1\ \mathrm{mA/V^2}$:

$$I_1 = \tfrac12(4\ \mathrm{mA/V^2})(0.3\ \mathrm{V})^2 = 0.18\ \mathrm{mA}\quad(M_1\ \text{saturates at}\ V_X = 0.3\ \mathrm{V}),\qquad I_X(0) = -2.42\ \mathrm{mA}.$$

**Zero crossing** (with $M_1$ saturated): $0.18 = \frac12(1)(2.2 - V_X)^2$ (in mA), so $2.2 - V_X = 0.6$ and $V_X = 1.6$ V.

| $V_X$ (V) | $I_{D1}$ (mA) | $\lvert I_{D2}\rvert$ (mA) | $I_X$ (mA) |
|---|---|---|---|
| 0 | 0 | 2.420 | −2.420 |
| 0.1 | 0.100 | 2.205 | −2.105 |
| 0.3 | 0.180 | 1.805 | −1.625 |
| 1.0 | 0.180 | 0.720 | −0.540 |
| 1.6 | 0.180 | 0.180 | 0 |
| 2.0 | 0.180 | 0.020 | 0.160 |
| 2.2 | 0.180 | 0 | 0.180 |
| 3.0 | 0.180 | 0 | 0.180 |

### Result

$$I_X = I_{D1} - |I_{D2}|$$

with $M_2$ diode-connected. $I_X$ starts at $-\tfrac12\beta_p(2.2\ \mathrm{V})^2 = -2.42\beta_p$, rises (both currents push it up), and is flat at $I_1 = \tfrac12\beta_n(V_b - 0.7)^2$ for $V_X$ above both $V_b - 0.7$ V and 2.2 V.

- **$M_2$:** $V_{SG} = V_{SD} = 3 - V_X$, saturated when on: $|I_{D2}| = \tfrac12\beta_p(2.2 - V_X)^2$ for $V_X < 2.2$ V, zero above.
- **$M_1$:** triode for $V_X < V_b - 0.7$ V ($\beta_n[(V_b - 0.7)V_X - V_X^2/2]$), saturated at $I_1$ above.
- $I_X$ is monotonically increasing, with a zero crossing where $I_{D1} = |I_{D2}|$ and a final value $I_1$ (slope $\lambda I_1$ with channel-length modulation).
- **Transition points:** $V_X = V_b - 0.7$ V ($M_1$ saturates), $V_X = 2.2$ V ($M_2$ turns off).

**Common mistake.** Treating $M_2$ as a current source with a fixed gate voltage, which gives a flat $-I_2$ segment. Its gate is tied to $X$, so $V_{SG2} = 3 - V_X$ shrinks as $V_X$ rises and its current falls quadratically.

**Common mistake.** Turning $M_2$ off at $V_X = 0.8$ V. A PMOS turns off when its source–gate voltage drops to $|V_{THP}|$; with the source at 3 V, that happens when the gate (here $V_X$) rises to $3 - 0.8 = 2.2$ V.

**Common mistake.** Drawing $I_X$ decreasing. Raising $V_X$ reduces the current that $M_2$ pushes into the source and increases (or keeps) the current $M_1$ draws from it, so $I_X$ can only rise.
