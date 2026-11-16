# Detailed solution - R487

**Approach.** During slewing the input pair is fully switched, so each capacitor is charged or discharged by a *fixed* current and its voltage ramps at $I/C$. Apply KCL at node X (first-stage output, $C_X$) and at node Y (source-follower output, $C_Y$), find the largest available current in each direction at each node, and take the slower of the two stages for each edge.

### Step 1 — Node X: KCL and the two extreme currents

With a large input step the tail current $I_{SS} = 0.5$ mA flows entirely through one transistor of the pair. The gate of $M_4$ draws no current, so KCL at X (current in from $M_3$, out through $M_2$) gives

$$C_X\frac{dV_X}{dt} = I_{D3} - I_{D2} = \frac{I_{SS}}{2} - I_{D2},$$

where $I_{D2}$ ranges from 0 (pair fully steered to $M_1$) to $I_{SS}$ (fully steered to $M_2$).

**X rising** ($M_2$ off, $I_{D2} = 0$). Only $M_3$'s current charges $C_X$:

$$\left.\frac{dV_X}{dt}\right|_{max} = \frac{I_{SS}/2}{C_X} = \frac{0.25\ \mathrm{mA}}{0.5\ \mathrm{pF}} = 0.5\times10^9\ \mathrm{V/s} = 0.5\ \mathrm{V/ns}.$$

**X falling** ($I_{D2} = I_{SS}$). $M_2$ sinks 0.5 mA while $M_3$ still delivers 0.25 mA:

$$\left.\frac{dV_X}{dt}\right|_{min} = \frac{I_{SS}/2 - I_{SS}}{C_X} = -\frac{0.25\ \mathrm{mA}}{0.5\ \mathrm{pF}} = -0.5\ \mathrm{V/ns}.$$

So node X slews symmetrically at $\pm(I_{SS}/2)/C_X = \pm0.5$ V/ns in both cases (i) and (ii), since $C_X = 0.5$ pF in both.

### Step 2 — Node Y: what the source follower can deliver

KCL at Y (current in from $M_4$, out through $I_1$):

$$C_Y\frac{dV_Y}{dt} = I_{D4} - I_1 .$$

**Y rising.** As X rises, $V_{GS4}$ grows and $M_4$ conducts more than $I_1$, without any bias-current limit, so the output follows X at X's rate (with a slightly larger $V_{GS4}$ during the ramp). Rising edges are limited by node X only.

**Y falling.** As X falls, $I_{D4}$ decreases, but at most to zero: $M_4$ cannot *sink* current. The fastest possible fall is set by $I_1$ alone discharging $C_Y$:

$$\left.\frac{dV_Y}{dt}\right|_{min} = -\frac{I_1}{C_Y}.$$

If this is slower than X's falling rate, $M_4$ turns off and the output falls at $I_1/C_Y$: the follower pushes strongly but pulls only with its bias current.

### Step 3 — Case (i): $C_X = C_Y = 0.5$ pF

Output pull-down capability:

$$\frac{I_1}{C_Y} = \frac{0.5\ \mathrm{mA}}{0.5\ \mathrm{pF}} = 1\ \mathrm{V/ns}.$$

This exceeds node X's falling rate of 0.5 V/ns, so the follower keeps up. During a falling ramp at 0.5 V/ns, $M_4$ still carries

$$I_{D4} = I_1 + C_Y\frac{dV_Y}{dt} = 0.5\ \mathrm{mA} - (0.5\ \mathrm{pF})(0.5\ \mathrm{V/ns}) = 0.5 - 0.25 = 0.25\ \mathrm{mA} > 0,$$

so it stays on; during a rising ramp it carries $0.5 + 0.25 = 0.75$ mA.

$$SR = 0.5\ \mathrm{V/ns} = 500\ \mathrm{V/\mu s}\ \text{ in both directions, limited at node X}.$$

### Step 4 — Case (ii): $C_X = 0.5$ pF, $C_Y = 1.2$ pF

Output pull-down capability:

$$\frac{I_1}{C_Y} = \frac{0.5\ \mathrm{mA}}{1.2\ \mathrm{pF}} = 0.417\times10^9\ \mathrm{V/s} = 0.42\ \mathrm{V/ns}.$$

**Falling edge.** Now $0.42\ \mathrm{V/ns} < 0.5\ \mathrm{V/ns}$. Keeping up with X would require $I_{D4} = 0.5\ \mathrm{mA} - (1.2\ \mathrm{pF})(0.5\ \mathrm{V/ns}) = 0.5 - 0.6 = -0.1$ mA, which is impossible, so $M_4$ turns off and

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

**Common mistake.** Taking the node-X limit as $I_{SS}/C_X = 1$ V/ns. When X rises only $M_3$'s $I_{SS}/2$ charges $C_X$; when X falls, $M_2$ sinks $I_{SS}$ but $M_3$ still supplies $I_{SS}/2$, so the net current is again $I_{SS}/2$.

**Common mistake.** Forgetting the output stage in case (ii) and quoting 0.5 V/ns symmetrically. The follower can pull its output down only with its bias current $I_1$, which with 1.2 pF gives 0.42 V/ns, slower than node X.

**Common mistake.** Claiming that $I_1/C_Y$ limits the *rising* edge, or limits case (i). On a rising edge $M_4$ simply conducts more current, and in case (i) $I_1/C_Y = 1$ V/ns is faster than node X.
