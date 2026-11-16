# Detailed solution - R709

**Approach.** With a single uniform dielectric $\epsilon$, each layer's capacitance per unit area to the substrate is $\epsilon/h$, so the given values fix the heights of metal 3 and metal 4 (in units of $\epsilon$). The capacitance between the metals is $\epsilon$ over their separation, and the bottom-plate parasitic is metal 3's own capacitance to the substrate, since metal 4 is shielded by metal 3.

### Step 1 — Heights of the layers from their substrate capacitances

From $C_{sub} = \epsilon/h$, i.e. $h = \epsilon/C_{sub}$:

$$h_4 = \frac{\epsilon}{C_{sub,4}} = \frac{\epsilon}{7.0\ \mathrm{aF/\mu m^2}}, \qquad h_3 = \frac{\epsilon}{C_{sub,3}} = \frac{\epsilon}{9.0\ \mathrm{aF/\mu m^2}} ,$$

so metal 4, with the smaller capacitance, is higher ($h_4 > h_3$).

### Step 2 — Capacitance between metal 4 and metal 3

The plates are separated by $h_4 - h_3$ of the same dielectric (layer thicknesses neglected), so per unit area

$$C = \frac{\epsilon}{h_4 - h_3} = \frac{\epsilon}{\dfrac{\epsilon}{C_{sub,4}} - \dfrac{\epsilon}{C_{sub,3}}} = \frac{1}{\dfrac{1}{C_{sub,4}} - \dfrac{1}{C_{sub,3}}} .$$

Equivalently, metal 4's capacitance to the substrate (without metal 3) is "metal 4 to the plane of metal 3" in series with "plane of metal 3 to the substrate":

$$\frac{1}{C_{sub,4}} = \frac{1}{C} + \frac{1}{C_{sub,3}} \quad\Longrightarrow\quad \frac{1}{C} = \frac{1}{C_{sub,4}} - \frac{1}{C_{sub,3}} .$$

**Numbers:**

$$
\begin{aligned}
\frac{1}{C} &= \frac{1}{7.0} - \frac{1}{9.0}\ \ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} = \frac{9 - 7}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} = \frac{2}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}},\\
C &= \frac{63}{2}\ \mathrm{aF/\mu m^2} = 31.5\ \mathrm{aF/\mu m^2}.
\end{aligned}
$$

$C$ is much larger than either substrate capacitance because the metals are much closer to each other than to the substrate: $h_4 - h_3 = h_4(1 - 7/9) = 0.22h_4$.

### Step 3 — Parasitic capacitance and the ratio

Nothing lies between metal 3 and the substrate, so the bottom-plate parasitic is the given value:

$$C_P = C_{sub,3} = 9.0\ \mathrm{aF/\mu m^2}.$$

Every downward field line from metal 4 ends on metal 3, which covers the whole area beneath it (fringing neglected), so the top plate is **shielded** and has no capacitance to the substrate; its 7.0 aF/µm² would apply only without metal 3.

$$\frac{C_P}{C} = \frac{9.0\ \mathrm{aF/\mu m^2}}{31.5\ \mathrm{aF/\mu m^2}} = 0.286 \approx 0.29 .$$

Each 1 pF of useful capacitance thus carries about 0.29 pF of bottom-plate parasitic, which is why the bottom plate is connected to a low-impedance (driven) node, and why stacked or interleaved multi-layer structures are used to raise $C$ relative to $C_P$.

**Example.** A 1-pF capacitor needs $1000\ \mathrm{fF}/(0.0315\ \mathrm{fF/\mu m^2}) = 31{,}700\ \mu\mathrm{m^2}$ (about 178 µm × 178 µm) and has $C_P = 0.0090\ \mathrm{fF/\mu m^2}\times31{,}700\ \mu\mathrm{m^2} \approx 0.29$ pF.

### Result

Per unit area:

$$C = \frac{1}{1/7.0 - 1/9.0}\ \mathrm{aF/\mu m^2} = 31.5\ \mathrm{aF/\mu m^2}, \qquad C_P = 9.0\ \mathrm{aF/\mu m^2}, \qquad \frac{C_P}{C} \approx 0.29 .$$

**Common mistake.** Taking $C$ as the difference ($9 - 7 = 2$ aF/µm²) or the sum ($16$ aF/µm²) of the substrate capacitances. With a common dielectric capacitances scale as $1/h$, so the *reciprocals* subtract.

**Common mistake.** Using metal 4's 7.0 aF/µm² as the parasitic, or adding it to metal 3's. Metal 4 is fully shielded by metal 3; only the bottom plate's 9.0 aF/µm² is parasitic.
