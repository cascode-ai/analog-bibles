# Detailed solution - R054

**Approach.** The two transistors are connected in parallel between node X and ground, with their gates tied to $V_G$, so $I_X$ is the sum of the NMOS and PMOS currents. Analyse each device separately with the square law (region boundaries, currents), add the currents to get the $I_X$–$V_X$ curves, and differentiate with respect to $V_G$ to get the equivalent transconductance.

### Step 1 — Reading the circuit

From the figure:

- **NMOS (left):** gate at $V_G$, drain at node X, source at ground.
- **PMOS (right):** gate also at $V_G$, one diffusion terminal at node X, the other at ground.
- The source $V_X$ drives node X, and $I_X$ is the current it delivers into X.

Both devices connect X to ground, so they are **in parallel**, and by KCL at node X

$$I_X = I_N + I_P ,$$

where $I_N$ and $I_P$ are the currents flowing from X to ground through the NMOS and the PMOS. Device parameters: $\beta_n = \mu_nC_{ox}(W/L)_n$, $\beta_p = \mu_pC_{ox}(W/L)_p$, $V_{THN} = 0.7$ V, $|V_{THP}| = 0.8$ V, and $\lambda = \gamma = 0$.

### Step 2 — The NMOS current

The NMOS has $V_{GS} = V_G$ and $V_{DS} = V_X$. Define its overdrive $V_{ovN} = V_G - 0.7$ V.

- **Cut-off** for $V_G \le 0.7$ V: $I_N = 0$.
- **Triode** for $V_X < V_G - 0.7$ V:
$$I_N = \beta_n\left[(V_G - 0.7)V_X - \frac{V_X^2}{2}\right].$$
- **Saturation** for $V_X \ge V_G - 0.7$ V (with $\lambda = 0$ the current is flat):
$$I_N = \frac12\,\beta_n\,(V_G - 0.7)^2 .$$

### Step 3 — The PMOS current

**Which terminal is the source?** For a PMOS the source is the terminal at the *higher* potential. With $V_X \ge 0$, that is node X; the grounded terminal is the drain. So

$$V_{SG} = V_X - V_G, \qquad V_{SD} = V_X - 0 = V_X .$$

**Turn-on.** The PMOS conducts when $V_{SG} > |V_{THP}|$:

$$V_X - V_G > 0.8\ \mathrm{V} \quad\Longleftrightarrow\quad V_X > V_G + 0.8\ \mathrm{V}.$$

So the PMOS is off for small $V_X$ and turns on only when $V_X$ rises 0.8 V above the gate.

**Region.** Saturation requires $V_{SD} \ge V_{SG} - |V_{THP}|$:

$$V_X \ge V_X - V_G - 0.8 \quad\Longleftrightarrow\quad V_G \ge -0.8\ \mathrm{V},$$

which always holds for $V_G \ge 0$. So whenever the PMOS conducts it is **saturated**: its drain (at ground) is far below its gate. The current is

$$I_P = \frac12\,\beta_p\,(V_X - V_G - 0.8)^2 \qquad (V_X > V_G + 0.8\ \mathrm{V}),$$

and $I_P = 0$ otherwise.

### Step 4 — $I_X$ versus $V_X$ with $V_G$ as a parameter

**Case $V_G > 0.7$ V** (NMOS on). Three segments as $V_X$ increases from 0:

1. $0 \le V_X \le V_G - 0.7$: NMOS in triode, PMOS off. $I_X = \beta_n[(V_G - 0.7)V_X - V_X^2/2]$, starting at the origin with slope $\beta_n(V_G - 0.7)$ and bending over (an inverted parabola).
2. $V_G - 0.7 \le V_X \le V_G + 0.8$: NMOS saturated, PMOS still off. **Flat plateau** at $I_X = \tfrac12\beta_n(V_G - 0.7)^2$, a 1.5-V-wide plateau.
3. $V_X > V_G + 0.8$: PMOS on and saturated. $I_X = \tfrac12\beta_n(V_G - 0.7)^2 + \tfrac12\beta_p(V_X - V_G - 0.8)^2$, a second, upward-curving parabolic rise.

