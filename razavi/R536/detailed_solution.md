# Detailed solution - R536

**Approach.** The core has a stable zero-current state. Follow the start-up network as $V_{DD}$ ramps up: $M_6$, $R_a$ and $R_b$ set $V_X$, and $M_5$ conducts only while $V_X > V_{TH}$. Then write the start-up branch equations at the final supply and require $V_X < V_{TH}$, so that $M_5$ is off in normal operation.

### Step 1 — The degenerate state and the start-up connections

The loop equations of the core are also satisfied with no current: with everything off, $M_4$ supplies nothing to the diode-connected $M_1$, so the gates of $M_1$/$M_2$ sit at 0 V; $M_2$ then draws nothing from $M_3$, so the gate of $M_3$/$M_4$ floats up toward $V_{DD}$, keeping them off. A start-up circuit must push the core out of this state and then get out of the way.

Call N the junction of $R_a$ and $R_b$, which is the gate of $M_6$. $M_6$ has its drain at X and its source at ground; $M_5$ has its gate at X and its drain at the gate/drain node of $M_3$ (the drain of $M_2$).

### Step 2 — How the start-up works during power-up

**(a) $V_{DD} < V_{TH}$.** $M_6$ is off, and the gates of $M_5$, $M_6$ draw no current, so nothing flows in $R_a$, $R_b$:

$$V_X = V_N = V_{DD}.$$

**(b) $V_{DD}$ just above $V_{TH}$.** $V_X > V_{TH}$, so $M_5$ turns on and pulls the gate of $M_3$/$M_4$ down: $M_3$ and $M_4$ turn on, $M_4$ drives current into $M_1$, and $M_1$/$M_2$ turn on, with $M_2$ drawing current from $M_3$ and reinforcing the process. The core's positive-feedback loop regenerates to its normal operating point; the start-up only kicks it.

**(c) Higher supply.** $M_6$ conducts more, and its current $I_{D6}$ flows from $V_{DD}$ through $R_a$ and $R_b$ into its drain, so the drop on $R_b$ pulls X below N:

$$V_X = V_N - I_{D6}R_b = V_{GS6} - I_{D6}R_b .$$

Once this falls below $V_{TH}$, $M_5$ turns off. It must: any current in $M_5$ adds to $I_{D2}$ in $M_3$, which $M_4$ mirrors into $M_1$, so the two branch currents would no longer be equal, and the bias would depend on $V_{DD}$ through $V_X$.

### Step 3 — Equations of the start-up branch at the final supply

With $V_N = V_{GS6}$ (gate of $M_6$, source grounded):

$$I_{D6} = I_{R_a} = \frac{V_{DD} - V_{GS6}}{R_a},$$

and the same current flows through $R_b$ (the gate of $M_5$ draws none):

$$V_X = V_{GS6} - I_{D6}R_b = V_{GS6} - \frac{R_b}{R_a}\,(V_{DD} - V_{GS6}).$$

### Step 4 — The condition $V_X < V_{TH}$

$$V_{GS6} - \frac{R_b}{R_a}(V_{DD} - V_{GS6}) < V_{TH}$$

with $V_{DD} = 3$ V and $V_{TH} = 0.7$ V gives

$$\boxed{\frac{R_b}{R_a}\,(3\ \mathrm{V} - V_{GS6}) > V_{GS6} - 0.7\ \mathrm{V}}$$

**Equivalent forms.**
- $I_{D6}R_b > V_{GS6} - V_{TH}$: the drop on $R_b$ must exceed the overdrive of $M_6$.
- With $M_6$ saturated ($V_{GS6} - V_{TH} = \sqrt{2I_{D6}/\beta_6}$), squaring $I_{D6}R_b > \sqrt{2I_{D6}/\beta_6}$:
$$I_{D6}^2R_b^2 > \frac{2I_{D6}}{\beta_6} \quad\Longrightarrow\quad I_{D6} > \frac{2}{\beta_6R_b^2}.$$
- Since $g_{m6} = \sqrt{2\beta_6I_{D6}}$, this is $g_{m6}R_b > 2$.

$M_6$ is saturated if $V_{GD6} = I_{D6}R_b < V_{TH}$, a mild additional constraint.

**Numerical example.** With $V_{GS6} = 0.9$ V at the final current (overdrive 0.2 V),

$$\frac{R_b}{R_a} > \frac{0.9 - 0.7}{3 - 0.9} = \frac{0.2}{2.1} = 0.095 .$$

For instance, $R_b/R_a = 0.2$ gives $V_X = 0.9 - 0.2\times2.1 = 0.48$ V, comfortably below 0.7 V, and $I_{D6}R_b = 0.42\ \mathrm{V} < 0.7$ V keeps $M_6$ saturated.

### Step 5 — Design remark: the start-up window

With the square law, $V_X - V_{TH} = \sqrt{2I_{D6}/\beta_6} - I_{D6}R_b$, positive only while $I_{D6} < 2/(\beta_6R_b^2)$, with a maximum of $1/(2\beta_6R_b)$ at $I_{D6} = 1/(2\beta_6R_b^2)$. So $M_5$ conducts, weakly, only in a window of low supply voltage, which must cover the range where the core can start (roughly $V_{DD} > V_{GS1} + |V_{GS3}|$); a large $R_a$ relative to $R_b$ makes $I_{D6}$ grow slowly with $V_{DD}$ and also limits the static current of the $R_a$–$R_b$–$M_6$ branch.

### Result

**Operation.** The core can remain in its zero-current state. During power-up, before $M_6$ conducts, $V_X = V_N = V_{DD}$. Once $V_X > V_{TH}$, $M_5$ draws current from the gate/drain node of $M_3$ (the drain of $M_2$). $M_3$/$M_4$ turn on, $M_4$ drives $M_1$, $M_1$/$M_2$ turn on, and the core's positive-feedback loop settles at the normal operating point. As $V_{DD}$ rises, $M_6$ conducts $I_{D6} = (V_{DD} - V_{GS6})/R_a$ through $R_a$ and $R_b$ and pulls X down to $V_X = V_{GS6} - I_{D6}R_b$. When this is below $V_{TH}$, $M_5$ is off and no longer disturbs the equality of the two branch currents.

**Condition** at the final supply:

$$V_X = V_{GS6} - \frac{R_b}{R_a}(V_{DD} - V_{GS6}) < V_{TH}\quad\Longleftrightarrow\quad \frac{R_b}{R_a}(3\ \mathrm{V} - V_{GS6}) > V_{GS6} - 0.7\ \mathrm{V},$$

equivalently $I_{D6}R_b > V_{GS6} - V_{TH}$, i.e. $I_{D6} > 2/(\beta_6R_b^2)$, or $g_{m6}R_b > 2$.

**Common mistake.** Saying that $M_5$ injects current into the gate of $M_1$, or that it stays on permanently. $M_5$ *pulls* the $M_3$/$M_4$ gate node down to turn on the PMOS mirror, and must be off in steady state.

**Common mistake.** Reading $M_6$ as diode-connected (gate at X). Its gate is at N, which is why the drop $I_{D6}R_b$ can pull X *below* $V_{GS6}$ and hence below $V_{TH}$.

**Common mistake.** Demanding $V_X > V_{TH}$ in steady state "so that the start-up stays ready". A conducting $M_5$ adds a supply-dependent current to $M_3$ and spoils the reference.
