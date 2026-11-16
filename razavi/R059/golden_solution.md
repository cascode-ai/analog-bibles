# Golden Solution - R059

## Reference answer

$\Delta V_{GS} \approx 90$ mV per decade; $g_m \approx 0.26$ mS (256 µS).
- $I_2/I_1 = \exp(\Delta V_{GS}/\zeta V_T) = 10$, so $\Delta V_{GS} = \zeta V_T\ln 10 = 1.5 \times 26\ \mathrm{mV} \times 2.303 \approx 89.8$ mV (86 mV with $V_T$ = 25 mV).
- $g_m = \partial I_D/\partial V_{GS} = I_D/(\zeta V_T) = 10\ \mu\mathrm{A}/(1.5 \times 26\ \mathrm{mV}) \approx 256\ \mu$S (≈ 1/3.9 kΩ; 267 µS with $V_T$ = 25 mV).

## Grading notes

Two parts, equal weight. Accept $V_T$ between 25 and 26 mV: $\Delta V_{GS}$ 86–90 mV, $g_m$ 256–267 µS (±3% beyond that). +2: both right. 0: one right, the other wrong. -2 (asserted as fact): ζ omitted or inverted (e.g., 60 mV/decade or 40 mV), $\ln 10$ omitted (39 mV), or a square-law $g_m$ used.
