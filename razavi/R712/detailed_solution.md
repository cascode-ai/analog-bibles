# Detailed solution - R712

**Approach.** With one uniform dielectric, each layer's capacitance per unit area to the substrate is $\epsilon/h$, which fixes each layer's height (in units of $\epsilon$), and consecutive layers have $\epsilon$ over their separation. The terminals alternate down the stack (metal 4, metal 2 and poly on one; metal 3 and metal 1 on the other), so all four interlayer capacitances are in parallel between the terminals. Only the bottom plate, polysilicon, sees the substrate.

### Step 1 — Heights from the substrate capacitances

From $h = \epsilon/C_{sub}$, in units of $\epsilon/(\mathrm{aF/\mu m^2})$:

| Layer | $C_{sub}$ (aF/µm²) | height $h = 1/C_{sub}$ |
|---|---|---|
| metal 4 | 7.0 | 0.1429 |
| metal 3 | 9.0 | 0.1111 |
| metal 2 | 15 | 0.0667 |
| metal 1 | 30 | 0.0333 |
| poly | 90 | 0.0111 |

### Step 2 — Interlayer capacitances

Plates $i$ (upper) and $j$ (lower), separated by $h_i - h_j$ of the same dielectric, have

$$C_{ij} = \frac{\epsilon}{h_i - h_j} = \frac{1}{\dfrac{1}{C_{sub,i}} - \dfrac{1}{C_{sub,j}}}$$

(equivalently, $1/C_{sub,i} = 1/C_{ij} + 1/C_{sub,j}$: the upper layer's substrate capacitance is $C_{ij}$ in series with the lower layer's).

**Metal 4 – metal 3:**

$$\frac{1}{C_{43}} = \frac17 - \frac19 = \frac{2}{63}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \;\Longrightarrow\; C_{43} = 31.5\ \mathrm{aF/\mu m^2}.$$

**Metal 3 – metal 2:**

$$\frac{1}{C_{32}} = \frac19 - \frac{1}{15} = \frac{6}{135}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \;\Longrightarrow\; C_{32} = 22.5\ \mathrm{aF/\mu m^2}.$$

**Metal 2 – metal 1:**

$$\frac{1}{C_{21}} = \frac{1}{15} - \frac{1}{30} = \frac{1}{30}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \;\Longrightarrow\; C_{21} = 30\ \mathrm{aF/\mu m^2}.$$

**Metal 1 – poly:**

$$\frac{1}{C_{1P}} = \frac{1}{30} - \frac{1}{90} = \frac{3 - 1}{90} = \frac{2}{90}\ \frac{\mu\mathrm{m^2}}{\mathrm{aF}} \;\Longrightarrow\; C_{1P} = 45\ \mathrm{aF/\mu m^2}.$$

### Step 3 — Total capacitance between the terminals

Down the stack the plates belong alternately to terminal A (metal 4, metal 2, poly) and terminal B (metal 3, metal 1): A, B, A, B, A. Every consecutive pair has one plate on each terminal, so all four capacitances are **in parallel**:

<!-- diagram: diagram-01.cir -->

$$C = C_{43} + C_{32} + C_{21} + C_{1P} = 31.5 + 22.5 + 30 + 45 = 129\ \mathrm{aF/\mu m^2},$$

$129/31.5 = 4.1$ times the density of the simple metal 4/metal 3 capacitor.

### Step 4 — Parasitic capacitance and the ratio

Poly (the bottom plate, part of terminal A) faces the substrate directly; all metal layers are shielded by the plates beneath them (fringing neglected):

$$C_P = C_{sub,poly} = 90\ \mathrm{aF/\mu m^2}, \qquad \frac{C_P}{C} = \frac{90}{129} = 0.698 \approx 0.70 .$$

**Trend across the stacked structures** (same data):

| Plates | $C$ (aF/µm²) | $C_P$ (aF/µm²) | $C_P/C$ |
|---|---|---|---|
| M4/M3 | 31.5 | 9 | 0.29 |
| M4/M3/M2 | 54 | 15 | 0.28 |
| M4/…/M1 | 84 | 30 | 0.36 |
| M4/…/M1/poly | 129 | 90 | 0.70 |

Adding poly gives the densest capacitor, but poly lies very close to the substrate (only the field oxide below it), so the parasitic fraction jumps to 70 %. Whether that is acceptable depends on whether the bottom-plate terminal is driven by a low-impedance node.

### Result

Per unit area:

$$C = 31.5 + 22.5 + 30 + 45 = 129\ \mathrm{aF/\mu m^2}, \qquad C_P = 90\ \mathrm{aF/\mu m^2}, \qquad \frac{C_P}{C} \approx 0.70 .$$

**Common mistake.** Subtracting substrate capacitances directly (e.g. $90 - 30 = 60$ aF/µm² for metal 1–poly). Capacitance scales as $1/h$, so the reciprocals subtract: $C_{1P} = 1/(1/30 - 1/90) = 45$ aF/µm².

**Common mistake.** Omitting one of the four layer pairs, typically metal 1–poly. With alternating terminals every consecutive pair contributes to $C$.

**Common mistake.** Adding the upper plates' substrate capacitances to $C_P$. Only the poly bottom plate couples to the substrate.
