# Detailed solution - R708

**Approach.** For each material, find the number of squares needed for 500 Ω, apply the minimum-dimension constraint to fix the geometry, compute the area, and multiply by the capacitance per unit area to get the parasitic capacitance to the substrate. The better choice is the one with the smaller parasitic capacitance (and area), supported by qualitative arguments about linearity and accuracy.

### Step 1 — Resistance of a rectangular film

A resistor of length $L$ (in the direction of current flow) and width $W$, made of a film with sheet resistance $R_\square$, has

$$R = R_\square\,\frac{L}{W},$$

where $L/W$ is the **number of squares**. Its bottom face, of area $A = WL$, forms a parallel-plate capacitor to the substrate (fringe neglected):

$$C = C_A\cdot W L,$$

with $C_A$ the capacitance per unit area.

Note the asymmetry: for a fixed number of squares, the area grows with the **square** of the minimum dimension: $A = WL = (L/W)\,W^2 = (W/L)\,L^2$. So whichever dimension is fixed by the matching constraint sets the area.

### Step 2 — Polysilicon resistor (silicide-blocked)

**Number of squares:**

$$\frac{L}{W} = \frac{R}{R_\square} = \frac{500\ \Omega}{60\ \Omega/\square} = 8.33 .$$

More than one square is needed, so the resistor is longer than it is wide; the matching constraint fixes its **width** at the minimum, $W = 3\ \mu$m.

**Length:**

$$L = 8.33\times W = 8.33\times3\ \mu\mathrm{m} = 25\ \mu\mathrm{m}.$$

**Area:**

$$A_{poly} = WL = (3\ \mu\mathrm{m})(25\ \mu\mathrm{m}) = 75\ \mu\mathrm{m^2}.$$

**Capacitance to the substrate:**

$$C_{poly} = C_A A = (100\ \mathrm{aF/\mu m^2})(75\ \mu\mathrm{m^2}) = 7500\ \mathrm{aF} = 7.5\ \mathrm{fF}.$$

### Step 3 — n-well resistor

**Number of squares:**

$$\frac{L}{W} = \frac{500\ \Omega}{2000\ \Omega/\square} = 0.25 .$$

The n-well is so resistive that only a quarter of a square is needed: the resistor is **wider than it is long**. Here the constraint applies to the **length** (the dimension along the current), $L = 6\ \mu$m, which is the short side.

**Width:**

$$W = \frac{L}{0.25} = 4L = 4\times6\ \mu\mathrm{m} = 24\ \mu\mathrm{m}.$$

Check: $R = 2000\ \Omega/\square\times(6/24) = 2000\times0.25 = 500\ \Omega$. ✓

**Area:**

$$A_{well} = WL = (24\ \mu\mathrm{m})(6\ \mu\mathrm{m}) = 144\ \mu\mathrm{m^2}.$$

**Capacitance to the substrate** (the well–substrate junction capacitance, given as a parallel-plate value):

$$C_{well} = (1000\ \mathrm{aF/\mu m^2})(144\ \mu\mathrm{m^2}) = 144{,}000\ \mathrm{aF} = 144\ \mathrm{fF}.$$

### Step 4 — Comparison

| | Squares | $W\times L$ | Area | $C$ to substrate |
|---|---|---|---|---|
| Poly (60 Ω/□, 100 aF/µm²) | 8.33 | 3 µm × 25 µm | 75 µm² | **7.5 fF** |
| n-well (2 kΩ/□, 1000 aF/µm²) | 0.25 | 24 µm × 6 µm | 144 µm² | **144 fF** |

$$\frac{C_{well}}{C_{poly}} = \frac{144\ \mathrm{fF}}{7.5\ \mathrm{fF}} = 19.2 .$$

The n-well's high sheet resistance would normally save area, but here the minimum-length constraint forces a stubby, wide resistor, and its capacitance per unit area is ten times higher. As a rough measure of speed, the time constant $RC$ (with the capacitance lumped) is $500\ \Omega\times7.5\ \mathrm{fF} = 3.75$ ps for poly versus $500\ \Omega\times144\ \mathrm{fF} = 72$ ps for the n-well.

### Step 5 — Further, qualitative reasons to prefer poly

- **Linearity.** The n-well resistor's conducting thickness is reduced by the depletion region of the well–substrate junction, which widens as the well voltage rises. Its resistance therefore depends on the voltage across it and on its potential relative to the substrate (a large voltage coefficient). Its capacitance is also a junction capacitance that varies with voltage. Poly, isolated by oxide, has neither effect.
- **Accuracy and temperature.** n-well resistors have a large temperature coefficient and a wide process spread, and their effective width depends on lateral diffusion. Silicide-blocked poly is better controlled.
- **Area.** Poly also needs about half the area here (75 µm² vs. 144 µm²).

### Result

Use **polysilicon**. The poly resistor is 3 µm × 25 µm (8.33 squares), area 75 µm², with about **7.5 fF** to the substrate; the n-well resistor would be 24 µm wide × 6 µm long (0.25 square), area 144 µm², with about **144 fF**, roughly 19 times more. Poly is also more linear and better controlled.

**Common mistake.** Applying the minimum dimension to the wrong side. For poly ($R/R_\square > 1$) the minimum *width* is the binding constraint and the resistor is 25 µm long; for the n-well ($R/R_\square < 1$) the constraint is on the *length* along the current, and the resistor must be 24 µm wide. Drawing the n-well as 6 µm wide and 1.5 µm long (or the poly as 3 µm long) gives the wrong resistance.

**Common mistake.** Choosing the n-well because its sheet resistance is higher and "high-resistivity layers save area". That is true for large resistors; for 500 Ω, the n-well needs less than one square, and the minimum-length rule makes it both larger and far more capacitive.

**Common mistake.** Comparing only capacitance per unit area (10× worse for the n-well) without computing the areas. The final ratio (about 19×) depends on both the per-area capacitance and the geometry forced by the constraints.
