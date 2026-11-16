# Detailed solution - R710

**Approach.** With one uniform dielectric, a layer's capacitance per unit area to the substrate is $\epsilon/h$, so the given values fix the height of each metal (in units of $\epsilon$). The capacitance between two stacked plates is $\epsilon$ divided by their separation. We compute the metal 4–metal 3 and metal 3–metal 2 capacitances this way, add them (the two are in parallel between the terminals), and identify the only plate that "sees" the substrate: the bottom one, metal 2.

### Step 1 — Heights from the substrate capacitances

For a parallel-plate structure with permittivity $\epsilon$ and spacing $h$, $C_{sub} = \epsilon/h$, so

$$h = \frac{\epsilon}{C_{sub}} .$$

Measuring heights in units of $\epsilon/(\mathrm{aF/\mu m^2})$:

$$
\begin{aligned}
h_4 &= \frac{1}{7.0} = 0.1429,\\
h_3 &= \frac{1}{9.0} = 0.1111,\\
h_2 &= \frac{1}{15} = 0.0667 .
\end{aligned}
$$

The ordering $h_4 > h_3 > h_2$ confirms that metal 4 is the top layer and metal 2 the lowest.

### Step 2 — Capacitance between two stacked layers

Two plates $i$ (above) and $j$ (below) separated by $h_i - h_j$ of the same dielectric have, per unit area,

$$C_{ij} = \frac{\epsilon}{h_i - h_j} = \frac{\epsilon}{\dfrac{\epsilon}{C_{sub,i}} - \dfrac{\epsilon}{C_{sub,j}}} = \frac{1}{\dfrac{1}{C_{sub,i}} - \dfrac{1}{C_{sub,j}}} .$$

Equivalently, layer $i$'s capacitance to the substrate is the series combination of $C_{ij}$ and $C_{sub,j}$: $1/C_{sub,i} = 1/C_{ij} + 1/C_{sub,j}$.

**Metal 4 – metal 3:**

$$\frac{1}{C_{43}} = \frac{1}{7} - \frac{1}{9} = \frac{9 - 7}{63} = \frac{2}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \quad\Longrightarrow\quad C_{43} = 31.5\ \mathrm{aF/\mu m^2}.$$

**Metal 3 – metal 2:**

$$\frac{1}{C_{32}} = \frac{1}{9} - \frac{1}{15} = \frac{15 - 9}{135} = \frac{6}{135}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \quad\Longrightarrow\quad C_{32} = \frac{135}{6} = 22.5\ \mathrm{aF/\mu m^2}.$$

### Step 3 — Total capacitance between the terminals

The terminals are A = metal 4 + metal 2 (connected together) and B = metal 3. Metal 3 is sandwiched between the two plates of terminal A, so $C_{43}$ and $C_{32}$ both connect A to B: they are **in parallel**.

<!-- diagram: diagram-01.cir -->

$$C = C_{43} + C_{32} = 31.5 + 22.5 = 54\ \mathrm{aF/\mu m^2}.$$

Using the middle plate from both sides raises the density by $54/31.5 = 1.71$ compared with the two-layer (metal 4/metal 3) capacitor.

### Step 4 — Parasitic capacitance to the substrate

- **Metal 2** (bottom plate, part of terminal A) faces the substrate with nothing in between:
$$C_P = C_{sub,2} = 15\ \mathrm{aF/\mu m^2}.$$
- **Metal 3** is completely enclosed between metal 4 above and metal 2 below; all its field lines end on those plates, so it has no capacitance to the substrate.
- **Metal 4** is shielded from the substrate by metal 3 and metal 2.

So the only parasitic is that of metal 2, which belongs to terminal A. (Fringing is neglected, as instructed.)

### Step 5 — The ratio

$$\frac{C_P}{C} = \frac{15}{54} = 0.278 \approx 0.28 .$$

This is slightly better than the two-layer metal 4/metal 3 capacitor ($9/31.5 = 0.29$): the capacitance grew by 71 %, while the parasitic grew by 67 % (from 9 to 15 aF/µm², since metal 2 is closer to the substrate than metal 3).

### Result

Per unit area:

$$C = C_{43} + C_{32} = 31.5 + 22.5 = 54\ \mathrm{aF/\mu m^2}, \qquad C_P = 15\ \mathrm{aF/\mu m^2}, \qquad \frac{C_P}{C} \approx 0.28 .$$

**Common mistake.** Computing each interlayer capacitance as a difference or sum of substrate values (e.g. $9 - 7 = 2$ or $15 - 9 = 6$ aF/µm²). Capacitance is inversely proportional to spacing, so it is the reciprocals that subtract: $C_{ij} = 1/(1/C_{sub,i} - 1/C_{sub,j})$.

**Common mistake.** Counting only one interlayer capacitance. Because metal 4 and metal 2 are tied together, metal 3 couples to terminal A through both its top and bottom faces, and the two capacitances add.

**Common mistake.** Adding the substrate capacitances of metal 4 or metal 3 to $C_P$. Those plates are shielded by the plates beneath them; only the lowest plate, metal 2, sees the substrate.
