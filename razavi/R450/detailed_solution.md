# Detailed solution - R450

**Approach.** A 1-V step far exceeds the linear input range of the pair, so the response starts with **slewing**: $M_2$ turns off, $M_1$ takes all of $I_{SS}$, and the mirror pushes a constant current into the capacitive divider, so X rises linearly. Once $V_{in} - V_X$ reaches the edge of the linear range, $M_2$ turns on and its current grows. Compute (1) the slewing time until $M_2$ turns on and (2) the extra time for $I_{D2}$ to reach $0.1I_{SS}$, from the large-signal pair characteristic.

### Step 1 — Initial state: $M_2$ turns off

Before the step $V_{in} = V_X$, so

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

X cannot jump, since $V_{out}$ above the divider changes only as fast as a finite current charges the capacitors, so at $t = 0^+$

$$\Delta V \equiv V_{in} - V_X = 1\ \mathrm{V}.$$

With $k \equiv \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100/0.5) = 0.0268\ \mathrm{A/V^2}$, one device takes the entire tail current when $|\Delta V|$ exceeds

$$\Delta V_{max} = \sqrt{\frac{2I_{SS}}{k}} = \sqrt{\frac{2\,(1\ \mathrm{mA})}{0.0268\ \mathrm{A/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

Since $1\ \mathrm{V} > 0.273$ V:

$$I_{D1} = I_{SS} = 1\ \mathrm{mA}, \qquad I_{D2} = 0 .$$

### Step 2 — Slewing: how fast X rises

$M_4$ mirrors $I_{D1} = 1$ mA into the output, and with $M_2$ off all of it flows into $C_1$ in series with $C_2$:

$$C_s = \frac{C_1C_2}{C_1 + C_2} = 0.25\ \mathrm{pF}, \qquad \frac{dV_{out}}{dt} = \frac{I_{SS}}{C_s} = \frac{1\ \mathrm{mA}}{0.25\ \mathrm{pF}} = 4\ \mathrm{V/ns}.$$

The same current flows through $C_1$ into X and on through $C_2$, so

$$\frac{dV_X}{dt} = \frac{I_{SS}}{C_2} = \frac{1\ \mathrm{mA}}{0.5\ \mathrm{pF}} = 2\ \mathrm{V/ns}$$

(equivalently $\beta\,dV_{out}/dt$ with $\beta = C_1/(C_1 + C_2) = 0.5$).

### Step 3 — Time until $M_2$ turns on

$V_{in}$ is constant, so $\Delta V$ falls as X rises. $M_2$ turns on when $\Delta V$ has fallen from 1 V to 0.273 V, i.e. X has risen by $1 - 0.273 = 0.727$ V:

$$t_1 = \frac{1\ \mathrm{V} - 0.273\ \mathrm{V}}{2\ \mathrm{V/ns}} = 0.363\ \mathrm{ns}.$$

Meanwhile the output rises by $4\ \mathrm{V/ns}\times0.363\ \mathrm{ns} = 1.45$ V ($M_4$ stays saturated, as given).

### Step 4 — The value of $\Delta V$ at which $I_{D2} = 0.1I_{SS}$

The target is $I_{D2} = 0.1$ mA, so $I_{D1} = I_{SS} - I_{D2} = 0.9$ mA. The two devices share the source node and threshold, so $\Delta V = V_{ov1} - V_{ov2}$ with $V_{ov} = \sqrt{2I_D/k}$:

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2\,(0.9\ \mathrm{mA})}{0.0268\ \mathrm{A/V^2}}} = \sqrt{0.0672}\ \mathrm{V} = 0.259\ \mathrm{V},\\
V_{ov2} &= \sqrt{\frac{2\,(0.1\ \mathrm{mA})}{0.0268\ \mathrm{A/V^2}}} = \sqrt{0.00746}\ \mathrm{V} = 0.086\ \mathrm{V},\\
\Delta V &= 0.259\ \mathrm{V} - 0.086\ \mathrm{V} = 0.173\ \mathrm{V}.
\end{aligned}
$$

Check with the pair characteristic

$$I_{D1} - I_{D2} = \frac{k}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{k} - \Delta V^2} ;$$

with $\Delta V = 0.173$ V and $4I_{SS}/k = 0.1493\ \mathrm{V^2}$, $0.0134\times0.173\times\sqrt{0.1493 - 0.0299} = 0.0134\times0.173\times0.3455 = 0.80$ mA $= 0.9 - 0.1$ mA. ✓

