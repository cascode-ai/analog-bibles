# Detailed solution - R450

**Approach.** A 1-V step is far larger than the input range over which a differential pair responds linearly, so the response starts with **slewing**: $M_2$ turns off, $M_1$ takes all of $I_{SS}$, and the mirror pushes a constant current into the capacitive divider, so X rises linearly. Once $V_{in} - V_X$ has fallen to the edge of the linear range, $M_2$ turns on and its current grows. We compute (1) the slewing time until $M_2$ turns on, and (2) the extra time for $I_{D2}$ to grow to $0.1I_{SS}$, using the large-signal differential-pair characteristic.

### Step 1 — The circuit and the initial state

From the figure: NMOS pair $M_1$–$M_2$ with tail $I_{SS} = 1$ mA, PMOS mirror load $M_3$ (diode-connected, on the $M_1$ side) and $M_4$ (output side). The output drives $C_1$ (to X) in series with $C_2$ (X to ground), and X is the gate of $M_2$. The input $V_{in}$ drives the gate of $M_1$.

Before the step the circuit is in equilibrium with $V_{in} = V_X$, so

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

**Just after the step.** $V_{in}$ jumps by 1 V. X cannot jump: it is the midpoint of a capacitive divider whose top node $V_{out}$ can change only as fast as a finite current charges the capacitors. So at $t = 0^+$,

$$\Delta V \equiv V_{in} - V_X = 1\ \mathrm{V}.$$

### Step 2 — Is $M_2$ off? (input range of the differential pair)

With the square law (no channel-length modulation) and $k \equiv \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100/0.5) = 0.0268\ \mathrm{A/V^2}$, one device of the pair takes the entire tail current when $|\Delta V|$ exceeds

$$\Delta V_{max} = \sqrt{\frac{2I_{SS}}{k}} = \sqrt{\frac{2\,(1\ \mathrm{mA})}{0.0268\ \mathrm{A/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

(At that point $V_{GS1} - V_{TH} = \sqrt{2I_{SS}/k}$ carries all of $I_{SS}$ while $V_{GS2} = V_{TH}$.) Since $1\ \mathrm{V} > 0.273$ V:

$$I_{D1} = I_{SS} = 1\ \mathrm{mA}, \qquad I_{D2} = 0 .$$

### Step 3 — Slewing: how fast X rises

$M_3$ carries $I_{D1} = 1$ mA, and $M_4$ (saturated, no channel-length modulation) mirrors it, delivering 1 mA into the output node. $M_2$ is off and draws nothing, so the whole 1 mA flows into the capacitor branch, $C_1$ in series with $C_2$:

$$C_s = \frac{C_1C_2}{C_1 + C_2} = 0.25\ \mathrm{pF}, \qquad \frac{dV_{out}}{dt} = \frac{I_{SS}}{C_s} = \frac{1\ \mathrm{mA}}{0.25\ \mathrm{pF}} = 4\ \mathrm{V/ns}.$$

The same current flows through $C_1$ into X and then through $C_2$ to ground (X has no other path), so

$$\frac{dV_X}{dt} = \frac{I_{SS}}{C_2} = \frac{1\ \mathrm{mA}}{0.5\ \mathrm{pF}} = 2\ \mathrm{V/ns}.$$

(Equivalently, $dV_X/dt = \beta\,dV_{out}/dt$ with $\beta = C_1/(C_1 + C_2) = 0.5$.)

### Step 4 — Time until $M_2$ turns on

$V_{in}$ is constant after the step, so $\Delta V$ falls at the rate X rises. $M_2$ turns on when $\Delta V$ has fallen from 1 V to $\Delta V_{max} = 0.273$ V, i.e. when X has risen by $1 - 0.273 = 0.727$ V:

$$t_1 = \frac{1\ \mathrm{V} - 0.273\ \mathrm{V}}{2\ \mathrm{V/ns}} = 0.363\ \mathrm{ns}.$$

During this time the output has risen by $4\ \mathrm{V/ns}\times0.363\ \mathrm{ns} = 1.45$ V (we are told $M_4$ stays saturated).

### Step 5 — The value of $\Delta V$ at which $I_{D2} = 0.1I_{SS}$

The target is $I_{D2} = 0.1$ mA, hence $I_{D1} = I_{SS} - I_{D2} = 0.9$ mA. Both devices have the same threshold and share the source node, so

$$\Delta V = V_{GS1} - V_{GS2} = V_{ov1} - V_{ov2},$$

where $V_{ov} = \sqrt{2I_D/k}$ is the overdrive:

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2\,(0.9\ \mathrm{mA})}{0.0268\ \mathrm{A/V^2}}} = \sqrt{0.0672}\ \mathrm{V} = 0.259\ \mathrm{V},\\
V_{ov2} &= \sqrt{\frac{2\,(0.1\ \mathrm{mA})}{0.0268\ \mathrm{A/V^2}}} = \sqrt{0.00746}\ \mathrm{V} = 0.086\ \mathrm{V},\\
\Delta V &= 0.259\ \mathrm{V} - 0.086\ \mathrm{V} = 0.173\ \mathrm{V}.
\end{aligned}
$$

**Check with the standard characteristic.** For a square-law pair,

$$I_{D1} - I_{D2} = \frac{k}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{k} - \Delta V^2}.$$