For $V_G \ge 2.2$ V, the PMOS turn-on point $V_G + 0.8$ is beyond 3 V, so only segments 1 and 2 appear in the range.

**Case $V_G \le 0.7$ V** (NMOS off). $I_X = 0$ until $V_X = V_G + 0.8$, then $I_X = \tfrac12\beta_p(V_X - V_G - 0.8)^2$.

**Trends with $V_G$.** A larger $V_G$ extends the triode region, raises the plateau as $(V_G - 0.7)^2$ and pushes the PMOS turn-on to the right. A lower $V_G$ gives a lower plateau but an earlier, larger PMOS current, so **curves for different $V_G$ cross at high $V_X$**.

**Illustration** with $\beta_n = \beta_p = 1\ \mathrm{mA/V^2}$ (the sizes are not specified, so this is only an example). For $V_G = 1.5$ V: $V_{ovN} = 0.8$ V, the plateau is $\tfrac12(1)(0.8)^2 = 0.32$ mA from $V_X = 0.8$ V to 2.3 V, and at $V_X = 3$ V, $I_X = 0.32 + \tfrac12(1)(3 - 2.3)^2 = 0.32 + 0.245 = 0.565$ mA. Values of $I_X$ in mA:

| $V_X$ (V) | 0 | 0.25 | 0.5 | 0.75 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|
| $V_G = 0.5$ V | 0 | 0 | 0 | 0 | 0 | 0.020 | 0.245 | 0.72 | 1.445 |
| $V_G = 1.0$ V | 0 | 0.044 | 0.045 | 0.045 | 0.045 | 0.045 | 0.065 | 0.29 | 0.765 |
| $V_G = 1.5$ V | 0 | 0.169 | 0.275 | 0.319 | 0.32 | 0.32 | 0.32 | 0.34 | 0.565 |
| $V_G = 2.0$ V | 0 | 0.294 | 0.525 | 0.694 | 0.80 | 0.845 | 0.845 | 0.845 | 0.865 |
| $V_G = 2.5$ V | 0 | 0.419 | 0.775 | 1.069 | 1.30 | 1.575 | 1.62 | 1.62 | 1.62 |

At $V_X = 3$ V the $V_G = 0.5$ V curve (1.445 mA) lies above the $V_G = 1.0$ V and 1.5 V curves: the crossing mentioned above.

### Step 5 — Equivalent transconductance $\partial I_X/\partial V_G$

Differentiate $I_X = I_N + I_P$ with respect to $V_G$ at fixed $V_X$:

$$g_{m,eq} = \frac{\partial I_X}{\partial V_G} = \frac{\partial I_N}{\partial V_G} + \frac{\partial I_P}{\partial V_G} .$$

**NMOS term.**

- Triode: $\dfrac{\partial}{\partial V_G}\beta_n\left[(V_G - 0.7)V_X - \dfrac{V_X^2}{2}\right] = \beta_nV_X$.
- Saturation: $\dfrac{\partial}{\partial V_G}\tfrac12\beta_n(V_G - 0.7)^2 = \beta_n(V_G - 0.7)$.

**PMOS term** (when on): by the chain rule,

$$\frac{\partial}{\partial V_G}\tfrac12\beta_p(V_X - V_G - 0.8)^2 = \beta_p(V_X - V_G - 0.8)\cdot(-1) = -\beta_p(V_X - V_G - 0.8).$$

It is **negative**: raising the common gate voltage *reduces* the PMOS's $V_{SG}$ and turns it down. So $g_{m,eq} = g_{mN} - g_{mP}$, where $g_{mP} = \beta_p(V_X - V_G - 0.8)$ is the PMOS's own transconductance.

**Shape versus $V_X$ for $V_G > 0.7$ V:**

