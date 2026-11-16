# Golden Solution - R701

## Reference answer

$h = 3\ \mu$m: $W \approx 8.2\ \mu$m ($W/h \approx 2.75$). $h = 5\ \mu$m: $W \approx 12.9\ \mu$m ($W/h \approx 2.59$).

- Set the parallel-plate term equal to the fringe terms, with $x = W/h$: $x = 0.77 + 1.06x^{0.25} + 1.06\sqrt{t/h}$.
- $h = 3\ \mu$m: $1.06\sqrt{1/3} = 0.612$, so $x = 1.382 + 1.06x^{0.25}$. Iterating gives $x = 2.747$ and $W = 8.24\ \mu$m.
- $h = 5\ \mu$m: $1.06\sqrt{1/5} = 0.474$, so $x = 1.244 + 1.06x^{0.25}$, giving $x = 2.589$ and $W = 12.94\ \mu$m.
- For narrower wires the fringe component dominates. With a thicker dielectric, the crossover ratio $W/h$ drops slightly (the $t/h$ term shrinks), but the absolute width rises roughly in proportion to $h$.

## Grading notes

+2: both widths correct within ±3% (≈ 8.2 µm and ≈ 12.9 µm), from equating $W/h$ with $0.77 + 1.06(W/h)^{0.25} + 1.06(t/h)^{0.5}$. Half the credit for each case.
+1: one case correct and the other with an arithmetic slip; or both right as $W/h$ ratios but converted to $W$ with a minor slip.
0: correct equation set up but not solved, or only one case attempted.
-2 (asserted as fact): a wrong split of the terms (e.g., the 0.77 constant or the $(W/h)^{0.25}$ term counted as parallel-plate), giving clearly different widths, or a value off by a factor of $h$.
