# Golden Solution - R706

## Reference answer

Two conducting layers, polysilicon plus one metal (metal 1), are the strict minimum. A practical, symmetric layout normally uses poly plus two metals.

- Inside each half device: the four poly fingers are joined by a poly bar outside the active area. The diffusions alternate S D S D S, and metal-1 stripes on them form two interdigitated combs (S joined on one side, D on the other), so no crossing is needed. The poly bar passes under the D stripes. Because the number of fingers is even, both outer diffusions are sources and the drain comb can be reached from one side only.
- Cross-connections: the nets G1 (top-left–bottom-right), G2 (top-right–bottom-left), D1 (TL–BR), D2 (TR–BL) and S (all four) cross each other topologically.
  - Gates can be routed in poly, which passes freely under metal 1. G1 runs through the middle and G2 around the outside, so poly never crosses poly or an active area.
  - The metal-1 nets can be made planar by choosing the orientations. The ½M1 drains face the horizontal channel between the rows (top-left opening down, bottom-right opening up), and D1 runs straight along that channel and leaves at its right end. The ½M2 drains face outward, and D2 runs around the outside of the left column. S links top-left–top-right in the upper half of the vertical channel, bottom-left–bottom-right in its lower half, and top-left–bottom-left along the left edge inside D2.
  - Every crossing is then poly-under-metal, so poly + metal 1 suffices.
- Price of the minimum: the two drain nets get unequal length and parasitics, and the gates carry poly resistance. A symmetric layout uses a second metal for the crossings (poly + metal 1 + metal 2 = 3 layers). Using four or more layers is never necessary.

## Grading notes

Count polysilicon as an interconnect layer ("one metal plus poly" = 2). +2: two layers (poly + metal 1) with a valid argument that the gate interconnects can cross the source/drain nets as poly under metal and that the source/drain nets can be routed in one metal without metal–metal crossings (or by poly jumpers). +1: three layers (poly + two metals) with a correct, explained construction (sufficient and the usual practical choice, but not the strict minimum), or two layers with an incomplete justification. 0: a number with no valid routing argument, or three justified by a false claim (e.g., that the interleaved S/D fingers of one half device cannot be joined in a single metal layer). -2 (asserted as fact): a single layer claimed sufficient (the gate fingers must be poly and the S/D need metal), or four or more layers claimed as the minimum.
