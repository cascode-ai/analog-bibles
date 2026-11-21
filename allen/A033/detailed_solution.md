# Detailed solution - A033

Start from the parallel-plate expression for an integrated capacitor, $C=\varepsilon A/t_{ox}$: every quantity in it is set by processing, not by the designer alone. Each one that departs from its nominal value, together with anything the formula leaves out, is a source of error.

### Step 1 — Dielectric variation (first main source)

The insulator thickness $t_{ox}$ and permittivity $\varepsilon$ vary across the wafer and from run to run, because oxidation and deposition rates, temperature and film composition are never exactly reproducible. Both change the capacitance per unit area $\varepsilon/t_{ox}$ directly, so the whole capacitor scales by the same fraction. A ±10 % tolerance on the capacitance per unit area, as in typical process data, comes mainly from this.

### Step 2 — Plate-area variation (second main source)

The area $A$ is the drawn area only to first order. Lithography and etching shift every edge of the defining plate (exposure variation, etch undercut, edge roughness). For a rectangle of drawn sides $W\times L$ with an edge shift $\Delta$ on each side, the actual area is $(W-2\Delta)(L-2\Delta)\approx WL-2\Delta(W+L)$. The error is proportional to the perimeter, so it is relatively larger for small capacitors; this is why matched capacitors are built from identical unit cells, which share the same perimeter-to-area ratio.

### Step 3 — Other contributors

- **Fringing and parasitic capacitance.** Field lines at the plate edges, and capacitance from the plates to interconnect or to the substrate, add charge storage that the parallel-plate formula does not include.
- **Voltage and temperature coefficients.** Plates of polysilicon or well material deplete with bias, and the dielectric changes with temperature, so the value depends on operating conditions.
- **Plate misalignment.** If both plates' edges define the overlap area, a misalignment between the two mask layers changes the area.

Any two of these answer the question; the dielectric and area variations of Steps 1 and 2 are the dominant ones.
