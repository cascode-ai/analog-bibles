# Golden Solution - A270

## Reference answer

$I_8 \approx 22.8$ µA, $I_5 = 2I_8 \approx 45.7$ µA, $I_7 = 10I_8 \approx 228$ µA.

- The two diodes share the 3 V supply: $V_{SG9} + V_{GS8} = 3$ V, with $I_8 = \frac{50\ \mu}{2}(V_{SG9} - 0.7)^2 = \frac{110\ \mu}{2}(V_{GS8} - 0.7)^2$.
- Overdrives: $V_{ov9} = \sqrt{110/50}\,V_{ov8} = 1.483V_{ov8}$ and $V_{ov9} + V_{ov8} = 3 - 1.4 = 1.6$ V → $V_{ov8} = 0.644$ V ($V_{GS8} = 1.344$ V), $V_{ov9} = 0.956$ V.
- $I_8 = 55\ \mu \times 0.644^2 = 22.8$ µA; $I_5 = (S_5/S_8)I_8 = 2I_8 = 45.7$ µA; $I_7 = (S_7/S_8)I_8 = 10I_8 = 228$ µA.
- Consistency: $S_6/S_4 = 10 = 2S_7/S_5$, so M6 carries $I_7$ at $V_{SG6} = V_{SG4}$.

## Grading notes

+2: $I_8$ ≈ 22.8 µA (22–25 µA if λ is included), $I_5 = 2I_8$, $I_7 = 10I_8$. +1: correct method with a slip in $I_8$ (within ±10 %) or ratios right with $I_8$ slightly off. 0: correct ratios only, $I_8$ wrong. −2 (asserted as fact): $I_8$ ≈ 10.8 µA (total diode voltage taken as 2.5 V instead of 3 V), $I_8$ from only one diode across 3 V, or wrong mirror ratios (e.g. $I_5 = I_8$).
