# Detailed solution - R616

**Approach.** When the only imperfection is a threshold mismatch, the input-referred offset voltage of a differential pair is simply that mismatch, $V_{OS} = \Delta V_{TH}$. We therefore require $\Delta V_{TH} \le 5$ mV, solve the mismatch formula for the gate area $WL$, and divide the area by the given channel length to get the minimum width.

### Step 1 — What the input offset voltage is

Consider an NMOS differential pair $M_1$–$M_2$ with the two sources tied together, a tail current source, and identical loads. The **input-referred offset voltage** $V_{OS}$ is the DC differential voltage that must be applied between the two gates to make the differential output zero. With identical loads, a zero differential output means that the two drain currents are equal, $I_{D1} = I_{D2}$.

Both transistors are in saturation, so we use the **square-law saturation current**

$$I_{D1} = \frac12\mu_nC_{ox}\frac{W}{L}\,(V_{GS1} - V_{TH1})^2, \qquad I_{D2} = \frac12\mu_nC_{ox}\frac{W}{L}\,(V_{GS2} - V_{TH2})^2 .$$

Here $\mu_nC_{ox}$ is the process transconductance parameter, $W/L$ the aspect ratio, $V_{GS}$ the gate–source voltage and $V_{TH}$ the threshold voltage. Because all mismatches other than the threshold are neglected, both devices have the same $\mu_nC_{ox}$ and the same $W/L$; only $V_{TH1}$ and $V_{TH2}$ differ.

Set $I_{D1} = I_{D2}$ and cancel the common factor $\tfrac12\mu_nC_{ox}W/L$:

$$(V_{GS1} - V_{TH1})^2 = (V_{GS2} - V_{TH2})^2 .$$

Both overdrive voltages $V_{GS} - V_{TH}$ are positive for conducting devices, so we may take the positive square root of both sides:

$$V_{GS1} - V_{TH1} = V_{GS2} - V_{TH2} .$$

Rearrange:

$$V_{GS1} - V_{GS2} = V_{TH1} - V_{TH2} .$$

The two sources are connected to the same node, so $V_{GS1} - V_{GS2} = V_{G1} - V_{G2}$, which is exactly the differential input voltage. Hence the input voltage that balances the pair is

$$V_{OS} = |V_{TH1} - V_{TH2}| = \Delta V_{TH} .$$

**Intuition.** The transistor with the higher threshold needs exactly that much more gate voltage to carry the same current. Note also that this offset term does not depend on the bias current or the overdrive voltage, unlike the offset caused by $W/L$ or load mismatch.

### Step 2 — The mismatch formula and its units

The threshold mismatch is given as

$$\Delta V_{TH} = \frac{0.1\,t_{ox}}{\sqrt{WL}},$$

with $\Delta V_{TH}$ in millivolts, the gate-oxide thickness $t_{ox}$ in ångströms, and $W$, $L$ in micrometres. Substituting $t_{ox} = 90$ Å:

$$0.1\,t_{ox} = 0.1\times 90 = 9 \quad\Longrightarrow\quad \Delta V_{TH} = \frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} .$$

Here $\sqrt{WL}$ is in µm, so the units work out to mV. The mismatch falls as $1/\sqrt{WL}$: a larger gate area averages out more of the random microscopic variations (dopant atoms, oxide charge) that make two "identical" transistors differ.

(Strictly, a formula of this kind gives the *standard deviation* of the random mismatch. As the problem states, we treat it as the mismatch itself.)

### Step 3 — Required gate area

From Step 1, $V_{OS} = \Delta V_{TH}$. The specification $V_{OS} \le 5$ mV becomes

$$\frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \le 5\ \mathrm{mV} .$$

Multiply both sides by $\sqrt{WL}$ (a positive number, so the inequality keeps its direction) and divide by 5 mV:

$$\sqrt{WL} \ge \frac{9\ \mathrm{mV\cdot\mu m}}{5\ \mathrm{mV}} = 1.8\ \mu\mathrm{m} .$$

Square both sides (both are positive):

$$WL \ge (1.8\ \mu\mathrm{m})^2 = 3.24\ \mu\mathrm{m}^2 .$$

The offset *decreases* as the area grows, which is why the condition is a *minimum* area.

### Step 4 — Minimum width

The effective channel length is fixed at $L = 0.5\ \mu$m, so

$$W \ge \frac{3.24\ \mu\mathrm{m}^2}{L} = \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 6.48\ \mu\mathrm{m} .$$

The corresponding aspect ratio is

$$\frac{W}{L} = \frac{6.48\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 12.96 \approx 13 .$$

**Check.** With $W = 6.48\ \mu$m and $L = 0.5\ \mu$m:

$$
\begin{aligned}
WL &= 6.48\times 0.5 = 3.24\ \mu\mathrm{m}^2,\\
\sqrt{WL} &= 1.8\ \mu\mathrm{m},\\
\Delta V_{TH} &= \frac{9\ \mathrm{mV\cdot\mu m}}{1.8\ \mu\mathrm{m}} = 5.0\ \mathrm{mV}. \ \checkmark
\end{aligned}
$$

### Step 5 — How the offset depends on the width

To see the trend, evaluate $V_{OS} = 9/\sqrt{0.5\,W}$ (mV, with $W$ in µm) for a few widths:

| $W$ (µm) | $WL$ (µm²) | $\sqrt{WL}$ (µm) | $V_{OS}$ (mV) |
|---|---|---|---|
| 3 | 1.5 | 1.225 | 7.35 |
| 6.48 | 3.24 | 1.800 | 5.00 |
| 10 | 5 | 2.236 | 4.02 |
| 20 | 10 | 3.162 | 2.85 |

Because $V_{OS} \propto 1/\sqrt{W}$ at fixed $L$, halving the offset requires four times the width (and four times the gate capacitance). Offset is reduced only slowly and expensively by making the devices larger.

### Result

$$W_{min} = \frac{(9\ \mathrm{mV\cdot\mu m}/5\ \mathrm{mV})^2}{0.5\ \mu\mathrm{m}} = \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} \approx 6.5\ \mu\mathrm{m},$$

i.e. $W \ge 6.48\ \mu$m, a gate area $WL \ge 3.24\ \mu\mathrm{m}^2$ and $W/L \approx 13$, obtained from $V_{OS} = \Delta V_{TH} = 9\ \mathrm{mV\cdot\mu m}/\sqrt{WL} \le 5$ mV.

**Common mistake.** Forgetting to square: writing $\sqrt{WL} \ge 1.8$ and then $W = 1.8/0.5 = 3.6\ \mu$m. The mismatch depends on the *square root* of the area, so the area must be $(1.8\ \mu\mathrm{m})^2$. With $W = 3.6\ \mu$m the offset would be $9/\sqrt{1.8} = 6.7$ mV, which violates the specification.

**Common mistake.** Mixing up the units of the empirical formula, for example entering $t_{ox}$ as 9 (nm) instead of 90 (Å). That makes the coefficient 0.9 instead of 9 mV·µm and gives an absurd width of about 0.065 µm, far below the channel length. Empirical formulas are valid only in the units for which they were written.

**Common mistake.** Adding other mismatch terms (such as $\Delta(W/L)$ or load mismatch) with invented values. The problem says to neglect them; with threshold mismatch alone the offset is exactly $\Delta V_{TH}$, independent of the bias current.
