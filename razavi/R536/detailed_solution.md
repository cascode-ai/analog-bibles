# Detailed solution - R536

**Approach.** First explain why the core needs help: it has a stable zero-current state. Then follow the start-up network as $V_{DD}$ ramps up: $M_6$, $R_a$ and $R_b$ set the voltage at X, and $M_5$ conducts only while $V_X > V_{TH}$. Finally write KCL/KVL for the start-up branch at the final supply and require $V_X < V_{TH}$, so that $M_5$ is off in normal operation.

### Step 1 — The bias core and its degenerate state

Reading the figure:
- $M_3$ (PMOS) is diode-connected, and its gate–drain node is also the drain of $M_2$. $M_4$ mirrors $M_3$ and feeds the diode-connected NMOS $M_1$.
- $M_2$ (with $R_S$ in its source) is driven from the gate of $M_1$.
- The two branch currents are forced to be equal and set by $R_S$ and the device ratios, independent of $V_{DD}$.

**Zero-current state.** The loop equations are also satisfied with no current at all. If all transistors are off, $M_4$ supplies no current to $M_1$, so the gates of $M_1$/$M_2$ sit at 0 V. Then $M_2$ draws no current from $M_3$, so the gate of $M_3$/$M_4$ floats up toward $V_{DD}$, keeping $M_3$ and $M_4$ off. Nothing in the core can leave this state on its own. A start-up circuit must push it out and then get out of the way.

**Start-up circuit.**
- $R_a$ runs from $V_{DD}$ to node N, and $R_b$ from N to node X.
- $M_6$ (NMOS) has its gate at N, its drain at X and its source at ground.
- $M_5$ (NMOS) has its gate at X, its source at ground, and its drain at the gate/drain node of $M_3$ (the drain of $M_2$).

### Step 2 — How the start-up works during power-up

**(a) Low supply, $V_{DD} < V_{TH}$.** $M_6$ is off ($V_N < V_{TH}$), so no current flows in $R_a$ or $R_b$ (the gates of $M_5$ and $M_6$ draw none). Hence

$$V_X = V_N = V_{DD}.$$

**(b) $V_{DD}$ just above $V_{TH}$.** $V_X$ is above $V_{TH}$, so $M_5$ turns on and pulls current out of the gate/drain node of $M_3$. That lowers the gate of $M_3$/$M_4$:
1. $M_3$ and $M_4$ turn on;
2. $M_4$ drives current into the diode-connected $M_1$;
3. $M_1$ and $M_2$ turn on, and $M_2$ draws current from $M_3$, reinforcing step 1.

The core's own positive-feedback loop then regenerates to its normal operating point. The start-up only has to kick it, not supply its current.

**(c) Higher supply.** As $V_{DD}$ rises, $M_6$ conducts more. Its current $I_{D6}$ flows from $V_{DD}$ through $R_a$ and $R_b$ into the drain of $M_6$ (no other path exists at N or X). The voltage drop on $R_b$ pulls X below N:

$$V_X = V_N - I_{D6}R_b = V_{GS6} - I_{D6}R_b .$$

Once this falls below $V_{TH}$, $M_5$ turns off.

**Why $M_5$ must be off in normal operation.** Any current in $M_5$ is drawn from the gate/drain node of $M_3$ in addition to $I_{D2}$. $M_3$ would then carry $I_{D2} + I_{D5}$, and $M_4$ would mirror it into $M_1$. The two branch currents would no longer be equal, which upsets the bias point and destroys its supply independence, because $I_{D5}$ depends on $V_{DD}$ through $V_X$.

### Step 3 — Equations of the start-up branch at the final supply

**Current in $R_a$** (KVL from $V_{DD}$ to N; $V_N = V_{GS6}$ because N is the gate of $M_6$, whose source is grounded):

$$I_{D6} = I_{R_a} = \frac{V_{DD} - V_{GS6}}{R_a}.$$

**Voltage at X** (the same current flows through $R_b$, since the gate of $M_5$ draws none):

$$V_X = V_{GS6} - I_{D6}R_b = V_{GS6} - \frac{R_b}{R_a}\,(V_{DD} - V_{GS6}).$$

### Step 4 — The condition $V_X < V_{TH}$

Require

$$V_{GS6} - \frac{R_b}{R_a}(V_{DD} - V_{GS6}) < V_{TH}.$$

Rearranged, with $V_{DD} = 3$ V and $V_{TH} = 0.7$ V:

$$\boxed{\frac{R_b}{R_a}\,(3\ \mathrm{V} - V_{GS6}) > V_{GS6} - 0.7\ \mathrm{V}}$$

