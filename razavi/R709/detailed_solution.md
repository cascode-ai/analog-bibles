# Detailed solution - R709

**Approach.** With a single uniform dielectric of permittivity $\epsilon$, each layer's capacitance per unit area to the substrate is $\epsilon/h$, where $h$ is its height above the substrate. The given values therefore tell us the heights of metal 3 and metal 4 (in units of $\epsilon$). The capacitance between the two metals is $\epsilon$ divided by their vertical separation, and the parasitic capacitance of the bottom plate is simply metal 3's own capacitance to the substrate, because metal 4 is shielded by metal 3.

### Step 1 — Heights of the layers from their substrate capacitances

For a parallel-plate capacitor with dielectric permittivity $\epsilon$ and spacing $h$, the capacitance per unit area is

$$C_{sub} = \frac{\epsilon}{h} \quad\Longrightarrow\quad h = \frac{\epsilon}{C_{sub}} .$$

Apply this to each metal layer alone above the substrate:

$$h_4 = \frac{\epsilon}{C_{sub,4}} = \frac{\epsilon}{7.0\ \mathrm{aF/\mu m^2}}, \qquad h_3 = \frac{\epsilon}{C_{sub,3}} = \frac{\epsilon}{9.0\ \mathrm{aF/\mu m^2}} .$$

Metal 4 has the smaller capacitance, so it is higher above the substrate ($h_4 > h_3$), as expected.

### Step 2 — Capacitance between metal 4 and metal 3

When metal 3 lies directly beneath metal 4, the two plates are separated by $h_4 - h_3$ of the same dielectric (layer thicknesses neglected). Hence, per unit area,

$$C = \frac{\epsilon}{h_4 - h_3} .$$

Substitute the heights from Step 1:

$$C = \frac{\epsilon}{\dfrac{\epsilon}{C_{sub,4}} - \dfrac{\epsilon}{C_{sub,3}}} = \frac{1}{\dfrac{1}{C_{sub,4}} - \dfrac{1}{C_{sub,3}}} .$$

**Equivalent view (series capacitors).** Metal 4's capacitance to the substrate, without metal 3 in between, is the series combination of "metal 4 to the plane of metal 3" and "plane of metal 3 to the substrate":

$$\frac{1}{C_{sub,4}} = \frac{1}{C} + \frac{1}{C_{sub,3}} \quad\Longrightarrow\quad \frac{1}{C} = \frac{1}{C_{sub,4}} - \frac{1}{C_{sub,3}} .$$

Both views give the same formula. **Numbers:**

$$
\begin{aligned}
\frac{1}{C} &= \frac{1}{7.0} - \frac{1}{9.0}\ \ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} = \frac{9 - 7}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} = \frac{2}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}},\\
C &= \frac{63}{2}\ \mathrm{aF/\mu m^2} = 31.5\ \mathrm{aF/\mu m^2}.
\end{aligned}
$$

The metal-to-metal capacitance is much larger than either substrate capacitance because the two metals are much closer to each other than to the substrate: $h_4 - h_3 = h_4(1 - 7/9) = 0.22h_4$.

### Step 3 — Parasitic capacitance of the bottom plate

**Bottom plate (metal 3).** Nothing lies between metal 3 and the substrate, so its capacitance to the substrate is the given value:

$$C_P = C_{sub,3} = 9.0\ \mathrm{aF/\mu m^2}.$$

**Top plate (metal 4).** Every field line leaving metal 4 downward ends on metal 3, which completely covers the area beneath it (fringing neglected). Metal 4 is therefore **shielded** and has no capacitance to the substrate. Its 7.0 aF/µm² "alone" value does not appear in the capacitor at all; it would only apply if metal 3 were absent.

### Step 4 — The ratio

$$\frac{C_P}{C} = \frac{9.0\ \mathrm{aF/\mu m^2}}{31.5\ \mathrm{aF/\mu m^2}} = 0.286 \approx 0.29 .$$

For every 1 pF of useful capacitance, the bottom plate carries about 0.29 pF of parasitic capacitance to the substrate. This is why such capacitors are connected with the bottom plate to a low-impedance (driven) node, and why designers use stacked or interleaved multi-layer structures to raise $C$ relative to $C_P$.

**Example.** A 1-pF capacitor needs an area of $1000\ \mathrm{fF}/(0.0315\ \mathrm{fF/\mu m^2}) = 31{,}700\ \mu\mathrm{m^2}$ (about 178 µm × 178 µm) and has $C_P = 0.0090\ \mathrm{fF/\mu m^2}\times31{,}700\ \mu\mathrm{m^2} \approx 0.29$ pF.

### Result

Per unit area:

$$C = \frac{1}{1/7.0 - 1/9.0}\ \mathrm{aF/\mu m^2} = 31.5\ \mathrm{aF/\mu m^2}, \qquad C_P = 9.0\ \mathrm{aF/\mu m^2}, \qquad \frac{C_P}{C} \approx 0.29 .$$

**Common mistake.** Taking $C$ as the difference ($9 - 7 = 2$ aF/µm²) or the sum ($16$ aF/µm²) of the substrate capacitances. Capacitances with a common dielectric scale as $1/h$, so it is the *reciprocals* that subtract: $1/C = 1/C_{sub,4} - 1/C_{sub,3}$.

**Common mistake.** Using metal 4's 7.0 aF/µm² as the parasitic, or adding it to metal 3's value. Metal 4 is the top plate and is fully shielded from the substrate by metal 3; only the bottom plate's own 9.0 aF/µm² is parasitic.
