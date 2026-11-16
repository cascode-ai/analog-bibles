# Detailed solution - R616

**Approach.** With threshold mismatch alone, the input-referred offset of a differential pair is $V_{OS} = \Delta V_{TH}$. Require $\Delta V_{TH} \le 5$ mV, solve the mismatch formula for the gate area $WL$, and divide by the given channel length.

### Step 1 — Offset from threshold mismatch alone

With equal $\mu_nC_{ox}$ and $W/L$, equal drain currents require equal overdrives, $V_{GS1} - V_{TH1} = V_{GS2} - V_{TH2}$. The sources are shared, so the gate voltage difference that balances the pair is

$$V_{OS} = |V_{TH1} - V_{TH2}| = \Delta V_{TH},$$

independent of the bias current and the overdrive.

### Step 2 — Required gate area

With $t_{ox} = 90$ Å the coefficient is $0.1\,t_{ox} = 0.1\times 90 = 9$, so $\Delta V_{TH} = 9\ \mathrm{mV\cdot\mu m}/\sqrt{WL}$ with $\sqrt{WL}$ in µm. (Such a formula strictly gives the standard deviation of the random mismatch; as the problem states, it is treated as the mismatch itself.) The specification $V_{OS} \le 5$ mV becomes

$$\frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \le 5\ \mathrm{mV} \quad\Longrightarrow\quad \sqrt{WL} \ge \frac{9\ \mathrm{mV\cdot\mu m}}{5\ \mathrm{mV}} = 1.8\ \mu\mathrm{m} \quad\Longrightarrow\quad WL \ge (1.8\ \mu\mathrm{m})^2 = 3.24\ \mu\mathrm{m}^2 .$$

The offset falls as the area grows, so this is a *minimum* area.

### Step 3 — Minimum width

With $L = 0.5\ \mu$m:

$$W \ge \frac{3.24\ \mu\mathrm{m}^2}{L} = \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 6.48\ \mu\mathrm{m}, \qquad \frac{W}{L} = \frac{6.48\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 12.96 \approx 13 .$$

**Check.**

$$
\begin{aligned}
WL &= 6.48\times 0.5 = 3.24\ \mu\mathrm{m}^2,\\
\sqrt{WL} &= 1.8\ \mu\mathrm{m},\\
\Delta V_{TH} &= \frac{9\ \mathrm{mV\cdot\mu m}}{1.8\ \mu\mathrm{m}} = 5.0\ \mathrm{mV}. \ \checkmark
\end{aligned}
$$

### Step 4 — How the offset depends on the width

$V_{OS} = 9/\sqrt{0.5\,W}$ (mV, with $W$ in µm):

| $W$ (µm) | $WL$ (µm²) | $\sqrt{WL}$ (µm) | $V_{OS}$ (mV) |
|---|---|---|---|
| 3 | 1.5 | 1.225 | 7.35 |
| 6.48 | 3.24 | 1.800 | 5.00 |
| 10 | 5 | 2.236 | 4.02 |
| 20 | 10 | 3.162 | 2.85 |

Since $V_{OS} \propto 1/\sqrt{W}$ at fixed $L$, halving the offset takes four times the width (and four times the gate capacitance).

### Result

$$W_{min} = \frac{(9\ \mathrm{mV\cdot\mu m}/5\ \mathrm{mV})^2}{0.5\ \mu\mathrm{m}} = \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} \approx 6.5\ \mu\mathrm{m},$$

i.e. $W \ge 6.48\ \mu$m, a gate area $WL \ge 3.24\ \mu\mathrm{m}^2$ and $W/L \approx 13$, obtained from $V_{OS} = \Delta V_{TH} = 9\ \mathrm{mV\cdot\mu m}/\sqrt{WL} \le 5$ mV.

**Common mistake.** Forgetting to square: $\sqrt{WL} \ge 1.8$ followed by $W = 1.8/0.5 = 3.6\ \mu$m. That width gives an offset of $9/\sqrt{1.8} = 6.7$ mV, which violates the specification.

**Common mistake.** Mixing up the units of the empirical formula, for example entering $t_{ox}$ as 9 (nm) instead of 90 (Å). The coefficient becomes 0.9 instead of 9 mV·µm, and the width an absurd 0.065 µm, far below the channel length.

**Common mistake.** Adding other mismatch terms (such as $\Delta(W/L)$ or load mismatch) with invented values. The problem says to neglect them; with threshold mismatch alone the offset is exactly $\Delta V_{TH}$.
