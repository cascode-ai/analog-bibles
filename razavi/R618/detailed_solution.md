# Detailed solution - R618

**Approach.** With threshold mismatch alone, the offset of a differential pair equals that mismatch, $V_{OS} = \Delta V_{TH}$. Impose $\Delta V_{TH} \le 2$ mV, solve the mismatch formula for the gate area $WL$ and then for $W$, repeat for 5 mV, and compare the two widths through the scaling law $W \propto 1/V_{OS}^2$.

### Step 1 — Minimum width for $V_{OS} \le 2$ mV

With identical $\mu_nC_{ox}$ and $W/L$, equal drain currents need equal overdrives, so the gates must differ by the threshold difference and $V_{OS} = \Delta V_{TH}$. With $t_{ox} = 90$ Å, $0.1\times 90 = 9$ (with $W$, $L$ in µm and the result in mV), so the specification reads

$$V_{OS} = \frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \le 2\ \mathrm{mV} .$$

Solving with $L = 0.5\ \mu$m:

$$
\begin{aligned}
\sqrt{WL} &\ge \frac{9\ \mathrm{mV\cdot\mu m}}{2\ \mathrm{mV}} = 4.5\ \mu\mathrm{m},\\
WL &\ge (4.5\ \mu\mathrm{m})^2 = 20.25\ \mu\mathrm{m}^2,\\
W &\ge \frac{20.25\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 40.5\ \mu\mathrm{m}, \qquad \frac{W}{L} = \frac{40.5}{0.5} = 81 .
\end{aligned}
$$

**Check.** $\sqrt{40.5\times0.5} = \sqrt{20.25} = 4.5\ \mu$m and $9/4.5 = 2.0$ mV. ✓

### Step 2 — Minimum width for $V_{OS} \le 5$ mV

The same steps with 5 mV:

$$
\begin{aligned}
\sqrt{WL} &\ge \frac{9\ \mathrm{mV\cdot\mu m}}{5\ \mathrm{mV}} = 1.8\ \mu\mathrm{m},\\
WL &\ge (1.8\ \mu\mathrm{m})^2 = 3.24\ \mu\mathrm{m}^2,\\
W &\ge \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 6.48\ \mu\mathrm{m}, \qquad \frac{W}{L} = 12.96 .
\end{aligned}
$$

### Step 3 — Comparison and scaling law

$$\frac{W_{2\,\mathrm{mV}}}{W_{5\,\mathrm{mV}}} = \frac{40.5\ \mu\mathrm{m}}{6.48\ \mu\mathrm{m}} = 6.25 .$$

Solving $V_{OS} = 9/\sqrt{WL}$ for $W$ at fixed $L$ shows why:

$$W = \frac{(9\ \mathrm{mV\cdot\mu m})^2}{L\,V_{OS}^2} \quad\Longrightarrow\quad W \propto \frac{1}{V_{OS}^2},$$

so reducing the offset by $5/2 = 2.5$ multiplies the width by

$$\left(\frac{5}{2}\right)^2 = 6.25 .$$

**Consequences.** At fixed $L$ the gate area and the gate capacitance $C_{GS} \approx \tfrac23WLC_{ox}$ of each input device also grow by 6.25, loading the preceding stage and lowering the parasitic poles. At a given tail current the wider devices also run at a lower overdrive, which narrows the pair's linear input range. Each halving of the offset costs four times the area.

| Specification | $\sqrt{WL}$ | $WL$ | $W$ | $W/L$ |
|---|---|---|---|---|
| $V_{OS} \le 5$ mV | 1.8 µm | 3.24 µm² | 6.48 µm | 12.96 |
| $V_{OS} \le 2$ mV | 4.5 µm | 20.25 µm² | 40.5 µm | 81 |

### Result

$$W_{min}(2\ \mathrm{mV}) = \frac{(9/2)^2}{0.5}\ \mu\mathrm{m} = 40.5\ \mu\mathrm{m}\quad (W/L = 81),$$

compared with $W_{min}(5\ \mathrm{mV}) \approx 6.5\ \mu$m. The 2-mV design is **6.25 times wider** ($W \propto 1/V_{OS}^2$), with 6.25 times the gate area and input capacitance.

**Common mistake.** Assuming $W \propto 1/V_{OS}$, so that a 2.5-times smaller offset needs only a 2.5-times wider device (about 16 µm). The offset varies as $1/\sqrt{WL}$, and a 16-µm device would give $9/\sqrt{8} = 3.2$ mV.

**Common mistake.** Getting the comparison backwards, i.e. concluding that the tighter 2-mV specification allows *smaller* devices. A smaller offset needs a *larger* gate area.

**Common mistake.** Misreading the units of the empirical formula (for example $t_{ox}$ entered in nanometres), which produces sub-micron widths. With $t_{ox} = 90$ Å the coefficient is $0.1\times90 = 9$ mV·µm, with $W$ and $L$ in micrometres.
