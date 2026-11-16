# Golden Solution - A033

## Reference answer

Any two of the following (the first two are the main ones):
- Variation of the dielectric: oxide (insulator) thickness and permittivity vary across the wafer and from run to run, changing the capacitance per unit area ($C = \varepsilon A/t_{ox}$).
- Variation of the plate area: lithography and etch (undercut, edge variation) change the drawn dimensions of the defining plate; this affects the perimeter and so matters more for small capacitors.
- Fringing and parasitic capacitances (to interconnect, to the substrate, plate-to-routing) that add to or are not accounted for in the designed value.
- Voltage coefficient (e.g. depletion in polysilicon or well plates) and temperature coefficient, which change the value with bias and temperature.
- Misalignment between plates (if both plates' edges define the capacitor).

## Grading notes

+2: two valid, distinct sources with a brief explanation (oxide/dielectric thickness variation and area/edge variation are the expected pair; parasitic/fringing, voltage or temperature coefficient also count). +1: two sources named without explanation, or one well explained and one vague. 0: only one valid source. −2 (asserted as fact): sources that do not affect a capacitor's value presented as the main errors (e.g. "metal resistivity", "transistor threshold"), or the claim that capacitance is independent of oxide thickness.
