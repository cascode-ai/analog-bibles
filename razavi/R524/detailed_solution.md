# Detailed solution - R524

**Approach.** The plot gives $r_O$ only for a 5-µm-wide device. For $W = 5\ \mu$m we read $r_O$ at 0.25 mA directly. For $W = 10\ \mu$m we use the fact that a transistor twice as wide is exactly two 5-µm transistors in parallel, sharing all terminals and each carrying half the current. We read $r_O$ at 0.125 mA and halve it. Comparing the two values answers the question, and the product $r_OI_D$ explains the result.

### Step 1 — Case $W = 5\ \mu$m: read the plot directly

The plotted device is exactly this transistor ($W/L = 5\ \mu\mathrm{m}/40\ \mathrm{nm}$), at the same terminal voltages. At $I_D = 0.25$ mA the curve sits just at the 4-kΩ grid line (it passes 4.6 kΩ at 0.2 mA and 3.5 kΩ at 0.3 mA):

$$r_O(W = 5\ \mu\mathrm{m},\ 0.25\ \mathrm{mA}) \approx 4.0\ \mathrm{k\Omega}.$$

### Step 2 — Case $W = 10\ \mu$m: split into two 5-µm devices

A 10-µm transistor with $L = 40$ nm is identical to two 5-µm transistors connected in parallel: gates together, drains together, sources together. Both halves see the same $V_{GS}$ and $V_{DS}$, so by symmetry they carry equal currents:

$$I_{D,half} = \frac{0.25\ \mathrm{mA}}{2} = 0.125\ \mathrm{mA}.$$

<!-- diagram: diagram-01.cir -->

Each half is therefore the plotted device operating at 0.125 mA. (It needs the same $V_{GS}$ that the 5-µm device needs for 0.125 mA, which is lower than the $V_{GS}$ for 0.25 mA.) Reading the plot at 0.125 mA (between 7.7 kΩ at 0.1 mA and 5.8 kΩ at 0.15 mA):

$$r_O(W = 5\ \mu\mathrm{m},\ 0.125\ \mathrm{mA}) \approx 6.6\ \mathrm{k\Omega}.$$

### Step 3 — Combine the two halves

Small-signal output resistances of devices sharing the same drain and source are in **parallel**. A drain-voltage change $\Delta V_{DS}$ changes each half's current by $\Delta V_{DS}/r_{O,half}$, and the total current change is twice that:

$$r_O(W = 10\ \mu\mathrm{m}) = r_{O,half}\parallel r_{O,half} = \frac{r_{O,half}}{2} = \frac{6.6\ \mathrm{k\Omega}}{2} = 3.3\ \mathrm{k\Omega}.$$

### Step 4 — Compare

$$\frac{r_O(5\ \mu\mathrm{m})}{r_O(10\ \mu\mathrm{m})} = \frac{4.0\ \mathrm{k\Omega}}{3.3\ \mathrm{k\Omega}} \approx 1.2 .$$

The **5-µm device gives the higher output impedance**, by about 20 %.

### Step 5 — Why: $r_OI_D$ is not constant

The long-channel model $r_O = 1/(\lambda I_D)$ with a fixed channel-length modulation coefficient $\lambda$ would predict the *same* $r_O$ for both widths, since both carry 0.25 mA. The plot shows that $r_O$ falls *less* than in proportion to the current. Compute $r_OI_D$, which equals $1/\lambda$ in that model:

$$
\begin{aligned}
r_OI_D\big|_{0.125\ \mathrm{mA}} &= 6.6\ \mathrm{k\Omega}\times0.125\ \mathrm{mA} = 0.83\ \mathrm{V} \quad(\lambda_{eff} \approx 1.2\ \mathrm{V^{-1}}),\\
r_OI_D\big|_{0.25\ \mathrm{mA}} &= 4.0\ \mathrm{k\Omega}\times0.25\ \mathrm{mA} = 1.0\ \mathrm{V} \quad(\lambda_{eff} \approx 1.0\ \mathrm{V^{-1}}).
\end{aligned}
$$

For a fixed width, a higher current means a higher overdrive $V_{GS} - V_{TH}$ (gate voltage above threshold) and a higher current density. At higher overdrive the relative output conductance $\lambda_{eff}$ is smaller: short-channel effects such as drain-induced barrier lowering act like a $V_{DS}$-dependent threshold shift, whose relative effect on the current is weaker when the overdrive is large.

- The 5-µm device carries 0.25 mA in a narrow channel: high current density, larger overdrive, smaller $\lambda_{eff}$, larger $r_O$.
- The 10-µm device spreads the same current over twice the width: lower density, smaller overdrive, larger $\lambda_{eff}$, smaller $r_O$.

**Trade-off.** The narrower device needs a larger overdrive, so it requires a larger minimum $V_{DS}$ to stay in saturation (less voltage headroom), and it has a lower $g_m$ at the same current. Here the gain in $r_O$ is only about 20 %.

### Result

| Width | Equivalent reading from the plot | $r_O$ at $I_D = 0.25$ mA |
|---|---|---|
| $W = 5\ \mu$m | $r_O(0.25\ \mathrm{mA})$ | ≈ 4.0 kΩ |
| $W = 10\ \mu$m | $r_O(0.125\ \mathrm{mA})/2 = 6.6/2$ | ≈ 3.3 kΩ |

**$W = 5\ \mu$m yields the higher output impedance** (≈ 4.0 kΩ versus ≈ 3.3 kΩ, about 20 % higher), because for this device $r_OI_D$ grows with current density: ≈ 0.83 V at 0.125 mA per 5 µm and ≈ 1.0 V at 0.25 mA per 5 µm.

**Common mistake.** Concluding that both widths give the same $r_O$ because "$r_O = 1/(\lambda I_D)$ depends only on the current". In this nanometer device $\lambda$ depends on the overdrive (the plot's $r_OI_D$ changes with current), so the width matters.

**Common mistake.** Taking the 10-µm value as $r_O(0.25\ \mathrm{mA})/2 = 2$ kΩ. Doubling the width at the same total current halves the current *in each 5-µm half*. Each half therefore operates at 0.125 mA, not 0.25 mA, and one must read the plot at 0.125 mA before halving.

**Common mistake.** Concluding that the wider device has a higher $r_O$ because each half sees less current (6.6 kΩ > 4 kΩ) and forgetting to put the two halves in parallel. The output resistance of the whole 10-µm device is half of each half's resistance.
