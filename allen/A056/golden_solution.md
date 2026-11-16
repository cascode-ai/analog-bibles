# Golden Solution - A056

## Reference answer

$C_{BD} = C_{BS}$ ≈ 176 fF.

- Drain and source are each a 9 µm × 22 µm n⁺ diffusion (active area 20 × 22 µm minus the 2 µm gate): area 198 µm², perimeter 2(9 + 22) = 62 µm.
- Zero bias ($V_{BD} = V_{BS}$ = 0): $C = CJ\cdot A + CJSW\cdot P = 770\times10^{-6}\times198\times10^{-12} + 380\times10^{-12}\times62\times10^{-6}$ = 152.5 fF + 23.6 fF = 176 fF.
- The bottom (area) term dominates for a diffusion this large.

## Grading notes

+2: 176 fF (±3%) for each, from 9 × 22 µm diffusions at zero bias. +1: the gate-side edge left out of the perimeter (40 µm, 168 fF) despite the instruction, or a small slip. 0: the sidewall term omitted (152 fF) with the correct area, or the area misread by one or two grid squares with the right method. −2 (asserted as fact): the whole active region (20 × 22 µm) taken as each diffusion, a reverse bias invented and applied, or the gate-oxide capacitance added to the junction capacitance.
