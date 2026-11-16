# Detailed solution - R275

**Approach.** Look at the low output state and ask which transistor pulls the output down, and how far it can pull it. The output is pulled down by $M_2$, whose source is the tail node P, so $V_{out}$ can never go below $V_P$. $V_P$ sits about one gate–source voltage below the input common-mode level. We work out the low state with the square law (including the fact that a moderate $\Delta V$ does not fully steer the tail current), obtain $V_{min} = V_P + V_{DS2}$, and show that it moves one-for-one with $V_{in,CM}$.

### Step 1 — The circuit

From the figure:

- $M_1$, $M_2$: NMOS differential pair, sources tied at node P.
- $M_5$: tail current source (gate at $V_b$), carrying $I_{SS}$ while saturated.
- $M_3$ (diode-connected at node N) and $M_4$: PMOS current mirror. $M_4$ copies $M_1$'s current into the output node.
- Output: drains of $M_2$ and $M_4$.

The inputs sit at $V_{in,CM}$ and step in opposite directions by $\Delta V$. In the **low** output state $M_2$'s gate is the higher one: $V_{in2} = V_{in,CM} + \Delta V$ and $V_{in1} = V_{in,CM} - \Delta V$.

### Step 2 — Why the output goes low: current imbalance and high gain

At the output node, $M_4$ supplies $|I_{D4}|$ (a copy of $I_{D1}$) and $M_2$ sinks $I_{D2}$. If both were saturated, $M_2$, with the larger $V_{GS}$, would want to sink more than $M_4$ supplies. With the high gain of this stage, the imbalance drives $V_{out}$ downward until something limits it.

The only thing that can limit it is $M_2$ itself. As $V_{out}$ falls, $M_2$'s $V_{DS}$ shrinks. Once $V_{DS2} < V_{GS2} - V_{TH}$, $M_2$ is in the **triode region** and its current drops with $V_{DS2}$. The output settles where that triode current equals $|I_{D4}|$. So

$$V_{min} = V_P + V_{DS2}, \qquad V_{DS2} \text{ small (tens of mV to about 0.1 V)}.$$

Even if $M_2$ were a perfect switch, $V_{out}$ could not go below its own source voltage $V_P$ while $M_5$ conducts.

### Step 3 — Moderate $\Delta V$: the tail current is not fully steered

A differential pair steers all of $I_{SS}$ to one side only if $|V_{in1} - V_{in2}|$ exceeds $\sqrt2\,V_{ov}$, where $V_{ov} = \sqrt{I_{SS}/\beta}$ is the equilibrium overdrive and $\beta = \mu_nC_{ox}W/L$. With a moderate $\Delta V$ (e.g. 0.1 V), $M_1$ still conducts. With $\lambda = 0$:

- $M_4$ (saturated) copies $M_1$: $|I_{D4}| = I_{D1}$;
- KCL at the output: $I_{D2} = |I_{D4}| = I_{D1}$;
- KCL at P: $I_{D1} + I_{D2} = I_{SS}$.

Hence, in the low state,

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} .$$

The two input devices carry *equal* currents although their gate voltages differ. This is possible only because $M_2$ is in triode.

### Step 4 — Where node P sits

$M_1$ is saturated and carries $I_{SS}/2$:

$$\frac{I_{SS}}{2} = \frac{\beta}{2}\left(V_{in1} - V_P - V_{TH}\right)^2 \quad\Longrightarrow\quad V_P = V_{in1} - V_{TH} - \sqrt{\frac{I_{SS}}{\beta}} = V_{in,CM} - \Delta V - V_{TH} - V_{ov}.$$

So **$V_P$ tracks $V_{in,CM}$ one-for-one**: P is the common source of the pair, one gate–source voltage below the inputs.

### Step 5 — $V_{DS2}$ from $M_2$'s triode equation

$M_2$'s overdrive is $V_{in2} - V_P - V_{TH} = V_{ov} + 2\Delta V$, which does not depend on $V_{in,CM}$. Its triode current must equal $I_{SS}/2$:

$$\frac{I_{SS}}{2} = \beta\left[(V_{ov} + 2\Delta V)V_{DS2} - \tfrac12V_{DS2}^2\right].$$

$V_{DS2}$ is set by the device size, $I_{SS}$ and $\Delta V$ only, not by $V_{in,CM}$. Therefore

$$V_{min} = V_P + V_{DS2} = V_{in,CM} - \Delta V - V_{TH} - V_{ov} + V_{DS2},$$

