# Detailed solution - R070

**Approach.** For each target output voltage, the load line $I_D = (V_{DD} - V_{out})/R_D$ gives the drain current. Check that $M_1$ is saturated at that output, invert the square law to get the overdrive, and add the threshold voltage to obtain the input.

### Step 1 — The inverted square law

With $\lambda = 0$ and

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})\frac{50}{0.5} = 13.4\ \mathrm{mA/V^2},$$

the saturated device obeys $I_D = \tfrac12\beta(V_{in} - V_{TH})^2$, so

$$V_{in} = V_{TH} + V_{ov}, \qquad V_{ov} = \sqrt{\frac{2I_D}{\beta}} .$$

### Step 2 — $V_{out} = 1$ V

The load line (no current flows into the output terminal) gives

$$I_D = \frac{V_{DD} - V_{out}}{R_D} = \frac{3\ \mathrm{V} - 1\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 1\ \mathrm{mA},$$

$$V_{ov} = \sqrt{\frac{2(1\times10^{-3}\ \mathrm{A})}{13.4\times10^{-3}\ \mathrm{A/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.$$

$V_{DS} = V_{out} = 1\ \mathrm{V} \ge 0.386$ V ✓, so the square law is valid, and

$$V_{in} = 0.7 + 0.386 = 1.086\ \mathrm{V}.$$

### Step 3 — $V_{out} = 2.5$ V

$$I_D = \frac{3\ \mathrm{V} - 2.5\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 0.25\ \mathrm{mA},$$

$$V_{ov} = \sqrt{\frac{2(0.25\times10^{-3}\ \mathrm{A})}{13.4\times10^{-3}\ \mathrm{A/V^2}}} = \sqrt{0.03731\ \mathrm{V^2}} = 0.193\ \mathrm{V}.$$

$V_{DS} = 2.5\ \mathrm{V} \ge 0.193$ V ✓, and

$$V_{in} = 0.7 + 0.193 = 0.893\ \mathrm{V}.$$

### Step 4 — Interpretation: the input range and the nonlinearity

An input change of only

$$1.086 - 0.893 = 0.193\ \mathrm{V}$$

moves the output over the full 1.5-V range, an average gain magnitude of $1.5/0.193 = 7.8$; the higher input gives the lower output (the stage inverts).

The small-signal gain $-g_mR_D$, with $g_m = \sqrt{2\beta I_D}$, is not constant over this range:

$$
\begin{aligned}
V_{out} = 1\ \mathrm{V}\ (I_D = 1\ \mathrm{mA}):&\quad g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 5.18\ \mathrm{mS},\quad A_v = -10.4,\\
V_{out} = 2.5\ \mathrm{V}\ (I_D = 0.25\ \mathrm{mA}):&\quad g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS},\quad A_v = -5.2 .
\end{aligned}
$$

The gain changes by a factor of 2 across the swing: this is the nonlinearity of the CS stage with a resistive load, which distorts a large output swing. Every point in between is also saturated, since the output never falls below 1 V while the overdrive never exceeds 0.386 V.

### Result

- $V_{out} = 1$ V: $I_D = 1$ mA, $V_{ov} = 0.386$ V, so $V_{in} \approx 1.086$ V.
- $V_{out} = 2.5$ V: $I_D = 0.25$ mA, $V_{ov} = 0.193$ V, so $V_{in} \approx 0.893$ V.

$M_1$ is saturated at both ends ($V_{DS} = 1$ V and 2.5 V, both above the overdrive).

**Common mistake.** Forgetting to add $V_{TH}$, i.e. reporting the overdrive (0.386 V or 0.193 V) as the input voltage. The square law involves $V_{GS} - V_{TH}$, so $V_{in} = V_{TH} + \sqrt{2I_D/\beta}$.

**Common mistake.** Using the triode equation, or not deriving the current from the load line. Both outputs are well above the overdrive, so the device is saturated, and $R_D$ fixes the current: $I_D = (V_{DD} - V_{out})/R_D$.
