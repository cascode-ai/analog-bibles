# Golden Solution - A095

## Reference answer

Layout 4.

- It builds the ratio from identical unit transistors: M2A, M1 and M2B are all 5/1 with the same shape, contacts, orientation and surroundings. Edge effects (ΔW, ΔL from lithography, etch and lateral diffusion), contact and source/drain resistances scale exactly with the number of units, so the ratio is exactly 2.
- The placement M2A–M1–M2B is symmetric about M1 (common centroid along the row), so linear gradients of $K'$, $V_T$ or oxide thickness cancel to first order.
- The others: Layout 1 relies on a single 10-µm device versus a 5-µm device, so ΔW does not scale and the ratio becomes $(10 - \Delta W)/(5 - \Delta W) \ne 2$, and there is no common centroid. Layout 2 uses unit devices but M1 is rotated 90°, so orientation-dependent effects (lithographic bias in x and y, implant shadowing, stress-dependent mobility) differ between M1 and M2. Layout 3 is compact and common-centroid but, with its shared diffusion regions, cannot be wired as a correct 1:2 mirror.

## Grading notes

+2: Layout 4, justified by unit matching (identical devices, ratio by replication), identical orientation and the symmetric (common-centroid) arrangement. +1: Layout 4 with only one of these reasons. 0: Layout 4 with no reason; or Layout 3 offered only tentatively, or with an explicit caveat about how its shared diffusions would be wired, alongside sound unit-matching and common-centroid reasoning. −2 (asserted as fact): Layout 3 claimed most accurate (its shared diffusion regions force both terminals of M1 to GRD, so it cannot be wired as the mirror), or Layout 1 (single wide device) or Layout 2 (rotated M1) claimed most accurate.