### Step 5 — Time from $M_2$ turn-on to $I_{D2} = 0.1I_{SS}$

Now the mirror delivers $I_{D4} = I_{D1}$ while $M_2$ removes $I_{D2}$, so the net current into the capacitors is $I_{D1} - I_{D2}$:

$$\frac{dV_X}{dt} = \frac{I_{D1} - I_{D2}}{C_2}, \qquad \frac{d\Delta V}{dt} = -\frac{I_{D1} - I_{D2}}{C_2}.$$

Integrating as $\Delta V$ falls from 0.273 V to 0.173 V:

$$t_2 = C_2\int_{0.173}^{0.273}\frac{d\Delta V}{I_{D1} - I_{D2}} = \frac{C_2}{k/2}\int_{x_1}^{x_2}\frac{dx}{x\sqrt{a - x^2}},$$

with $a = 4I_{SS}/k = 0.1493\ \mathrm{V^2}$ ($\sqrt a = 0.3863$ V), $x_1 = 0.173$ V and $x_2 = 0.273$ V. The antiderivative is

$$\int\frac{dx}{x\sqrt{a - x^2}} = -\frac{1}{\sqrt a}\ln\frac{\sqrt a + \sqrt{a - x^2}}{x},$$

and

$$
\begin{aligned}
x_2 = 0.273:&\quad \frac{0.3863 + \sqrt{0.1493 - 0.0746}}{0.273} = \frac{0.3863 + 0.2732}{0.2732} = 2.414,\quad \ln 2.414 = 0.881,\\
x_1 = 0.173:&\quad \frac{0.3863 + \sqrt{0.1493 - 0.0299}}{0.173} = \frac{0.3863 + 0.3455}{0.1728} = 4.236,\quad \ln 4.236 = 1.444 .
\end{aligned}
$$

So the integral is $(1.444 - 0.881)/0.3863 = 1.455\ \mathrm{V^{-1}}$, and

$$t_2 = \frac{0.5\ \mathrm{pF}}{0.0134\ \mathrm{A/V^2}}\times1.455\ \mathrm{V^{-1}} = (3.73\times10^{-11}\ \mathrm{s\cdot V})(1.455\ \mathrm{V^{-1}}) = 5.4\times10^{-11}\ \mathrm{s} \approx 0.054\ \mathrm{ns}.$$

Check: the net current falls only from 1 mA to 0.8 mA here; a constant 1 mA would give $t_2 = C_2(0.1\ \mathrm{V})/(1\ \mathrm{mA}) = 0.050$ ns and 0.8 mA would give 0.0625 ns, bracketing 0.054 ns.

### Step 6 — Total time

$$t = t_1 + t_2 = 0.363\ \mathrm{ns} + 0.054\ \mathrm{ns} \approx 0.42\ \mathrm{ns}.$$

| Phase | $\Delta V = V_{in} - V_X$ | $I_{D2}$ | Current into $C_1$–$C_2$ | Duration |
|---|---|---|---|---|
| Slewing | 1 V → 0.273 V | 0 | 1 mA (constant) | 0.363 ns |
| $M_2$ turning on | 0.273 V → 0.173 V | 0 → 0.1 mA | 1 mA → 0.8 mA | 0.054 ns |

### Result

$I_{D2}$ reaches $0.1I_{SS}$ about **0.42 ns** after the step: about 0.36 ns of slewing (with $M_2$ off, $I_{SS}$ charging the series $C_1$–$C_2$, X rising at $I_{SS}/C_2 = 2$ V/ns until $V_{in} - V_X = 0.273$ V), plus about 0.05 ns while $M_2$ turns on and its current grows to 0.1 mA (at $V_{in} - V_X = 0.173$ V).

**Common mistake.** Treating the 1-V step with small-signal (exponential) settling. A pair with $\sqrt{2I_{SS}/k} = 0.27$ V of linear range is completely switched, so the response starts with a constant-current ramp and $M_2$ stays off for the first 0.36 ns.

**Common mistake.** Using $I_{SS}/(C_1 + C_2) = 1$ V/ns or the output slope 4 V/ns for X, which gives about 0.8 ns or 0.2 ns. The current flows *through* $C_1$ and $C_2$ in series, so X rises at $I_{SS}/C_2 = 2$ V/ns.

**Common mistake.** Stopping when $M_2$ turns on (0.36 ns), where $I_{D2} = 0$; $\Delta V$ must fall further, to 0.173 V.
