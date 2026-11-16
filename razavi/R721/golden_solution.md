# Golden Solution - R721

## Reference answer

Each connection ≈ 1.75 nH (without coupling it would be 1 nH). Including the one adjacent supply–ground pair, which carries opposite currents, the total inductance of the supply-plus-ground loop is ≈ 3.25 nH (3.5 nH if that pair coupling is ignored).

- With $I/4$ in each of the four parallel supply wires, the equivalent inductance is $L_{eq} = \frac{1}{16}\sum_{i,j}L_{ij} = \frac{4(4) + 2 \cdot 3 \cdot (2)}{16} = \frac{28}{16} = 1.75$ nH. Equivalently, the end wires see $L + M$ and the two inner wires $L + 2M$ per unit of their own current: $(6 + 8 + 8 + 6)/16$. The same holds for the ground group.
- Same-direction currents in adjacent wires add flux: the mutual coupling raises the inductance by 75% over the uncoupled 4 nH/4 = 1 nH.
- The last supply wire is adjacent to the first ground wire (opposite currents): $L_{loop} = L_{VV} + L_{GG} - 2M_{VG} = 1.75 + 1.75 - 2(2/16) = 3.25$ nH. Per connection this is 1.625 nH of effective inductance.
- If instead the currents are allowed to divide so that the parallel wires have equal voltage drops (exact network solution), the strong coupling makes the division very uneven: supply group alone 1.67 nH, loop 2.0 nH.

## Grading notes

+2: per-connection ≈ 1.75 nH (or 1.6–1.7 nH with the supply–ground adjacency or the exact current division) and/or loop ≈ 3.25–3.5 nH, with the reasoning that mutual coupling between same-direction adjacent wires increases the inductance (end wires one neighbor, inner wires two). The exact network solution (loop 2.0 nH) is also acceptable if derived. +1: each wire treated as having two neighbors ((L + 2M)/4 = 2 nH per connection, 4 nH loop), or a single arithmetic slip. 0: correct method with a larger numerical error. -2 (asserted as fact): mutual inductance ignored (1 nH per connection) or subtracted for same-direction currents (e.g., (L − M)/4), or the four wires added in series.
