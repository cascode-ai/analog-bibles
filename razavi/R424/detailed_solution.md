# Detailed solution - R424

**Approach.** The drain of $M_3$ is the diode side of the PMOS cascode current mirror, so its voltage is $V_{DD}$ minus two PMOS gate–source drops. $M_3$ stays saturated only if this voltage is at least $V_b - V_{TH}$. That caps $|V_{GS}|$ of the PMOS devices, i.e. their overdrive, and the square law then gives the minimum $W/L$.

### Step 1 — Reading the circuit

- $M_1$–$M_2$: NMOS input pair with tail $I_{SS} = 1$ mA at their common source.
- $M_3$–$M_4$: NMOS cascode devices, gates at $V_b = 1.4$ V.
- $M_5$–$M_8$: PMOS cascode current mirror. $M_7$ (top left) has its gate tied to its drain, and $M_5$ (below it) has its gate tied to its drain, which is also the drain of $M_3$. So the left branch is a stack of **two diode-connected PMOS devices** from $V_{DD}$ down to the drain of $M_3$. $M_8$ and $M_6$ copy the current into the output branch.
- The output (drain of $M_4$/$M_6$) is tied to the gate of $M_2$.

Each branch carries $I_{SS}/2 = 0.5$ mA (at balance).

### Step 2 — Voltage at the drain of $M_3$

Walk down the left branch from $V_{DD}$: across $M_7$ (diode) the drop is $|V_{GS7}|$, and across $M_5$ (diode) it is $|V_{GS5}|$:

$$V_{D3} = V_{DD} - |V_{GS7}| - |V_{GS5}| .$$

$M_5$ and $M_7$ are identical, carry the same 0.5 mA, and have no body effect ($\gamma = 0$), so their gate–source voltages are equal:

$$|V_{GS5}| = |V_{GS7}|\ \Longrightarrow\ V_{D3} = V_{DD} - 2|V_{GS5}| .$$

A larger PMOS width means a smaller $|V_{GS5}|$, which raises $V_{D3}$ and gives $M_3$ more room.

### Step 3 — Saturation condition of $M_3$

An NMOS is saturated when its drain is no lower than its gate voltage minus one threshold, $V_D \ge V_G - V_{TH}$ (equivalent to $V_{DS} \ge V_{GS} - V_{TH}$):

$$V_{D3} \ge V_b - V_{TH3} = 1.4 - 0.7 = 0.7\ \mathrm{V}.$$

Note that this condition does not depend on $M_3$'s own size or source voltage. Substitute $V_{D3}$:

$$
\begin{aligned}
V_{DD} - 2|V_{GS5}| &\ge 0.7\ \mathrm{V}\\
2|V_{GS5}| &\le 3 - 0.7 = 2.3\ \mathrm{V}\\
|V_{GS5}| &\le 1.15\ \mathrm{V}.
\end{aligned}
$$

So each PMOS overdrive is limited to

$$|V_{OD5}| = |V_{GS5}| - |V_{THP}| \le 1.15 - 0.8 = 0.35\ \mathrm{V}.$$

### Step 4 — Minimum aspect ratio and width

Square-law saturation current of $M_5$ (channel-length modulation ignored in the bias):

$$|I_{D5}| = \frac12\mu_pC_{ox}\frac WL\,|V_{OD5}|^2 .$$

A smaller overdrive at fixed current requires a larger $W/L$, so the limit $|V_{OD5}| = 0.35$ V gives the minimum aspect ratio:

$$
\begin{aligned}
\frac WL\bigg|_{min} &= \frac{2|I_{D5}|}{\mu_pC_{ox}|V_{OD5}|^2} = \frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.35\ \mathrm{V})^2}\\
&= \frac{1\times10^{-3}\ \mathrm{A}}{(38.4\times10^{-6}\ \mathrm{A/V^2})(0.1225\ \mathrm{V^2})} = \frac{1\times10^{-3}}{4.704\times10^{-6}} = 212.6 .
\end{aligned}
$$

With $L = 0.5\ \mu$m:

$$W_{min} = 212.6\times0.5\ \mu\mathrm{m} = 106.3\ \mu\mathrm{m} \approx 106\ \mu\mathrm{m}.$$

**Check.** With $W/L = 212.6$: $|V_{OD5}| = \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2}\times212.6)} = 0.350$ V, $|V_{GS5}| = 1.150$ V, $V_{D3} = 3 - 2.300 = 0.700$ V $= V_b - V_{TH}$: $M_3$ is exactly at the edge of saturation. ✓

### Step 5 — Remarks

- $M_6$, $M_8$ are identical to $M_5$, $M_7$ (the problem states all four are identical); they carry the same current and do not affect the condition.
- The problem asks for the condition on $M_3$ only. Making the PMOS devices wider than 106 μm lowers $|V_{GS}|$ and gives $M_3$ some margin.

### Result

$$V_{DD} - 2|V_{GS5}| \ge V_b - V_{TH}\ \Longrightarrow\ |V_{GS5}| \le 1.15\ \mathrm{V},\ |V_{OD5}| \le 0.35\ \mathrm{V}\ \Longrightarrow\ \left(\frac WL\right)_{5\text{–}8} \ge 213,$$

$$W_{min} \approx 106\ \mu\mathrm{m}\quad(L = 0.5\ \mu\mathrm{m}).$$

**Common mistake.** Writing the saturation condition as $V_{D3} \ge V_b - V_{GS3}$ or $V_{D3} \ge V_b$. The drain of an NMOS may go down to one *threshold* below its gate: $V_{D3} \ge V_b - V_{TH}$.

**Common mistake.** Counting only one PMOS drop. The cascode mirror stacks two diode-connected devices ($M_7$ and $M_5$) between $V_{DD}$ and the drain of $M_3$, so the drop is $2|V_{GS}|$.

**Common mistake.** Using $\mu_nC_{ox}$ for the PMOS devices. $M_5$–$M_8$ are PMOS, so $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ must be used; with the NMOS value the width would come out about 3.5 times too small.
