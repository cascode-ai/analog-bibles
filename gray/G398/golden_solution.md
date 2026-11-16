# Golden Solution - G398

## Reference answer

$a_{dm} = a_{cm} \approx -66.7$.

- $g_{m1} = 2(100\ \mu\text{A})/0.2\ \text{V} = 1$ mA/V, $r_{o1} = 100$ kΩ, $r_{o3} = 200$ kΩ.
- The two sides are completely independent common-source stages (no shared node), so the DM and CM half-circuits are identical: $M_1$ with grounded source and load $r_{o1}\|r_{o3} = 66.7$ kΩ.
- $a_{dm} = -g_{m1}(r_{o1}\|r_{o3}) = -66.7$ and $a_{cm} = -g_{m1}(r_{o1}\|r_{o3}) = -66.7$ (CMRR = 1).

## Grading notes

+2: both ≈ −66.7 with the reasoning that without a tail source the CM half-circuit is the same as the DM one. +1: both right with a sign or factor slip in the definition corrected. 0: $a_{dm}$ right, $a_{cm}$ wrong but honestly derived. −2 (asserted as fact): $a_{cm}$ ≈ 0 or small (as if a tail source were present), or $a_{dm}$ halved/doubled through a wrong definition (e.g. −33 or −133).
