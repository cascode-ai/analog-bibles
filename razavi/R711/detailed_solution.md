# Detailed solution - R711

**Approach.** With one uniform dielectric, each layer's capacitance per unit area to the substrate is $\epsilon/h$, which tells us the height of each metal (in units of $\epsilon$). The capacitance between two consecutive layers is $\epsilon$ divided by their separation. Because the terminals alternate (A = metal 4 + metal 2, B = metal 3 + metal 1), all three interlayer capacitances connect A to B and add in parallel. Only the lowest plate, metal 1, sees the substrate.

### Step 1 — Heights from the substrate capacitances

$C_{sub} = \epsilon/h$ for a parallel-plate structure, so $h = \epsilon/C_{sub}$. In units of $\epsilon/(\mathrm{aF/\mu m^2})$:

$$
\begin{aligned}
h_4 &= 1/7.0 = 0.1429,\\
h_3 &= 1/9.0 = 0.1111,\\
h_2 &= 1/15 = 0.0667,\\
h_1 &= 1/30 = 0.0333 .
\end{aligned}
$$

The heights decrease from metal 4 down to metal 1, as they should.

### Step 2 — Interlayer capacitances

For plates $i$ (upper) and $j$ (lower), separated by $h_i - h_j$:

$$C_{ij} = \frac{\epsilon}{h_i - h_j} = \frac{1}{\dfrac{1}{C_{sub,i}} - \dfrac{1}{C_{sub,j}}} .$$

(Equivalently, $C_{sub,i}$ is the series combination of $C_{ij}$ and $C_{sub,j}$.)

**Metal 4 – metal 3:**

$$\frac{1}{C_{43}} = \frac17 - \frac19 = \frac{2}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \;\Longrightarrow\; C_{43} = 31.5\ \mathrm{aF/\mu m^2}.$$

**Metal 3 – metal 2:**

$$\frac{1}{C_{32}} = \frac19 - \frac{1}{15} = \frac{15 - 9}{135} = \frac{6}{135}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \;\Longrightarrow\; C_{32} = 22.5\ \mathrm{aF/\mu m^2}.$$

**Metal 2 – metal 1:**

$$\frac{1}{C_{21}} = \frac{1}{15} - \frac{1}{30} = \frac{2 - 1}{30} = \frac{1}{30}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \;\Longrightarrow\; C_{21} = 30\ \mathrm{aF/\mu m^2}.$$

### Step 3 — Total capacitance between the terminals

Terminal A is metal 4 + metal 2; terminal B is metal 3 + metal 1. Going down the stack the plates alternate A, B, A, B, so every consecutive pair has one plate on each terminal:

- $C_{43}$: A (metal 4) to B (metal 3);
- $C_{32}$: B (metal 3) to A (metal 2);
- $C_{21}$: A (metal 2) to B (metal 1).

All three connect A to B and are therefore **in parallel**.

<!-- diagram: diagram-01.cir -->

$$C = C_{43} + C_{32} + C_{21} = 31.5 + 22.5 + 30 = 84\ \mathrm{aF/\mu m^2}.$$

### Step 4 — Parasitic capacitance to the substrate

- **Metal 1** (bottom plate, part of terminal B) faces the substrate directly:
$$C_P = C_{sub,1} = 30\ \mathrm{aF/\mu m^2}.$$
- **Metals 2, 3 and 4** are each shielded by the plates below them: all their downward field lines end on the next plate. They contribute nothing to the substrate capacitance (fringing neglected).

### Step 5 — The ratio

$$\frac{C_P}{C} = \frac{30}{84} = 0.357 \approx 0.36 .$$

**Comparison with fewer layers.** The two-layer (metal 4/metal 3) capacitor has $C = 31.5$, $C_P = 9$ (ratio 0.29); the three-layer (metal 4/3/2) one has $C = 54$, $C_P = 15$ (ratio 0.28). Adding metal 1 raises the density to 84 aF/µm² (2.7 times the two-layer value), but because metal 1 is so close to the substrate, the parasitic doubles to 30 aF/µm² and the ratio worsens to 0.36. Stacking more layers trades a better capacitance per unit area against a larger bottom-plate parasitic fraction.

### Result

Per unit area:

$$C = 31.5 + 22.5 + 30 = 84\ \mathrm{aF/\mu m^2}, \qquad C_P = 30\ \mathrm{aF/\mu m^2}, \qquad \frac{C_P}{C} \approx 0.36 .$$

**Common mistake.** Forming the interlayer capacitances as differences of substrate capacitances (e.g. $30 - 15 = 15$ aF/µm² for metal 2–metal 1). Since $C = \epsilon/h$, the spacings — and hence the reciprocals $1/C$ — subtract, giving $C_{21} = 1/(1/15 - 1/30) = 30$ aF/µm².

**Common mistake.** Leaving out one layer pair. With alternating terminals, every consecutive pair of plates contributes, so all three interlayer capacitances add.

**Common mistake.** Including the upper plates' substrate capacitances in $C_P$. Only metal 1 sees the substrate; the other plates are shielded by the plates below them.
