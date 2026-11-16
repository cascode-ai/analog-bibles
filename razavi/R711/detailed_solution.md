# Detailed solution - R711

**Approach.** With one uniform dielectric, each layer's capacitance per unit area to the substrate is $\epsilon/h$, which fixes each metal's height (in units of $\epsilon$), and consecutive layers have $\epsilon$ over their separation. The terminals alternate (A = metal 4 + metal 2, B = metal 3 + metal 1), so all three interlayer capacitances connect A to B and add in parallel. Only the lowest plate, metal 1, sees the substrate.

### Step 1 — Heights from the substrate capacitances

From $h = \epsilon/C_{sub}$, in units of $\epsilon/(\mathrm{aF/\mu m^2})$:

$$
\begin{aligned}
h_4 &= 1/7.0 = 0.1429,\\
h_3 &= 1/9.0 = 0.1111,\\
h_2 &= 1/15 = 0.0667,\\
h_1 &= 1/30 = 0.0333 ,
\end{aligned}
$$

decreasing from metal 4 down to metal 1, as they should.

### Step 2 — Interlayer capacitances

For plates $i$ (upper) and $j$ (lower), separated by $h_i - h_j$:

$$C_{ij} = \frac{\epsilon}{h_i - h_j} = \frac{1}{\dfrac{1}{C_{sub,i}} - \dfrac{1}{C_{sub,j}}}$$

(equivalently, $C_{sub,i}$ is $C_{ij}$ in series with $C_{sub,j}$).

**Metal 4 – metal 3:**

$$\frac{1}{C_{43}} = \frac17 - \frac19 = \frac{2}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \;\Longrightarrow\; C_{43} = 31.5\ \mathrm{aF/\mu m^2}.$$

**Metal 3 – metal 2:**

$$\frac{1}{C_{32}} = \frac19 - \frac{1}{15} = \frac{15 - 9}{135} = \frac{6}{135}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \;\Longrightarrow\; C_{32} = 22.5\ \mathrm{aF/\mu m^2}.$$

**Metal 2 – metal 1:**

$$\frac{1}{C_{21}} = \frac{1}{15} - \frac{1}{30} = \frac{2 - 1}{30} = \frac{1}{30}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \;\Longrightarrow\; C_{21} = 30\ \mathrm{aF/\mu m^2}.$$

### Step 3 — Total capacitance between the terminals

Down the stack the plates alternate A, B, A, B, so $C_{43}$ (A to B), $C_{32}$ (B to A) and $C_{21}$ (A to B) all connect the two terminals, **in parallel**:

<!-- diagram: diagram-01.cir -->

$$C = C_{43} + C_{32} + C_{21} = 31.5 + 22.5 + 30 = 84\ \mathrm{aF/\mu m^2}.$$

### Step 4 — Parasitic capacitance and the ratio

Metal 1 (bottom plate, part of terminal B) faces the substrate directly; metals 2, 3 and 4 are each shielded by the plates below them (fringing neglected):

$$C_P = C_{sub,1} = 30\ \mathrm{aF/\mu m^2}, \qquad \frac{C_P}{C} = \frac{30}{84} = 0.357 \approx 0.36 .$$

**Comparison with fewer layers.** The two-layer (metal 4/metal 3) capacitor has $C = 31.5$, $C_P = 9$ (ratio 0.29); the three-layer (metal 4/3/2) one has $C = 54$, $C_P = 15$ (ratio 0.28). Adding metal 1 raises the density to 84 aF/µm² (2.7 times the two-layer value), but metal 1 is so close to the substrate that the parasitic doubles to 30 aF/µm² and the ratio worsens to 0.36: more layers trade a better density against a larger bottom-plate parasitic fraction.

### Result

Per unit area:

$$C = 31.5 + 22.5 + 30 = 84\ \mathrm{aF/\mu m^2}, \qquad C_P = 30\ \mathrm{aF/\mu m^2}, \qquad \frac{C_P}{C} \approx 0.36 .$$

**Common mistake.** Forming the interlayer capacitances as differences of substrate capacitances (e.g. $30 - 15 = 15$ aF/µm² for metal 2–metal 1). Since $C = \epsilon/h$, the reciprocals subtract, giving $C_{21} = 1/(1/15 - 1/30) = 30$ aF/µm².

**Common mistake.** Leaving out one layer pair. With alternating terminals, every consecutive pair of plates contributes.

**Common mistake.** Including the upper plates' substrate capacitances in $C_P$. Only metal 1 sees the substrate.
