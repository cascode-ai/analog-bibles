# Detailed solution - R025

**Approach.** Write the terminal voltages of $M_1$ at $t = 0$. The capacitor starts at the same voltage as the drain supply, so the transistor has zero drain–source voltage and cannot carry any current, whatever its gate voltage. The circuit therefore starts, and stays, in equilibrium. We check every possible range of $V_b$ and the stability of this state.

### Step 1 — Reading the circuit

From the figure:

- the drain of $M_1$ is connected to $V_{DD} = 3$ V, and $I_X$ is the current flowing from $V_{DD}$ into $M_1$;
- the gate is at a constant voltage $V_b$ (not specified);
- the lower terminal of $M_1$ is node X, the top plate of $C_1$ (whose other plate is grounded);
- the bulk is grounded.

The capacitor can change its voltage only through the current of $M_1$:

$$I_X = C_1\frac{dV_X}{dt} .$$

So $V_X$ changes only if $M_1$ conducts.

### Step 2 — Terminal voltages at $t = 0$

At $t = 0$, $V_X = 3$ V. The two diffusion terminals of $M_1$ are at

$$V_{\text{upper}} = V_{DD} = 3\ \mathrm{V}, \qquad V_{\text{lower}} = V_X = 3\ \mathrm{V},$$

so

$$V_{DS} = 3\ \mathrm{V} - 3\ \mathrm{V} = 0 .$$

### Step 3 — No current can flow, for any $V_b$

**Case $V_b - 3\ \mathrm{V} \le V_{TH}$ (gate not far enough above the channel terminals).** Here $V_{GS} = V_b - V_X = V_b - 3$ V is at most $V_{TH}$ (with $V_{TH}$ including whatever body effect the 3-V source–bulk voltage produces, so $V_{TH} \ge 0.7$ V). No channel forms and $M_1$ is **off**: $I_X = 0$. This covers every $V_b \le V_{DD}$, for which $V_{GS} \le 0$.

**Case $V_b - 3\ \mathrm{V} > V_{TH}$ (a channel exists).** The device is on, with $V_{DS} = 0 < V_{GS} - V_{TH}$, so it is in the triode region:

$$I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\right] = \beta\left[(V_{GS} - V_{TH})\cdot0 - 0\right] = 0 .$$

The channel is a resistor with *no voltage across it*, so again $I_X = 0$.

In both cases $I_X(0) = 0$, hence $dV_X/dt = I_X/C_1 = 0$, and $V_X$ does not move from 3 V. Since nothing changes, the same argument holds at every later instant:

$$V_X(t) = 3\ \mathrm{V}, \qquad I_X(t) = 0 \qquad\text{for all } t \ge 0 .$$

**Physical intuition.** A transistor is a controlled *conductance*, not a source of energy: it can only let current flow from a higher potential to a lower one. With both of its channel terminals at the same potential there is nothing to drive a current, however strongly the gate turns the channel on.

### Step 4 — Is this equilibrium stable?

Suppose a small disturbance (for example junction leakage) lowers $V_X$ slightly below 3 V.

- If $V_b - V_X > V_{TH}$, $M_1$ conducts from $V_{DD}$ into node X and **recharges** $C_1$. Acting as a source follower, it can pull X up to $V_b - V_{TH}$ at most: all the way back to 3 V if $V_b - V_{TH} \ge 3$ V, otherwise up to $V_b - V_{TH}$.
- If $V_b - V_X < V_{TH}$, $M_1$ stays off and $V_X$ drifts only as slowly as the leakage dictates.

In neither case does $M_1$ ever *discharge* $C_1$: current can only flow from $V_{DD}$ (the higher terminal) into X, never the reverse, because $V_X$ cannot exceed $V_{DD}$ here. So in the ideal circuit $V_X$ stays at 3 V.

### Step 5 — Contrast with a capacitor starting at 0 V

The circuit itself is a source follower driving $C_1$. If $C_1$ started at 0 V (and $V_b > V_{TH}$), $M_1$ would charge it, and $V_X$ would rise toward $V_b - V_{TH}$, approaching that value more and more slowly as the overdrive vanishes. Starting at 3 V, however, the capacitor is already at the highest voltage the circuit can supply, so there is nothing to do. Seeing this difference is the point of the problem.

### Result

**Nothing happens.**

$$V_X(t) = 3\ \mathrm{V} \quad\text{and}\quad I_X(t) = 0 \quad\text{for all } t.$$

Node X (the source side of $M_1$) starts at $V_X = 3\ \mathrm{V} = V_{DD}$, so $V_{DS} = 0$ and no drain current can flow, whatever $V_b$ is:

- for $V_b \le V_{DD}$ the device is also off, since $V_{GS} = V_b - 3 \le 0$;
- for very large $V_b$ the channel is on but has zero voltage across it.

Both sketches are horizontal lines: $V_X$ at 3 V, $I_X$ at 0.

**Common mistake.** Drawing $C_1$ discharging through $M_1$ toward $V_b - V_{TH}$, or charging toward it, by copying the result of a source follower. The follower's output can only be *raised* by $M_1$ (current flows from $V_{DD}$ into X), and here X already sits at $V_{DD}$.

**Common mistake.** Arguing only that "$M_1$ is off". That is true for $V_b \le 3.7$ V or so, but not for a very large $V_b$. The complete reason is $V_{DS} = 0$: even a fully-on channel carries no current without a voltage across it.
