# Detailed solution - R430

**Approach.** Node X drives the gates of the PMOS current sources $M_7$ and $M_8$. $M_7$ carries a known current (half the tail current), so the square law fixes its source–gate voltage; with its source at $V_{DD}$, that pins its gate, and hence X.

### Step 1 — Current and source–gate voltage of $M_7$

This is a low-voltage cascode mirror: $M_7$'s gate is taken from the drain of its cascode $M_5$ (node X), not from its own drain, so the loop $M_7 \to M_5 \to$ X $\to$ gate of $M_7$ forces $M_7$ to conduct exactly what the branch below demands. The left branch $M_7$–$M_5$–$M_3$–$M_1$ is one series path, so at balance

$$|I_{D7}| = I_{D1} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

With $M_7$ saturated and $W/L = 100/0.5 = 200$:

$$
\begin{aligned}
|V_{OD7}| &= \sqrt{\frac{2|I_{D7}|}{\mu_pC_{ox}(W/L)}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}} = \sqrt{\frac{1\times10^{-3}}{7.68\times10^{-3}}}\ \mathrm{V} = \sqrt{0.1302}\ \mathrm{V} = 0.361\ \mathrm{V},\\
|V_{GS7}| &= |V_{THP}| + |V_{OD7}| = 0.8 + 0.361 = 1.161\ \mathrm{V}.
\end{aligned}
$$

### Step 2 — Voltage at X

The source of $M_7$ is at $V_{DD}$ and its gate at X:

$$V_X = V_{DD} - |V_{GS7}| = 3 - 1.161 = 1.84\ \mathrm{V}.$$

This does not depend on $V_{b1}$ or $V_{b2}$: if X were higher, $M_7$ would supply less than the 0.5 mA demanded below, and X would be pulled down until it supplies exactly 0.5 mA. $V_{b2}$ only has to keep $M_5$ and $M_7$ saturated (roughly between 1.04 V and 1.48 V).

### Step 3 — Consistency checks

- **$M_3$:** its drain (X, 1.84 V) must be at least $V_{b1} - V_{TH} = 1.7 - 0.7 = 1.0$ V. ✓
- **$M_8$:** its gate is also at X, so it has the same $|V_{GS}| = 1.161$ V and, if saturated, carries the same 0.5 mA, as a mirror should.

### Result

$$V_X = V_{DD} - |V_{GS7}| = 3 - (0.8 + 0.361) \approx 1.84\ \mathrm{V},$$

set by $M_7$ conducting $I_{SS}/2 = 0.5$ mA with its gate at X; it is independent of $V_{b1}$ and $V_{b2}$ as long as all transistors are saturated.

**Common mistake.** Treating the load as a standard two-diode cascode mirror, $V_X = V_{DD} - |V_{GS5}| - |V_{GS7}| \approx 0.68$ V. Only one gate–source voltage separates X from $V_{DD}$; $M_5$ is biased by $V_{b2}$, not diode-connected.

**Common mistake.** Thinking $V_X$ is set by $V_{b1}$. $V_{b1}$ fixes the *sources* of $M_3$/$M_4$; their drain X is set by the PMOS side.

**Common mistake.** Using $W/L = 100$ instead of $100\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 200$, which overestimates the overdrive (0.51 V) and gives $V_X \approx 1.69$ V.
