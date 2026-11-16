# Detailed solution - R702

**Approach.** Sheet resistance is resistivity divided by film thickness, $R_\square = \rho/t$, so each resistivity is its sheet resistance times its thickness. The line widths do not enter (they matter only for the resistance per unit length of a particular line).

### Step 1 — Resistivities from $\rho = R_\square\,t$

With the thicknesses from the figure (poly 100 nm, metal 1 150 nm), and $1\ \Omega\cdot\mathrm{m} = 10^{8}\ \mu\Omega\cdot\mathrm{cm}$:

$$\rho_{poly} = R_{\square,poly}\,t_{poly} = (30\ \Omega)(100\times10^{-9}\ \mathrm{m}) = 3.0\times10^{-6}\ \Omega\cdot\mathrm{m} = 3.0\times10^{-6}\times10^{8}\ \mu\Omega\cdot\mathrm{cm} = 300\ \mu\Omega\cdot\mathrm{cm},$$

$$\rho_{M1} = R_{\square,M1}\,t_{M1} = (0.08\ \Omega)(150\times10^{-9}\ \mathrm{m}) = 1.2\times10^{-8}\ \Omega\cdot\mathrm{m} = 1.2\ \mu\Omega\cdot\mathrm{cm}.$$

### Step 2 — The ratio

$$\frac{\rho_{poly}}{\rho_{M1}} = \frac{3.0\times10^{-6}\ \Omega\cdot\mathrm{m}}{1.2\times10^{-8}\ \Omega\cdot\mathrm{m}} = 250 .$$

**Cross-check by ratios:**

$$\frac{\rho_{poly}}{\rho_{M1}} = \frac{R_{\square,poly}}{R_{\square,M1}}\cdot\frac{t_{poly}}{t_{M1}} = \frac{30}{0.08}\cdot\frac{100}{150} = 375\times0.6667 = 250 .$$

The sheet resistances differ by a factor of 375, but part of that comes from the thicker metal film (150 nm vs. 100 nm); the material-property ratio is 250.

### Step 3 — Perspective: resistance per unit length of the drawn lines

Although not asked, the widths (poly 40 nm, metal 1 80 nm) set how resistive these particular *lines* are, $R/L = R_\square/W$:

$$
\begin{aligned}
\text{poly: } & R/L = \frac{R_{\square,poly}}{W_{poly}} = \frac{30\ \Omega}{0.04\ \mu\mathrm{m}} = 750\ \Omega/\mu\mathrm{m},\\
\text{metal 1: } & R/L = \frac{R_{\square,M1}}{W_{M1}} = \frac{0.08\ \Omega}{0.08\ \mu\mathrm{m}} = 1\ \Omega/\mu\mathrm{m}.
\end{aligned}
$$

The narrow unsilicided poly line is 750 times more resistive per unit length, which is why poly is used only for short connections (and is normally silicided). This 750 is a property of the drawn geometry, not of the materials.

### Result

$$\frac{\rho_{poly}}{\rho_{M1}} = \frac{(30\ \Omega)(100\ \mathrm{nm})}{(0.08\ \Omega)(150\ \mathrm{nm})} = \frac{3\times10^{-6}\ \Omega\cdot\mathrm{m}}{1.2\times10^{-8}\ \Omega\cdot\mathrm{m}} = 250 .$$

**Common mistake.** Quoting the sheet-resistance ratio $30/0.08 = 375$ as the resistivity ratio. $R_\square$ already includes the film thickness; multiply each by its own thickness to compare materials.

**Common mistake.** Using the widths (40 nm and 80 nm) instead of the thicknesses, which gives $375\times40/80 = 187.5$. Resistivity does not depend on how wide a line is drawn.

**Common mistake.** Inverting the thickness ratio ($375\times150/100 = 562.5$) or the final ratio ($1/250$). Write $\rho = R_\square t$ for each material before dividing; the poly value must come out larger.