**Equivalent forms.**
- In terms of the current: $I_{D6}R_b > V_{GS6} - V_{TH}$. The drop on $R_b$ must exceed the overdrive of $M_6$.
- With the square law, $M_6$ is saturated ($V_{DS6} = V_X$, $V_{GS6} - V_{TH} = \sqrt{2I_{D6}/\beta_6}$, $\beta_6 = \mu_nC_{ox}(W/L)_6$). Square both sides of $I_{D6}R_b > \sqrt{2I_{D6}/\beta_6}$:
$$I_{D6}^2R_b^2 > \frac{2I_{D6}}{\beta_6} \quad\Longrightarrow\quad I_{D6} > \frac{2}{\beta_6R_b^2}.$$
- Since $g_{m6} = \sqrt{2\beta_6I_{D6}}$, this is the same as $g_{m6}R_b > 2$.

(Is $M_6$ really saturated? Its drain is at $V_X = V_{GS6} - I_{D6}R_b$ and its gate at $V_{GS6}$, so $V_{GD6} = I_{D6}R_b$. Saturation needs $V_{GD6} < V_{TH}$, i.e. $I_{D6}R_b < V_{TH}$, an additional mild constraint on the design.)

**Numerical example.** Suppose $M_6$ is sized so that $V_{GS6} = 0.9$ V at its final current (overdrive 0.2 V). Then

$$\frac{R_b}{R_a} > \frac{0.9 - 0.7}{3 - 0.9} = \frac{0.2}{2.1} = 0.095 .$$

For instance, $R_b/R_a = 0.2$ gives $V_X = 0.9 - 0.2\times2.1 = 0.48$ V, comfortably below 0.7 V. The saturation condition $I_{D6}R_b = 0.42\ \mathrm{V} < 0.7$ V also holds.

### Step 5 — Design remark: the start-up window

With the square law, $V_X - V_{TH} = \sqrt{2I_{D6}/\beta_6} - I_{D6}R_b$. This is positive only while $I_{D6} < 2/(\beta_6R_b^2)$. Its maximum, found by setting the derivative to zero, is at $I_{D6} = 1/(2\beta_6R_b^2)$ and equals $1/(2\beta_6R_b)$. So:
- $M_5$ conducts only during a window of low supply voltage, and only weakly. The window must cover the supply range in which the core is able to start (roughly $V_{DD} > V_{GS1} + |V_{GS3}|$), which is achieved by making $R_a$ large relative to $R_b$ so that $I_{D6}$ grows slowly with $V_{DD}$.
- The branch $R_a$–$R_b$–$M_6$ draws a static current $I_{D6}$, so $R_a$ is made large to save power.

### Result

**Operation.** The core can remain in its zero-current state. During power-up, before $M_6$ conducts, $V_X = V_N = V_{DD}$. Once $V_X > V_{TH}$, $M_5$ draws current from the gate/drain node of $M_3$ (the drain of $M_2$). $M_3$/$M_4$ turn on, $M_4$ drives $M_1$, $M_1$/$M_2$ turn on, and the core's positive-feedback loop settles at the normal operating point. As $V_{DD}$ rises, $M_6$ conducts $I_{D6} = (V_{DD} - V_{GS6})/R_a$ through $R_a$ and $R_b$ and pulls X down to $V_X = V_{GS6} - I_{D6}R_b$. When this is below $V_{TH}$, $M_5$ is off and no longer disturbs the equality of the two branch currents.

**Condition** at the final supply:

$$V_X = V_{GS6} - \frac{R_b}{R_a}(V_{DD} - V_{GS6}) < V_{TH}\quad\Longleftrightarrow\quad \frac{R_b}{R_a}(3\ \mathrm{V} - V_{GS6}) > V_{GS6} - 0.7\ \mathrm{V},$$

equivalently $I_{D6}R_b > V_{GS6} - V_{TH}$, i.e. $I_{D6} > 2/(\beta_6R_b^2)$, or $g_{m6}R_b > 2$.

**Common mistake.** Saying that $M_5$ injects current into the gate of $M_1$, or that it stays on permanently. $M_5$ is an NMOS whose drain sits at the $M_3$/$M_4$ gate node: it *pulls* that node down to turn on the PMOS mirror, and it must be off in steady state.

**Common mistake.** Reading the gate of $M_6$ as connected to X (a diode-connected $M_6$). The gate of $M_6$ is at N, the junction of $R_a$ and $R_b$. That is exactly why the drop $I_{D6}R_b$ can pull X *below* $V_{GS6}$ and hence below $V_{TH}$.

**Common mistake.** Reversing the requirement, i.e. demanding $V_X > V_{TH}$ in steady state "so that the start-up stays ready". A conducting $M_5$ adds a supply-dependent current to $M_3$ and spoils the reference. $V_X > V_{TH}$ is needed only during power-up.