which **rises and falls one-for-one with $V_{in,CM}$**. The output cannot get near ground; it stays roughly a threshold below the input common-mode level.

### Step 6 — A numerical illustration

Take $\beta = 2.68\ \mathrm{mA/V^2}$ (W/L = 10/0.5, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$), $I_{SS} = 200\ \mu\mathrm{A}$, $V_{TH} = 0.7$ V, $\Delta V = 0.1$ V:

$$
\begin{aligned}
V_{ov} &= \sqrt{I_{SS}/\beta} = \sqrt{200\ \mu\mathrm{A}/2.68\ \mathrm{mA/V^2}} = 0.273\ \mathrm{V} \quad (\sqrt2V_{ov} = 0.39\ \mathrm{V} > 2\Delta V: \text{partial steering}),\\
V_P &= V_{in,CM} - 0.1 - 0.7 - 0.273 = V_{in,CM} - 1.073\ \mathrm{V},\\
M_2:&\quad 100\ \mu\mathrm{A} = (2.68\ \mathrm{mA/V^2})\left[0.473V_{DS2} - 0.5V_{DS2}^2\right]\ \Rightarrow\ 0.5V_{DS2}^2 - 0.473V_{DS2} + 0.0373 = 0,\\
V_{DS2} &= 0.473 - \sqrt{0.473^2 - 2(0.0373)} = 0.473 - 0.386 = 0.087\ \mathrm{V},\\
V_{min} &= V_{in,CM} - 1.073 + 0.087 = V_{in,CM} - 0.99\ \mathrm{V}.
\end{aligned}
$$

| $V_{in,CM}$ | $V_P$ | $V_{min}$ |
|---|---|---|
| 1.5 V | 0.43 V | 0.51 V |
| 1.8 V | 0.73 V | 0.81 V |
| 2.1 V | 1.03 V | 1.11 V |

Each 0.3 V increase of the common-mode level raises $V_{min}$ by 0.3 V.

### Step 7 — Contrast with $V_{max}$, and the limits

- **$V_{max}$** is reached when $M_1$ carries more current than $M_2$. $M_4$ then tries to deliver more than $M_2$ can sink, and $V_{out}$ rises until **$M_4$** enters triode near $V_{DD}$. The PMOS sources are at $V_{DD}$, so $V_{max} \approx V_{DD} - |V_{DS4}|$ is essentially independent of $V_{in,CM}$. (In the example, with PMOS devices of $W/L = 10/0.5$ and $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, the pair splits 168 μA / 32 μA in the high state, and $M_4$ passes 32 μA with $|V_{DS4}| \approx 0.07$ V, so $V_{max} \approx 2.93$ V for any of the common-mode levels in the table.)
- **Lowering $V_{in,CM}$** lowers $V_P$ and therefore $V_{min}$, but only until $M_5$ leaves saturation ($V_P < V_b - V_{TH}$). Below that the tail current collapses and the circuit loses its gain.

### Result

In the low state the output is pulled down by $M_2$, which cannot pull it below its own source, node P. Because of the high gain, $V_{out}$ falls until $M_2$ enters the triode region, where its current matches $|I_{D4}|$ (with a moderate $\Delta V$, $M_1$ still conducts and the mirror still supplies current) at a small $V_{DS2}$. Node P sits one $V_{GS}$ below the inputs, $V_P \approx V_{in,CM} - V_{GS1,2}$, so

$$V_{min} = V_P + V_{DS2} \approx V_{in,CM} - V_{TH} - V_{ov} - \Delta V + V_{DS2},$$

which rises and falls one-for-one with $V_{in,CM}$. A higher input common-mode level raises $V_{min}$ and reduces the output swing. $V_{max}$, set by $M_4$ near $V_{DD}$, is essentially independent of $V_{in,CM}$.

**Common mistake.** Claiming that $V_{min} \approx 0$ regardless of the common-mode level. The pull-down device $M_2$ has its source at P, not at ground. The output can approach only P, and P follows the inputs.

**Common mistake.** Attributing $V_{min}$ to $M_4$ or to $M_5$'s gate voltage alone. $M_4$ limits the *high* level. $M_5$'s saturation sets how *low* P (and so $V_{min}$) may go when $V_{in,CM}$ is reduced, but for a normal common-mode level it is $V_P$, i.e. $V_{in,CM} - V_{GS}$, that fixes $V_{min}$.

**Common mistake.** Getting the direction wrong (higher $V_{in,CM}$ lowering $V_{min}$). Raising the inputs raises the common source node P by the same amount, which lifts the floor that $M_2$ can pull the output down to.
