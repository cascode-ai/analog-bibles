# Detailed solution - R710

**Approach.** With one uniform dielectric, a layer's capacitance per unit area to the substrate is $\epsilon/h$, so the given values fix each metal's height (in units of $\epsilon$), and two stacked plates have $\epsilon$ over their separation. Compute the metal 4–metal 3 and metal 3–metal 2 capacitances, add them (they are in parallel between the terminals), and note that only the bottom plate, metal 2, sees the substrate.

### Step 1 — Heights from the substrate capacitances

From $h = \epsilon/C_{sub}$, in units of $\epsilon/(\mathrm{aF/\mu m^2})$:

$$
\begin{aligned}
h_4 &= \frac{1}{7.0} = 0.1429,\\
h_3 &= \frac{1}{9.0} = 0.1111,\\
h_2 &= \frac{1}{15} = 0.0667 ,
\end{aligned}
$$

so metal 4 is the top layer and metal 2 the lowest.

### Step 2 — Capacitance between two stacked layers

Plates $i$ (above) and $j$ (below), separated by $h_i - h_j$ of the same dielectric, have per unit area

$$C_{ij} = \frac{\epsilon}{h_i - h_j} = \frac{\epsilon}{\dfrac{\epsilon}{C_{sub,i}} - \dfrac{\epsilon}{C_{sub,j}}} = \frac{1}{\dfrac{1}{C_{sub,i}} - \dfrac{1}{C_{sub,j}}} ,$$

equivalently $1/C_{sub,i} = 1/C_{ij} + 1/C_{sub,j}$ (layer $i$ to the substrate is $C_{ij}$ in series with $C_{sub,j}$).

**Metal 4 – metal 3:**

$$\frac{1}{C_{43}} = \frac{1}{7} - \frac{1}{9} = \frac{9 - 7}{63} = \frac{2}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \quad\Longrightarrow\quad C_{43} = 31.5\ \mathrm{aF/\mu m^2}.$$

**Metal 3 – metal 2:**

$$\frac{1}{C_{32}} = \frac{1}{9} - \frac{1}{15} = \frac{15 - 9}{135} = \frac{6}{135}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \quad\Longrightarrow\quad C_{32} = \frac{135}{6} = 22.5\ \mathrm{aF/\mu m^2}.$$

### Step 3 — Total capacitance between the terminals

The terminals are A = metal 4 + metal 2 and B = metal 3. Metal 3 is sandwiched between the two plates of terminal A, so $C_{43}$ and $C_{32}$ both connect A to B, **in parallel**:

<!-- diagram: diagram-01.cir -->

$$C = C_{43} + C_{32} = 31.5 + 22.5 = 54\ \mathrm{aF/\mu m^2}.$$

Using the middle plate from both sides raises the density by $54/31.5 = 1.71$ compared with the two-layer (metal 4/metal 3) capacitor.

### Step 4 — Parasitic capacitance and the ratio

Metal 2 (bottom plate, part of terminal A) faces the substrate with nothing in between:

$$C_P = C_{sub,2} = 15\ \mathrm{aF/\mu m^2}.$$

Metal 3 is enclosed between metal 4 and metal 2, and metal 4 is shielded by metal 3 and metal 2, so neither has capacitance to the substrate (fringing neglected). Then

$$\frac{C_P}{C} = \frac{15}{54} = 0.278 \approx 0.28 ,$$

slightly better than the two-layer metal 4/metal 3 capacitor ($9/31.5 = 0.29$): the capacitance grew by 71 %, the parasitic by 67 % (from 9 to 15 aF/µm², since metal 2 is closer to the substrate than metal 3).

### Result

Per unit area:

$$C = C_{43} + C_{32} = 31.5 + 22.5 = 54\ \mathrm{aF/\mu m^2}, \qquad C_P = 15\ \mathrm{aF/\mu m^2}, \qquad \frac{C_P}{C} \approx 0.28 .$$

**Common mistake.** Computing each interlayer capacitance as a difference or sum of substrate values (e.g. $9 - 7 = 2$ or $15 - 9 = 6$ aF/µm²). Capacitance is inversely proportional to spacing, so the reciprocals subtract: $C_{ij} = 1/(1/C_{sub,i} - 1/C_{sub,j})$.

**Common mistake.** Counting only one interlayer capacitance. With metal 4 and metal 2 tied together, metal 3 couples to terminal A through both faces, and the two capacitances add.

**Common mistake.** Adding the substrate capacitances of metal 4 or metal 3 to $C_P$. Those plates are shielded; only the lowest plate, metal 2, sees the substrate.
