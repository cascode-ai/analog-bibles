# Detailed solution - R424

**Approach.** The drain of $M_3$ is the diode side of the PMOS cascode mirror, so its voltage is $V_{DD}$ minus two PMOS gate–source drops. $M_3$ stays saturated only if this voltage is at least $V_b - V_{TH}$, which caps the PMOS overdrive; the square law then gives the minimum $W/L$.

### Step 1 — Voltage at the drain of $M_3$

In the left branch, $M_7$ and $M_5$ are both diode-connected, stacked from $V_{DD}$ down to the drain of $M_3$, and each branch carries $I_{SS}/2 = 0.5$ mA. So

$$V_{D3} = V_{DD} - |V_{GS7}| - |V_{GS5}| .$$

$M_5$ and $M_7$ are identical, carry the same current and have no body effect ($\gamma = 0$), so

$$|V_{GS5}| = |V_{GS7}|\ \Longrightarrow\ V_{D3} = V_{DD} - 2|V_{GS5}| .$$

A wider PMOS means a smaller $|V_{GS5}|$, which raises $V_{D3}$ and gives $M_3$ more room.

### Step 2 — Saturation condition of $M_3$

$M_3$ is saturated while $V_{D3} \ge V_G - V_{TH}$, independent of its own size or source voltage:

$$V_{D3} \ge V_b - V_{TH3} = 1.4 - 0.7 = 0.7\ \mathrm{V}.$$

Substituting $V_{D3}$:

$$
\begin{aligned}
V_{DD} - 2|V_{GS5}| &\ge 0.7\ \mathrm{V}\\
2|V_{GS5}| &\le 3 - 0.7 = 2.3\ \mathrm{V}\\
|V_{GS5}| &\le 1.15\ \mathrm{V},
\end{aligned}
$$

$$|V_{OD5}| = |V_{GS5}| - |V_{THP}| \le 1.15 - 0.8 = 0.35\ \mathrm{V}.$$

### Step 3 — Minimum aspect ratio and width

With $|I_{D5}| = \frac12\mu_pC_{ox}\frac WL|V_{OD5}|^2$, a smaller overdrive at fixed current needs a larger $W/L$, so the limit $|V_{OD5}| = 0.35$ V gives the minimum:

$$
\begin{aligned}
\frac WL\bigg|_{min} &= \frac{2|I_{D5}|}{\mu_pC_{ox}|V_{OD5}|^2} = \frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.35\ \mathrm{V})^2}\\
&= \frac{1\times10^{-3}\ \mathrm{A}}{(38.4\times10^{-6}\ \mathrm{A/V^2})(0.1225\ \mathrm{V^2})} = \frac{1\times10^{-3}}{4.704\times10^{-6}} = 212.6 .
\end{aligned}
$$

With $L = 0.5\ \mu$m:

$$W_{min} = 212.6\times0.5\ \mu\mathrm{m} = 106.3\ \mu\mathrm{m} \approx 106\ \mu\mathrm{m}.$$

**Check.** With $W/L = 212.6$: $|V_{OD5}| = \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2}\times212.6)} = 0.350$ V, $|V_{GS5}| = 1.150$ V, $V_{D3} = 3 - 2.300 = 0.700$ V $= V_b - V_{TH}$: $M_3$ is exactly at the edge of saturation. ✓ A wider device gives $M_3$ some margin.

### Result

$$V_{DD} - 2|V_{GS5}| \ge V_b - V_{TH}\ \Longrightarrow\ |V_{GS5}| \le 1.15\ \mathrm{V},\ |V_{OD5}| \le 0.35\ \mathrm{V}\ \Longrightarrow\ \left(\frac WL\right)_{5\text{–}8} \ge 213,$$

$$W_{min} \approx 106\ \mu\mathrm{m}\quad(L = 0.5\ \mu\mathrm{m}).$$

**Common mistake.** Writing the saturation condition as $V_{D3} \ge V_b - V_{GS3}$ or $V_{D3} \ge V_b$. The drain of an NMOS may go down to one *threshold* below its gate.

**Common mistake.** Counting only one PMOS drop. The cascode mirror stacks two diode-connected devices ($M_7$ and $M_5$) above the drain of $M_3$.

**Common mistake.** Using $\mu_nC_{ox}$ for the PMOS devices, which makes the width come out about 3.5 times too small.
