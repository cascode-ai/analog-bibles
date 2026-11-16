# Golden Solution - R722

## Reference answer

The total inductance of the supply-plus-ground loop drops to ≈ 0.25 nH (≈ 0.125 nH effective per connection), about 13 times less than with grouped wires (3.25 nH).

- No two supply wires are adjacent, so the supply group alone is $4\ \mathrm{nH}/4 = 1$ nH, and likewise the ground group.
- Each adjacent supply–ground pair carries opposite currents (I/4 each). There are 7 such adjacent pairs in the alternating row: $M_{VG} = 7 \times 2\ \mathrm{nH} \times (1/4)(1/4) = 0.875$ nH.
- $L_{loop} = 1 + 1 - 2(0.875) = 0.25$ nH. Per wire: an inner supply wire drops $L(I/4) - 2M(I/4) = 0$, an end wire $(L - M)(I/4)$, so the average effective inductance per connection is 0.125 nH.
- Exact current division (equal voltage drops on the parallel wires): loop ≈ 0.13 nH.
- Interleaving supply and ground wires turns the mutual inductance from a penalty into a benefit; this is why supply and ground pads are alternated.

## Grading notes

+2: loop ≈ 0.25 nH or per connection ≈ 0.125 nH (exact current division ≈ 0.13 nH loop also accepted), with the reasoning that the mutual inductance between adjacent wires carrying opposite currents subtracts. +1: correct mechanism with an arithmetic slip. 0: the end-wire/inner-wire difference ignored (every wire treated as having two opposite neighbors, giving 0 nH), supply–ground pairs treated as isolated (e.g., four pairs of 2L − 2M = 4 nH in parallel → 1 nH loop), or self-inductance only (1 nH each) with a qualitative note that coupling helps. -2 (asserted as fact): the mutual inductance added for opposite currents (inductance larger than in the grouped arrangement), or the coupling ignored with 1 nH each presented as the answer.
