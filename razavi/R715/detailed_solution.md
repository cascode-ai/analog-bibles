# Detailed solution - R715

**Approach.** For each layer at its minimum width, compute the resistance and capacitance of a 1000-µm wire and the distributed-line (Elmore) delay $T_D = \tfrac12R_{wire}C_{wire}$; the smallest $T_D$ wins. A general expression for $T_D$ then shows that the result does not depend on the exact width.

### Step 1 — Delay in terms of the layer data

With $R_{wire} = R_\square L/W$ and $C_{wire} = (C_{pp}W + C_f)L$ (the fringe value is already per unit length, both edges together):

$$T_D = \frac12R_{wire}C_{wire} = \frac12R_\square\frac{L}{W}(C_{pp}W + C_f)L = \frac12R_\square L^2\left(C_{pp} + \frac{C_f}{W}\right).$$

### Step 2 — Metal 1 ($W = 0.35\ \mu$m, $R_\square = 80$ mΩ/□)

$$
\begin{aligned}
R &= 0.08\ \Omega\times\frac{1000}{0.35} = 0.08\times2857 = 228.6\ \Omega,\\
c &= (30\ \mathrm{aF/\mu m^2})(0.35\ \mu\mathrm{m}) + 80\ \mathrm{aF/\mu m} = 10.5 + 80 = 90.5\ \mathrm{aF/\mu m},\\
C &= (90.5\ \mathrm{aF/\mu m})(1000\ \mu\mathrm{m}) = 90.5\ \mathrm{fF},\\
T_D &= \tfrac12(228.6\ \Omega)(90.5\ \mathrm{fF}) = 10.3\ \mathrm{ps}.
\end{aligned}
$$

### Step 3 — Metal 2 ($W = 0.45\ \mu$m, $R_\square = 80$ mΩ/□)

$$
\begin{aligned}
R &= 0.08\ \Omega\times\frac{1000}{0.45} = 0.08\times2222 = 177.8\ \Omega,\\
c &= (15)(0.45) + 50 = 6.75 + 50 = 56.75\ \mathrm{aF/\mu m},\\
C &= 56.75\ \mathrm{fF},\\
T_D &= \tfrac12(177.8\ \Omega)(56.75\ \mathrm{fF}) = 5.04\ \mathrm{ps}.
\end{aligned}
$$

### Step 4 — Metal 3 ($W = 0.50\ \mu$m, $R_\square = 80$ mΩ/□)

$$
\begin{aligned}
R &= 0.08\ \Omega\times\frac{1000}{0.5} = 0.08\times2000 = 160\ \Omega,\\
c &= (9.0)(0.5) + 40 = 4.5 + 40 = 44.5\ \mathrm{aF/\mu m},\\
C &= 44.5\ \mathrm{fF},\\
T_D &= \tfrac12(160\ \Omega)(44.5\ \mathrm{fF}) = 3.56\ \mathrm{ps}.
\end{aligned}
$$

### Step 5 — Metal 4 ($W = 0.60\ \mu$m, $R_\square = 40$ mΩ/□)

$$
\begin{aligned}
R &= 0.04\ \Omega\times\frac{1000}{0.6} = 0.04\times1667 = 66.7\ \Omega,\\
c &= (7.0)(0.6) + 30 = 4.2 + 30 = 34.2\ \mathrm{aF/\mu m},\\
C &= 34.2\ \mathrm{fF},\\
T_D &= \tfrac12(66.7\ \Omega)(34.2\ \mathrm{fF}) = 1.14\ \mathrm{ps}.
\end{aligned}
$$

### Step 6 — Comparison and interpretation

| Layer | $W$ (µm) | $R$ (Ω) | $C$ (fF) | $T_D = \tfrac12RC$ (ps) |
|---|---|---|---|---|
| metal 1 | 0.35 | 228.6 | 90.5 | 10.3 |
| metal 2 | 0.45 | 177.8 | 56.8 | 5.0 |
| metal 3 | 0.50 | 160.0 | 44.5 | 3.6 |
| metal 4 | 0.60 | 66.7 | 34.2 | **1.14** |

**Metal 4 gives the minimum delay**, about 9 times shorter than metal 1. It has the **lowest resistance** (the thickest layer, with half the others' sheet resistance, and the widest minimum width) and the **lowest capacitance** (farthest from the substrate, so both its parallel-plate and fringe capacitances are the smallest).

**The choice does not depend on the width.** In $T_D = \tfrac12R_\square L^2(C_{pp} + C_f/W)$, metal 4 has the smallest $R_\square$, $C_{pp}$ and $C_f$, so it wins at any common width $W$, and also with a driver resistance $R_S$ added (total $R_SC + \tfrac12RC$), since it has the lowest capacitance.

The fringe term dominates for these narrow wires (for metal 1, $80/90.5 = 88\ \%$ of the capacitance); leaving it out would not change the ranking here but would underestimate every delay many times over.

### Result

**Metal 4.** At minimum widths, a 1000-µm wire has a distributed delay $T_D = \tfrac12RC$ of about **1.1 ps** in metal 4, versus 3.6 ps (metal 3), 5.0 ps (metal 2) and 10.3 ps (metal 1). Metal 4 has both the lowest resistance and the lowest capacitance per unit length.

**Common mistake.** Multiplying the fringe capacitance by the width (e.g. $80\times0.35$ aF/µm for metal 1). The fringe values are per unit length; only the parallel-plate term scales with the width.

**Common mistake.** Computing the resistance as $R_\square W/L$. A long, narrow line has $L/W$ squares (thousands here).

**Common mistake.** Picking metal 1 because it has the smallest minimum width or is "closest to the devices". Its narrowness makes it highly resistive, and its proximity to the substrate gives it the largest capacitance per unit length.
