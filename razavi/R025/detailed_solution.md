# Detailed solution - R025

**Approach.** The capacitor starts at the same voltage as the drain supply, so $M_1$ has zero drain–source voltage and cannot carry any current, whatever its gate voltage. The circuit therefore starts, and stays, in equilibrium. Check every range of $V_b$ and the stability of this state.

### Step 1 — Terminal voltages at $t = 0$

$C_1$ changes its voltage only through the current of $M_1$:

$$I_X = C_1\frac{dV_X}{dt} .$$

At $t = 0$, $V_X = 3$ V, so both channel terminals of $M_1$ are at 3 V:

$$V_{\text{upper}} = V_{DD} = 3\ \mathrm{V}, \qquad V_{\text{lower}} = V_X = 3\ \mathrm{V}, \qquad V_{DS} = 3\ \mathrm{V} - 3\ \mathrm{V} = 0 .$$

### Step 2 — No current can flow, for any $V_b$

**Case $V_b - 3\ \mathrm{V} \le V_{TH}$.** $V_{GS} = V_b - V_X = V_b - 3$ V is at most $V_{TH}$ (which, with the body effect of the 3-V source–bulk voltage, is at least 0.7 V), so $M_1$ is **off** and $I_X = 0$. This covers every $V_b \le V_{DD}$, for which $V_{GS} \le 0$.

**Case $V_b - 3\ \mathrm{V} > V_{TH}$.** A channel exists, and with $V_{DS} = 0 < V_{GS} - V_{TH}$ the device is in triode:

$$I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\right] = \beta\left[(V_{GS} - V_{TH})\cdot0 - 0\right] = 0 .$$

The channel is a resistor with *no voltage across it*, so again $I_X = 0$.

In both cases $I_X(0) = 0$, hence $dV_X/dt = I_X/C_1 = 0$ and $V_X$ does not move from 3 V; the same argument then holds at every later instant:

$$V_X(t) = 3\ \mathrm{V}, \qquad I_X(t) = 0 \qquad\text{for all } t \ge 0 .$$

A transistor is a controlled conductance: with both channel terminals at the same potential, nothing drives a current, however strongly the gate turns the channel on.

### Step 3 — Is this equilibrium stable?

Suppose a small disturbance (for example junction leakage) lowers $V_X$ slightly below 3 V.

- If $V_b - V_X > V_{TH}$, $M_1$ conducts from $V_{DD}$ into node X and **recharges** $C_1$. As a source follower it can pull X up to $V_b - V_{TH}$ at most: all the way back to 3 V if $V_b - V_{TH} \ge 3$ V, otherwise up to $V_b - V_{TH}$.
- If $V_b - V_X < V_{TH}$, $M_1$ stays off and $V_X$ drifts only as slowly as the leakage dictates.

In neither case does $M_1$ ever *discharge* $C_1$: current can only flow from $V_{DD}$ into X, never the reverse, because $V_X$ cannot exceed $V_{DD}$ here. So in the ideal circuit $V_X$ stays at 3 V.

### Step 4 — Contrast with a capacitor starting at 0 V

The circuit is a source follower driving $C_1$. If $C_1$ started at 0 V (and $V_b > V_{TH}$), $M_1$ would charge it, and $V_X$ would rise toward $V_b - V_{TH}$, ever more slowly as the overdrive vanishes. Starting at 3 V, the capacitor is already at the highest voltage the circuit can supply, so nothing happens.

### Result

**Nothing happens.**

$$V_X(t) = 3\ \mathrm{V} \quad\text{and}\quad I_X(t) = 0 \quad\text{for all } t.$$

Node X (the source side of $M_1$) starts at $V_X = 3\ \mathrm{V} = V_{DD}$, so $V_{DS} = 0$ and no drain current can flow, whatever $V_b$ is:

- for $V_b \le V_{DD}$ the device is also off, since $V_{GS} = V_b - 3 \le 0$;
- for very large $V_b$ the channel is on but has zero voltage across it.

Both sketches are horizontal lines: $V_X$ at 3 V, $I_X$ at 0.

**Common mistake.** Drawing $C_1$ discharging or charging toward $V_b - V_{TH}$ by copying the source-follower result. $M_1$ can only *raise* X (current flows from $V_{DD}$ into X), and X already sits at $V_{DD}$.

**Common mistake.** Arguing only that "$M_1$ is off". That holds for $V_b \le 3.7$ V or so, but not for a very large $V_b$; the complete reason is $V_{DS} = 0$.
