# Detailed solution - R618

**Approach.** With threshold mismatch as the only mismatch, the offset voltage of a differential pair equals that mismatch, $V_{OS} = \Delta V_{TH}$. We impose $\Delta V_{TH} \le 2$ mV, solve the mismatch formula for the gate area $WL$ and then for $W$, repeat the calculation for 5 mV, and compare the two widths through the scaling law $W \propto 1/V_{OS}^2$.

### Step 1 — Offset of a pair with threshold mismatch only

The input-referred offset voltage $V_{OS}$ is the DC differential input that makes the two drain currents equal (zero differential output with matched loads). With the **square-law saturation current** $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$ and identical $\mu_nC_{ox}$ and $W/L$ in both devices, equal currents require equal overdrive voltages:

$$V_{GS1} - V_{TH1} = V_{GS2} - V_{TH2} .$$

Rearranged:

$$V_{GS1} - V_{GS2} = V_{TH1} - V_{TH2} .$$

The two sources share one node, so $V_{GS1} - V_{GS2}$ is the differential gate voltage. Therefore

$$V_{OS} = \Delta V_{TH} = \frac{0.1\,t_{ox}}{\sqrt{WL}} .$$

With $t_{ox} = 90$ Å, $0.1\times 90 = 9$, so (with $W$, $L$ in µm and the result in mV)

$$V_{OS} = \frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} .$$

### Step 2 — Minimum width for $V_{OS} \le 2$ mV

Impose the specification:

$$\frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \le 2\ \mathrm{mV} .$$

Multiply by $\sqrt{WL} > 0$ and divide by 2 mV:

$$\sqrt{WL} \ge \frac{9\ \mathrm{mV\cdot\mu m}}{2\ \mathrm{mV}} = 4.5\ \mu\mathrm{m} .$$

Square both sides:

$$WL \ge (4.5\ \mu\mathrm{m})^2 = 20.25\ \mu\mathrm{m}^2 .$$

Divide by the channel length $L = 0.5\ \mu$m:

$$W \ge \frac{20.25\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 40.5\ \mu\mathrm{m}, \qquad \frac{W}{L} = \frac{40.5}{0.5} = 81 .$$

**Check.** $\sqrt{40.5\times0.5} = \sqrt{20.25} = 4.5\ \mu$m and $9/4.5 = 2.0$ mV. ✓

### Step 3 — Minimum width for $V_{OS} \le 5$ mV

The same steps with 5 mV:

$$
\begin{aligned}
\sqrt{WL} &\ge \frac{9\ \mathrm{mV\cdot\mu m}}{5\ \mathrm{mV}} = 1.8\ \mu\mathrm{m},\\
WL &\ge (1.8\ \mu\mathrm{m})^2 = 3.24\ \mu\mathrm{m}^2,\\
W &\ge \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 6.48\ \mu\mathrm{m}, \qquad \frac{W}{L} = 12.96 .
\end{aligned}
$$

### Step 4 — Comparison and scaling law

The ratio of the two widths is

$$\frac{W_{2\,\mathrm{mV}}}{W_{5\,\mathrm{mV}}} = \frac{40.5\ \mu\mathrm{m}}{6.48\ \mu\mathrm{m}} = 6.25 .$$

This is not a coincidence. Solving $V_{OS} = 9/\sqrt{WL}$ for $W$ at fixed $L$ gives

$$W = \frac{(9\ \mathrm{mV\cdot\mu m})^2}{L\,V_{OS}^2} \quad\Longrightarrow\quad W \propto \frac{1}{V_{OS}^2},$$

so reducing the offset by a factor of $5/2 = 2.5$ multiplies the width by

$$\left(\frac{5}{2}\right)^2 = 6.25 .$$

**Consequences.** Since $L$ is unchanged, the gate area, and with it the gate capacitance $C_{GS} \approx \tfrac23WLC_{ox}$ of each input device, also grows by 6.25. The amplifier presents a larger load to the preceding stage, and the parasitic poles it creates move to lower frequencies. In addition, at a given tail current the wider devices run at a lower overdrive voltage, which narrows the linear input range of the pair. Each halving of the offset costs four times the area, so low offset obtained purely by device sizing is expensive.

| Specification | $\sqrt{WL}$ | $WL$ | $W$ | $W/L$ |
|---|---|---|---|---|
| $V_{OS} \le 5$ mV | 1.8 µm | 3.24 µm² | 6.48 µm | 12.96 |
| $V_{OS} \le 2$ mV | 4.5 µm | 20.25 µm² | 40.5 µm | 81 |

### Result

$$W_{min}(2\ \mathrm{mV}) = \frac{(9/2)^2}{0.5}\ \mu\mathrm{m} = 40.5\ \mu\mathrm{m}\quad (W/L = 81),$$

compared with $W_{min}(5\ \mathrm{mV}) \approx 6.5\ \mu$m. The 2-mV design is **6.25 times wider** ($W \propto 1/V_{OS}^2$), with 6.25 times the gate area and input capacitance.

**Common mistake.** Assuming that the width scales as $1/V_{OS}$ and concluding that a 2.5-times smaller offset needs only a 2.5-times wider device (about 16 µm). The offset varies as $1/\sqrt{WL}$, so the area, and at fixed $L$ the width, must scale as $1/V_{OS}^2$. A 16-µm device would give $9/\sqrt{8} = 3.2$ mV.

**Common mistake.** Getting the comparison backwards, i.e. concluding that the tighter (2-mV) specification allows *smaller* devices. A smaller offset requires averaging over a *larger* gate area, so the device must grow.

**Common mistake.** Misreading the units of the empirical formula (for example $t_{ox}$ entered in nanometres), which produces sub-micron widths. The coefficient is $0.1\times90\ \text{Å} = 9$ mV·µm, with $W$ and $L$ in micrometres.
