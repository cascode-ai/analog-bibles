# Detailed solution - R524

**Approach.** The plot gives $r_O$ for the 5-µm device, so read it at 0.25 mA directly. A 10-µm device is two 5-µm devices in parallel, each carrying half the current: read $r_O$ at 0.125 mA and halve it. The product $r_OI_D$ explains the result.

### Step 1 — Case $W = 5\ \mu$m: read the plot directly

The plotted device is this transistor, at the same terminal voltages. At $I_D = 0.25$ mA the curve sits just at the 4-kΩ grid line (it passes 4.6 kΩ at 0.2 mA and 3.5 kΩ at 0.3 mA):

$$r_O(W = 5\ \mu\mathrm{m},\ 0.25\ \mathrm{mA}) \approx 4.0\ \mathrm{k\Omega}.$$

### Step 2 — Case $W = 10\ \mu$m: two 5-µm devices in parallel

The two halves share gate, drain and source, so they see the same $V_{GS}$ and $V_{DS}$ and carry equal currents:

$$I_{D,half} = \frac{0.25\ \mathrm{mA}}{2} = 0.125\ \mathrm{mA}.$$

<!-- diagram: diagram-01.cir -->

Each half is the plotted device at 0.125 mA (at the lower $V_{GS}$ that this current needs). Reading the plot at 0.125 mA (between 7.7 kΩ at 0.1 mA and 5.8 kΩ at 0.15 mA):

$$r_O(W = 5\ \mu\mathrm{m},\ 0.125\ \mathrm{mA}) \approx 6.6\ \mathrm{k\Omega}.$$

The two output resistances are in parallel:

$$r_O(W = 10\ \mu\mathrm{m}) = r_{O,half}\parallel r_{O,half} = \frac{r_{O,half}}{2} = \frac{6.6\ \mathrm{k\Omega}}{2} = 3.3\ \mathrm{k\Omega}.$$

### Step 3 — Compare

$$\frac{r_O(5\ \mu\mathrm{m})}{r_O(10\ \mu\mathrm{m})} = \frac{4.0\ \mathrm{k\Omega}}{3.3\ \mathrm{k\Omega}} \approx 1.2 .$$

The **5-µm device gives the higher output impedance**, by about 20 %.

### Step 4 — Why: $r_OI_D$ is not constant

The long-channel model $r_O = 1/(\lambda I_D)$ with a fixed $\lambda$ would predict the *same* $r_O$ for both widths. The plot shows $r_O$ falling *less* than in proportion to the current:

$$
\begin{aligned}
r_OI_D\big|_{0.125\ \mathrm{mA}} &= 6.6\ \mathrm{k\Omega}\times0.125\ \mathrm{mA} = 0.83\ \mathrm{V} \quad(\lambda_{eff} \approx 1.2\ \mathrm{V^{-1}}),\\
r_OI_D\big|_{0.25\ \mathrm{mA}} &= 4.0\ \mathrm{k\Omega}\times0.25\ \mathrm{mA} = 1.0\ \mathrm{V} \quad(\lambda_{eff} \approx 1.0\ \mathrm{V^{-1}}).
\end{aligned}
$$

At a fixed width, more current means a higher overdrive, and short-channel effects such as drain-induced barrier lowering (a $V_{DS}$-dependent threshold shift) affect the current relatively less at high overdrive. So the 5-µm device (higher current density, larger overdrive) has the smaller $\lambda_{eff}$ and the larger $r_O$; the 10-µm device spreads the current over twice the width and has the smaller $r_O$.

The price of the narrower device is a larger overdrive, hence a larger minimum $V_{DS}$ (less headroom) and a lower $g_m$ at the same current, for only about 20 % more $r_O$.

### Result

| Width | Equivalent reading from the plot | $r_O$ at $I_D = 0.25$ mA |
|---|---|---|
| $W = 5\ \mu$m | $r_O(0.25\ \mathrm{mA})$ | ≈ 4.0 kΩ |
| $W = 10\ \mu$m | $r_O(0.125\ \mathrm{mA})/2 = 6.6/2$ | ≈ 3.3 kΩ |

**$W = 5\ \mu$m yields the higher output impedance** (≈ 4.0 kΩ versus ≈ 3.3 kΩ, about 20 % higher), because for this device $r_OI_D$ grows with current density: ≈ 0.83 V at 0.125 mA per 5 µm and ≈ 1.0 V at 0.25 mA per 5 µm.

**Common mistake.** Concluding that both widths give the same $r_O$ because "$r_O = 1/(\lambda I_D)$ depends only on the current". In this nanometer device $\lambda$ depends on the overdrive, so the width matters.

**Common mistake.** Taking the 10-µm value as $r_O(0.25\ \mathrm{mA})/2 = 2$ kΩ. Each 5-µm half carries 0.125 mA, so the plot must be read at 0.125 mA before halving.

**Common mistake.** Reading 6.6 kΩ > 4 kΩ and forgetting to put the two halves in parallel. The whole 10-µm device has half of each half's resistance.
