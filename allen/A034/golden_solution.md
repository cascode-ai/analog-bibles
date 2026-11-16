# Golden Solution - A034

## Reference answer

Keep Metal 5 almost entirely inside the outline of the capacitor top plate, so that wherever M5 lies above the bottom plate the top plate (the same node as M5) sits between them and shields it, and let M5 leave the capacitor as a single narrow strap across a minimum-size M4 margin. In the cross section shown, M5 is a wide plate that overhangs the top plate on both sides and lies directly over the exposed parts of M4, which is exactly the parasitic to avoid.

One layout (top view, relative units):
- Top plate (capacitor metal): a square 10 × 10.
- Metal 4 bottom plate: a square 11 × 11, enclosing the top plate by only the minimum margin (0.5 on each side); its connection leaves on one side (say the left), through M4 or a via down to M3.
- Metal 5: a square of about 9 × 9 inside the top-plate outline, joined to the top plate by an array of vias (low contact resistance); the M5 lead leaves on the opposite side (the right) as a minimum-width strap (≈ 1 unit wide). The only M5–M4 overlap is where the strap crosses the 0.5-unit M4 margin, about 1 × 0.5 = 0.5 unit² against the 100 unit² of the desired capacitor; it can be removed altogether by notching the M4 margin under the strap.
- Since the inter-metal dielectric between M4 and M5 is far thicker than the MiM dielectric, the remaining M5–M4 parasitic is a negligible fraction (well below 0.1%) of the desired capacitance. No other M5 routing should pass over the capacitor's M4 margin.
- Alternative: extend a contact tab of the top plate past the edge of the bottom plate and put the vias, the M5 landing and the M5 lead on that tab, outside the M4 footprint, so that M5 never lies over M4 (possible only where the process does not require the bottom plate to enclose the top plate).

## Grading notes

+2: a sketch or clear description, with relative dimensions, in which the M5–M4 overlap over exposed M4 is reduced to a narrow lead or removed: either M5 is confined to the top-plate area (shielded from M4 by the top plate, with that reason stated) and leaves through a narrow lead across a minimum M4 margin (notching M4 under the lead is also fine), or the M5 via, landing and lead are placed entirely outside the M4 footprint (a top-plate contact tab extending past the bottom plate); the second kind needs no shielding argument. Many real MiM processes require the bottom plate to enclose the top plate, which rules out the tab; do not deduct for it here. A mislabelled layer name that does not change the layout is a trivial slip. +1: correct idea (minimize M5 over M4, narrow lead) without explaining why M5 over the top plate is harmless, or without dimensions. 0: only generic advice (e.g. "use a thicker dielectric between M4 and M5", "keep metals apart") without a layout. −2 (asserted as fact): enlarging M5 to cover the whole bottom plate presented as the solution, or any layout that increases the area of M5 directly over exposed M4.
