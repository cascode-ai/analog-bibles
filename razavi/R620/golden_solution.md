# Golden Solution - R620

## Reference answer

$W/L \approx 29.9$ and $WL = 3.24\ \mu\mathrm{m^2}$, giving $W \approx 9.8\ \mu$m and $L \approx 0.33\ \mu$m (effective).
- Current mismatch from threshold mismatch only: $\Delta I_D/I_D = 2\Delta V_{TH}/(V_{GS}-V_{TH})$ → $\Delta V_{TH} = 0.02\times0.5/2 = 5$ mV.
- Area: $9/\sqrt{WL} = 5$ → $\sqrt{WL} = 1.8\ \mu$m, $WL = 3.24\ \mu\mathrm{m^2}$.
- Aspect ratio: $W/L = 2I_D/[\mu_nC_{ox}(V_{GS}-V_{TH})^2] = 1\ \mathrm{mA}/(134\ \mu\mathrm{A/V^2}\times0.25\ \mathrm{V^2}) = 29.85$.
- $L = \sqrt{3.24/29.85} = 0.329\ \mu$m, $W = 29.85\times0.329 = 9.83\ \mu$m. Treating 2% as an upper bound, any larger area with the same W/L also works (e.g., L = 0.5 μm, W = 14.9 μm gives 1.3%).

## Grading notes

+2: $\Delta V_{TH}$ = 5 mV from $\Delta I/I = 2\Delta V_{TH}/V_{ov}$, $W/L$ ≈ 29.9 and $WL$ = 3.24 μm², hence W ≈ 9.8 μm, L ≈ 0.33 μm (±5%); a design that keeps W/L ≈ 29.9 with a larger area (e.g., L = 0.5 μm, W ≈ 14.9 μm), justified as meeting the ≤ 2% bound, also earns +2. +1: correct W/L and area with a slip in the final dimensions. 0: W/L correct but the area wrong through a slip, or the area correct and W/L wrong through a slip. -2 (asserted as fact): $\Delta I/I = \Delta V_{TH}/V_{ov}$ (missing the 2, giving 10 mV and WL = 0.81 μm²), a units reading giving L ≈ 0.03 μm, or W/L computed without the 1/2 of the square law.