With $\Delta V = 0.173$ V and $4I_{SS}/k = 0.1493\ \mathrm{V^2}$: $0.0134\times0.173\times\sqrt{0.1493 - 0.0299} = 0.0134\times0.173\times0.3455 = 0.80$ mA $= 0.9 - 0.1$ mA. ✓

### Step 6 — Time from $M_2$ turn-on to $I_{D2} = 0.1I_{SS}$

Now both devices conduct. The mirror still delivers $I_{D4} = I_{D1}$ to the output, while $M_2$ removes $I_{D2}$. The net current into the capacitors is $I_{D1} - I_{D2}$, so

$$\frac{dV_X}{dt} = \frac{I_{D1} - I_{D2}}{C_2}, \qquad \frac{d\Delta V}{dt} = -\frac{I_{D1} - I_{D2}}{C_2}.$$

Separate the variables and integrate as $\Delta V$ falls from 0.273 V to 0.173 V:

$$t_2 = C_2\int_{0.173}^{0.273}\frac{d\Delta V}{I_{D1} - I_{D2}} = \frac{C_2}{k/2}\int_{x_1}^{x_2}\frac{dx}{x\sqrt{a - x^2}},$$

with $a = 4I_{SS}/k = 0.1493\ \mathrm{V^2}$ ($\sqrt a = 0.3863$ V), $x_1 = 0.173$ V and $x_2 = 0.273$ V. The antiderivative is

$$\int\frac{dx}{x\sqrt{a - x^2}} = -\frac{1}{\sqrt a}\ln\frac{\sqrt a + \sqrt{a - x^2}}{x}.$$

Evaluate the logarithms:

$$
\begin{aligned}
x_2 = 0.273:&\quad \frac{0.3863 + \sqrt{0.1493 - 0.0746}}{0.273} = \frac{0.3863 + 0.2732}{0.2732} = 2.414,\quad \ln 2.414 = 0.881,\\
x_1 = 0.173:&\quad \frac{0.3863 + \sqrt{0.1493 - 0.0299}}{0.173} = \frac{0.3863 + 0.3455}{0.1728} = 4.236,\quad \ln 4.236 = 1.444 .
\end{aligned}
$$

So the integral is $(1.444 - 0.881)/0.3863 = 1.455\ \mathrm{V^{-1}}$, and

$$t_2 = \frac{0.5\ \mathrm{pF}}{0.0134\ \mathrm{A/V^2}}\times1.455\ \mathrm{V^{-1}} = (3.73\times10^{-11}\ \mathrm{s\cdot V})(1.455\ \mathrm{V^{-1}}) = 5.4\times10^{-11}\ \mathrm{s} \approx 0.054\ \mathrm{ns}.$$

(Units: $\mathrm{F\cdot V^2/A} = \mathrm{s\cdot V}$, since $1\ \mathrm{F} = 1\ \mathrm{A\cdot s/V}$.)

**Sanity check.** The net current falls only from 1 mA to 0.8 mA in this interval. With a constant 1 mA, $t_2 = C_2(0.1\ \mathrm{V})/(1\ \mathrm{mA}) = 0.050$ ns; with 0.8 mA it would be 0.0625 ns. The exact 0.054 ns lies in between.

### Step 7 — Total time

$$t = t_1 + t_2 = 0.363\ \mathrm{ns} + 0.054\ \mathrm{ns} \approx 0.42\ \mathrm{ns}.$$

| Phase | $\Delta V = V_{in} - V_X$ | $I_{D2}$ | Current into $C_1$–$C_2$ | Duration |
|---|---|---|---|---|
| Slewing | 1 V → 0.273 V | 0 | 1 mA (constant) | 0.363 ns |
| $M_2$ turning on | 0.273 V → 0.173 V | 0 → 0.1 mA | 1 mA → 0.8 mA | 0.054 ns |

### Result

$I_{D2}$ reaches $0.1I_{SS}$ about **0.42 ns** after the step: about 0.36 ns of slewing (with $M_2$ off, $I_{SS}$ charging the series $C_1$–$C_2$, X rising at $I_{SS}/C_2 = 2$ V/ns until $V_{in} - V_X = 0.273$ V), plus about 0.05 ns while $M_2$ turns on and its current grows to 0.1 mA (at $V_{in} - V_X = 0.173$ V).

**Common mistake.** Treating the 1-V step with small-signal (exponential) settling. A differential pair with $\sqrt{2I_{SS}/k} = 0.27$ V of linear range is completely switched by a 1-V input, so the response starts with a constant-current ramp (slewing), and $M_2$ stays off for the first 0.36 ns.

**Common mistake.** Using the wrong slope for X: $I_{SS}/(C_1 + C_2) = 1$ V/ns, or the output slope 4 V/ns. The current flows *through* $C_1$ and $C_2$ in series, so X rises at $I_{SS}/C_2 = 2$ V/ns. These errors give about 0.8 ns or 0.2 ns.

**Common mistake.** Stopping at the moment $M_2$ turns on (0.36 ns). At that instant $I_{D2} = 0$; $\Delta V$ must fall further, to 0.173 V, before $I_{D2}$ reaches 0.1 mA.
