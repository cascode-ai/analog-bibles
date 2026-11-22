# Detailed solution - A034

The unwanted capacitance exists wherever Metal 5 lies directly above Metal 4 with nothing but the thick inter-metal dielectric between them. Metal 5 is the same node as the capacitor top plate, so wherever the top plate lies between M5 and M4 it shields the bottom plate from M5, and the field lines from M4 end on the top plate as part of the desired capacitance. The layout goal is therefore to keep M5 inside the top-plate outline and let it leave the capacitor through the smallest possible exposed overlap.

### Step 1 — Where the parasitic comes from in [Fig. 1]

In the cross section, Metal 5 is a wide plate that overhangs the top plate on both sides and runs directly above the exposed parts of the Metal 4 bottom plate. Those overhanging areas form an M5–M4 parallel-plate capacitor in parallel with the MiM capacitor. They are exactly what the layout must remove.

### Step 2 — Proposed layout (top view, relative units)

- **Top plate** (capacitor metal): a square 10 × 10.
- **Metal 4 bottom plate**: a square 11 × 11, enclosing the top plate by only the minimum rule margin, 0.5 on each side. Its connection leaves on one side (the left), in M4 or through a via down to M3.
- **Metal 5**: a square about 9 × 9, entirely inside the top-plate outline, joined to the top plate by an array of vias for low contact resistance. Its lead leaves on the opposite side (the right) as a single minimum-width strap, about 1 unit wide.
- No other Metal 5 routing passes over the capacitor or its M4 margin.

![Top view of the square MiM capacitor: 11 by 11 Metal 4 bottom plate, 10 by 10 top plate, 9 by 9 Metal 5 with a via array, and a single 1-unit Metal 5 strap crossing the 0.5-unit M4 margin](/q/A034/solution-layout.svg)

### Step 3 — Size of the remaining parasitic

The only place where M5 sees M4 directly is where the strap crosses the exposed 0.5-unit M4 margin:

$$
A_{M5\text{–}M4}=(1)(0.5)=0.5\ \text{unit}^2,\qquad A_{MiM}=(10)(10)=100\ \text{unit}^2 .
$$

The overlap area is already only 0.5 % of the capacitor area. In addition, the inter-metal dielectric between M4 and M5 is much thicker than the MiM dielectric, typically by a factor of 10 or more, so the capacitance per unit area of the overlap is at least ten times smaller. The remaining parasitic is therefore below about 0.05 % of the desired capacitance, compared with a large fraction in the cross section of [Fig. 1]. It can be removed entirely by notching the M4 margin under the strap.

### Step 4 — Alternative

Where the design rules allow the top plate to extend beyond the bottom plate, give the top plate a contact tab that reaches past the edge of Metal 4, and place the vias, the M5 landing and the M5 lead on that tab. Metal 5 then never lies over Metal 4 at all.
