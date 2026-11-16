# Golden Solution - A239

## Reference answer

$v_{OUT}$ ≈ 0.25 V (0.2515 V); M2 is off and M1 supplies ≈ 0.50 mA to the load.

- Gates: M1 at 1.2 V, M2 at −0.2 V. Try M2 off (it needs $v_{OUT} > -0.2 + 0.5$ = 0.3 V to conduct).
- M1 saturated: $2.5\ \mathrm{mA/V^2}(1.2 - v_{OUT} - 0.5)^2 = v_{OUT}/500\ \Omega$ → $1.25(0.7-v)^2 = v$ → $v = [2.75-\sqrt{4.5}]/2.5$ = 0.2515 V.
- Checks: $v_{OUT}$ = 0.25 V < 0.3 V, so M2 is indeed off; $V_{DS1}$ = 1.25 V > $V_{GS1}-V_{TN}$ = 0.45 V, so M1 is saturated. The large-signal gain here is only ≈ 0.5, as the small-signal analysis predicts.

## Grading notes

+2: 0.24–0.26 V with M2 shown to be off. +1: ≈ 0.25 V with the M2 check missing. 0: correct setup with an algebra slip. −2 (asserted as fact): 0.5 V (unity gain assumed), both devices assumed conducting with a resulting wrong value, or the 0.7-V batteries ignored.
