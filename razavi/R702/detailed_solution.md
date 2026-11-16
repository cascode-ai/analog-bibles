# Detailed solution - R702

**Approach.** Sheet resistance is the resistivity divided by the film thickness, so each material's resistivity follows from its sheet resistance multiplied by its thickness. The line widths shown in the figure are irrelevant to resistivity (they matter only for the resistance per unit length of a particular line).

### Step 1 — Relation between sheet resistance and resistivity

A rectangular conductor of resistivity $\rho$, length $L$, width $W$ and thickness $t$ has resistance

$$R = \rho\,\frac{L}{W\,t},$$

because current flows along $L$ through a cross-section of area $Wt$.

Group the terms as

$$R = \frac{\rho}{t}\cdot\frac{L}{W} = R_\square\cdot\frac{L}{W}, \qquad R_\square = \frac{\rho}{t}.$$

$R_\square$ is the **sheet resistance**: the resistance of one square ($L = W$) of the film, in ohms per square (Ω/□). It depends only on the material and its thickness, which is why layout designers count "squares" ($L/W$) instead of computing volumes. Inverting:

$$\rho = R_\square\,t .$$

The width does **not** appear: a square of any size has the same resistance.

### Step 2 — Thicknesses from the figure

Reading the figure:

- polysilicon line: width 40 nm, **thickness 100 nm**;
- metal-1 line: width 80 nm, **thickness 150 nm**.

Only the thicknesses are needed.

### Step 3 — Resistivity of polysilicon

$$\rho_{poly} = R_{\square,poly}\,t_{poly} = (30\ \Omega)(100\times10^{-9}\ \mathrm{m}) = 3.0\times10^{-6}\ \Omega\cdot\mathrm{m}.$$

In the units commonly used for thin films ($1\ \Omega\cdot\mathrm{m} = 10^{8}\ \mu\Omega\cdot\mathrm{cm}$):

$$\rho_{poly} = 3.0\times10^{-6}\times10^{8}\ \mu\Omega\cdot\mathrm{cm} = 300\ \mu\Omega\cdot\mathrm{cm}.$$

### Step 4 — Resistivity of metal 1

$$\rho_{M1} = R_{\square,M1}\,t_{M1} = (0.08\ \Omega)(150\times10^{-9}\ \mathrm{m}) = 1.2\times10^{-8}\ \Omega\cdot\mathrm{m} = 1.2\ \mu\Omega\cdot\mathrm{cm}.$$

### Step 5 — The ratio

$$\frac{\rho_{poly}}{\rho_{M1}} = \frac{3.0\times10^{-6}\ \Omega\cdot\mathrm{m}}{1.2\times10^{-8}\ \Omega\cdot\mathrm{m}} = 250 .$$

**Cross-check by ratios.** Since $\rho = R_\square t$,

$$\frac{\rho_{poly}}{\rho_{M1}} = \frac{R_{\square,poly}}{R_{\square,M1}}\cdot\frac{t_{poly}}{t_{M1}} = \frac{30}{0.08}\cdot\frac{100}{150} = 375\times0.6667 = 250 .$$

The sheet resistances differ by a factor of 375, but part of that difference comes from the metal film being thicker (150 nm vs. 100 nm). Removing the thickness effect leaves a material-property ratio of 250.

### Step 6 — Perspective: resistance per unit length of the drawn lines

Although not asked, the widths do matter for how resistive these particular *lines* are. Per micrometre of length, a line has $L/W$ squares:

$$
\begin{aligned}
\text{poly: } & R/L = \frac{R_{\square,poly}}{W_{poly}} = \frac{30\ \Omega}{0.04\ \mu\mathrm{m}} = 750\ \Omega/\mu\mathrm{m},\\
\text{metal 1: } & R/L = \frac{R_{\square,M1}}{W_{M1}} = \frac{0.08\ \Omega}{0.08\ \mu\mathrm{m}} = 1\ \Omega/\mu\mathrm{m}.
\end{aligned}
$$

So the narrow unsilicided poly line is 750 times more resistive per unit length than the metal line, which is why poly is used only for short connections (and is normally silicided to lower its sheet resistance). This ratio of 750 is a property of the drawn geometry, not of the materials.

### Result

$$\frac{\rho_{poly}}{\rho_{M1}} = \frac{(30\ \Omega)(100\ \mathrm{nm})}{(0.08\ \Omega)(150\ \mathrm{nm})} = \frac{3\times10^{-6}\ \Omega\cdot\mathrm{m}}{1.2\times10^{-8}\ \Omega\cdot\mathrm{m}} = 250 .$$

**Common mistake.** Quoting the sheet-resistance ratio $30/0.08 = 375$ as the resistivity ratio. Sheet resistance already includes the film thickness ($R_\square = \rho/t$); to compare materials, multiply each sheet resistance by its own thickness.

**Common mistake.** Using the widths (40 nm and 80 nm) instead of the thicknesses, which gives $375\times40/80 = 187.5$. Resistivity is independent of how wide a line is drawn; only the film thickness converts $R_\square$ into $\rho$.

**Common mistake.** Inverting the thickness ratio ($375\times150/100 = 562.5$) or the final ratio ($1/250$). Write $\rho = R_\square t$ explicitly for each material before dividing, and note that the poly value must come out larger.
