# Golden Solution - R436

## Reference answer

Overall gain ≈ 34.5 × 13.1 ≈ 450. Each output can swing from $V_{OD7} \approx 0.27$ V to $V_{DD} - |V_{OD5}| \approx 2.49$ V, i.e. ≈ 2.2 V p-p per output and ≈ 4.4 V p-p differential.

- First stage (0.5 mA per side): $g_{m1} = \sqrt{2(134\ \mu)(200)(0.5\ \mathrm{m})} = 5.18$ mS, $r_{O1} = 20$ kΩ, $r_{O3} = 10$ kΩ → $A_1 = g_{m1}(r_{O1}\|r_{O3}) = 5.18\ \mathrm{mS} \times 6.67\ \mathrm{k\Omega} = 34.5$.
- Second stage (1 mA per side): $g_{m5} = \sqrt{2(38.4\ \mu)(200)(1\ \mathrm{m})} = 3.92$ mS, $r_{O5} = 1/(0.2 \times 1\ \mathrm{mA}) = 5$ kΩ, $r_{O7} = 1/(0.1 \times 1\ \mathrm{mA}) = 10$ kΩ → $A_2 = 3.92\ \mathrm{mS} \times 3.33\ \mathrm{k\Omega} = 13.1$.
- $A_v = A_1A_2 \approx 451$.
- Swing: $V_{OD7} = \sqrt{2(1\ \mathrm{m})/(134\ \mu \cdot 200)} = 0.273$ V; $|V_{OD5}| = 0.510$ V → 0.273 V to 2.490 V = 2.22 V p-p per output, 4.43 V p-p differential.

## Grading notes

+2: gain ≈ 450 (±5%) as the product of $g_{m1}(r_{O1}\|r_{O3})$ and $g_{m5}(r_{O5}\|r_{O7})$, and the swing ≈ 0.27 V to ≈ 2.49 V (≈ 2.2 V p-p per output or ≈ 4.4 V p-p differential, either stated clearly). +1: one of the two results with a small slip, or swing given only per output without noting the differential value when the answer clearly labels it. 0: method right with a slip that changes the gain by more than ~15% (e.g., W/L = 100 giving ≈ 225), or only one of the two quantities answered. -2 (asserted as fact): gain computed for one stage only, a stage gain using $r_O$ of only one device, swing limits written with $V_{GS}$ instead of overdrive (e.g., up to $V_{DD} - |V_{GS5}|$), or λ values swapped.