1. $0 \le V_X \le V_G - 0.7$: $g_{m,eq} = \beta_nV_X$, a straight line from 0 with slope $\beta_n$.
2. $V_G - 0.7 \le V_X \le V_G + 0.8$: constant $g_{m,eq} = \beta_n(V_G - 0.7)$.
3. $V_X > V_G + 0.8$: $g_{m,eq} = \beta_n(V_G - 0.7) - \beta_p(V_X - V_G - 0.8)$, falling linearly with slope $-\beta_p$. It crosses zero where the two terms are equal:
$$V_X = V_G + 0.8 + \frac{\beta_n}{\beta_p}(V_G - 0.7),$$
and is negative beyond that point.

**For $V_G \le 0.7$ V:** $g_{m,eq} = 0$ up to $V_X = V_G + 0.8$, then $-\beta_p(V_X - V_G - 0.8)$, negative and growing in magnitude.

**Illustration** ($\beta_n = \beta_p = 1\ \mathrm{mA/V^2}$), $g_{m,eq}$ in mS:

| $V_X$ (V) | 0 | 0.25 | 0.5 | 0.75 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|
| $V_G = 0.5$ V | 0 | 0 | 0 | 0 | 0 | −0.2 | −0.7 | −1.2 | −1.7 |
| $V_G = 1.0$ V | 0 | 0.25 | 0.3 | 0.3 | 0.3 | 0.3 | 0.1 | −0.4 | −0.9 |
| $V_G = 1.5$ V | 0 | 0.25 | 0.5 | 0.75 | 0.8 | 0.8 | 0.8 | 0.6 | 0.1 |
| $V_G = 2.0$ V | 0 | 0.25 | 0.5 | 0.75 | 1.0 | 1.3 | 1.3 | 1.3 | 1.1 |

For $V_G = 1$ V the zero crossing is at $V_X = 1.8 + 0.3 = 2.1$ V, consistent with the table (0.1 mS at 2.0 V, −0.4 mS at 2.5 V).

### Result

$$I_X = I_N + I_P, \qquad I_N = \begin{cases}0, & V_G \le 0.7\\ \beta_n[(V_G - 0.7)V_X - V_X^2/2], & V_X < V_G - 0.7\\ \tfrac12\beta_n(V_G - 0.7)^2, & V_X \ge V_G - 0.7\end{cases}, \qquad I_P = \begin{cases}0, & V_X \le V_G + 0.8\\ \tfrac12\beta_p(V_X - V_G - 0.8)^2, & V_X > V_G + 0.8\end{cases}$$

For $V_G > 0.7$ V the curve rises in the NMOS triode region, is flat at $\tfrac12\beta_n(V_G - 0.7)^2$ from $V_X = V_G - 0.7$ to $V_G + 0.8$, and then rises parabolically as the (always saturated) PMOS turns on. For $V_G \le 0.7$ V only the PMOS parabola appears. Larger $V_G$ raises the plateau and delays the PMOS turn-on (absent for $V_G > 2.2$ V), so curves can cross at high $V_X$.

$$g_{m,eq} = \frac{\partial I_X}{\partial V_G} = g_{mN} - g_{mP}:\quad \beta_nV_X\ \text{(NMOS triode)},\quad \beta_n(V_G - 0.7)\ \text{(plateau)},\quad \beta_n(V_G - 0.7) - \beta_p(V_X - V_G - 0.8)\ \text{(PMOS on)},$$

which falls with slope $-\beta_p$ once the PMOS conducts and becomes negative beyond $V_X = V_G + 0.8 + (\beta_n/\beta_p)(V_G - 0.7)$.

**Common mistake.** Taking the PMOS source at ground. That gives $V_{SG} = -V_G < 0$, a PMOS that never conducts, and a curve with no second rise; a related error lets the PMOS conduct already at small $V_X$. A PMOS's source is its higher-potential terminal, here node X, so it turns on only for $V_X > V_G + 0.8$ V, and then it is always saturated.

**Common mistake.** Adding the two transconductances as $g_{mN} + g_{mP}$. The gates are tied together, so a rise in $V_G$ turns the NMOS *up* but the PMOS *down*; the PMOS contribution is negative, and $g_{m,eq}$ can change sign.

**Common mistake.** Reading the devices as being in series. Both transistors run directly from X to ground, so their currents add; there is no intermediate node.
