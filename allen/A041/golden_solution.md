# Golden Solution - A041

## Reference answer

Split each transistor into identical unit fingers, interleave them in a common-centroid pattern with all units drawn with the same orientation, add dummies, and make the surroundings and wiring of both devices identical.

One layout: each device made of 4 fingers of 10 µm/0.3 µm (total 40/0.3), placed in two rows, D A B B A D over D B A A B D (D = dummy gate; a cross-coupled array), or in one row D A B B A A B B A D. Then:
- Unit matching: all fingers identical (same W, L, contact count and contact-to-gate spacing, the spacing not at the design-rule minimum).
- Common centroid: the centroids of A and B coincide (in x and, for the two-row version, in y), so linear gradients of oxide thickness, doping or temperature cancel.
- Photolithographic invariance: every finger has the same orientation (gate stripes parallel, same drain/source sides and current direction), or, where diffusions are shared so that adjacent fingers alternate direction, each device has equal numbers of fingers in each direction; this matches the effects of angled implants and alignment on $C_{GS}$/$C_{GD}$ and current.
- Dummy gates (and diffusion) at both ends so every active finger sees the same neighbours and the same distance to the STI edge; straight gate stripes with no bends.
- Symmetric, equal-length source/drain/gate routing for A and B (no metal crossing one device and not the other); the array surrounded by a common guard ring/substrate tie, kept away from (or equidistant to) well edges and from hot or noisy circuits.

## Grading notes

+2: splits each 40-µm device into several equal fingers (any reasonable number, e.g. 2, 4 or 8 per device), arranges them common-centroid (interdigitated ABBA-type or cross-coupled), keeps the same orientation/current direction (or a balanced arrangement), and adds dummies with symmetric surroundings and routing. +1: common-centroid interdigitation and orientation right but dummies or symmetric routing missing. 0: only generic statements ("place them close together, same orientation") without a splitting/interleaving scheme. −2 (asserted as fact): a layout with A and B side by side as single 40-µm devices called optimal, A and B fingers oriented perpendicular to each other, or a non-common-centroid split such as AABB presented as cancelling gradients.
