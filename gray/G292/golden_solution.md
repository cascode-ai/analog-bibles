# Golden Solution - G292

## Reference answer

$A_0 = 200$: PM ≈ 36°; $A_0 = 100$: PM ≈ 23°.

- $A_0 = 200$: $T_0 = 199$; $|T| = 1$ at ≈ 249 kHz; phase $= -89.5° - 51.2° - 3.6° = -144.3°$ → PM ≈ 35.7°.
- $A_0 = 100$: $T_0 = 399$; $|T| = 1$ at ≈ 374 kHz; phase $= -89.7° - 61.9° - 5.3° = -156.9°$ → PM ≈ 23.1°.
- Trend: more feedback (smaller closed-loop gain) pushes the crossover toward and past the 200-kHz pole and the margin falls. (Using the −40 dB/dec asymptote above 200 kHz, crossovers ≈ 282 kHz and 400 kHz give PM ≈ 31° and 21°.)

## Grading notes

+2: both values within ±4° of 36° and 23°, with crossover frequencies of the right order (≈ 250 kHz and ≈ 375 kHz). +1: both values from the asymptotic method (≈ 31° and ≈ 21°) with reasoning shown, or one value exact and the other slightly off. 0: only one of the two cases right. −2 (asserted as fact): phase margins that increase as $A_0$ decreases, or margins computed from the open-loop gain without the feedback factor.
