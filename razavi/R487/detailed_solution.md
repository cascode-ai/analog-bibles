# Detailed solution - R487

**Approach.** During slewing the input pair is fully switched, so each capacitor is charged or discharged by a *fixed* current, and the voltage ramps at $I/C$. Apply KCL at node X (first-stage output, capacitance $C_X$) and at node Y (source-follower output, capacitance $C_Y$), find the largest available current in each direction at each node, and take the slower of the two stages for each edge.

### Step 1 — The circuit and what "slewing" means

Reading the figure:

- $M_1$, $M_2$: NMOS differential pair with tail current $I_{SS} = 0.5$ mA. The drain of $M_1$ goes to $V_{DD}$; the drain of $M_2$ is node X.
- $M_3$: PMOS current source (gate at $V_b$) delivering a constant $I_{SS}/2 = 0.25$ mA into X.
- $M_4$: NMOS source follower from X to the output Y, biased by the current source $I_1 = 0.5$ mA. $C_Y$ loads Y.

When a large input step is applied (the op amp in a feedback loop, e.g. a unity-gain buffer), the differential input is momentarily far larger than the pair can handle linearly. The tail current then flows entirely through one transistor, and the node voltages change at a rate limited by the available current: $dV/dt = I/C$. This maximum rate is the **slew rate** (SR).

### Step 2 — Node X: KCL and the two extreme currents

The gate of $M_4$ draws no current, so the KCL at X is (current in from $M_3$, current out through $M_2$):

$$C_X\frac{dV_X}{dt} = I_{D3} - I_{D2} = \frac{I_{SS}}{2} - I_{D2}.$$

The current of $M_2$ can range from 0 (pair fully steered to $M_1$) to $I_{SS}$ (pair fully steered to $M_2$).

**X rising** ($M_2$ off, $I_{D2} = 0$). Only $M_3$'s current charges $C_X$:

$$\left.\frac{dV_X}{dt}\right|_{max} = \frac{I_{SS}/2}{C_X} = \frac{0.25\ \mathrm{mA}}{0.5\ \mathrm{pF}} = 0.5\times10^9\ \mathrm{V/s} = 0.5\ \mathrm{V/ns}.$$

**X falling** ($M_2$ carries the whole tail current, $I_{D2} = I_{SS}$). $M_2$ sinks 0.5 mA while $M_3$ still delivers 0.25 mA, so the net discharge current is the difference:

$$\left.\frac{dV_X}{dt}\right|_{min} = \frac{I_{SS}/2 - I_{SS}}{C_X} = -\frac{0.25\ \mathrm{mA}}{0.5\ \mathrm{pF}} = -0.5\ \mathrm{V/ns}.$$

So node X slews symmetrically at $\pm(I_{SS}/2)/C_X = \pm0.5$ V/ns. This limit is the same in both cases (i) and (ii), because $C_X = 0.5$ pF in both.

### Step 3 — Node Y: what the source follower can deliver

KCL at Y (current in from $M_4$, current out through $I_1$):

$$C_Y\frac{dV_Y}{dt} = I_{D4} - I_1 .$$

**Y rising.** If X rises quickly, $V_{GS4}$ grows and $M_4$ conducts more than $I_1$; its current is not limited by any bias source. The output therefore follows X at X's rate (with a slightly larger $V_{GS4}$ during the ramp). Rising edges are limited by node X only.

**Y falling.** If X falls quickly, $V_{GS4}$ shrinks and $I_{D4}$ decreases. The most it can do is turn off completely ($I_{D4} = 0$); it cannot *sink* current. The fastest possible fall is then set by $I_1$ alone discharging $C_Y$:

$$\left.\frac{dV_Y}{dt}\right|_{min} = -\frac{I_1}{C_Y}.$$

If this is slower than X's falling rate, the follower cannot keep up: $M_4$ turns off and the output falls at $I_1/C_Y$.

**Intuition.** A source follower with a current-source load is "push-strong, pull-weak": it can push almost unlimited current into the load, but can pull current out only up to its bias current.

### Step 4 — Case (i): $C_X = C_Y = 0.5$ pF

Output pull-down capability:

$$\frac{I_1}{C_Y} = \frac{0.5\ \mathrm{mA}}{0.5\ \mathrm{pF}} = 1\ \mathrm{V/ns}.$$

This exceeds node X's falling rate of 0.5 V/ns, so the follower keeps up. During a falling ramp at 0.5 V/ns, $M_4$ still carries

$$I_{D4} = I_1 + C_Y\frac{dV_Y}{dt} = 0.5\ \mathrm{mA} - (0.5\ \mathrm{pF})(0.5\ \mathrm{V/ns}) = 0.5 - 0.25 = 0.25\ \mathrm{mA} > 0,$$

so it stays on. During a rising ramp it carries $0.5 + 0.25 = 0.75$ mA.

$$SR = 0.5\ \mathrm{V/ns} = 500\ \mathrm{V/\mu s}\ \text{ in both directions, limited at node X}.$$

### Step 5 — Case (ii): $C_X = 0.5$ pF, $C_Y = 1.2$ pF

Output pull-down capability:

$$\frac{I_1}{C_Y} = \frac{0.5\ \mathrm{mA}}{1.2\ \mathrm{pF}} = 0.417\times10^9\ \mathrm{V/s} = 0.42\ \mathrm{V/ns}.$$

**Falling edge.** Now $0.42\ \mathrm{V/ns} < 0.5\ \mathrm{V/ns}$: node X could fall faster than the output can follow. Keeping up would require $I_{D4} = 0.5\ \mathrm{mA} - (1.2\ \mathrm{pF})(0.5\ \mathrm{V/ns}) = 0.5 - 0.6 = -0.1$ mA, which is impossible. So $M_4$ turns off and

$$SR^- = \frac{I_1}{C_Y} \approx 0.42\ \mathrm{V/ns} = 417\ \mathrm{V/\mu s}.$$

**Rising edge.** Still limited by X:

$$SR^+ = \frac{I_{SS}/2}{C_X} = 0.5\ \mathrm{V/ns},$$

with $M_4$ supplying $I_1 + C_Y(0.5\ \mathrm{V/ns}) = 0.5 + 0.6 = 1.1$ mA during the ramp.

### Result

| Case | Rising SR | Falling SR | Limited by |
|---|---|---|---|
| (i) $C_X = C_Y = 0.5$ pF | 0.5 V/ns | 0.5 V/ns | node X: $(I_{SS}/2)/C_X$ |
| (ii) $C_X = 0.5$ pF, $C_Y = 1.2$ pF | 0.5 V/ns | ≈ 0.42 V/ns | rising: node X; falling: output, $I_1/C_Y$ |

(0.5 V/ns = 500 V/µs; 0.42 V/ns ≈ 417 V/µs.)

**Common mistake.** Taking the node-X limit as $I_{SS}/C_X = 1$ V/ns. When X rises, only $M_3$'s $I_{SS}/2$ charges $C_X$; when X falls, $M_2$ sinks $I_{SS}$ but $M_3$ still supplies $I_{SS}/2$, so the net current is again $I_{SS}/2$.

**Common mistake.** Forgetting the output stage in case (ii) and quoting 0.5 V/ns symmetrically. The follower can pull its output down only with its bias current $I_1$; with 1.2 pF that gives 0.42 V/ns, slower than node X.

**Common mistake.** Claiming that $I_1/C_Y$ limits the *rising* edge, or that it limits case (i). On a rising edge $M_4$ simply conducts more current; and in case (i) $I_1/C_Y = 1$ V/ns is faster than node X, so it does not limit anything.
