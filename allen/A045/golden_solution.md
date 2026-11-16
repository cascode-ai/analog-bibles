# Golden Solution - A045

## Reference answer

Divide each transistor into four identical units of 4 µm/0.5 µm and place them in a cross-coupled 2 × 4 array:

row 1: D | A B B A | D
row 2: D | B A A B | D

(D = dummy gate), every unit drawn with the same source-to-drain orientation (e.g. source on the left, drain on the right for all eight units).
- Common centroid: the four A units and the four B units have the same centroid in x and y, so linear gradients in both directions cancel.
- Photolithographic invariance: all units are identical copies in the same orientation (no mirrored units), so tilt-implant shadowing and mask misalignment shift $C_{GS}$, $C_{GD}$ and the effective channel equally in A and B. (Four units per device allow both properties in a compact layout; a single row D A B B A D of 8-µm units with separate, non-shared diffusions, all drawn in the same orientation, also satisfies both.)
- If diffusions are shared to save area, adjacent fingers alternate direction; then arrange the fingers so that A and B each have the same number of fingers in each direction (e.g. two left-to-right and two right-to-left) and the same diffusion sharing.
- Dummies at the row ends (same STI distance and neighbours for every unit), identical contacts (count and spacing), straight gates, symmetric and equal-length metal routing, and a well/substrate tie ring around the array, away from well edges.

## Grading notes

+2: each device split into equal units whose widths add up to 16 µm (four of 4 µm is the expected choice; two of 8 µm or eight of 2 µm with a correct common-centroid and same-orientation argument is also accepted), arranged common-centroid (ABBA/BAAB, checkerboard or equivalent), with all units in the same orientation or a balanced orientation scheme explained, plus dummies at the array edges and matched interconnect (symmetric routing, or equal contact/via counts and identical contact layout in every unit). +1: common centroid and orientation right but dummies/surroundings omitted; a sketch whose labels are garbled although the stated coordinates are right; or an arithmetic slip in the unit width with a correct scheme. 0: only common centroid or only PLI addressed, or units that do not add up to 16 µm per device (e.g. four units of 16 µm each) with an otherwise correct scheme. −2 (asserted as fact): a non-common-centroid arrangement (AABB) presented as common centroid, or mirrored A/B units presented as photolithographic invariant.
