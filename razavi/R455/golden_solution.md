# Golden Solution - R455

## Reference answer

$A_2 = g_{m5}(r_{O5}\|r_{O6}) \approx 26.7$ (inverting).

- $g_{m5} = 2I_D/V_{OD5} = 2(1\ \mathrm{mA})/0.25\ \mathrm{V} = 8$ mS.
- $r_{O5} = 1/(0.1 \times 1\ \mathrm{mA}) = 10$ kΩ, $r_{O6} = 1/(0.2 \times 1\ \mathrm{mA}) = 5$ kΩ → 3.33 kΩ.
- $A_2 = 8\ \mathrm{mS} \times 3.33\ \mathrm{k\Omega} = 26.7$ (equivalently $2/[V_{OD}(\lambda_n + \lambda_p)]$).

## Grading notes

+2: ≈ 26.7 (±3%), as $g_{m5}(r_{O5}\|r_{O6})$. +1: right expression with a small slip. 0: right method but $g_m$ or $r_O$ off by a slip changing the result by >10%. -2 (asserted as fact): $r_{O5}$ or $r_{O6}$ alone used, λ values swapped, or $g_{m6}$ added to $g_{m5}$ (M6 is a current source with fixed gate).
