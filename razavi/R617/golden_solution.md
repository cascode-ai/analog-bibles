# Golden Solution - R617

## Reference answer

About 0.42–0.43 V peak differential (≈ 0.85 V peak-to-peak).
- Width: $\sqrt{WL} \ge 9/5 = 1.8\ \mu$m → $W = 3.24/0.5 = 6.48\ \mu$m, $W/L = 12.96$.
- Equilibrium overdrive ($I_D$ = 0.5 mA each): $V_{GS}-V_{TH} = \sqrt{2(0.5\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2}\times12.96)} = 0.759$ V.
- For a symmetric pair the third harmonic dominates: THD ≈ HD3 ≈ $V_m^2/[32(V_{GS}-V_{TH})^2] = 0.01$ → $V_m = \sqrt{0.32}\times0.759 = 0.43$ V. Including the compression of the fundamental and the higher harmonics of the exact square-law characteristic gives 0.418 V. (The pair's full input range, $\sqrt2V_{ov}$ ≈ 1.07 V, is not reached.)

## Grading notes

+2: $V_m$ ≈ 0.42–0.43 V peak (accept 0.40–0.45 V, or ≈ 0.85 V peak-to-peak if labelled), from W ≈ 6.5 μm, $V_{ov}$ ≈ 0.76 V and HD3 ≈ $V_m^2/(32V_{ov}^2)$. +1: correct method with the width or overdrive slightly off (result within ±10%). 0: right method with a slip that moves the result by more than 10%, or THD taken as a power ratio (giving ≈ 1.36 V) when the question defines it as an amplitude ratio, with otherwise sound work. -2 (asserted as fact): a second harmonic used for the symmetric pair, HD3 $= V_m^2/(8V_{ov}^2)$ or another wrong formula, or the width taken from a different units reading (e.g., W ≈ 0.065 μm, overdrive of several volts) and the resulting swing presented as the answer.
