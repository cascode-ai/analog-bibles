# Golden Solution - A094

## Reference answer

Layouts 1, 2 and 4 can be wired as the mirror; Layout 3 cannot be wired as a correct 1:2 mirror with the center finger as M1, as labeled. (The same geometry gives a 1:2 mirror only if an end finger is used as the diode-connected input instead, which swaps the labeled roles.)

- Layout 1: M1: one diffusion region (e.g. top) → IN, the other → GRD, poly → IN. M2: top → OUT, bottom → GRD, poly → IN.
- Layout 2: M2A and M2B: top regions → OUT, bottom regions → GRD, both polys → IN. M1 (rotated, vertical gate): one side region → IN, the other → GRD, poly → IN.
- Layout 3: the three gates share one continuous diffusion, giving four regions R1 | M2A | R2 | M1 | R3 | M2B | R4. M1 needs one of R2, R3 at IN and the other at GRD. But R2 is also a terminal of M2A and R3 a terminal of M2B, whose terminals must be OUT and GRD, so R2 and R3 would both have to be GRD, which leaves M1 with no drain. One of the M2 halves inevitably ends up with IN as a terminal (making R3 = IN, for instance, turns M2B into a second diode-connected device in parallel with M1, giving 2:1). So with the center finger as M1, as labeled, Layout 3 cannot be wired as the 1:2 mirror. The same geometry does give an electrically correct 1:2 mirror if an end finger is used as the diode-connected input: R1 = IN, R2 = GRD, R3 = OUT, R4 = GRD, all gates to IN (the left 5/1 finger is the input; the center and right fingers in parallel form the 10/1 output). This swaps the labeled roles of M1 and M2A and gives up the symmetric placement of M1 between the M2 halves. Otherwise the diffusion must be split, or the fingers rearranged (e.g. OUT | GRD | IN | GRD | OUT with M1 split into two halves).
- Layout 4: three separate 5/1 devices: M2A and M2B tops → OUT, bottoms → GRD; M1 top → IN, bottom → GRD; all three polys → IN.
- In every case the gates (poly) connect to IN (M1's drain), which makes M1 diode-connected.

## Grading notes

+2: correct IN/OUT/GRD assignments for layouts 1, 2 and 4 (drain/source orientation may be either way, all gates to IN), and a demonstration that layout 3, whose shared diffusion regions make M1's terminals also terminals of M2A and M2B, cannot be wired as a correct 1:2 mirror with the center finger as M1. The end-finger-as-input wiring of layout 3 (R1 = IN, R2 = GRD, R3 = OUT, R4 = GRD, all gates to IN, or its mirror image) is electrically correct: an answer that gives it and also states that the labeled center-M1 assignment is impossible earns full credit. +1: layouts 1, 2 and 4 correct, and layout 3 either left open with a correct statement of the shared-region constraint but no conclusion, or wired with an end finger as the input without addressing the labeled assignment. 0: only two of layouts 1, 2, 4 correct. −2 (asserted as fact): a wiring of layout 3 that keeps the center finger as M1 (or gives a ratio other than 1:2) presented as a correct 1:2 mirror, gates connected to GRD or OUT, or M1 not diode-connected.
